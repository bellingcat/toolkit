import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
const {apiCall, getCategories, getTools, getRegions, writeIfChanged, getSummary} = pkg;
import matter from 'gray-matter'
import { ORG_ID, DEFAULT_COLLECTION_ID, TOOL_PAGE_MAINTAINERS_TEAM_ID, CATEGORY_COLLECTION_IDS } from './config.mjs';

/* Example
createTool({
  name: 'Tool Name',
  description: 'A brief one-line description of the tool.',
  tags: ['category'],
  url: 'https://example.com',
  cost: 'Free',
});
*/
function debug(...args) {
    console.warn(...args);
}
function checkBoxes(tool, choices, template) {
  for (const choice of choices) {
    const slug = choice.tag;
    // if the slug is in the tool tags
    if (tool.tags.includes(slug)) {
      // replace the line [ ] (Title)[link] with [x] (Title)[link]
      template = template.replace(`[ ] [${choice.title}]`, `[x] [${choice.title}]`);
    }
  }
  return template;
}
function toolToRegions(tool) {
  let regions = getRegions();
  let template = fs.readFileSync('template/regions.md', 'utf-8');
  return checkBoxes(tool, regions, template);
}
function toolToCategories(tool) {
  let categories = getCategories();
  let template = fs.readFileSync('template/categories.md', 'utf-8');
  return checkBoxes(tool, categories, template);
}

function toolToReadme(tool) {
  const template = fs.readFileSync('template/README.md', 'utf-8');
  let readme = template.replace("# Tool Name", `# ${tool.name}`);
  if (tool.description) {
    readme = readme.replace(/description: .*/g, `description: ${tool.description}`);
  }
  if (tool.url) {
    readme = readme.replace("https://example.com", tool.url);
  }
  return readme;
}
function toolToSummary(tool) {
  const template = fs.readFileSync('template/SUMMARY.md', 'utf-8');
  const title = tool.title || tool.name;
  return template.replace("Tool Name", `${title}`);
}
function publishTool(name) {
  const slug = slugify(name);

  // process README.md in the tool directory
  const filepath = path.join('gitbook', 'tools', slug);
  const filename = 'README.md';
  if (! fs.existsSync(filepath)) {
    console.log("Not found: ", filepath);
    throw new Error(["Can't publish", name, "-", filepath, "does not exist"].join(' '));
  }

  const tools = getTools();
  const tool = tools.find((x) => x.title === name || x.directory === filepath);

  if (!tool) {
    console.log("No tool found: ", name);
    throw new Error(["Can't publish", name, "- Tool not found"].join(' '));
  }

  const link = path.join('tools', slug, 'README.md');
  const summary = getSummary('gitbook');

  if (summary.match(link)) {
    console.log("Link already found in summary: ", link);
    throw new Error(["Can't publish", name, "-", link, "already published"].join(' '));
  }

  const newSummary = summary + `\n  * [${tool.title}](${link})\n`;
  fs.writeFileSync(path.join('gitbook', 'SUMMARY.md'), newSummary);

  const json = tool.json;
  delete json.draft;
  json.publishedAt = Date.now();
  fs.writeFileSync(tool.jsonFilePath, JSON.stringify(json, null, 2));
}
function slugify(toolName) {
  const safe = toolName
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
    .replace(/\s+/g, '-')
    .replace(/,/g, '')
    .toLowerCase();
  return safe || 'untitled';
}
function createTool(tool, opts={}) {
  const { name, tags } = tool;
  debug('Creating tool', name);
  const slug = slugify(name);
  const pathname = `gitbook/tools/${slug}`;
  const json = { draft: true, tags: [] };

  if (!opts.overwrite && fs.existsSync(pathname)) {
    debug("Tool already exists");
  } else {
    fs.mkdirSync(pathname, { recursive: true });
    fs.writeFileSync(`${pathname}/tool.json`, JSON.stringify(json, null, 2));
    fs.writeFileSync(`${pathname}/README.md`, toolToReadme(tool));
    fs.writeFileSync(`${pathname}/SUMMARY.md`, toolToSummary(tool));
    fs.writeFileSync(`${pathname}/categories.md`, toolToCategories(tool));
    fs.writeFileSync(`${pathname}/regions.md`, toolToRegions(tool));
    debug("Tool created");
  }
  debug("");
  debug("*************************************");
  debug("**** Monorepo: Project directory ****")
  debug("*************************************");
  debug("");
  debug(pathname);
  debug("");
  debug("");
  debug("**********************************************");
  debug("**** Commit messages: Use custom template ****")
  debug("**********************************************");
  debug("                              ");
  debug(`GITBOOK-${slug}-{change_request_number}: {change_request_subject}`);
  debug("                              ");
  debug("                              ");
  return slug;
}

