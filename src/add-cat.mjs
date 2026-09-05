import fs from 'fs';
import path from 'path';
import pkg from './data.mjs'
const { apiCall } = pkg;
import { ORG_ID } from './config.mjs';
import { args } from './cli.mjs';

// Create a new category directory from the command line
const USAGE = 'Usage: node src/add-cat.mjs "Category Name" {parent-category}/category-name';
const [categoryName, categoryPathArg] = args(USAGE, 'categoryName', 'categoryPath');
const categoryPath = categoryPathArg.toLowerCase();

if (!categoryPath.match(/[A-Za-z\/\-]*/)) {
  console.error('Bad category path');
  console.error(USAGE);
  process.exit(1);
}
const slug = createCategory({
  title: categoryName,
  path: categoryPath,
});
//createCategorySpace(categoryName);

function createCategory(category) {
  /*
   * category: {
   *   title: 'Category Name',
   *   path: "category-name" or "parent-category/category-name"
   * }
   */
  const title = category.title;
  const tag = path.basename(category.path);
  const isSubcategory = tag !== category.path;
  const pathname = path.join('gitbook', 'categories', category.path);
  fs.mkdirSync(pathname, { recursive: true });
  fs.writeFileSync(`${pathname}/SUMMARY.md`, `# Table of contents\n\n* [${title}](README.md)`);
  fs.writeFileSync(`${pathname}/README.md`, `# ${title}\n\n`);
  console.log("Category created:", category.title, "at", category.path);

  // check if the parent category needs to be initialized
  if (isSubcategory) {
    const parentCategory = path.dirname(category.path);
    if (!fs.existsSync(path.join('gitbook', 'categories', parentCategory, 'README.md'))) {
      createCategory({title: parentCategory, path: parentCategory});
    }
  }
}

async function createCategorySpace(name) {
  console.log('Creating a new category space', name);
  const data = await apiCall(`https://api.gitbook.com/v1/orgs/${ORG_ID}/spaces`, {
    method: 'POST',
    body: {
      title: name,
      emoji: '📁',
      parent: 'TbwKQFjaGIrzHSyJmnwl' // Categories collection
    },
  });

  console.log("Category space created");
}
