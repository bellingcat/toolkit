import pkg from './tools.mjs'
const {removeTool} = pkg;

// Create a new tool directory from the command line
const toolName = process.argv[2]
if (!toolName) {
  console.log('Usage: node remove-tool.mjs "tool-directory-name"');
  process.exit(1);
}

removeTool(toolName);
console.log(`Tool ${toolName} removed`);
