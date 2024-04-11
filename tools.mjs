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
  if (process.env.DEBUG) {
    console.debug(...args);
  }
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
function createTool(tool, opts={}) {
  const { name, tags } = tool;
  debug('Creating tool', name);
  const slug = name.replace(/\s/g, '-');
  const pathname = `gitbook/tools/${slug}`;

  if (!opts.overwrite && fs.existsSync(pathname)) {
    throw new Error(`Directory ${pathname} already exists`);
  }

  fs.mkdirSync(pathname, { recursive: true });
  fs.writeFileSync(`${pathname}/json.md`, toolToJson(tool));
  fs.writeFileSync(`${pathname}/README.md`, toolToReadme(tool));
  debug("Tool created");
  debug("Slug: ", slug);
  debug("Monorepo project directory: ", pathname);
  debug("Commit message template:", `GITBOOK-${slug}-{change_request_number}: {change_request_subject}`);
  return slug;
}

async function createToolOnGitbook(name) {
  debug('Creating tool on Gitbook', name);
  const space = await createSpace(name);
  await createTeam(name);

  return space.urls.app;
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
  const response = await fetch('https://api.gitbook.com/v1/spaces/LWUcuebJXer3XFC0YLqM/duplicate', {
    method: 'POST',
    headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`
    },
  });
  const data = await response.json();
  const updated = await renameSpace(data, name)
  return updated;
}

async function renameSpace(space, name) {
  debug('Renaming space to', name);
  const response = await fetch(`https://api.gitbook.com/v1/spaces/${space.id}`, {
    method: 'PATCH',
    headers: {
            "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
            "Content-Type": "application/json"
          },
    body: JSON.stringify({ "title": name }),
  });
  space = await response.json();
  return space;
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

async function createTeam(name) {
  const team = await findTeam(name);
  if (team) {
    debug('Team already exists');
    return;
  }
  debug('Creating team', name);
  const response = await fetch('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/teams', {
        method: 'PUT',
        headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "title": name }),
  });
  const data = await response.json();
  debug(data);
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
  getTools,
  removeTool,
  updateToolJSON,
};
