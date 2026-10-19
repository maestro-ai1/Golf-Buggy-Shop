import { Breadcrumbs } from '@/components/Bits';

export default function InfoPage({ title, lead, crumb, children, narrow = true }: { title: string; lead?: string; crumb: { name: string; url: string }; children: React.ReactNode; narrow?: boolean }) {
  return (
    <>
      <section className="border-b border-line bg-white"><div className={`container-x py-10 ${narrow ? 'max-w-3xl' : ''}`}><Breadcrumbs trail={[crumb]} /><h1 className="mt-4 text-4xl font-black md:text-5xl">{title}</h1>{lead && <p className="mt-3 max-w-2xl text-lg text-muted">{lead}</p>}</div></section>
      <section className="section"><div className={`container-x ${narrow ? 'max-w-3xl' : ''}`}><div className="prose-copy">{children}</div></div></section>
    </>
  );
}
