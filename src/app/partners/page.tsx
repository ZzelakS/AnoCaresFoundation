import type { Metadata } from 'next'
import PartnersContent from './PartnersContent'

export const metadata: Metadata = {
  title: 'Partner With Us | Anosike Cares Foundation',
  description:
    'Partnership opportunities across youth development, basketball camps, educational pathways, cultural exchange, scholarships, community outreach and economic empowerment.',
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Partner With Us',
    description:
      'Partnership opportunities across youth development, basketball camps, educational pathways, cultural exchange, scholarships, community outreach and economic empowerment.',
    url: '/partners',
    images: [{ url: '/images/leadership/leadership-3.jpg', width: 1200, height: 630, alt: 'Partner With Us' }],
  },
}

export default function Page() {
  return <PartnersContent />
}
