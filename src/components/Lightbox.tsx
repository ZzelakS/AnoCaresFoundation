'use client'
import { useEffect, useState } from 'react'

export type GalleryItem = { src: string; alt: string; caption?: string }

export default function Lightbox({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen(i => (i === null ? null : (i + 1) % items.length))
      if (e.key === 'ArrowLeft') setOpen(i => (i === null ? null : (i - 1 + items.length) % items.length))
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, items.length])

  return (
    <>
      <div className="masonry-gallery">
        {items.map((it, i) => (
          <button key={i} className="masonry-item lightbox-trigger" onClick={() => setOpen(i)} aria-label={`Open ${it.alt}`}>
            <img src={it.src} alt={it.alt} loading="lazy" />
            {it.caption && <div className="masonry-caption"><span>{it.caption}</span></div>}
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close">✕</button>
          <button
            className="lightbox-prev"
            onClick={e => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length) }}
            aria-label="Previous image"
          >‹</button>
          <figure className="lightbox-figure" onClick={e => e.stopPropagation()}>
            <img src={items[open].src} alt={items[open].alt} />
            <figcaption>
              {items[open].caption || items[open].alt}
              <span className="lightbox-count">{open + 1} / {items.length}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-next"
            onClick={e => { e.stopPropagation(); setOpen((open + 1) % items.length) }}
            aria-label="Next image"
          >›</button>
        </div>
      )}
    </>
  )
}
