import pkg from './tools.mjs'
import { args } from './cli.mjs';
const {removeTool} = pkg;

// Removes the tool files and its SUMMARY.md entry in prep for a PR.
// Takes a slug or a display name.
const [toolName] = args('Usage: node src/remove-tool.mjs "Tool Name"', 'toolName');

removeTool(toolName);
console.log(`Tool ${toolName} removed`);
