import { appendFileSync } from 'node:fs';
import pkg from './tools.mjs'
import { args } from './cli.mjs';
const {removeTool} = pkg;

// Removes the tool files and its SUMMARY.md entry in prep for a PR.
// Takes a slug or a display name.
const [toolName] = args('Usage: node src/remove-tool.mjs "Tool Name"', 'toolName');

const slug = removeTool(toolName);
console.log(`Tool ${slug} removed`);

// Hand the resolved slug to the workflow, which names its branch after it. The
// cleanup job parses that branch back into the slug it passes to
// remove-space.mjs, so a display name reaching the branch name would both be
// invalid git and strand the GitBook teardown.
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `toolId=${slug}\n`);
}
