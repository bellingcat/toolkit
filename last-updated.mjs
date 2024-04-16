import fs from 'fs';
import path from 'path';
import tools from './tools.mjs'
import util from 'node:util';
import child_process from 'node:child_process';
const { getTools } = tools;
const exec = util.promisify(child_process.exec);

// find out when each tool page was last updated
const needUpdate = getTools().filter((tool) => inSummary(tool)).filter((tool) => !isUpdated(tool));
if (needUpdate.length === 0) {
  console.log('All tools are up to date');
  process.exit(0);
} else {
  console.log(needUpdate.length, 'tools have not been updated in 1 month');
  needUpdate.forEach((tool) => {
    console.log(tool.title);
  });
  process.exit(1);
}

async function isUpdated(tool) {
  // search git history for commits starting with GITBOOK-tool-slug-{number}: 
  // and find the most recent commit date
  const { stdout, stderr } = await exec(`git log --since="1 month ago" --grep="GITBOOK-${tool.slug}-" --format=%cd --date=short | head -n 1`);
  if (stderr) {
    console.error(stderr);
  }
  const commitDate = stdout.trim();
  if (!commitDate) {
    console.error(tool.title, 'not updated in the last month');
    return false;
  }
  console.log(commitDate, tool.title);
  return true;
}

function inSummary(tool) {
  const summary = fs.readFileSync(path.join('gitbook', 'SUMMARY.md'), 'utf-8');
  return !!summary.match(path.relative('gitbook/', tool.filepath));
}
