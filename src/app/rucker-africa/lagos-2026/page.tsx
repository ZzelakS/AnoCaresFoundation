import type { Metadata } from 'next'
import LagosEdition from './LagosEdition'

export const metadata: Metadata = {
  title: 'Lagos 2026 — Rucker Park Africa | Anosike Cares Foundation',
  description:
    'The inaugural Rucker Park Africa activation at Rowe Park, Lagos on 30 July 2026: 565 attendees, 150 youth jobs, 100+ athletes and approximately ₦11 million in direct value delivered in a single day.',
  alternates: { canonical: '/rucker-africa/lagos-2026' },
  openGraph: {
    title: 'Lagos 2026 — Rucker Park Africa',
    description:
      'Basketball, music, creators, education, youth employment and local business in one environment. The full record of the inaugural Rucker Park Africa activation.',
    url: '/rucker-africa/lagos-2026',
    type: 'article',
    images: [{ url: '/images/ruckerpark/lagos.jpg', width: 1200, height: 630, alt: 'Rucker Park Africa at Rowe Park, Lagos' }],
  },
}

export default function Page() {
  return <LagosEdition />
}
