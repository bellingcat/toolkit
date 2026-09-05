import pkg from './tools.mjs'
import { args } from './cli.mjs';
const {createToolOnGitbook} = pkg;

// Creates the GitBook space and team for a new tool. Runs before add-tool.mjs
// makes the directory, so there is nothing in the repo to resolve against yet.
const [toolName] = args('Usage: node src/add-space.mjs "Tool Name" [email]', 'toolName');
const email = (process.argv[3] || '').trim();

createToolOnGitbook(toolName, email).then(function(space) {
  console.log(`${space.id} ${space.teamId}`);
  console.warn(space.urls.app);
});
