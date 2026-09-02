'use client'
import { useEffect, useRef } from 'react'

export default function ContactContent() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const inquiryTypes = [
    'Media & Press', 'Partnership Inquiry', 'Donation & Giving',
    'Speaking Engagement', 'Program Participation', 'General Inquiry',
  ]

  return (
    <div ref={ref}>
      {/* Hero */}
      <section style={{ background: '#0C0C0C', paddingTop: '9rem', paddingBottom: '5rem', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label">Get In Touch</p>
          <h1 className="font-display" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Start A Conversation
          </h1>
          <p style={{ color: 'var(--text-faint)', fontSize: '1rem', lineHeight: 1.9, maxWidth: '500px', margin: '0 auto' }}>
            Whether you are a partner, donor, media professional, or community leader — we welcome
            every conversation that moves the mission forward.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: 'var(--surface)', padding: 'clamp(4rem, 8vw, 7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <p className="section-label">Send A Message</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="First name"
                  style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', fontFamily: 'var(--font-inter)', transition: 'border-color 0.3s' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', fontFamily: 'var(--font-inter)', transition: 'border-color 0.3s' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', fontFamily: 'var(--font-inter)', transition: 'border-color 0.3s' }}
                onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <input
                type="text"
                placeholder="Organization / Institution (optional)"
                style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', fontFamily: 'var(--font-inter)', transition: 'border-color 0.3s' }}
                onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <select
                style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', fontFamily: 'var(--font-inter)', color: 'var(--text-faint)', background: 'var(--surface)', appearance: 'none', cursor: 'pointer' }}
              >
                <option value="">Type of inquiry</option>
                {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <textarea
                placeholder="Your message"
                rows={6}
                style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', resize: 'vertical', fontFamily: 'var(--font-inter)', transition: 'border-color 0.3s' }}
                onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ border: 'none', cursor: 'pointer', fontSize: '0.75rem', alignSelf: 'flex-start' }}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2">
            <div className="reveal" style={{ background: '#0C0C0C', padding: '3rem 2.5rem', marginBottom: '1px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '48px', height: '2px', background: 'var(--gold)' }} />
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                Foundation Headquarters
              </p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: 1.9 }}>
                Anosike Cares Foundation<br />
                Global Human Development Organization<br />
                Nigeria · United States
              </p>
            </div>

            <div className="reveal reveal-delay-1" style={{ background: 'var(--surface-alt)', padding: '2.5rem', marginBottom: '1px' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                Media & Press
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                For media inquiries, interview requests, speaking engagements, or press materials,
                use the contact form and select "Media & Press" as your inquiry type.
              </p>
            </div>

            <div className="reveal reveal-delay-2" style={{ background: 'var(--surface-alt)', padding: '2.5rem' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                Partnerships
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                Governments, corporations, universities, and foundations interested in partnership
                are encouraged to reach out directly. We respond to all serious inquiries.
              </p>
            </div>

            {/* Social */}
            <div className="reveal reveal-delay-3" style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#aaa', marginBottom: '1rem' }}>
                Follow The Foundation
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map(s => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-faint)',
                      textDecoration: 'none',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid var(--border)',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = '#888'; }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
