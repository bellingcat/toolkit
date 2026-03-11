import pkg from './paths.mjs'
import util from 'node:util';
import matter from 'gray-matter'
import child_process from 'node:child_process';
const { writeIfChanged, getTools, inSummary } = pkg;
const exec = util.promisify(child_process.exec);

async function main() {
  // find out when each published tool page was last updated
  const publishedTools = getTools().filter((tool) => inSummary(tool));
  await Promise.all(publishedTools.map(function(tool) {
    return getUpdatedAt(tool).then(function(updatedAt) {
      if (!updatedAt) { return null; }

      // Set the date in the markdown frontmatter
      tool.frontmatter.updated = updatedAt;
      writeIfChanged(matter.stringify(tool.content, tool.frontmatter), tool.filepath);

      return updatedAt;
    });
  }));
}

main();

async function getUpdatedAt(tool) {
  // search git history for commits in the last 24 hours starting with
  // GITBOOK-tool-slug-{number} and find the most recent commit date
  const cmd = `git log --since="1 day ago" --grep="GITBOOK-${tool.filename}-[0-9][0-9]*" --format=%cd --date=short | head -n 1`;
  const { stdout, stderr } = await exec(cmd);
  if (stderr) {
    console.error(stderr);
  }
  const commitDate = stdout.trim();
  if (!commitDate) {
    return null;
  }
  return commitDate;
}

