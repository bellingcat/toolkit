import pkg from './tools.mjs'
import fs from 'fs';

// Create a new tool directory from the command line
const toolName = process.argv[2]
if (!toolName) {
  console.log('Usage: node remove-tool.mjs "tool-directory-name"');
  process.exit(1);
}

// Remove the tool directory
if (fs.existsSync(`gitbook/tools/${toolName}`)) {
  fs.rmSync(`gitbook/tools/${toolName}`, { recursive: true });
  console.log(`Tool ${toolName} removed`);
} else {
  console.log(`Tool ${toolName} not found`);
  process.exit(1);
}

// Read the SUMMARY.md file and remove the markdown link to this tool
const summary = fs.readFileSync('gitbook/SUMMARY.md', 'utf-8');
const newSummary = summary.replace(new RegExp(`  \\* \\[.*\\]\\(tools/${toolName}\\/README.md\\)\n`), '');
fs.writeFileSync('gitbook/SUMMARY.md', newSummary);
