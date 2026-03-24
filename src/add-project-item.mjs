import client from './ghproject-client.mjs';
import dataPkg from './data.mjs';
const { getTools } = dataPkg;

const toolSlug = process.argv[2];
const spaceId = process.argv[3];

if (!toolSlug || !spaceId) {
  console.error('Usage: node add-project-item.mjs <toolSlug> <spaceId>');
  process.exit(1);
}

const tools = getTools();
const tool = tools.find(t => t.filename === toolSlug);
const toolTitle = tool ? tool.title : toolSlug;

client.addItemToProject(toolSlug, spaceId, toolTitle);
