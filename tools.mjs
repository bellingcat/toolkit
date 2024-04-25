import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
const {processMarkdownFile} = pkg;

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
    console.debug(...args);
}
function toolToJson(tool) {
  const json = JSON.stringify(tool, null, 2);
  const jsonTemplate = fs.readFileSync('template/json.md', 'utf-8');
  return jsonTemplate.replace(/```(json)?\n([\s\S]+)\n```/, '```json\n'+json+'\n```');
}

function toolToReadme(tool) {
  const template = fs.readFileSync('template/README.md', 'utf-8');
  return template.
    replace("# Tool Name", `# ${tool.name}`).
    replace(/description: .*/g, `description: ${tool.description}`).
    replace("https://example.com", tool.url);
}
function toolToSummary(tool) {
  const template = fs.readFileSync('template/SUMMARY.md', 'utf-8');
  return template.replace("Tool Name", `${tool.name}`);
}
function createTool(tool, opts={}) {
  const { name, tags } = tool;
  debug('Creating tool', name);
  const slug = name.replace(/\s/g, '-').toLowerCase();
  const pathname = `gitbook/tools/${slug}`;

  if (!opts.overwrite && fs.existsSync(pathname)) {
    debug("Tool already exists");
  } else {
    fs.mkdirSync(pathname, { recursive: true });
    fs.writeFileSync(`${pathname}/json.md`, toolToJson(tool));
    fs.writeFileSync(`${pathname}/README.md`, toolToReadme(tool));
    fs.writeFileSync(`${pathname}/SUMMARY.md`, toolToSummary(tool));
    debug("Tool created");
  }
  debug("******GITSYNC CONFIGURATION******");
  debug("Monorepo project directory :", pathname);
  debug("Commit message template    :", `GITBOOK-${slug}-{change_request_number}: {change_request_subject}`);
  debug("*********************************");
  return slug;
}

async function apiCall(url, params) {
  debug('API call', url, params);
  const response = await fetch(url, {
    method: params.method,
    headers: {
      "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
      headers: { "Content-Type": "application/json" },
      ...params.headers,
    },
    body: JSON.stringify(params.body),
    signal: AbortSignal.timeout( 10 * 1000 ), // 10 seconds
  });

  debug('API response', response.status);
  // check rate limit headers
  if (response.headers.get('x-ratelimit-remaining') === '0') {
    console.log('Rate limit exceeded');
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    const data = await response.json();
    if (data.error) {
      throw new Error(`${data.error.message} (${data.error.code})`);
    }
    return data;
  } else {
    const data = await response.text();
    throw new Error('API call returned: ', data);
  }
}

async function getToolSpaces(page='') {
  const data = await apiCall('https://api.gitbook.com/v1/collections/jQKvylm6WgaH5IFrlIMh/spaces?' + new URLSearchParams({ page: page }), {
    method: 'GET',
  });
  if (data.next) {
    console.log(data.items.map((item) => item.title));
    if (data.next.page === data.items[0].id) {
      // hack! gitbook api bug??
      console.log("next page is same as current page!");
      return data.items.concat(await getToolSpaces('gFyhkyGIUQeagl5h4HEp'));
    }
    if (data.next.page) {
      return data.items.concat(await getToolSpaces(data.next.page));
    }
  }
  return data.items;
}

async function getTeams(page='') {
  const data = await apiCall('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/teams?' + new URLSearchParams({ page: page }), {
    method: 'GET',
  });
  if (data.next && data.next.page) {
    return data.items.concat(await getTeams(data.next.page));
  }
  return data.items;
}

async function createToolOnGitbook(toolName, email) {
  debug('Creating tool on Gitbook', toolName);
  const space = await createSpace(toolName);
  const team = await createTeam(toolName);

  if (email) {
    await addTeamMember(team, email);
    await addTeamMember({id : "6RIWbZ6uKR8m6kwje0s7"}, email); // Tool Page Maintainers team
    debug("Added 1 team member");
  }

  if (space.urls) {
    return space.urls.app;
  } else {
    debug('Error: No URL found');
    debug(space);
  }
}

async function findSpace(name, page='') {
  const response = await fetch('https://api.gitbook.com/v1/collections/jQKvylm6WgaH5IFrlIMh/spaces?' + new URLSearchParams({ page: page }), {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`
    },
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error.message);
  }
  const space = data.items.find((space) => space.title === name);
  if (space) {
    return space;
  }
  if (data.next) {
    return await findSpace(name, data.next.page);
  }
}

async function createSpace(name) {
  const space = await findSpace(name);
  if (space) {
    debug('Space already exists');
    return space;
  }
  debug('Duplicating the template space');
  const data = apiCall('https://api.gitbook.com/v1/spaces/LWUcuebJXer3XFC0YLqM/duplicate', {
    method: 'POST',
  });
  const updated = await renameSpace(data, name)
  return updated;
}

async function renameSpace(space, name) {
  debug('Renaming space to', name);
  const data = await apiCall(`https://api.gitbook.com/v1/spaces/${space.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ "title": name }),
  });
  return data;
}

async function findTeam(name, page='') {
  const response = await fetch('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/teams?' + new URLSearchParams({ page: page }), {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
        }
  });
  const data = await response.json();
  const team = data.items.find((team) => team.title === name);
  if (team) {
    return team;
  }
  if (data.next) {
    return await findTeam(name, data.next.page);
  }
}

async function addTeamMember(team, email) {
  const data = await apiCall(`https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/teams/${team.id}/members`, {
    method: 'PUT',
    body: JSON.stringify({ "add": [email] })
  });
}

async function createTeam(name) {
  const team = await findTeam(name);
  if (team) {
    debug('Team already exists');
    return team;
  }
  debug('Creating team', name);
  const data = await apiCall('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/teams', {
    method: 'PUT',
    body: JSON.stringify({ "title": name }),
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

function getTools() {
  const pathname = 'gitbook/tools';
  return fs.readdirSync(pathname).flatMap((filename) => {
    if (filename[0] === ".") { return null; } // ignore hidden files

    // process README.md in each tool directory
    const filepath = path.join(pathname, filename, 'README.md');
    if (fs.existsSync(filepath)) {
      return processMarkdownFile(filepath, filename, [], 'more/all-tools');
    }

    throw new Error(`No README.md found in ${filename}`);

  });
}

function updateToolJSON(tool, json) {
  const pathname = tool.jsonFilePath;

  console.log('Updating', pathname);
  fs.writeFileSync(pathname, toolToJson(json));
  tool.json = json;
}

export default {
  createTool,
  createToolOnGitbook,
  getTeams,
  getTools,
  getToolSpaces,
  removeTool,
  updateToolJSON,
};
