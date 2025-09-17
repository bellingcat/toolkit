import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchChangeRequests, findSpace} = pkg2

// Reads the existing list of project items from project_items.json
// Identifies tools in the github repo with gitbook spaces but no project item.
// Emits the names of tools that need to be added to the github project.

const items = JSON.parse(fs.readFileSync('project_items.json', 'utf-8'));
const tools = getTools();

function itemTitle(item) {
  return item.fieldValues.nodes.find((node) => node.field.name === "Title").text ;
}
function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toISOString().replace(/T.*/,'');
}
tools.forEach(async function(tool) {

  const space = findSpace(tool.title);
  if (!space) {
    return;
  }
  const item = items.find((item) => itemTitle(item) === tool.title);
  if (!item) {
    console.log(tool.title);
    return;
  }
});
