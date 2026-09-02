'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '/about', label: 'About EJ' },
  { href: '/foundation', label: 'Foundation' },
  { href: '/impact', label: 'Impact' },
  { href: '/news',           label: 'News' },
  { href: '/rucker-africa', label: 'Rucker Park Africa' },
  { href: '/forum', label: 'Forum' },
  { href: '/partners', label: 'Partners' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMounted(true)

    const updateTheme = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }

    updateTheme()

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const logoSrc = !mounted
    ? '/logo-light.png'
    : !scrolled
      ? '/logo-light.png'
      : darkMode
        ? '/logo-light.png'
        : '/logo-dark.png'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? 'var(--nav-shadow)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-26">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            style={{ textDecoration: 'none' }}
          >
            <Image
              src={logoSrc}
              alt="ANO Cares Foundation"
              width={280}
              height={90}
              priority
              className="h-16 lg:h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{
                  color: scrolled
                    ? 'var(--ink)'
                    : 'rgba(255,255,255,0.85)',
                }}
              >
                {l.label}
              </Link>
            ))}

            <ThemeToggle
              color={scrolled ? 'var(--heading)' : '#fff'}
            />

            <Link
              href="/donate"
              className="btn-primary ml-4"
              style={{
                padding: '0.65rem 1.6rem',
                fontSize: '0.65rem',
              }}
            >
              Support
            </Link>
          </div>

          {/* Mobile: Theme toggle + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle
              color={scrolled ? 'var(--heading)' : '#fff'}
            />

            <button
              className="flex flex-col justify-center gap-[5px] w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span
                className="block h-px w-8 transition-all duration-300"
                style={{
                  background: scrolled
                    ? 'var(--heading)'
                    : '#fff',
                  transform: menuOpen
                    ? 'translateY(6px) rotate(45deg)'
                    : 'none',
                }}
              />

              <span
                className="block h-px w-8 transition-all duration-300"
                style={{
                  background: scrolled
                    ? 'var(--heading)'
                    : '#fff',
                  opacity: menuOpen ? 0 : 1,
                }}
              />

              <span
                className="block h-px w-8 transition-all duration-300"
                style={{
                  background: scrolled
                    ? 'var(--heading)'
                    : '#fff',
                  transform: menuOpen
                    ? 'translateY(-6px) rotate(-45deg)'
                    : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-6"
          style={{
            color: '#fff',
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.8rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            {l.label}
          </Link>
        ))}

        <Link
          href="/donate"
          onClick={() => setMenuOpen(false)}
          className="btn-primary mt-4"
        >
          Support
        </Link>
      </div>
    </>
  )
}