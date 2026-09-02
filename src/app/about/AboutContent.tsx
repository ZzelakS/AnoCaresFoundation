'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { images, bg } from '@/config/images'

const timeline = [
  { year: 'Heritage',               place: 'Nigerian Roots',                    desc: 'Born in the United States to Nigerian immigrant parents and raised with a deep connection to Nigerian culture, family, community, and tradition.' },
  { year: 'Identity',               place: 'First-Generation Nigerian-American', desc: 'Growing up with both American opportunity and Nigerian heritage shaped his ambition, resilience, worldview, and commitment to serving others.' },
  { year: 'Education',              place: 'Scholar-Athlete Foundation',         desc: "Earned a bachelor's degree in Finance and Business Economics with a minor in Accounting from Sacred Heart University before completing a master's degree in Agricultural and Natural Resource Economics at The University of Tennessee, Knoxville." },
  { year: 'Collegiate Excellence',  place: 'NCAA Achievement',                   desc: 'Developed into an award-winning Division I athlete, earning conference championships, tournament MVP honors, two All-America selections, academic recognition, and an NCAA Tournament appearance.' },
  { year: 'Professional Excellence',place: 'International Champion and MVP',     desc: "Built a decorated professional career through championships, scoring titles, All-Star selections, and Most Valuable Player awards across several international leagues, including China's National Basketball League." },
  { year: 'Global Experience',      place: 'From the Court to the World',        desc: 'Used basketball as a bridge to experience different countries, cultures, and leadership environments across multiple continents — including engagements as a United Nations delegate and Africa CEO Forum delegate.' },
  { year: 'Purpose',                place: 'Anosike Cares Foundation',           desc: 'Transformed athletic success, education, and international access into a platform focused on children, mentorship, education, cultural exchange, and community development.' },
  { year: 'Vision',                 place: 'Building Global Pathways',           desc: 'Creating bridges between Africa, Asia, the United States, and the wider world so young people can access sport, education, mentorship, leadership development, and international opportunities.' },
]

/* ── GALLERY ──
   galleryInitial: always visible
   galleryMore:    revealed by the "View More" button
   To add photos: register them in src/config/images.ts, then add entries here. */
const galleryInitial = [
  { src: images.leadership.un,       label: 'United Nations' },
  { src: images.basketball.champ, label: 'Championship Victory' },
  { src: images.leadership.message, label: 'Message of Hope' },
  { src: images.lifestyle.trip,    label: 'Cultural Experiences' },
  { src: images.basketball.action,   label: 'International Competition' },
  { src: images.lifestyle.travel,    label: 'Global Journey' },
  { src: images.leadership.meetings, label: 'Leadership Engagements' },
  { src: images.hero.secondary,      label: 'The Road Ahead' },
]

const galleryMore = [
  /* Placeholder entries reusing existing images — replace src values with
     new keys from images.ts as you add more photos to /public/images/ */
  { src: images.kids.main,           label: 'Youth Mentorship' },
  { src: images.lifestyle.china,     label: 'Cultural Exchange' },
  { src: images.basketball.main,     label: 'Trophy Moments' },
  { src: images.leadership.congress,    label: 'Executive Engagements' },
  { src: images.kids.secondary,      label: 'Community Outreach' },
  { src: images.leadership.forum,    label: 'Executive Forums' },
]

/* ── FEATURED FILM ──
   Paste the Vimeo video ID below (the number in the vimeo.com URL).
   e.g. for https://vimeo.com/123456789  →  VIMEO_ID = '123456789'  */
const VIMEO_ID = '1217221123#t=0'

/* ── PRESS / NEWSPAPER ARTICLES ──
   Replace these entries with the real article links.
   `outlet` = publication name, `date` = display date. */
