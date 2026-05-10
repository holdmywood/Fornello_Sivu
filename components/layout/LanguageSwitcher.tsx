'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname, routing } from '@/lib/navigation'
import { Button } from '@/components/ui/button'

const labels: Record<string, string> = { fi: 'FI', sv: 'SV', en: 'EN', de: 'DE' }

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
          className={`px-2 py-1 text-xs font-medium tracking-wider transition-colors ${
            l === locale
              ? 'text-forest-600 font-semibold'
              : 'text-bark-600 hover:text-forest-600'
          }`}
          aria-current={l === locale ? 'true' : undefined}
        >
          {labels[l]}
        </Button>
      ))}
    </div>
  )
}
