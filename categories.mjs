import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
const {getPaths, processMarkdownFile} = pkg;

function getTools(pathname) {
  return fs.readdirSync(pathname).flatMap((filename) => {
    if (filename[0] === ".") { return null; } // ignore hidden files

    // process README.md in each tool directory
    const filepath = path.join(pathname, filename, 'README.md');
    if (fs.existsSync(filepath)) {
      return processMarkdownFile(filepath, filename, [], 'more/all-tools');
    }

    throw new Error(`No README.md found in ${filename}`);

  });
}

const tools = getTools('gitbook/tools');
const whitelist = ['twitter', 'instagram', 'facebook', 'youtube', 'telegram', 'tiktok', 'discord', 'multiple-networks', 'linkedin', 'reddit', 'vkontakte', 'other-networks', 'reverse-image-search', 'facial-recognition'];

getPaths('gitbook/categories').filter((category) => {
  const tag = category.slug.slice(-1)[0];
  return category.filename !== 'README.md' && whitelist.includes(tag);
}).forEach((category) => {
  const categoryTools = tools.filter((tool) => {
    return tool.tags && tool.tags.includes(category.slug.slice(-1)[0]);
  }).map((tool) => {
    return {
      ...tool,
      rel: renderRelativeLink(category, tool)
    }
  });
  console.log('writing', category.filepath);
  const content = renderCategory(category, categoryTools);
  fs.writeFileSync(category.filepath, content);
});

function renderCategory(category, categoryTools = []) {
  return renderTitle(category) + renderTable(categoryTools, category);
}
function renderTitle(category) {
  return `# ${category.title}\n\n`;
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

function getSummary(pathname) {
  return fs.readFileSync(path.join(pathname, 'SUMMARY.md'), 'utf-8');
}

function renderRelativeLink(category, tool) {
  const summary = getSummary('gitbook');
  if (!summary.match(path.relative('gitbook/', tool.filepath))) {
    if (tool.guide) {
      return `Guide: ${tool.guide}`;
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
