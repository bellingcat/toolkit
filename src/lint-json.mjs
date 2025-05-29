import fs from 'fs';
import paths from './paths.mjs'
const {getTools, getSummary} = paths;
import pkg from './tools.mjs'
const {updateToolJSON, updateToolCategories} = pkg;

// Parse all the JSON files (fails with error if invalid JSON is found)
getTools().forEach((tool) => {
  // Rewrite with the latest json instructions or formatting.
  updateToolJSON(tool);
  updateToolCategories(tool);

});

// Sort the tools in the summary
const summary = getSummary('gitbook');

// Alphabatize the sublist of tools Under the heading [All Tools](...)
// Assumes that this list is the last thing in the file.
const heading = "* [All Tools](more/all-tools/README.md)\n";
const parts = summary.split(heading);
const toolList = parts[1]
const items = toolList.split('\n').sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
}).filter((x) => x.length);
fs.writeFileSync('gitbook/SUMMARY.md', [parts[0], heading, items.join('\n')].join(''));
