import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | Buggies For Sale Australia',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="bg-[#F4F1EA] min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="bg-white rounded-2xl border-2 border-[#1A1A1A] p-8 sm:p-12 max-w-lg w-full text-center space-y-4 shadow-xl">
        <div className="text-5xl font-black font-mono text-[#E65F2B]">404</div>
        <h1 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          The buggy model, accessory, or page you were looking for may have moved or been updated in our catalog.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-6 py-3 bg-[#E65F2B] hover:bg-[#D44E1C] text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Browse All Buggies</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#F4F1EA] hover:bg-[#EDE8DE] text-[#1A1A1A] font-bold text-xs uppercase tracking-wider rounded-lg border border-[#1A1A1A]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
