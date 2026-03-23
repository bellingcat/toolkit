import fs from 'fs'
import pkg from './data.mjs'
const {getTools} = pkg;
import client from './ghproject-client.mjs';

function main() {
  const rawItems = client.fetchAllItems();

  function getToolId(item) {
    return item.fieldValues.nodes.find((node) => node.field?.name === 'Tool ID')?.text;
  }

  const tools = getTools();
  tools.forEach(function(tool) {
    const item = rawItems.find((item) => getToolId(item) === tool.filename);
    if (!item) {
      console.log(`Adding missing project item: ${tool.filename}`);
      client.addItemToProject(tool.filename, '', tool.title);
    }
  });
}

if (process.env.GH_TOKEN) {
  main();
} else {
  console.warn('GH_TOKEN not set — skipping missing project items check');
}
