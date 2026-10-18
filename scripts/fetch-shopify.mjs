// Fetch a Shopify store's public catalogue (products.json) into data/raw/<name>.json in the same shape as the other raw sources.
// Usage: node scripts/fetch-shopify.mjs <name> <https://store.domain>
import fs from 'node:fs';
const [name, base] = process.argv.slice(2);
const out = [];
for (let page = 1; page < 30; page++) {
  const r = await fetch(`${base}/products.json?limit=250&page=${page}`, { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/124' } });
  if (!r.ok) break;
  const j = await r.json(); if (!j.products?.length) break;
  for (const p of j.products) {
    const v = p.variants?.[0] || {};
    out.push({ name: p.title, vendor: p.vendor, type: p.product_type, price: Number(v.price) || 0, compareAt: Number(v.compare_at_price) || 0, available: p.variants?.some((x) => x.available), images: (p.images || []).map((i) => i.src), desc: (p.body_html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 1500), url: `${base}/products/${p.handle}`, tags: p.tags });
  }
}
fs.writeFileSync(`data/raw/${name}.json`, JSON.stringify(out));
const m = {}; out.forEach((p) => { m[p.vendor] = (m[p.vendor] || 0) + 1; });
console.log(name, out.length, Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, 40).map((e) => e.join(':')).join(', '));
