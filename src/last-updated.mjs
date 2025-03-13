import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
import util from 'node:util';
import child_process from 'node:child_process';
const { getTools } = pkg;
const exec = util.promisify(child_process.exec);

// find out when each tool page was last updated
const publishedTools = getTools().filter((tool) => inSummary(tool));
Promise.all(publishedTools.map(function(tool) {
  return isUpdated(tool).then(function(result) { tool.isUpdated = result; });
})).then(function() {
  const needUpdate = publishedTools.filter((tool) => !tool.isUpdated);
  if (needUpdate.length === 0) {
    console.log('All tools are up to date');
    process.exit(0);
  } else {
    console.log(needUpdate.length, 'tools have not been updated in 2 months');
    needUpdate.forEach((tool) => {
      console.log(tool.title);
    });
    process.exit(1);
  }
});

async function isUpdated(tool) {
  // search git history for commits starting with GITBOOK-tool-slug-{number}: 
  // and find the most recent commit date
  const cmd = `git log --since="2 months ago" --grep="GITBOOK-${tool.filename}-" --format=%cd --date=short | head -n 1`;
  const { stdout, stderr } = await exec(cmd);
  if (stderr) {
    console.error(stderr);
  }
  const commitDate = stdout.trim();
  if (!commitDate) {
    return false;
  }
  return true;
}

function inSummary(tool) {
  const summary = fs.readFileSync(path.join('gitbook', 'SUMMARY.md'), 'utf-8');
  return !!summary.match(path.relative('gitbook/', tool.filepath));
}
