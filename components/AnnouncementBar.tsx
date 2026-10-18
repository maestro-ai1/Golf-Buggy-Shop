import { BadgePercent, Truck, ShieldCheck } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-fw-950 text-[12.5px] font-semibold text-white">
      <div className="container-x flex h-9 items-center justify-center gap-6 overflow-hidden whitespace-nowrap">
        <span className="flex items-center gap-2"><Truck size={14} className="text-accent" /> Free delivery over $1,000</span>
        <span className="hidden items-center gap-2 sm:flex"><BadgePercent size={14} className="text-accent" /> Prices set 2% below Australian retailers</span>
        <span className="hidden items-center gap-2 md:flex"><ShieldCheck size={14} className="text-accent" /> Manufacturer warranty on every model</span>
        <a href="tel:+61420128746" className="hidden font-bold text-fw-200 hover:text-white lg:block">Call 0420 128 746</a>
      </div>
    </div>
  );
}
