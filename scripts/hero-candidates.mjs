// Dev helper (local, keyless): find free-licence colour landscape photos on Wikimedia Commons for each hero slot, build a labelled contact sheet per slot.
// Usage: node scripts/hero-candidates.mjs <outDir> [slot ...]   -> <outDir>/<slot>.jpg + <outDir>/candidates.json (licence + author recorded for _sources.csv)
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const OUT = process.argv[2]; fs.mkdirSync(OUT, { recursive: true });
const only = process.argv.slice(3);
const UA = { 'User-Agent': 'BuggiesForSaleImageBot/1.0 (sales@buggiesforsale.com.au)' };
const SLOTS = {
  'clearance': ['golf cart fairway', 'electric golf cart parked golf course'],
  'parts-accessories': ['golf cart battery', 'golf cart wheel tyre', 'golf cart workshop repair'],
  'brands': ['golf carts lined up', 'golf cart fleet clubhouse'],
  'golf-buggies-for-sale': ['golf trolley on golf course', 'electric golf caddy trolley'],
  'golf-buggies-motorised-electric': ['electric golf trolley', 'motorised golf caddy'],
  'golf-buggies-remote-control': ['remote control golf trolley', 'follow me golf caddy'],
  'golf-buggies-push-pull': ['push golf trolley', 'golf pull cart'],
  'golf-buggies-ride-on-seated': ['golf buggy two seater', 'golf cart two seat course'],
  'golf-buggies-3-wheel': ['three wheel golf trolley', 'golf trolley three wheels'],
  'golf-buggies-golf-scooters': ['golf scooter', 'golf course scooter'],
  'golf-carts-used': ['golf cart parked', 'old golf cart'],
  'golf-carts-petrol': ['gas golf cart', 'Club Car golf cart'],
  'golf-carts-electric': ['electric golf cart', 'E-Z-GO golf cart'],
  'golf-carts-utility-4-seater': ['four seat golf cart', 'utility golf cart', 'Club Car Carryall'],
  'golf-carts-mini-junior': ['small golf cart', 'junior golf cart'],
  'off-road-dune-buggies': ['dune buggy sand', 'sand rail desert'],
  'off-road-go-karts': ['off road go kart', 'go kart track'],
  'off-road-kids-buggies': ['kids electric buggy', 'children ride on buggy'],
  'off-road-electric-utvs': ['electric utv', 'electric side by side'],
  'off-road-side-by-sides': ['side by side UTV trail', 'Polaris Ranger', 'Can-Am Maverick'],
  'off-road-mini-quads': ['mini quad bike', 'kids ATV'],
};
const get = async (u, bin) => { for (let i = 0; i < 2; i++) { try { const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(25000) }); if (r.ok) return bin ? Buffer.from(await r.arrayBuffer()) : await r.json(); } catch {} } return null; };
const all = {};
for (const [slot, qs] of Object.entries(SLOTS)) {
  if (only.length && !only.includes(slot)) continue;
  const seen = new Map();
  for (const q of qs) {
    const api = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=20&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiurlwidth=420&gsrsearch=' + encodeURIComponent(q + ' filetype:bitmap');
    const j = await get(api); const pages = j?.query?.pages ? Object.values(j.query.pages) : [];
    for (const p of pages) {
      const ii = p.imageinfo?.[0]; if (!ii || !/jpeg/.test(ii.mime)) continue;
      if (ii.width < 1800 || ii.width / ii.height < 1.35) continue;
      const lic = ii.extmetadata?.LicenseShortName?.value || '';
      if (!/CC0|CC BY|Public domain|PD/i.test(lic)) continue;
      seen.set(p.title, { title: p.title, url: ii.url, thumb: ii.thumburl, w: ii.width, h: ii.height, license: lic, author: (ii.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '').slice(0, 80), page: ii.descriptionurl });
    }
  }
  const list = [...seen.values()].slice(0, 12);
  all[slot] = list;
  const W = 300, H = 190, cols = 4, comp = [];
  for (const [i, c] of list.entries()) {
    const b = c.thumb && await get(c.thumb, true); if (!b) continue;
    const img = await sharp(b).resize(W - 6, H - 26, { fit: 'cover' }).jpeg().toBuffer();
    const l = (i % cols) * W, t = Math.floor(i / cols) * H;
    comp.push({ input: img, left: l + 3, top: t + 22 }, { input: Buffer.from(`<svg width="${W}" height="20"><text x="4" y="14" font-size="12" font-family="Arial">${slot}#${i} ${c.license}</text></svg>`), left: l, top: t });
  }
  if (comp.length) await sharp({ create: { width: cols * W, height: Math.ceil(list.length / cols) * H, channels: 3, background: '#fff' } }).composite(comp).jpeg({ quality: 75 }).toFile(path.join(OUT, slot + '.jpg'));
  console.log(slot, list.length);
}
fs.writeFileSync(path.join(OUT, 'candidates.json'), JSON.stringify(all, null, 1));
