import { posts } from '@/lib/news'

const SITE = 'https://anocaresfoundation.org'

export async function GET() {
  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${SITE}/news/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/news/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category><![CDATA[${p.category}]]></category>
      <description><![CDATA[${p.excerpt}]]></description>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Anosike Cares Foundation — Newsroom</title>
  <link>${SITE}/news</link>
  <description>Announcements, press releases, programme news and updates.</description>
  <language>en</language>${items}
</channel></rss>`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
