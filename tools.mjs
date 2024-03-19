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
function createTool(tool) {
  const { name, tags } = tool;
  console.log('Creating tool', name);
  const slug = name.toLowerCase().replace(/\s/g, '-');
  const pathname = `gitbook/tools/${slug}`;
  fs.mkdirSync(pathname, { recursive: true });
  fs.writeFileSync(`${pathname}/json.md`, toolToJson(tool));
  fs.writeFileSync(`${pathname}/README.md`, toolToReadme(tool));
}

async function createToolOnGitbook(name) {
  console.log('Creating tool on Gitbook', name);
  await createSpace(name);
  await createTeam(name);
  console.log("Team and space created. Don't forget to add the team to the space.");
}

async function createSpace(name) {
  console.log('Duplicating the template space');
  const response = await fetch('https://api.gitbook.com/v1/spaces/LWUcuebJXer3XFC0YLqM/duplicate', {
    method: 'POST',
    headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`
    },
  });
  console.log(response);
  const space = await response.json();
  console.log(space);

  console.log('Renaming space to', name);
  await fetch(`https://api.gitbook.com/v1/spaces/${space.id}`, {
    method: 'PATCH',
    headers: {
            "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
            "Content-Type": "application/json"
          },
    body: JSON.stringify({ "title": name }),
  });
}

async function createTeam(name) {
  const response = await fetch('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/teams', {
        method: 'PUT',
        headers: {
          "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ "title": name }),
  });
  const data = await response.json();
}
export default { createTool, createToolOnGitbook };