const pressArticles = [
  { outlet: 'News Wave', title: 'From Harlem to Lagos: How EJ Anosike Introduced Rucker Park to Africa', date: '2026', url: 'https://newswave.com.ng/2026/08/09/from-harlem-to-lagos-how-ej-anosike-introduced-rucker-park-to-africa/?fbclid=PAVERFWATmm_pwZG9mAmZkaWQWUMM_16JRzXtsJ6lGmIeM3_sjBjJKNmV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpzeZLjPwdCIqoSP-YIeTNrueOLM0xDeDz0vM8QH8M1C9ysWCZYzLcMVnBdlo_aem_nRro0Cek_M03xMXmTeWiOw' },
  { outlet: 'Gist Life', title: 'How EJ Anosike Brought Rucker Park to Africa and gave Lagos a New Basketball Story', date: '2026', url: 'https://gistlife.com.ng/2026/08/10/how-ej-anosike-brought-rucker-park-to-africa-and-gave-lagos-a-new-basketball-story/?fbclid=PAVERFWATmnCFwZG9mAmZkaWQWUMM3CEztOCYfziHg9i6_2_VSv2ji6GV4dG4DYWVtAjEwAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3aZb6kE1t20dIj5Twup4kMCPoJLDV8So-pg_EJhFGexwiVgBaLXOD10CSg7_aem_8zW6ypP4GLUbpfIpu696Og' },
  // { outlet: 'Publication Name', title: 'Article headline goes here — replace with the real title', date: '2026', url: 'https://example.com/article-3' },
]

