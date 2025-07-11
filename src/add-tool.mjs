import pkg from './tools.mjs'
const {createTool} = pkg;

// Create a new tool directory from the command line
const toolName = process.argv[2]
const category = process.argv[4];
if (!toolName) {
  console.log('Usage: node add-tool.mjs "Tool Name"');
  process.exit(1);
}
let tags = [];
if (category !== 'none') {
  tags.push(category);
}
const slug = createTool({
  draft: true,
  name: toolName,
  tags: tags
});
