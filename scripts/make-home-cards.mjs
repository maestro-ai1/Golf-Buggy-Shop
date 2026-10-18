// Homepage buyer-guide card pictures: colour, 4:3, WebP + AVIF. Heroes are cropped to their photo side (the left of each hero carries a text gradient).
import sharp from 'sharp';
import fs from 'node:fs';

const OUT = 'public/images/home';
fs.mkdirSync(OUT, { recursive: true });
const KIDS = process.argv[2]; // path to the supplied kids buggy photo (portrait)

const jobs = [
  { name: 'guide-golf', src: 'public/images/hero/golf-buggies-course-1200.webp', crop: { left: 430, top: 11, width: 770, height: 578 } },
  { name: 'guide-offroad', src: 'public/images/hero/off-road-dune-buggies-1200.webp', crop: { left: 520, top: 20, width: 680, height: 510 } },
];
if (KIDS) jobs.push({ name: 'guide-kids', src: KIDS, crop: { left: 0, top: 570, width: 1024, height: 768 } });

for (const j of jobs) {
  const base = sharp(j.src).extract(j.crop).resize(800, 600, { fit: 'cover' });
  await base.clone().webp({ quality: 80 }).toFile(`${OUT}/${j.name}.webp`);
  await base.clone().avif({ quality: 55 }).toFile(`${OUT}/${j.name}.avif`);
  console.log(j.name, fs.statSync(`${OUT}/${j.name}.webp`).size, fs.statSync(`${OUT}/${j.name}.avif`).size);
}
