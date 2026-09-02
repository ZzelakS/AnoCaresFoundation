'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { images, bg } from '@/config/images'

const pathways = [
  { num:'01', title:'Leadership',        desc:'Developing future leaders capable of driving positive change within their communities and institutions.' },
  { num:'02', title:'Education',         desc:'Creating access to scholarships, mentorship, academic opportunities, and lifelong learning.' },
  { num:'03', title:'Cultural Exchange', desc:'Building global citizens who embrace their heritage while learning from diverse cultures and perspectives.' },
  { num:'04', title:'Opportunity',       desc:'Connecting participants with pathways in sport, business, entrepreneurship, education, and professional development.' },
  { num:'05', title:'Community Impact',  desc:'Empowering young people to become contributors and changemakers within their communities.' },
]

/* ── EDITIONS ──
   Add a new entry per activation. Set `href` to null for an
   unannounced chapter and it renders greyscale and unclickable. */
const editions = [
  {
    chapter: 'Chapter One',
    title: 'Lagos 2026',
    location: 'Rowe Park, Lagos, Nigeria — July 30, 2026',
    stats: [
      { n:'565',  l:'Attendees' },
      { n:'150',  l:'Youth Jobs' },
      { n:'100+', l:'Athletes' },
      { n:'₦11M', l:'Direct Value' },
    ],
    excerpt:
      'The inaugural activation brought basketball, music, creators, education, youth employment and local business into a single environment — and distributed approximately ₦11 million in direct value in one day.',
    img: images.ruckerpark.lagos,
    href: '/rucker-africa/lagos-2026',
    cta: 'Explore Lagos 2026',
  },
  {
    chapter: 'Chapter Two',
    title: 'To Be Announced',
    location: null,
    stats: [],
    excerpt:
      'The entry point may change depending on the community. The mission remains the same.',
    img: images.ruckerpark.crowd,
    href: null,
    cta: null,
  },
]

