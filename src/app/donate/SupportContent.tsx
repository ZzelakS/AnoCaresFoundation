'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { images, bg } from '@/config/images'

/* ── ORGANIZATION EMAIL ──
   Replace with the real foundation address. Used by every "email us" link
   on this page, including the pre-filled subject and message. */
const ORG_EMAIL = 'info@anocaresfoundation.org'


export default function SupportContent() {
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
      <section className="relative flex items-center justify-center" style={{ height:'70vh', minHeight:'450px', backgroundColor:'#000', textAlign:'center' }}>
        <div style={{ ...bg(images.kids.secondary), position:'absolute', inset:0, opacity:0.35 }} />
        <div style={{ position:'absolute', inset:0, backgroundColor:'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 px-6 max-w-3xl">
          <p className="section-label">Support The Mission</p>
          <h1 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(2.5rem,6vw,5rem)', fontWeight:700, color:'#fff', lineHeight:1.1, marginBottom:'1.25rem' }}>Invest In Opportunity</h1>
          <p style={{ color:'rgba(255,255,255,0.65)', fontSize:'1rem', lineHeight:1.9, maxWidth:'550px', margin:'0 auto' }}>
            Your support creates educational pathways, leadership opportunities, food security initiatives, and community impact that transforms lives and strengthens communities.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor:'#0C0C0C', padding:'3rem 1.5rem', borderBottom:'1px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'2rem', textAlign:'center' }}>
          {[{n:'100+',l:'Youth Impacted'},{n:'10+',l:'Countries Reached'},{n:'4',l:'Continents of Work'},{n:'100%',l:'Mission Driven'}].map(s => (
            <div key={s.l} className="reveal">
              <p className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'2.5rem', fontWeight:700, color:'var(--gold)' }}>{s.n}</p>
              <p style={{ fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', marginTop:'0.25rem' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label reveal">Why Your Support Matters</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', lineHeight:1.25, marginBottom:'1.5rem' }}>
              Together, We Can Create Lasting Change
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom:'1.5rem' }} />
            {['Fund scholarships and educational access for young leaders across Africa.','Support youth development clinics, mentorship programs, and leadership training.','Enable community outreach, shoe drives, and grassroots impact initiatives.','Power the Global Opportunity Forum and other convening platforms.','Build sustainable programs in food security and agricultural innovation.'].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i+1}`} style={{ display:'flex', gap:'1rem', marginBottom:'1rem', alignItems:'flex-start' }}>
                <span style={{ width:'6px', height:'6px', backgroundColor:'var(--gold)', borderRadius:'50%', marginTop:'0.55rem', flexShrink:0 }} />
                <p style={{ color:'var(--text-body)', lineHeight:1.8 }}>{item}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ ...bg(images.kids.main), aspectRatio:'4/5', backgroundColor:'#0C0C0C', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
            <div style={{ position:'absolute', top:0, left:0, width:'48px', height:'2px', backgroundColor:'var(--gold)' }} />
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED / EMAIL CTA ── */}
      <section style={{ backgroundColor:'var(--warm-white)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label reveal">Get Involved</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', lineHeight:1.25, marginBottom:'1.5rem' }}>
            Let's Talk About Working Together
          </h2>
          <span className="gold-rule reveal reveal-delay-2" style={{ margin:'0 auto 1.5rem' }} />
          <p className="reveal reveal-delay-3" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'1rem' }}>
            Whether you represent a government body, university, sports organization, corporation,
            foundation, or you simply want to support the work — we would like to hear from you.
          </p>
          <p className="reveal reveal-delay-4" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'2.5rem' }}>
            Reach out directly and a member of the Foundation will respond personally.
          </p>

          <div className="reveal reveal-delay-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${ORG_EMAIL}?subject=Partnership%20Enquiry%20%E2%80%94%20Anosike%20Cares%20Foundation&body=Hello%2C%0A%0AI%20would%20like%20to%20discuss%20partnering%20with%20the%20Anosike%20Cares%20Foundation.%0A%0AOrganization%3A%20%0AArea%20of%20interest%3A%20%0A%0AThank%20you.`}
              className="btn-primary"
            >
              Email The Foundation
            </a>
            <Link href="/partners" className="btn-outline-dark">Partnership Areas</Link>
          </div>

          <p className="reveal reveal-delay-6" style={{ marginTop:'2.5rem', fontSize:'0.8rem', letterSpacing:'0.05em', color:'var(--text-faint)' }}>
            Or write to us at{' '}
            <a href={`mailto:${ORG_EMAIL}`} style={{ color:'var(--gold)', textDecoration:'none', fontWeight:600 }}>
              {ORG_EMAIL}
            </a>
          </p>
        </div>
      </section>

    </div>
  )
}
