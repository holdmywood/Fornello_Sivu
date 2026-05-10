import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold tracking-tight mb-3">Fornello Oy</p>
            <p className="text-moss-200 text-sm leading-relaxed">{t('footer.tagline')}</p>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-moss-400 mb-4">
              {t('footer.nav_label')}
            </p>
            <div className="flex items-start gap-2 text-sm text-moss-200">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-moss-400" />
              <span>Latoluomantie 30, 29100 Luvia, Finland</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-moss-200">
              <Phone className="h-4 w-4 shrink-0 text-moss-400" />
              <a href="tel:+358500110220" className="hover:text-white transition-colors">
                +358 500 110 220
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-moss-200">
              <Mail className="h-4 w-4 shrink-0 text-moss-400" />
              <a href="mailto:info@fornello.fi" className="hover:text-white transition-colors">
                info@fornello.fi
              </a>
            </div>
          </div>

          {/* Nav + language */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-moss-400 mb-4">
              {t('footer.lang_label')}
            </p>
            <nav className="flex flex-col gap-2 mb-6">
              <Link href="/" className="text-sm text-moss-200 hover:text-white transition-colors">
                {t('nav.home')}
              </Link>
              <Link href="/services" className="text-sm text-moss-200 hover:text-white transition-colors">
                {t('nav.services')}
              </Link>
              <Link href="/contact" className="text-sm text-moss-200 hover:text-white transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="border-t border-forest-600 mt-12 pt-6 text-center">
          <p className="text-xs text-moss-200">
            {t('footer.copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  )
}
