import { google } from 'googleapis';
import projectFields from './ghproject-fields.mjs';
const { getProjectItems } = projectFields;
import pkg from './tools.mjs';
const { fetchMembers } = pkg;

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

const TOOLS_HEADER = ['Title', 'Published', 'Last updated', 'Collection', 'Tool Space', 'Latest change request', 'Status', 'Date submitted', 'CR Author', 'CR Reviewers', 'Tool ID', 'Space ID', 'Team ID', 'Team Members'];
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
    'Team ID': item.teamId || '',
    'Team Members': item.teamMembers || '',
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

// Plans which of `toolIds` are missing from column A of a reference tab and
// where to write them. `existingValues` is the tab's current values (row 0
// is the header; column A holds Tool IDs referenced by formulas in the other
// columns). Returns the missing IDs (in order) and the 0-indexed rows (within
// existingValues) of the first rows with an empty column A — one row per
// missing ID, up to however many empty rows are available.
function planToolIdReferences(existingValues, toolIds) {
  const present = new Set(existingValues.slice(1).map((row) => row[0]).filter(Boolean));
  const missing = toolIds.filter((id) => !present.has(id));

  const emptyRows = [];
  for (let row = 1; row < existingValues.length && emptyRows.length < missing.length; row++) {
    if (!existingValues[row][0]) emptyRows.push(row);
  }

  return { missing, emptyRows };
}

// Converts a 0-based column index to its A1 letter(s), e.g. 0 -> 'A', 26 -> 'AA'.
function columnLetter(index) {
  let letters = '';
  for (let n = index; n >= 0; n = Math.floor(n / 26) - 1) {
    letters = String.fromCharCode(65 + (n % 26)) + letters;
  }
  return letters;
}

// Returns { sheetId, table } for the named tab, or null if the tab doesn't exist.
// table is the first embedded Table's GridRange ({ startRowIndex, endRowIndex,
// startColumnIndex, endColumnIndex }, all 0-based, end exclusive), or null.
async function getSheetMeta(sheets, title) {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const sheet = spreadsheet.data.sheets?.find((s) => s.properties.title === title);
  if (!sheet) return null;
  return {
    sheetId: sheet.properties.sheetId,
    table: sheet.tables?.[0]?.range ?? null,
  };
}

// Ensures the named tab exists (creating it if necessary) and returns { sheetId, table }.
async function ensureSheetMeta(sheets, title) {
  const meta = await getSheetMeta(sheets, title);
  if (meta) return meta;

  const response = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: { requests: [{ addSheet: { properties: { title } } }] },
  });
  console.log(`Created sheet tab "${title}"`);
  return {
    sheetId: response.data.replies[0].addSheet.properties.sheetId,
    table: null,
  };
}

// Sorts the table's data rows (below the header) by the first column, ascending.
// All bounds are 0-based; endRowIndex and endColIndex are exclusive.
async function sortSheet(sheets, sheetId, startRowIndex, endRowIndex, endColIndex) {
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [{
        sortRange: {
          range: { sheetId, startRowIndex, startColumnIndex: 0, endRowIndex, endColumnIndex: endColIndex },
          sortSpecs: [{ dimensionIndex: 0, sortOrder: 'ASCENDING' }],
        },
      }],
    },
  });
}

