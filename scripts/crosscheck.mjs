// Pre-ship crosscheck against the BUILD OUTPUT (.next/server/app/**/*.html). Exits non-zero on blocking failures.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, '.next/server/app');
if (!fs.existsSync(OUT)) { console.error('No build output. Run `npm run build` first.'); process.exit(2); }

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const pages = walk(OUT).filter((f) => f.endsWith('.html') && !/_not-found|_global-error|\/404|\/500/.test(f.replace(/\\/g, '/')));
const fails = [], warns = [];
const noindex = /thank-you|admin|search|checkout|order\/|not-found/;
const titles = new Map(), descs = new Map(), h1s = new Map();
const rel = (f) => path.relative(OUT, f).replace(/\\/g, '/');

for (const f of pages) {
  const html = fs.readFileSync(f, 'utf8'); const r = rel(f);
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fails.push(`${r}: ${h1} <h1> (need exactly 1)`);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!title) fails.push(`${r}: missing <title>`);
  const idx = !noindex.test(r);
  if (idx) {
    if (!desc) fails.push(`${r}: missing meta description`);
    else if (desc.length < 100 || desc.length > 160) warns.push(`${r}: meta description ${desc.length} chars`);
    if (!/<link rel="canonical"/.test(html)) fails.push(`${r}: missing canonical`);
    if (/noindex/.test(html) && !noindex.test(r)) fails.push(`${r}: unexpected noindex`);
    if (title.length > 70) warns.push(`${r}: title ${title.length} chars`);
    if (titles.has(title)) warns.push(`${r}: duplicate title with ${titles.get(title)}`); else titles.set(title, r);
    if (desc) { if (descs.has(desc)) warns.push(`${r}: duplicate description with ${descs.get(desc)}`); else descs.set(desc, r); }
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1].replace(/\\u003c/g, '<')); } catch { fails.push(`${r}: invalid JSON-LD`); } }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) { if (!/\balt=/.test(m[0])) fails.push(`${r}: <img> without alt`); }
  if (/DOMAIN\.com|\[DOMAIN\]|\[NUMBER\]|\[EMAIL\]/.test(html)) fails.push(`${r}: placeholder left in HTML`);
  if (/web3forms|resend\.com|turnstile/i.test(html)) fails.push(`${r}: removed provider referenced`);
  if (/@buggiesforsale\.com\.au/.test(html) && !/mailto:|sales@/.test(html)) warns.push(`${r}: email format check`);
}

// home must keep the owner's Trustpilot content verbatim
const home = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
for (const t of ['1,024 Verified Australian Customer Reviews (Since 2023)', 'Trust Pilot Reviews', 'Marcus V.', 'Sarah L.']) if (!home.includes(t.replace(/'/g, '&#x27;')) && !home.includes(t)) fails.push(`home: Trustpilot content missing: ${t}`);

// strategy docs must not be public
for (const bad of ['docs', 'PROJECT.md', 'keyword-map.md', 'keyword-research']) if (fs.existsSync(path.join(ROOT, 'public', bad))) fails.push(`public/${bad} must not exist`);

// secrets in tracked source
const SRC = ['app', 'components', 'lib', 'config', 'content', 'scripts'].flatMap((d) => (fs.existsSync(path.join(ROOT, d)) ? walk(path.join(ROOT, d)) : [])).filter((f) => /\.(ts|tsx|mjs|js|json)$/.test(f));
for (const f of SRC) { const s = fs.readFileSync(f, 'utf8'); if (/(SMTP_PASS|ADMIN_PASSCODE|api[_-]?key)\s*[:=]\s*['"][^'"]{6,}['"]/i.test(s)) fails.push(`${path.relative(ROOT, f)}: possible hard-coded secret`); }
if (fs.existsSync(path.join(ROOT, 'data/raw')) && fs.readFileSync(path.join(ROOT, '.gitignore'), 'utf8').indexOf('data/raw') < 0) warns.push('data/raw is not gitignored');

// catalogue sanity
const cat = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
for (const p of cat) {
  if (!p.images || !p.images.length) fails.push(`product ${p.slug}: no image`);
  for (const i of p.images || []) for (const ext of ['webp', 'avif']) if (!fs.existsSync(path.join(ROOT, 'public' + i + '.' + ext))) fails.push(`product ${p.slug}: missing ${i}.${ext}`);
  if (Math.abs(p.price - Math.round(p.priceSource.price * 0.98 * 20) / 20) > 0.06) fails.push(`product ${p.slug}: price is not 2% below source`);
}

console.log(`Checked ${pages.length} pages, ${cat.length} products.`);
if (warns.length) console.log(`\nWarnings (${warns.length}):\n` + warns.slice(0, 40).join('\n') + (warns.length > 40 ? `\n…and ${warns.length - 40} more` : ''));
if (fails.length) { console.log(`\nFAILURES (${fails.length}):\n` + fails.slice(0, 60).join('\n')); process.exit(1); }
console.log('\nCrosscheck passed with zero blocking failures.');
