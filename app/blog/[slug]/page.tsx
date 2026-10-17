import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS, PRODUCTS, SITE, CONTACT } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import {
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Star,
  ShoppingBag,
  HelpCircle,
  FileText,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.seoTitle} | Buggies For Sale Australia`,
    description: post.excerpt,
    alternates: {
      canonical: `https://${SITE.domain}/blog/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title} | Buggies For Sale Australia`,
      description: post.excerpt,
      url: `https://${SITE.domain}/blog/${post.slug}/`,
      type: 'article',
      images: [{ url: post.image, width: 800, height: 500, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Buggies For Sale Australia`,
      description: post.excerpt,
      images: [post.image],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  // Find a matching or featured product to embed
  const embeddedProduct =
    PRODUCTS.find((p) =>
      post.title.toLowerCase().includes('golf')
        ? p.category === 'golf-buggies'
        : p.category === 'off-road'
    ) || PRODUCTS[0];

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: '2026-06-01',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: `https://${SITE.domain}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.legalName,
      logo: {
        '@type': 'ImageObject',
        url: `https://${SITE.domain}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${SITE.domain}/blog/${post.slug}/`,
    },
  };

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
        name: 'Blog',
        item: `https://${SITE.domain}/blog/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://${SITE.domain}/blog/${post.slug}/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[blogSchema, breadcrumbsSchema]} />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-mono mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-slate-900">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold truncate max-w-xs inline-block align-bottom">
              {post.title}
            </span>
          </nav>

          {/* Article Header Card */}
          <header className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span className="px-2.5 py-0.5 rounded bg-[#D32F2F] text-white font-bold uppercase tracking-wider text-[10px]">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Exactly one H1 */}
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] tracking-tight uppercase leading-snug">
              {post.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium border-l-4 border-[#D32F2F] pl-4 py-1 italic bg-slate-50">
              {post.excerpt}
            </p>

            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-slate-100 border border-slate-200 mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Body Content */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            {/* Quick Table of Contents */}
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase font-mono text-[#0B2545] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#D32F2F]" />
                Guide Sections & Key Takeaways:
              </span>
              <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                <li>Australian terrain prerequisites & chassis selection</li>
                <li>Electric lithium battery range vs petrol displacement analysis</li>
                <li>Australian Consumer Law warranty & parts availability</li>
                <li>Frequently asked buyer questions</li>
              </ul>
            </div>

            {/* Main Text Content */}
            <div className="prose prose-slate text-sm leading-relaxed text-slate-800 space-y-4">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <h2 className="text-xl font-bold text-[#0B2545] uppercase tracking-tight pt-4 border-t border-slate-200">
                Why Australian Buyers Prioritise Local Depot Support
              </h2>
              <p>
                Purchasing a heavy buggy online requires full confidence in spare parts continuity. Whether you operate a 1000cc side-by-side on an outback cattle station or a remote-control caddy at your local golf club, wear items such as drive belts, brake pads, tie-rod ends, and lithium charging cables must be readily available without weeks of international shipping delays.
              </p>
              <p>
                At <strong>Buggies For Sale</strong>, all stock is pre-delivery inspected in Australia and crated for secure tailgate freight directly to your gate. Explore our complete <Link href="/shop" className="text-[#D32F2F] font-bold underline">Buggies For Sale Catalogue</Link> or consult our specialists on <strong>{CONTACT.phone}</strong>.
              </p>
            </div>

            {/* Embedded Commercial Product Recommendation Box */}
            <div className="mt-8 p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded border border-slate-200 overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={embeddedProduct.images[0]}
                    alt={embeddedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#D32F2F]">
                    Recommended In This Guide
                  </span>
                  <h4 className="font-bold text-sm text-[#0B2545]">
                    {embeddedProduct.name}
                  </h4>
                  <div className="text-sm font-black font-mono text-[#D32F2F] mt-0.5">
                    {SITE.currencySymbol}
                    {embeddedProduct.price.toLocaleString()} AUD
                  </div>
                </div>
              </div>

              <Link
                href={`/shop/${embeddedProduct.category}/${embeddedProduct.slug}`}
                className="px-5 py-2.5 bg-[#0B2545] hover:bg-[#D32F2F] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shrink-0 flex items-center gap-2 shadow"
              >
                <span>View Model Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 5 Targeted FAQs in Guide */}
            <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-[#0B2545] uppercase tracking-tight">
                Frequently Asked Technical Questions
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    1. What is the expected delivery timeframe to regional areas?
                  </strong>
                  Depot dispatch occurs within 24-48 business hours. Most eastern seaboard regional depots receive heavy freight within 3-5 business days with direct hydraulic tailgate delivery.
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    2. Can I finance or pay via commercial purchase order?
                  </strong>
                  Yes. We accept direct bank transfer (EFT), instant PayID, major credit cards, and supply formal commercial tax invoices for golf clubs, resorts, and agricultural operations.
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    3. Do you supply replacement batteries when the original cell degrades?
                  </strong>
                  Yes. Our Australian parts depot stocks drop-in 24V, 36V, and 48V lithium iron phosphate (LiFePO4) battery packs featuring smart BMS protection and 3-year performance guarantees.
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    4. Are speed limiters standard on all youth and kids buggies?
                  </strong>
                  Yes. Every youth model features an adjustable mechanical throttle stop screw and a wireless remote engine kill fob that parents can trigger from up to 80 meters away.
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="block text-slate-900 mb-1">
                    5. What happens if I receive a damaged crate during transit?
                  </strong>
                  All shipments are fully insured against transit damage. Simply note any external crate tearing on the carrier consignment note and notify our support desk on 0420 128 746 for an immediate resolution.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
