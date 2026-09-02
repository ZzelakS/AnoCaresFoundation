/* ── NEWSROOM CONTENT ──────────────────────────────────────────────
   Each post is an entry in this array. To publish:
     1. Add an object below (newest first — order here is display order)
     2. Put the featured image in /public/images/news/
     3. Write `body` as an array of blocks (see types)
   No CMS, no build step, no monthly cost. A non-developer can copy an
   existing entry and edit the text.
   ------------------------------------------------------------------ */

export type Category = 'Press Release' | 'Program Announcement' | 'In The Media' | 'Foundation Update'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'stats'; items: { n: string; l: string }[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[] }

export type Post = {
  slug: string
  category: Category
  date: string          // ISO — used for <time> and JSON-LD
  dateLabel: string     // human-readable
  title: string
  standfirst: string
  excerpt: string
  image: string
  imageAlt: string
  body: Block[]
  related?: { label: string; href: string }[]
}

export const posts: Post[] = [
  {
    slug: 'rucker-park-africa-launches-lagos',
    category: 'Press Release',
    date: '2026-07-30',
    dateLabel: 'July 30, 2026',
    title: 'From Harlem To Lagos: Rucker Park Africa Launches In Nigeria',
    standfirst:
      'The inaugural activation at Rowe Park brought basketball, music, creators, education, youth employment and local business into a single environment — distributing approximately ₦11 million in direct value in one day.',
    excerpt:
      'Rucker Park Africa officially launched at Rowe Park in Lagos on 30 July 2026, connecting the cultural legacy of New York street basketball with youth development across Africa.',
    image: '/images/ruckerpark/lagos.jpg',
    imageAlt: 'Rowe Park, Lagos during the inaugural Rucker Park Africa activation',
    body: [
      { type: 'p', text: 'LAGOS, NIGERIA — On 30 July 2026, Rucker Park Africa officially launched at Rowe Park in Lagos, marking the beginning of a new chapter connecting the cultural legacy of New York street basketball with youth development and opportunity across Africa.' },
      { type: 'p', text: 'Led by Nigerian-American professional basketball player E.J. Anosike, President of Rucker Park Africa and Chairman of the Anosike Cares Foundation, the inaugural activation brought together basketball, music, creators, education, youth employment, local businesses and community programming in one environment.' },
      { type: 'p', text: 'Nigeria was intentionally chosen as the starting point. The objective was to use the reach of sport and culture to create something that directly benefited young people as athletes, students, employees, creators and future professionals.' },
      { type: 'stats', items: [
        { n: '565',    l: 'Attendees In Person' },
        { n: '70%',    l: 'Under Age 25' },
        { n: '150',    l: 'Youth Jobs Created' },
        { n: '100+',   l: 'Athletes Competing' },
        { n: '5,000+', l: 'Livestream Viewers' },
        { n: '₦11M',   l: 'Direct Value Delivered' },
      ]},
      { type: 'quote', text: 'Charity begins at home. Basketball and education have given me the opportunity to travel the world and build relationships across different countries and industries. For me, the responsibility is finding ways to bring some of that access back home and create opportunities for young people who may not have had them before.', cite: 'E.J. Anosike, President, Rucker Park Africa' },
      { type: 'h2', text: 'Beyond The Competition' },
      { type: 'p', text: 'Approximately 150 short-term employment opportunities were created for Nigerian youth across social-media marketing, photography, videography, event management, logistics, catering, media, promotions and operations. Local university students joined as ambassadors and members of the production and media teams.' },
      { type: 'p', text: 'The Foundation also announced the Anosike Cares Foundation International University Pathway Program, and distributed 25 iPads and educational resources among young participants. Girls and young women were included in programming from the outset, with a dedicated three-on-three showcase and a career-development conversation led by Mrs. Ngozi Anosike, a Registered Nurse in the United States.' },
      { type: 'h2', text: 'The Full Record' },
      { type: 'p', text: 'The complete account of the Lagos activation — all twenty chapters, competition results, photography and video — is published on the Rucker Park Africa Lagos 2026 edition page.' },
    ],
    related: [
      { label: 'Read the full Lagos 2026 edition', href: '/rucker-africa/lagos-2026' },
      { label: 'About Rucker Park Africa', href: '/rucker-africa' },
    ],
  },

  /* ── TEMPLATE — duplicate this block for the next post ──
  {
    slug: 'international-university-pathway-program',
    category: 'Program Announcement',
    date: '2026-08-01',
    dateLabel: 'August 1, 2026',
    title: '',
    standfirst: '',
    excerpt: '',
    image: '/images/news/.jpg',
    imageAlt: '',
    body: [
      { type: 'p', text: '' },
    ],
  },
  ── */
]

export const categories: Category[] = [
  'Press Release',
  'Program Announcement',
  'In The Media',
  'Foundation Update',
]

export function getPost(slug: string) {
  return posts.find(p => p.slug === slug)
}

export const MEDIA_CONTACT = {
  name: 'Anosike Cares Foundation',
  email: 'info@anocaresfoundation.org',
  line: 'For media enquiries, interview requests or press materials, contact the Foundation directly.',
}
