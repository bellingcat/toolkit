import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchCollection, fetchLatestChangeRequest, fetchChangeRequestReviewers, fetchSpace} = pkg2
import graphql from './graphql.mjs';

// Emits graphql mutations to update project items based on data from gitbook API

if (process.argv.length !== 4) {
  console.warn("Usage: node ", process.argv[1], " <project_data.json> <project_items.json>");
  process.exit(1);
}
const projectDataFilename = process.argv[2]
const projectItemsFilename = process.argv[3]

const FIELDS = {
  date: { name: "Date submitted"},
  url: { name: "Latest change request"},
  status: { name: "Status"},
  published: { name: "Published"},
  updatedAt: { name: "Last updated"},
  spaceUrl: { name: "Tool Space"},
  reviewers: { name: "CR Reviewers"},
  author: { name: "CR Author"},
  toolId: { name: "Tool ID"},
  spaceId: { name: "Space ID"},
  title: { name: "Title"},
  collection: { name: "Collection"},
};
const OPTIONS = {
  reviewRequested: { name: "Review Requested", field: "Status"},
  merged: { name: "Merged", field: "Status"},
  editing: { name: "Editing in Process", field: "Status"},
  publishedTrue: { name: "True", field: "Published"},
};

(function processProjectData() {
  // read project data and parse out project fields and options
  const project  = JSON.parse(fs.readFileSync(projectDataFilename, 'utf-8'));
  const nodes = project.data.organization.projectV2.fields.nodes;
  // helpers
  const byName = name => (n => n.name == name);
  const field = name => nodes.find(byName(name));
  // iterate over FIELDS and OPTIONS and populate their IDs in place
  for (const key in FIELDS) {
    FIELDS[key].id = field(FIELDS[key].name).id;
  }
  for (const key in OPTIONS) {
    OPTIONS[key].id = field(OPTIONS[key].field).options.find(byName(OPTIONS[key].name)).id;
  }
})();

const items = (function processProjectItems() {
  // read and parse project items

  // helper to get field value by name
  function getField(fieldName, item) {
    return item.fieldValues.nodes.find((node) => node.field.name === fieldName) || {};
  }

  return JSON.parse(fs.readFileSync(projectItemsFilename, 'utf-8')).map(function(item) {
    const ret = {
      id: item.id,
      title: getField(FIELDS.title.name, item).text,
      status: getField(FIELDS.status.name, item).name,
      published: getField(FIELDS.published.name, item).name,
      submittedAt: getField(FIELDS.date.name, item).date,
      url: getField(FIELDS.url.name, item).text,
      updatedAt: getField(FIELDS.updatedAt.name, item).date,
      spaceUrl: getField(FIELDS.spaceUrl.name, item).text,
      toolId: getField(FIELDS.toolId.name, item).text,
      spaceId: getField(FIELDS.spaceId.name, item).text,
      changeRequestAuthor: getField(FIELDS.author.name, item).text,
      reviewers: getField(FIELDS.reviewers.name, item).text,
      collection: getField(FIELDS.collection.name, item).text,
    };
    if (!ret.toolId) {
      console.error("No tool ID for item", ret.title);
      console.error("Item data:", JSON.stringify(item, null, 2));
      throw new Error("No tool ID for item " + ret.title);
    }
    if (!ret.spaceId) {
      console.error("No space ID for item", ret.title);
      console.error("Item data:", JSON.stringify(item, null, 2));
      throw new Error("No space ID for item " + ret.title);
    }
    return ret;

  });
})();

const tools = getTools();
const summary = getSummary('gitbook');

tools.forEach(async function(tool) {
  let changed = {};
  let changes = [];
  const item = items.find((item) => item.toolId === tool.filename);
  if (!item) {
    console.error("No gh project item for tool", tool.title);
    return;
  }
  const space = await fetchSpace(item.spaceId);
  if (!space) {
    return;
  }
  const collection = await fetchCollection(space.parent);

  if (item.title !== tool.title) {
    changed.title = tool.title;
    changes.push(graphql.setTextField(item.id, FIELDS.title.id, tool.title));
  }
  if (item.spaceUrl !== space.urls.app) {
    changed.space = space.urls.app;
    changes.push(graphql.setTextField(item.id, FIELDS.spaceUrl.id, space.urls.app));
  }
  if (item.collection !== collection.title) {
    changed.collection = collection.title;
    changes.push(graphql.setTextField(item.id, FIELDS.collection.id, collection.title));
  }

  if (tool.updated && item.updatedAt !== tool.updated) {
    changed.updatedAt = tool.updated;
    changes.push(graphql.setDateField(item.id, FIELDS.updatedAt.id, tool.updated));
  }

  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    if (!item.published) {
      changed.published = true;
      changes.push(graphql.setSelectField(item.id, FIELDS.published.id, OPTIONS.publishedTrue.id));
    }
  }

  const request = await fetchLatestChangeRequest(space);
  if (request) {
    const changeRequestAuthor = request.createdBy.email;
    if (item.changeRequestAuthor != changeRequestAuthor){
      changed.changeRequestAuthor = changeRequestAuthor;
      changes.push(graphql.setTextField(item.id, FIELDS.author.id, changeRequestAuthor));
    }

    const reviewers = await fetchChangeRequestReviewers(space, request);
    if (reviewers.count > 0) {
      const names = reviewers.items.map((item) => item.user.email ).join(', ');
      if (item.reviewers !== names) {
        changed.reviewers = names;
        changes.push(graphql.setTextField(item.id, FIELDS.reviewers.id, names));
      }
    }

    const dateString = graphql.formatDate(request.updatedAt);
    if (item.submittedAt !== dateString) {
      changed.submittedAt = dateString
      changes.push(graphql.setDateField(item.id, FIELDS.date.id, dateString));
    }
    if (item.url !== request.urls.app) {
      changed.url = request.urls.app;
      changes.push(graphql.setTextField(item.id, FIELDS.url.id, request.urls.app));
    }

    switch (request.status) {
      case 'merged':
        if (item.status !== OPTIONS.merged.name) {
          changed.status = OPTIONS.merged.name;
          changes.push(graphql.setSelectField(item.id, FIELDS.status.id, OPTIONS.merged.id));
        }
        break;
      case 'open':
        if (item.status == OPTIONS.editing.name) {
          break; // ignore these, don't revert to review requested.
        }
        if (item.status !== OPTIONS.reviewRequested.name) {
          changed.status = OPTIONS.reviewRequested.name;
          changes.push(graphql.setSelectField(item.id, FIELDS.status.id, OPTIONS.reviewRequested.id));
        }
        break;
      default:
        console.error('Bad change request status', request.status);
    }
  }

  if (changes.length > 0) {
    console.warn(tool.title)
    console.warn(JSON.stringify(changed, null, 2));
    console.log(graphql.mutation(changes));
  }

});
