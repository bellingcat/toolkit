import { test } from 'node:test';
import assert from 'node:assert/strict';
import { planToolIdRename, planTabRename } from './sheet-rename.mjs';

// Column 1 holds the Tool ID, mirroring the Tools tab's header layout.
const toolsValues = [
  ['Title', 'Tool ID', 'Notes'],
  ['Alpha', 'alpha', 'hand-written note'],
  ['Bravo', 'bravo', ''],
];

test('planToolIdRename: finds the row holding the old ID', () => {
  const plan = planToolIdRename(toolsValues, 1, 'bravo', 'charlie');
  assert.deepEqual(plan.rows, [2]);
  assert.equal(plan.conflict, false);
});

test('planToolIdRename: returns no rows when the old ID is absent', () => {
  const plan = planToolIdRename(toolsValues, 1, 'zulu', 'charlie');
  assert.deepEqual(plan.rows, []);
  assert.equal(plan.conflict, false);
});

test('planToolIdRename: returns every row holding the old ID', () => {
  const values = [
    ['Title', 'Tool ID'],
    ['Alpha', 'alpha'],
    ['Alpha dupe', 'alpha'],
    ['Bravo', 'bravo'],
  ];
  assert.deepEqual(planToolIdRename(values, 1, 'alpha', 'charlie').rows, [1, 2]);
});

test('planToolIdRename: flags a conflict when the new ID is already present', () => {
  const plan = planToolIdRename(toolsValues, 1, 'alpha', 'bravo');
  assert.equal(plan.conflict, true);
});

test('planToolIdRename: a row holding the old ID is not itself a conflict', () => {
  const plan = planToolIdRename(toolsValues, 1, 'alpha', 'alpha-renamed');
  assert.deepEqual(plan.rows, [1]);
  assert.equal(plan.conflict, false);
});

test('planToolIdRename: matches column A on the reference tabs', () => {
  const values = [
    ['Tool ID', 'Signups'],
    ['alpha', '=COUNTIF(...)'],
    ['bravo', '=COUNTIF(...)'],
  ];
  assert.deepEqual(planToolIdRename(values, 0, 'alpha', 'charlie').rows, [1]);
});

test('planToolIdRename: ignores the header row', () => {
  const values = [
    ['Tool ID'],
    ['alpha'],
  ];
  assert.deepEqual(planToolIdRename(values, 0, 'Tool ID', 'charlie').rows, []);
});

test('planToolIdRename: header-only sheet yields no rows', () => {
  assert.deepEqual(planToolIdRename([['Title', 'Tool ID']], 1, 'alpha', 'charlie').rows, []);
});

test('planToolIdRename: empty sheet yields no rows', () => {
  const plan = planToolIdRename([], 1, 'alpha', 'charlie');
  assert.deepEqual(plan.rows, []);
  assert.equal(plan.conflict, false);
});

test('planToolIdRename: rows shorter than the match column are skipped', () => {
  const values = [
    ['Title', 'Tool ID'],
    ['Alpha'],
    ['Bravo', 'bravo'],
  ];
  assert.deepEqual(planToolIdRename(values, 1, 'bravo', 'charlie').rows, [2]);
});

const toolsTab = {
  headerRow: 1,
  values: [
    ['Title', 'Tool ID', 'Notes'],
    ['Alpha', 'alpha', 'hand-written note'],
    ['Bravo', 'bravo', ''],
  ],
};

test('planTabRename: writes the new ID into a header-named column', () => {
  const { writes, skip } = planTabRename('Tools', toolsTab, 'Tool ID', 'bravo', 'charlie');
  assert.equal(skip, null);
  assert.deepEqual(writes, [{ range: 'Tools!B3', values: [['charlie']] }]);
});

test('planTabRename: writes the new ID into a numeric column on a reference tab', () => {
  const tab = {
    headerRow: 1,
    values: [['Tool ID', 'Signups'], ['alpha', '=X'], ['bravo', '=Y']],
  };
  const { writes, skip } = planTabRename('Signup', tab, 0, 'alpha', 'charlie');
  assert.equal(skip, null);
  assert.deepEqual(writes, [{ range: 'Signup!A2', values: [['charlie']] }]);
});

test('planTabRename: offsets ranges by the table header row', () => {
  const tab = {
    headerRow: 4,
    values: [['Tool ID'], ['alpha'], ['bravo']],
  };
  const { writes } = planTabRename('Overview', tab, 0, 'bravo', 'charlie');
  assert.deepEqual(writes, [{ range: 'Overview!A6', values: [['charlie']] }]);
});

test('planTabRename: rewrites every row holding the old ID', () => {
  const tab = {
    headerRow: 1,
    values: [['Tool ID'], ['alpha'], ['alpha'], ['bravo']],
  };
  const { writes } = planTabRename('Overview', tab, 0, 'alpha', 'charlie');
  assert.deepEqual(writes, [
    { range: 'Overview!A2', values: [['charlie']] },
    { range: 'Overview!A3', values: [['charlie']] },
  ]);
});

test('planTabRename: skips when the named column is missing', () => {
  const tab = { headerRow: 1, values: [['Title', 'Notes'], ['Alpha', '']] };
  const { writes, skip } = planTabRename('Tools', tab, 'Tool ID', 'alpha', 'charlie');
  assert.deepEqual(writes, []);
  assert.match(skip, /Tool ID/);
});

test('planTabRename: skips when the old ID is not present', () => {
  const { writes, skip } = planTabRename('Tools', toolsTab, 'Tool ID', 'zulu', 'charlie');
  assert.deepEqual(writes, []);
  assert.match(skip, /zulu/);
});

test('planTabRename: skips without writing when the new ID already exists', () => {
  const { writes, skip } = planTabRename('Tools', toolsTab, 'Tool ID', 'alpha', 'bravo');
  assert.deepEqual(writes, []);
  assert.match(skip, /bravo/);
});

test('planTabRename: skips an empty tab', () => {
  const { writes, skip } = planTabRename('Tools', { headerRow: 1, values: [] }, 'Tool ID', 'alpha', 'charlie');
  assert.deepEqual(writes, []);
  assert.equal(typeof skip, 'string');
});
