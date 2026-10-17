'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  CheckCircle2,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Clock,
  Truck,
} from 'lucide-react';
import { SITE, CONTACT } from '@/config/site';

export function ThankYouOrderContent() {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('ref') || 'BFS-9842';
  const total = searchParams.get('total') || '';
  const customerName = searchParams.get('name') || 'Customer';

  const whatsappMessage = encodeURIComponent(
    `Hi ${SITE.name}, I just placed order ${orderRef} on buggiesforsale.com.au. Please confirm freight dispatch schedule.`
  );

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6 text-slate-900 text-center">
      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-300">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-1.5">
        <span className="text-xs font-mono font-bold text-[#D32F2F] uppercase tracking-wider">
          Australia Depot Reservation Confirmed
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] uppercase tracking-tight">
          Order Placed Successfully!
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Thank you {customerName}, your buggy reservation has been lodged with our Sydney logistics desk.
        </p>
      </div>

      {/* Order Reference Pill */}
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 inline-block text-center max-w-xs mx-auto">
        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          Your Official Order Reference:
        </div>
        <div className="text-2xl font-black font-mono text-[#D32F2F] mt-0.5 tracking-wider">
          {orderRef}
        </div>
        {total && (
          <div className="text-xs font-bold text-slate-700 font-mono mt-1">
            Total: {SITE.currencySymbol}{Number(total).toLocaleString()} AUD (inc. GST)
          </div>
        )}
      </div>

      {/* What Happens Next Card */}
      <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 text-left space-y-3 text-xs text-slate-700">
        <h2 className="font-bold text-sm text-[#0B2545] uppercase flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#D32F2F]" />
          What Happens Next?
        </h2>
        <ul className="space-y-2 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#D32F2F] font-mono">1.</span>
            <span>
              <strong>Logistics Allocation:</strong> Our mechanics verify your crated vehicle and reserve your unit at our nearest freight depot.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#D32F2F] font-mono">2.</span>
            <span>
              <strong>Official Invoice & Payment Details:</strong> You will receive an official tax invoice containing payment settlement details for your chosen method via email.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#D32F2F] font-mono">3.</span>
            <span>
              <strong>Hydraulic Tailgate Dispatch:</strong> Upon payment clearance, your consignment tracking number is issued, and the carrier will schedule delivery to your gate.
            </span>
          </li>
        </ul>
      </div>

      {/* Fast Contact Options */}
      <div className="space-y-3 pt-2">
        <a
          href={`https://wa.me/61420128746?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Confirm on WhatsApp (Ref: {orderRef})</span>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <a
            href={`tel:${CONTACT.phoneInternational}`}
            className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded flex items-center justify-center gap-2 font-bold text-slate-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D32F2F]" />
            <span>Call {CONTACT.phone}</span>
          </a>
          <a
            href={`mailto:${CONTACT.email}?subject=Order%20Inquiry%20${orderRef}`}
            className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded flex items-center justify-center gap-2 font-bold text-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4 text-[#D32F2F]" />
            <span>Email Support</span>
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>ABN: {CONTACT.abn}</span>
        </div>
        <Link href="/shop" className="font-bold text-[#0B2545] hover:text-[#D32F2F]">
          Continue Shopping Buggies →
        </Link>
      </div>
    </div>
  );
}
