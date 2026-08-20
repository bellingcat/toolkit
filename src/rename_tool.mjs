import { appendFileSync } from 'node:fs';
import dataPkg from './data.mjs'
const {getTools} = dataPkg;
import toolsPkg from './tools.mjs'
const {renameTool} = toolsPkg;
import client from './ghproject-client.mjs';

const inputToolname = process.argv[2]
const newToolname = process.argv[3]

if (!inputToolname || !newToolname) {
  console.error('Usage: node rename_tool.mjs <oldName> <newName>');
  process.exit(1);
}
if (inputToolname == newToolname) {
  console.error('Old name and new name are the same');
  process.exit(1);
}

const tools = getTools();
const tool = tools.find((x) => x.title === inputToolname || x.filename === inputToolname);
if (!tool) {
  console.warn("Tool not found", inputToolname);
  process.exit(1);
}

const oldSlug = tool.filename;
const newSlug = newToolname.replace(/[<>:"/\\|?*\x00-\x1F]/g, '').replace(/\s+/g, '-').replace(/,/g, '').toLowerCase() || 'untitled';

await renameTool(tool, newToolname);

if (process.env.GH_TOKEN) {
  client.updateToolId(oldSlug, newSlug);
} else {
  console.warn('GH_TOKEN not set — skipping GitHub project update');
}

// Hand the resolved slugs to the workflow so the Google Sheets step can rename
// the tool's rows in place. The old slug comes from the tool's directory name,
// which no longer exists once renameTool() has run, so it can't be re-derived.
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `oldSlug=${oldSlug}\nnewSlug=${newSlug}\n`);
}
