'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { images, bg } from '@/config/images'

const areas = [
  { title:'Nigeria', desc:'Youth development, basketball programs, community outreach, educational support, food assistance, and cultural engagement.', img:images.kids.main, stats:[{n:'Youth',l:'Development Programs'},{n:'Food',l:'Assistance Initiatives'},{n:'Community',l:'Outreach & Culture'}] },
  { title:'South Korea', desc:'School visits, youth mentorship, charitable engagement, basketball experiences, and positive-influence initiatives.', img:images.basketball.main, stats:[{n:'Schools',l:'Visited & Engaged'},{n:'Youth',l:'Mentorship Programs'},{n:'Charity',l:'Community Events'}] },
  { title:'Philippines', desc:'Basketball camps, youth skill development, mentorship, community engagement, and inspiration through sport.', img:images.kids.secondary, stats:[{n:'Camps',l:'Basketball Training'},{n:'Skills',l:'Youth Development'},{n:'Mentorship',l:'Direct Engagement'}] },
  { title:'China', desc:'Basketball, cultural engagement, youth interaction, international relationships, and educational exchange.', img:images.lifestyle.china, stats:[{n:'NBL',l:'Champion & MVP'},{n:'Culture',l:'Exchange & Engagement'},{n:'Youth',l:'Interaction Programs'}] },
  { title:'United States', desc:'Education, mentorship, basketball development, community service, leadership experiences, and engagement at the United Nations.', img:images.leadership.un, stats:[{n:'UN',l:'Delegate Engagement'},{n:'NCAA',l:'Champion & MVP'},{n:'Service',l:'Community Leadership'}] },
  { title:'Other Global Communities', desc:'Building connections across countries through sport, education, service, culture, and shared opportunity.', img:images.lifestyle.travel, stats:[{n:'Multi',l:'Continent Reach'},{n:'Global',l:'Partnerships'},{n:'Shared',l:'Opportunity'}] },
]

/* ── GALLERY ──
   galleryInitial: always visible
   galleryMore:    revealed by the "View More" button
   To add photos: register them in src/config/images.ts, then add entries here. */
const galleryInitial = [
  { src: images.kids.main,           label: 'Youth Development' },
  { src: images.leadership.un,       label: 'United Nations' },
  { src: images.basketball.main,     label: 'Championship Career' },
  { src: images.lifestyle.china,     label: 'China — Cultural Exchange' },
  { src: images.kids.secondary,      label: 'Community Mentorship' },
  { src: images.leadership.forum,    label: 'Africa CEO Forum' },
  { src: images.lifestyle.travel,    label: 'Global Engagement' },
  { src: images.leadership.meetings, label: 'Leadership & Partnerships' },
  { src: images.basketball.action,   label: 'International Competition' },
  { src: images.hero.secondary,      label: 'The Journey' },
]

const galleryMore = [
  /* Placeholder entries reusing existing images — replace src values with
     new keys from images.ts as you add more photos to /public/images/ */
  { src: images.kids.quaternary,     label: 'Basketball Clinics' },
  { src: images.lifestyle.tour,      label: 'International Travel' },
  { src: images.leadership.conference,       label: 'Global Leadership' },
  { src: images.basketball.motion,     label: 'Trophy Celebrations' },
  { src: images.kids.tertiary,       label: 'School Outreach' },
  { src: images.leadership.congress,    label: 'Executive Engagements' },
  { src: images.lifestyle.trip,    label: 'Cultural Experiences' },
  { src: images.leadership.seminar, label: 'Diplomatic Meetings' },
  { src: images.basketball.champ, label: 'Championship Victory' },
  { src: images.leadership.message, label: 'Message of Hope' },
  { src: images.leadership.message1, label: 'Message of Hope' },
]

