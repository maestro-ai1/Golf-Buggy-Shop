import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FAQ_ITEMS, SITE, CONTACT } from '@/config/site';
import { HelpCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Buggies For Sale Australia',
  description:
    'Answers to common questions regarding off-road buggies for sale, golf carts, tailgate freight delivery, lithium batteries, warranty, and payment options.',
  alternates: {
    canonical: `https://${SITE.domain}/faq/`,
  },
};

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
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
        name: 'FAQ',
        item: `https://${SITE.domain}/faq/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbsSchema]} />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-mono mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">Frequently Asked Questions</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Answers & Advice
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-[#0B2545] uppercase tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Find transparent answers regarding Australian freight delivery, battery charging, licensing, and payment methods.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <details
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm group"
                open={idx === 0}
              >
                <summary className="font-bold text-sm text-[#0B2545] cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#D32F2F] shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          {/* Help Contact Banner */}
          <div className="bg-[#0B2545] text-white rounded-xl p-8 shadow-sm text-center space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-tight">
              Have a Question Not Listed Here?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Our Australian technical team can verify chassis dimensions, battery amp hours, and freight timing for your regional depot.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${CONTACT.phoneInternational}`}
                className="px-6 py-2.5 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CONTACT.phone}</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-white text-[#0B2545] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded transition-colors shadow"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
