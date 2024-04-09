import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function parseTags(str) {
  if (!str) { return []; }
  return str.split(',').map((tag) => tag.trim());
}

function markdownToJson(filepath) {
  if (fs.existsSync(filepath)) {
    const markdown = fs.readFileSync(filepath, 'utf-8');
    const matches = markdown.match(/```(json)?\n([\s\S]+)\n```/);
    if (matches) {
      try {
        return JSON.parse(matches[2]);
      } catch (e) {
        console.error(`Error parsing JSON in ${filepath}`);
        throw e;
      }
    }
  }
  return {};
}

function processMarkdownFile(filepath, filename, slug = [], webRoot) {
  const page = filename.replace('.md', '');
  const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(markdownWithMeta)
  const h1 = content.match(/# (.*)/);
  const title = (h1 && h1[1]) || page.replaceAll('-', ' ');

  // try to get the cost from the content
  const cost = (content.match(/\[x\] Partially Free/) && 'Partially Free') || (content.match(/\[x\] Free/) && 'Free') || (content.match(/\[x\] Paid/) && 'Paid') || null;

  // get JSON data from JSON.md if it exists
  const jsonFilePath = filepath.replace('README.md', 'json.md');
  const json = markdownToJson(jsonFilePath);

  if (page !== 'README') {
    slug = [...slug, page];
  }
  return {
    ...data,
    slug, title, content, filepath, filename, cost,
    href: `/${path.join(webRoot, slug.join('/'))}`,
    ...json // json overrides content
  };
}

function getPaths(pathname, slug = [], markdownRoot = 'gitbook', webRoot = '') {
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

export default {parseTags, getPaths, processMarkdownFile };
