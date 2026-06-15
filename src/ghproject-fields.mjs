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
  teamId: 'Team ID',
  teamMembers: 'Team Members',
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

function getField(fieldName, item) {
  return item.fieldValues.nodes.find((node) => node.field?.name === fieldName) || {};
}

// Fetch all project items, mapped to a flat object per item.
function getProjectItems() {
  const rawItems = client.fetchAllItems();
  return rawItems.map(function(item) {
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
      teamId: getField(FIELDS.teamId.name, item).text,
      teamMembers: getField(FIELDS.teamMembers.name, item).text,
      changeRequestAuthor: getField(FIELDS.author.name, item).text,
      reviewers: getField(FIELDS.reviewers.name, item).text,
      collection: getField(FIELDS.collection.name, item).text,
    };
  });
}

export default { FIELDS, OPTIONS, getProjectItems };
