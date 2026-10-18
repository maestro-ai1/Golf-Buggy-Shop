'use client';

import { useState } from 'react';
import Pic from '@/components/Pic';

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="product-frame border border-line shadow-[var(--shadow-card)]">
        <Pic base={images[i]} alt={`${alt} - image ${i + 1}`} priority={i === 0} sizes="(max-width: 1024px) 100vw, 600px" width={1200} height={1200} card={false} />
      </div>
      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-3" aria-label="Product images">
          {images.map((b, k) => (
            <li key={b}>
              <button onClick={() => setI(k)} aria-label={`Show image ${k + 1}`} aria-current={k === i} className={`product-frame w-full border-2 transition ${k === i ? 'border-accent' : 'border-line hover:border-fw-500'}`}>
                <Pic base={b} alt="" width={150} height={150} sizes="150px" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
