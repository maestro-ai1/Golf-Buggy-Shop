'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail, MessageSquareText, X } from 'lucide-react';
import { CHAT } from '@/config/site';

const ICON: Record<string, React.ReactNode> = { whatsapp: <MessageCircle size={20} />, phone: <Phone size={20} />, email: <Mail size={20} />, sms: <MessageSquareText size={20} /> };
const COLOR: Record<string, string> = { whatsapp: 'bg-[#25D366]', phone: 'bg-fw-800', email: 'bg-accent', sms: 'bg-fw-600' };

// Link channels only: zero third-party scripts, so no CSP or performance cost.
export default function ChatHub() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-3">
      {open && (
        <ul className="card w-[250px] overflow-hidden p-2" aria-label="Contact options">
          {CHAT.channels.map((c) => (
            <li key={c.type}>
              <a href={c.url} {...(c.type === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="flex items-center gap-3 rounded-xl p-2.5 text-sm font-semibold text-ink hover:bg-fw-50">
                <span className={`grid h-9 w-9 place-items-center rounded-full text-white ${COLOR[c.type]}`}>{ICON[c.type]}</span>{c.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close contact options' : 'Open contact options'} className="grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-[0_10px_28px_rgba(240,122,31,.45)] transition hover:scale-105">
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
