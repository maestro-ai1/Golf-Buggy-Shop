// Sitemap + robots + llms audit against a running server: node scripts/sitemap-audit.mjs http://localhost:3000
// Checks every sitemap <loc>: HTTP 200 without redirect, self-canonical == loc, hreflang en-AU/x-default == loc, no noindex, not blocked by robots.txt,
// valid <lastmod> (not all identical), no duplicates. Also validates robots.txt groups, llms.txt and llms-full.txt.
const base = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const SITE = 'https://buggiesforsale.com.au';
const get = async (u, o = {}) => { try { const r = await fetch(u, { redirect: 'manual', ...o }); return { status: r.status, headers: r.headers, text: await r.text() }; } catch (e) { return { status: 0, text: '', headers: new Headers(), err: e.message }; } };
const fail = []; const ok = (c, m) => { if (!c) fail.push(m); };

const sm = await get(base + '/sitemap.xml'); ok(sm.status === 200, 'sitemap.xml status ' + sm.status);
const urls = [...sm.text.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({ loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1], lm: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1], alts: [...m[1].matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map((a) => [a[1], a[2]]) }));
ok(urls.length > 0, 'sitemap has no URLs');
const robots = (await get(base + '/robots.txt')).text;
const star = robots.split(/\r?\n\s*\r?\n/).find((g) => /^User-agent: \*$/m.test(g)) || '';
const dis = [...star.matchAll(/^Disallow: (\S+)/gm)].map((m) => m[1]);
ok(/^Sitemap: https:\/\/buggiesforsale\.com\.au\/sitemap\.xml/m.test(robots), 'robots.txt missing Sitemap line');
for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot', 'Google-Extended', 'cohere-ai', 'Bytespider']) ok(new RegExp('^User-agent: ' + bot + '$', 'm').test(robots), 'robots.txt has no group for ' + bot);

const seen = new Set(); const lms = new Set(); let n = 0;
const queue = [...urls];
async function worker() {
  while (queue.length) {
    const u = queue.shift(); n++;
    if (seen.has(u.loc)) fail.push('DUPLICATE ' + u.loc); seen.add(u.loc);
    if (!u.loc.startsWith(SITE + '/')) { fail.push('NOT CANONICAL HOST ' + u.loc); continue; }
    if (!/^\d{4}-\d{2}-\d{2}T/.test(u.lm || '')) fail.push('BAD LASTMOD ' + u.loc + ' ' + u.lm); else lms.add(u.lm.slice(0, 10));
    const path = u.loc.slice(SITE.length);
    if (dis.some((d) => path.startsWith(d))) fail.push('BLOCKED BY ROBOTS ' + path);
    const r = await get(base + path);
    if (r.status !== 200) { fail.push('STATUS ' + r.status + ' ' + path); continue; }
    const canon = (r.text.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    if (canon !== u.loc) fail.push('CANONICAL MISMATCH ' + path + ' -> ' + canon);
    if (/<meta name="robots" content="[^"]*noindex/i.test(r.text)) fail.push('NOINDEX IN SITEMAP ' + path);
    const pageAlts = [...r.text.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map((a) => a[1] + '=' + a[2]);
    const want = ['en-AU=' + u.loc, 'x-default=' + u.loc];
    for (const w of want) if (!pageAlts.includes(w)) fail.push('HREFLANG MISSING ' + w + ' on ' + path);
    const smAlts = u.alts.map((a) => a[0] + '=' + a[1]);
    for (const w of want) if (!smAlts.includes(w)) fail.push('SITEMAP HREFLANG MISSING ' + w + ' for ' + path);
  }
}
await Promise.all(Array.from({ length: 8 }, worker));
ok(lms.size > 1, 'all lastmod dates identical (' + [...lms] + ')');

for (const f of ['/llms.txt', '/llms-full.txt']) {
  const r = await get(base + f);
  ok(r.status === 200, f + ' status ' + r.status);
  ok(/text\/plain/.test(r.headers.get('content-type') || ''), f + ' content-type ' + r.headers.get('content-type'));
  ok(/^# /.test(r.text) && /^> /m.test(r.text), f + ' missing H1 / blockquote summary');
  const links = [...r.text.matchAll(/\]\((https:\/\/buggiesforsale\.com\.au[^)\s]*)\)/g)].map((m) => m[1].slice(SITE.length)).filter((p) => !p.startsWith('/.well-known') && !p.startsWith('/api'));
  let bad = 0; for (const p of new Set(links)) { const rr = await get(base + p); if (rr.status !== 200) { bad++; fail.push(f + ' broken link ' + p + ' ' + rr.status); } }
  console.log(f, r.text.length + ' bytes,', new Set(links).size + ' unique links,', bad + ' broken');
}
console.log('sitemap URLs checked:', n, '| distinct lastmod dates:', lms.size);
console.log(fail.length ? 'FAIL (' + fail.length + ')\n' + fail.slice(0, 40).join('\n') : 'ALL CHECKS PASSED');
process.exit(fail.length ? 1 : 0);
