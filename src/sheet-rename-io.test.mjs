import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renameToolIdInSheets } from './sheet-rename.mjs';

process.env.GOOGLE_SHEET_ID = 'test-sheet';

// Minimal stand-in for the googleapis Sheets client. Tabs have no embedded
// Table, so readTab reads the whole tab and the header sits on row 1.
function stubSheets(tabs) {
  const batchUpdates = [];
  return {
    batchUpdates,
    spreadsheets: {
      get: async () => ({
        data: { sheets: Object.keys(tabs).map((title) => ({ properties: { title, sheetId: 1 }, tables: [] })) },
      }),
      values: {
        get: async ({ range }) => ({ data: { values: tabs[range.split('!')[0]] } }),
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
