import fs from 'fs';
import path from 'path';
import tools from './tools.mjs'
const { getTools, getCategories } = tools;
import pkg from './paths.mjs'
const {writeIfChanged, getSummary, processMarkdownFile} = pkg;

const allTools = getTools().filter((tool) => !tool.draft );
const mostUsed = processMarkdownFile('gitbook/most-used.md', 'most-used', []);
const mostUsedTools = allTools.filter((tool) => (tool.tags || []).includes('most-used'));
const mostUsedFilePath = 'gitbook/most-used.md';
writeIfChanged(renderCategory(mostUsed, mostUsedTools), mostUsedFilePath);

getCategories().forEach((category) => {
  const categoryTools = allTools.filter((tool) => {
    return tool.tags && tool.tags.includes(category.slug.slice(-1)[0]);
  }).map((tool) => {
    return {
      ...tool,
      rel: renderRelativeLink(category, tool)
    }
  });
  const content = renderCategory(category, categoryTools);
  writeIfChanged(content, category.filepath);
});

function renderCategory(category, categoryTools = []) {
  return renderTitle(category) + renderIntro(category) + renderTable(categoryTools, category);
}
function renderTitle(category) {
  return `# ${category.title}\n\n`;
}
function renderIntro(category) {
  if (fs.existsSync(category.introFilePath)) {
    return fs.readFileSync(category.introFilePath, 'utf-8');
  }
  return '';
}

function renderCost(cost) {
  if (!cost) {
    return '';
  }
  if (cost.match(/partially free/i)) {
    return '<mark style="background-color:orange;">Partially Free</mark>';
  } else if (cost.match(/free/i)) {
    return '<mark style="background-color:green;">Free</mark>';
  } else if (cost.match(/paid/i)) {
    return '<mark style="background-color:red;">Paid</mark>';
  } else {
    return cost;
  }
}

function renderRelativeLink(category, tool) {
  const summary = getSummary('gitbook');
  if (!summary.match(path.relative('gitbook/', tool.filepath))) {
    if (tool.guide) {
      return `Guide: ${tool.guide}`;
    }
    if (tool.details) {
      return tool.details.replace('\n',' ');;
    }
    return '';
  }
  return `[Details](${path.relative(path.dirname(category.filepath), tool.filepath)})`;
}

function renderTable(tools, category) {
  return (
    "| Name | Description | Cost | Details |\n| --- | --- | --- | --- |\n" + tools.map((row) => {
      return `| [**${row.title}**](${row.url}) | ${row.description} | ${renderCost(row.cost)} | ${renderRelativeLink(category, row)} |`
    }).join("\n")
  );
}
