import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  CATEGORIES,
  PRODUCTS,
  SITE,
  CONTACT,
  SHOP,
  Category,
} from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { ArrowRight, Star, ShoppingBag, ShieldCheck, Truck, Check, Wrench } from 'lucide-react';
import { CategoryProductGrid } from './CategoryProductGrid';
import { VehicleSelector } from '@/components/VehicleSelector';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} | Buggies For Sale Australia`,
    description: category.shortDescription,
    alternates: {
      canonical: `https://${SITE.domain}/shop/${category.slug}/`,
    },
    openGraph: {
      title: `${category.name} | Buggies For Sale Australia`,
      description: category.shortDescription,
      url: `https://${SITE.domain}/shop/${category.slug}/`,
      type: 'website',
      images: [{ url: category.image, width: 800, height: 600, alt: category.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | Buggies For Sale Australia`,
      description: category.shortDescription,
      images: [category.image],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = PRODUCTS.filter((p) => p.category === category.slug);

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://${SITE.domain}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Shop',
        item: `https://${SITE.domain}/shop/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://${SITE.domain}/shop/${category.slug}/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbsSchema} />

      {/* Signature Buggies Unlimited Vehicle Selector Banner */}
      <VehicleSelector />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-mono mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-slate-900">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">{category.name}</span>
          </nav>

          {/* Category Header Hero */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
                Category Superstore
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight uppercase leading-tight">
                {category.h1}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {category.introCopy}
              </p>

              {/* Subcategories Chips */}
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="pt-3">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Subcategories:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/shop?q=${encodeURIComponent(sub.name)}`}
                        className="px-3 py-1.5 rounded bg-slate-100 hover:bg-[#D32F2F] hover:text-white text-slate-700 text-xs font-bold transition-colors border border-slate-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm mb-8 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#D32F2F]" />
              <span>Nationwide Tailgate Freight</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
              <span>Full Australian Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#D32F2F]" />
              <span>42-Point PDI Inspected</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#D32F2F]" />
              <span>Guaranteed Exact Fitment</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="font-bold text-sm uppercase tracking-wider text-[#0B2545]">
                Available Buggies & Equipment ({categoryProducts.length})
              </h2>
              <span className="text-xs text-slate-500 font-mono">
                Showing all in-stock Australian depot items
              </span>
            </div>

            <CategoryProductGrid products={categoryProducts} category={category} />
          </div>

          {/* Category Guide Section */}
          <div className="mt-14 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B2545] uppercase tracking-tight mb-4">
              Expert Buying Advice: {category.name}
            </h2>
            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
              <p>
                When purchasing {category.name.toLowerCase()} in Australia, selecting the correct chassis, motor wattage, and battery chemistry is critical to longevity. Coastal holiday resorts and fairways require rust-inhibited aluminium frames (such as Club Car AlumiCore), while rugged regional stations demand heavy-gauge steel roll cages with high-ground-clearance A-arm suspension.
              </p>
              <p>
                Need assistance checking fitment or arranging tailgate freight to regional postcodes? Call our Australian support desk at <strong>{CONTACT.phone}</strong> or email <strong>{CONTACT.email}</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
