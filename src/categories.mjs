import fs from 'fs';
import path from 'path';
import tools from './tools.mjs'
import pkg from './paths.mjs'
const { apiCall, getCategories, getTools, writeIfChanged, getSummary, processMarkdownFile} = pkg;

const allTools = getTools().filter((tool) => !tool.draft );
(function renderMostUsed() {
  const mostUsed = {
        title: 'Most Used',
        content: '# Most Used\n\n',
        filepath: 'gitbook/most-used.md',
        tag: 'most-used'
  };
  const markdownFile = processMarkdownFile(mostUsed.filepath, 'most-used.md');
  const mostUsedTools = allTools.filter((tool) => (tool.tags || []).includes('most-used'));
  const mostUsedFilePath = 'gitbook/most-used.md';
  writeIfChanged(renderCategory(mostUsed, mostUsedTools), mostUsedFilePath);
})();

function createCategory(category) {
  /*
   * category: {
   *   title: 'Category Name',
   *   path: "category-name" or "path/to/category-name"
   * }
   */
  const title = category.title;
  const tag = path.basename(category.path);
  const pathname = path.join('gitbook', 'categories', category.path);
  fs.mkdirSync(pathname, { recursive: true });
  fs.writeFileSync(`${pathname}/SUMMARY.md`, `# Table of contents\n\n* [${title}](README.md)`);
  fs.writeFileSync(`${pathname}/README.md`, `# ${title}\n\n`);
  console.log("Category created");
}

getCategories().filter((cat) => !cat.hasSubcategories).forEach((category) => {
  const categoryTools = allTools.filter((tool) => {
    return tool.tags && tool.tags.includes(category.tag);
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
  return renderIntro(category) + renderTable(categoryTools, category);
}
function renderTitle(category) {
  return `# ${category.title}\n\n`;
}
function renderIntro(category) {
  return category.content;
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
  if (!tools || tools.length == 0) { return ''; }
  return (
    "| Name | Description | Cost | Details |\n| --- | --- | --- | --- |\n" + tools.map((row) => {
      return `| [**${row.title}**](${row.url}) | ${row.description} | ${renderCost(row.cost)} | ${renderRelativeLink(category, row)} |`
    }).join("\n")
  );
}

export default {
  createCategory
}
