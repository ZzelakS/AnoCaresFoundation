'use client'

/* ── VIDEO EMBED ── direct iframe, renders immediately ── */
export function VideoEmbed({
  provider = 'vimeo',
  videoId,
  title,
}: {
  provider?: 'vimeo' | 'youtube'
  videoId: string
  title: string
}) {
  const src =
    provider === 'youtube'
      ? `https://www.youtube.com/embed/${videoId}`
      : `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`

  return (
    <div className="video-embed">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

/* ── FULL-BLEED IMAGE BREAK ── */
export function MediaBreak({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="media-break">
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

/* ── IMAGE CAROUSEL ── autoplay cross-fade with manual dots ── */
export function ImageCarousel({
  imgs, alt, slide, onSelect, onPause, onResume, ratio = '4/3',
}: {
  imgs: string[]
  alt: string
  slide: number
  onSelect: (i: number) => void
  onPause: () => void
  onResume: () => void
  ratio?: string
}) {
  return (
    <div
      style={{ aspectRatio: ratio, backgroundColor: '#1a1a1a', position: 'relative', overflow: 'hidden' }}
      onMouseEnter={onPause}
      onMouseLeave={onResume}
    >
      {imgs.map((src, i) => (
        <div
          key={i}
          className={`honour-slide ${slide === i ? 'active' : ''}`}
          style={{ backgroundImage: `url('${src}')` }}
          role="img"
          aria-label={slide === i ? alt : undefined}
        />
      ))}
      <div className="corner-accent" style={{ zIndex: 2 }} />
      {imgs.length > 1 && (
        <div className="honour-dots">
          {imgs.map((_, i) => (
            <button
              key={i}
              className={`honour-dot ${slide === i ? 'active' : ''}`}
              aria-label={`Show image ${i + 1} of ${imgs.length}`}
              onClick={() => onSelect(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
