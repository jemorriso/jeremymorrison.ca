// This can only be used on server-side: https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
// Since Next.js is using Babel I can use ES6 import syntax.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';

const root = process.cwd();

// https://github.com/leerob/leerob.io/blob/main/lib/mdx.js
export async function getMDX(group, fname) {
  const source = fs.readFileSync(
    path.join(root, 'content', group, fname),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [require('remark-emoji')],
    },
  });
  return {
    mdxSource,
    frontMatter: {
      ...data,
    },
  };
}

export async function getFilesByGroup(group) {
  const files = fs
    .readdirSync(path.join(root, 'content', group), { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name);

  const markdown = await Promise.all(files.map((file) => getMDX(group, file)));
  return markdown;
}
