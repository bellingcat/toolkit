import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import { notFound } from 'next/navigation'
import {webRoot, markdownRoot} from '@/config.js'

export async function generateStaticParams(params) {
  // This function will be called at build time
  // It will generate routes based on the files in the gitbook directory
  const pages = getPaths(markdownRoot);
  return pages;
}

function processMarkdownFile(filepath, filename, slug = []) {
  const page = filename.replace('.md', '');
  const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  const { data: frontmatter } = matter(markdownWithMeta)
  const title = frontmatter.title || page.replaceAll('-', ' ');

  if (page !== 'README') {
    slug = [...slug, page];
  }
  return { slug, frontmatter, title, href: `/${slug.join('/')}` };
}

function getPaths(pathname, slug = []) {

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
    } else {
      // directory
      return [ ...getPaths(filepath, [...slug, filename])];
    }
  });
  return paths.filter(post => { return post && post });
}

function getStaticParams(slug) {
  const pathname = path.join(markdownRoot, slug.join('/'));
  if (fs.existsSync(pathname)) { // directory

    // Create a list of subpages
    const files = fs.readdirSync(pathname).map((filename) => {
      if (filename[0] === "." || filename === "README.md" || filename === "SUMMARY.md") {
        return null; // ignore special files
      }
      let filepath = null;

      if (path.extname(filename) == ".md") {
        filepath = path.join(pathname, filename);
      } else {
        filepath = path.join(pathname, filename, 'README.md');
      }
      return processMarkdownFile(filepath, filename, slug);
    }).filter(post => { return post && post });

    return { files, filepath: path.join(pathname, 'README.md') }
  }
  // markdown file
  return {
      filepath: path.join(markdownRoot, slug.join('/') + '.md')
  };
}

export default function ToolPage({ params: { slug } }) {
  const { filepath, files } = getStaticParams(slug);

  let markdownWithMeta = '';
  try {
    markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
  } catch (e) {
    return notFound();
  }
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 m-auto">
          <div className='prose p-5 m-auto' dangerouslySetInnerHTML={{ __html: marked.parse(content) }}>
          </div>
          { frontmatter.description && <p>{frontmatter.description}</p> }
          <div className="flex flex-col">
          {
            files && files.map((file) => {
              return <a href={file.href} key={file.title}>{file.title}</a>
            })
          }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

