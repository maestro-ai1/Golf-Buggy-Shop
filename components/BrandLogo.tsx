// Brand logo: uses /brands/<slug>/logo.svg|png|webp when present (see data/brand-logos.json), else a clean wordmark.
import logos from '@/data/brand-logos.json';
import { PRODUCTS } from '@/config/site';

const map = logos as Record<string, { file: string; w?: number; h?: number }>;

export default function BrandLogo({ slug, name: rawName, className = '' }: { slug: string; name: string; className?: string }) {
  // real brand casing (MGI, ECAR, EZGO) from the catalogue; page names are title-cased (Mgi, Ecar)
  const name = PRODUCTS.find((p) => p.brandPage === slug)?.brand || rawName;
  const l = map[slug];
  if (l) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={l.file} alt={`${name} logo`} width={l.w || 140} height={l.h || 48} loading="lazy" className={`max-h-12 w-auto max-w-[140px] object-contain ${className}`} />;
  }
  return <span className={`font-display text-lg font-black uppercase tracking-tight text-fw-800 ${className}`}>{name}</span>;
}
