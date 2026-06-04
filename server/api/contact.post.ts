import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, subject, message } = body

  // Basic validation
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email, and message are required.',
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email service is not configured.',
    })
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: 'MAXY Digital Contact <onboarding@resend.dev>',
      to: 'hello@maxy.asia',
      replyTo: email,
      subject: `[Book a Call] ${subject || 'New Strategy Call Request'} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
          <div style="background: #000; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px; letter-spacing: 1px;">MAXY Digital</h1>
            <p style="color: #fcb92a; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px;">New Strategy Call Request</p>
          </div>
          <div style="background: #fff; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0066FF; font-size: 15px;"><a href="mailto:${email}" style="color: #0066FF;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111; font-size: 15px;">${subject || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #111; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; padding: 16px; background: #f8f8f8; border-radius: 6px; border-left: 3px solid #fcb92a;">
              <p style="margin: 0; font-size: 12px; color: #888;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </div>
      `,
    })

    return { success: true, message: 'Your message has been sent. We will respond within one business day.' }
  } catch (error: unknown) {
    console.error('Resend error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.',
    })
  }
})
