// Link + duplicate audit against a running server: node scripts/link-audit.mjs http://localhost:3000
const base = process.argv[2] || 'http://localhost:3000';
const get = async (u) => { try { const r = await fetch(u, { redirect: 'manual' }); return { status: r.status, loc: r.headers.get('location'), text: r.status === 200 && /html|xml/.test(r.headers.get('content-type') || '') ? await r.text() : '' }; } catch { return { status: 0, text: '' }; } };
const sm = await get(base + '/sitemap.xml');
const pages = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const seed = new Set(['/', '/shop/', '/search/', '/checkout/', '/contact/', '/about/', '/blog/', ...pages]);
const links = new Map(); // target -> first source
const titles = new Map(), canon = new Map(), h1s = new Map();
const bad = [], noCrumb = [], dupHome = [];
let n = 0;
for (const p of seed) {
  const r = await get(base + p); n++;
  if (r.status !== 200) { bad.push(`PAGE ${p} -> ${r.status}${r.loc ? ' ' + r.loc : ''}`); continue; }
  if (p !== '/') { if (!r.text.includes('aria-label="Breadcrumb"') || !r.text.includes('BreadcrumbList')) noCrumb.push(p); if (/>Home<\/a><\/li><li[^>]*><svg[^>]*><\/svg><a[^>]*>Home</.test(r.text)) dupHome.push(p); }
  const t = (r.text.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1]; if (t) (titles.get(t) || titles.set(t, []).get(t)).push(p);
  const c = (r.text.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]; if (c) (canon.get(c) || canon.set(c, []).get(c)).push(p);
  for (const m of r.text.matchAll(/<a [^>]*href="([^"#]+)[^"]*"/g)) {
    let h = m[1].replace(/&amp;/g, '&');
    if (/^(mailto:|tel:|sms:|https?:\/\/(?!(www\.)?(localhost|buggiesforsale))|javascript:)/.test(h)) continue;
    h = h.replace(/^https?:\/\/[^/]+/, '').split('?')[0];
    if (!h.startsWith('/')) continue;
    if (!links.has(h)) links.set(h, p);
  }
}
for (const [h, src] of links) {
  if (seed.has(h)) continue;
  const r = await get(base + h);
  if (r.status !== 200) bad.push(`LINK ${h} (from ${src}) -> ${r.status}${r.loc ? ' ' + r.loc : ''}`);
}
console.log(`pages crawled: ${n}, unique internal links checked: ${links.size}`);
console.log('BROKEN/REDIRECTING:', bad.length ? '\n' + bad.join('\n') : 'none');
const dup = (m, label) => { const d = [...m].filter(([, v]) => v.length > 1); console.log(`DUPLICATE ${label}:`, d.length ? '\n' + d.map(([k, v]) => `  ${k.slice(0, 90)} -> ${v.join(', ')}`).join('\n') : 'none'); };
console.log('MISSING BREADCRUMBS:', noCrumb.length ? noCrumb.join(' ') : 'none'); console.log('DUPLICATE HOME CRUMB:', dupHome.length ? dupHome.join(' ') : 'none');
dup(titles, 'titles'); dup(canon, 'canonicals');
