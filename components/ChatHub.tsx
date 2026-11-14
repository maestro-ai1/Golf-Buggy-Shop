'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { CHAT } from '@/config/site';

const BASE = `https://wa.me/${CHAT.number}?text=`;
const GENERIC = "Hi Buggies For Sale, I'd like help choosing a buggy. ";

// One WhatsApp button, one number. Customers message from their own WhatsApp, so we see their number.
// On a product page the pre-typed message names the product and links it. Link only: no third-party scripts.
export default function ChatHub() {
  const path = usePathname();
  const [href, setHref] = useState(BASE + encodeURIComponent(GENERIC));

  useEffect(() => {
    if (path.startsWith('/products/')) {
      const name = document.title.split('|')[0].trim();
      setHref(BASE + encodeURIComponent(`Hi Buggies For Sale, I'm interested in the ${name}: ${window.location.origin}${path} `));
    } else {
      setHref(BASE + encodeURIComponent(GENERIC));
    }
  }, [path]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${CHAT.display}`}
      className="fixed bottom-4 right-4 z-30 flex h-14 items-center gap-2.5 rounded-full bg-[#0F7A40] px-4 text-sm font-bold text-white shadow-[0_10px_28px_rgba(15,122,64,.45)] transition hover:scale-105 sm:px-5"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp {CHAT.display}</span>
    </a>
  );
}
