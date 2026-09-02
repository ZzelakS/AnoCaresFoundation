import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About E.J. Anosike | Anosike Cares Foundation',
  description:
    'Educated to Lead. Built to Win. Committed to Serve. The journey of E.J. Anosike — scholar-athlete, professional basketball champion, United Nations delegate and founder of the Anosike Cares Foundation.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About E.J. Anosike',
    description:
      'Educated to Lead. Built to Win. Committed to Serve. The journey of E.J. Anosike — scholar-athlete, professional basketball champion, United Nations delegate and founder of the Anosike Cares Foundation.',
    url: '/about',
    images: [{ url: '/images/leadership/leadership-1.jpeg', width: 1200, height: 630, alt: 'About E.J. Anosike' }],
  },
}

export default function Page() {
  return <AboutContent />
}
