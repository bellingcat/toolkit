import pkg from './tools.mjs'
import { args } from './cli.mjs';
const {createTool} = pkg;

// Create a new tool directory from the command line. No resolution here: the
// tool has no directory yet, which is what this makes.
const [toolName] = args('Usage: node src/add-tool.mjs "Tool Name"', 'toolName');

const slug = createTool({
  draft: true,
  name: toolName,
  tags: []
});
console.log(slug);
