import React, { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE, CONTACT } from '@/config/site';
import { CheckCircle2, MessageCircle, Phone, Mail, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ThankYouOrderContent } from './ThankYouOrderContent';

export const metadata: Metadata = {
  title: 'Order Placed | Buggies For Sale Australia',
  description: 'Your buggy order has been placed successfully.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouOrderPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 border-b border-slate-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-12 text-center text-xs text-slate-500">Loading order confirmation...</div>}>
          <ThankYouOrderContent />
        </Suspense>
      </div>
    </div>
  );
}
