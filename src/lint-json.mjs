import fs from 'fs';
import paths from './paths.mjs'
const {getTools} = paths;
import pkg from './tools.mjs'
const {updateToolJSON, updateToolCategories} = pkg;

// Parse all the JSON files (fails with error if invalid JSON is found)
getTools().forEach((tool) => {
  // Rewrite with the latest json instructions or formatting.
  updateToolJSON(tool);
  updateToolCategories(tool);

  // Copy the about page to main content
  fs.writeFileSync('gitbook/README.md', fs.readFileSync('gitbook/pages/README.md', 'utf-8'));
});
