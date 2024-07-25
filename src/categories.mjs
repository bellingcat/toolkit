import fs from 'fs';
import path from 'path';
import tools from './tools.mjs'
const { getTools } = tools;
import pkg from './paths.mjs'
const { writeIfChanged, getSummary, processMarkdownFile} = pkg;

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

function getPaths(pathname) {
  const files = fs.readdirSync(pathname);

  const paths = files.flatMap((filename) => {
    if (filename[0] === ".") { return null; }         // ignore hidden files
    if (filename === 'SUMMARY.md') { return null; }   // ignore summaries

    const filepath = path.join(pathname, filename);
    if (path.extname(filename) == ".md") {
      return processMarkdownFile(filepath, filename); // markdown file
    } else {
      return [ ...getPaths(filepath)]; // directory
    }
  });
  return paths.filter(post => { return post && post });
}
function getCategories() {
  const root = 'gitbook/categories';
  return getPaths(root).filter((markdownFile) => {
    // Take all README.md files as categories
    return markdownFile.filename == 'README.md';
  }).map(function(markdownFile) {
    const tag = path.basename(markdownFile.directory);

    return {
      title: markdownFile.title,
      content: markdownFile.content,
      filepath: path.join(markdownFile.directory, tag + '.md'),
      tag: tag
    }
  });
}

getCategories().forEach((category) => {
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
  return (
    "| Name | Description | Cost | Details |\n| --- | --- | --- | --- |\n" + tools.map((row) => {
      return `| [**${row.title}**](${row.url}) | ${row.description} | ${renderCost(row.cost)} | ${renderRelativeLink(category, row)} |`
    }).join("\n")
  );
}

export default {
  getCategories
}
