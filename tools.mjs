import fs from 'fs';

/* Example
createTool({
  name: 'InstaLoader',
  description: 'Download pictures (or videos) along with their captions and other metadata from Instagram.',
  tags: ['instagram'],
  url: 'https://instaloader.github.io/',
});
*/

function createTool(tool) {
  const { name, tags } = tool;
  console.log('Creating tool', name);
  const slug = name.toLowerCase().replace(/\s/g, '-');
  const pathname = `gitbook/tools/${slug}`;
  fs.mkdirSync(pathname, { recursive: true });
  fs.copyFileSync('template/README.md', `${pathname}/README.md`);

  const json = JSON.stringify(tool, null, 2);
  const jsonTemplate = fs.readFileSync('template/json.md', 'utf-8');
  const markdown = jsonTemplate.replace(/```(json)?\n([\s\S]+)\n```/, '```json\n'+json+'\n```');
  fs.writeFileSync(`${pathname}/json.md`, markdown);
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
