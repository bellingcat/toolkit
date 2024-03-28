import fs from 'fs';

/* Example
createTool({
  name: 'Tool Name',
  description: 'A brief one-line description of the tool.',
  tags: ['category'],
  url: 'https://example.com',
  cost: 'Free',
});
*/

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
  console.log('Creating tool', name);
  const slug = name.toLowerCase().replace(/\s/g, '-');
  const pathname = `gitbook/tools/${slug}`;

  if (!opts.overwrite && fs.existsSync(pathname)) {
    throw new Error(`Directory ${pathname} already exists`);
  }

  fs.mkdirSync(pathname, { recursive: true });
  fs.writeFileSync(`${pathname}/json.md`, toolToJson(tool));
  fs.writeFileSync(`${pathname}/README.md`, toolToReadme(tool));
  console.log("Tool created");
  console.log("Slug: ", slug);
  console.log("Monorepo project directory: ", pathname);
  console.log("Commit message template:", "GITBOOK-peakvisor-{change_request_number}: {change_request_subject}");
}

async function createToolOnGitbook(name) {
  console.log('Creating tool on Gitbook', name);
  await createSpace(name);
  await createTeam(name);
  console.log("Team and space created. Don't forget to add the team to the space.");
}

async function findSpace(name, page='') {
  const response = await fetch('https://api.gitbook.com/v1/collections/jQKvylm6WgaH5IFrlIMh/spaces?' + new URLSearchParams({ page: page }), {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`
    },
  });
  const data = await response.json();
  const space = data.items.find((space) => space.title === name);
  if (space) {
    console.log('Space found');
    return space;
  }
  if (data.next) {
    return await findSpace(name, data.next.page);
  }
  console.log('Space found');
}

async function createSpace(name) {
  const space = await findSpace(name);
  if (space) {
    console.log('Space already exists');
    return;
  }
  console.log('Duplicating the template space');
  const response = await fetch('https://api.gitbook.com/v1/spaces/LWUcuebJXer3XFC0YLqM/duplicate', {
    method: 'POST',
    headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`
    },
  });
  const data = await response.json();
  const updated = await renameSpace(data, name)
  console.log(updated);
}

async function renameSpace(space, name) {
  console.log('Renaming space to', name);
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
    console.log('Team found');
    return team;
  }
  if (data.next) {
    return await findSpace(name, data.next.page);
  }
}

async function createTeam(name) {
  const team = await findTeam(name);
  if (team) {
    console.log('Team already exists');
    return;
  }
  console.log('Creating team', name);
  const response = await fetch('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/teams', {
        method: 'PUT',
        headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "title": name }),
  });
  const data = await response.json();
  console.log(data);
}
export default { createTool, createToolOnGitbook };
