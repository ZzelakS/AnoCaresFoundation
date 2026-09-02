import type { Metadata } from 'next'
import SupportContent from './SupportContent'

export const metadata: Metadata = {
  title: 'Support The Mission | Anosike Cares Foundation',
  description:
    'Invest in opportunity. Support educational pathways, leadership programmes and community impact, or reach out directly about partnering with the Foundation.',
  alternates: { canonical: '/donate' },
  openGraph: {
    title: 'Support The Mission',
    description:
      'Invest in opportunity. Support educational pathways, leadership programmes and community impact, or reach out directly about partnering with the Foundation.',
    url: '/donate',
    images: [{ url: '/images/kids/kids-2.jpeg', width: 1200, height: 630, alt: 'Support The Mission' }],
  },
}

export default function Page() {
  return <SupportContent />
}
