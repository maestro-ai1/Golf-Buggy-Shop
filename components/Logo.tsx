// Brand mark: golf buggy with flag. The same artwork is exported as the site icon (app/icon.svg).
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Buggies For Sale logo" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="15" fill="#0F3D2E" />
      <path d="M0 52 L64 44 V64 H0Z" fill="#14573F" />
      <path d="M52 7v19" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M52 7l9 4.5L52 16z" fill="#F07A1F" />
      <rect x="11" y="15" width="34" height="5" rx="2.5" fill="#fff" />
      <path d="M16 20v13M42 20v13" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M8 36c0-3.2 2.2-5.6 5.4-5.6H43c3.6 0 6.6 1.9 8.4 5.1l1.8 3.6c.9 1.7-.3 3.9-2.3 3.9H11c-1.7 0-3-1.4-3-3z" fill="#fff" />
      <rect x="12" y="35" width="38" height="3" rx="1.5" fill="#F07A1F" />
      <circle cx="21" cy="46" r="6.6" fill="#fff" />
      <circle cx="21" cy="46" r="2.8" fill="#0F3D2E" />
      <circle cx="46" cy="46" r="6.6" fill="#fff" />
      <circle cx="46" cy="46" r="2.8" fill="#0F3D2E" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark size={42} />
      <span className="leading-none">
        <span className={`block font-display text-[19px] font-extrabold tracking-tight ${light ? 'text-white' : 'text-fw-900'}`}>Buggies For Sale</span>
        <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] ${light ? 'text-fw-200' : 'text-fw-600'}`}>Australia</span>
      </span>
    </span>
  );
}
