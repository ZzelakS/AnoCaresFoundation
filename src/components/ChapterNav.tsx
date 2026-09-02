'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export type Chapter = { id: string; num: string; title: string }

export default function ChapterNav({
  chapters,
  backHref = '/rucker-africa',
  backLabel = 'Rucker Park Africa',
}: {
  chapters: Chapter[]
  backHref?: string
  backLabel?: string
}) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? '')
  const [progress, setProgress] = useState(0)
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1)
      setProgress(Math.min(Math.max(scrolled, 0), 1) * 100)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )
    chapters.forEach(c => {
      const el = document.getElementById(c.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [chapters])

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : ''
  }, [sheetOpen])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setSheetOpen(false)
  }

  const activeIndex = chapters.findIndex(c => c.id === activeId)

  return (
    <>
      <div className="reading-progress" aria-hidden="true">
        <div className="reading-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <nav className="chapter-rail" aria-label="Chapters">
        <Link href={backHref} className="chapter-rail-back">← {backLabel}</Link>
        <ol className="chapter-rail-list">
          {chapters.map(c => (
            <li key={c.id}>
              <button
                onClick={() => go(c.id)}
                className={`chapter-rail-item ${activeId === c.id ? 'active' : ''}`}
              >
                <span className="chapter-rail-num">{c.num}</span>
                <span className="chapter-rail-title">{c.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <button className="chapter-fab" onClick={() => setSheetOpen(true)}>
        <span className="chapter-fab-num">
          {activeIndex >= 0 ? chapters[activeIndex].num : '01'} / {chapters.length}
        </span>
        <span className="chapter-fab-label">Chapters</span>
      </button>

      <div className={`chapter-sheet ${sheetOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="chapter-sheet-head">
          <span>Chapters</span>
          <button onClick={() => setSheetOpen(false)} aria-label="Close chapters">✕</button>
        </div>
        <ol className="chapter-sheet-list">
          {chapters.map(c => (
            <li key={c.id}>
              <button
                onClick={() => go(c.id)}
                className={`chapter-sheet-item ${activeId === c.id ? 'active' : ''}`}
              >
                <span className="chapter-rail-num">{c.num}</span>
                <span>{c.title}</span>
              </button>
            </li>
          ))}
        </ol>
        <Link href={backHref} className="chapter-sheet-back" onClick={() => setSheetOpen(false)}>
          ← {backLabel}
        </Link>
      </div>
      {sheetOpen && <div className="chapter-sheet-scrim" onClick={() => setSheetOpen(false)} />}
    </>
  )
}
