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
    'Published': item.published ? 'TRUE' : '',
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

// Maps a GitBook org member to its MEMBERS_HEADER column values, keyed by header name.
function memberValues(member) {
  return {
    'Email': member.user?.email || '',
    'Role': member.role || '',
    'Last seen at': member.lastSeenAt || '',
    'Joined at': member.joinedAt || '',
  };
}

// Plans how to sync `items` into a sheet without clearing it: existing rows
// are matched on `matchColumn` (via `matchValue(item)`) and have their
// `header` columns updated in place (any other columns are left untouched),
// and items with no matching row are appended. `existingValues` is the
// sheet's current values (row 0 is the header), as returned by
// spreadsheets.values.get. `rowValues(item)` returns {headerName: value} for
// the managed columns.
function planSheetSync(existingValues, header, items, matchColumn, rowValues, matchValue) {
  const newHeader = existingValues[0] ? [...existingValues[0]] : [];
  let headerChanged = false;
  for (const name of header) {
    if (!newHeader.includes(name)) {
      newHeader.push(name);
      headerChanged = true;
    }
  }

  const matchCol = newHeader.indexOf(matchColumn);
  const rowByKey = new Map();
  for (let row = 1; row < existingValues.length; row++) {
    const key = existingValues[row][matchCol];
    if (key) rowByKey.set(key, row);
  }

  const cellUpdates = [];
  const appendRows = [];
  for (const item of items) {
    const values = rowValues(item);
    const row = rowByKey.get(matchValue(item));
    if (row !== undefined) {
      for (const name of header) {
        cellUpdates.push({ row, col: newHeader.indexOf(name), value: values[name] });
      }
    } else {
      const newRow = new Array(newHeader.length).fill('');
      for (const name of header) {
        newRow[newHeader.indexOf(name)] = values[name];
      }
      appendRows.push(newRow);
    }
  }

  return { header: newHeader, headerChanged, cellUpdates, appendRows };
}

// Converts a 0-based column index to its A1 letter(s), e.g. 0 -> 'A', 26 -> 'AA'.
function columnLetter(index) {
  let letters = '';
  for (let n = index; n >= 0; n = Math.floor(n / 26) - 1) {
    letters = String.fromCharCode(65 + (n % 26)) + letters;
  }
  return letters;
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

// Applies a plan from planSheetSync to the given sheet tab: writes the header
// (only if it changed), updates matched rows' cells, and appends new rows.
// Never clears the sheet.
async function applySheetSync(sheets, title, plan) {
  const { header, headerChanged, cellUpdates, appendRows } = plan;

  if (headerChanged) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${title}!A1`,
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
          range: `${title}!${columnLetter(col)}${row + 1}`,
          values: [[value]],
        })),
      },
    });
  }

  if (appendRows.length > 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${title}!A1`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: appendRows },
    });
  }

  const updatedRows = new Set(cellUpdates.map((update) => update.row)).size;
  console.log(`${title}: updated ${updatedRows} row(s), appended ${appendRows.length} row(s)`);
}

// Syncs `items` into `title`'s sheet tab in place, matching existing rows on
// `matchColumn` via `matchValue(item)` and updating `header`'s columns
// (via `rowValues(item)`). Unmatched items are appended; the sheet is never
// cleared and any other columns are left untouched.
async function syncSheet(sheets, title, header, items, matchColumn, rowValues, matchValue) {
  await ensureSheetExists(sheets, title);

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: title,
  });
  const existingValues = existing.data.values || [];

  const plan = planSheetSync(existingValues, header, items, matchColumn, rowValues, matchValue);
  await applySheetSync(sheets, title, plan);
}

async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  await syncSheet(sheets, 'Tools', TOOLS_HEADER, toolsItems(), 'Tool ID', toolValues, (item) => item.toolId);
  await syncSheet(sheets, 'Members', MEMBERS_HEADER, await fetchMembers(), 'Email', memberValues, (member) => member.user?.email || '');
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main();
}

export { planSheetSync, toolsItems, toolValues, memberValues };
