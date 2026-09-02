import Link from 'next/link'

const cols = [
  {
    label: 'Foundation',
    links: [
      { href: '/about', label: 'About EJ Anosike' },
      { href: '/foundation', label: 'ANO CARES Foundation' },
      { href: '/impact', label: 'Our Impact' },
      { href: '/partners', label: 'Partners' },
      { href: '/news',     label: 'Newsroom' },
    ],
  },
  {
    label: 'Initiatives',
    links: [
      { href: '/rucker-africa', label: 'Rucker Park Africa' },
      { href: '/forum', label: 'Global Opportunity Forum' },
    ],
  },
  {
    label: 'Get Involved',
    links: [
      { href: '/donate', label: 'Support' },
      { href: '/partners', label: 'Partner With Us' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0C0C0C', color: '#fff' }}>
      {/* Top strip */}
      <div style={{ background: 'var(--gold)', height: '2px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p
              className="font-display font-bold mb-2"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '1.25rem',
                letterSpacing: '0.05em',
              }}
            >
              ANO CARES
            </p>

            <p
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
              }}
            >
              Anosike Cares Foundation
            </p>

            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
                maxWidth: '220px',
              }}
            >
              Educated to Lead. Built to Win. Committed to Serve.
            </p>

            <div className="flex gap-4 mt-6">
              {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-body)',
                    textDecoration: 'none',
                  }}
                  className="hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {cols.map((col) => (
            <div key={col.label}>
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '1.25rem',
                }}
              >
                {col.label}
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-faint)',
                        textDecoration: 'none',
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: '1px solid #222' }}
        >
          <p style={{ fontSize: '0.75rem', color: 'var(--text-body)' }}>
            © {new Date().getFullYear()} Anosike Cares Foundation. All rights
            reserved.{' '}
            <a
              href="https://wa.me/2349062288078?text=Hi%20Lamar%2C%20I%20saw%20your%20work%20on%20the%20ANO%20CARES%20website%20and%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 700,
                color: 'var(--gold)',
                textDecoration: 'none',
              }}
              className="hover:underline"
            >
              Lamar
            </a>
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-body)',
                  textDecoration: 'none',
                }}
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}