import { Resend } from 'resend'

// Global in-memory store for IP rate limiting
const ipCache = new Map<string, number>()
const RATE_LIMIT_MS = 24 * 60 * 60 * 1000 // 24 hours

const SPAM_WORDS = [
  'viagra', 'casino', 'lottery', 'porn', 'buy followers', 'guaranteed ranking', 
  'crypto', 'bitcoin', 'forex', 'dating', 'sex', 'nude', 'enlargement', 
  'cash prize', 'winner', 'million dollars', 'hack', 'pharmacy', 'cheap pills'
]

export default defineEventHandler(async (event) => {
  const clientIp = getRequestIP(event, { xForwardedFor: true }) || 'unknown-ip'

  // Check rate limit
  if (clientIp !== 'unknown-ip') {
    const lastRequestTime = ipCache.get(clientIp)
    if (lastRequestTime && Date.now() - lastRequestTime < RATE_LIMIT_MS) {
      throw createError({
        statusCode: 429,
        statusMessage: 'You have already submitted a request. Please try again tomorrow.',
      })
    }
  }

  const body = await readBody(event)
  const { name, email, subject, message } = body

  // Basic validation
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email, and message are required.',
    })
  }

  // Spam filtering
  const lowerMessage = message.toLowerCase()
  const hasSpam = SPAM_WORDS.some(word => lowerMessage.includes(word))
  if (hasSpam) {
    // We can either return success silently to fool the spammer, or return 400. 
    // Returning 400 is fine, but silent drop is often better for bots. We'll throw an error.
    throw createError({
      statusCode: 400,
      statusMessage: 'Your message contains restricted keywords and cannot be sent.',
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
      from: "MAXY Digital Contact <onboarding@resend.dev>",
      to: "it.maxy.academy@gmail.com",
      replyTo: email,
      subject: `[Book a Call] ${subject || "New Strategy Call Request"} — from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f7f6; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); padding: 35px 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: 2px;">MAXY Digital</h1>
                      <p style="color: #fcb92a; margin: 8px 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px;">New Strategy Call Request</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      
                      <!-- Lead Info -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
                        <tr>
                          <td width="30%" style="padding: 15px 0; border-bottom: 1px solid #eeeeee; color: #888888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Client Name</td>
                          <td width="70%" style="padding: 15px 0; border-bottom: 1px solid #eeeeee; color: #222222; font-size: 16px; font-weight: 500;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 0; border-bottom: 1px solid #eeeeee; color: #888888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Email Address</td>
                          <td style="padding: 15px 0; border-bottom: 1px solid #eeeeee; font-size: 16px; font-weight: 500;">
                            <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 0; border-bottom: 1px solid #eeeeee; color: #888888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
                          <td style="padding: 15px 0; border-bottom: 1px solid #eeeeee; color: #222222; font-size: 16px; font-weight: 500;">${subject || "—"}</td>
                        </tr>
                      </table>

                      <!-- Message Box -->
                      <div style="background-color: #f9fbfb; border-left: 4px solid #000000; padding: 25px; border-radius: 0 8px 8px 0; margin-bottom: 30px;">
                        <h4 style="margin: 0 0 15px 0; color: #888888; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Message / Needs</h4>
                        <div style="color: #333333; font-size: 16px; line-height: 1.7; font-weight: 400;">
                          ${message.replace(/\n/g, "<br>")}
                        </div>
                      </div>

                      <!-- Footer/Action -->
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" style="padding-top: 20px;">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #fcb92a; color: #000000; padding: 14px 30px; border-radius: 30px; font-size: 15px; font-weight: 600; text-decoration: none; text-transform: uppercase; letter-spacing: 1px;">Reply to Client</a>
                            <p style="margin: 20px 0 0 0; font-size: 13px; color: #aaaaaa;">(Or simply reply directly to this email)</p>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // If successful, save IP to cache
    if (clientIp !== 'unknown-ip') {
      ipCache.set(clientIp, Date.now())
    }

    return { success: true, message: 'Your message has been sent. We will respond within one business day.' }
  } catch (error: unknown) {
    console.error('Resend error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.',
    })
  }
})
