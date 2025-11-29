import pkg from './tools.mjs'
const {createToolOnGitbook} = pkg;

// Create a new tool directory from the command line
const toolName = process.argv[2];
const email = process.argv[3];
const category = process.argv[4];

if (!toolName) {
  console.warn('Usage: node add-tool.mjs "Tool Name" [email]');
  process.exit(1);
}
createToolOnGitbook(toolName, category, email).then(function(space) {
  console.log(space.id);
  console.warn(space.urls.app);
});
