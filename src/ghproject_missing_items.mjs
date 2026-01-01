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
//
const inputFilename = process.argv[2]
const items = JSON.parse(fs.readFileSync(inputFilename, 'utf-8'));
const tools = getTools();

function itemTitle(item) {
  return item.fieldValues.nodes.find((node) => node.field.name === "Title").text ;
}
function itemToolId(item) {
  return item.fieldValues.nodes.find((node) => node.field.name === "Tool ID").text ;
}
function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toISOString().replace(/T.*/,'');
}
tools.forEach(async function(tool) {
  const space = findSpace(tool);
  if (!space) {
    return;
  }
  const item = items.find((item) => itemToolId(item) === tool.filename);
  if (!item) {
    console.log(tool.filename);
    return;
  }
});
