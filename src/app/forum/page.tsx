import type { Metadata } from 'next'
import ForumContent from './ForumContent'

export const metadata: Metadata = {
  title: 'Global Opportunity Forum | Anosike Cares Foundation',
  description:
    'Connecting leaders from government, education, business, sport, philanthropy and international development — transforming conversation into collaboration.',
  alternates: { canonical: '/forum' },
  openGraph: {
    title: 'Global Opportunity Forum',
    description:
      'Connecting leaders from government, education, business, sport, philanthropy and international development — transforming conversation into collaboration.',
    url: '/forum',
    images: [{ url: '/images/leadership/leadership-2.jpg', width: 1200, height: 630, alt: 'Global Opportunity Forum' }],
  },
}

export default function Page() {
  return <ForumContent />
}
