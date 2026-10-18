import Link from 'next/link';
import { slugify, money } from '@/lib/utils';
import Pic from '@/components/Pic';
import { PRODUCTS } from '@/config/site';

// Minimal renderer for blog content: "## " H2, "- " lists, [text](url) links, **bold**.
function inline(text: string, key: string) {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0, m: RegExpExecArray | null, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[3]) out.push(<strong key={`${key}-${i++}`}>{m[3]}</strong>);
    else {
      const href = m[2];
      out.push(href.startsWith('/') ? <Link key={`${key}-${i++}`} href={href}>{m[1]}</Link> : <a key={`${key}-${i++}`} href={href} target="_blank" rel="noopener noreferrer">{m[1]}</a>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function toc(lines: string[]) { return lines.filter((l) => l.startsWith('## ')).map((l) => ({ id: slugify(l.slice(3)), text: l.slice(3) })); }

export function Markdown({ lines }: { lines: string[] }) {
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = (k: number) => { if (list.length) { blocks.push(<ul key={`ul-${k}`}>{list.map((t, i) => <li key={i}>{inline(t, `li-${k}-${i}`)}</li>)}</ul>); list = []; } };
  lines.forEach((l, k) => {
    if (l.startsWith('- ')) { list.push(l.slice(2)); return; }
    flush(k);
    const pm = l.match(/^\{\{product:([a-z0-9-]+)\}\}$/);
    if (pm) {
      const p = PRODUCTS.find((x) => x.slug === pm[1]);
      if (p) blocks.push(<figure key={k} className="not-prose my-8"><Link href={`/products/${p.slug}/`} className="card card-hover flex items-center gap-5 p-4 sm:p-5"><span className="product-frame h-28 w-28 shrink-0 border border-line sm:h-36 sm:w-36"><Pic base={p.images[0]} alt={`${p.name} - ${p.groupLabel}`} width={144} height={144} sizes="144px" /></span><span><span className="block text-xs font-bold uppercase tracking-wide text-fw-600">{p.brand}</span><span className="mt-1 block font-display text-lg font-extrabold text-fw-900">{p.name}</span><span className="mt-1 block text-sm text-muted">{money(p.price)} inc. GST</span><span className="mt-2 block text-sm font-extrabold text-accent-600">View product →</span></span></Link></figure>);
      return;
    }
    if (l.startsWith('## ')) blocks.push(<h2 id={slugify(l.slice(3))} key={k}>{l.slice(3)}</h2>);
    else blocks.push(<p key={k}>{inline(l, `p-${k}`)}</p>);
  });
  flush(lines.length);
  return <>{blocks}</>;
}
