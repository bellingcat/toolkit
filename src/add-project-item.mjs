import client from './ghproject-client.mjs';
import dataPkg from './data.mjs';
const { getTools } = dataPkg;

// Adds a tool to the GitHub Project, or updates the item it already has.
//
// A tool can pass through the add-tool workflow more than once — most often
// when it already exists in the repo but has no GitBook space yet — and each
// pass creates a fresh space and team. Creating unconditionally left a second
// project item with the same Tool ID, which then double-counts everywhere the
// project is read, including the sheets sync.
//
// An empty teamId means no team was created on this pass (it is an optional
// argument), so the field is left as it is rather than blanked.
function upsertProjectItem(client, toolSlug, spaceId, teamId, toolTitle) {
  const existing = client.findItemByToolId(toolSlug);
  if (!existing) {
    return client.addItemToProject(toolSlug, spaceId, teamId, toolTitle);
  }

  const fields = { 'Space ID': spaceId };
  if (teamId) fields['Team ID'] = teamId;

  client.updateItemFields(existing.id, fields);
  console.log(`Updated project item ${existing.id} for ${toolSlug}`);
  return existing.id;
}

function main() {
  const toolSlug = process.argv[2];
  const spaceId = process.argv[3];
  const teamId = process.argv[4] || '';

  if (!toolSlug || !spaceId) {
    console.error('Usage: node add-project-item.mjs <toolSlug> <spaceId> [teamId]');
    process.exit(1);
  }

  const tool = getTools().find((t) => t.filename === toolSlug);
  const toolTitle = tool ? tool.title : toolSlug;

  upsertProjectItem(client, toolSlug, spaceId, teamId, toolTitle);
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main();
}

export { upsertProjectItem };
