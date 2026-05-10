# Fornello Oy Website

Next.js 16 + next-intl v4 + Tailwind v4 + shadcn/ui

## Setup

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /fi
npm run build      # production build
```

## Editing translations

All copy lives in `messages/`. Four files, identical key structure:

| File | Language |
|---|---|
| `messages/fi.json` | Finnish (default) |
| `messages/sv.json` | Swedish |
| `messages/en.json` | English |
| `messages/de.json` | German |

Key structure overview:
```
meta.home / meta.services / meta.contact   → page <title> and <description>
nav.*                                       → header/footer nav labels
home.hero / home.intro / home.supply / …   → homepage sections
services.*                                 → services page
contact.*                                  → contact page and form
footer.*                                   → footer labels
common.*                                   → shared UI strings
```

Technical terms (FSC®, PEFC, REDIII, EUDR) are kept unchanged across all locales.

## Swapping images

Place images in `public/images/`:

| Path | Used in |
|---|---|
| `public/images/hero.jpg` | Home page hero background |
| `public/images/forest-1.jpg` | Reserved for future use |
| `public/images/logo.svg` | Replace text logo in Header |

Recommended: 1920×1080px or wider for `hero.jpg`. Use WebP for best performance.

## Wiring up contact form email

The form posts to `app/api/contact/route.ts`. Currently stubbed — add your email provider:

```ts
// app/api/contact/route.ts
import { Resend } from 'resend'   // npm install resend

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json()
  await resend.emails.send({
    from: 'website@fornello.fi',
    to: 'info@fornello.fi',
    subject: `Contact form: ${name}`,
    text: `From: ${name} <${email}>\nCompany: ${company ?? '—'}\n\n${message}`,
  })
  return NextResponse.json({ ok: true })
}
```

Add `RESEND_API_KEY` to `.env.local`.

## Palette

All color tokens are defined in `app/globals.css` under `@theme`. Edit there to update the entire site:

```css
--color-forest-600: #2D5A38;   /* primary brand green */
--color-forest-700: #1E3D26;   /* darker green, footer */
--color-amber-500:  #C17F3A;   /* CTA accent */
--color-cream-50:   #F7F3ED;   /* page background */
--color-bark-900:   #2C2418;   /* body text */
```

## Deploying to Vercel

```bash
npx vercel
```

Set `RESEND_API_KEY` (or equivalent) in Vercel environment variables.
Set `BASE_URL` in `lib/metadata.ts` and `app/sitemap.ts` if deploying to a custom domain.
