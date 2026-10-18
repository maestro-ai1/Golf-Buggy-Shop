// Builds labelled contact sheets from scratch folders so many candidate photos can be reviewed at once.
// Usage: node scripts/contact-sheet.mjs <outPrefix> <dir1> [dir2...]
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const [prefix, ...dirs] = process.argv.slice(2);
const files = dirs.flatMap((d) => fs.readdirSync(d).filter((f) => f.endsWith('.jpg')).map((f) => path.join(d, f)));
const W = 400, H = 225, COLS = 4, PER = 16;
for (let s = 0; s * PER < files.length; s++) {
  const part = files.slice(s * PER, (s + 1) * PER); const rows = Math.ceil(part.length / COLS);
  const layers = [];
  for (let i = 0; i < part.length; i++) {
    const x = (i % COLS) * W, y = Math.floor(i / COLS) * (H + 22);
    layers.push({ input: await sharp(part[i]).resize(W - 4, H, { fit: 'cover' }).toBuffer(), left: x + 2, top: y });
    const label = path.basename(part[i]).replace('.jpg', '').replace(/__/g, ' / ').slice(0, 44);
    layers.push({ input: Buffer.from(`<svg width="${W}" height="22"><rect width="100%" height="100%" fill="#111"/><text x="6" y="16" font-size="13" fill="#fff" font-family="Arial">${label.replace(/&/g, '&amp;')}</text></svg>`), left: x, top: y + H });
  }
  const out = `${prefix}-${s + 1}.jpg`;
  await sharp({ create: { width: W * COLS, height: rows * (H + 22), channels: 3, background: '#fff' } }).composite(layers).jpeg({ quality: 82 }).toFile(out);
  console.log(out, part.length);
}
