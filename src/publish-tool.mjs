import pkg from './tools.mjs'
import { args } from './cli.mjs';
const {publishTool} = pkg;

// Publish a tool from the command line. Takes a slug or a display name.
const [toolName] = args('Usage: node src/publish-tool.mjs "Tool Name"', 'toolName');

publishTool(toolName);
