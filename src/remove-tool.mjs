import pkg from './tools.mjs'
const {removeTool} = pkg;
import client from './ghproject-client.mjs';

const toolName = process.argv[2]
if (!toolName) {
  console.log('Usage: node remove-tool.mjs "tool-directory-name"');
  process.exit(1);
}

removeTool(toolName);
console.log(`Tool ${toolName} removed`);

if (process.env.GH_TOKEN) {
  client.removeItemFromProject(toolName);
} else {
  console.warn('GH_TOKEN not set — skipping GitHub project deletion');
}
