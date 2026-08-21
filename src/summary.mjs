// Pure helpers for editing gitbook/SUMMARY.md — GitBook's navigation source
// of truth — and for reading the README headings that feed it. Kept free of
// imports so it stays unit-testable, and separate from tools.mjs, which
// reaches for the filesystem and the GitBook API.

// Escapes a string for literal use inside a RegExp. Tool slugs can contain
// regex metacharacters — "192.com" is a real one — so a slug interpolated
// into a pattern unescaped would match more than itself.
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Matches a tool's SUMMARY.md entry — the `  * [Title](tools/<slug>/README.md)`
// form that publishing writes — capturing its title.
function entryPattern(slug) {
  return new RegExp(`^ {2}\\* \\[(.*)\\]\\(tools/${escapeRegExp(slug)}/README\\.md\\)$`, 'm');
}

// Points a tool's SUMMARY.md entry at its new slug and title. Only published
// tools have an entry, so a tool with no line leaves the summary untouched.
function renameSummaryEntry(summary, oldSlug, newSlug, newTitle) {
  return summary.replace(entryPattern(oldSlug), `  * [${newTitle}](tools/${newSlug}/README.md)`);
}

// Rewrites each tool's SUMMARY.md entry to display `title`, leaving the link
// (and every other line) alone. The README's H1 is the source of truth for a
// tool's name — maintainers edit it directly — while SUMMARY.md decides what
// the site navigation shows, so the two drift apart until this resyncs them.
//
// `entries` is [{slug, title}]. A tool with no title is skipped rather than
// blanked, and a tool with no entry (an unpublished draft) is left alone.
function syncSummaryTitles(summary, entries) {
  return entries.reduce((current, { slug, title }) => {
    if (!title) return current;
    return current.replace(entryPattern(slug), `  * [${title}](tools/${slug}/README.md)`);
  }, summary);
}

// A tool's displayed name: the H1 of its README. Anchored to the start of a
// line so a deeper heading ("## URL") can't match — data.mjs's own title
// regex is unanchored and would read "URL" out of one. Returns null when the
// README has no H1, so callers can skip rather than write a blank title.
function readmeTitle(content) {
  const h1 = content.match(/^# (.*)$/m);
  return h1 ? h1[1].trim() : null;
}

export { renameSummaryEntry, syncSummaryTitles, readmeTitle };