export default function RuckerHub() {
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

  return (
    <div ref={ref}>

      {/* ── 1. HERO ── */}
      <section className="relative flex items-center justify-center" style={{ height:'90vh', minHeight:'500px', backgroundColor:'#000', textAlign:'center' }}>
        <div style={{ ...bg(images.ruckerpark.main), position:'absolute', inset:0, opacity:0.42 }} />
        <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(0,0,0,0.5)' }} />
        <div className="relative z-10 px-6 max-w-4xl">
          <p className="section-label">Flagship Youth Development Platform</p>
          <h1 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(3rem,7vw,6rem)', fontWeight:700, color:'#fff', lineHeight:1.05, marginBottom:'1rem' }}>Rucker Park Africa</h1>
          <p style={{ color:'var(--gold)', fontStyle:'italic', fontSize:'1.25rem', marginBottom:'1.5rem' }}>Sport. Culture. Education. Opportunity.</p>
          <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'1rem', lineHeight:1.8, maxWidth:'600px', margin:'0 auto 2.5rem' }}>
            Connecting the cultural legacy of New York street basketball with youth development and opportunity across Africa.
          </p>
          <Link href="/rucker-africa/lagos-2026" className="btn-primary">Explore Lagos 2026</Link>
        </div>
      </section>

      {/* ── 2. A MOVEMENT, NOT JUST A PROGRAM ── */}
      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label reveal">About The Platform</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', lineHeight:1.25, marginBottom:'1.5rem' }}>A Movement, Not Just A Program</h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom:'1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'1.25rem' }}>
              Rucker Park Africa brings together basketball, youth development, education, culture,
              entertainment, leadership, and international opportunity — the flagship platform of the
              Anosike Cares Foundation.
            </p>
            <p className="reveal reveal-delay-4" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'1.25rem' }}>
              Inspired by the legacy and cultural influence of Rucker Park, the initiative creates a
              platform where young athletes can compete, learn, connect, and gain exposure while
              communities celebrate the power of basketball.
            </p>
            <p className="reveal reveal-delay-5" style={{ color:'var(--text-body)', lineHeight:1.9 }}>
              The program is designed to create pathways between Africa and the global basketball
              community while investing in the next generation of athletes, leaders, creators, and
              professionals.
            </p>
          </div>
          <div className="reveal" style={{ ...bg(images.ruckerpark.dunk), aspectRatio:'4/5', backgroundColor:'#1a1a1a', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, right:0, width:'60px', height:'3px', backgroundColor:'var(--gold)' }} />
            <div style={{ position:'absolute', top:0, right:0, width:'3px', height:'60px', backgroundColor:'var(--gold)' }} />
          </div>
        </div>
      </section>

      {/* ── 3. THE FIVE PATHWAYS ── */}
      <section style={{ backgroundColor:'var(--warm-white)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal">Framework</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', marginBottom:'3rem' }}>The Five Pathways</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'1px', backgroundColor:'var(--border)' }}>
            {pathways.map((p, i) => (
              <div key={p.title} className={`reveal reveal-delay-${i+1} pathway-row`}
                style={{ backgroundColor:'var(--surface)', padding:'2.5rem 3rem', display:'grid', gridTemplateColumns:'80px 1fr 2fr', gap:'2rem', alignItems:'start', transition:'background-color 0.3s', cursor:'default' }}
                onMouseEnter={e=>(e.currentTarget.style.backgroundColor='var(--surface-alt)')}
                onMouseLeave={e=>(e.currentTarget.style.backgroundColor='var(--surface)')}>
                <span className="font-display pathway-num" style={{ fontFamily:'var(--font-playfair)', fontSize:'2rem', fontWeight:700, color:'var(--gold)', opacity:0.5 }}>{p.num}</span>
                <h3 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'1.2rem', fontWeight:700, color:'var(--heading)', paddingTop:'0.4rem' }}>{p.title}</h3>
                <p style={{ color:'var(--text-muted)', lineHeight:1.8, paddingTop:'0.4rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. EDITIONS ── */}
      <section style={{ backgroundColor:'#0C0C0C', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center" style={{ marginBottom:'3.5rem' }}>
            <p className="section-label reveal">Chapters</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'#fff', marginBottom:'1.25rem' }}>
              Where The Platform Has Landed
            </h2>
            <p className="reveal reveal-delay-2" style={{ color:'var(--text-faint)', lineHeight:1.9, maxWidth:'640px', margin:'0 auto' }}>
              Each activation is built with local athletes, coaches, schools, creators, businesses and
              universities, then connected outward through international relationships.
            </p>
          </div>

          <div className="edition-grid">
            {editions.map((ed, i) => {
              const inner = (
                <>
                  <div className="edition-card-media">
                    <div style={{ ...bg(ed.img), position:'absolute', inset:0 }} />
                    <div className="edition-card-scrim" />
                    <p className="edition-card-chapter">{ed.chapter}</p>
                  </div>
                  <div className="edition-card-body">
                    <h3 className="font-display edition-card-title">{ed.title}</h3>
                    {ed.location && <p className="edition-card-location">{ed.location}</p>}
                    {ed.stats.length > 0 && (
                      <div className="edition-card-stats">
                        {ed.stats.map(s => (
                          <div key={s.l}>
                            <span className="font-display edition-stat-n">{s.n}</span>
                            <span className="edition-stat-l">{s.l}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="edition-card-excerpt">{ed.excerpt}</p>
                    {ed.cta && <span className="edition-card-cta">{ed.cta} →</span>}
                  </div>
                </>
              )

              return ed.href ? (
                <Link key={ed.title} href={ed.href} className={`edition-card reveal reveal-delay-${i+1}`}>
                  {inner}
                </Link>
              ) : (
                <div key={ed.title} className={`edition-card is-placeholder reveal reveal-delay-${i+1}`} aria-disabled="true">
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 5. IMPACT VISION + CTAs ── */}
      <section style={{ backgroundColor:'#000', padding:'clamp(4rem,8vw,7rem) 1.5rem', textAlign:'center' }}>
        <div className="max-w-3xl mx-auto">
          <p className="section-label reveal">Impact Vision</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'#fff', lineHeight:1.25, marginBottom:'1.5rem' }}>
            To build Africa's leading youth opportunity platform
          </h2>
          <p className="reveal reveal-delay-2" style={{ color:'var(--text-faint)', lineHeight:1.9, marginBottom:'2.5rem' }}>
            Connecting the continent's next generation with education, leadership, entrepreneurship,
            cultural exchange, and global engagement opportunities.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/donate" className="btn-primary">Support Rucker Park Africa</Link>
            <Link href="/partners" className="btn-outline">Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
