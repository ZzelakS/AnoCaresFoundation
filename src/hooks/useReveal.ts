'use client'
import { useEffect, useRef } from 'react'

export function useReveal() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.reveal')
    if (!els || els.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return containerRef
}
