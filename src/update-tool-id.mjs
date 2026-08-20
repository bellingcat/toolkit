import client from './ghproject-client.mjs';

// Points the GitHub Project item's "Tool ID" field at a tool's new slug.
// Split out of rename_tool.mjs so the workflow can run it only after the
// rename has actually been pushed: updating the project first meant a failed
// push left the project naming a tool that main didn't have yet, and the next
// sheets sync would then append a row for it and prune the old one.
const [oldSlug, newSlug] = process.argv.slice(2);

if (!oldSlug || !newSlug) {
  console.error('Usage: node src/update-tool-id.mjs <oldToolId> <newToolId>');
  process.exit(1);
}

if (!process.env.GH_TOKEN) {
  console.warn('GH_TOKEN not set — skipping GitHub project update');
  process.exit(0);
}

client.updateToolId(oldSlug, newSlug);
