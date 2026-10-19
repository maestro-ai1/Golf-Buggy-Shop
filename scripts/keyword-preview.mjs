// Keyword mapping preview: one self-contained HTML page (docs/keyword-preview.html) listing every keyword used on the website:
// pages (primary + secondaries with volume, KD, intent and on-page checks), blog posts (target keyword) and products (five tags each).
// It also runs the Golden Keyword Rule checks and lists anything that does not pass. Run scripts/keyword-audit.mjs first (needs the site running) so data/keyword-report.json is current.
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(import.meta.dirname, '..');
const rep = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/keyword-report.json'), 'utf8'));
const cat = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8')); const products = Array.isArray(cat) ? cat : cat.products;
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// keyword bank (owner's Semrush ledger) for volume / KD / intent lookups
const parse = (t) => { const rows = []; let row = [], cur = '', q = false; for (let i = 0; i < t.length; i++) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; } else if (c === '"') q = true; else if (c === ',') { row.push(cur); cur = ''; } else if (c === '\n') { row.push(cur.replace(/\r$/, '')); rows.push(row); row = []; cur = ''; } else cur += c; } return rows; };
const L = parse(fs.readFileSync(path.join(ROOT, '02-keyword-mapping/FINAL-keyword-ledger.csv'), 'utf8').replace(/^﻿/, '')); const H = L[0]; const ix = Object.fromEntries(H.map((h, i) => [h, i]));
const bank = new Map(); for (const r of L.slice(1)) if (r.length > 8) bank.set(r[ix.Keyword].toLowerCase(), { vol: +r[ix.Volume] || 0, kd: +r[ix.KD] || 0, intent: r[ix.Intent] });

const pages = rep.rows.filter((r) => r.kind === 'page'), blogs = rep.rows.filter((r) => r.kind === 'blog');
const tc = (i) => /transactional|commercial/i.test(i || '');
const tick = (b) => (b ? '<span class="ok">✓</span>' : '<span class="bad">✗</span>');

// ----- checks
const checks = [];
const check = (name, bad, note) => checks.push({ name, bad, note });
check('Every page has a primary keyword', pages.filter((p) => !p.primary), 'pages without a primary');
const prim = {}; pages.concat(blogs).forEach((p) => { const k = p.primary?.keyword?.toLowerCase(); if (k) (prim[k] = prim[k] || []).push(p.url); });
check('No primary keyword is used on two URLs', Object.entries(prim).filter(([, v]) => v.length > 1).map(([k, v]) => `${k}: ${v.join(', ')}`), 'duplicate primaries');
check('Primary and secondary keywords are KD 28 or below', pages.filter((p) => (p.primary?.kd ?? 0) > 28 || (p.secondary || []).some((s) => s.kd > 28)).map((p) => p.url), 'pages over KD 28');
check('Page primaries are transactional or commercial (brand pages may use navigational)', pages.filter((p) => p.primary && !tc(p.primary.intent)).map((p) => `${p.url} : ${p.primary.keyword} [${p.primary.intent || 'no intent data'}]`), 'primaries that are not T/C');
check('Every page has 5 secondary keywords', pages.filter((p) => (p.secondary || []).length < 5).map((p) => `${p.url} (${(p.secondary || []).length} of 5)`), 'pages with fewer than 5 secondaries');
check('Primary is in title, H1, meta description and intro', pages.concat(blogs).filter((p) => p.flags && p.flags.length).map((p) => `${p.url}: ${p.flags.join(' / ')}`), 'on-page flags');
check('Blog posts are 1,500 words or more', blogs.filter((b) => b.words < 1500).map((b) => `${b.url} (${b.words})`), 'short posts');
check('Every product has 5 tags and 5 FAQs', products.filter((p) => p.tags.length !== 5 || p.faqs.length !== 5).map((p) => p.slug), 'products');
check('Every product has an image', products.filter((p) => !p.images.length).map((p) => p.slug), 'products without images');
let noData = 0, tagTotal = 0; products.forEach((p) => p.tags.forEach((t) => { tagTotal++; if (!bank.has(t.toLowerCase())) noData++; }));
const passN = checks.filter((c) => !c.bad.length).length;

