// Shared Google Sheets tab plumbing used by sync-sheets.mjs and
// sheet-rename.mjs. Lives in its own module because sync-sheets.mjs
// transitively imports ghproject-fields.mjs, which calls the GitHub
// Project API at module load — anything importing it inherits that.

// Tabs (besides Tools) whose column A holds Tool IDs referenced by formulas
// in their other columns. Any Tool ID present in the Tools sheet but missing
// from a tab's column A is written into that tab's first rows with an empty
// column A; other columns (the formulas) are left untouched. Names may
// change in the future, so missing tabs are skipped with a warning.
const TOOL_ID_REFERENCE_TABS = ['Overview', 'Signup', 'Admin'];

// Converts a 0-based column index to its A1 letter(s), e.g. 0 -> 'A', 26 -> 'AA'.
function columnLetter(index) {
  let letters = '';
  for (let n = index; n >= 0; n = Math.floor(n / 26) - 1) {
    letters = String.fromCharCode(65 + (n % 26)) + letters;
  }
  return letters;
}

// Builds the A1 range to read for a tab: the table's range when the tab
// contains a Google Sheets Table (so rows outside it stay untouched), or
// the whole tab otherwise. `table` is a GridRange with 0-based bounds and
// exclusive ends, as returned by getSheetMeta.
function tabReadRange(title, table) {
  if (!table) return title;
  const start = `${columnLetter(table.startColumnIndex)}${table.startRowIndex + 1}`;
  const end = `${columnLetter(table.endColumnIndex - 1)}${table.endRowIndex}`;
  return `${title}!${start}:${end}`;
}

// Returns { sheetId, table } for the named tab, or null if the tab doesn't exist.
// table is the first embedded Table's GridRange ({ startRowIndex, endRowIndex,
// startColumnIndex, endColumnIndex }, all 0-based, end exclusive), or null.
async function getSheetMeta(sheets, title) {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: process.env.GOOGLE_SHEET_ID });
  const sheet = spreadsheet.data.sheets?.find((s) => s.properties.title === title);
  if (!sheet) return null;
  return {
    sheetId: sheet.properties.sheetId,
    table: sheet.tables?.[0]?.range ?? null,
  };
}

// Reads a tab's current values along with its metadata, scoped to the tab's
// Table when it has one. Returns null if the tab doesn't exist. `headerRow`
// is the 1-based sheet row of the header; `values` is row-major with row 0
// being that header.
async function readTab(sheets, title) {
  const meta = await getSheetMeta(sheets, title);
  if (meta === null) return null;

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: tabReadRange(title, meta.table),
  });

  return {
    ...meta,
    headerRow: (meta.table?.startRowIndex ?? 0) + 1,
    values: existing.data.values || [],
  };
}

export { columnLetter, tabReadRange, getSheetMeta, readTab, TOOL_ID_REFERENCE_TABS };
