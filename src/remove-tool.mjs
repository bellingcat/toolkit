import pkg from './tools.mjs'
const {removeTool} = pkg;

// Removes the tool files and its SUMMARY.md entry in prep for a PR.

const toolName = process.argv[2]
if (!toolName) {
  console.log('Usage: node remove-tool.mjs "tool-directory-name"');
  process.exit(1);
}

removeTool(toolName);
console.log(`Tool ${toolName} removed`);
