import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import { notFound } from 'next/navigation'
import {markdownRoot, webRoot} from '@/config.js'
import {parseTags, getPaths, processMarkdownFile} from '@/paths.js'
import Card from '@/components/card'
import Tags from '@/components/tags'

export async function generateStaticParams(params) {
  // This function will be called at build time
  // It will generate routes based on the files in the gitbook directory
  const pages = getPaths(markdownRoot, [], markdownRoot, webRoot);
  return pages;
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
      return processMarkdownFile(filepath, filename, slug, webRoot);
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

  let tool = null
  try {
    tool = processMarkdownFile(filepath, slug[slug.length - 1], slug, webRoot);
  } catch (e) {
    return notFound();
  }
  const { content, tags } = tool;

  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 m-auto">
          <div className="flex justify-start">
          {
            tags && tags.map((tag) => {
              return <div className="pt-4 pb-2" key={tag}>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
              </div>
            })
          }
          </div>
          <div className='prose p-5 m-auto' dangerouslySetInnerHTML={{ __html: marked.parse(content) }}>
          </div>
          <div className="subpages columns-2">
          {
            files && files.map((file) => {
              return <Card title={file.title} href={file.href} key={file.title} />
            })
          }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