// Applies a plan from planSheetSync to the given sheet tab: writes the header
// (only if it changed), updates matched rows' cells, and appends new rows.
// Never clears the sheet. `typedColumns` lists header names whose values
// should be written with valueInputOption 'USER_ENTERED' so Sheets parses
// them into real booleans/dates (e.g. "TRUE" or "2026-01-15") instead of
// storing them as forced text; all other columns are written as 'RAW'.
// `headerRow` is the 1-based sheet row where the table header lives (default 1).
// `existingRowCount` is the number of rows in existingValues (header + data) so
// new rows can be written directly to the correct position instead of using append.
async function applySheetSync(sheets, title, plan, typedColumns = [], headerRow = 1, existingRowCount = 1) {
  const { header, headerChanged, cellUpdates, appendRows } = plan;

  if (headerChanged) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${title}!A${headerRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: [header] },
    });
  }

  const typedCols = new Set(typedColumns.map((name) => header.indexOf(name)).filter((col) => col >= 0));

  for (const [valueInputOption, updates] of [
    ['RAW', cellUpdates.filter(({ col }) => !typedCols.has(col))],
    ['USER_ENTERED', cellUpdates.filter(({ col }) => typedCols.has(col))],
  ]) {
    if (updates.length > 0) {
      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          valueInputOption,
          // row is 1-based within existingValues (0 = header); map to sheet row via headerRow
          data: updates.map(({ row, col, value }) => ({
            range: `${title}!${columnLetter(col)}${row + headerRow}`,
            values: [[value]],
          })),
        },
      });
    }
  }

  if (appendRows.length > 0) {
    // Write directly to the first empty row after existing data; existingValues[0]
    // is the header at headerRow, so data rows occupy headerRow+1 .. headerRow+existingRowCount-1,
    // and the first empty slot is headerRow+existingRowCount.
    const appendStartRow = headerRow + existingRowCount;

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${title}!A${appendStartRow}`,
      valueInputOption: 'RAW',
      requestBody: { values: appendRows },
    });

    // Re-write typed columns with USER_ENTERED so Sheets parses them as booleans/dates.
    if (typedCols.size > 0) {
      const data = [];
      appendRows.forEach((rowValues, i) => {
        for (const col of typedCols) {
          data.push({
            range: `${title}!${columnLetter(col)}${appendStartRow + i}`,
            values: [[rowValues[col]]],
          });
        }
      });
      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { valueInputOption: 'USER_ENTERED', data },
      });
    }
  }

  const updatedRows = new Set(cellUpdates.map((update) => update.row)).size;
  console.log(`${title}: updated ${updatedRows} row(s), appended ${appendRows.length} row(s)`);
}

// Syncs `items` into `title`'s sheet tab in place, matching existing rows on
// `matchColumn` via `matchValue(item)` and updating `header`'s columns
// (via `rowValues(item)`). Unmatched items are appended; the sheet is never
// cleared and any other columns are left untouched. `typedColumns` lists
// header names to write as USER_ENTERED so Sheets recognizes booleans/dates.
// If any rows were appended, the sheet is re-sorted by its first column.
// If the sheet contains a Google Sheets Table, all operations are scoped to
// the table's range so that rows above the table are not disturbed.
async function syncSheet(sheets, title, header, items, matchColumn, rowValues, matchValue, typedColumns = []) {
  const { sheetId, table } = await ensureSheetMeta(sheets, title);
  const tableStart = table?.startRowIndex ?? 0;  // 0-based row of the table header
  const headerRow = tableStart + 1;              // 1-based sheet row of the table header

  // Read only the table's range when a Table exists; otherwise read the whole sheet.
  const readRange = table
    ? `${title}!${columnLetter(table.startColumnIndex)}${table.startRowIndex + 1}:${columnLetter(table.endColumnIndex - 1)}${table.endRowIndex}`
    : title;
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: readRange,
  });
  const existingValues = existing.data.values || [];

  const plan = planSheetSync(existingValues, header, items, matchColumn, rowValues, matchValue);
  await applySheetSync(sheets, title, plan, typedColumns, headerRow, existingValues.length);

  if (plan.appendRows.length > 0) {
    await sortSheet(
      sheets, sheetId,
      tableStart + 1,                                    // 0-based first data row (skip header)
      table?.endRowIndex ?? (tableStart + existingValues.length + plan.appendRows.length),
      table?.endColumnIndex ?? plan.header.length,
    );
  }
}

// Tabs (besides Tools) whose column A holds Tool IDs referenced by formulas
// in their other columns. Any Tool ID present in the Tools sheet but missing
// from a tab's column A is written into that tab's first rows with an empty
// column A; other columns (the formulas) are left untouched. Names may
// change in the future, so missing tabs are skipped with a warning.
const TOOL_ID_REFERENCE_TABS = ['Overview', 'Signup', 'Admin'];

// Adds any of `toolIds` missing from `title`'s column A into the first rows
// with an empty column A. Skips tabs that don't exist.
async function syncToolIdReferences(sheets, title, toolIds) {
  const meta = await getSheetMeta(sheets, title);
  if (meta === null) {
    console.warn(`${title}: sheet tab not found, skipping tool ID sync`);
    return;
  }

  const { sheetId, table } = meta;
  const tableStart = table?.startRowIndex ?? 0;  // 0-based row of the table header
  const headerRow = tableStart + 1;              // 1-based sheet row of the table header

  const readRange = table
    ? `${title}!${columnLetter(table.startColumnIndex)}${table.startRowIndex + 1}:${columnLetter(table.endColumnIndex - 1)}${table.endRowIndex}`
    : title;
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: readRange,
  });
  const existingValues = existing.data.values || [];

  const { missing, emptyRows } = planToolIdReferences(existingValues, toolIds);
  if (missing.length === 0) return;

  if (emptyRows.length < missing.length) {
    console.warn(`${title}: only ${emptyRows.length} empty row(s) for ${missing.length} new tool ID(s) — add more template rows`);
  }

  const data = missing.slice(0, emptyRows.length).map((id, i) => ({
    // emptyRows[i] is 1-based within existingValues (0 = header); map to sheet row via headerRow
    range: `${title}!A${emptyRows[i] + headerRow}`,
    values: [[id]],
  }));

  if (data.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: { valueInputOption: 'RAW', data },
    });
    console.log(`${title}: added ${data.length} tool ID(s)`);
    await sortSheet(
      sheets, sheetId,
      tableStart + 1,                                              // 0-based first data row
      table?.endRowIndex ?? (tableStart + existingValues.length),  // 0-based exclusive end row
      table?.endColumnIndex ?? (existingValues[0]?.length ?? 1),   // 0-based exclusive end column
    );
  }
}

// Columns written as USER_ENTERED so Sheets parses them into real booleans/dates.
const TOOLS_TYPED_COLUMNS = ['Published', 'Last updated', 'Date submitted'];
const MEMBERS_TYPED_COLUMNS = ['Last seen at', 'Joined at'];

async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  const tools = toolsItems();
  await syncSheet(sheets, 'Tools', TOOLS_HEADER, tools, 'Tool ID', toolValues, (item) => item.toolId, TOOLS_TYPED_COLUMNS);
  await syncSheet(sheets, 'Members', MEMBERS_HEADER, await fetchMembers(), 'Email', memberValues, (member) => member.user?.email || '', MEMBERS_TYPED_COLUMNS);

  const toolIds = tools.map((item) => item.toolId);
  for (const title of TOOL_ID_REFERENCE_TABS) {
    await syncToolIdReferences(sheets, title, toolIds);
  }
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main();
}

export { planSheetSync, planToolIdReferences, toolsItems, toolValues, memberValues };
