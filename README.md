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

## Client Preview Deployment

**Platform: Vercel** (free tier is sufficient for staging)

### Pre-deployment checklist

- [ ] All changed files are committed, including `public/images/` and any new pages
- [ ] `middleware.ts` exists at the project root (handles locale routing for `/fi`, `/sv`, `/en`, `/de`)
- [ ] No `.env.local` file is committed (it is git-ignored and should stay that way)
- [ ] Run `npm run build` locally to confirm there are no TypeScript or build errors

### Deployment steps

1. Push the repository to GitHub (create a new private repo if needed):
   ```bash
   git add .
   git commit -m "staging: prepare for client preview"
   git remote add origin https://github.com/your-org/fornello-website.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com), sign in, and click **Add New → Project**.
   Import the GitHub repository. Accept all defaults — no framework override needed.

3. Before clicking **Deploy**, open **Environment Variables** and add:
   | Name | Value | Environment |
   |---|---|---|
   | *(none required for the preview)* | | |

   The contact form is currently a stub (submissions are logged but not emailed). If you want form submissions to arrive as emails during the preview, add `RESEND_API_KEY` with a Resend test key (see *Wiring up contact form email* above).

   Do **not** set `NEXT_PUBLIC_BASE_URL` for the preview — leave it unset so Vercel uses its own deployment URL automatically.

4. Click **Deploy**. Vercel will build and assign a URL such as `https://fornello-website-abc123.vercel.app`.

5. Share that URL with the client. It is publicly accessible — no login required.

### Build command

Vercel detects Next.js automatically. The defaults are correct:
- **Build command**: `npm run build`
- **Output directory**: `.next`
- **Install command**: `npm install`

### Environment variable summary for all environments

| Variable | Preview | Production |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | *(unset — auto-detected)* | `https://fornello.fi` |
| `RESEND_API_KEY` | Resend test key (optional) | Live Resend key |

### Post-deployment testing checklist

- [ ] Opening the root URL (`/`) redirects to `/fi`
- [ ] Language switcher cycles through fi → sv → en → de and back, URL prefix changes
- [ ] All pages load without 404: `/fi`, `/fi/services`, `/fi/services/roundwood`, `/fi/services/software`, `/fi/services/consulting`, `/fi/contact`, `/fi/eudr`, `/fi/ymparisto`, `/fi/tietosuojaseloste`
- [ ] Hero image and all gallery/section images load
- [ ] Scroll animations play (WhyFornello icons, hero text, section cards)
- [ ] Contact form: fill all fields, submit — shows green success message (form is stubbed; no email is sent unless `RESEND_API_KEY` is set)
- [ ] Contact form: submit with empty fields — shows inline validation errors
- [ ] `/sitemap.xml` and `/robots.txt` are accessible and the robots.txt says `Disallow: /` (correct — blocks search engines on staging)
- [ ] Mobile layout: test at 375 px width (navigation, hero, cards, footer)

### Moving to production

When ready to go live on `fornello.fi`:
1. Add a **Production** environment variable `NEXT_PUBLIC_BASE_URL=https://fornello.fi` in Vercel.
2. Add a **Production** environment variable `RESEND_API_KEY` with the live key.
3. In Vercel project settings → Domains, add `fornello.fi` and follow the DNS instructions.
4. Vercel will re-deploy automatically and the robots.txt will switch to `Allow: /`.

## Deploying to Vercel (quick reference)

```bash
npx vercel
```
