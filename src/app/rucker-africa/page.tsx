import type { Metadata } from 'next'
import RuckerHub from './RuckerHub'

export const metadata: Metadata = {
  title: 'Rucker Park Africa | Anosike Cares Foundation',
  description:
    'Rucker Park Africa is the flagship youth development platform of the Anosike Cares Foundation, connecting basketball, education, culture and international opportunity across Africa.',
  alternates: { canonical: '/rucker-africa' },
  openGraph: {
    title: 'Rucker Park Africa',
    description:
      'Sport. Culture. Education. Opportunity. The flagship youth development platform of the Anosike Cares Foundation.',
    url: '/rucker-africa',
    images: [{ url: '/images/ruckerpark/main.jpg', width: 1200, height: 630, alt: 'Rucker Park Africa' }],
  },
}

export default function Page() {
  return <RuckerHub />
}
