import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, CONTACT, SHOP } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Buggies For Sale Australia',
  description:
    'Terms and Conditions for purchasing buggies, golf carts, and accessories online from Buggies For Sale Australia. ABN: 53 635 284 267.',
  alternates: {
    canonical: `https://${SITE.domain}/terms/`,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-[#F4F1EA] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="text-xs text-stone-500 font-mono" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A] font-bold">Terms & Conditions</span>
        </nav>

        <div className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <span className="text-xs font-mono font-bold text-[#E65F2B] uppercase tracking-wider">
            Commercial Terms
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">
            Terms & Conditions of Sale
          </h1>
          <p className="text-xs text-stone-500 font-mono">
            Buggies For Sale Australia Pty Ltd • ABN: {CONTACT.abn}
          </p>

          <h2 className="text-lg font-bold text-[#1A1A1A] uppercase pt-4 border-t border-[#E2DCD5]">
            1. Minimum Order & Ordering Thresholds
          </h2>
          <p>
            To guarantee specialized pallet crating, pre-delivery inspections, and wholesale freight rates, our online store enforces a minimum order value of ${SHOP.minOrder} AUD. Orders equal to or exceeding ${SHOP.freeShippingThreshold} AUD qualify for subsidized or free depot freight across eligible metropolitan zones.
          </p>

          <h2 className="text-lg font-bold text-[#1A1A1A] uppercase pt-4 border-t border-[#E2DCD5]">
            2. Australian Consumer Law & Vehicle Safety
          </h2>
          <p>
            All off-road buggies, go-karts, and UTVs are designed for private property, station, or off-road closed-course use unless conditional council registration is granted. Operators are responsible for wearing appropriate safety gear including certified helmets, goggles, and 4-point harness restraint belts.
          </p>

          <h2 className="text-lg font-bold text-[#1A1A1A] uppercase pt-4 border-t border-[#E2DCD5]">
            3. Pricing, GST & Payment Rails
          </h2>
          <p>
            All prices displayed on buggiesforsale.com.au are in Australian Dollars (AUD) and inclusive of the 10% Australian Goods and Services Tax (GST). Official Australian tax invoices are issued upon payment settlement. Payment is accepted via EFT Direct Bank Transfer, PayID, major credit cards, or supported cryptocurrency.
          </p>

          <h2 className="text-lg font-bold text-[#1A1A1A] uppercase pt-4 border-t border-[#E2DCD5]">
            4. Governing Jurisdiction
          </h2>
          <p>
            These terms are governed by the laws of New South Wales, Australia, and any disputes shall be resolved in Australian courts.
          </p>
        </div>
      </div>
    </div>
  );
}
