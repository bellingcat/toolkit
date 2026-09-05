import toolsPkg from './tools.mjs';
import dataPkg from './data.mjs';
import { CATEGORY_COLLECTION_IDS } from './config.mjs';
import { resolveTool } from './resolve-tool.mjs';
import { args, requireEnv, isMain } from './cli.mjs';

// Files a tool's GitBook space under the collection for its Guardian category.
// Runs at publish time to grant Guardian access.

// Spaces are titled by slug — createSpace() is called with the slug, and
// rename-space.mjs keeps the title in step — so the slug is what identifies
// the space to move, the same lookup rename-space.mjs uses. It is resolved here
// rather than passed in, so the workflow can hand over the tool name its
// publish step already takes.

export async function moveToolSpace(toolName, category, deps) {
  const { findSpace, moveSpace, resolve } = deps;

  // No default collection to fall back on: filing a tool under the wrong
  // category is worse than failing the publish job, and the category comes
  // from a workflow dropdown, so a miss here means the two lists drifted.
  const collectionId = CATEGORY_COLLECTION_IDS[category];
  if (!collectionId) {
    throw new Error(
      `Unknown category "${category}" — expected one of: ${Object.keys(CATEGORY_COLLECTION_IDS).join(', ')}`
    );
  }

  // After the category check, which is free, and before GitBook: a name that
  // matches no directory would otherwise be slugified into a plausible-looking
  // slug and quietly find nothing.
  const slug = resolve(toolName);

  const space = await findSpace(slug);
  if (!space) {
    console.warn(`No GitBook space titled "${slug}" — skipping move`);
    return;
  }

  await moveSpace(space.id, collectionId);
  console.log(`Moved GitBook space "${slug}" into the "${category}" collection`);
}

async function main() {
  const [toolName, category] = args(
    'Usage: node src/move-space.mjs "Tool Name" <category>',
    'toolName', 'category'
  );

  // fail hard on a missing token: the category is a required publish input, so
  // silently skipping the move would publish the tool into the wrong collection
  requireEnv(['GITBOOK_API_TOKEN'], { context: `cannot move "${toolName}"` });

  await moveToolSpace(toolName, category, {
    resolve: (name) => resolveTool(dataPkg.getTools(), name).filename,
    findSpace: toolsPkg.findSpace,
    moveSpace: toolsPkg.moveSpace,
  });
}

if (isMain(import.meta.url)) {
  main();
}
