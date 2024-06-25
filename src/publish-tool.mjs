import pkg from './tools.mjs'
const {publishTool} = pkg;

// Create a new tool directory from the command line
const toolName = process.argv[2]
if (!toolName) {
  console.log('Usage: node add-tool.mjs "Tool Name"');
  process.exit(1);
}
publishTool(toolName);
