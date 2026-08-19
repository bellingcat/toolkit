import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mergeRowRanges } from './sheet-prune.mjs';

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
