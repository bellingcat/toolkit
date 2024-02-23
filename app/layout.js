import { Inter } from "next/font/google";
import "./globals.css";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bellingcat's Online Investigation Toolkit",
  description: "Bellingcat’s freely available online open source investigation toolkit. This toolkit includes satellite and mapping services, tools for verifying photos and videos, websites to archive web pages, and much more.",
};
function getSummary(pathname) {
  const markdownWithMeta = fs.readFileSync(pathname, 'utf-8');
  return matter(markdownWithMeta)
}

export default function RootLayout({ children }) {
  const summary = getSummary('gitbook/SUMMARY.md');
  const content = marked.parse(summary.content).replace(/README.md/g, '/').replace(/\.md/g, '').replace(/tools/g, '/tools').replace(/resources/g, '/resources');
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4">
          <h1 className="text-4xl font-bold"><a href='/'>{metadata.title}</a></h1>
        </header>
        <div className="flex">
          <nav className="p-4">
            <div className='prose p-5 m-auto'
              dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
            ></div>
          </nav>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
