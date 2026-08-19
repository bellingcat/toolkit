// Pure planning helpers for pruning stale Tool ID rows from Google Sheets
// tabs. This module has no dependency on the GitHub Project or Google
// Sheets clients (ghproject-fields.mjs makes a live API call at module
// top-level, so anything that imports it transitively can't be
// unit-tested in isolation) — keep it that way so it stays importable
// without side effects.

// Converts a set of 0-based row indices (possibly non-contiguous,
// unordered, with duplicates) into merged {startIndex, endIndex} ranges
// (endIndex exclusive), ordered highest-index-first. Used before issuing
// deleteDimension requests so that deleting one range never shifts the
// position of a range not yet deleted.
function mergeRowRanges(rowIndices) {
  const sorted = [...new Set(rowIndices)].sort((a, b) => b - a);
  if (sorted.length === 0) return [];

  const ranges = [];
  let start = sorted[0];
  let end = start + 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === start - 1) {
      start = sorted[i];
    } else {
      ranges.push({ startIndex: start, endIndex: end });
      start = sorted[i];
      end = start + 1;
    }
  }
  ranges.push({ startIndex: start, endIndex: end });
  return ranges;
}

// Given a sheet range's current values (row 0 = header) and a 0-based
// column index holding keys, returns the rows whose key is non-empty and
// not present in validKeys — i.e. rows that should be deleted. `row` in
// each result is the row's index within `existingValues` (>= 1).
function planPruneRows(existingValues, col, validKeys) {
  const stale = [];
  for (let row = 1; row < existingValues.length; row++) {
    const key = existingValues[row][col];
    if (key && !validKeys.has(key)) stale.push({ row, key });
  }
  return stale;
}

export { mergeRowRanges, planPruneRows };
