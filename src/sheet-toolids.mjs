// Google Sheets operations keyed on Tool IDs: adding missing IDs to a
// reference tab's column A, pruning rows whose ID no longer exists, and the
// low-level row sort/delete both rely on.
//
// Split out of sync-sheets.mjs (which transitively imports
// ghproject-fields.mjs, and so makes a live GitHub Project API call at module
// load) so these can be imported and tested against a stub Sheets client.
// Keep this module free of any GitHub Project import.
//
// Every function takes `spreadsheetId` explicitly rather than reading it from
// the environment: these run against both the primary toolkit spreadsheet and
// the separate maintenance spreadsheet, and silently defaulting to the wrong
// one would write tool data into the wrong document.

import { mergeRowRanges, planPruneRows } from './sheet-prune.mjs';
import { columnLetter, a1Tab, readTab } from './sheets-tab.mjs';

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

// Sorts the table's data rows (below the header) by the first column, ascending.
// All bounds are 0-based; endRowIndex and endColIndex are exclusive.
async function sortSheet(sheets, spreadsheetId, sheetId, startRowIndex, endRowIndex, endColIndex) {
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
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

// Deletes the given 0-based sheet row indices (dimension ROWS), which may
// be non-contiguous, via mergeRowRanges so contiguous runs become a single
// deleteDimension request and ranges are removed highest-index-first.
async function deleteSheetRows(sheets, spreadsheetId, sheetId, rowIndices) {
  const ranges = mergeRowRanges(rowIndices);
  if (ranges.length === 0) return;

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: ranges.map(({ startIndex, endIndex }) => ({
        deleteDimension: { range: { sheetId, dimension: 'ROWS', startIndex, endIndex } },
      })),
    },
  });
}

// Adds any of `toolIds` missing from `title`'s column A. Fills existing empty
// rows (which may carry pre-set formulas) first; if more are needed and the tab
// has a Table, inserts the remainder into the table with inheritFromBefore so
// formulas are copied from the row above. Skips tabs that don't exist.
async function syncToolIdReferences(sheets, spreadsheetId, title, toolIds) {
  const tab = await readTab(sheets, title, spreadsheetId);
  if (tab === null) {
    console.warn(`${title}: sheet tab not found, skipping tool ID sync`);
    return;
  }

  const { sheetId, table, headerRow, values: existingValues } = tab;
  const tableStart = table?.startRowIndex ?? 0;

  const { missing, emptyRows } = planToolIdReferences(existingValues, toolIds);
  if (missing.length === 0) return;

  // Insert any rows beyond what existing empty slots cover, within the table.
  const insertCount = Math.max(0, missing.length - emptyRows.length);
  let insertedStartRow = null;
  if (insertCount > 0 && table) {
    const insertAt = tableStart + Math.max(existingValues.length - 1, 1);
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{
          insertDimension: {
            range: { sheetId, dimension: 'ROWS', startIndex: insertAt, endIndex: insertAt + insertCount },
            inheritFromBefore: true,
          },
        }],
      },
    });
    insertedStartRow = insertAt + 1;  // 1-based sheet row of first inserted row
  } else if (insertCount > 0) {
    console.warn(`${title}: only ${emptyRows.length} empty row(s) for ${missing.length} new tool ID(s) — add more template rows`);
  }

  // Write IDs: existing empty rows first, then newly inserted rows.
  const data = [];
  for (let i = 0; i < missing.length; i++) {
    let sheetRow;
    if (i < emptyRows.length) {
      sheetRow = emptyRows[i] + headerRow;
    } else if (insertedStartRow !== null) {
      sheetRow = insertedStartRow + (i - emptyRows.length);
    } else {
      break;
    }
    data.push({ range: `${a1Tab(title)}!A${sheetRow}`, values: [[missing[i]]] });
  }

  if (data.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId,
      requestBody: { valueInputOption: 'RAW', data },
    });
    console.log(`${title}: added ${data.length} tool ID(s)`);
    await sortSheet(
      sheets, spreadsheetId, sheetId,
      tableStart + 1,
      tableStart + existingValues.length + insertCount,
      table?.endColumnIndex ?? (existingValues[0]?.length ?? 1),
    );
  }
}

// Deletes every row in `title` whose key (in `matchColumn`) is not in
// `validIds`. `matchColumn` is a header name (string, resolved against the
// header row) or a literal 0-based column index (number, for the reference
// tabs where column A isn't necessarily labeled). Always re-reads the sheet's
// current values rather than reusing any row position computed earlier in the
// run — safe to call after other sync steps (including sorts) have already
// moved rows around. Skips tabs that don't exist. No-ops quietly when there's
// nothing stale to remove.
async function pruneStaleRows(sheets, spreadsheetId, title, matchColumn, validIds) {
  const tab = await readTab(sheets, title, spreadsheetId);
  if (tab === null) {
    console.warn(`${title}: sheet tab not found, skipping stale-row prune`);
    return;
  }

  const { sheetId, headerRow, values: existingValues } = tab;
  if (existingValues.length === 0) return;

  const col = typeof matchColumn === 'number' ? matchColumn : existingValues[0].indexOf(matchColumn);
  if (col === -1) {
    console.warn(`${title}: column "${matchColumn}" not found, skipping stale-row prune`);
    return;
  }

  const stale = planPruneRows(existingValues, col, validIds);
  if (stale.length === 0) return;

  const sheetRowIndices = stale.map(({ row }) => row + headerRow - 1);
  await deleteSheetRows(sheets, spreadsheetId, sheetId, sheetRowIndices);
  console.log(`${title}: deleted ${stale.length} stale row(s) for Tool ID(s): ${stale.map((s) => s.key).join(', ')}`);
}

export { planToolIdReferences, sortSheet, deleteSheetRows, syncToolIdReferences, pruneStaleRows };
