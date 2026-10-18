// Word count per blog post (article body only, FAQ excluded) using the TypeScript sources directly.
import fs from 'node:fs'; import path from 'node:path'; import Module from 'node:module'; import ts from 'typescript';
const root = path.resolve(import.meta.dirname, '..');
const cache = {};
function load(file) {
  if (cache[file]) return cache[file].exports;
  const src = fs.readFileSync(file, 'utf8');
  const js = ts.transpileModule(src, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const m = { exports: {} }; cache[file] = m;
  const req = (id) => (id.startsWith('@/') ? load(path.join(root, id.slice(2)) + '.ts') : id === 'react' ? {} : null);
  new Function('exports', 'require', 'module', js)(m.exports, req, m);
  return m.exports;
}
const { BLOG_POSTS } = load(path.join(root, 'content/blog.ts'));
let low = 0;
for (const p of BLOG_POSTS) {
  const words = p.content.join(' ').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\{\{product:[^}]+\}\}/g, '').replace(/[#*]/g, '').split(/\s+/).filter(Boolean).length;
  if (words < 1500) low++;
  console.log(String(words).padStart(5), words >= 1500 ? 'ok ' : 'LOW', p.slug, '| tags', (p.tags || []).length, '| faqs', (p.faqs || []).length);
}
console.log('posts', BLOG_POSTS.length, 'under 1500:', low);
