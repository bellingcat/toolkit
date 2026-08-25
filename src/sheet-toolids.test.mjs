import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  planToolIdReferences,
  syncToolIdReferences,
  pruneStaleRows,
  syncToolColumns,
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
// the whole tab and the header sits on row 1. `tabs` is served for any
// spreadsheet not named in `tabsBySpreadsheet`, which lets one stub back two
// different documents.
function stubSheets(tabs, tabsBySpreadsheet = null) {
  const valueWrites = [];
  const batchUpdates = [];
  const reads = [];
  const tabsFor = (id) => (tabsBySpreadsheet && tabsBySpreadsheet[id]) || tabs;
  return {
    valueWrites,
    batchUpdates,
    reads,
    spreadsheets: {
      get: async ({ spreadsheetId }) => {
        reads.push(spreadsheetId);
        return {
          data: {
            sheets: Object.keys(tabsFor(spreadsheetId)).map((title) => ({
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
          return { data: { values: tabsFor(spreadsheetId)[unquote(range.split('!')[0])] } };
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

// --- syncToolColumns ---

const PRIMARY_ID = 'primary-sheet';
const SOURCE_TAB = 'Overview';
const COLUMNS = ['Category', 'Tool Name', 'Published', 'Last Updated', 'Maintainer'];
const TYPED = ['Published', 'Last Updated'];

const SOURCE = { spreadsheetId: PRIMARY_ID, title: SOURCE_TAB };
const DEST = { spreadsheetId: MAINT_ID, title: MAINT_TAB };

const overview = (rows) => ({
  [SOURCE_TAB]: [
    ['Tool ID', 'Category', 'Tool Name', 'Published', 'Last Updated', 'Maintainer'],
    ...rows,
  ],
});

// The maintainer tab's own headers are deliberately meaningless: the sync
// must not read them.
const maintRows = (rows) => ({
  [MAINT_TAB]: [['Tool ID', '', '', '', '', ''], ...rows],
});

const sync = (sheets) => syncToolColumns(sheets, SOURCE, DEST, COLUMNS, TYPED);

test('syncToolColumns: writes source values positionally into columns B-F', async () => {
  const sheets = stubSheets(
    maintRows([['alpha', '', '', '', '', '']]),
    { [PRIMARY_ID]: overview([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'Kai']]) },
  );
  await sync(sheets);

  assert.equal(sheets.valueWrites.length, 2);

  const raw = sheets.valueWrites.find((w) => w.requestBody.valueInputOption === 'RAW');
  assert.equal(raw.spreadsheetId, MAINT_ID);
  assert.deepEqual(raw.requestBody.data, [
    { range: `'${MAINT_TAB}'!B2`, values: [['Maps']] },
    { range: `'${MAINT_TAB}'!C2`, values: [['Alpha Tool']] },
    { range: `'${MAINT_TAB}'!F2`, values: [['Kai']] },
  ]);

  const typed = sheets.valueWrites.find((w) => w.requestBody.valueInputOption === 'USER_ENTERED');
  assert.equal(typed.spreadsheetId, MAINT_ID);
  assert.deepEqual(typed.requestBody.data, [
    { range: `'${MAINT_TAB}'!D2`, values: [['TRUE']] },
    { range: `'${MAINT_TAB}'!E2`, values: [['2026-01-15']] },
  ]);
});

test('syncToolColumns: reads the source spreadsheet and writes only to the destination', async () => {
  const sheets = stubSheets(
    maintRows([['alpha', '', '', '', '', '']]),
    { [PRIMARY_ID]: overview([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'Kai']]) },
  );
  await sync(sheets);

  assert.deepEqual([...new Set(sheets.reads)].sort(), [MAINT_ID, PRIMARY_ID].sort());
  for (const write of sheets.valueWrites) assert.equal(write.spreadsheetId, MAINT_ID);
});

test('syncToolColumns: writes only the cells whose value changed', async () => {
  const sheets = stubSheets(
    maintRows([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'someone else']]),
    { [PRIMARY_ID]: overview([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'Kai']]) },
  );
  await sync(sheets);

  assert.equal(sheets.valueWrites.length, 1);
  assert.deepEqual(sheets.valueWrites[0].requestBody.data, [
    { range: `'${MAINT_TAB}'!F2`, values: [['Kai']] },
  ]);
});

test('syncToolColumns: writes nothing when every value already matches', async () => {
  const sheets = stubSheets(
    maintRows([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'Kai']]),
    { [PRIMARY_ID]: overview([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'Kai']]) },
  );
  await sync(sheets);

  assert.deepEqual(sheets.valueWrites, []);
});

// A renamed source header must not slide every later column one to the left.
test('syncToolColumns: skips a missing source column without shifting the others', async () => {
  const source = {
    [SOURCE_TAB]: [
      ['Tool ID', 'Category', 'Published', 'Last Updated', 'Maintainer'],
      ['alpha', 'Maps', 'TRUE', '2026-01-15', 'Kai'],
    ],
  };
  const sheets = stubSheets(
    maintRows([['alpha', '', '', '', '', '']]),
    { [PRIMARY_ID]: source },
  );
  await sync(sheets);

  const raw = sheets.valueWrites.find((w) => w.requestBody.valueInputOption === 'RAW');
  assert.deepEqual(raw.requestBody.data, [
    { range: `'${MAINT_TAB}'!B2`, values: [['Maps']] },
    { range: `'${MAINT_TAB}'!F2`, values: [['Kai']] },
  ]);

  const typed = sheets.valueWrites.find((w) => w.requestBody.valueInputOption === 'USER_ENTERED');
  assert.deepEqual(typed.requestBody.data, [
    { range: `'${MAINT_TAB}'!D2`, values: [['TRUE']] },
    { range: `'${MAINT_TAB}'!E2`, values: [['2026-01-15']] },
  ]);
});

test('syncToolColumns: leaves a destination row with no source match alone', async () => {
  const sheets = stubSheets(
    maintRows([['alpha', '', '', '', '', ''], ['orphan', 'keep', '', '', '', 'mine']]),
    { [PRIMARY_ID]: overview([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'Kai']]) },
  );
  await sync(sheets);

  const ranges = sheets.valueWrites.flatMap((w) => w.requestBody.data.map((d) => d.range));
  assert.ok(ranges.every((r) => r.endsWith('2')), `row 3 was touched: ${ranges.join(', ')}`);
});

test('syncToolColumns: ignores destination rows with an empty Tool ID', async () => {
  const sheets = stubSheets(
    maintRows([['', '', '', '', '', ''], ['alpha', '', '', '', '', '']]),
    { [PRIMARY_ID]: overview([['alpha', 'Maps', 'Alpha Tool', 'TRUE', '2026-01-15', 'Kai']]) },
  );
  await sync(sheets);

  const ranges = sheets.valueWrites.flatMap((w) => w.requestBody.data.map((d) => d.range));
  assert.ok(ranges.every((r) => r.endsWith('3')), `an empty-ID row was written: ${ranges.join(', ')}`);
});

test('syncToolColumns: skips quietly when the source tab does not exist', async () => {
  const sheets = stubSheets(maintRows([['alpha', '', '', '', '', '']]), { [PRIMARY_ID]: { Other: [['x']] } });
  await sync(sheets);

  assert.deepEqual(sheets.valueWrites, []);
});

test('pruneStaleRows: ignores rows with an empty key', async () => {
  const sheets = stubSheets(maintTab([['Tool ID', 'Signups'], ['', '=X'], ['zulu', '=Y']]));
  await pruneStaleRows(sheets, MAINT_ID, MAINT_TAB, 0, new Set(['alpha']));

  assert.deepEqual(sheets.batchUpdates[0].requestBody.requests, [
    { deleteDimension: { range: { sheetId: 7, dimension: 'ROWS', startIndex: 2, endIndex: 3 } } },
  ]);
});
