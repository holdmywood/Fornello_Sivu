'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/lib/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { Menu, ChevronDown } from 'lucide-react'

export function Header() {
  const t = useTranslations('nav')
  const ts = useTranslations('services')
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  useEffect(() => {
    let prev = window.scrollY
    const handler = () => {
      const current = window.scrollY
      setScrolled(current > 60)
      if (current < 80) {
        setHidden(false)
      } else if (current > prev + 4) {
        setHidden(true)
      } else if (current < prev - 4) {
        setHidden(false)
      }
      prev = current
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const serviceSubItems: { href: '/services/roundwood' | '/services/software' | '/services/consulting'; label: string }[] = [
    { href: '/services/roundwood', label: ts('roundwood.title') },
    { href: '/services/software', label: ts('software.title') },
    { href: '/services/consulting', label: ts('consulting.title') },
  ]

  const linkCls = 'text-sm font-medium text-bark-800 hover:text-forest-600 transition-colors'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-moss-100/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-transparent.png"
            alt="Fornello"
            width={200}
            height={64}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav — centred */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/" className={linkCls}>
            {t('home')}
          </Link>

          <Link href="/services/software" className={linkCls}>
            Forlog
          </Link>

          <Link href="/ymparisto" className={linkCls}>
            {t('ymparisto')}
          </Link>

          {/* Services — hover opens dropdown, click navigates */}
          <div className="relative group">
            <div className="flex items-center gap-0.5">
              <Link href="/services" className={linkCls}>
                {t('services')}
              </Link>
              <ChevronDown className="h-3.5 w-3.5 text-bark-500 transition-transform duration-200 group-hover:rotate-180" />
            </div>

            {/* pt-2 bridges the gap between trigger and panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60 z-50 opacity-0 pointer-events-none -translate-y-1 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-150">
              <div className="bg-white rounded-xl shadow-lg border border-moss-100 overflow-hidden py-1">
                {serviceSubItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2.5 text-sm text-bark-800 hover:bg-forest-600 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Right side: language switcher + contact CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="text-sm font-semibold bg-forest-600 hover:bg-forest-700 text-white px-4 py-1.5 rounded-lg transition-colors"
          >
            {t('contact')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden ml-auto">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="inline-flex items-center justify-center rounded-md p-2 text-bark-900 hover:bg-cream-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-cream-50 p-6">
              <SheetTitle className="mb-6">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Fornello"
                  width={130}
                  height={52}
                  className="h-12 w-auto"
                />
              </SheetTitle>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-bark-900 hover:text-forest-600 transition-colors"
                >
                  {t('home')}
                </Link>

                <Link
                  href="/services/software"
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-bark-900 hover:text-forest-600 transition-colors"
                >
                  Forlog
                </Link>

                <Link
                  href="/ymparisto"
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-bark-900 hover:text-forest-600 transition-colors"
                >
                  {t('ymparisto')}
                </Link>

                <div>
                  <div className="flex items-center">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium text-bark-900 hover:text-forest-600 transition-colors"
                    >
                      {t('services')}
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="ml-1 p-0.5 text-bark-900 hover:text-forest-600 transition-colors"
                      aria-label="Toggle services menu"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-150 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-moss-200 pl-3">
                      {serviceSubItems.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-bark-600 hover:text-forest-600 transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-sm font-semibold bg-forest-600 hover:bg-forest-700 text-white px-4 py-2.5 rounded-lg transition-colors"
                >
                  {t('contact')}
                </Link>
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}
