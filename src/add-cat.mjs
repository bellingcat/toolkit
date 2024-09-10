import fs from 'fs';
import path from 'path';
import pkg from './paths.mjs'
const { apiCall } = pkg;

// Create a new tool directory from the command line
const categoryName = process.argv[2]
const categoryPath = process.argv[3].toLowerCase();
const USAGE = 'Usage: node add-cat.mjs "Category Name" {parent-category}/category-name';
if (!categoryName) {
  console.log(USAGE);
  process.exit(1);
}
if (!categoryPath || !categoryPath.match(/[A-Za-z\/\-]*/) ) {
  console.log('Bad category path');
  console.log(USAGE);
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
  const data = await apiCall('https://api.gitbook.com/v1/orgs/WQpOq5ZFue4N6m65QCJq/spaces', {
    method: 'POST',
    body: {
      title: name,
      emoji: '📁',
      parent: 'TbwKQFjaGIrzHSyJmnwl' // Categories collection
    },
  });

  console.log("Category space created");
}
