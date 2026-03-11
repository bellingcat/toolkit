import path from 'path';
import pkg from './paths.mjs';
const { inSummary } = pkg;

export function renderCategory(category, categoryTools = []) {
  return renderIntro(category) + renderTable(categoryTools, category);
}

export function renderIntro(category) {
  const desc = category.description ? `---\ndescription: ${category.description}\n---\n\n` : '';
  return `${desc}${category.content}\n\n`;
}

export function renderCost(cost) {
  if (!cost) return '';
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

export function absoluteUrl(tool) {
  const slug = path.relative('gitbook/tools', tool.directory);
  return `https://bellingcat.gitbook.io/toolkit/more/all-tools/${slug}`;
}

export function relativeUrl(category, tool) {
  return path.relative(path.dirname(category.filepath), tool.filepath);
}

export function renderRelativeLink(category, tool) {
  if (!inSummary(tool)) {
    return tool.title;
  }
  return `[**${tool.title}**](${relativeUrl(category, tool)})`;
}

export function renderLink(category, tool) {
  if (!inSummary(tool)) {
    const url = tool.url;
    return `<p><sub><em>Guide not available</em></sub></p><mark style="background-color:blue;"> [${url}](${url}) </mark>`;
  }
  const absolute = absoluteUrl(tool);
  const relative = path.relative(path.dirname(category.filepath), tool.filepath);
  return `[${absolute}](${relative})`;
}

export function renderTable(tools, category) {
  if (!tools || tools.length == 0) { return ''; }
  return (
    "| Name | Description | Cost | Tool Review and Guide |\n| --- | --- | --- | --- |\n" + tools.map((row) => {
      return `| ${row.title} | ${row.description} | ${renderCost(row.cost)} | ${renderLink(category, row)} |`;
    }).join("\n")
  );
}

// Sort tools: pinned first, then alphabetical by title
export function sortTools(tools) {
  return tools.slice().sort((toolA, toolB) => {
    const pinnedCompare = !!toolB.pinned - !!toolA.pinned;
    if (pinnedCompare === 0) {
      const titleA = toolA.title.toLowerCase();
      const titleB = toolB.title.toLowerCase();
      if (titleA === titleB) return 0;
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
    }
    return pinnedCompare;
  });
}

// Filter and sort all non-draft tools by a category tag, adding rel links
export function getToolsForCategory(category, allTools) {
  if (category.hasSubcategories) return [];
  return sortTools(
    allTools
      .filter((tool) => tool.tags && tool.tags.includes(category.tag))
      .map((tool) => ({ ...tool, rel: renderRelativeLink(category, tool) }))
  );
}
