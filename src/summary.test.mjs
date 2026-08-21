import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renameSummaryEntry, syncSummaryTitles, readmeTitle } from './summary.mjs';

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

const nav = [
  '# Table of contents',
  '',
  '## ⚒️ Categories',
  '',
  '* [Maps](categories/maps/maps.md)',
  '',
  '* [All Tools](more/all-tools/README.md)',
  '  * [Blackbird](tools/blackbird/README.md)',
  '  * [Bulletpicker](tools/bulletpicker/README.md)',
  '  * [EDGAR Suite](tools/edgar-suite/README.md)',
].join('\n');

test('syncSummaryTitles: rewrites a title that drifted from the H1', () => {
  const out = syncSummaryTitles(nav, [{ slug: 'edgar-suite', title: 'EDGAR Command Line Interface (edgar-tool)' }]);
  assert.match(out, /^ {2}\* \[EDGAR Command Line Interface \(edgar-tool\)\]\(tools\/edgar-suite\/README\.md\)$/m);
});

test('syncSummaryTitles: leaves the slug in the link untouched', () => {
  const out = syncSummaryTitles(nav, [{ slug: 'bulletpicker', title: 'Bulletpicker.com' }]);
  assert.match(out, /\(tools\/bulletpicker\/README\.md\)/);
  assert.doesNotMatch(out, /tools\/bulletpicker\.com/);
});

test('syncSummaryTitles: returns the summary unchanged when every title matches', () => {
  const out = syncSummaryTitles(nav, [
    { slug: 'blackbird', title: 'Blackbird' },
    { slug: 'bulletpicker', title: 'Bulletpicker' },
  ]);
  assert.equal(out, nav);
});

test('syncSummaryTitles: ignores tools with no entry in the summary', () => {
  assert.equal(syncSummaryTitles(nav, [{ slug: 'unpublished-draft', title: 'Draft' }]), nav);
});

test('syncSummaryTitles: skips a tool whose title is missing', () => {
  assert.equal(syncSummaryTitles(nav, [{ slug: 'blackbird', title: null }]), nav);
  assert.equal(syncSummaryTitles(nav, [{ slug: 'blackbird', title: '' }]), nav);
});

test('syncSummaryTitles: syncs several tools in one pass', () => {
  const out = syncSummaryTitles(nav, [
    { slug: 'bulletpicker', title: 'Bulletpicker.com' },
    { slug: 'edgar-suite', title: 'EDGAR CLI' },
  ]);
  assert.match(out, /^ {2}\* \[Bulletpicker\.com\]\(tools\/bulletpicker\/README\.md\)$/m);
  assert.match(out, /^ {2}\* \[EDGAR CLI\]\(tools\/edgar-suite\/README\.md\)$/m);
});

test('syncSummaryTitles: leaves category lines alone', () => {
  const out = syncSummaryTitles(nav, [{ slug: 'blackbird', title: 'Blackbird 2' }]);
  assert.match(out, /^\* \[Maps\]\(categories\/maps\/maps\.md\)$/m);
  assert.match(out, /^\* \[All Tools\]\(more\/all-tools\/README\.md\)$/m);
});

test('syncSummaryTitles: treats regex metacharacters in a slug literally', () => {
  const s = '  * [Old](tools/192.com/README.md)\n  * [Other](tools/192Xcom/README.md)';
  const out = syncSummaryTitles(s, [{ slug: '192.com', title: 'New' }]);
  assert.equal(out, '  * [New](tools/192.com/README.md)\n  * [Other](tools/192Xcom/README.md)');
});

test('readmeTitle: extracts the H1', () => {
  assert.equal(readmeTitle('\n# Bulletpicker.com\n\n## URL\n'), 'Bulletpicker.com');
});

test('readmeTitle: returns null when there is no H1', () => {
  assert.equal(readmeTitle('## URL\n\nsome text\n'), null);
});

test('readmeTitle: takes the first H1 when several exist', () => {
  assert.equal(readmeTitle('# First\n\n# Second\n'), 'First');
});

test('readmeTitle: does not mistake a deeper heading for an H1', () => {
  assert.equal(readmeTitle('## URL\n### Notes\n'), null);
});

test('readmeTitle: trims surrounding whitespace', () => {
  assert.equal(readmeTitle('#   Spaced Out   \n'), 'Spaced Out');
});
