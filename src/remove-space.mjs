import toolsPkg from './tools.mjs';
import client from './ghproject-client.mjs';
import { args, requireEnv, isMain } from './cli.mjs';

// Tears down the GitBook space and team a tool was given by add-tool.yml, then
// its GitHub Project item. The teardown counterpart to add-space.mjs.

function itemField(item, name) {
  return item?.fieldValues.nodes.find((node) => node.field?.name === name)?.text || '';
}

export async function removeToolResources(slug, deps) {
  const { findItemByToolId, findSpace, deleteSpace, deleteTeam, removeItemFromProject } = deps;

  const item = findItemByToolId(slug);
  if (!item) {
    console.warn(`No GitHub project item found for "${slug}" — falling back to a space lookup by slug`);
  }

  let spaceId = itemField(item, 'Space ID');
  const teamId = itemField(item, 'Team ID');

  // Spaces are created titled by slug, so they stay findable without the item.
  if (!spaceId) {
    const space = await findSpace(slug);
    if (space) spaceId = space.id;
  }

  if (spaceId) {
    const deleted = await deleteSpace(spaceId);
    console.log(deleted
      ? `Deleted GitBook space ${spaceId} for "${slug}" — recoverable from GitBook for 7 days`
      : `GitBook space ${spaceId} for "${slug}" was already gone`);
  } else {
    console.warn(`No GitBook space found for "${slug}" — skipping space deletion`);
  }

  // No lookup fallback for teams: findTeam matches on title, and the team was
  // created from the tool's display name ("CR Title"), not its slug.
  if (teamId) {
    const deleted = await deleteTeam(teamId);
    console.log(deleted
      ? `Deleted GitBook team ${teamId} for "${slug}"`
      : `GitBook team ${teamId} for "${slug}" was already gone`);
  } else {
    console.warn(`No Team ID recorded for "${slug}" — skipping team deletion`);
  }

  // Last: dropping the item is what lets the next sheets sync prune the tool's
  // row, and it is the only thing holding the IDs used above.
  if (item) {
    removeItemFromProject(slug);
  }
}

async function main() {
  // A slug, not a name: the workflow derives it from the merged PR's branch and
  // has already verified the tool is gone from main, so there is nothing left
  // in the repo to resolve against.
  const [slug] = args('Usage: node src/remove-space.mjs <toolId>', 'toolId');

  // fail hard on a missing token
  requireEnv(['GITBOOK_API_TOKEN', 'GH_TOKEN'], { context: `cannot tear down "${slug}"` });

  await removeToolResources(slug, {
    findItemByToolId: client.findItemByToolId,
    findSpace: toolsPkg.findSpace,
    deleteSpace: toolsPkg.deleteSpace,
    deleteTeam: toolsPkg.deleteTeam,
    removeItemFromProject: client.removeItemFromProject,
  });
}

if (isMain(import.meta.url)) {
  main();
}
