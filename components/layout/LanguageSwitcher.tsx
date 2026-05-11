'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname, routing } from '@/lib/navigation'
import { Button } from '@/components/ui/button'

const codes: Record<string, string> = { fi: 'FI', sv: 'SV', en: 'EN', de: 'DE' }

function FlagIcon({ locale }: { locale: string }) {
  const svgProps = {
    className: "w-full h-full block",
    preserveAspectRatio: "xMidYMid slice" as const,
    "aria-hidden": true as const,
  }
  let flag: React.ReactNode

  if (locale === 'fi') {
    flag = (
      <svg viewBox="0 0 18 11" {...svgProps}>
        <rect width="18" height="11" fill="#fff" />
        <rect y="4" width="18" height="3" fill="#003580" />
        <rect x="4" width="3" height="11" fill="#003580" />
      </svg>
    )
  } else if (locale === 'sv') {
    flag = (
      <svg viewBox="0 0 16 10" {...svgProps}>
        <rect width="16" height="10" fill="#006AA7" />
        <rect y="3.75" width="16" height="2.5" fill="#FECC02" />
        <rect x="4.5" width="2.5" height="10" fill="#FECC02" />
      </svg>
    )
  } else if (locale === 'de') {
    flag = (
      <svg viewBox="0 0 5 3" {...svgProps}>
        <rect width="5" height="1" fill="#000" />
        <rect y="1" width="5" height="1" fill="#D00" />
        <rect y="2" width="5" height="1" fill="#FFCE00" />
      </svg>
    )
  } else {
    flag = (
      <svg viewBox="0 0 60 30" {...svgProps}>
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="10" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="6" />
        <rect x="0" y="11" width="60" height="8" fill="#fff" />
        <rect x="26" y="0" width="8" height="30" fill="#fff" />
        <rect x="0" y="12.5" width="60" height="5" fill="#C8102E" />
        <rect x="27.5" y="0" width="5" height="30" fill="#C8102E" />
      </svg>
    )
  }

  return (
    <span className="inline-flex overflow-hidden rounded-sm w-4 h-4 shrink-0">
      {flag}
    </span>
  )
}

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((l) => (
        <Button
          key={l}
          variant="ghost"
          size="sm"
          onClick={() => switchLocale(l)}
          className={`flex items-center gap-1 px-2 py-1 text-xs font-medium tracking-wider transition-colors ${
            l === locale
              ? 'text-forest-600 font-semibold'
              : 'text-bark-600 hover:text-forest-600'
          }`}
          aria-current={l === locale ? 'true' : undefined}
        >
          <FlagIcon locale={l} />
          <span>{codes[l]}</span>
        </Button>
      ))}
    </div>
  )
}
