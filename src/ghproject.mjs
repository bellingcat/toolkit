import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchChangeRequests, fetchChangeRequestReviewers, findSpace} = pkg2

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
    toolId: getField("Tool ID", item).text,
  }
});

tools.forEach(async function(tool) {
  let changed = {};
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
    changed.space = space.urls.app;
  }

  if (tool.updated && item.updatedAt !== tool.updated) {
    changed.updatedAt = tool.updated;
  }

  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    if (!item.published) {
      changed.published = true;
    }
  }
  if (item.toolId != tool.directory) {
      changed.toolId = tool.directory
  }

  if (space.changeRequestsOpen) {
    if (item.status !== "Review Requested" && item.status != "Editing in Progress") {
      changed.status = "Review Requested";
    }
    const changeRequests = await fetchChangeRequests(space);
    const request = changeRequests.items[0];

    // edge case: discrepency between space state and CR states
    if (request) {
      const changeRequestAuthor = request.createdBy.email;
      if (item.changeRequestAuthor != changeRequestAuthor){
        changed.changeRequestAuthor = changeRequestAuthor;
      }

      const reviewers = await fetchChangeRequestReviewers(space, request);
      if (reviewers.count > 0) {
        const names = reviewers.items.map((item) => item.user.email ).join(', ');
        if (item.reviewers !== names) {
          changed.reviewers = names;
        }
      }

      const date = formatDate(request.updatedAt);
      if (item.date_submitted !== date) {
        changed.date_submitted = date
      }
      if (item.url !== request.urls.app) {
        changed.url = request.urls.app;
      }
    }
  }
  if (Object.keys(changed).length > 0) {
    changed.id = item.id;
    console.log(JSON.stringify(changed));
  }

});
