import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchChangeRequests, fetchChangeRequestReviewers, findSpace} = pkg2
import graphql from './graphql.mjs';

if (process.argv.length !== 4) {
  console.warn("Usage: node ", process.argv[1], " <project_data.json> <project_items.json>");
  process.exit(1);
}
const projectDataFilename = process.argv[2]
const projectItemsFilename = process.argv[3]

// Emits all changed project items in json with status info the repo and space
const tools = getTools();
const summary = getSummary('gitbook');

const project = JSON.parse(fs.readFileSync(projectDataFilename, 'utf-8')).data.organization.projectV2;
const fields = project.fields.nodes;

// helpers
const byName = name => (n => n.name == name);
const field = name => fields.find(byName(name));
const option = (name, fieldName) => field(fieldName).options.find(byName(name));

const DATE_FIELD_ID = field("Date submitted").id;
const URL_FIELD_ID = field("Latest change request").id;
const STATUS_FIELD_ID = field("Status").id;
const PUBLISHED_FIELD_ID = field("Published").id;
const UPDATED_DATE_FIELD_ID = field("Last updated").id;
const SPACE_FIELD_ID = field("Tool Space").id;
const REVIEWERS_FIELD_ID = field("CR Reviewers").id;
const AUTHOR_FIELD_ID = field("CR Author").id;
const TOOLID_FIELD_ID = field("Tool ID").id;
const TITLE_FIELD_ID = field("Title").id;
const REVIEW_OPTION_ID = field("Status").options.find(byName("Review Requested")).id;
const PUBLISHED_OPTION_ID = field("Status").options.find(byName("Published")).id;
const PUBLISHED_TRUE_OPTION_ID=field("Published").options.find(byName("True")).id;

function getField(field, item) {
  return item.fieldValues.nodes.find((node) => node.field.name === field) || {};
}
function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toISOString().replace(/T.*/,'');
}

const items = JSON.parse(fs.readFileSync(projectItemsFilename, 'utf-8')).map(function(item) {
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
    changeRequestAuthor: getField("CR Author", item).text,
    reviewers: getField("CR Reviewers", item).text,
  }
});

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
    changes.push(graphql.setTextField(item.id, TITLE_FIELD_ID, tool.title));
  }
  if (item.space !== space.urls.app) {
    changed.space = space.urls.app;
    changes.push(graphql.setTextField(item.id, SPACE_FIELD_ID, space.urls.app));
  }

  if (tool.updated && item.updatedAt !== tool.updated) {
    changed.updatedAt = tool.updated;
    changes.push(graphql.setDateField(item.id, UPDATED_DATE_FIELD_ID, tool.updated));
  }

  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    if (!item.published) {
      changed.published = true;
      changes.push(graphql.setSelectField(item.id, PUBLISHED_FIELD_ID, PUBLISHED_TRUE_OPTION_ID));
    }
  }

  if (space.changeRequestsOpen) {
    if (item.status !== "Review Requested" && item.status != "Editing in Progress") {
      changed.status = "Review Requested";
      changes.push(graphql.setSelectField(item.id, STATUS_FIELD_ID, REVIEW_OPTION_ID));
    }
    const changeRequests = await fetchChangeRequests(space);
    const request = changeRequests.items[0];

    // edge case: discrepency between space state and CR states
    if (request) {
      const changeRequestAuthor = request.createdBy.email;
      if (item.changeRequestAuthor != changeRequestAuthor){
        changed.changeRequestAuthor = changeRequestAuthor;
        changes.push(graphql.setTextField(item.id, AUTHOR_FIELD_ID, changeRequestAuthor));
      }

      const reviewers = await fetchChangeRequestReviewers(space, request);
      if (reviewers.count > 0) {
        const names = reviewers.items.map((item) => item.user.email ).join(', ');
        if (item.reviewers !== names) {
          changed.reviewers = names;
          changes.push(graphql.setTextField(item.id, REVIEWERS_FIELD_ID, names));
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
  if (changes.length > 0) {
    console.warn(tool.title, JSON.stringify(changed));
    console.log(graphql.mutation(changes));
  }

});
