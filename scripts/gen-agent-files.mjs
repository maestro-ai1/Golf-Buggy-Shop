import fs from 'node:fs';
import path from 'node:path';

const domain = 'buggiesforsale.com.au';
const brandName = 'Buggies For Sale';

console.log(`[gen-agent-files] Validating and syncing agent files for ${domain}...`);

// Verify that public files exist
const requiredFiles = [
  'public/robots.txt',
  'public/auth.md',
  'public/.well-known/api-catalog',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/oauth-protected-resource',
  'public/.well-known/oauth-authorization-server',
  'public/.well-known/openid-configuration',
  'public/.well-known/acp.json',
  'public/.well-known/ucp',
  'public/.well-known/ai-catalog.json',
  'public/.well-known/poppy.json',
  'public/js/webmcp.js',
];

for (const rel of requiredFiles) {
  const full = path.resolve(process.cwd(), rel);
  if (!fs.existsSync(full)) {
    console.error(`[gen-agent-files] Error: Missing required file ${rel}`);
    process.exit(1);
  }
}

console.log('[gen-agent-files] All agent-ready files verified and up to date.');

// ---- Sitemap <lastmod> ledger: a URL's date only changes when its content changes (hash of its source data).
// data/lastmod.json is committed. Unchanged hash keeps the old date; new or changed content gets today's date.
import crypto from 'node:crypto';
const R = process.cwd();
const rd = (p) => fs.readFileSync(path.join(R, p), 'utf8');
const h = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);
const today = new Date().toISOString().slice(0, 10);
const catalog = JSON.parse(rd('data/catalog.json')); const products = catalog.products || catalog;
const structure = JSON.parse(rd('data/structure.json'));
const hashes = {};
for (const p of products) hashes['/products/' + p.slug + '/'] = h(JSON.stringify(p));
for (const s of structure) {
  if (s.level === 'product') continue;
  const inCat = products.filter((p) => s.url === '/' || p.categories.some((c) => c.startsWith(s.url))).map((p) => p.slug + ':' + p.price).join('|');
  hashes[s.url] = h(JSON.stringify(s) + inCat + (s.url === '/' ? rd('app/page.tsx') : ''));
}
for (const u of ['shop', 'about', 'contact', 'delivery', 'returns', 'faq', 'wholesale', 'privacy', 'terms', 'cookies', 'blog']) {
  const f = 'app/' + u + '/page.tsx'; if (fs.existsSync(path.join(R, f))) hashes['/' + u + '/'] = h(rd(f) + (u === 'faq' ? rd('content/faq.ts') : '') + (u === 'shop' ? products.length : ''));
}
const file = path.join(R, 'data/lastmod.json');
const prev = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {};
const next = {}; let changed = 0;
for (const [u, hh] of Object.entries(hashes)) { next[u] = prev[u] && prev[u].h === hh ? prev[u] : (changed++, { h: hh, d: today }); }
fs.writeFileSync(file, JSON.stringify(next, null, 1) + '\n');
console.log('[gen-agent-files] lastmod ledger: ' + Object.keys(next).length + ' URLs, ' + changed + ' new or changed.');
