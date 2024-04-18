import pkg from './tools.mjs'
const {createToolOnGitbook} = pkg;

// Create a new tool directory from the command line
const toolName = process.argv[2];
const email = process.argv[3];
if (!toolName) {
  console.log('Usage: node add-tool.mjs "Tool Name" [email]');
  process.exit(1);
}
createToolOnGitbook(toolName, email).then(function(url) {
  console.log(url);
});
