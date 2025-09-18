import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchChangeRequests, findSpace} = pkg2

// Emits all changed project items in json with status info the repo and space
const tools = getTools();
const summary = getSummary('gitbook');

function getField(field, item) {
  return item.fieldValues.nodes.find((node) => node.field.name === field) || {};
}
function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toISOString().replace(/T.*/,'');
}
const items = JSON.parse(fs.readFileSync('project_items.json', 'utf-8')).map(function(item) {
  return {
    id: item.id,
    title: getField("Title", item).text,
    status: getField("Status", item).name,
    published: getField("Published", item).name,
    date_submitted: getField("Date submitted", item).date,
    url: getField("URL", item).text,
  }
});

tools.forEach(async function(tool) {
  let changed = false;
  const space = findSpace(tool.title);
  if (!space) {
    return;
  }
  const item = items.find((item) => item.title === tool.title);
  if (!item) {
    console.error("No gh project item for tool", tool.title);
    return;
  }

  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    if (!item.published) {
      item.published = true;
      changed = true;
    }
  }

  const changeRequests = await fetchChangeRequests(space);
  if (changeRequests.count) {
    const request = changeRequests.items[0];
    const date = formatDate(request.updatedAt);
    if (item.date_submitted !== date) {
      item.date_submitted = date
      item.url = request.urls.app;
      item.status = "Review Requested";
      changed = true;
    }
  }
  if (changed) {
    console.log(JSON.stringify(item));
  }

});
