import fs from 'fs'
import path from 'path'
import pkg from './paths.mjs'
const {getTools, getSummary} = pkg;
import pkg2 from './tools.mjs'
const {fetchChangeRequests, findSpace} = pkg2

const items = JSON.parse(fs.readFileSync('project_items.json', 'utf-8')).data.items.nodes;
const tools = getTools();
const summary = getSummary('gitbook');

tools.forEach(function(tool) {
  if (summary.match(path.relative('gitbook/', tool.filepath))) {
    return; // Already published
  }
  console.debug(tool.title);

  const space = findSpace(tool.title);
  if (!space) {
    console.error("No space for tool", tool.title);
    return;
  }
  const item = items.find((item) => item.title === tool.title);
  if (!item) {
    console.error("No gh project item for tool", tool.title);
    return;
  }

  const changeRequets = fetchChangeRequests(space);
  if (changeRequests.count) {
    const request = changeRequests.items[0];
    console.log(
      JSON.stringify({
        id: item.id,
        date_submitted: request.updatedAt,
        url: request.urls.app
      }),
    ' ');
  }

});
