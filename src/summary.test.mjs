import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renameSummaryEntry, syncSummaryTitles } from './summary.mjs';

const summary = [
  '# Table of contents',
  '',
  '* [All Tools](more/all-tools/README.md)',
  '  * [192.com](tools/192.com/README.md)',
  '  * [Blackbird](tools/blackbird/README.md)',
  '  * [Zotero](tools/zotero/README.md)',
].join('\n');

test('renameSummaryEntry: repoints the link at the new slug', () => {
  const out = renameSummaryEntry(summary, '192.com', '192');
  assert.match(out, /^ {2}\* \[192\.com\]\(tools\/192\/README\.md\)$/m);
  assert.doesNotMatch(out, /tools\/192\.com/);
});

test('renameSummaryEntry: keeps the displayed title, which the build owns', () => {
  const s = '  * [Bellingcat Name Variant Search](tools/name-variant-search/README.md)';
  const out = renameSummaryEntry(s, 'name-variant-search', 'name-variants');
  assert.equal(out, '  * [Bellingcat Name Variant Search](tools/name-variants/README.md)');
});

test('renameSummaryEntry: leaves other tools untouched', () => {
  const out = renameSummaryEntry(summary, '192.com', '192');
  assert.match(out, /^ {2}\* \[Blackbird\]\(tools\/blackbird\/README\.md\)$/m);
  assert.match(out, /^ {2}\* \[Zotero\]\(tools\/zotero\/README\.md\)$/m);
  assert.equal(out.split('\n').length, summary.split('\n').length);
});

test('renameSummaryEntry: unpublished tool leaves the summary unchanged', () => {
  assert.equal(renameSummaryEntry(summary, 'not-published', 'renamed'), summary);
});

test('renameSummaryEntry: treats dots in the old slug literally', () => {
  const tricky = '  * [192Xcom](tools/192Xcom/README.md)';
  assert.equal(renameSummaryEntry(tricky, '192.com', '192'), tricky);
});

test('renameSummaryEntry: does not match a slug that merely shares a prefix', () => {
  const s = '  * [192 Com](tools/192-com/README.md)';
  assert.equal(renameSummaryEntry(s, '192', 'one-nine-two'), s);
});

test('renameSummaryEntry: reproduces the bulletpicker rename', () => {
  const before = '  * [Bulletpicker.com](tools/bulletpicker.com/README.md)';
  const after = renameSummaryEntry(before, 'bulletpicker.com', 'bulletpicker');
  // Only the link moves; the build retitles from tool.title afterwards.
  assert.equal(after, '  * [Bulletpicker.com](tools/bulletpicker/README.md)');
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

test('syncSummaryTitles: rewrites a title that drifted from the tool title', () => {
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
