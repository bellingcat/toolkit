import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
const { apiCall, getCategories, getTools, writeIfChanged, getSummary, processMarkdownFile} = pkg;

const allTools = getTools().filter((tool) => !tool.draft );
(function renderMostUsed() {
  const mostUsed = {
        title: 'Most Used',
        content: '# Most Used',
        filepath: 'gitbook/most-used.md',
        tag: 'most-used'
  };
  const markdownFile = processMarkdownFile(mostUsed.filepath, 'most-used.md');
  const mostUsedTools = allTools.filter((tool) => (tool.tags || []).includes('most-used'));
  const mostUsedFilePath = 'gitbook/most-used.md';
  writeIfChanged(renderCategory(mostUsed, mostUsedTools), mostUsedFilePath);
})();

(function renderNewlyPublished() {
  const newlyPublished = {
        title: 'Newly Published',
        content: '---\ndescription: These tools were added to the toolkit within the last four weeks.\n---\n# New Tools\n',
        filepath: 'gitbook/new-tools.md',
        tag: 'most-used'
  };
  const newTools = allTools.filter((x) => x.publishedAt && Date.now()-x.publishedAt < 4 * 7 * 24 * 60 * 60 * 1000);
  writeIfChanged(renderCategory(newlyPublished, newTools), newlyPublished.filepath);
})();

function generateTemplateCategoriesMarkdown(categories) {
  const topLevel = [];
  const groups = categories.map((category) => {
    if (category.hasSubcategories) {
      return `\n## ${category.title}\n`;
    } else if (category.hasParent) {
      return `* [ ] [${category.title}](https://bellingcat.gitbook.io/toolkit/categories/${category.slug.join('/')})`;
    } else {
      topLevel.push(`* [ ] [${category.title}](https://bellingcat.gitbook.io/toolkit/categories/${category.slug.join('/')})`);
    }
  }).filter(post => { return post && post });


  const content = '# Categories\n' + [
    groups.join('\n'),
    '## Other',
    topLevel.join('\n')
  ].join('\n\n') + '\n';

  writeIfChanged(content, 'template/categories.md');
}
const allCategories = getCategories();
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
generateTemplateCategoriesMarkdown(allCategories);

function renderCategory(category, categoryTools = []) {
  return renderIntro(category) + renderTable(categoryTools, category);
}
function renderTitle(category) {
  return `# ${category.title}\n\n`;
}
function renderIntro(category) {
  return `${category.content}\n\n`;
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
    return `<p><sub><em><mark style="background-color:blue;">Guide not available</mark></em></sub></p><mark style="background-color:blue;"> [${url}](${url}) </mark>`;
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
