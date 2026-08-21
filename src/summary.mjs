// Pure helpers for editing gitbook/SUMMARY.md, GitBook's navigation source of
// truth. Kept free of imports so it stays unit-testable, and separate from
// tools.mjs, which reaches for the filesystem and the GitBook API.

// Escapes a string for literal use inside a RegExp. Tool slugs can contain
// regex metacharacters — "192.com" is a real one — so a slug interpolated
// into a pattern unescaped would match more than itself.
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Points a tool's SUMMARY.md entry at its new slug and title, matching the
// `  * [Title](tools/<slug>/README.md)` form that publishing writes. Only
// published tools have an entry, so a tool with no line leaves the summary
// untouched.
function renameSummaryEntry(summary, oldSlug, newSlug, newTitle) {
  const entry = new RegExp(`^ {2}\\* \\[.*\\]\\(tools/${escapeRegExp(oldSlug)}/README\\.md\\)$`, 'm');
  return summary.replace(entry, `  * [${newTitle}](tools/${newSlug}/README.md)`);
}

export { renameSummaryEntry };
