import type { Metadata } from 'next'
import { routing } from './navigation'

const BASE_URL = 'https://fornello.fi'

export function buildAlternates(path: string): Metadata['alternates'] {
  const languages: Record<string, string> = {}
  for (const locale of routing.locales) {
    languages[locale] = `${BASE_URL}/${locale}${path}`
  }
  languages['x-default'] = `${BASE_URL}/fi${path}`
  return { languages }
}
