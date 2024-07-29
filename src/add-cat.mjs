import pkg from './categories.mjs'
const {createCategory} = pkg;

// Create a new tool directory from the command line
const categoryName = process.argv[2]
const path = process.argv[3]
if (!categoryName) {
  console.log('Usage: node add-cat.mjs "Category Name" [parent category]/category-name');
  process.exit(1);
}
if (!path.match(/[A-Za-z\/\-]*/) ) {
  console.log('Bad category path');
  console.log('Usage: node add-cat.mjs "Category Name" {parent category/}category-name');
  process.exit(1);
}
const slug = createCategory({
  title: categoryName,
  path: path,
});
