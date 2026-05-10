import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['fi', 'sv', 'en', 'de'] as const,
  defaultLocale: 'fi'
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
