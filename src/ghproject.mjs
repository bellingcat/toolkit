import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchChangeRequests, findSpace} = pkg2

// Emits all project items in json with status info derived from the repo

const items = JSON.parse(fs.readFileSync('project_items.json', 'utf-8'));
const tools = getTools();
const summary = getSummary('gitbook');

function getField(field, item) {
  return item.fieldValues.nodes.find((node) => node.field.name === field);
}
function itemTitle(item) {
  return getField("Title", item).text;
}
function itemStatus(item) {
  return getField("Status", item).name;
}
function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toISOString().replace(/T.*/,'');
}
tools.forEach(async function(tool) {

  const space = findSpace(tool.title);
  if (!space) {
    console.error("No space for tool", tool.title);
    return;
  }
  const item = items.find((item) => itemTitle(item) === tool.title);
  if (!item) {
    console.error("No gh project item for tool", tool.title);
    return;
  }

  const json = { id: item.id, status: itemStatus(item), title: tool.title };
  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    json.status = "Published";
  }

  const changeRequests = await fetchChangeRequests(space);
  if (changeRequests.count) {
    const request = changeRequests.items[0];
    json.date_submitted = formatDate(request.updatedAt);
    json.url = request.urls.app;
    json.status = "Review Requested";
  }
  console.log(JSON.stringify(json));

});
