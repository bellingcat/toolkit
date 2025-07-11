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
  const page = path.basename(filepath, '.md');
  const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(markdownWithMeta)
  const h1 = content.match(/# (.*)/);
  const title = (h1 && h1[1]) || page.replaceAll('-', ' ');

  if (page !== 'README') {
    slug = [...slug, page];
  }
  return {
    frontmatter: data,
    content,
    ...data,
    slug, title, filename, filepath, directory
  };
}

function getSummary(pathname) {
  return fs.readFileSync(path.join(pathname, 'SUMMARY.md'), 'utf-8');
}
function isDir(filepath) {
  return fs.lstatSync(filepath).isDirectory();
}
function getPages(pathname, slug = []) {
  const files = fs.readdirSync(pathname);

  const paths = files.flatMap((filename) => {
    if (filename[0] === ".") { return null; }         // ignore hidden files
    if (filename === 'SUMMARY.md') { return null; }   // ignore summaries

    const filepath = path.join(pathname, filename);
    if (path.extname(filename) == ".md") {
      return processMarkdownFile(filepath, filename, slug); // markdown file
    } else if (isDir(filepath)) {
      return [ ...getPages(filepath, [...slug, path.basename(filepath)])]; // directory
    }
    return null;
  });
  return paths.filter(post => { return post && post });
}
function getCategories() {
  const root = 'gitbook/categories';
  return getPaths(root);
}
function getRegions() {
  const root = 'gitbook/regions';
  return getPaths(root);
}
function getPaths(root) {
  return getPages(root).filter((markdownFile) => {
    // Take all README.md files as categories
    return markdownFile.filename == 'README.md';
  }).map(function(markdownFile) {
    const dir = markdownFile.directory;
    const tag = path.basename(markdownFile.directory);
    const hasSubcategories = fs.readdirSync(dir).some((file) => isDir(path.join(dir, file)));
    const hasParent = markdownFile.slug.length > 1;

    return {
      title: markdownFile.title,
      content: markdownFile.content.trim(),
      description: markdownFile.description,
      tag: tag,
      slug: markdownFile.slug,
      hasSubcategories: hasSubcategories,
      hasParent: hasParent,
      sourcefile: markdownFile.filepath,
      filepath: path.join(markdownFile.directory, tag + '.md'),
    }
  });
}

function markdownToCategories(filepath) {
  if (fs.existsSync(filepath)) {
    const markdown = fs.readFileSync(filepath, 'utf-8');
    // Match lines with a checked box
    const selected = markdown.match(/\[x\] \[.*\]\(.*\)/g);
    if (selected) {
      // extract the tag from the markdown link
      return selected.map((line) => line.match(/\[x\] \[.*\]\(.*\/([a-z-]*)\)/)[1] );
    }
  }
  return [];
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

function getTools() {
  const pathname = 'gitbook/tools';
  return fs.readdirSync(pathname).flatMap((filename) => {
    if (filename[0] === ".") { return null; } // ignore hidden files

    // process README.md in each tool directory
    const filepath = path.join(pathname, filename, 'README.md');
    if (fs.existsSync(filepath)) {
      const markdownFile = processMarkdownFile(filepath, filename, []);
      const content = markdownFile.content;
      const toolDir = markdownFile.directory;

      // try to get the cost from the content
      const cost = (content.match(/\[x\] Partially Free/) && 'Partially Free') || (content.match(/\[x\] Free/) && 'Free') || (content.match(/\[x\] Paid/) && 'Paid') || null;

      // get JSON data from JSON.md if it exists
      const jsonFilePath = path.join(toolDir, 'json.md');
      const json = markdownToJson(jsonFilePath);

      // try to get the URL from the content
      // it may be a markdown link
      let url = null;
      const urlmarkdown = content.match(/## URL\n\n(.*)\n/);
      const slug = path.basename(markdownFile.directory);
      if (urlmarkdown !== null) {
        const embedregex = /{% embed url="(https:\/\/[^"]+)" %}/;
        const embedurl = urlmarkdown[1].match(embedregex);
        if (embedurl) {
          url = embedurl[1];
        } else {
          const markdownLink = urlmarkdown[1].match(/\[(.*)\]\((.*)\)/);
          url = markdownLink ? markdownLink[2] : urlmarkdown[1];
        }
      } else {
        console.log(slug, ": No URL in the README");
        if (!json.url) {
          url = `https://bellingcat.gitbook.io/toolkit/more/all-tools/${slug}`;
          console.warn("... Defaulting to", url);
        }
      }

      if (json.url && url !== json.url) {
        console.warn(slug, ": URL overriden by json");
        console.warn('...', url, '=>', json.url);
      }

      // get category data from categories.md if it exists
      const categoriesFilePath = path.join(toolDir, 'categories.md');
      const categories = markdownToCategories(categoriesFilePath);

      // get region data from regions.md if it exists
      const regionsFilePath = path.join(toolDir, 'regions.md');
      const regions = markdownToCategories(regionsFilePath);

      // merge json.tags and categories and dedupe
      let tags = [...new Set([...json.tags, ...categories, ...regions])];

      return {
        ...markdownFile,
        cost,
        url,
        ...json,  // JSON data overrides
        tags,
        categoriesFilePath,
        regionsFilePath,
        categories,
        jsonFilePath,
        json, // the original json structure
      };
    }

    throw new Error(`No README.md found in ${filename}`);

  });
}

async function apiCall(url, params) {
  //debug('API call', url, params);
  const response = await fetch(url, {
    method: params.method,
    headers: {
      "Authorization": `Bearer ${process.env.GITBOOK_API_TOKEN}`,
      "Content-Type": "application/json",
      ...params.headers,
    },
    body: JSON.stringify(params.body),
    signal: AbortSignal.timeout( 10 * 1000 ), // 10 seconds
  });

  //debug('API response', response.status);
  // check rate limit headers
  if (response.headers.get('x-ratelimit-remaining') === '0') {
    console.log('Rate limit exceeded');
  }
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    const data = await response.json();
    if (data.error) {
      throw new Error(`${data.error.message} (${data.error.code})`);
    }
    return data;
  } else {
    return response;
  }
}

export default { apiCall, getTools, getCategories, getRegions, writeIfChanged, getSummary, processMarkdownFile };