async function fetchSpace(spaceId) {
  return await apiCall(`https://api.gitbook.com/v1/spaces/${spaceId}`, {
    method: 'GET',
  });
}
async function fetchSpaces(page='', collectionId=DEFAULT_COLLECTION_ID) {
  const collections = await _fetchCollections();
  const collectionIds = [DEFAULT_COLLECTION_ID].concat( collections.filter((c) => c.parent === DEFAULT_COLLECTION_ID).map((c) => c.id) );
  console.log(collectionIds);

  let results = [];
  for (var i in collectionIds) {
    const id = collectionIds[i];
    let spaces = await _fetchSpaces('', id);
    console.log(id, spaces.length);
    results = results.concat(spaces);

    // sleep to avoid rate limit errors
    //await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return results;
}

async function fetchCollection(collectionId) {
  return await apiCall(`https://api.gitbook.com/v1/collections/${collectionId}`, {
    method: 'GET',
  });
}

// Generic paginator for GitBook list endpoints.
// buildUrl(page) must return the full URL string for a given page cursor.
// Handles the GitBook API bug where next.page can equal the first item's id.
async function fetchPaginated(buildUrl, page='') {
  const data = await apiCall(buildUrl(page), { method: 'GET' });
  if (data.next) {
    if (data.next.page === data.items[0].id) {
      console.warn("next page is same as current page!");
      // hack! gitbook api bug: the last item is the same as the first time. take the id of the second to last item as the next page
      return data.items.concat(await fetchPaginated(buildUrl, data.items[data.items.length-2].id));
    }
    if (data.next.page) {
      return data.items.concat(await fetchPaginated(buildUrl, data.next.page));
    }
  }
  return data.items;
}

function _fetchCollections(page='') {
  return fetchPaginated(
    (p) => `https://api.gitbook.com/v1/orgs/${ORG_ID}/collections?` + new URLSearchParams({ nested: true, page: p }),
    page
  );
}
function _fetchSpaces(page='', collectionId=DEFAULT_COLLECTION_ID) {
  return fetchPaginated(
    (p) => `https://api.gitbook.com/v1/collections/${collectionId}/spaces?` + new URLSearchParams({ page: p }),
    page
  );
}
function fetchTeams(page='') {
  return fetchPaginated(
    (p) => `https://api.gitbook.com/v1/orgs/${ORG_ID}/teams?` + new URLSearchParams({ page: p }),
    page
  );
}

async function createToolOnGitbook(toolName, category, email) {
  debug('Creating tool on Gitbook', toolName);
  debug('Guardian Category', category);

  // Convert category to collection id.
  const collection = CATEGORY_COLLECTION_IDS[category];
  const slug = slugify(toolName);

  const space = await createSpace(slug, collection);
  const team = await createTeam(toolName);

  if (email) {
    await addTeamMember(team, email);
    await addTeamMember({id : TOOL_PAGE_MAINTAINERS_TEAM_ID}, email); // Tool Page Maintainers team
    debug("Added 1 team member");
  }

  if (space.urls) {
    return space;
  } else {
    debug('Error: No URL found');
    debug(space);
  }
}

async function findSpace(name) {
  let page = '';
  while (true) {
    const data = await apiCall(
      `https://api.gitbook.com/v1/orgs/${ORG_ID}/spaces?` + new URLSearchParams({ page }),
      { method: 'GET' }
    );
    const match = data.items.find((s) => s.title === name);
    if (match) return match;
    if (!data.next?.page || data.next.page === data.items[0]?.id) break;
    page = data.next.page;
  }
}

async function createSpace(name, collection) {
  const space = await findSpace(name);
  if (space) {
    debug('Space already exists');
    return space;
  }

  debug('Creating a new empty space', name);
  const data = await apiCall(`https://api.gitbook.com/v1/orgs/${ORG_ID}/spaces`, {
    method: 'POST',
    body: {
      title: name,
      emoji: '🛠️',
      parent: collection || DEFAULT_COLLECTION_ID
    },
  });

  // update spaces.json
  const spaces = readSpaces();
  spaces.push(data);
  writeSpaces(spaces);

  return data;
}

function readSpaces() {
  return JSON.parse(fs.readFileSync('spaces.json', 'utf-8'));
}
function writeSpaces(spaces) {
  // remove duplicate spaces by id
  spaces = spaces.filter((space, index, self) => self.findIndex((s) => s.id === space.id) === index);
  console.log('writing', spaces.length, 'spaces to',  'spaces.json');
  fs.writeFileSync('spaces.json', JSON.stringify(spaces, null, 2));
}
async function renameTool(tool, name) {
  const slug = slugify(name);

  // Rename the tool directory
  const newFilepath = path.join('gitbook/tools', slug);
  console.log('Moving tool from', tool.directory, 'to',  newFilepath);
  fs.renameSync(tool.directory, newFilepath);

  //is it  in the summary?
  const link = path.join('tools', slug, 'README.md');
  const summary = getSummary('gitbook');
  if (summary.match(link)) {

    summary.replace(link, newLink);
  }
  return;
}
async function renameSpace(space, name) {
  debug('Renaming space to', name);
  const data = await apiCall(`https://api.gitbook.com/v1/spaces/${space.id}`, {
    method: 'PATCH',
    body: { "title": name },
  });
  return data;
}

async function findTeam(name) {
  const teams = await fetchPaginated(
    (p) => `https://api.gitbook.com/v1/orgs/${ORG_ID}/teams?` + new URLSearchParams({ title: name, page: p })
  );
  return teams.find((team) => team.title === name);
}

async function addTeamMember(team, email) {
  const response = await apiCall(`https://api.gitbook.com/v1/orgs/${ORG_ID}/teams/${team.id}/members`, {
    method: 'PUT',
    body: { "add": [email] }
  });
  if (response.status !== 204) {
    throw new Error(`Failed to add team member to ${team}`);
  }
}

async function _createTeam(name) {
  try {
    const data = await apiCall(`https://api.gitbook.com/v1/orgs/${ORG_ID}/teams`, {
      method: 'PUT',
      body: { "title": name },
    });
    return data;
  } catch (e) {
    if (e.message === "This name is already taken by another team in your organization. (400)") {
      debug("Edge case: the team exists on gitbook but we don't know about it.");
      const teams = await fetchTeams();
      return teams.find((element) => element.title === name);
    }
    throw e;
  }
}

async function createTeam(name) {
  const team = await findTeam(name);
  if (team) {
    debug('Team already exists');
    return team;
  }
  debug('Creating team', name);
  const data = await _createTeam(name);

  return data;
}

async function fetchMergedChangeRequests(space) {
  const data = await apiCall(`https://api.gitbook.com/v1/spaces/${space.id}/change-requests?` + new URLSearchParams({ status: 'merged', limit: 1}), {
    method: 'GET'
  });
  return data;
}
async function fetchOpenChangeRequests(space) {
  const data = await apiCall(`https://api.gitbook.com/v1/spaces/${space.id}/change-requests?` + new URLSearchParams({ status: 'open', limit: 1}), {
    method: 'GET'
  });
  return data;
}
async function fetchLatestChangeRequest(space) {
  const openChangeRequests = await fetchOpenChangeRequests(space);
  let request = openChangeRequests.items[0];
  if (!request) {
    const mergedChangeRequests = await fetchMergedChangeRequests(space);
    request = mergedChangeRequests.items[0];
  }
  return request;
}

async function fetchChangeRequestReviewers(space, changeRequest) {
  const data = await apiCall(`https://api.gitbook.com/v1/spaces/${space.id}/change-requests/${changeRequest.id}/requested-reviewers`, {
    method: 'GET'
  });
  return data;
}
function removeTool(toolName) {
  // Remove the tool directory
  if (fs.existsSync(`gitbook/tools/${toolName}`)) {
    fs.rmSync(`gitbook/tools/${toolName}`, { recursive: true });
  } else {
    throw new Error(`Tool ${toolName} not found`);
  }

  // Read the SUMMARY.md file and remove the markdown link to this tool
  const summary = fs.readFileSync('gitbook/SUMMARY.md', 'utf-8');
  const newSummary = summary.replace(new RegExp(`  \\* \\[.*\\]\\(tools/${toolName}\\/README.md\\)\n`), '');
  fs.writeFileSync('gitbook/SUMMARY.md', newSummary);
}

function updateToolJSON(tool, json) {
  if (!json) {
    json = tool.json;
  }
  const pathname = tool.jsonFilePath;
  writeIfChanged(JSON.stringify(json, null, 2), pathname);
  tool.json = json;
}

function updateToolCategories(tool) {
  writeIfChanged(toolToCategories(tool), tool.categoriesFilePath);
  writeIfChanged(toolToRegions(tool), tool.regionsFilePath);
}

function updateToolSummary(tool) {
  const pathname = path.join(tool.directory, 'SUMMARY.md');
  writeIfChanged(toolToSummary(tool), pathname);
}

export default {
  createTool,
  createToolOnGitbook,
  fetchSpace,
  fetchSpaces,
  fetchChangeRequestReviewers,
  fetchLatestChangeRequest,
  fetchCollection,
  publishTool,
  removeTool,
  renameTool,
  updateToolJSON,
  updateToolCategories,
  updateToolSummary,
  writeSpaces,
};
