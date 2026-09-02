import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost, MEDIA_CONTACT } from '@/lib/news'

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return { title: 'Not found' }
  return {
    title: `${post.title} | Anosike Cares Foundation`,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/news/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
  }
}

export default function Article({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Anosike Cares Foundation' },
    publisher: {
      '@type': 'Organization',
      name: 'Anosike Cares Foundation',
      logo: { '@type': 'ImageObject', url: '/images/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `/news/${post.slug}` },
  }

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="article-head">
        <div className="article-inner">
          <Link href="/news" className="edition-back">← Newsroom</Link>
          <div className="news-card-meta" style={{ marginTop:'1.5rem' }}>
            <span className="news-tag">{post.category}</span>
            <time dateTime={post.date}>{post.dateLabel}</time>
          </div>
          <h1 className="font-display article-title">{post.title}</h1>
          <p className="article-standfirst">{post.standfirst}</p>
        </div>
      </header>

      <figure className="article-featured">
        <img src={post.image} alt={post.imageAlt} />
      </figure>

      <div className="article-body">
        <div className="article-inner">
          {post.body.map((block, i) => {
            switch (block.type) {
              case 'h2':
                return <h2 key={i} className="font-display article-h2">{block.text}</h2>
              case 'p':
                return <p key={i} className="article-p">{block.text}</p>
              case 'list':
                return (
                  <ul key={i} className="article-list">
                    {block.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                )
              case 'quote':
                return (
                  <blockquote key={i} className="pull-quote">
                    <p className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.05rem,1.8vw,1.3rem)', fontStyle:'italic', color:'var(--heading)', lineHeight:1.6, marginBottom:'0.75rem' }}>
                      {block.text}
                    </p>
                    <cite style={{ fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', fontStyle:'normal' }}>
                      — {block.cite}
                    </cite>
                  </blockquote>
                )
              case 'stats':
                return (
                  <div key={i} className="stat-grid" style={{ backgroundColor:'var(--border)', margin:'2.5rem 0' }}>
                    {block.items.map(s => (
                      <div key={s.l} style={{ backgroundColor:'var(--surface)', padding:'2rem 1.25rem', textAlign:'center' }}>
                        <p className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:700, color:'var(--gold)' }}>{s.n}</p>
                        <p style={{ fontSize:'0.62rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-faint)', marginTop:'0.3rem' }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                )
              case 'image':
                return (
                  <figure key={i} className="article-figure">
                    <img src={block.src} alt={block.alt} loading="lazy" />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                  </figure>
                )
            }
          })}

          {post.related && post.related.length > 0 && (
            <div className="article-related">
              <p className="section-label">Related</p>
              <ul>
                {post.related.map(r => (
                  <li key={r.href}><Link href={r.href}>{r.label} →</Link></li>
                ))}
              </ul>
            </div>
          )}

          <div className="article-boilerplate">
            <p className="section-label">Media Contact</p>
            <p>
              {MEDIA_CONTACT.line}{' '}
              <a href={`mailto:${MEDIA_CONTACT.email}`} style={{ color:'var(--gold)', textDecoration:'none' }}>
                {MEDIA_CONTACT.email}
              </a>
            </p>
            <p style={{ marginTop:'1rem' }}>
              The Anosike Cares Foundation is a global human development organization working across
              education, leadership development, youth development, entrepreneurship, cultural exchange
              and community resilience.
            </p>
          </div>

          <div style={{ textAlign:'center', marginTop:'3rem' }}>
            <Link href="/news" className="edition-back">← Back to Newsroom</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
