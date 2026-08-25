import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  planToolIdReferences,
  syncToolIdReferences,
  pruneStaleRows,
} from './sheet-toolids.mjs';

// Deliberately different from the IDs passed explicitly below, so a function
// that fell back to the environment instead of using its argument would fail
// rather than quietly write to the wrong spreadsheet.
process.env.GOOGLE_SHEET_ID = 'primary-sheet';

const MAINT_TAB = 'Tools overview and sign-up for tools';
const MAINT_ID = 'maint-sheet';

// Strips A1 quoting from a tab title: 'Some tab' -> Some tab, with doubled
// inner quotes collapsed.
function unquote(title) {
  if (!title.startsWith("'")) return title;
  return title.slice(1, -1).replace(/''/g, "'");
}

// Minimal stand-in for the googleapis Sheets client, recording the
// spreadsheetId of every call. Tabs have no embedded Table, so readTab reads
// the whole tab and the header sits on row 1.
function stubSheets(tabs) {
  const valueWrites = [];
  const batchUpdates = [];
  const reads = [];
  return {
    valueWrites,
    batchUpdates,
    reads,
    spreadsheets: {
      get: async ({ spreadsheetId }) => {
        reads.push(spreadsheetId);
        return {
          data: {
            sheets: Object.keys(tabs).map((title) => ({
              properties: { title, sheetId: 7 },
              tables: [],
            })),
          },
        };
      },
      batchUpdate: async (req) => { batchUpdates.push(req); return {}; },
      values: {
        get: async ({ spreadsheetId, range }) => {
          reads.push(spreadsheetId);
          return { data: { values: tabs[unquote(range.split('!')[0])] } };
        },
        batchUpdate: async (req) => { valueWrites.push(req); return {}; },
      },
    },
  };
}

const maintTab = (rows) => ({ [MAINT_TAB]: rows });

test('planToolIdReferences: reports IDs not already in column A', () => {
  const values = [['Tool ID', 'Signups'], ['alpha', '=X'], ['bravo', '=X']];
  const { missing } = planToolIdReferences(values, ['alpha', 'charlie']);
  assert.deepEqual(missing, ['charlie']);
});

test('planToolIdReferences: finds empty column-A rows to fill', () => {
  const values = [['Tool ID', 'Signups'], ['alpha', '=X'], ['', '=X'], ['', '=X']];
  const { missing, emptyRows } = planToolIdReferences(values, ['alpha', 'bravo', 'charlie']);
  assert.deepEqual(missing, ['bravo', 'charlie']);
  assert.deepEqual(emptyRows, [2, 3]);
});

test('planToolIdReferences: caps empty rows at the number of missing IDs', () => {
  const values = [['Tool ID'], ['', ''], ['', ''], ['', '']];
  const { emptyRows } = planToolIdReferences(values, ['alpha']);
  assert.deepEqual(emptyRows, [1]);
});

test('syncToolIdReferences: writes to the spreadsheet it is given, quoting a spaced tab', async () => {
  const sheets = stubSheets(maintTab([['Tool ID', 'Signups'], ['alpha', '=X'], ['', '=X']]));
  await syncToolIdReferences(sheets, MAINT_ID, MAINT_TAB, ['alpha', 'bravo']);

  assert.equal(sheets.valueWrites.length, 1);
  const { spreadsheetId, requestBody } = sheets.valueWrites[0];
  assert.equal(spreadsheetId, MAINT_ID);
  assert.equal(requestBody.valueInputOption, 'RAW');
  assert.deepEqual(requestBody.data, [
    { range: `'${MAINT_TAB}'!A3`, values: [['bravo']] },
  ]);

  // Reads and the follow-up sort all target the same spreadsheet.
  assert.deepEqual([...new Set(sheets.reads)], [MAINT_ID]);
  assert.equal(sheets.batchUpdates[0].spreadsheetId, MAINT_ID);
  assert.ok(sheets.batchUpdates[0].requestBody.requests[0].sortRange);
});

test('syncToolIdReferences: writes nothing when every ID is already present', async () => {
  const sheets = stubSheets(maintTab([['Tool ID', 'Signups'], ['alpha', '=X']]));
  await syncToolIdReferences(sheets, MAINT_ID, MAINT_TAB, ['alpha']);

  assert.deepEqual(sheets.valueWrites, []);
  assert.deepEqual(sheets.batchUpdates, []);
});

test('syncToolIdReferences: fills only the empty rows available when the tab has no table', async () => {
  const sheets = stubSheets(maintTab([['Tool ID', 'Signups'], ['', '=X']]));
  await syncToolIdReferences(sheets, MAINT_ID, MAINT_TAB, ['bravo', 'charlie']);

  assert.deepEqual(sheets.valueWrites[0].requestBody.data, [
    { range: `'${MAINT_TAB}'!A2`, values: [['bravo']] },
  ]);
});

test('syncToolIdReferences: skips a tab that does not exist', async () => {
  const sheets = stubSheets({ Other: [['Tool ID']] });
  await syncToolIdReferences(sheets, MAINT_ID, MAINT_TAB, ['alpha']);

  assert.deepEqual(sheets.valueWrites, []);
  assert.deepEqual(sheets.batchUpdates, []);
});

test('pruneStaleRows: deletes stale rows from the spreadsheet it is given', async () => {
  const sheets = stubSheets(maintTab([['Tool ID', 'Signups'], ['alpha', '=X'], ['zulu', '=Y']]));
  await pruneStaleRows(sheets, MAINT_ID, MAINT_TAB, 0, new Set(['alpha']));

  assert.equal(sheets.batchUpdates.length, 1);
  const { spreadsheetId, requestBody } = sheets.batchUpdates[0];
  assert.equal(spreadsheetId, MAINT_ID);
  assert.deepEqual(requestBody.requests, [
    { deleteDimension: { range: { sheetId: 7, dimension: 'ROWS', startIndex: 2, endIndex: 3 } } },
  ]);
});

test('pruneStaleRows: leaves the tab alone when nothing is stale', async () => {
  const sheets = stubSheets(maintTab([['Tool ID', 'Signups'], ['alpha', '=X']]));
  await pruneStaleRows(sheets, MAINT_ID, MAINT_TAB, 0, new Set(['alpha']));

  assert.deepEqual(sheets.batchUpdates, []);
});

test('pruneStaleRows: ignores rows with an empty key', async () => {
  const sheets = stubSheets(maintTab([['Tool ID', 'Signups'], ['', '=X'], ['zulu', '=Y']]));
  await pruneStaleRows(sheets, MAINT_ID, MAINT_TAB, 0, new Set(['alpha']));

  assert.deepEqual(sheets.batchUpdates[0].requestBody.requests, [
    { deleteDimension: { range: { sheetId: 7, dimension: 'ROWS', startIndex: 2, endIndex: 3 } } },
  ]);
});
