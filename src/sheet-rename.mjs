// Pure planning helper for renaming a tool's Tool ID in place across
// Google Sheets tabs. Kept free of imports (like sheet-prune.mjs) so it
// stays unit-testable without pulling in any API client.

import { columnLetter, readTab, TOOL_ID_REFERENCE_TABS } from './sheets-tab.mjs';

// Given a sheet range's current values (row 0 = header) and a 0-based
// column index holding Tool IDs, returns the rows whose ID is `oldId`
// (as indices within `existingValues`, >= 1) and whether some other row
// already holds `newId` — a conflict, since renaming into it would leave
// two rows sharing one key.
function planToolIdRename(existingValues, col, oldId, newId) {
  const rows = [];
  let conflict = false;
  for (let row = 1; row < existingValues.length; row++) {
    const key = existingValues[row][col];
    if (key === oldId) rows.push(row);
    else if (key === newId) conflict = true;
  }
  return { rows, conflict };
}

// Turns one tab's current contents into the A1 cell writes that rename
// `oldId` to `newId` in place, leaving every other column on the row alone.
// `tab` is { headerRow, values } as returned by readTab. `matchColumn` is a
// header name (resolved against the header row) or a literal 0-based column
// index, mirroring pruneStaleRows. Returns `skip` — a human-readable reason
// — instead of writes when the rename can't or needn't be applied.
function planTabRename(title, tab, matchColumn, oldId, newId) {
  const { headerRow, values } = tab;
  if (values.length === 0) return { writes: [], skip: `${title}: tab is empty` };

  const col = typeof matchColumn === 'number' ? matchColumn : values[0].indexOf(matchColumn);
  if (col === -1) return { writes: [], skip: `${title}: column "${matchColumn}" not found` };

  const { rows, conflict } = planToolIdRename(values, col, oldId, newId);
  // Renaming into an ID another row already uses would leave two rows sharing
  // one key; leave it for the regular sync to reconcile.
  if (conflict) return { writes: [], skip: `${title}: a row already holds "${newId}"` };
  if (rows.length === 0) return { writes: [], skip: `${title}: no row holds "${oldId}"` };

  const writes = rows.map((row) => ({
    range: `${title}!${columnLetter(col)}${row + headerRow}`,
    values: [[newId]],
  }));
  return { writes, skip: null };
}

// The tabs a rename has to touch, as [title, matchColumn] pairs: the Tools
// tab keys off its labeled "Tool ID" column, while the reference tabs keep
// Tool IDs in column A (see TOOL_ID_REFERENCE_TABS).
const RENAME_TABS = [['Tools', 'Tool ID'], ...TOOL_ID_REFERENCE_TABS.map((title) => [title, 0])];

// Rewrites a tool's ID from `oldId` to `newId` across every tab that tracks
// it, editing only the ID cell so hand-entered values elsewhere on the row
// survive. Without this, the next sync-sheets run sees the new ID as unknown,
// appends a fresh row, and prunes the old one — losing that row's data.
// Tabs that can't be renamed are reported and skipped, never failed on.
async function renameToolIdInSheets(sheets, oldId, newId) {
  const data = [];
  for (const [title, matchColumn] of RENAME_TABS) {
    const tab = await readTab(sheets, title);
    if (tab === null) {
      console.warn(`${title}: sheet tab not found, skipping rename`);
      continue;
    }
    const { writes, skip } = planTabRename(title, tab, matchColumn, oldId, newId);
    if (skip) {
      console.warn(`${skip} — skipping rename`);
      continue;
    }
    data.push(...writes);
  }

  if (data.length === 0) {
    console.log(`No sheet rows hold Tool ID "${oldId}" — nothing to rename`);
    return;
  }

  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    requestBody: { valueInputOption: 'RAW', data },
  });
  console.log(`Renamed Tool ID "${oldId}" to "${newId}" in ${data.length} cell(s)`);
}

async function main() {
  const [oldId, newId] = process.argv.slice(2);
  if (!oldId || !newId) {
    console.error('Usage: node src/sheet-rename.mjs <oldToolId> <newToolId>');
    process.exit(1);
  }
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY || !process.env.GOOGLE_SHEET_ID) {
    console.warn('GOOGLE_SERVICE_ACCOUNT_KEY / GOOGLE_SHEET_ID not set — skipping sheet update');
    return;
  }

  // Imported lazily so the unit tests can load this module without pulling in
  // the (large) googleapis package, which only main() needs for auth.
  const { google } = await import('googleapis');
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  await renameToolIdInSheets(google.sheets({ version: 'v4', auth }), oldId, newId);
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main();
}

export { planToolIdRename, planTabRename, renameToolIdInSheets };
