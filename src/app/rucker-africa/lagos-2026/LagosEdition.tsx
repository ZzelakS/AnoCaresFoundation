'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { images, bg } from '@/config/images'
import ChapterNav from '@/components/ChapterNav'
import Lightbox from '@/components/Lightbox'
import { VideoEmbed, MediaBreak, ImageCarousel } from '@/components/Media'
import { chapters, impactStats, divisions, roster, eventPartners, videos, galleryItems } from './data'

/* Presentational helpers -------------------------------------------- */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="section-label reveal">{children}</p>
)

const H = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <h2
    className="font-display reveal reveal-delay-1"
    style={{
      fontFamily: 'var(--font-playfair)',
      fontSize: 'clamp(1.8rem,3.2vw,2.6rem)',
      fontWeight: 700,
      color: light ? '#fff' : 'var(--heading)',
      lineHeight: 1.2,
      marginBottom: '1.25rem',
    }}
  >
    {children}
  </h2>
)

const P = ({ children, light = false, delay = 2 }: { children: React.ReactNode; light?: boolean; delay?: number }) => (
  <p
    className={`reveal reveal-delay-${delay}`}
    style={{ color: light ? 'var(--text-faint)' : 'var(--text-body)', lineHeight: 1.9, marginBottom: '1.25rem' }}
  >
    {children}
  </p>
)

const Quote = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <blockquote className="reveal pull-quote">
    <p
      className="font-display"
      style={{
        fontFamily: 'var(--font-playfair)',
        fontSize: 'clamp(1.05rem,1.8vw,1.3rem)',
        fontStyle: 'italic',
        color: light ? '#fff' : 'var(--heading)',
        lineHeight: 1.6,
        marginBottom: '0.75rem',
      }}
    >
      {children}
    </p>
    <cite style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontStyle: 'normal' }}>
      — E.J. Anosike
    </cite>
  </blockquote>
)

const Stats = ({ items, light = false }: { items: { n: string; l: string }[]; light?: boolean }) => (
  <div className="reveal stat-grid" style={{ backgroundColor: light ? '#222' : 'var(--border)' }}>
    {items.map(s => (
      <div key={s.l} style={{ backgroundColor: light ? '#0C0C0C' : 'var(--surface)', padding: '2.25rem 1.25rem', textAlign: 'center' }}>
        <p className="font-display" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.3rem' }}>{s.n}</p>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-faint)', lineHeight: 1.6 }}>{s.l}</p>
      </div>
    ))}
  </div>
)

const Chapter = ({
  id, num, label, dark = false, alt = false, children,
}: {
  id: string; num: string; label: string; dark?: boolean; alt?: boolean; children: React.ReactNode
}) => (
  <section
    id={id}
    className="chapter"
    style={{ backgroundColor: dark ? '#0C0C0C' : alt ? 'var(--warm-white)' : 'var(--surface)' }}
  >
    <div className="chapter-inner">
      <p className="chapter-marker">Chapter {num} · {label}</p>
      {children}
    </div>
  </section>
)

