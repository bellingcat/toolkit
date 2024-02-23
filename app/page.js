import Image from "next/image";
import fs from 'fs';
import matter from 'gray-matter';
import {marked} from 'marked';

function getHome(pathname) {
  const markdownWithMeta = fs.readFileSync(pathname, 'utf-8');
  return matter(markdownWithMeta)
}

export default async function Home() {
  const home = getHome('gitbook/README.md');
  return (
    <div className='prose p-5 m-auto'
      dangerouslySetInnerHTML={{ __html: marked.parse(home.content) }}>
    </div>
  );
}
