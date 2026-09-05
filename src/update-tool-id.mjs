import client from './ghproject-client.mjs';
import { args, requireEnv } from './cli.mjs';

// Points the GitHub Project item's "Tool ID" field at a tool's new slug.
// Split out of rename_tool.mjs so the workflow can run it only after the
// rename has actually been pushed: updating the project first meant a failed
// push left the project naming a tool that main didn't have yet, and the next
// sheets sync would then append a row for it and prune the old one.
const [oldSlug, newSlug] = args(
  'Usage: node src/update-tool-id.mjs <oldToolId> <newToolId>',
  'oldToolId', 'newToolId'
);

requireEnv(['GH_TOKEN'], { skip: true, context: 'skipping GitHub project update' });

client.updateToolId(oldSlug, newSlug);
