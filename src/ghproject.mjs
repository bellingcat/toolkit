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
    url: getField("Latest change request", item).text,
    updatedAt: getField("Last updated", item).date,
    space: getField("Tool Space", item).text,
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

  if (item.space !== space.urls.app) {
    item.space = space.urls.app;
    changed = true;
  }

  if (tool.updated && item.updatedAt !== tool.updated) {
    item.updatedAt = tool.updated;
    changed = true;
  }

  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    if (!item.published) {
      item.published = true;
      changed = true;
    }
  }

  if (space.changeRequestsOpen) {
    if (item.status !== "Review Requested" && item.status != "Editing in Progress") {
      item.status = "Review Requested";
      changed = true;
    }
    const changeRequests = await fetchChangeRequests(space);
    const request = changeRequests.items[0];
    const date = formatDate(request.updatedAt);
    if (item.date_submitted !== date) {
      item.date_submitted = date
      changed = true;
    }
    if (item.url !== request.urls.app) {
      item.url = request.urls.app;
      changed = true;
    }
  }
  if (changed) {
    console.log(JSON.stringify(item));
  }

});
