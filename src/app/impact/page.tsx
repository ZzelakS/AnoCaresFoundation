import type { Metadata } from 'next'
import ImpactContent from './ImpactContent'

export const metadata: Metadata = {
  title: 'Our Impact | Anosike Cares Foundation',
  description:
    'Progress measured in people and possibility. Youth development, education, mentorship and community work across Nigeria, South Korea, the Philippines, China and the United States.',
  alternates: { canonical: '/impact' },
  openGraph: {
    title: 'Our Impact',
    description:
      'Progress measured in people and possibility. Youth development, education, mentorship and community work across Nigeria, South Korea, the Philippines, China and the United States.',
    url: '/impact',
    images: [{ url: '/images/kids/kids-1.jpeg', width: 1200, height: 630, alt: 'Our Impact' }],
  },
}

export default function Page() {
  return <ImpactContent />
}
