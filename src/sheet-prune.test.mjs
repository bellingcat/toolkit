import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mergeRowRanges, planPruneRows } from './sheet-prune.mjs';

test('mergeRowRanges: empty input returns no ranges', () => {
  assert.deepEqual(mergeRowRanges([]), []);
});

test('mergeRowRanges: single index returns one range', () => {
  assert.deepEqual(mergeRowRanges([5]), [{ startIndex: 5, endIndex: 6 }]);
});

test('mergeRowRanges: contiguous ascending indices merge into one range', () => {
  assert.deepEqual(mergeRowRanges([3, 4, 5]), [{ startIndex: 3, endIndex: 6 }]);
});

test('mergeRowRanges: non-contiguous indices produce separate ranges, highest first', () => {
  assert.deepEqual(mergeRowRanges([2, 8, 9]), [
    { startIndex: 8, endIndex: 10 },
    { startIndex: 2, endIndex: 3 },
  ]);
});

test('mergeRowRanges: unordered input with duplicates is normalized', () => {
  assert.deepEqual(mergeRowRanges([5, 3, 4, 4, 3]), [{ startIndex: 3, endIndex: 6 }]);
});

test('planPruneRows: flags rows whose key is not in validKeys', () => {
  const existingValues = [
    ['Title', 'Tool ID'],
    ['Tool A', 'tool-a'],
    ['Tool B', 'tool-b'],
    ['Tool C', 'tool-c'],
  ];
  const result = planPruneRows(existingValues, 1, new Set(['tool-a', 'tool-c']));
  assert.deepEqual(result, [{ row: 2, key: 'tool-b' }]);
});

test('planPruneRows: skips rows with an empty key', () => {
  const existingValues = [
    ['Title', 'Tool ID'],
    ['Tool A', ''],
    ['Tool B', 'tool-b'],
  ];
  const result = planPruneRows(existingValues, 1, new Set());
  assert.deepEqual(result, [{ row: 2, key: 'tool-b' }]);
});

test('planPruneRows: returns empty array when every key is valid', () => {
  const existingValues = [
    ['Title', 'Tool ID'],
    ['Tool A', 'tool-a'],
  ];
  assert.deepEqual(planPruneRows(existingValues, 1, new Set(['tool-a'])), []);
});

test('planPruneRows: returns empty array with only a header row', () => {
  const existingValues = [['Title', 'Tool ID']];
  assert.deepEqual(planPruneRows(existingValues, 1, new Set()), []);
});

test('planPruneRows: works on column 0 (reference-tab shape, no header lookup)', () => {
  const existingValues = [
    ['Tool ID', 'Formula'],
    ['tool-a', '=A2'],
    ['tool-stale', '=A3'],
  ];
  const result = planPruneRows(existingValues, 0, new Set(['tool-a']));
  assert.deepEqual(result, [{ row: 2, key: 'tool-stale' }]);
});
