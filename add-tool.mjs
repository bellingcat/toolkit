import fs from 'fs';
import pkg from './tools.mjs'
const {createTool, createToolOnGitbook} = pkg;

// Create a new tool directory from the command line
const toolName = process.argv[2]
if (!toolName) {
  console.log('Usage: node add-tool.mjs "Tool Name"');
  process.exit(1);
}
createTool({
  name: toolName,
  description: 'A brief one-line description of the tool.',
  url: 'https://example.com',
  tags: []
});
createToolOnGitbook(toolName);
