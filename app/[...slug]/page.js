import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'

export async function generateStaticParams(params) {
  const tools = getPaths('gitbook');
  return tools;
}

function processMarkdownFile(filepath, name, slug = []) {
  const page = name.replace('.md', '');
  const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  const { data: frontmatter } = matter(markdownWithMeta)

  if (page !== 'README') {
    slug = [...slug, page];
  }
  return { slug, filepath, frontmatter };
}

function getPaths(pathname, slug = []) {

  const files = fs.readdirSync(pathname);

  const paths = files.flatMap((filename) => {
    if (filename[0] === ".") { return null; } // ignore hidden files

    const filepath = path.join(pathname, filename);
    if (filepath === 'gitbook/README.md') {
      return null; // Special case for the root README
    }

    if (path.extname(filename) == ".md") {
      if (filename === 'SUMMARY.md') {
        return null;
      }
      // markdown file
      return processMarkdownFile(filepath, filename, slug);
    } else {
      // directory
      return [ ...getPaths(filepath, [...slug, filename])];
    }
  });
  return paths.filter(post => { return post && post });
}

function getStaticParams(slug) {
  const pathname = path.join('gitbook', slug.join('/'));
  if (fs.existsSync(pathname)) {
    return path.join(pathname, 'README.md');
  }
  return path.join('gitbook', slug.join('/') + '.md');
}

export default function ToolPage({ params: { slug } }) {
  const filepath = getStaticParams(slug);
  console.log('toolpage', slug, filepath);
  const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 m-auto">
          <div className='post-body p-5 m-auto' dangerouslySetInnerHTML={{ __html: marked.parse(content) }}>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

