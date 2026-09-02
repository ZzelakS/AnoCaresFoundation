import type { Metadata } from 'next'
import FoundationContent from './FoundationContent'

export const metadata: Metadata = {
  title: 'The Foundation | Anosike Cares Foundation',
  description:
    'Anosike Cares Foundation is a global human development organization expanding opportunity through education, leadership development, food security, entrepreneurship, cultural exchange and sport.',
  alternates: { canonical: '/foundation' },
  openGraph: {
    title: 'Anosike Cares Foundation',
    description:
      'Anosike Cares Foundation is a global human development organization expanding opportunity through education, leadership development, food security, entrepreneurship, cultural exchange and sport.',
    url: '/foundation',
    images: [{ url: '/images/kids/kids-1.jpeg', width: 1200, height: 630, alt: 'Anosike Cares Foundation' }],
  },
}

export default function Page() {
  return <FoundationContent />
}
