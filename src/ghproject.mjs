import path from 'path'
import pkg from './data.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchCollection, fetchLatestChangeRequest, fetchChangeRequestReviewers, fetchSpace} = pkg2
import graphql from './graphql.mjs';
import client from './ghproject-client.mjs';

// Field/option name constants — resolved lazily via client
const FIELD_NAMES = {
  date: 'Date submitted',
  url: 'Latest change request',
  status: 'Status',
  published: 'Published',
  updatedAt: 'Last updated',
  spaceUrl: 'Tool Space',
  reviewers: 'CR Reviewers',
  author: 'CR Author',
  toolId: 'Tool ID',
  spaceId: 'Space ID',
  title: 'Title',
  collection: 'Collection',
};
const OPTION_NAMES = {
  reviewRequested: { name: 'Review Requested', field: 'Status' },
  merged: { name: 'Merged', field: 'Status' },
  editing: { name: 'Editing in Process', field: 'Status' },
  publishedTrue: { name: 'True', field: 'Published' },
};

// Resolve field and option IDs from the live project
const fields = client.getProjectFields();
const FIELDS = {};
for (const [key, name] of Object.entries(FIELD_NAMES)) {
  FIELDS[key] = { id: fields[name].id, name };
}
const OPTIONS = {};
for (const [key, { name, field }] of Object.entries(OPTION_NAMES)) {
  OPTIONS[key] = {
    id: fields[field].options.find(o => o.name === name).id,
    name,
  };
}

// Fetch all project items live
function getField(fieldName, item) {
  return item.fieldValues.nodes.find((node) => node.field?.name === fieldName) || {};
}
const rawItems = client.fetchAllItems();
const items = rawItems.map(function(item) {
  return {
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
}).filter(item => {
  if (!item.toolId) {
    console.error('No tool ID for item', item.title);
    return false;
  }
  return true;
});

const tools = getTools();
const summary = getSummary('gitbook');

// make this loop sequential to avoid rate limiting
for (const tool of tools) {
  let changed = {};
  let changes = [];
  const item = items.find((item) => item.toolId === tool.filename);
  if (!item) {
    console.error("No gh project item for tool", tool.title);
    continue;
  }

  if (item.title !== tool.title) {
    changed.title = tool.title;
    changes.push(graphql.setTextField(item.id, FIELDS.title.id, tool.title));
  }
  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    if (!item.published) {
      changed.published = true;
      changes.push(graphql.setSelectField(item.id, FIELDS.published.id, OPTIONS.publishedTrue.id));
    }
  }
  if (tool.updated && item.updatedAt !== tool.updated) {
    changed.updatedAt = tool.updated;
    changes.push(graphql.setDateField(item.id, FIELDS.updatedAt.id, tool.updated));
  }


  if (item.spaceId) {
    const space = await fetchSpace(item.spaceId);
    if (!space) {
      continue;
    }
    const collection = await fetchCollection(space.parent);

    if (item.spaceUrl !== space.urls.app) {
      changed.space = space.urls.app;
      changes.push(graphql.setTextField(item.id, FIELDS.spaceUrl.id, space.urls.app));
    }
    if (item.collection !== collection.title) {
      changed.collection = collection.title;
      changes.push(graphql.setTextField(item.id, FIELDS.collection.id, collection.title));
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
  }
  if (changes.length > 0) {
    console.warn(tool.title);
    console.warn(JSON.stringify(changed, null, 2));
    client.executeMutation(graphql.mutation(changes), { project: client.getProjectId() });
  }
} // end for tool
