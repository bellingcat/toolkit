import { spawnSync } from 'child_process';
import { GITHUB_ORG, GITHUB_PROJECT_NUMBER } from './config.mjs';

// Execute a GraphQL query/mutation via the gh CLI.
// vars: plain object; numeric values use -F (typed), strings use -f.
function ghql(query, vars = {}) {
  const args = ['api', 'graphql', '-f', `query=${query}`];
  for (const [key, value] of Object.entries(vars)) {
    const flag = typeof value === 'number' ? '-F' : '-f';
    args.push(flag, `${key}=${value}`);
  }
  const result = spawnSync('gh', args, { encoding: 'utf-8' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`gh api graphql failed:\n${result.stderr}`);
  const data = JSON.parse(result.stdout);
  if (data.errors) throw new Error(data.errors.map(e => e.message).join('\n'));
  return data;
}

// --- Cached project metadata ---

let _projectId = null;
let _fields = null;

function getProjectId() {
  if (_projectId) return _projectId;
  const data = ghql(`
    query($org: String!, $number: Int!) {
      organization(login: $org) {
        projectV2(number: $number) { id }
      }
    }`, { org: GITHUB_ORG, number: GITHUB_PROJECT_NUMBER });
  _projectId = data.data.organization.projectV2.id;
  return _projectId;
}

// Returns { "Field Name": { id, name, options? }, ... }
function getProjectFields() {
  if (_fields) return _fields;
  const projectId = getProjectId();
  const data = ghql(`
    query($project: ID!) {
      node(id: $project) {
        ... on ProjectV2 {
          fields(first: 50) {
            nodes {
              ... on ProjectV2Field { id name }
              ... on ProjectV2SingleSelectField { id name options { id name } }
            }
          }
        }
      }
    }`, { project: projectId });
  _fields = {};
  for (const node of data.data.node.fields.nodes) {
    if (node.name) _fields[node.name] = node;
  }
  return _fields;
}

// --- Item queries ---

const ITEMS_QUERY = `
  query($project: ID!, $after: String!) {
    node(id: $project) {
      ... on ProjectV2 {
        items(first: 100, after: $after) {
          nodes {
            id
            fieldValues(first: 20) {
              nodes {
                ... on ProjectV2ItemFieldTextValue {
                  text
                  field { ... on ProjectV2FieldCommon { name } }
                }
              }
            }
          }
          pageInfo { endCursor hasNextPage }
        }
      }
    }
  }`;

// Returns all project items (paginated).
function fetchAllItems() {
  const projectId = getProjectId();
  const items = [];
  let cursor = '';
  let hasNextPage = true;
  while (hasNextPage) {
    const data = ghql(ITEMS_QUERY, { project: projectId, after: cursor });
    const page = data.data.node.items;
    items.push(...page.nodes);
    hasNextPage = page.pageInfo.hasNextPage;
    cursor = page.pageInfo.endCursor || '';
  }
  return items;
}

// Returns the project item whose "Tool ID" field matches toolSlug, or null.
function findItemByToolId(toolSlug) {
  const projectId = getProjectId();
  let cursor = '';
  let hasNextPage = true;
  while (hasNextPage) {
    const data = ghql(ITEMS_QUERY, { project: projectId, after: cursor });
    const page = data.data.node.items;
    const match = page.nodes.find(item =>
      item.fieldValues.nodes.some(
        fv => fv.field?.name === 'Tool ID' && fv.text === toolSlug
      )
    );
    if (match) return match;
    hasNextPage = page.pageInfo.hasNextPage;
    cursor = page.pageInfo.endCursor || '';
  }
  return null;
}

// --- High-level operations ---

// Creates a draft project item for a tool and sets Tool ID + Space ID fields.
function addItemToProject(toolSlug, spaceId, toolTitle) {
  const projectId = getProjectId();
  const fields = getProjectFields();

  const addData = ghql(`
    mutation($project: ID!, $title: String!) {
      addProjectV2DraftIssue(input: { projectId: $project title: $title }) {
        projectItem { id }
      }
    }`, { project: projectId, title: toolTitle || toolSlug });
  const itemId = addData.data.addProjectV2DraftIssue.projectItem.id;

  ghql(`
    mutation(
      $project: ID! $item: ID!
      $toolField: ID! $spaceField: ID!
      $toolValue: String! $spaceValue: String!
    ) {
      set_tool_id: updateProjectV2ItemFieldValue(input: {
        projectId: $project itemId: $item fieldId: $toolField
        value: { text: $toolValue }
      }) { projectV2Item { id } }
      set_space_id: updateProjectV2ItemFieldValue(input: {
        projectId: $project itemId: $item fieldId: $spaceField
        value: { text: $spaceValue }
      }) { projectV2Item { id } }
    }`, {
    project: projectId,
    item: itemId,
    toolField: fields['Tool ID'].id,
    spaceField: fields['Space ID'].id,
    toolValue: toolSlug,
    spaceValue: spaceId,
  });

  console.log(`Added project item ${itemId} for ${toolSlug}`);
  return itemId;
}

// Finds and deletes the project item for toolSlug. Warns if not found.
function removeItemFromProject(toolSlug) {
  const projectId = getProjectId();
  const item = findItemByToolId(toolSlug);
  if (!item) {
    console.warn(`Warning: No GitHub project item found for "${toolSlug}" — skipping deletion`);
    return;
  }
  ghql(`
    mutation($project: ID!, $item: ID!) {
      deleteProjectV2Item(input: { projectId: $project itemId: $item }) {
        deletedItemId
      }
    }`, { project: projectId, item: item.id });
  console.log(`Deleted project item ${item.id} for ${toolSlug}`);
}

// Finds the item by oldSlug and updates its Tool ID field to newSlug. Warns if not found.
function updateToolId(oldSlug, newSlug) {
  const projectId = getProjectId();
  const item = findItemByToolId(oldSlug);
  if (!item) {
    console.warn(`Warning: No GitHub project item found for "${oldSlug}" — skipping update`);
    return;
  }
  const fields = getProjectFields();
  ghql(`
    mutation($project: ID!, $item: ID!, $field: ID!, $value: String!) {
      updateProjectV2ItemFieldValue(input: {
        projectId: $project itemId: $item fieldId: $field value: { text: $value }
      }) { projectV2Item { id } }
    }`, {
    project: projectId,
    item: item.id,
    field: fields['Tool ID'].id,
    value: newSlug,
  });
  console.log(`Updated Tool ID from "${oldSlug}" to "${newSlug}"`);
}

export default { addItemToProject, removeItemFromProject, updateToolId, fetchAllItems, getProjectId, getProjectFields };
