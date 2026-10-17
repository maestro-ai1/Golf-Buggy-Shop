import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, CONTACT } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Buggies For Sale Australia',
  description:
    'Privacy Policy for Buggies For Sale Australia. How we handle customer contact details, order information, and online data in compliance with the Privacy Act 1988.',
  alternates: {
    canonical: `https://${SITE.domain}/privacy/`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <nav className="text-xs text-slate-500 font-mono" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0B2545] font-bold">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
            Legal Compliance
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: 17 October 2026 • Buggies For Sale Australia (ABN: {CONTACT.abn})
          </p>

          <h2 className="text-base font-bold text-[#0B2545] uppercase pt-4 border-t border-slate-100">
            1. Collection of Personal Information
          </h2>
          <p>
            We collect personal information such as your name, billing and physical delivery address, email, and contact telephone number solely for the purposes of processing orders, arranging tailgate freight delivery, issuing tax invoices, and administering warranty coverage under the Australian Privacy Act 1988 (Cth).
          </p>

          <h2 className="text-base font-bold text-[#0B2545] uppercase pt-4 border-t border-slate-100">
            2. Payment Information Security
          </h2>
          <p>
            We do not store complete credit card details on our local servers. Direct bank transfers (EFT) and PayID are processed directly through your financial institution. Online transactions are encrypted via 256-bit SSL protocols.
          </p>

          <h2 className="text-base font-bold text-[#0B2545] uppercase pt-4 border-t border-slate-100">
            3. Third-Party Freight Sharing
          </h2>
          <p>
            Your delivery address and mobile contact number are shared strictly with our contracted heavy carrier transport logistics partners (e.g. tailgate freight operators) to facilitate scheduled offloading at your property.
          </p>

          <h2 className="text-base font-bold text-[#0B2545] uppercase pt-4 border-t border-slate-100">
            4. Contacting Our Privacy Officer
          </h2>
          <p>
            For questions regarding personal information access, correction, or deletion, please contact <strong>{CONTACT.email}</strong> or write to our Sydney logistics office.
          </p>
        </div>
      </div>
    </div>
  );
}