// ----- tables
const pageRows = pages.map((p) => {
  const pr = p.primary || {};
  const sec = (p.secondary || []).map((s) => `<li>${esc(s.keyword)} <small>${s.volume ?? '–'} / KD ${s.kd ?? '–'} · ${s.uses ?? 0}×</small></li>`).join('');
  return `<tr data-q="${esc((p.url + ' ' + pr.keyword + ' ' + (p.secondary || []).map((s) => s.keyword).join(' ')).toLowerCase())}"><td><a href="${esc(p.url)}">${esc(p.url)}</a><br><small>${esc(p.name)}</small></td><td><b>${esc(pr.keyword)}</b><br><small>${pr.volume ?? '–'} /mo · KD ${pr.kd ?? '–'} · ${esc(pr.intent || 'n/a')}</small></td><td class="c">${tick(pr.inTitle)}</td><td class="c">${tick(pr.inH1)}</td><td class="c">${tick(pr.inMeta)}</td><td class="c">${tick(pr.inIntro)}</td><td class="c">${pr.uses ?? 0}× · ${pr.density ?? 0}%</td><td><ul>${sec || '<li class="bad">none mapped</li>'}</ul></td></tr>`;
}).join('');
const blogRows = blogs.map((b) => { const pr = b.primary || {}; return `<tr data-q="${esc((b.url + ' ' + pr.keyword).toLowerCase())}"><td><a href="${esc(b.url)}">${esc(b.name)}</a></td><td><b>${esc(pr.keyword)}</b></td><td>${pr.volume ?? '–'}</td><td>${pr.kd ?? '–'}</td><td class="c">${tick(pr.inTitle)}</td><td class="c">${tick(pr.inH1)}</td><td class="c">${tick(pr.inMeta)}</td><td class="c">${tick(pr.inIntro)}</td><td class="c">${b.words}</td></tr>`; }).join('');
const prodRows = products.map((p) => `<tr data-q="${esc((p.name + ' ' + p.tags.join(' ')).toLowerCase())}"><td><a href="/products/${esc(p.slug)}/">${esc(p.name)}</a><br><small>${esc(p.brand)} · $${p.price}</small></td><td><ul>${p.tags.map((t) => { const b = bank.get(t.toLowerCase()); return `<li>${esc(t)} <small>${b ? `${b.vol} / KD ${b.kd}` : 'not in bank'}</small></li>`; }).join('')}</ul></td></tr>`).join('');
const checkRows = checks.map((c) => `<div class="chk ${c.bad.length ? 'fail' : 'pass'}"><b>${c.bad.length ? '✗' : '✓'} ${esc(c.name)}</b>${c.bad.length ? `<span> ${c.bad.length} ${esc(c.note)}</span><ul>${c.bad.slice(0, 40).map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</div>`).join('');

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Keyword mapping preview</title><style>
:root{--g:#0f3d2e;--o:#e8761f;--line:#e2ddd2;--bg:#faf7f1}*{box-sizing:border-box}body{margin:0;font:14px/1.45 system-ui,Segoe UI,Arial;background:var(--bg);color:#1c1c1c}header{background:var(--g);color:#fff;padding:18px 22px}h1{margin:0;font-size:22px}header p{margin:4px 0 0;opacity:.85}main{padding:16px 22px 60px;max-width:1500px;margin:auto}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:14px 0}.card{background:#fff;border:1px solid var(--line);border-radius:10px;padding:10px 12px}.card b{display:block;font-size:22px;color:var(--g)}
nav{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}nav button{border:1px solid var(--line);background:#fff;padding:8px 14px;border-radius:99px;font-weight:700;cursor:pointer}nav button.on{background:var(--g);color:#fff}
input{width:100%;max-width:420px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;margin:6px 0 12px}table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line)}th,td{border-bottom:1px solid var(--line);padding:7px 9px;vertical-align:top;text-align:left}th{position:sticky;top:0;background:#f1ece0;font-size:12px;text-transform:uppercase;letter-spacing:.03em}td.c{text-align:center;white-space:nowrap}small{color:#666}ul{margin:0;padding-left:16px}a{color:#0b5a3f}
.ok{color:#0a7d3c;font-weight:800}.bad{color:#c62828;font-weight:800}.chk{background:#fff;border:1px solid var(--line);border-left:5px solid #0a7d3c;border-radius:8px;padding:9px 12px;margin:8px 0}.chk.fail{border-left-color:#c62828}.chk span{color:#c62828;font-weight:700}
section{display:none}section.on{display:block}</style></head><body>
<header><h1>Keyword mapping preview</h1><p>Golden Keyword Rule check of every keyword used on buggiesforsale.com.au · generated ${new Date().toISOString().slice(0, 10)}</p></header><main>
<div class="cards"><div class="card"><b>${pages.length}</b>mapped pages</div><div class="card"><b>${blogs.length}</b>blog posts</div><div class="card"><b>${products.length}</b>products (${products.length * 5} tags)</div><div class="card"><b>${rep.summary.keywordsMapped}</b>page keywords mapped</div><div class="card"><b>${rep.summary.totalPrimaryVolume.toLocaleString()}</b>primary search volume</div><div class="card"><b>${rep.summary.totalSecondaryVolume.toLocaleString()}</b>secondary search volume</div><div class="card"><b>${passN}/${checks.length}</b>rule checks passed</div></div>
<nav><button class="on" data-t="chk">Rule checks</button><button data-t="pg">Pages (${pages.length})</button><button data-t="bl">Blog (${blogs.length})</button><button data-t="pr">Products (${products.length})</button></nav>
<section id="chk" class="on">${checkRows}<p><small>${noData} of ${tagTotal} product tags are not in the Semrush bank (they are category and brand phrases, not tracked keywords).</small></p></section>
<section id="pg"><input placeholder="Filter pages or keywords" data-f="pgt"><table id="pgt"><thead><tr><th>Page</th><th>Primary</th><th>Title</th><th>H1</th><th>Meta</th><th>Intro</th><th>Uses</th><th>Secondary keywords (volume / KD · uses)</th></tr></thead><tbody>${pageRows}</tbody></table></section>
<section id="bl"><input placeholder="Filter posts" data-f="blt"><table id="blt"><thead><tr><th>Post</th><th>Target keyword</th><th>Volume</th><th>KD</th><th>Title</th><th>H1</th><th>Meta</th><th>Intro</th><th>Words</th></tr></thead><tbody>${blogRows}</tbody></table></section>
<section id="pr"><input placeholder="Filter products or tags" data-f="prt"><table id="prt"><thead><tr><th>Product</th><th>Five tags (volume / KD)</th></tr></thead><tbody>${prodRows}</tbody></table></section>
</main><script>document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('nav button,section').forEach(e=>e.classList.remove('on'));b.classList.add('on');document.getElementById(b.dataset.t).classList.add('on')});document.querySelectorAll('input[data-f]').forEach(i=>i.oninput=()=>{const q=i.value.toLowerCase();document.querySelectorAll('#'+i.dataset.f+' tbody tr').forEach(r=>r.style.display=r.dataset.q.includes(q)?'':'none')});</script></body></html>`;
fs.writeFileSync(path.join(ROOT, 'docs/keyword-preview.html'), html);
console.log(`checks passed ${passN}/${checks.length}`); checks.filter((c) => c.bad.length).forEach((c) => console.log(' FAIL', c.name, '=', c.bad.length));
