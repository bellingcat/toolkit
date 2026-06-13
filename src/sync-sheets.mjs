import { google } from 'googleapis';
import projectFields from './ghproject-fields.mjs';
const { getProjectItems } = projectFields;
import pkg from './tools.mjs';
const { fetchMembers } = pkg;

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

const TOOLS_HEADER = ['Title', 'Published', 'Last updated', 'Collection', 'Tool Space', 'Latest change request', 'Status', 'Date submitted', 'CR Author', 'CR Reviewers', 'Tool ID', 'Space ID'];
const MEMBERS_HEADER = ['Email', 'Role', 'Last seen at', 'Joined at'];

// Project items that correspond to a tool (i.e. have a Tool ID).
function toolsItems() {
  return getProjectItems().filter((item) => {
    if (!item.toolId) {
      console.error('No tool ID for item', item.title);
      return false;
    }
    return true;
  });
}

// Maps a project item to its TOOLS_HEADER column values, keyed by header name.
function toolValues(item) {
  return {
    'Title': item.title || '',
    'Published': item.published || '',
    'Last updated': item.updatedAt || '',
    'Collection': item.collection || '',
    'Tool Space': item.spaceUrl || '',
    'Latest change request': item.url || '',
    'Status': item.status || '',
    'Date submitted': item.submittedAt || '',
    'CR Author': item.changeRequestAuthor || '',
    'CR Reviewers': item.reviewers || '',
    'Tool ID': item.toolId || '',
    'Space ID': item.spaceId || '',
  };
}

// Plans how to sync `items` into the Tools sheet without clearing it: existing
// rows are matched by Tool ID and have their TOOLS_HEADER columns updated in
// place (any other columns are left untouched), and items with no matching
// row are appended. `existingValues` is the sheet's current values (row 0 is
// the header), as returned by spreadsheets.values.get.
function planToolsSync(existingValues, items) {
  const header = existingValues[0] ? [...existingValues[0]] : [];
  let headerChanged = false;
  for (const name of TOOLS_HEADER) {
    if (!header.includes(name)) {
      header.push(name);
      headerChanged = true;
    }
  }

  const toolIdCol = header.indexOf('Tool ID');
  const rowByToolId = new Map();
  for (let row = 1; row < existingValues.length; row++) {
    const toolId = existingValues[row][toolIdCol];
    if (toolId) rowByToolId.set(toolId, row);
  }

  const cellUpdates = [];
  const appendRows = [];
  for (const item of items) {
    const values = toolValues(item);
    const row = rowByToolId.get(item.toolId);
    if (row !== undefined) {
      for (const name of TOOLS_HEADER) {
        cellUpdates.push({ row, col: header.indexOf(name), value: values[name] });
      }
    } else {
      const newRow = new Array(header.length).fill('');
      for (const name of TOOLS_HEADER) {
        newRow[header.indexOf(name)] = values[name];
      }
      appendRows.push(newRow);
    }
  }

  return { header, headerChanged, cellUpdates, appendRows };
}

// Converts a 0-based column index to its A1 letter(s), e.g. 0 -> 'A', 26 -> 'AA'.
function columnLetter(index) {
  let letters = '';
  for (let n = index; n >= 0; n = Math.floor(n / 26) - 1) {
    letters = String.fromCharCode(65 + (n % 26)) + letters;
  }
  return letters;
}

// Order must match MEMBERS_HEADER.
async function membersRows() {
  const members = await fetchMembers();
  return members.map((member) => [
    member.user?.email || '',
    member.role || '',
    member.lastSeenAt || '',
    member.joinedAt || '',
  ]);
}

async function ensureSheetExists(sheets, title) {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const exists = spreadsheet.data.sheets.some((sheet) => sheet.properties.title === title);
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: { requests: [{ addSheet: { properties: { title } } }] },
    });
    console.log(`Created sheet tab "${title}"`);
  }
}

async function writeSheet(sheets, title, header, rows) {
  await ensureSheetExists(sheets, title);

  await sheets.spreadsheets.values.clear({
    spreadsheetId: SPREADSHEET_ID,
    range: title,
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: `${title}!A1`,
    valueInputOption: 'RAW',
    requestBody: { values: [header, ...rows] },
  });

  console.log(`Wrote ${rows.length} rows to "${title}"`);
}

// Syncs project items into the Tools sheet in place: existing rows are
// matched by Tool ID and updated, unmatched items are appended, and the
// sheet is never cleared.
async function syncToolsSheet(sheets) {
  await ensureSheetExists(sheets, 'Tools');

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Tools',
  });
  const existingValues = existing.data.values || [];

  const { header, headerChanged, cellUpdates, appendRows } = planToolsSync(existingValues, toolsItems());

  if (headerChanged) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Tools!A1',
      valueInputOption: 'RAW',
      requestBody: { values: [header] },
    });
  }

  if (cellUpdates.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        valueInputOption: 'RAW',
        data: cellUpdates.map(({ row, col, value }) => ({
          range: `Tools!${columnLetter(col)}${row + 1}`,
          values: [[value]],
        })),
      },
    });
  }

  if (appendRows.length > 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Tools!A1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: appendRows },
    });
  }

  console.log(`Tools: updated ${cellUpdates.length / TOOLS_HEADER.length} row(s), appended ${appendRows.length} row(s)`);
}

async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  await syncToolsSheet(sheets);
  await writeSheet(sheets, 'Members', MEMBERS_HEADER, await membersRows());
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main();
}

export { planToolsSync, toolsItems, toolValues, membersRows };
