import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS, SITE } from '@/config/site';
import { ArrowRight, BookOpen, Clock, Calendar, Tag } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Buggy Buying Guides & Tech Blog | Buggies For Sale Australia',
  description:
    'Expert Australian guides on off-road buggies for sale, 4x4 UTV towing, remote control golf caddies, lithium battery conversions, and kids buggy safety.',
  alternates: {
    canonical: `https://${SITE.domain}/blog/`,
  },
};

export default function BlogIndexPage() {
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
        name: 'Blog & Buying Guides',
        item: `https://${SITE.domain}/blog/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbsSchema} />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-500 font-mono mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">Blog & Buying Guides</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center max-w-4xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Educational Guides & Technical Advice
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] uppercase tracking-tight">
              Buggy Buying Guides & Tech Blog
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Researched and written by Australian buggy mechanics and vehicle specialists to help you choose, maintain, and upgrade your machine.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#D32F2F] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
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

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-base font-bold text-[#0B2545] group-hover:text-[#D32F2F] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-full py-2 px-4 rounded bg-slate-100 hover:bg-[#D32F2F] hover:text-white text-slate-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
