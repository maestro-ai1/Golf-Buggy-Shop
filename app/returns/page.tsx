import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, CONTACT } from '@/config/site';
import { ShieldCheck, RefreshCw, FileText, Phone, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Returns, Refunds & Warranty Policy | Buggies For Sale Australia',
  description:
    'Australian Consumer Law (ACL) compliant warranty and returns policy for buggies, golf carts, and lithium parts. 30-day support and genuine parts replacement guarantee.',
  alternates: {
    canonical: `https://${SITE.domain}/returns/`,
  },
};

export default function ReturnsPage() {
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
        name: 'Returns & Warranty',
        item: `https://${SITE.domain}/returns/`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbsSchema} />

      <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 font-mono mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#0B2545] font-bold">Returns & Warranty</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
              Australian Consumer Law Compliance
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight">
              Returns, Refunds & Warranty Policy
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              All vehicles and parts supplied by Buggies For Sale Australia carry consumer guarantees under the Australian Consumer Law (ACL).
            </p>
          </div>

          {/* Warranty Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#D32F2F]" />
              <h3 className="font-bold text-xs uppercase text-[#0B2545]">
                ACL Statutory Warranty
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our goods come with guarantees that cannot be excluded under Australian Consumer Law for acceptable quality and merchantability.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-sm">
              <RefreshCw className="w-6 h-6 text-[#D32F2F]" />
              <h3 className="font-bold text-xs uppercase text-[#0B2545]">
                Exact Fitment Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If an accessory or replacement part does not fit your stated make and model, return it within 30 days for an exchange or refund.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-2 shadow-sm">
              <FileText className="w-6 h-6 text-[#D32F2F]" />
              <h3 className="font-bold text-xs uppercase text-[#0B2545]">
                Australian Parts Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Warranty replacement components are dispatched directly from our Sydney logistics depot without offshore delays.
              </p>
            </div>
          </div>

          {/* Detailed Policy Text */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm text-xs sm:text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-[#0B2545] uppercase tracking-tight">
              Warranty Claims Process
            </h2>
            <p>
              In the unlikely event that your vehicle experiences a mechanical, electrical, or battery fault, please follow this straightforward procedure:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>
                <strong>Document the issue:</strong> Take clear photographs or a short video demonstrating the fault along with your chassis VIN/serial plate.
              </li>
              <li>
                <strong>Contact Technical Service:</strong> Email <strong>{CONTACT.email}</strong> or call <strong>{CONTACT.phone}</strong> with your order reference.
              </li>
              <li>
                <strong>Rapid Resolution:</strong> We will dispatch genuine replacement parts or arrange authorized mechanic inspection under factory warranty.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
