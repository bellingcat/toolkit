import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function writeIfChanged(content, filepath) {
  const old = fs.existsSync(filepath) ? fs.readFileSync(filepath, 'utf-8') : '';
  if (content !== old) {
    console.log('Updating', filepath);
    fs.writeFileSync(filepath, content);
  }
}

function processMarkdownFile(filepath, filename, slug = []) {
  const directory = path.dirname(filepath);
  const page = filename.replace('.md', '');
  const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(markdownWithMeta)
  const h1 = content.match(/# (.*)/);
  const title = (h1 && h1[1]) || page.replaceAll('-', ' ');

  if (page !== 'README') {
    slug = [...slug, page];
  }
  return {
    content,
    ...data,
    slug, title, filename, filepath, directory
  };
}

function getSummary(pathname) {
  return fs.readFileSync(path.join(pathname, 'SUMMARY.md'), 'utf-8');
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
      return processMarkdownFile(filepath, filename, slug);
    } else if (fs.lstatSync(filepath).isDirectory()){
      // directory
      return [ ...getPaths(filepath, [...slug, filename], markdownRoot, webRoot)];
    }
    return null;
  });
  return paths.filter(post => { return post && post });
}

export default { writeIfChanged, getPaths, getSummary, processMarkdownFile };
