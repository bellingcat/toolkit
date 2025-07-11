import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
const { apiCall, getRegions, getTools, writeIfChanged, getSummary, processMarkdownFile} = pkg;

const allTools = getTools().filter((tool) => !tool.draft );

function generateTemplateRegionsMarkdown(categories) {
  const topLevel = [];
  const groups = categories.map((category) => {
    if (category.hasSubcategories) {
      return null; // the "regions" category
    } else if (category.hasParent) {
      return `* [ ] [${category.title}](https://bellingcat.gitbook.io/toolkit/regions/${category.slug.join('/')})`;
    } else {
      topLevel.push(`* [ ] [${category.title}](https://bellingcat.gitbook.io/toolkit/regions/${category.slug.join('/')})`);
    }
  }).filter(post => { return post && post });

  const frontmatter = '---\ndescription: Check the boxes if your tool is specific to any of these regions\n---\n\n';
  const content = frontmatter + '# Regions' + [
    groups.join('\n'),
    topLevel.join('\n')
  ].join('\n\n') + '\n';

  writeIfChanged(content, 'template/regions.md');
}
const allCategories = getRegions();
allCategories.forEach((category) => {
  const categoryTools = category.hasSubcategories ? [] : allTools.filter((tool) => {
    return tool.tags && tool.tags.includes(category.tag);
  }).map((tool) => {
    return {
      ...tool,
      rel: renderRelativeLink(category, tool)
    }
  }).sort((toolA, toolB) => {
    const pinnedCompare = !!toolB.pinned - !!toolA.pinned;
    if (pinnedCompare === 0) {
      const titleA = toolA.title.toLowerCase();
      const titleB = toolB.title.toLowerCase();
      if (titleA === titleB) {
        return 0;
      }
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
    }
    return pinnedCompare;

  });
  const content = renderCategory(category, categoryTools);
  writeIfChanged(content, category.filepath);
});
generateTemplateRegionsMarkdown(allCategories);

function renderCategory(category, categoryTools = []) {
  return renderIntro(category) + renderTable(categoryTools, category);
}
function renderIntro(category) {
  const desc = category.description ? `---\ndescription: ${category.description}\n---\n\n` : '';
  return `${desc}${category.content}\n\n`;
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
    return tool.title;
  }
  return `[**${tool.title}**](${relativeUrl(category, tool)})`;
}

function absoluteUrl(tool) {
  const slug = path.relative('gitbook/tools', tool.directory);
  return `https://bellingcat.gitbook.io/toolkit/more/all-tools/${slug}`;
}
function relativeUrl(category, tool) {
  return path.relative(path.dirname(category.filepath), tool.filepath);
}
function renderLink(category, tool) {
  const summary = getSummary('gitbook');
  if (!summary.match(path.relative('gitbook/', tool.filepath))) {
    const url = tool.url;
    return `<p><sub><em>Guide not available</em></sub></p><mark style="background-color:blue;"> [${url}](${url}) </mark>`;
  }
  const absolute = absoluteUrl(tool);
  const relative = path.relative(path.dirname(category.filepath), tool.filepath)
  return `[${absolute}](${relative})`;
}

function renderTable(tools, category) {
  if (!tools || tools.length == 0) { return ''; }
  return (
    "| Name | Description | Cost | Tool Review and Guide |\n| --- | --- | --- | --- |\n" + tools.map((row) => {
      return `| ${row.title} | ${row.description} | ${renderCost(row.cost)} | ${renderLink(category, row)} |`
    }).join("\n")
  );
}