/* ------------------------------------------------------------------- */
export default function LagosEdition() {
  const ref = useRef<HTMLDivElement>(null)

  /* Carousel state — Chapter 15 only (Chapter 14 is a single image) */
  const [bonaSlide, setBonaSlide] = useState(0)
  const [carouselPaused, setCarouselPaused] = useState(false)

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

  useEffect(() => {
    if (carouselPaused) return
    const id = setInterval(() => setBonaSlide(s => (s + 1) % 2), 5000)
    return () => clearInterval(id)
  }, [carouselPaused])

  return (
    <div ref={ref} className="edition-page">
      <ChapterNav chapters={chapters} />

      {/* ── HERO ── */}
      <header className="edition-hero">
        <div style={{ ...bg(images.ruckerpark.lagos), position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <div className="edition-hero-inner">
          <Link href="/rucker-africa" className="edition-back">← Rucker Park Africa</Link>
          <p className="section-label" style={{ marginTop: '1.5rem' }}>Chapter One</p>
          <h1 className="font-display" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem,7vw,5.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: '0.75rem' }}>
            Lagos 2026
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
            Rowe Park, Lagos, Nigeria — July 30, 2026
          </p>
          <p style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Sport. Culture. Education. Opportunity.
          </p>
          <div className="edition-hero-video">
            <VideoEmbed videoId={videos.recap} title="Rucker Park Africa — Lagos 2026 recap film" />
          </div>
        </div>
      </header>

      {/* ── 01 ── */}
      <Chapter id="ch-01" num="01" label="Origin">
        <div className="chapter-narrow">
          <Eyebrow>Lagos, Nigeria — July 30, 2026</Eyebrow>
          <H>From Harlem To Lagos</H>
          <P>
            Rucker Park Africa officially launched at Rowe Park in Lagos, marking the beginning of a new
            chapter connecting the cultural legacy of New York street basketball with youth development
            and opportunity across Africa.
          </P>
          <P delay={3}>
            Led by Nigerian-American professional basketball player E.J. Anosike, President of Rucker Park
            Africa and Chairman of the Anosike Cares Foundation, the inaugural activation brought together
            basketball, music, creators, education, youth employment, local businesses and community
            programming in one environment.
          </P>
          <P delay={4}>
            Nigeria was chosen as the starting point on purpose. The goal was never simply to stage an
            international basketball event in Lagos — it was to use the reach of sport and culture to build
            something that directly benefited young people as athletes, students, employees, creators and
            future professionals.
          </P>
          <Quote>
            Charity begins at home. Basketball and education have given me the opportunity to travel the
            world and build relationships across different countries and industries. For me, the
            responsibility is finding ways to bring some of that access back home and create opportunities
            for young people who may not have had them before.
          </Quote>
        </div>
      </Chapter>

      <MediaBreak src={images.ruckerpark.crowd} alt="Spectators packed around the court at Rowe Park, Lagos during the Rucker Park Africa activation" caption="Rowe Park at peak attendance" />

      {/* ── 02 ── */}
      <Chapter id="ch-02" num="02" label="Impact" dark>
        <div className="chapter-narrow" style={{ textAlign: 'center' }}>
          <Eyebrow>The Numbers</Eyebrow>
          <H light>The Impact In Numbers</H>
          <P light delay={2}>
            The first activation delivered measurable impact across youth engagement, employment,
            education, sport and community participation.
          </P>
        </div>
        <Stats items={impactStats} light />
        {videos.crowd && (
          <div className="chapter-narrow" style={{ marginTop: '3rem' }}>
            <VideoEmbed videoId={videos.crowd} title="Crowd and opening atmosphere — Rucker Park Africa Lagos 2026" />
          </div>
        )}
      </Chapter>

      {/* ── 03 ── */}
      <Chapter id="ch-03" num="03" label="Employment">
        <div className="chapter-split">
          <div>
            <Eyebrow>Opportunity Beyond The Court</Eyebrow>
            <H>150 Young Nigerians Went To Work</H>
            <P>
              One of the most important parts of the inaugural activation took place away from the
              competition. Approximately 150 short-term employment opportunities were created for Nigerian
              youth throughout the planning and execution of the event.
            </P>
            <P delay={3}>
              Young people worked across social-media marketing, photography, videography, event
              management, logistics, catering, media, promotions and operations. Local university students
              joined as ambassadors and members of the production and media teams.
            </P>
            <P delay={4}>
              A major sports and entertainment platform requires photographers, designers, broadcasters,
              marketers, producers, journalists, content creators, event managers, hospitality
              professionals, technology professionals and entrepreneurs — the economy around sport extends
              far beyond the players on the court.
            </P>
            <Quote>
              Everybody cannot become a professional basketball player, but basketball can still create a
              profession for thousands of people. We want young people to see the whole economy around
              sports and entertainment — not just the players on the court.
            </Quote>
          </div>
          <div className="reveal chapter-split-media">
            <div style={{ ...bg(images.ruckerpark.impact), aspectRatio: '4/5', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <div className="corner-accent" />
            </div>
          </div>
        </div>
        {videos.production && (
          <div className="chapter-narrow" style={{ marginTop: '3.5rem' }}>
            <VideoEmbed videoId={videos.production} title="Behind the scenes — production and setup" />
          </div>
        )}
      </Chapter>

      {/* ── 04 ── */}
      <Chapter id="ch-04" num="04" label="Education" alt>
        <div className="chapter-narrow">
          <Eyebrow>Education As A Core Pillar</Eyebrow>
          <H>The International University Pathway Program</H>
          <P>
            Education has always been central to the work of the Anosike Cares Foundation. During the
            inaugural activation, the Foundation announced the Anosike Cares Foundation International
            University Pathway Program.
          </P>
          <P delay={3}>
            The program is being developed to help connect qualified students with undergraduate and
            graduate educational opportunities through international universities and institutional
            relationships. Students also received technology and educational resources during the event,
            including 25 iPads distributed among young participants.
          </P>
          <P delay={4}>
            The larger vision is not simply to help students study abroad. The goal is to help young people
            gain education, networks, confidence and professional exposure that can expand what they are
            able to accomplish throughout their lives. Education and sport are not separate missions — they
            are two pathways toward the same goal.
          </P>
        </div>
      </Chapter>

      {/* ── 05 ── */}
      <Chapter id="ch-05" num="05" label="Girls & Young Women">
        <div className="chapter-split">
          <div className="reveal chapter-split-media">
            <div style={{ ...bg(images.ruckerpark.hope), aspectRatio: '4/5', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <div className="corner-accent" />
            </div>
          </div>
          <div>
            <Eyebrow>Investing In Girls And Young Women</Eyebrow>
            <H>Included From The Beginning</H>
            <P>
              A group of eight elementary-school girls under the age of 12 participated in a dedicated
              three-on-three basketball showcase. Each participant received an iPad as part of the
              Foundation&apos;s commitment to combining sports participation with educational opportunity.
            </P>
            <P delay={3}>
              A separate cohort of girls between the ages of 12 and 16 participated in a career-development
              conversation with Mrs. Ngozi Anosike, a Registered Nurse in the United States, introducing
              them to opportunities in healthcare, nursing and medicine while emphasising education and
              long-term professional development.
            </P>
            <P delay={4}>
              Mrs. Anosike contributed ₦1 million to participating tournament teams, including a collective
              ₦100,000 allocated to the girls&apos; team. Hon. Bobby Olisa of New York contributed ₦400,000
              toward the youth education component of the event.
            </P>
          </div>
        </div>
        {videos.girls && (
          <div className="chapter-narrow" style={{ marginTop: '3.5rem' }}>
            <VideoEmbed videoId={videos.girls} title="Girls' showcase and mentorship — Rucker Park Africa Lagos 2026" />
          </div>
        )}
      </Chapter>

      <MediaBreak src={images.ruckerpark.camp} alt="Young athletes competing during the Rucker Park Africa Lagos activation" caption="Sport was the entry point. Education and opportunity were the larger mission." />

      {/* ── 06 ── */}
      <Chapter id="ch-06" num="06" label="The Field" dark>
        <div className="chapter-narrow">
          <Eyebrow>The Competition</Eyebrow>
          <H light>Twelve Academies. Five Divisions. One Court.</H>
          <P light delay={2}>
            Rucker Park Africa was built to place grassroots academies, elite local players and established
            basketball figures inside the same environment on the same day. Twelve programs from across
            Lagos and beyond entered the inaugural competition.
          </P>
        </div>
        <div className="division-grid reveal">
          {divisions.map(d => (
            <div key={d.name} className="division-card">
              <p className="division-name">{d.name}</p>
              <ul className="division-teams">
                {d.teams.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Chapter>

      {/* ── 07 ── */}
      <Chapter id="ch-07" num="07" label="Dunk Contest">
        <div className="chapter-split">
          <div>
            <Eyebrow>FruitGuard Dunk Contest</Eyebrow>
            <H>Egbujor Moses</H>
            <P>
              The inaugural Dunk Contest brought together athletes from Lagos, Abuja and other parts of
              Nigeria, all competing for the chance to become the first Rucker Park Africa dunk champion.
              The contest was supported by FruitGuard with additional support from the Anosike Cares
              Foundation.
            </P>
            <P delay={3}>
              The champion was Egbujor Moses, a student-athlete from the NBA Academy in Saly, Senegal. Moses
              also competed in the adult division with Team Banire, making him one of the standout young
              athletes of the entire activation. His championship celebration became one of the memorable
              cultural moments of the day as Nigerian streamer CarterEfe joined the crowd in celebrating.
            </P>
            <Quote>
              Moses is a very talented player and has a bright future ahead of him. I wish him a lot of
              success as he continues developing.
            </Quote>
          </div>
          <div className="reveal chapter-split-media">
            <div style={{ ...bg(images.ruckerpark.fruitguard), aspectRatio: '4/5', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <div className="corner-accent" />
            </div>
          </div>
        </div>
        {videos.moses && (
          <div className="chapter-narrow" style={{ marginTop: '3.5rem' }}>
            <VideoEmbed videoId={videos.moses} title="Egbujor Moses — championship dunk" />
          </div>
        )}
      </Chapter>

      {/* ── 08 ── */}
      <Chapter id="ch-08" num="08" label="Three-Point" alt>
        <div className="chapter-split">
          <div className="reveal chapter-split-media">
            <div style={{ ...bg(images.ruckerpark.five), aspectRatio: '4/5', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <div className="corner-accent" />
            </div>
          </div>
          <div>
            <Eyebrow>Three-Point Championship</Eyebrow>
            <H>Oyegunle Yusuf</H>
            <P>
              The three-point competition was supported by the Anosike Cares Foundation, with ₦500,000
              awarded to the winner. Lagos youth Oyegunle Yusuf delivered one of the best shooting
              performances of the event.
            </P>
            <P delay={3}>
              With the championship on the line, Yusuf made six of his final nine three-point attempts to
              capture the title.
            </P>
            <Quote>
              Nigeria has a lot of talent. In moments like this, you never know who is going to step up
              under pressure. That is part of what makes creating these platforms important.
            </Quote>
          </div>
        </div>
        {videos.yusuf && (
          <div className="chapter-narrow" style={{ marginTop: '3.5rem' }}>
            <VideoEmbed videoId={videos.yusuf} title="Oyegunle Yusuf — final shooting sequence" />
          </div>
        )}
      </Chapter>

      {/* ── 09 ── */}
      <Chapter id="ch-09" num="09" label="Under-18">
        <div className="chapter-narrow">
          <Eyebrow>Under-18 Championship</Eyebrow>
          <H>Anosike Basketball Club</H>
          <P>
            Youth development was one of the major reasons Rucker Park Africa was created. The Under-18
            division gave developing athletes an opportunity to compete in front of a larger audience while
            experiencing the environment and expectations of an international basketball platform. The
            division was supported by American Cola Nigeria, which pledged ₦1 million to the championship
            team.
          </P>
          <P delay={3}>
            Assembled only weeks before the tournament and coached by E.J. Anosike alongside Coach Adekoya,
            known throughout Lagos as Coach Titi, the team built its chemistry through consistent training
            and carried it into the championship game.
          </P>
        </div>

        <div className="roster-block reveal">
          <p className="roster-label">Championship Roster</p>
          <ul className="roster-grid">
            {roster.map(name => <li key={name}>{name}</li>)}
          </ul>
        </div>

        <div className="chapter-narrow">
          <Quote>
            This was a special group of young men. They came together only a few weeks before the
            tournament and committed themselves to training. Their dedication to each other showed when it
            mattered most.
          </Quote>
        </div>

        {videos.u18 && (
          <div className="chapter-narrow" style={{ marginTop: '3rem' }}>
            <VideoEmbed videoId={videos.u18} title="Under-18 championship highlights" />
          </div>
        )}
      </Chapter>

      {/* ── 10 ── */}
      <Chapter id="ch-10" num="10" label="U-18 MVP" dark>
        <div className="chapter-split">
          <div>
            <Eyebrow>Under-18 Championship MVP</Eyebrow>
            <H light>Damilare Salawu</H>
            <Stats items={[{ n: '15', l: 'Points' }, { n: '4', l: 'Assists' }, { n: '4/5', l: 'From Three' }]} light />
            <div style={{ marginTop: '2rem' }}>
              <P light delay={3}>
                Guard Damilare Salawu delivered one of the standout performances of the tournament. His
                signature moment came late in the fourth quarter — a deep three-pointer from near half
                court at the end of the shot clock that solidified the lead and carried Team Ano Cares to
                the U-18 title.
              </P>
            </div>
            <Quote light>
              Damilare loves the game and challenged himself throughout our training. His performance showed
              not only the player he is today, but the player he has the potential to become.
            </Quote>
          </div>
          <div className="reveal chapter-split-media">
            <figure style={{ margin: 0 }}>
              <div style={{ ...bg(images.ruckerpark.mvp), aspectRatio: '4/3', backgroundColor: '#1a1a1a', position: 'relative' }}>
                <div className="corner-accent" />
              </div>
              <figcaption style={{ fontSize: '0.72rem', color: 'var(--text-faint)', lineHeight: 1.7, marginTop: '1rem', fontStyle: 'italic' }}>
                U-18 Championship Game MVP Damilare Salawu with Rucker Park Africa President E.J. Anosike
                and Deputy Vice President of the Anosike Cares Foundation, Mrs. Ngozi Anosike.
              </figcaption>
            </figure>
          </div>
        </div>
        {videos.damilare && (
          <div className="chapter-narrow" style={{ marginTop: '3.5rem' }}>
            <VideoEmbed videoId={videos.damilare} title="Damilare Salawu — deep three-pointer" />
          </div>
        )}
      </Chapter>

      {/* ── 11 ── */}
      <Chapter id="ch-11" num="11" label="Unlimited Division">
        <div className="chapter-split">
          <div className="reveal chapter-split-media">
            <div style={{ ...bg(images.ruckerpark.two), aspectRatio: '4/5', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <div className="corner-accent" />
            </div>
          </div>
          <div>
            <Eyebrow>The Unlimited Division</Eyebrow>
            <H>Raptors Basketball Academy</H>
            <P>
              The Unlimited Division was created for elite basketball players and established local talent,
              with teams competing for a ₦2 million championship prize supported by Ano Energy Corporation.
              The inaugural championship game featured Rowe Park against Raptors Basketball Academy.
            </P>
            <P delay={3}>
              Raptors Basketball Academy is led by respected Nigerian coach Charles Ibeziako, who has spent
              decades developing homegrown players and helping athletes reach educational and professional
              opportunities. Raptors emerged as the first Rucker Park Africa Unlimited Division champion.
            </P>
          </div>
        </div>
      </Chapter>

      {/* ── 12 ── */}
      <Chapter id="ch-12" num="12" label="Unlimited MVP" alt>
        <div className="chapter-narrow">
          <Eyebrow>Unlimited Division MVP</Eyebrow>
          <H>Jamelo</H>
          <P>
            One of the breakout performers of the tournament was Raptors guard Jamelo. His athleticism,
            defensive intensity and competitiveness helped lead Raptors to an overtime victory over Rowe
            Park in the championship game. Dunks, steals, blocks and high-energy plays made him one of the
            event&apos;s most memorable performers.
          </P>
          <Quote>
            I first saw Jamelo earlier that week during a private open gym at National Stadium. His energy
            and competitiveness immediately stood out. Rucker Park Africa gave him another platform to show
            people what he can do, and he took advantage of it.
          </Quote>
        </div>
        {videos.jamelo && (
          <div className="chapter-narrow" style={{ marginTop: '3rem' }}>
            <VideoEmbed videoId={videos.jamelo} title="Jamelo — Unlimited Division highlights" />
          </div>
        )}
      </Chapter>

      {/* ── 13 ── */}
      <Chapter id="ch-13" num="13" label="King of Lagos" dark>
        <div className="chapter-narrow">
          <Eyebrow>The Main Event</Eyebrow>
          <H light>King of Lagos</H>
          <P light delay={2}>
            The evening ultimately returned to one of the purest traditions of street basketball. One
            player. One opponent. One court. Rucker Park&apos;s identity was built through generations of
            outdoor basketball in Harlem, where players earned respect through competition, personality and
            performance. The inaugural King of Lagos tournament brought that same spirit to Rowe Park.
          </P>
          <P light delay={3}>
            Sixteen competitors entered. Only one left as champion — and the title stayed home. David
            Edward, known throughout the Lagos basketball community as &ldquo;Railway,&rdquo; emerged as the inaugural
            King of Lagos. A Rowe Park veteran with a long-standing reputation locally, Railway competed in
            front of his home crowd and used his toughness, skill and experience to capture the
            championship, receiving ₦1.5 million as the inaugural champion.
          </P>
          <P light delay={4}>
            The first King of Lagos was crowned on the same court where he had built his reputation.
          </P>
        </div>
        <div className="video-pair chapter-narrow">
          {videos.kingMontage && <VideoEmbed videoId={videos.kingMontage} title="King of Lagos — one-on-one montage" />}
          {videos.railway && <VideoEmbed videoId={videos.railway} title="Railway — final possession and celebration" />}
        </div>
      </Chapter>

      <MediaBreak src={images.ruckerpark.king} alt="One-on-one competition during the King of Lagos tournament at Rowe Park" caption="King of Lagos — the inaugural final" />

      {/* ── 14 ── single image, no carousel ── */}
      <Chapter id="ch-14" num="14" label="Honouring">
        <div className="chapter-split">
          <div>
            <Eyebrow>Honouring Legacy</Eyebrow>
            <H>Dr. Oderah &ldquo;O.D.&rdquo; Anosike</H>
            <P>
              Rucker Park Africa was created not only to recognise the next generation, but also to honour the people whose careers have helped create pathways for those who follow. The inaugural Rucker Park Africa Legacy Award was presented to Dr. Oderah &ldquo;O.D.&rdquo; Anosike, a retired Nigerian-American professional basketball player.

            </P>
            <P delay={3}>
              Dr. Anosike completed a 13-year professional career before retiring in 2026. His career included international championships and a distinguished collegiate career at Siena College, where he led NCAA Division I basketball in rebounding for two consecutive seasons. The Legacy Award recognised his dedication to basketball and the example his career provides for younger athletes.

            </P>
          </div>
          <div className="reveal chapter-split-media">
            <div style={{ ...bg(images.ruckerpark.legacy2), aspectRatio: '4/3', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <div className="corner-accent" />
            </div>
          </div>
        </div>
      </Chapter>

      {/* ── 15 ── carousel retained ── */}
      <Chapter id="ch-15" num="15" label="Global Community" alt>
        <div className="chapter-split">
          <div className="reveal chapter-split-media">
            <ImageCarousel
              imgs={[images.ruckerpark.collabs, images.ruckerpark.bona]}
              alt="Philadelphia 76ers player Adem Bona at Rucker Park Africa Lagos 2026"
              slide={bonaSlide}
              onSelect={setBonaSlide}
              onPause={() => setCarouselPaused(true)}
              onResume={() => setCarouselPaused(false)}
            />
          </div>
          <div>
            <Eyebrow>A Global Basketball Community</Eyebrow>
            <H>Adem Bona, Philadelphia 76ers</H>
            <P>
              The inaugural activation welcomed Philadelphia 76ers player Adem Bona, bringing an additional
              international professional basketball presence to the event.
            </P>
            <P delay={3}>
              His attendance reflected one of the larger ambitions behind Rucker Park Africa: creating
              environments where grassroots players, elite youth, professional athletes and internationally
              recognised basketball figures can share the same space. For a young athlete, sometimes simply
              seeing the next level up close can change what feels possible.
            </P>
          </div>
        </div>
      </Chapter>

      {/* ── 16 ── culture, with embedded performance video + footnotes ── */}
      <Chapter id="ch-16" num="16" label="Culture" dark>
        <div className="chapter-narrow">
          <Eyebrow>When Basketball Meets Culture</Eyebrow>
          <H light>Basketball Created The Gathering Point</H>
          <P light delay={2}>
            Rucker Park has never been only about basketball. Its history is also connected to music,
            fashion, personality, entertainment and community — and the Lagos activation carried that same
            philosophy into Nigeria.
          </P>
          <P light delay={3}>
            International artist Jumabee
            <a href="#fn-1" id="fn-ref-1" className="footnote-ref" aria-describedby="footnotes">1</a>{' '}
            headlined the event, closing the evening with a live performance on the court at Rowe Park.
          </P>
        </div>

        {videos.jumabee && (
          <div className="chapter-narrow" style={{ margin: '2.5rem 0 3rem' }}>
            <VideoEmbed videoId={videos.jumabee} title="Jumabee live performance — Rucker Park Africa Lagos 2026" />
            <p className="video-caption">
              Jumabee performing at Rowe Park, Lagos — 30 July 2026.
            </p>
          </div>
        )}

        <div className="chapter-narrow">
          <P light delay={2}>
            Nigerian creators and entertainers CarterEfe
            <a href="#fn-2" id="fn-ref-2" className="footnote-ref">2</a>, Kolu Wahala and Destined Kid were
            also in attendance. Their participation helped create an atmosphere that reflected modern youth
            culture rather than a traditional sporting event.
          </P>
          <p className="reveal reveal-delay-3" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.1rem', marginTop: '2rem' }}>
            Music, creators, fashion, entertainment and digital culture expanded the experience.
          </p>

          <div className="footnotes reveal" id="footnotes">
            <p className="footnotes-label">Notes</p>
            <ol>
              <li id="fn-1">
                Jumabee is a Nigerian recording artist and performer whose work spans Afrobeats and
                contemporary African pop. He headlined the inaugural Rucker Park Africa activation.{' '}
                <a href="#fn-ref-1" aria-label="Back to reference 1">↩</a>
              </li>
              <li id="fn-2">
                CarterEfe is a Nigerian streamer, comedian and digital creator. His on-court reaction to
                the dunk contest final became one of the most widely shared moments from the day.{' '}
                <a href="#fn-ref-2" aria-label="Back to reference 2">↩</a>
              </li>
            </ol>
          </div>
        </div>
      </Chapter>

      {/* ── 17 ── */}
      <Chapter id="ch-17" num="17" label="Local Business">
        <div className="chapter-split">
          <div>
            <Eyebrow>Creating Value For Local Businesses</Eyebrow>
            <H>The Value Should Stay In The Community</H>
            <P>
              An important part of the Rucker Park Africa model is making sure local businesses participate
              in the value created around the platform. The inaugural activation incorporated Ano Energy
              Corporation, American Cola Nigeria and FruitGuard across competition and community
              programming, while BYG, FruitGuard and City Pub collectively provided food and beverage
              engagement for approximately 300 young people.
            </P>
            <P delay={3}>
              FruitGuard supplied rehydration products to approximately 100 participating athletes. Located
              at OPIC Plaza in Lagos, FruitGuard is a health and wellness restaurant offering nutritious
              food, beverages and recovery-focused options for health-conscious customers and athletes, and
              its support of Rucker Park Africa reflected the brand&apos;s commitment to wellness, performance
              and community engagement.
            </P>
            <P delay={4}>
              The event also received coverage through a partner Chinese media studio, extending visibility
              beyond Africa. The philosophy is straightforward: when global platforms enter African markets,
              local businesses and communities should share in the opportunities being created.
            </P>
          </div>
          <div className="reveal chapter-split-media">
            <div style={{ ...bg(images.ruckerpark.prizes), aspectRatio: '4/5', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <div className="corner-accent" />
            </div>
          </div>
        </div>

        <div className="sponsor-band reveal">
          <img
            src={images.ruckerpark.sponsors}
            alt="Rucker Park Africa Lagos 2026 sponsors and partners"
            className="sponsor-image"
            loading="lazy"
          />
        </div>
        <div className="partner-band reveal">
          {eventPartners.map(name => <span key={name}>{name}</span>)}
        </div>
      </Chapter>

      {/* ── 18 ── */}
      <Chapter id="ch-18" num="18" label="Direct Value" dark>
        <div className="chapter-narrow" style={{ textAlign: 'center' }}>
          <Eyebrow>₦11 Million In Direct Value</Eyebrow>
          <H light>The Value Did Not Disappear When The Lights Turned Off</H>
          <P light delay={2}>
            More than ₦6 million was distributed through competition prize money, alongside approximately
            ₦5 million in additional goods and participant support — roughly ₦11 million in direct value
            distributed in a single day.
          </P>
          <P light delay={3}>
            That value came alongside employment, educational resources, athlete exposure, community
            programming and international media visibility. For the Foundation, this is what makes the model
            important: something should remain in the community.
          </P>
        </div>
        <Stats items={[
          { n: '₦6M+', l: 'Prize Money' },
          { n: '₦5M', l: 'Goods & Support' },
          { n: '₦11M', l: 'Total Participant Value' },
        ]} light />
      </Chapter>

      {/* ── 19 ── */}
      <Chapter id="ch-19" num="19" label="Beyond">
        <div className="chapter-narrow">
          <Eyebrow>More Than An Event</Eyebrow>
          <H>Lagos Was The First Chapter</H>
          <P>
            The Lagos activation marked Phase One of a broader global youth initiative led by the Anosike
            Cares Foundation in partnership with Rucker Park Africa. Future programming can use basketball,
            football, athletics and other sports alongside music, entertainment, creators, education,
            entrepreneurship and cultural exchange.
          </P>
          <P delay={3}>
            The long-term ambition is to build programs that move across communities while remaining
            authentic to the people they serve — working with local athletes, coaches, schools, creators,
            businesses, universities and communities, then using international relationships to bring
            additional exposure, knowledge and opportunity into the environment.
          </P>

          <div className="reveal statement-block">
            <p>
              A young player received a platform. A student received technology. A photographer received
              work. A young girl was introduced to a professional career. A creator gained content. A local
              business reached new people. A community came together.
            </p>
          </div>

          <Quote>
            Basketball gave me a platform. Education gave me the tools to navigate the world. The goal now
            is to use those experiences and relationships to help create access for other young people.
          </Quote>

          <p className="reveal" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.15rem', textAlign: 'center', marginTop: '2.5rem' }}>
            The work continues.
          </p>
        </div>
      </Chapter>

      <MediaBreak src={images.ruckerpark.beacon} alt="E.J. Anosike on court with young participants and the crowd behind him at Rowe Park, Lagos" caption="Lagos was the first chapter." />

      {/* ── GALLERY ── */}
      <section className="chapter" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="chapter-inner">
          <div className="chapter-narrow" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow>Gallery</Eyebrow>
            <H>Lagos 2026 In Full</H>
          </div>
          <Lightbox items={galleryItems} />
        </div>
      </section>

      {/* ── 20 ── */}
      <Chapter id="ch-20" num="20" label="Summary" dark>
        <div className="chapter-narrow" style={{ textAlign: 'center' }}>
          <Eyebrow>Official Impact Summary</Eyebrow>
          <H light>Rucker Park Africa — Lagos 2026</H>
        </div>
        <Stats items={impactStats} light />
        <div className="chapter-narrow" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="/downloads/rucker-park-africa-lagos-2026-impact-summary.pdf"
            className="btn-primary"
            download
          >
            Download Impact Summary (PDF)
          </a>
        </div>
      </Chapter>

      {/* ── FOOT ── */}
      <section className="edition-foot">
        <div className="chapter-narrow" style={{ textAlign: 'center', margin: '0 auto' }}>
          <p className="section-label reveal">Chapter Two</p>
          <h2 className="font-display reveal reveal-delay-1" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
            To Be Announced
          </h2>
          <p className="reveal reveal-delay-2" style={{ color: 'var(--text-faint)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            The entry point may change depending on the community. The mission remains the same.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/donate" className="btn-primary">Support The Mission</Link>
            <Link href="/partners" className="btn-outline">Partner With Us</Link>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <Link href="/rucker-africa" className="edition-back">← Back to Rucker Park Africa</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
