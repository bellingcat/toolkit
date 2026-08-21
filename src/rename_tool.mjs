import { appendFileSync } from 'node:fs';
import dataPkg from './data.mjs'
const {getTools} = dataPkg;
import toolsPkg from './tools.mjs'
const {renameTool} = toolsPkg;

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

renameTool(tool, newToolname);

// Hand the resolved slugs to the workflow so the steps that run after the push
// — the GitHub Project and Google Sheets updates — can address the tool. The
// old slug comes from the tool's directory name, which no longer exists once
// renameTool() has run, so it can't be re-derived later.
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `oldSlug=${oldSlug}\nnewSlug=${newSlug}\n`);
}
