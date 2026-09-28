'use client'

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'

const inquiryTypes = [
  'Media & Press',
  'Partnership Inquiry',
  'Donation & Giving',
  'Speaking Engagement',
  'Program Participation',
  'General Inquiry',
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactContent() {
  const ref = useRef<HTMLDivElement>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [inquiryType, setInquiryType] = useState('')
  const [message, setMessage] = useState('')

  // Honeypot spam field
  const [website, setWebsite] = useState('')

  const [status, setStatus] =
    useState<Status>('idle')

  const [responseMessage, setResponseMessage] =
    useState('')

  useEffect(() => {
    const els =
      ref.current?.querySelectorAll('.reveal')

    if (!els) return

    const obs = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        }),
      { threshold: 0.08 },
    )

    els.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (status === 'sending') return

    setStatus('sending')
    setResponseMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          firstName,
          lastName,
          email,
          organization,
          inquiryType,
          message,
          website,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.message ||
            'Unable to send your message.',
        )
      }

      setStatus('success')

      setResponseMessage(
        result.message ||
          'Thank you. Your message has been received.',
      )

      setFirstName('')
      setLastName('')
      setEmail('')
      setOrganization('')
      setInquiryType('')
      setMessage('')
      setWebsite('')
    } catch (error) {
      console.error(
        'Contact form submission failed:',
        error,
      )

      setStatus('error')

      setResponseMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.',
      )
    }
  }

  const inputStyle = {
    padding: '1rem 1.25rem',
    border: '1px solid var(--border)',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'var(--font-inter)',
    transition: 'border-color 0.3s',
    background: 'var(--surface)',
  }

  return (
    <div ref={ref}>
      {/* Hero */}
      <section
        style={{
          background: '#0C0C0C',
          paddingTop: '9rem',
          paddingBottom: '5rem',
          textAlign: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-label">
            Get In Touch
          </p>

          <h1
            className="font-display"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize:
                'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}
          >
            Start A Conversation
          </h1>

          <p
            style={{
              color: 'var(--text-faint)',
              fontSize: '1rem',
              lineHeight: 1.9,
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Whether you are a partner, donor,
            media professional, or community leader
            — we welcome every conversation that
            moves the mission forward.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section
        style={{
          background: 'var(--surface)',
          padding:
            'clamp(4rem, 8vw, 7rem) 1.5rem',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            <p className="section-label">
              Send A Message
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                marginTop: '2rem',
              }}
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{
                  gap: '1rem',
                }}
              >
                <input
                  required
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={e =>
                    setFirstName(e.target.value)
                  }
                  style={inputStyle}
                  onFocus={e =>
                    (e.target.style.borderColor =
                      'var(--gold)')
                  }
                  onBlur={e =>
                    (e.target.style.borderColor =
                      'var(--border)')
                  }
                />

                <input
                  required
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name"
                  value={lastName}
                  onChange={e =>
                    setLastName(e.target.value)
                  }
                  style={inputStyle}
                  onFocus={e =>
                    (e.target.style.borderColor =
                      'var(--gold)')
                  }
                  onBlur={e =>
                    (e.target.style.borderColor =
                      'var(--border)')
                  }
                />
              </div>

              <input
                required
                type="email"
                autoComplete="email"
                placeholder="Email address"
                value={email}
                onChange={e =>
                  setEmail(e.target.value)
                }
                style={inputStyle}
                onFocus={e =>
                  (e.target.style.borderColor =
                    'var(--gold)')
                }
                onBlur={e =>
                  (e.target.style.borderColor =
                    'var(--border)')
                }
              />

              <input
                type="text"
                autoComplete="organization"
                placeholder="Organization / Institution (optional)"
                value={organization}
                onChange={e =>
                  setOrganization(e.target.value)
                }
                style={inputStyle}
                onFocus={e =>
                  (e.target.style.borderColor =
                    'var(--gold)')
                }
                onBlur={e =>
                  (e.target.style.borderColor =
                    'var(--border)')
                }
              />

              <select
                required
                value={inquiryType}
                onChange={e =>
                  setInquiryType(e.target.value)
                }
                style={{
                  ...inputStyle,
                  color: inquiryType
                    ? 'inherit'
                    : 'var(--text-faint)',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              >
                <option value="">
                  Type of inquiry
                </option>

                {inquiryTypes.map(type => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>

              <textarea
                required
                placeholder="Your message"
                rows={6}
                value={message}
                onChange={e =>
                  setMessage(e.target.value)
                }
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                }}
                onFocus={e =>
                  (e.target.style.borderColor =
                    'var(--gold)')
                }
                onBlur={e =>
                  (e.target.style.borderColor =
                    'var(--border)')
                }
              />

              {/* Honeypot */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                }}
              >
                <label>
                  Website
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={e =>
                      setWebsite(e.target.value)
                    }
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{
                  border: 'none',
                  cursor:
                    status === 'sending'
                      ? 'not-allowed'
                      : 'pointer',
                  fontSize: '0.75rem',
                  alignSelf: 'flex-start',
                  opacity:
                    status === 'sending'
                      ? 0.65
                      : 1,
                }}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : 'Send Message'}
              </button>

              {status === 'success' && (
                <div
                  style={{
                    marginTop: '0.5rem',
                    padding:
                      '1rem 1.25rem',
                    borderLeft:
                      '2px solid var(--gold)',
                    background:
                      'var(--surface-alt)',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    Message received.
                  </p>

                  <p
                    style={{
                      margin:
                        '0.35rem 0 0',
                      color:
                        'var(--text-muted)',
                      fontSize: '0.82rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {responseMessage}
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div
                  style={{
                    marginTop: '0.5rem',
                    padding:
                      '1rem 1.25rem',
                    borderLeft:
                      '2px solid #A33',
                    background:
                      'var(--surface-alt)',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    Unable to send.
                  </p>

                  <p
                    style={{
                      margin:
                        '0.35rem 0 0',
                      color:
                        'var(--text-muted)',
                      fontSize: '0.82rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {responseMessage}
                  </p>
                </div>
              )}

              <p
                style={{
                  color:
                    'var(--text-faint)',
                  fontSize: '0.75rem',
                  lineHeight: 1.7,
                  marginTop: '0.25rem',
                }}
              >
                Your message will be sent securely
                to contact@anocaresfoundation.org.
              </p>
            </form>
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2">
            <div
              className="reveal"
              style={{
                background: '#0C0C0C',
                padding: '3rem 2.5rem',
                marginBottom: '1px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '48px',
                  height: '2px',
                  background: 'var(--gold)',
                }}
              />

              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '1.5rem',
                }}
              >
                Foundation Headquarters
              </p>

              <p
                style={{
                  color: '#ccc',
                  fontSize: '0.9rem',
                  lineHeight: 1.9,
                }}
              >
                Anosike Cares Foundation
                <br />
                Global Human Development
                Organization
                <br />
                Nigeria · United States
              </p>
            </div>

            <div
              className="reveal reveal-delay-1"
              style={{
                background:
                  'var(--surface-alt)',
                padding: '2.5rem',
                marginBottom: '1px',
              }}
            >
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '1.25rem',
                }}
              >
                Media & Press
              </p>

              <p
                style={{
                  color:
                    'var(--text-muted)',
                  fontSize: '0.85rem',
                  lineHeight: 1.8,
                }}
              >
                For media inquiries, interview
                requests, speaking engagements, or
                press materials, use the contact form
                and select &quot;Media &amp;
                Press&quot; as your inquiry type.
              </p>
            </div>

            <div
              className="reveal reveal-delay-2"
              style={{
                background:
                  'var(--surface-alt)',
                padding: '2.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '1.25rem',
                }}
              >
                Partnerships
              </p>

              <p
                style={{
                  color:
                    'var(--text-muted)',
                  fontSize: '0.85rem',
                  lineHeight: 1.8,
                }}
              >
                Governments, corporations,
                universities, and foundations
                interested in partnership are
                encouraged to reach out directly. We
                respond to all serious inquiries.
              </p>
            </div>

            {/* Social */}
            <div
              className="reveal reveal-delay-3"
              style={{ marginTop: '2rem' }}
            >
              <p
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#aaa',
                  marginBottom: '1rem',
                }}
              >
                Follow The Foundation
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                {[
                  'Instagram',
                  'Twitter',
                  'LinkedIn',
                  'YouTube',
                ].map(s => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color:
                        'var(--text-faint)',
                      textDecoration: 'none',
                      padding:
                        '0.5rem 0.75rem',
                      border:
                        '1px solid var(--border)',
                      transition:
                        'all 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor =
                        'var(--gold)'

                      e.currentTarget.style.color =
                        'var(--gold)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor =
                        'var(--border)'

                      e.currentTarget.style.color =
                        'var(--text-faint)'
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}