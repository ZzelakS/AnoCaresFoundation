'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { images, bg } from '@/config/images'

const pillars = [
  { title:'Vision',          text:'A world where every young person, regardless of geography, background, or circumstance, has access to the opportunities, relationships, and resources necessary to realize their full potential.' },
  { title:'Mission',         text:'To empower future leaders, strengthen communities, and expand opportunity through leadership development, education, food security, entrepreneurship, cultural exchange, sports, and strategic partnerships.' },
  { title:'Theory of Change',text:'Lasting progress begins with people. We focus on building systems, partnerships, and pathways that create sustainable opportunities through collaboration across public, private, nonprofit, educational, and international sectors.' },
]

export default function FoundationContent() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <section className="relative flex items-end" style={{ height:'75vh', minHeight:'480px', backgroundColor:'#000' }}>
        <div style={{ ...bg(images.lifestyle.tour), position:'absolute', inset:0, opacity:0.55 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p className="section-label">Global Human Development</p>
          <h1 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:700, color:'#fff', lineHeight:1.1, maxWidth:'700px' }}>
            Anosike Cares Foundation
          </h1>
          <p style={{ color:'rgba(192,155,75,0.9)', marginTop:'0.75rem', fontStyle:'italic', fontSize:'1.05rem' }}>
            Educated to Lead. Built to Win. Committed to Serve.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <p className="section-label reveal">Who We Are</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', lineHeight:1.25, marginBottom:'1.5rem' }}>
              Creating Pathways Where None Previously Existed
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom:'1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'1.25rem' }}>
              Anosike Cares Foundation is a global human development organization dedicated to expanding
              opportunity, strengthening communities, and developing future leaders through education,
              leadership development, food security, entrepreneurship, cultural exchange, sports, and
              strategic partnerships.
            </p>
            <p className="reveal reveal-delay-4" style={{ color:'var(--text-body)', lineHeight:1.9 }}>
              Our work spans continents, cultures, and sectors because meaningful impact is achieved
              through collaboration, innovation, and opportunity.
            </p>
          </div>
          <div className="lg:col-span-2 reveal" style={{ backgroundColor:'#0C0C0C', padding:'3rem 2.5rem', position:'relative' }}>
            <div style={{ position:'absolute', top:0, left:0, width:'48px', height:'2px', backgroundColor:'var(--gold)' }} />
            <p className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'1.5rem', fontStyle:'italic', color:'var(--gold)', marginBottom:'1rem', lineHeight:1.4 }}>
              "Talent Is Universal. Opportunity Is Not."
            </p>
            <p style={{ fontSize:'0.75rem', color:'var(--text-muted)', lineHeight:1.8 }}>
              This belief is at the heart of everything we do — a recognition that geography,
              circumstance, and access should never determine potential.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'#0C0C0C', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal" style={{ textAlign:'center' }}>Our Foundation</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1px', backgroundColor:'#222', marginTop:'3rem' }}>
            {pillars.map((p, i) => (
              <div key={p.title} className={`reveal reveal-delay-${i+1}`} style={{ backgroundColor:'#0C0C0C', padding:'3rem 2.5rem' }}>
                <p style={{ fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'1rem' }}>{p.title}</p>
                <p style={{ color:'#ccc', lineHeight:1.9, fontSize:'0.9rem' }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal">Signature Initiatives</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {[
              { title:'Rucker Park Africa', sub:'Creating Pathways. Changing Lives.', desc:'Basketball, youth development, education, culture, and international opportunity — inspired by the legacy of Rucker Park.', href:'/rucker-africa', img:images.kids.secondary },
              { title:'Global Opportunity Forum', sub:'Connecting Leaders. Advancing Solutions.', desc:'Connecting leaders from government, education, business, sport, philanthropy, and international development — transforming conversation into collaboration.', href:'/forum', img:images.leadership.forum },
            ].map(init => (
              <div key={init.title} className="reveal" style={{ position:'relative', backgroundColor:'#0C0C0C', overflow:'hidden', padding:'3rem' }}>
                <div style={{ ...bg(init.img), position:'absolute', inset:0, opacity:0.18 }} />
                <div style={{ position:'relative', zIndex:1 }}>
                  <p style={{ fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'0.75rem' }}>{init.sub}</p>
                  <h3 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'1.75rem', fontWeight:700, color:'#fff', marginBottom:'1rem' }}>{init.title}</h3>
                  <p style={{ color:'var(--text-faint)', lineHeight:1.8, marginBottom:'2rem' }}>{init.desc}</p>
                  <Link href={init.href} className="btn-primary" style={{ fontSize:'0.65rem', padding:'0.75rem 1.75rem' }}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--warm-white)', padding:'clamp(4rem,8vw,7rem) 1.5rem', textAlign:'center' }}>
        <div className="max-w-2xl mx-auto">
          <p className="section-label reveal">Get Involved</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', marginBottom:'1.5rem' }}>
            Partner With Us To Expand Opportunity
          </h2>
          <p className="reveal reveal-delay-2" style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'2.5rem' }}>
            We invite governments, corporations, universities, and foundations to build something extraordinary together.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/partners" className="btn-outline-dark">Become A Partner</Link>
            <Link href="/donate" className="btn-primary">Support Our Work</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
