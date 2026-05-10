'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, useRouter, usePathname } from '@/lib/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/services' as const, label: t('services') },
    { href: '/contact' as const, label: t('contact') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-forest-700 font-bold text-xl tracking-tight">
            Fornello
          </span>
          <span className="text-bark-600 text-xs font-medium hidden sm:block">Oy</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-bark-900 hover:text-forest-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button
            size="sm"
            className="bg-forest-600 hover:bg-forest-700 text-white"
            render={<Link href="/contact" />}
          >
            {t('contact')}
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-bark-900 hover:bg-cream-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-cream-50 p-6">
            <SheetTitle className="text-forest-700 font-bold text-lg mb-6">
              Fornello Oy
            </SheetTitle>
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-bark-900 hover:text-forest-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
