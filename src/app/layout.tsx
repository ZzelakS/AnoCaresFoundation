import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://anocaresfoundation.org'),
  title: 'Anosike Cares Foundation | Global Human Development',
  description: 'Building Leaders. Strengthening Communities. Expanding Opportunity. ANO CARES is a global human development organization working across education, leadership, entrepreneurship, and youth development.',
  keywords: 'Anosike Cares Foundation, ANO CARES, EJ Anosike, youth development, leadership, Africa, global human development',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Anosike Cares Foundation | Global Human Development',
    description: 'Building Leaders. Strengthening Communities. Expanding Opportunity.',
    siteName: 'Anosike Cares Foundation',
    type: 'website',
    locale: 'en_US',
    url: '/',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
