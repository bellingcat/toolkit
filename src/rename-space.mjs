import toolsPkg from './tools.mjs';
import { args, requireEnv } from './cli.mjs';
const { findSpace, renameSpace } = toolsPkg;

// Renames a tool's GitBook space to match its new slug. Split out of
// renameTool so it runs only after the rename has been pushed, and so a
// GitBook failure can't leave the space renamed ahead of main.
//
// Spaces are titled by slug — createSpace() is called with the slug — so the
// old slug is what identifies the space to rename. renameTool used to look it
// up by tool.directory ("gitbook/tools/<slug>"), which never matched a space
// title, so the rename silently did nothing.
//
// Slugs, not names: this runs after the rename has been pushed, so the old slug
// names a directory that is gone and the new one is not this script's to derive.
const [oldSlug, newSlug] = args(
  'Usage: node src/rename-space.mjs <oldToolId> <newToolId>',
  'oldToolId', 'newToolId'
);

requireEnv(['GITBOOK_API_TOKEN'], { skip: true, context: 'skipping GitBook space rename' });

const space = await findSpace(oldSlug);
if (!space) {
  console.warn(`No GitBook space titled "${oldSlug}" — skipping rename`);
  process.exit(0);
}

await renameSpace(space, newSlug);
console.log(`Renamed GitBook space "${oldSlug}" to "${newSlug}"`);
