import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, CONTACT } from '@/config/site';

export const metadata: Metadata = {
  title: 'Cookie Policy | Buggies For Sale Australia',
  description:
    'Cookie Policy explaining how Buggies For Sale uses essential shopping cart cookies and performance session storage.',
  alternates: {
    canonical: `https://${SITE.domain}/cookies/`,
  },
};

export default function CookiesPage() {
  return (
    <div className="bg-[#F4F1EA] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="text-xs text-stone-500 font-mono" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A] font-bold">Cookie Policy</span>
        </nav>

        <div className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-6 sm:p-10 shadow-sm space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <span className="text-xs font-mono font-bold text-[#E65F2B] uppercase tracking-wider">
            Web Technology
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">
            Cookie & Local Storage Policy
          </h1>
          <p className="text-xs text-stone-500 font-mono">
            Buggies For Sale Australia • ABN: {CONTACT.abn}
          </p>

          <h2 className="text-lg font-bold text-[#1A1A1A] uppercase pt-4 border-t border-[#E2DCD5]">
            1. Essential Functional Cookies
          </h2>
          <p>
            We use client-side local storage and essential session cookies strictly to preserve your cart items ({SITE.cartKey}), calculate live freight estimates, and remember your preferred payment options across browsing sessions.
          </p>

          <h2 className="text-lg font-bold text-[#1A1A1A] uppercase pt-4 border-t border-[#E2DCD5]">
            2. Managing Your Browser Storage
          </h2>
          <p>
            You can clear cookies and local storage through your browser settings at any time. Disabling storage will reset your active buggy shopping cart upon page reload.
          </p>
        </div>
      </div>
    </div>
  );
}
