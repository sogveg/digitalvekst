import { NextResponse } from "next/server"

const RECIPIENT_EMAIL = "post@digitalvekst.no"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Navn, e-post og melding er påkrevd." },
        { status: 400 }
      )
    }

    // Construct the email content
    const emailBody = `
Ny henvendelse fra kontaktskjema på digitalvekst.no

Navn: ${name}
Bedrift: ${company || "Ikke oppgitt"}
E-post: ${email}
Telefon: ${phone || "Ikke oppgitt"}

Melding:
${message}
    `.trim()

    // If RESEND_API_KEY is configured, send via Resend
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Digital Vekst <onboarding@resend.dev>",
          to: RECIPIENT_EMAIL,
          reply_to: email,
          subject: `Ny henvendelse fra ${name}${company ? ` (${company})` : ""}`,
          text: emailBody,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error("[v0] Resend error:", errorData)
        return NextResponse.json(
          { error: "Kunne ikke sende e-post. Prøv igjen senere." },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // Fallback: Log to console if no email service is configured
    console.log("=== NY KONTAKTHENVENDELSE ===")
    console.log(`Til: ${RECIPIENT_EMAIL}`)
    console.log(emailBody)
    console.log("=============================")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      { error: "Noe gikk galt. Prøv igjen senere." },
      { status: 500 }
    )
  }
}
