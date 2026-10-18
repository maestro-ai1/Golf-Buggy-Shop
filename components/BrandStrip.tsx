import Link from 'next/link';
import { brandPages } from '@/config/site';
import BrandLogo from '@/components/BrandLogo';

// Brand logo grid linking to each /brands/<slug>/ page.
export default function BrandStrip({ limit = 12 }: { limit?: number }) {
  const brands = brandPages().slice(0, limit);
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {brands.map((b) => {
        const slug = b.slug.split('/').pop()!;
        const name = b.name.replace(/ Buggies$/, '');
        return (
          <li key={b.url}>
            <Link href={b.url} className="card card-hover grid h-24 place-items-center p-4" aria-label={`${name} buggies`}>
              <BrandLogo slug={slug} name={name} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
