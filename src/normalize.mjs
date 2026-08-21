import fs from 'fs';
import paths from './data.mjs'
const {getTools, getSummary} = paths;
import pkg from './tools.mjs'
const {updateToolJSON, updateToolCategories} = pkg;
import { syncSummaryTitles, readmeTitle } from './summary.mjs';

function main() {
  const tools = getTools();

  // Parse all the JSON files (fails with error if invalid JSON is found)
  tools.forEach((tool) => {
    // Rewrite with the latest json instructions or formatting.
    updateToolJSON(tool);
    updateToolCategories(tool);
  });

  const original = getSummary('gitbook');

  // Point each navigation entry at the title its page actually shows. The
  // README's H1 is the source of truth — maintainers edit it directly — while
  // SUMMARY.md decides the text in the site navigation, so the two drift.
  // Runs before the sort below, since retitling moves entries alphabetically.
  const summary = syncSummaryTitles(original, tools.map((tool) => ({
    slug: tool.filename,
    title: readmeTitle(tool.content),
  })));

  // Line count is unchanged (titles are rewritten in place), so the two split
  // cleanly against each other to report what moved.
  const before = original.split('\n');
  summary.split('\n').forEach((line, i) => {
    if (line !== before[i]) console.log('Retitling', before[i].trim(), '->', line.trim());
  });

  // Sort the tools in the summary

  // Alphabatize the sublist of tools Under the heading [All Tools](...)
  // Assumes that this list is the last thing in the file.
  const heading = "* [All Tools](more/all-tools/README.md)\n";
  const parts = summary.split(heading);
  const toolList = parts[1];
  const items = toolList.split('\n').sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }).filter((x) => x.length);
  fs.writeFileSync('gitbook/SUMMARY.md', [parts[0], heading, items.join('\n')].join(''));
}

main();
