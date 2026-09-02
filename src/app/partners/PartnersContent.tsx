'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { images, bg } from '@/config/images'

/* ── PARTNER CATEGORIES ──
   HOW TO ADD REAL LOGOS:
   1. Put logo files in  /public/images/partners/
      (PNG with transparent background works best on the dark section —
      ask partners for their white/reversed version if available)
   2. Add entries to the `logos` array of the right category:
        logos: [
          { src: '/images/partners/sacred-heart.png', name: 'Sacred Heart University' },
        ]
   3. Categories with an empty logos array keep showing placeholder boxes.
      Mixed states are fine — fill categories as partners come on board. */
const categories = [
  {
    label:'Government and Public-Sector Partnerships',
    desc:'Programs supporting national and local priorities in youth development, education, sport, cultural exchange, economic opportunity, and community engagement.',
    slots:6,
    logos: [] as { src: string; name: string }[],
  },
  {
    label:'Sports Organizations and Federations',
    desc:'Basketball camps, tournaments, athlete development, coaching education, international exposure, and youth pathways.',
    slots:6,
    logos: [] as { src: string; name: string }[],
  },
  {
    label:'Universities, Schools and Education Partners',
    desc:'Student development, mentorship, scholarships, cultural exchange, university access, leadership education, and international programming.',
    slots:6,
    logos: [] as { src: string; name: string }[],
  },
  {
    label:'Corporate and Foundation Partnerships',
    desc:'Program sponsorship, employee engagement, community investment, equipment support, scholarships, media partnerships, and long-term social-impact initiatives.',
    slots:6,
    logos: [] as { src: string; name: string }[],
  },
]

const benefits = [
  { title:'Global Visibility',  desc:'Association with a credible, internationally recognized organization operating across four continents.' },
  { title:'Impact Reporting',   desc:'Regular, transparent reporting on outcomes and the communities your partnership directly benefits.' },
  { title:'Event Access',       desc:'Priority access to the Global Opportunity Forum and all ANO CARES convening events.' },
  { title:'Brand Association',  desc:'Align your brand with leadership, youth development, and global human progress.' },
  { title:'Network Access',     desc:'Connection to a growing international network of governments, institutions, and leaders.' },
  { title:'Co-creation',        desc:'Opportunity to co-develop programs, initiatives, and solutions tailored to shared priorities.' },
]

export default function PartnersContent() {
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
      <section className="relative flex items-end" style={{ height:'70vh', minHeight:'450px', backgroundColor:'#000' }}>
        <div
          className="partners-hero-img"
          style={{
            backgroundImage: `url('${images.leadership.meetings}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            inset: 0,
            opacity: 0.45,
          }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p className="section-label">Partner With Purpose</p>
          <h1 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:700, color:'#fff', lineHeight:1.1, maxWidth:'700px' }}>
            Build the Next Opportunity With Us
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label reveal">Why Partner</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', lineHeight:1.25, marginBottom:'1.5rem' }}>
              Meaningful Impact Is Achieved Through Collaboration
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom:'1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'1.25rem' }}>
              The Anosike Cares Foundation works with governments, schools, universities, sports
              organizations, companies, foundations, community leaders, and international partners to
              create programs that expand opportunity for young people.
            </p>
            <p className="reveal reveal-delay-4" style={{ color:'var(--text-body)', lineHeight:1.9 }}>
              Partnership opportunities include youth development, basketball camps, educational
              pathways, cultural exchange, scholarships, international tournaments, community outreach,
              leadership programs, food security, and economic empowerment.
            </p>
          </div>
          <div className="reveal" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', backgroundColor:'var(--border)' }}>
            {benefits.map((b, i) => (
              <div key={b.title} style={{ backgroundColor: i%2===0 ? '#fff' : '#F8F7F4', padding:'2rem 1.75rem' }}>
                <div style={{ width:'24px', height:'2px', backgroundColor:'var(--gold)', marginBottom:'1rem' }} />
                <h3 style={{ fontSize:'0.85rem', fontWeight:600, color:'var(--heading)', marginBottom:'0.5rem' }}>{b.title}</h3>
                <p style={{ fontSize:'0.8rem', color:'var(--text-faint)', lineHeight:1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'#0C0C0C', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal">Our Partners</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'#fff', marginBottom:'3rem' }}>Partner Categories</h2>
          {categories.map((cat) => (
            <div key={cat.label} className="reveal" style={{ marginBottom:'3rem' }}>
              <p style={{ fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'0.5rem' }}>{cat.label}</p>
              <p style={{ fontSize:'0.85rem', color:'#888', lineHeight:1.7, marginBottom:'1rem', maxWidth:'700px' }}>{cat.desc}</p>
              <div className="partner-grid" style={{ backgroundColor:'#222' }}>
                {cat.logos.length > 0
                  ? cat.logos.map((logo) => (
                      <div
                        key={logo.name}
                        className="partner-logo"
                        title={logo.name}
                        style={{ backgroundColor:'#0C0C0C', border:'none', transition:'background-color 0.3s', cursor:'default' }}
                        onMouseEnter={e=>{
                          e.currentTarget.style.backgroundColor='#111'
                          const img = e.currentTarget.querySelector('img')
                          if (img) img.style.filter = 'grayscale(0%) opacity(1)'
                        }}
                        onMouseLeave={e=>{
                          e.currentTarget.style.backgroundColor='#0C0C0C'
                          const img = e.currentTarget.querySelector('img')
                          if (img) img.style.filter = 'grayscale(100%) opacity(0.7)'
                        }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          loading="lazy"
                          style={{
                            maxWidth: '75%',
                            maxHeight: '55%',
                            objectFit: 'contain',
                            filter: 'grayscale(100%) opacity(0.7)',
                            transition: 'filter 0.3s',
                          }}
                        />
                      </div>
                    ))
                  : Array.from({ length:cat.slots }).map((_, i) => (
                      <div
                        key={i}
                        className="partner-logo"
                        style={{ backgroundColor:'#0C0C0C', border:'none', transition:'background-color 0.3s', cursor:'default' }}
                        onMouseEnter={e=>(e.currentTarget.style.backgroundColor='#111')}
                        onMouseLeave={e=>(e.currentTarget.style.backgroundColor='#0C0C0C')}
                      >
                        <span style={{ fontSize:'0.55rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-body)' }}>Partner</span>
                      </div>
                    ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor:'var(--warm-white)', padding:'clamp(4rem,8vw,7rem) 1.5rem', textAlign:'center' }}>
        <div className="max-w-2xl mx-auto">
          <p className="section-label reveal">Ready To Partner?</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', marginBottom:'1.5rem' }}>
            Let's Build Something Extraordinary Together
          </h2>
          <p className="reveal reveal-delay-2" style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'2.5rem' }}>
            We welcome inquiries from governments, corporations, foundations, universities, and international organizations committed to expanding opportunity and developing human potential.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Become A Partner</Link>
            <Link href="/donate" className="btn-outline-dark">Support A Program</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
