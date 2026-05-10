import { useTranslations } from 'next-intl'
import { ContactForm } from '@/components/contact/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <section className="bg-cream-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-bark-900 mb-4">
            {t('heading')}
          </h1>
          <p className="text-bark-600 text-lg">{t('subheading')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-moss-200/50 p-8">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-5">
                {t('info.address_label')}
              </p>
              <div className="flex items-start gap-3 text-bark-700">
                <MapPin className="h-5 w-5 shrink-0 text-forest-600 mt-0.5" />
                <span className="leading-relaxed">
                  Latoluomantie 30<br />29100 Luvia<br />Finland
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-5">
                {t('info.phone_label')}
              </p>
              <div className="flex items-center gap-3 text-bark-700">
                <Phone className="h-5 w-5 shrink-0 text-forest-600" />
                <a href="tel:+358500110220" className="hover:text-forest-600 transition-colors">
                  +358 500 110 220
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-5">
                {t('info.email_label')}
              </p>
              <div className="flex items-center gap-3 text-bark-700">
                <Mail className="h-5 w-5 shrink-0 text-forest-600" />
                <a href="mailto:info@fornello.fi" className="hover:text-forest-600 transition-colors">
                  info@fornello.fi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
