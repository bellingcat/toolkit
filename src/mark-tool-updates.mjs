import fs from 'fs';
import matter from 'gray-matter';
import pkg from './data.mjs';
import toolsPkg from './tools.mjs';
const { writeIfChanged, getTools, inSummary } = pkg;
const { fetchMergedChangeRequests } = toolsPkg;

// Build toolSlug → spaceId map from project_items.json
function buildSpaceMap() {
  if (!fs.existsSync('project_items.json')) return {};
  const items = JSON.parse(fs.readFileSync('project_items.json', 'utf-8'));
  const map = {};
  for (const item of items) {
    const toolId = item.fieldValues.nodes.find(n => n.field?.name === 'Tool ID')?.text;
    const spaceId = item.fieldValues.nodes.find(n => n.field?.name === 'Space ID')?.text;
    if (toolId && spaceId) map[toolId] = spaceId;
  }
  return map;
}

async function main() {
  const spaceMap = buildSpaceMap();
  const publishedTools = getTools().filter((tool) => inSummary(tool));
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

  await Promise.all(publishedTools.map(async (tool) => {
    const spaceId = spaceMap[tool.filename];
    if (!spaceId) return null;

    let data;
    try {
      data = await fetchMergedChangeRequests({ id: spaceId });
    } catch (e) {
      console.error(`Error fetching CRs for ${tool.filename}: ${e.message}`);
      return null;
    }

    const cr = data.items?.[0];
    if (!cr?.updatedAt) return null;

    const crDate = new Date(cr.updatedAt);
    if (crDate < oneDayAgo) return null;

    // Format as YYYY-MM-DD (same as previous git log --date=short output)
    const updatedAt = crDate.toISOString().slice(0, 10);

    tool.frontmatter.updated = updatedAt;
    writeIfChanged(matter.stringify(tool.content, tool.frontmatter), tool.filepath);

    return updatedAt;
  }));
}

main();
