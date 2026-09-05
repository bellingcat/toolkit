// Pure helpers for turning a command-line tool argument into the tool it names.
// Kept free of imports so it stays unit-testable, and separate from tools.mjs,
// which reaches for the filesystem and the GitBook API — the same split
// summary.mjs makes.
//
// The entrypoints under src/ used to each carry their own idea of what a "tool
// name" is: some slugified and checked the directory, some matched titles, some
// took the raw directory name. resolveTool() is the one answer they now share.

// A tool's directory name, derived from its display name. Tool directories were
// created with these exact rules, so changing them would orphan existing tools.
export function slugify(toolName) {
  const safe = toolName
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
    .replace(/\s+/g, '-')
    .replace(/,/g, '')
    .toLowerCase();
  return safe || 'untitled';
}

// Finds the tool `input` names among `tools` (as getTools() returns them),
// accepting either a slug or a display name.
//
// Two passes, slug first. Slugifying is identity on a string already in slug
// form, so the first pass covers both "Some Tool" and "some-tool"; the second
// catches a tool whose title has moved on from its directory name. Slug wins
// when both match, so resolution stays deterministic if one tool's title
// happens to name another tool's directory.
export function resolveTool(tools, input) {
  // Guarded before slugify, which answers an empty string with "untitled" — a
  // name a real tool can hold. Without this, a missing argument resolves to
  // that tool instead of failing.
  if (!input || !input.trim()) {
    throw new Error('Tool not found: no tool name given');
  }

  const slug = slugify(input);

  const tool = tools.find((t) => t.filename === slug)
    || tools.find((t) => t.title === input);

  if (!tool) {
    // Echo the slug alongside the input: the usual miss is a display name whose
    // punctuation slugified to something other than the directory on disk, and
    // seeing both halves is what makes that visible.
    throw new Error(
      `Tool not found: "${input}" — looked for slug "${slug}" among ${tools.length} tools in gitbook/tools`
    );
  }

  return tool;
}
