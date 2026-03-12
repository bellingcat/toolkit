import pkg from './data.mjs'
const { getRegions, getTools, writeIfChanged } = pkg;
import { renderCategory, getToolsForCategory } from './render.mjs';

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

function main() {
  const allTools = getTools().filter((tool) => !tool.draft );
  const allCategories = getRegions();
  allCategories.forEach((category) => {
    writeIfChanged(renderCategory(category, getToolsForCategory(category, allTools)), category.filepath);
  });
  generateTemplateRegionsMarkdown(allCategories);
}

main();
