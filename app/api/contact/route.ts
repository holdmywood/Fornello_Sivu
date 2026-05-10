import { NextResponse } from 'next/server'

// TODO: wire up an email provider (e.g. Resend, SendGrid, Nodemailer)
// Expected payload: { name: string, email: string, company?: string, message: string }
export async function POST(req: Request) {
  const body = await req.json()
  console.log('Contact form submission:', body)
  return NextResponse.json({ ok: true })
}
