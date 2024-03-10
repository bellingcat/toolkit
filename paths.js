import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function parseTags(str) {
  if (!str) { return []; }
  return str.split(',').map((tag) => tag.trim());
}

function processMarkdownFile(filepath, filename, slug = [], webRoot) {
  const page = filename.replace('.md', '');
  const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta)
  const title = frontmatter.title || page.replaceAll('-', ' ');
  const tags = parseTags(frontmatter.description);

  if (page !== 'README') {
    slug = [...slug, page];
  }
  return {
    slug, frontmatter, title, tags, content,
    href: `/${path.join(webRoot, slug.join('/'))}`
  };
}

function getPaths(pathname, slug = [], markdownRoot = 'gitbook', webRoot = '') {
  console.log(arguments);

  const files = fs.readdirSync(pathname);

  const paths = files.flatMap((filename) => {
    if (filename[0] === ".") { return null; } // ignore hidden files

    const filepath = path.join(pathname, filename);
    if (filepath === `${markdownRoot}/README.md`) {
      return null; // Special case for the root README
    }

    if (path.extname(filename) == ".md") {
      if (filename === 'SUMMARY.md') {
        return null;
      }
      // markdown file
      return processMarkdownFile(filepath, filename, slug, webRoot);
    } else {
      // directory
      return [ ...getPaths(filepath, [...slug, filename], markdownRoot, webRoot)];
    }
  });
  return paths.filter(post => { return post && post });
}

module.exports = {parseTags, getPaths, processMarkdownFile };