export default function AboutContent() {
  const ref = useRef<HTMLDivElement>(null)
  const [showAllGallery, setShowAllGallery] = useState(false)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref}>

      {/* ── HERO ── */}
      <section className="relative flex items-end" style={{ height: '80vh', minHeight: '500px', backgroundColor: '#000' }}>
        {/*
          backgroundPosition is intentionally omitted from inline style here.
          It is controlled by the .about-hero-img class in globals.css so that
          media queries can override it per breakpoint:
            mobile  → center center  (perfect as-is)
            desktop → center top     (prevents top being cut off)
        */}
        <div
          className="about-hero-img"
          style={{
            backgroundImage: `url('${images.leadership.un}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            inset: 0,
            opacity: 0.65,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p className="section-label">Founder</p>
          <h1
            className="font-display"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: '700px' }}
          >
            E.J. Anosike
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '0.75rem' }}>
            The Journey Behind The Mission
          </p>
        </div>
      </section>

      {/* ── WHO HE IS ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="section-label reveal">Who He Is</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--heading)', lineHeight: 1.25, marginBottom: '1.5rem' }}
            >
              Educated to Lead. Built to Win. Committed to Serve.
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              E.J. Anosike's journey represents the intersection of education, athletic excellence,
              cultural identity, global experience, and service. Born in the United States to Nigerian
              immigrant parents, he grew up deeply connected to his Nigerian heritage while pursuing
              opportunities through education and basketball in the United States.
            </p>
            <p className="reveal reveal-delay-4" style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              That foundation carried him from NCAA Division I basketball to a professional career
              spanning several countries and continents. Along the way, he earned university degrees,
              championships, Most Valuable Player awards, and All-America recognition — and has
              represented Nigeria as a United Nations delegate and engaged Africa's leading business
              and government minds at the Africa CEO Forum in Geneva.
            </p>
            <p className="reveal reveal-delay-5" style={{ color: 'var(--text-body)', lineHeight: 1.9 }}>
              Today, he uses those experiences through the Anosike Cares Foundation to create
              opportunities for children, strengthen communities, connect cultures, and develop the
              next generation of leaders.
            </p>
          </div>

          {/* Stats panel */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)' }}>
            {[
              { num: '2',   label: 'University Degrees' },
              { num: '2x',  label: 'Lou Henson All-American' },
              { num: 'UN',  label: 'Delegate for Nigeria' },
              { num: '5+',  label: 'Countries of Community Work' },
            ].map(s => (
              <div key={s.label} style={{ backgroundColor: '#0C0C0C', padding: '2.5rem 2rem' }}>
                <p
                  className="font-display"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.25rem' }}
                >
                  {s.num}
                </p>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED FILM ── */}
      <section style={{ backgroundColor: '#0C0C0C', padding: 'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label reveal">Featured Film</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: '#fff', margin: '0 auto' }}
            >
              The Story In Motion
            </h2>
          </div>
          <div className="video-embed reveal reveal-delay-2">
            <iframe
              src={`https://player.vimeo.com/video/${VIMEO_ID}?title=0&byline=0&portrait=0`}
              title="E.J. Anosike — Featured Film"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label reveal">Gallery</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--heading)', margin: '0 auto' }}
            >
              Moments From The Journey
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

      {/* ── TIMELINE ── */}
      <section style={{ backgroundColor: 'var(--warm-white)', padding: 'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-4xl mx-auto">
          <p className="section-label reveal" style={{ textAlign: 'center' }}>The Journey</p>
          <h2
            className="font-display reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--heading)', marginBottom: '4rem', textAlign: 'center' }}
          >
            From Heritage to Global Purpose
          </h2>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
            {timeline.map((item, i) => (
              <div
                key={item.place}
                className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{ marginBottom: '3rem', position: 'relative' }}
              >
                <div style={{ position: 'absolute', left: '-2.375rem', top: '0.25rem', width: '10px', height: '10px', backgroundColor: 'var(--gold)', borderRadius: '50%' }} />
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>
                  {item.year}
                </p>
                <h3
                  className="font-display"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--heading)', marginBottom: '0.5rem' }}
                >
                  {item.place}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="section-label reveal">Education & Intellectual Leadership</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--heading)', lineHeight: 1.25, marginBottom: '1.5rem' }}
            >
              Educated to Lead
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Education has always been central to E.J. Anosike's journey. While developing into an
              elite Division I athlete, he remained committed to academic achievement and long-term
              preparation beyond basketball.
            </p>
            <p className="reveal reveal-delay-4" style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              At Sacred Heart University, E.J. earned a bachelor's degree in Finance and Business
              Economics with a minor in Accounting, and was recognized as the 2020 Northeast Conference
              Men's Basketball Winter Scholar-Athlete of the Year. He continued at the University of
              Tennessee, earning a master's degree in Agricultural and Resource Economics in 2021.
            </p>
            <p className="reveal reveal-delay-5" style={{ color: 'var(--text-body)', lineHeight: 1.9 }}>
              His graduate studies strengthened his understanding of economic development, agriculture,
              international trade, food systems, and strategic investment — and he co-authored published
              academic research on the economic impact of the COVID-19 pandemic on Tennessee
              forest-product exports. This academic foundation now supports his work across philanthropy,
              youth development, entrepreneurship, food security, education, and international partnerships.
            </p>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: '#e5e5e5' }}>
            {[
              { num: 'B.S.',  label: 'Finance & Business Economics — Sacred Heart University' },
              { num: 'M.S.',  label: 'Agricultural & Resource Economics — University of Tennessee, 2021' },
              { num: '2020',  label: 'NEC Winter Scholar-Athlete of the Year' },
              { num: '2022',  label: 'Published Academic Research Co-Author' },
            ].map(s => (
              <div key={s.label} style={{ backgroundColor: '#0C0C0C', padding: '2.5rem 2rem' }}>
                <p
                  className="font-display"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.25rem' }}
                >
                  {s.num}
                </p>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', lineHeight: 1.6 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED AWARDS ── */}
      <section style={{ backgroundColor: '#0C0C0C', padding: 'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal">A Legacy of Excellence</p>
          <h2
            className="font-display reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}
          >
            Built to Win
          </h2>
          <p className="reveal reveal-delay-2" style={{ color: '#888', lineHeight: 1.9, maxWidth: '650px', marginBottom: '3rem' }}>
            These achievements are not presented only as personal milestones. They represent the
            experiences, relationships, and global platform that now support his work with children
            and communities through the Anosike Cares Foundation.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Collegiate */}
            <div className="reveal">
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                Selected Collegiate Honors
              </p>
              {[
                { year: '2022', items: ['Big West Tournament Champion & Most Valuable Player', 'Big West Newcomer of the Year', 'First Team All-Big West', 'Lou Henson All-America Team', "Reese's Division I College All-Star"] },
                { year: '2020', items: ['Lou Henson All-America Team', 'First Team All-NEC', 'NABC All-District First Team', "NEC Men's Basketball Winter Scholar-Athlete of the Year"] },
                { year: '2019', items: ['NEC Most Improved Player', 'Second Team All-NEC'] },
              ].map(group => (
                <div key={group.year} style={{ marginBottom: '2rem' }}>
                  <p
                    className="font-display"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}
                  >
                    {group.year}
                  </p>
                  {group.items.map(item => (
                    <p key={item} style={{ color: '#999', fontSize: '0.88rem', lineHeight: 2, borderBottom: '1px solid #1a1a1a', paddingBottom: '0.35rem', marginBottom: '0.35rem' }}>
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Professional */}
            <div className="reveal reveal-delay-1">
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
                Selected Professional Honors
              </p>
              {[
                { year: '2026', items: ['China National Basketball League Champion', 'China NBL Finals Most Valuable Player', 'China NBL All-Star', 'China NBL Slam Dunk Contest Champion'] },
                { year: '2025', items: ['China NBL Regular-Season Most Valuable Player', 'China NBL All-Star'] },
                { year: '2024', items: ['China NBL Most Valuable Player & Scoring Leader', 'Belgian Forward of the Year', 'All-BNXT First Team', 'European North Basketball League All-Star'] },
                { year: '2023', items: ['All-CEBL Second Team'] },
                { year: '2022', items: ['Korean Basketball League Cup Champion & Most Valuable Player'] },
              ].map(group => (
                <div key={group.year} style={{ marginBottom: '2rem' }}>
                  <p
                    className="font-display"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}
                  >
                    {group.year}
                  </p>
                  {group.items.map(item => (
                    <p key={item} style={{ color: '#999', fontSize: '0.88rem', lineHeight: 2, borderBottom: '1px solid #1a1a1a', paddingBottom: '0.35rem', marginBottom: '0.35rem' }}>
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IN THE PRESS ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <p className="section-label reveal">In The Press</p>
          <h2
            className="font-display reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: 'var(--heading)', marginBottom: '3rem' }}
          >
            Featured Coverage
          </h2>
          <div className="press-grid reveal" style={{ backgroundColor: 'var(--border)' }}>
            {pressArticles.map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="press-card"
                style={{ backgroundColor: 'var(--surface)' }}
              >
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
                  {article.outlet}
                </p>
                <h3
                  className="font-display"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--heading)', lineHeight: 1.45, marginBottom: '1rem' }}
                >
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-faint)' }}>
                  {article.date} <span style={{ color: 'var(--gold)', marginLeft: '0.5rem' }}>Read Article →</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section style={{ backgroundColor: '#0C0C0C', padding: 'clamp(5rem,10vw,9rem) 1.5rem', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--gold)', margin: '0 auto 2.5rem' }} />
          <p
            className="font-display reveal"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontStyle: 'italic', color: '#fff', lineHeight: 1.6, marginBottom: '2rem' }}
          >
            "Every opportunity I have received through sport, education, and global exposure has
            reinforced one belief: talent exists everywhere, but opportunity does not. Through
            Anosike Cares Foundation, we are committed to creating pathways that help young people
            realize their potential and positively impact the world around them."
          </p>
          <p
            className="reveal reveal-delay-1"
            style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)' }}
          >
            — E.J. Anosike, Founder
          </p>
          <div className="reveal reveal-delay-2" style={{ marginTop: '3rem' }}>
            <Link href="/foundation" className="btn-primary">Explore The Foundation</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
