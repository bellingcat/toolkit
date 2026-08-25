import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renameToolIdInSheets } from './sheet-rename.mjs';

process.env.GOOGLE_SHEET_ID = 'test-sheet';

const MAINT_ID = 'maint-sheet';
const MAINT_TAB = 'Tools overview and sign-up for tools';

// Strips A1 quoting from a tab title: 'Some tab' -> Some tab.
function unquote(title) {
  if (!title.startsWith("'")) return title;
  return title.slice(1, -1).replace(/''/g, "'");
}

// Minimal stand-in for the googleapis Sheets client. Tabs have no embedded
// Table, so readTab reads the whole tab and the header sits on row 1.
// `maintTabs`, when given, is served for the maintainer spreadsheet's ID so
// a rename spanning both documents can be exercised.
function stubSheets(tabs, maintTabs = null) {
  const batchUpdates = [];
  const tabsFor = (id) => (maintTabs && id === MAINT_ID ? maintTabs : tabs);
  return {
    batchUpdates,
    spreadsheets: {
      get: async ({ spreadsheetId }) => ({
        data: {
          sheets: Object.keys(tabsFor(spreadsheetId))
            .map((title) => ({ properties: { title, sheetId: 1 }, tables: [] })),
        },
      }),
      values: {
        get: async ({ spreadsheetId, range }) => ({
          data: { values: tabsFor(spreadsheetId)[unquote(range.split('!')[0])] },
        }),
        batchUpdate: async (req) => { batchUpdates.push(req); return {}; },
      },
    },
  };
}

const fullSheet = () => ({
  Tools: [['Title', 'Tool ID', 'Notes'], ['Alpha', 'alpha', 'keep me']],
  Overview: [['Tool ID', 'Views'], ['alpha', '=X']],
  Signup: [['Tool ID', 'Signups'], ['alpha', '=Y']],
  Admin: [['Tool ID', 'Maintainer'], ['alpha', 'someone']],
});

test('renameToolIdInSheets: rewrites the ID on all four tabs in one batch', async () => {
  const sheets = stubSheets(fullSheet());
  await renameToolIdInSheets(sheets, 'alpha', 'charlie');

  assert.equal(sheets.batchUpdates.length, 1);
  const { spreadsheetId, requestBody } = sheets.batchUpdates[0];
  assert.equal(spreadsheetId, 'test-sheet');
  assert.equal(requestBody.valueInputOption, 'RAW');
  assert.deepEqual(requestBody.data, [
    { range: 'Tools!B2', values: [['charlie']] },
    { range: 'Overview!A2', values: [['charlie']] },
    { range: 'Signup!A2', values: [['charlie']] },
    { range: 'Admin!A2', values: [['charlie']] },
  ]);
});

test('renameToolIdInSheets: renames the tabs it can when one tab lacks the ID', async () => {
  const tabs = fullSheet();
  tabs.Signup = [['Tool ID', 'Signups']];
  const sheets = stubSheets(tabs);
  await renameToolIdInSheets(sheets, 'alpha', 'charlie');

  const ranges = sheets.batchUpdates[0].requestBody.data.map((d) => d.range);
  assert.deepEqual(ranges, ['Tools!B2', 'Overview!A2', 'Admin!A2']);
});

test('renameToolIdInSheets: leaves a tab alone when the new ID is already there', async () => {
  const tabs = fullSheet();
  tabs.Admin = [['Tool ID', 'Maintainer'], ['alpha', 'someone'], ['charlie', 'other']];
  const sheets = stubSheets(tabs);
  await renameToolIdInSheets(sheets, 'alpha', 'charlie');

  const ranges = sheets.batchUpdates[0].requestBody.data.map((d) => d.range);
  assert.deepEqual(ranges, ['Tools!B2', 'Overview!A2', 'Signup!A2']);
});

test('renameToolIdInSheets: writes nothing when no tab holds the old ID', async () => {
  const sheets = stubSheets(fullSheet());
  await renameToolIdInSheets(sheets, 'zulu', 'charlie');
  assert.deepEqual(sheets.batchUpdates, []);
});

test('renameToolIdInSheets: skips a tab that does not exist', async () => {
  const tabs = fullSheet();
  delete tabs.Overview;
  const sheets = stubSheets(tabs);
  await renameToolIdInSheets(sheets, 'alpha', 'charlie');

  const ranges = sheets.batchUpdates[0].requestBody.data.map((d) => d.range);
  assert.deepEqual(ranges, ['Tools!B2', 'Signup!A2', 'Admin!A2']);
});

// Without this the maintainer sheet keeps the old ID, and the next
// sync-sheets run prunes that row — taking anything hand-entered on it.
test('renameToolIdInSheets: renames in the maintainer spreadsheet too', async () => {
  process.env.GOOGLE_SHEET_ID_MAINT = MAINT_ID;
  try {
    const sheets = stubSheets(fullSheet(), {
      [MAINT_TAB]: [['Tool ID', 'Signups'], ['alpha', '=X']],
    });
    await renameToolIdInSheets(sheets, 'alpha', 'charlie');

    assert.equal(sheets.batchUpdates.length, 2);
    assert.equal(sheets.batchUpdates[0].spreadsheetId, 'test-sheet');
    assert.equal(sheets.batchUpdates[1].spreadsheetId, MAINT_ID);
    assert.deepEqual(sheets.batchUpdates[1].requestBody.data, [
      { range: `'${MAINT_TAB}'!A2`, values: [['charlie']] },
    ]);
  } finally {
    delete process.env.GOOGLE_SHEET_ID_MAINT;
  }
});

test('renameToolIdInSheets: still renames the primary sheet when the maintainer sheet ID is unset', async () => {
  const sheets = stubSheets(fullSheet());
  await renameToolIdInSheets(sheets, 'alpha', 'charlie');

  assert.equal(sheets.batchUpdates.length, 1);
  assert.equal(sheets.batchUpdates[0].spreadsheetId, 'test-sheet');
});
