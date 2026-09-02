import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/news'

export const metadata: Metadata = {
  title: 'Newsroom | Anosike Cares Foundation',
  description:
    'Announcements, press releases, programme news and updates from the Anosike Cares Foundation and Rucker Park Africa.',
  alternates: { canonical: '/news' },
  openGraph: {
    title: 'Newsroom — Anosike Cares Foundation',
    description: 'Announcements, press releases, programme news and updates.',
    url: '/news',
  },
}

export default function NewsIndex() {
  return (
    <div>
      <section className="news-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="section-label">Newsroom</p>
          <h1 className="font-display" style={{ fontFamily:'var(--font-playfair)', fontSize:'clamp(2.5rem,5vw,4rem)', fontWeight:700, color:'#fff', lineHeight:1.1 }}>
            Announcements, Press &amp; Updates
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor:'var(--surface)', padding:'clamp(4rem,8vw,7rem) 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <p style={{ color:'var(--text-muted)', textAlign:'center' }}>No posts published yet.</p>
          ) : (
            <div className="news-grid">
              {posts.map(post => (
                <Link key={post.slug} href={`/news/${post.slug}`} className="news-card">
                  <div className="news-card-media">
                    <img src={post.image} alt={post.imageAlt} loading="lazy" />
                  </div>
                  <div className="news-card-body">
                    <div className="news-card-meta">
                      <span className="news-tag">{post.category}</span>
                      <time dateTime={post.date}>{post.dateLabel}</time>
                    </div>
                    <h2 className="font-display news-card-title">{post.title}</h2>
                    <p className="news-card-excerpt">{post.excerpt}</p>
                    <span className="news-card-cta">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
