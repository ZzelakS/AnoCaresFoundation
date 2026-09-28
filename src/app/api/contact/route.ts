import { NextResponse } from 'next/server'

const ALLOWED = [
  'Media & Press',
  'Partnership Inquiry',
  'Donation & Giving',
  'Speaking Engagement',
  'Program Participation',
  'General Inquiry',
] as const

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  'Anosike Cares Foundation <contact@anocaresfoundation.org>'

const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ||
  'contact@anocaresfoundation.org'

export async function POST(request: Request) {
  try {
    /*
     * Only the API key is mandatory.
     * FROM_EMAIL and TO_EMAIL already have fallbacks above.
     */
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured.')

      return NextResponse.json(
        {
          message:
            'The contact service is not configured yet. Please email contact@anocaresfoundation.org directly.',
        },
        { status: 503 },
      )
    }

    const body = await request.json()

    const {
      firstName,
      lastName,
      email,
      organization,
      inquiryType,
      message,
      website,
    } = body ?? {}

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({
        message:
          'Thank you. Your message has been received.',
      })
    }

    if (
      typeof firstName !== 'string' ||
      typeof lastName !== 'string' ||
      typeof email !== 'string' ||
      typeof inquiryType !== 'string' ||
      typeof message !== 'string'
    ) {
      return NextResponse.json(
        {
          message:
            'Please complete the required fields.',
        },
        { status: 400 },
      )
    }

    const cleanFirstName = firstName.trim()
    const cleanLastName = lastName.trim()
    const cleanEmail = email.trim()

    const cleanOrganization =
      typeof organization === 'string'
        ? organization.trim()
        : ''

    const cleanMessage = message.trim()

    if (
      !cleanFirstName ||
      !cleanLastName ||
      !cleanEmail ||
      !inquiryType ||
      !cleanMessage
    ) {
      return NextResponse.json(
        {
          message:
            'Please complete the required fields.',
        },
        { status: 400 },
      )
    }

    if (
      !ALLOWED.includes(
        inquiryType as (typeof ALLOWED)[number],
      )
    ) {
      return NextResponse.json(
        {
          message:
            'Please select a valid inquiry type.',
        },
        { status: 400 },
      )
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(cleanEmail)) {
      return NextResponse.json(
        {
          message:
            'Please enter a valid email address.',
        },
        { status: 400 },
      )
    }

    const fullName =
      `${cleanFirstName} ${cleanLastName}`

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    }

    /*
     * --------------------------------------------
     * SEND MESSAGE TO ANOSIKE CARES FOUNDATION
     * --------------------------------------------
     */

    const adminResponse = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers,

        body: JSON.stringify({
          from: FROM_EMAIL,

          to: [TO_EMAIL],

          /*
           * When the Foundation replies,
           * the reply goes directly to the visitor.
           */
          reply_to: cleanEmail,

          subject:
            `[${inquiryType}] Website message — ${fullName}`,

          text: [
            `Inquiry type: ${inquiryType}`,
            `Name: ${fullName}`,
            `Organization: ${cleanOrganization || '—'}`,
            `Email: ${cleanEmail}`,
            '',
            'Message:',
            cleanMessage,
          ].join('\n'),
        }),
      },
    )

    if (!adminResponse.ok) {
      const resendError =
        await adminResponse.text()

      console.error(
        'Ano Cares enquiry delivery failed:',
        resendError,
      )

      return NextResponse.json(
        {
          message:
            'We could not send your message. Please try again or email contact@anocaresfoundation.org directly.',
        },
        { status: 502 },
      )
    }

    /*
     * --------------------------------------------
     * SEND ACKNOWLEDGEMENT TO VISITOR
     * --------------------------------------------
     */

    const acknowledgementResponse =
      await fetch(
        'https://api.resend.com/emails',
        {
          method: 'POST',
          headers,

          body: JSON.stringify({
            from: FROM_EMAIL,

            to: [cleanEmail],

            /*
             * When the visitor replies to the
             * acknowledgement, it goes to the Foundation.
             */
            reply_to: TO_EMAIL,

            subject:
              'We received your message | Anosike Cares Foundation',

            text: [
              `Dear ${cleanFirstName},`,
              '',
              'Thank you for contacting the Anosike Cares Foundation.',
              '',
              `We have received your ${inquiryType} enquiry and our team will review your message.`,
              '',
              'If you need to add anything, simply reply to this email.',
              '',
              'Anosike Cares Foundation',
              TO_EMAIL,
            ].join('\n'),
          }),
        },
      )

    /*
     * The original enquiry was already delivered.
     * Do not make the contact form appear to fail
     * if only the acknowledgement email fails.
     */
    if (!acknowledgementResponse.ok) {
      console.error(
        'Ano Cares acknowledgement failed:',
        await acknowledgementResponse.text(),
      )
    }

    return NextResponse.json({
      message:
        'Thank you. Your message has been received. We will be in touch.',
    })
  } catch (error) {
    console.error(
      'Ano Cares contact submission error:',
      error,
    )

    return NextResponse.json(
      {
        message:
          'Unable to send your message. Please try again or email contact@anocaresfoundation.org directly.',
      },
      { status: 500 },
    )
  }
}