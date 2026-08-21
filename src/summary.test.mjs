import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renameSummaryEntry } from './summary.mjs';

const summary = [
  '# Table of contents',
  '',
  '* [All Tools](more/all-tools/README.md)',
  '  * [192.com](tools/192.com/README.md)',
  '  * [Blackbird](tools/blackbird/README.md)',
  '  * [Zotero](tools/zotero/README.md)',
].join('\n');

test('renameSummaryEntry: rewrites both the title and the link', () => {
  const out = renameSummaryEntry(summary, '192.com', '192', '192');
  assert.match(out, /^ {2}\* \[192\]\(tools\/192\/README\.md\)$/m);
  assert.doesNotMatch(out, /192\.com/);
});

test('renameSummaryEntry: leaves other tools untouched', () => {
  const out = renameSummaryEntry(summary, '192.com', '192', '192');
  assert.match(out, /^ {2}\* \[Blackbird\]\(tools\/blackbird\/README\.md\)$/m);
  assert.match(out, /^ {2}\* \[Zotero\]\(tools\/zotero\/README\.md\)$/m);
  assert.equal(out.split('\n').length, summary.split('\n').length);
});

test('renameSummaryEntry: unpublished tool leaves the summary unchanged', () => {
  assert.equal(renameSummaryEntry(summary, 'not-published', 'renamed', 'Renamed'), summary);
});

test('renameSummaryEntry: treats dots in the old slug literally', () => {
  const tricky = '  * [192Xcom](tools/192Xcom/README.md)';
  assert.equal(renameSummaryEntry(tricky, '192.com', '192', '192'), tricky);
});

test('renameSummaryEntry: does not match a slug that merely shares a prefix', () => {
  const s = '  * [192 Com](tools/192-com/README.md)';
  assert.equal(renameSummaryEntry(s, '192', 'one-nine-two', 'One Nine Two'), s);
});

test('renameSummaryEntry: keeps a title that differs from the slug', () => {
  const s = '  * [Bellingcat Name Variant Search](tools/name-variant-search/README.md)';
  const out = renameSummaryEntry(s, 'name-variant-search', 'name-variants', 'Name Variants');
  assert.equal(out, '  * [Name Variants](tools/name-variants/README.md)');
});

test('renameSummaryEntry: reproduces the bulletpicker rename exactly', () => {
  const before = '  * [Bulletpicker.com](tools/bulletpicker.com/README.md)';
  const after = renameSummaryEntry(before, 'bulletpicker.com', 'bulletpicker', 'Bulletpicker');
  assert.equal(after, '  * [Bulletpicker](tools/bulletpicker/README.md)');
});