export default function ImpactContent() {
  const ref = useRef<HTMLDivElement>(null)
  const [showAllGallery, setShowAllGallery] = useState(false)

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
      <section className="relative flex items-end" style={{ height:'75vh', minHeight:'480px', backgroundColor:'#000' }}>
        <div style={{ ...bg(images.kids.main), position:'absolute', inset:0, opacity:0.5 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p className="section-label">Our Impact</p>
          <h1 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:700, color:'#fff', lineHeight:1.1, maxWidth:'700px' }}>
            Progress Measured in People and Possibility
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label reveal">The Heart of the Mission</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', lineHeight:1.25, marginBottom:'1.5rem' }}>
            Investing in Children. Strengthening Communities.
          </h2>
          <p className="reveal reveal-delay-2" style={{ color:'var(--text-body)', lineHeight:1.9, marginBottom:'1.25rem' }}>
            The work of the Anosike Cares Foundation begins with a simple belief: access, exposure,
            education, and positive relationships can change the direction of a young person's life.
            Through basketball camps, mentorship, educational support, charitable outreach, cultural
            experiences, youth programs, and community events, the Foundation creates environments
            where young people feel seen, supported, and inspired.
          </p>
          <p className="reveal reveal-delay-3" style={{ color:'var(--text-body)', lineHeight:1.9 }}>
            The goal is not simply to organize events. Every initiative is designed to create exposure,
            build confidence, develop leadership, strengthen communities, and connect young people with
            opportunities beyond their immediate environment. E.J. remains personally involved in the
            work — engaging directly with children, families, coaches, educators, local leaders, and
            community organizations.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--warm-white)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label reveal">Stories From The Community</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'#000', margin:'0 auto' }}>
              The Mission in Action
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              { country:'South Korea', title:'"Good Influence" — E.J. Anosike\'s Charity Event in South Korea', desc:'E.J. Anosike connects with children and community members in South Korea through sport, service, mentorship, and positive influence.', videoId:'eiXS0WU3jlY' },
              { country:'Philippines', title:'Inspiring the Next Generation: A Memorable Basketball Camp in Los Baños', desc:'A youth basketball experience centered on skill development, encouragement, mentorship, and helping young athletes believe in their potential.', videoId:'pV6OiwC9m5M' },
            ].map((story, i) => (
              <div key={story.videoId} className={`reveal reveal-delay-${i+1}`}>
                <div style={{ position:'relative', aspectRatio:'16/9', backgroundColor:'#0C0C0C', overflow:'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${story.videoId}`}
                    title={story.title}
                    style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p style={{ fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginTop:'1.5rem', marginBottom:'0.5rem' }}>{story.country}</p>
                <h3 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'1.2rem', fontWeight:600, color:'#000', marginBottom:'0.5rem', lineHeight:1.4 }}>{story.title}</h3>
                <p style={{ fontSize:'0.88rem', color:'#666', lineHeight:1.8 }}>{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal">Impact Across Borders — Global Work. Local Connection.</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'6rem', marginTop:'3rem' }}>
            {areas.map((area, i) => (
              <div key={area.title} className="reveal alternating-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
                <div style={{ ...bg(area.img), aspectRatio:'16/10', backgroundColor:'#1a1a1a', position:'relative', order: i%2===0 ? 1 : 2 }}>
                  <div style={{ position:'absolute', top:0, left:0, width:'40px', height:'2px', backgroundColor:'var(--gold)' }} />
                </div>
                <div style={{ order: i%2===0 ? 2 : 1 }}>
                  <h2 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.4rem,2.5vw,2rem)', fontWeight:700, color:'var(--heading)', marginBottom:'1.25rem', lineHeight:1.2 }}>{area.title}</h2>
                  <span className="gold-rule" style={{ marginBottom:'1.25rem' }} />
                  <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'2rem' }}>{area.desc}</p>
                  <div style={{ display:'flex', gap:'2rem' }}>
                    {area.stats.map(s => (
                      <div key={s.l}>
                        <p className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'1.5rem', fontWeight:700, color:'var(--gold)' }}>{s.n}</p>
                        <p style={{ fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-faint)', marginTop:'0.2rem' }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label reveal">Gallery</p>
            <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'var(--heading)', margin:'0 auto' }}>
              Moments From The Mission
            </h2>
          </div>

          <div className="masonry-gallery reveal">
            {galleryInitial.map((item, i) => (
              <div key={`initial-${i}`} className="masonry-item">
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className="masonry-caption">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
            {showAllGallery && galleryMore.map((item, i) => (
              <div key={`more-${i}`} className="masonry-item gallery-more" style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}>
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className="masonry-caption">
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllGallery(!showAllGallery)}
              className="btn-outline-dark"
              style={{ cursor: 'pointer', background: 'transparent', fontFamily: 'var(--font-inter)' }}
            >
              {showAllGallery ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor:'#0C0C0C', padding:'clamp(4rem,8vw,7rem) 1.5rem', textAlign:'center' }}>
        <div className="max-w-2xl mx-auto">
          <p className="section-label reveal">Join The Mission</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:700, color:'#fff', marginBottom:'1.5rem' }}>
            Partner With Us To Build Lasting Impact
          </h2>
          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/donate" className="btn-primary">Support Our Work</Link>
            <Link href="/partners" className="btn-outline">Become A Partner</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
