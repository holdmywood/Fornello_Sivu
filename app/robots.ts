import type { MetadataRoute } from 'next'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://fornello.fi')

const isProduction = BASE_URL === 'https://fornello.fi'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isProduction
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
