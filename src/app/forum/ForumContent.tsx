'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { images, bg } from '@/config/images'

const focusAreas = ['Youth Development','Education','Food Security','Agriculture','Entrepreneurship','Economic Opportunity','Leadership','Community Development','Africa-Asia Partnerships','Cultural Exchange','Sustainable Development','Global Partnerships']

export default function ForumContent() {
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
      <section className="relative flex items-center justify-center" style={{ height:'90vh', minHeight:'500px', backgroundColor:'#000', textAlign:'center' }}>
        <div style={{ ...bg(images.leadership.forum), position:'absolute', inset:0, opacity:0.38 }} />
        <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 px-6 max-w-4xl">
          <p className="section-label">Flagship Convening Platform</p>
          <h1 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(2.5rem,6vw,5rem)', fontWeight:700, color:'#fff', lineHeight:1.1, marginBottom:'1rem' }}>Global Opportunity Forum</h1>
          <p style={{ color:'var(--gold)', fontStyle:'italic', fontSize:'1.15rem', marginBottom:'1.5rem' }}>Connecting Leaders. Advancing Solutions.</p>
          <p style={{ color:'rgba(255,255,255,0.6)', fontSize:'1rem', lineHeight:1.8, maxWidth:'600px', margin:'0 auto' }}>
            Bringing together leaders from government, business, philanthropy, education, sport, and civil society to address the most pressing challenges and opportunities facing future generations.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="section-label reveal">About The Forum</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', lineHeight:1.25, marginBottom:'1.5rem' }}>
              Transforming Dialogue Into Measurable Impact
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom:'1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'1.25rem' }}>
              The goal is to transform conversation into collaboration by identifying practical
              opportunities, building relationships, and creating programs that benefit young people
              and communities.
            </p>
            <p className="reveal reveal-delay-4" style={{ color:'var(--text-body)', lineHeight:1.9 }}>
              Long-term vision: to become one of Africa's leading platforms for collaboration, innovation, and opportunity creation — an institution that convenes the world's most important conversations about the continent's future.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="reveal" style={{ backgroundColor:'#0C0C0C', padding:'3rem 2.5rem', position:'relative', marginBottom:'1px' }}>
              <div style={{ position:'absolute', top:0, left:0, width:'48px', height:'2px', backgroundColor:'var(--gold)' }} />
              <p style={{ fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'1.5rem' }}>Long-Term Vision</p>
              <p className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'1.15rem', fontStyle:'italic', color:'#fff', lineHeight:1.6 }}>
                To become one of Africa's leading platforms for collaboration, innovation, and opportunity creation.
              </p>
            </div>
            <div className="reveal reveal-delay-1" style={{ backgroundColor:'#0C0C0C', padding:'2.5rem' }}>
              <p style={{ fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'1rem' }}>Inspired By</p>
              {['World Economic Forum','Clinton Global Initiative','Africa CEO Forum','United Nations Conventions'].map(org => (
                <p key={org} style={{ color:'var(--text-faint)', fontSize:'0.85rem', lineHeight:2, borderBottom:'1px solid #1a1a1a', paddingBottom:'0.5rem', marginBottom:'0.5rem' }}>{org}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--warm-white)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal">Agenda</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', marginBottom:'3rem' }}>Forum Focus Areas</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'1px', backgroundColor:'var(--border)' }}>
            {focusAreas.map((area, i) => (
              <div key={area} className={`reveal reveal-delay-${(i%4)+1}`}
                style={{ backgroundColor:'var(--surface)', padding:'2rem 1.5rem', display:'flex', alignItems:'center', gap:'1rem', transition:'background-color 0.3s', cursor:'default' }}
                onMouseEnter={e=>(e.currentTarget.style.backgroundColor='#0C0C0C')}
                onMouseLeave={e=>(e.currentTarget.style.backgroundColor='var(--surface)')}>
                <span style={{ width:'6px', height:'6px', backgroundColor:'var(--gold)', borderRadius:'50%', flexShrink:0 }} />
                <span style={{ fontSize:'0.8rem', letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--text-body)' }}>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'#0C0C0C', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal" style={{ textAlign:'center' }}>Audience</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'#fff', textAlign:'center', marginBottom:'3rem' }}>Who Attends The Forum</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'1px', backgroundColor:'#222' }}>
            {['Governments','Business Leaders','Universities','Foundations','Sports Organizations','Development Agencies','NGOs','International Institutions'].map((item, i) => (
              <div key={item} className={`reveal reveal-delay-${(i%4)+1}`} style={{ backgroundColor:'#0C0C0C', padding:'2.5rem 2rem', textAlign:'center' }}>
                <p style={{ fontSize:'0.75rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'#ccc' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem', textAlign:'center' }}>
        <div className="max-w-2xl mx-auto">
          <p className="section-label reveal">Get Involved</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', marginBottom:'1.5rem' }}>Participate In The Forum</h2>
          <p className="reveal reveal-delay-2" style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'2.5rem' }}>
            Whether as a delegate, partner, sponsor, or speaker — the Global Opportunity Forum welcomes leaders committed to building a more equitable and opportunity-rich world.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">Register Interest</Link>
            <Link href="/partners" className="btn-outline-dark">Become A Forum Partner</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
