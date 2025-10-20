import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchChangeRequests, fetchChangeRequestReviewers, findSpace} = pkg2
import graphql from './graphql.mjs';

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

const SPACE_FIELD_ID = "$space_field";
const UPDATED_DATE_FIELD_ID = "$updated_field";
const PUBLISHED_FIELD_ID = "$published_field";
const AUTHOR_FIELD_ID = "$AUTHOR_FIELD_ID";
const REVIEWERS_FIELD_ID = "$REVIEWERS_FIELD_ID";
const DATE_FIELD_ID = "$DATE_FIELD_ID";
const URL_FIELD_ID = "$URL_FIELD_ID";
const REVIEW_OPTION_ID = "$REVIEW_OPTION_ID";

tools.forEach(async function(tool) {
  let changed = {};
  let changes = [];
  const space = findSpace(tool.title);
  if (!space) {
    return;
  }
  const item = items.find((item) => item.toolId === tool.filename);
  if (!item) {
    console.error("No gh project item for tool", tool.title);
    return;
  }

  if (item.title !== tool.title) {
    changed.title = tool.title;
  }
  if (item.space !== space.urls.app) {
    changed.space = space.urls.app;
    changes.push(grqphql.setTextField(SPACE_FIELD_ID, space.urls.app));
  }

  if (tool.updated && item.updatedAt !== tool.updated) {
    changed.updatedAt = tool.updated;
    changes.push(graphql.setDateField(UPDATED_DATE_FIELD_ID, tool.updated));
  }

  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    if (!item.published) {
      changed.published = true;
      changes.push(graphql.setSelectField(PUBLISHED_FIELD_ID, PUBLISHED_TRUE_OPTION_ID));
    }
  }
  if (item.toolId != tool.filename) {
      changed.toolId = tool.filename
  }

  if (space.changeRequestsOpen) {
    if (item.status !== "Review Requested" && item.status != "Editing in Progress") {
      changed.status = "Review Requested";
      changes.push(graphql.setSelectField(PUBLISHED_FIELD_ID, REVIEW_OPTION_ID));
    }
    const changeRequests = await fetchChangeRequests(space);
    const request = changeRequests.items[0];

    // edge case: discrepency between space state and CR states
    if (request) {
      const changeRequestAuthor = request.createdBy.email;
      if (item.changeRequestAuthor != changeRequestAuthor){
        changed.changeRequestAuthor = changeRequestAuthor;
        changes.push(graphql.setTextField(AUTHOR_FIELD_ID, changeRequestAuthor));
      }

      const reviewers = await fetchChangeRequestReviewers(space, request);
      if (reviewers.count > 0) {
        const names = reviewers.items.map((item) => item.user.email ).join(', ');
        if (item.reviewers !== names) {
          changed.reviewers = names;
          changes.push(graphql.setTextField(REVIEWERS_FIELD_ID, names));
        }
      }

      const date = formatDate(request.updatedAt);
      if (item.date_submitted !== date) {
        changed.date_submitted = date
        changes.push(graphql.setDateField(DATE_FIELD_ID, date));
      }
      if (item.url !== request.urls.app) {
        changed.url = request.urls.app;
        changes.push(grqphql.setTextField(URL_FIELD_ID, request.urls.app));
      }
    }
  }
  if (Object.keys(changed).length > 0) {
    changed.id = item.id;
    //console.log(JSON.stringify(changed));
    console.debug(graphql.mutation(changes));
  }

});
