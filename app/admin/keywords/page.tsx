'use client';

import { Fragment, useMemo, useState } from 'react';
import { Check, Download, X } from 'lucide-react';

interface Sec { keyword: string; volume: number | null; kd: number | null; intent: string; uses: number }
interface Row {
  kind: 'page' | 'blog'; url: string; name: string; level: string; words: number; title: string; h1: string; meta: string; flags: string[];
  primary: { keyword: string; volume: number | null; kd: number | null; intent: string; inTitle: boolean; inH1: boolean; inMeta: boolean; inIntro: boolean; uses: number; density: number } | null;
  secondary: Sec[];
}
interface Report { summary: { pages: number; posts: number; withFlags: number; totalPrimaryVolume: number; totalSecondaryVolume: number; keywordsMapped: number; generated: string }; rows: Row[] }

const n = (v: number | null | undefined) => (v == null ? '-' : v.toLocaleString('en-AU'));
const Tick = ({ ok }: { ok: boolean }) => (ok ? <Check size={16} className="inline text-fw-600" aria-label="yes" /> : <X size={16} className="inline text-accent-600" aria-label="no" />);

export default function KeywordReport() {
  const [pass, setPass] = useState('');
  const [data, setData] = useState<Report | null>(null);
  const [err, setErr] = useState('');
  const [kind, setKind] = useState<'all' | 'page' | 'blog'>('all');
  const [level, setLevel] = useState('all');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  async function load(e: React.FormEvent) {
    e.preventDefault(); setErr('');
    const r = await fetch('/api/admin/keywords', { headers: { 'X-Admin-Passcode': pass } });
    if (!r.ok) { setErr(r.status === 401 ? 'Wrong passcode.' : r.status === 503 ? 'Admin is not configured (set ADMIN_PASSCODE).' : 'Could not load the report.'); return; }
    setData(await r.json());
  }

  const levels = useMemo(() => ['all', ...Array.from(new Set((data?.rows || []).map((r) => r.level)))], [data]);
  const rows = useMemo(() => (data?.rows || []).filter((r) => (kind === 'all' || r.kind === kind) && (level === 'all' || r.level === level) && (!q || (r.url + r.name + (r.primary?.keyword || '') + r.secondary.map((s) => s.keyword).join(' ')).toLowerCase().includes(q.toLowerCase()))), [data, kind, level, q]);
  const byIntent = useMemo(() => { const m: Record<string, number> = {}; (data?.rows || []).forEach((r) => { const i = (r.primary?.intent || 'Unknown').split(',')[0].trim() || 'Unknown'; m[i] = (m[i] || 0) + 1; }); return Object.entries(m).sort((a, b) => b[1] - a[1]); }, [data]);

  function csv() {
    const head = ['Page', 'Type', 'URL', 'Primary keyword', 'Intent', 'Volume', 'KD', 'In title', 'In H1', 'In meta', 'In intro', 'Uses', 'Density %', 'Secondary keywords (volume, intent, uses)', 'Flags'];
    const lines = (data?.rows || []).map((r) => [r.name, r.kind, r.url, r.primary?.keyword, r.primary?.intent, r.primary?.volume, r.primary?.kd, r.primary?.inTitle, r.primary?.inH1, r.primary?.inMeta, r.primary?.inIntro, r.primary?.uses, r.primary?.density, r.secondary.map((s) => `${s.keyword} (${s.volume ?? '-'}, ${s.intent || '-'}, ${s.uses}x)`).join('; '), r.flags.join('; ')].map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(','));
    const url = URL.createObjectURL(new Blob([[head.join(','), ...lines].join('\n')], { type: 'text/csv' }));
    const a = document.createElement('a'); a.href = url; a.download = 'keyword-mapping-report.csv'; a.click(); URL.revokeObjectURL(url);
  }

  if (!data) return (
    <section className="section"><div className="container-x max-w-md">
      <h1 className="text-3xl font-black">Keyword mapping report</h1>
      <p className="mt-2 text-muted">Owner only. Enter the admin passcode to see every keyword used on the website, with intent, volume and on-page checks.</p>
      <form onSubmit={load} className="mt-6 space-y-3">
        <label className="block text-sm font-bold">Passcode<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="mt-1.5 h-12 w-full rounded-xl border border-line bg-white px-4" autoComplete="current-password" /></label>
        {err && <p role="alert" className="text-sm font-semibold text-accent-600">{err}</p>}
        <button className="btn btn-primary w-full">Open report</button>
      </form>
    </div></section>
  );

  const s = data.summary;
  return (
    <section className="section !pt-8"><div className="container-x">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><h1 className="text-3xl font-black md:text-4xl">Keyword mapping report</h1><p className="mt-1 text-muted">On-page SEO check against the locked keyword map. Generated {s.generated}.</p></div>
        <button onClick={csv} className="btn btn-green"><Download size={16} /> Download CSV</button>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {[['Mapped pages', s.pages], ['Blog posts', s.posts], ['Keywords mapped', s.keywordsMapped], ['Primary volume', s.totalPrimaryVolume], ['Secondary volume', s.totalSecondaryVolume], ['Pages to review', s.withFlags]].map(([k, v]) => (
          <div key={k as string} className="card p-4"><dt className="text-xs font-bold uppercase tracking-wide text-muted">{k}</dt><dd className="mt-1 font-display text-2xl font-black text-fw-900">{n(v as number)}</dd></div>
        ))}
      </dl>
      <p className="mt-4 text-sm text-muted">Primary intent mix: {byIntent.map(([i, c]) => `${i} ${c}`).join(' · ')}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search page or keyword" className="h-11 min-w-[220px] flex-1 rounded-full border border-line bg-white px-5" aria-label="Search" />
        <select value={kind} onChange={(e) => setKind(e.target.value as 'all' | 'page' | 'blog')} className="h-11 rounded-full border border-line bg-white px-4" aria-label="Type"><option value="all">All types</option><option value="page">Pages</option><option value="blog">Blog posts</option></select>
        <select value={level} onChange={(e) => setLevel(e.target.value)} className="h-11 rounded-full border border-line bg-white px-4" aria-label="Level">{levels.map((l) => <option key={l} value={l}>{l === 'all' ? 'All levels' : l}</option>)}</select>
        <span className="text-sm font-semibold text-muted">{rows.length} shown</span>
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-sand-50 text-xs uppercase tracking-wide text-muted"><tr>{['Page', 'Primary keyword', 'Intent', 'Volume', 'KD', 'Title', 'H1', 'Meta', 'Intro', 'Uses', 'Density', 'Secondary'].map((h) => <th key={h} className="px-3 py-3 font-bold">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <Fragment key={r.url}>
                <tr className="cursor-pointer border-t border-line align-top hover:bg-sand-50" onClick={() => setOpen(open === r.url ? null : r.url)}>
                  <td className="px-3 py-3"><a href={r.url} target="_blank" rel="noopener noreferrer" className="font-bold text-fw-700 hover:underline" onClick={(e) => e.stopPropagation()}>{r.name}</a><div className="text-xs text-muted">{r.url}</div>{r.flags.length > 0 && <div className="mt-1 text-xs font-semibold text-accent-600">{r.flags.join(' · ')}</div>}</td>
                  <td className="px-3 py-3 font-semibold">{r.primary?.keyword || '-'}</td>
                  <td className="px-3 py-3">{r.primary?.intent || '-'}</td>
                  <td className="px-3 py-3">{n(r.primary?.volume)}</td>
                  <td className="px-3 py-3">{n(r.primary?.kd)}</td>
                  <td className="px-3 py-3">{r.primary && <Tick ok={r.primary.inTitle} />}</td>
                  <td className="px-3 py-3">{r.primary && <Tick ok={r.primary.inH1} />}</td>
                  <td className="px-3 py-3">{r.primary && <Tick ok={r.primary.inMeta} />}</td>
                  <td className="px-3 py-3">{r.primary && <Tick ok={r.primary.inIntro} />}</td>
                  <td className="px-3 py-3">{r.primary?.uses ?? '-'}</td>
                  <td className="px-3 py-3">{r.primary ? r.primary.density + '%' : '-'}</td>
                  <td className="px-3 py-3">{r.secondary.filter((x) => x.uses > 0).length}/{r.secondary.length}</td>
                </tr>
                {open === r.url && (
                  <tr className="border-t border-line bg-sand-50/60"><td colSpan={12} className="px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">Title</p><p className="text-sm">{r.title}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wide text-muted">Meta description</p><p className="text-sm">{r.meta}</p>
                    {r.secondary.length > 0 && <table className="mt-3 w-full max-w-3xl text-sm"><thead className="text-xs uppercase text-muted"><tr><th className="py-1 text-left">Secondary keyword</th><th className="text-left">Intent</th><th className="text-left">Volume</th><th className="text-left">KD</th><th className="text-left">Uses</th></tr></thead><tbody>{r.secondary.map((x) => <tr key={x.keyword} className="border-t border-line/60"><td className="py-1.5 font-semibold">{x.keyword}</td><td>{x.intent || '-'}</td><td>{n(x.volume)}</td><td>{n(x.kd)}</td><td>{x.uses > 0 ? x.uses + 'x' : <span className="font-semibold text-accent-600">not used</span>}</td></tr>)}</tbody></table>}
                  </td></tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div></section>
  );
}
