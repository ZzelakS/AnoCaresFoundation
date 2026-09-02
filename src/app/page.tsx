'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { images, bg } from '@/config/images'

const credItems = [
  'Professional Basketball Champion','China NBL Champion & Finals MVP','Two-Time Lou Henson All-American',
  'NCAA Conference Champion & Tournament MVP','KBL Cup Champion & MVP','United Nations Delegate',
  'Africa CEO Forum Delegate','Two University Degrees','International Speaker','Global Ambassador',
  'Youth Development Advocate','Founder, Anosike Cares Foundation',
]

const impactAreas = [
  { title: 'Youth & Community Development',        desc: 'Camps, clinics, school visits, mentorship, and direct outreach that help young people learn and feel supported.', img: images.kids.main },
  { title: 'Sports, Education & Opportunity',      desc: 'Combining athletic development with mentorship, academic encouragement, and leadership training.',                img: images.basketball.main },
  { title: 'Cultural Exchange & Global Citizenship', desc: 'International exchanges, educational travel, and cross-cultural mentorship that expand possibilities.',         img: images.lifestyle.china },
  { title: 'Education & Leadership Development',   desc: 'Mentorship, workshops, professional exposure, and access to role models that build purpose.',                     img: images.leadership.un },
  { title: 'Food Security & Community Resilience', desc: 'Food assistance, agricultural initiatives, and sustainable systems of community support.',                        img: images.kids.secondary },
  { title: 'Entrepreneurship & Economic Mobility', desc: 'Introducing young people to ownership, innovation, financial education, and economic opportunity.',               img: images.leadership.forum },
]

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal')
    if (!els) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const doubled = [...credItems, ...credItems]

  return (
    <div ref={ref}>

      {/* ── 1. HERO ── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center"
        style={{ height: '100svh', minHeight: '600px', backgroundColor: '#000' }}
      >
        <div className="hero-img" style={bg(images.hero.main)} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)' }} />
        <div className="relative z-10 px-6 max-w-5xl">
          <p className="section-label" style={{ color: 'rgba(192,155,75,0.9)', marginBottom: '2rem' }}>
            Anosike Cares Foundation
          </p>
          <h1
            className="font-display"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem,6vw,5.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '2rem' }}
          >
            <span className="hero-line"><span className="hero-line-inner">Building Leaders.</span></span>
            <span className="hero-line"><span className="hero-line-inner">Strengthening Communities.</span></span>
            <span className="hero-line"><span className="hero-line-inner">Expanding Opportunity.</span></span>
          </h1>
          <p
            className="hero-sub"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.9rem,1.8vw,1.1rem)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: 1.8, fontWeight: 300 }}
          >
            A global human development organization dedicated to developing future leaders,
            strengthening communities, and creating pathways to opportunity through education,
            leadership, entrepreneurship, and sport.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/foundation" className="btn-primary">Explore Our Work</Link>
            <Link href="/donate" className="btn-outline">Support The Mission</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── 2. CREDIBILITY STRIP ── */}
      <div style={{ backgroundColor: '#0C0C0C', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', overflow: 'hidden', padding: '1.25rem 0' }}>
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{ whiteSpace: 'nowrap', padding: '0 3rem', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: i % 2 === 0 ? '#fff' : 'var(--gold)' }}
            >
              {item}<span style={{ margin: '0 3rem', color: 'var(--text-body)' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── 3. ABOUT EJ ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(5rem,10vw,9rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
            <div style={{ ...bg(images.leadership.un, 'center top'), position: 'absolute', inset: 0, backgroundColor: '#1a1a1a' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '60px', height: '3px', backgroundColor: 'var(--gold)' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '3px', height: '60px', backgroundColor: 'var(--gold)' }} />
          </div>
          <div>
            <p className="section-label reveal">The Man Behind The Mission</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--heading)', marginBottom: '1.5rem' }}
            >
              From First-Generation Nigerian-American Scholar-Athlete to Global Impact Leader
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Born in the United States to Nigerian immigrant parents, E.J. was raised with a deep connection
              to his Nigerian heritage, culture, family, and community. His journey spans championships,
              MVP awards, and All-America recognition alongside two university degrees — and a platform
              that has taken him from international courts to the United Nations and the Africa CEO Forum.
            </p>
            <p className="reveal reveal-delay-4" style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              Through the Anosike Cares Foundation, E.J. brings together sport, education, mentorship,
              cultural exchange, leadership development, and global partnerships to create pathways for
              the next generation. Basketball gave him a platform. Education prepared him to lead.
              Service gave the journey its greater purpose.
            </p>
            <div className="reveal reveal-delay-5 flex gap-4">
              <Link href="/about" className="btn-outline-dark">Read His Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE BELIEF ── */}
      <section style={{ backgroundColor: '#0C0C0C', padding: 'clamp(5rem,10vw,9rem) 1.5rem', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto">
          <p className="section-label reveal">Core Belief</p>
          <h2
            className="font-display reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '1.5rem' }}
          >
            Talent Is Universal.
            <span style={{ display: 'block', color: 'var(--gold)', fontStyle: 'italic' }}>Opportunity Is Not.</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ color: 'var(--text-faint)', fontSize: '1.05rem', lineHeight: 1.9, maxWidth: '600px', margin: '0 auto 3rem' }}
          >
            Across the world, talented young people possess extraordinary potential yet lack access to
            the opportunities, networks, and resources needed to fully realize their ambitions.
            Anosike Cares Foundation exists to close that gap.
          </p>
          <Link href="/foundation" className="btn-primary reveal reveal-delay-3">Learn About Our Work</Link>
        </div>
      </section>

      {/* ── 5. GLOBAL REACH ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(5rem,10vw,9rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label reveal">Global Presence</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--heading)', marginBottom: '1.5rem' }}
            >
              Local Roots.<br />Global Reach.
            </h2>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              The Foundation's work and partnerships span multiple continents, reflecting a commitment
              to fostering global understanding, expanding opportunity, and building connections that
              empower communities worldwide.
            </p>
            <div
              className="reveal reveal-delay-4"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.75rem' }}
            >
              {['Nigeria','United States','China','South Korea','Philippines','Belgium','Canada','Europe','Asia','Africa','North America','+ More'].map(c => (
                <div
                  key={c}
                  style={{ padding: '0.75rem 1rem', border: '1px solid var(--border)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: c === '+ More' ? 'var(--gold)' : '#444' }}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div
            className="reveal"
            style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#0C0C0C' }}
          >
            <div style={{ ...bg(images.lifestyle.china), position: 'absolute', inset: 0, opacity: 0.7 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '48px', height: '2px', backgroundColor: 'var(--gold)' }} />
          </div>
        </div>
      </section>

      {/* ── 6. IMPACT AREAS ── */}
      <section style={{ backgroundColor: 'var(--warm-white)', padding: 'clamp(5rem,10vw,9rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label reveal">Areas of Impact</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--heading)', maxWidth: '600px', margin: '0 auto' }}
            >
              Advancing Human Potential Through Opportunity
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
            {impactAreas.map((area, i) => (
              <div key={area.title} className={`impact-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="impact-card-bg" style={bg(area.img, 'center top')} />
                <div className="impact-card-content">
                  <h3
                    className="font-display"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}
                  >
                    {area.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link href="/impact" className="btn-outline-dark">View Full Impact</Link>
          </div>
        </div>
      </section>

      {/* ── 7. RUCKER AFRICA ── */}
      <section className="relative" style={{ backgroundColor: '#000', padding: 'clamp(5rem,10vw,9rem) 1.5rem', overflow: 'hidden' }}>
        <div style={{ ...bg(images.kids.main, 'center top'), position: 'absolute', inset: 0, opacity: 0.22 }} />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label reveal">Flagship Initiative</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}
            >
              Rucker Park Africa
            </h2>
            <p className="reveal reveal-delay-2" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Creating Pathways. Changing Lives.
            </p>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color: 'var(--text-faint)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Rucker Park Africa brings together basketball, youth development, education, culture,
              entertainment, leadership, and international opportunity. Inspired by the legacy and
              cultural influence of Rucker Park, it creates a platform where young athletes can compete,
              learn, connect, and gain exposure while communities celebrate the power of basketball.
            </p>
            <p className="reveal reveal-delay-4" style={{ color: 'var(--text-faint)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              The program is designed to create pathways between Africa and the global basketball
              community while investing in the next generation of athletes, leaders, creators, and
              professionals.
            </p>
            <Link href="/rucker-africa" className="btn-primary reveal reveal-delay-5">Explore Rucker Park Africa</Link>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: '#222' }}>
            {['Leadership','Education','Cultural Exchange','Opportunity','Community Impact'].map((p, i) => (
              <div
                key={p}
                style={{ padding: '1.5rem 2rem', backgroundColor: '#0C0C0C', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'background-color 0.3s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#111')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0C0C0C')}
              >
                <span style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.1em', minWidth: '1.5rem' }}>0{i + 1}</span>
                <span style={{ fontSize: '0.9rem', color: '#ccc', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. GLOBAL OPPORTUNITY FORUM ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(5rem,10vw,9rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className="reveal lg:order-2"
            style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', backgroundColor: '#0C0C0C' }}
          >
            <div style={{ ...bg(images.leadership.meetings, 'center top'), position: 'absolute', inset: 0, opacity: 0.7 }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '48px', height: '2px', backgroundColor: 'var(--gold)' }} />
          </div>
          <div className="lg:order-1">
            <p className="section-label reveal">Flagship Convening Platform</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.2, color: 'var(--heading)', marginBottom: '1rem' }}
            >
              Global Opportunity Forum
            </h2>
            <p className="reveal reveal-delay-2" style={{ color: 'var(--gold)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              Connecting Leaders. Advancing Solutions.
            </p>
            <span className="gold-rule reveal reveal-delay-2" style={{ marginBottom: '1.5rem' }} />
            <p className="reveal reveal-delay-3" style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              The Global Opportunity Forum connects leaders from government, education, business,
              sport, philanthropy, and international development.
            </p>
            <p className="reveal reveal-delay-4" style={{ color: 'var(--text-body)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              The goal is to transform conversation into collaboration by identifying practical
              opportunities, building relationships, and creating programs that benefit young people
              and communities.
            </p>
            <Link href="/forum" className="btn-outline-dark reveal reveal-delay-5">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── 9. COMMUNITY STRIP ── */}
      <section style={{ backgroundColor: '#0C0C0C', padding: 'clamp(5rem,10vw,9rem) 1.5rem', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto">
          <p className="section-label reveal">The Heart of the Mission</p>
          <h2
            className="font-display reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: '1.5rem' }}
          >
            Investing in Children.<br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Strengthening Communities.</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ color: 'var(--text-faint)', lineHeight: 1.9, marginBottom: '3rem' }}>
            Children and communities are at the center of the Anosike Cares Foundation. From Nigeria
            and the United States to South Korea, China, and the Philippines, the Foundation uses sport
            and education to build relationships, open doors, and inspire the next generation.
          </p>
          <Link href="/impact" className="btn-primary reveal reveal-delay-3">Explore Our Impact</Link>
        </div>
      </section>

      {/* ── 10. PHOTO STRIP ── */}
      <div
        className="photo-strip"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', height: 'clamp(140px,20vw,280px)' }}
      >
        {[images.kids.main, images.leadership.un, images.basketball.main, images.lifestyle.china, images.kids.secondary].map((src, i) => (
          <div
            key={i}
            style={{ ...bg(src, 'center top'), backgroundColor: '#1a1a1a', filter: 'grayscale(30%)', transition: 'filter 0.4s' }}
            onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
            onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(30%)')}
          />
        ))}
      </div>

      {/* ── 11. STORIES FROM THE COMMUNITY ── */}
      <section style={{ backgroundColor: 'var(--surface)', padding: 'clamp(5rem,10vw,9rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label reveal">Stories From The Community</p>
            <h2
              className="font-display reveal reveal-delay-1"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 700, color: 'var(--heading)', maxWidth: '600px', margin: '0 auto 1rem' }}
            >
              The Mission in Action
            </h2>
            <p className="reveal reveal-delay-2" style={{ color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '550px', margin: '0 auto' }}>
              Explore real stories of service, mentorship, sport, and community engagement from
              programs around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                country: 'South Korea',
                title: '"Good Influence" — E.J. Anosike\'s Charity Event in South Korea',
                desc: 'E.J. Anosike connects with children and community members in South Korea through sport, service, mentorship, and positive influence.',
                videoId: 'eiXS0WU3jlY',
              },
              {
                country: 'Philippines',
                title: 'Inspiring the Next Generation: A Memorable Basketball Camp in Los Baños',
                desc: 'A youth basketball experience centered on skill development, encouragement, mentorship, and helping young athletes believe in their potential.',
                videoId: 'pV6OiwC9m5M',
              },
            ].map((story, i) => (
              <div key={story.videoId} className={`reveal reveal-delay-${i + 1}`}>
                <div style={{ position: 'relative', aspectRatio: '16/9', backgroundColor: '#0C0C0C', overflow: 'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${story.videoId}`}
                    title={story.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                  {story.country}
                </p>
                <h3
                  className="font-display"
                  style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--heading)', marginBottom: '0.5rem', lineHeight: 1.4 }}
                >
                  {story.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{story.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/impact" className="btn-outline-dark">Watch More Community Stories</Link>
          </div>
        </div>
      </section>

      {/* ── 12. DONATE CTA ── */}
      <section
        className="relative"
        style={{ backgroundColor: '#0C0C0C', padding: 'clamp(5rem,10vw,9rem) 1.5rem', textAlign: 'center', overflow: 'hidden' }}
      >
        <div style={{ ...bg(images.kids.secondary, 'center top'), position: 'absolute', inset: 0, opacity: 0.15 }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label reveal">Make An Impact</p>
          <h2
            className="font-display reveal reveal-delay-1"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '1.5rem' }}
          >
            Invest In Opportunity
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ color: 'var(--text-faint)', lineHeight: 1.9, maxWidth: '500px', margin: '0 auto 2.5rem' }}
          >
            Your support creates educational pathways, leadership opportunities, and community
            impact that transforms lives and strengthens communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3">
            <Link href="/donate" className="btn-primary">Donate Now</Link>
            <Link href="/partners" className="btn-outline">Become A Partner</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
