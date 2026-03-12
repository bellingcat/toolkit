import pkg from './data.mjs'
const { getCategories, getTools, writeIfChanged } = pkg;
import { renderCategory, getToolsForCategory } from './render.mjs';

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

function main() {
  const allTools = getTools().filter((tool) => !tool.draft );
  (function renderNewlyPublished() {
    const newlyPublished = {
          title: 'Newly Published',
          content: '---\ndescription: These tools were added to the toolkit within the last four weeks.\n---\n# New Tools\n',
          filepath: 'gitbook/new-tools.md'
    };
    const newTools = allTools.filter((x) => x.publishedAt && Date.now()-x.publishedAt < 4 * 7 * 24 * 60 * 60 * 1000);
    writeIfChanged(renderCategory(newlyPublished, newTools), newlyPublished.filepath);
  })();

  const allCategories = getCategories();
  allCategories.forEach((category) => {
    writeIfChanged(renderCategory(category, getToolsForCategory(category, allTools)), category.filepath);
  });
  generateTemplateCategoriesMarkdown(allCategories);
}

main();
