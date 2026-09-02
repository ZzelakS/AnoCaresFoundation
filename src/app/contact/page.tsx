import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Anosike Cares Foundation',
  description:
    'Get in touch with the Anosike Cares Foundation about partnerships, media enquiries, speaking engagements, programme participation or general questions.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact the Foundation',
    description:
      'Get in touch with the Anosike Cares Foundation about partnerships, media enquiries, speaking engagements, programme participation or general questions.',
    url: '/contact',
    images: [{ url: '/images/hero/hero-1.jpg', width: 1200, height: 630, alt: 'Contact the Foundation' }],
  },
}

export default function Page() {
  return <ContactContent />
}
