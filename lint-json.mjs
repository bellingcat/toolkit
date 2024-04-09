import pkg from './tools.mjs'
const {getTools, updateToolJSON} = pkg;

// Parse all the JSON files (fails with error if invalid JSON is found)
getTools().forEach((tool) => {
  // Rewrite with the latest json instructions or formatting.
  updateToolJSON(tool, tool.json);
});
