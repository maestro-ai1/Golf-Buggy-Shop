import { MessageCircle } from 'lucide-react';
import { CHAT } from '@/config/site';

// One WhatsApp button, one number. Customers message from their own WhatsApp, so we see their number.
// Link only: zero third-party scripts, so no CSP or performance cost.
export default function ChatHub() {
  return (
    <a
      href={CHAT.url}
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
