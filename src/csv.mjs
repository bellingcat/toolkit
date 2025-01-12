import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
const { writeIfChanged, getSummary, getCategories, getTools } = pkg;

const allTools = getTools().filter((tool) => !tool.draft );

fs.mkdirSync('csv', { recursive: true });
const allCategories = getCategories();
const allContent = [];
allCategories.forEach((category) => {
  if (category.hasSubcategories) { return; }

  const categoryTools = allTools.filter((tool) => {
    return tool.tags && tool.tags.includes(category.tag);
  }).map((tool) => {
    return {
      ...tool,
      rel: renderLink(category, tool)
    }
  });
  const content = renderTools(categoryTools, category);
  allContent.push(content.trim());
  writeIfChanged(renderIntro(category) + content, `csv/${category.slug.join('-')}.csv`);
});

writeIfChanged(renderIntro() + allContent.join('\n'), `csv/all-tools.csv`);

function renderCategory(category, categoryTools = []) {
  return renderIntro(category) + renderTools(categoryTools, category);
}
function renderIntro(category) {
  return "Category,Name,URL,Description,Cost,Details\n";
}

function renderCost(cost) {
  if (!cost) {
    return '';
  }
  if (cost.match(/partially free/i)) {
    return 'Partially Free';
  } else if (cost.match(/free/i)) {
    return 'Free';
  } else if (cost.match(/paid/i)) {
    return 'Paid';
  } else {
    return cost;
  }
}

function renderLink(category, tool) {
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
  const slug = path.relative('gitbook/tools', tool.directory);
  return `https://bellingcat.gitbook.io/toolkit/more/all-tools/${slug}`;
}

function renderTools(tools, category) {
  if (!tools || tools.length == 0) { return ''; }
  return (
    tools.map((row) => {
      return `"${category.title}","${row.title}",${row.url},"${row.description}",${renderCost(row.cost)},${renderLink(category, row)}`;
    }).join("\n")
  );
}
