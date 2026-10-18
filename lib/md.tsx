import Link from 'next/link';
import { slugify } from '@/lib/utils';

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
    if (l.startsWith('## ')) blocks.push(<h2 id={slugify(l.slice(3))} key={k}>{l.slice(3)}</h2>);
    else blocks.push(<p key={k}>{inline(l, `p-${k}`)}</p>);
  });
  flush(lines.length);
  return <>{blocks}</>;
}
