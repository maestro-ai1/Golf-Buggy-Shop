// Blog cover images 1600x900 (16:9): brand gradient + 1-3 product cards (white, rounded). Local, no API.
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public/blog'); fs.mkdirSync(OUT, { recursive: true });
const cat = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/catalog.json'), 'utf8'));
const find = (rx) => cat.find((p) => rx.test(p.name) && p.images.length);
const POSTS = {
  'road-rules': [/Magnum 2S 2 Seat/],
  'cart-price': [/IKON HD 4S/, /Magnum 2S Platinum/],
  'electric-vs-push': [/MGI ZIP X3/, /Stinger SG-5/],
  'lithium-batteries': [/PRO-Li Plus 48V 150Ah Lithium Battery Package for Club Car/, /MGI Zip 24V 299Wh/],
  'utv-guide': [/Kayo S150/, /Cheetah 175/],
  'remote-buggy': [/Ai Navigator GPS/, /QOD Q2/],
};
const W = 1600, H = 900;
const bg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b2e22"/><stop offset="1" stop-color="#1c7a55"/></linearGradient><pattern id="d" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#ffffff" fill-opacity=".10"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/><rect width="100%" height="100%" fill="url(#d)"/><circle cx="1420" cy="120" r="260" fill="#f07a1f" fill-opacity=".16"/><path d="M0 760 C 400 700 900 820 1600 700 V900 H0Z" fill="#082418" fill-opacity=".55"/><path d="M110 120v150" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M110 120l86 42-86 42z" fill="#f07a1f"/></svg>`);
for (const [name, rxs] of Object.entries(POSTS)) {
  const items = rxs.map(find).filter(Boolean);
  const size = items.length === 1 ? 640 : 520;
  const layers = [];
  for (let i = 0; i < items.length; i++) {
    const src = path.join(ROOT, 'public' + items[i].images[0] + '.webp');
    const img = await sharp(src).resize(size - 40, size - 40).toBuffer();
    const card = await sharp({ create: { width: size, height: size, channels: 4, background: '#ffffff' } })
      .composite([{ input: img, left: 20, top: 20 }, { input: Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="34" fill="none"/></svg>`), left: 0, top: 0 }])
      .png().toBuffer();
    const rounded = await sharp(card).composite([{ input: Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="34"/></svg>`), blend: 'dest-in' }]).png().toBuffer();
    const x = items.length === 1 ? 760 : 560 + i * 430, y = items.length === 1 ? 130 : 120 + i * 90;
    layers.push({ input: Buffer.from(`<svg width="${size + 80}" height="${size + 80}"><defs><filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000" flood-opacity=".38"/></filter></defs><rect x="40" y="40" width="${size}" height="${size}" rx="34" fill="#fff" filter="url(#s)"/></svg>`), left: x - 40, top: y - 40 });
    layers.push({ input: rounded, left: x, top: y });
  }
  await sharp(bg).composite(layers).webp({ quality: 82 }).toFile(path.join(OUT, name + '.webp'));
  console.log(name, items.map((p) => p.name).join(' + '));
}
