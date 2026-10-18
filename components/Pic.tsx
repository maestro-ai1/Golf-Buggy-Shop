// Responsive picture: AVIF + WebP with 600/1200 widths. `base` is a path without extension, e.g. /products/slug/1
interface PicProps { base: string; alt: string; sizes?: string; priority?: boolean; className?: string; width?: number; height?: number; ratio?: 'square' | 'wide'; card?: boolean }

export default function Pic({ base, alt, sizes = '(max-width: 640px) 50vw, 300px', priority, className, width = 600, height = 600, card = true }: PicProps) {
  const small = `${base}-600`;
  return (
    <picture>
      <source type="image/avif" srcSet={`${small}.avif 600w, ${base}.avif 1200w`} sizes={sizes} />
      <source type="image/webp" srcSet={`${small}.webp 600w, ${base}.webp 1200w`} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card ? `${small}.webp` : `${base}.webp`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        className={className}
      />
    </picture>
  );
}
