import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { buildAlternates } from '@/lib/metadata'
import { ContactForm } from '@/components/contact/ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.contact' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/contact'),
    openGraph: { title: t('title'), description: t('description'), locale, type: 'website' },
  }
}

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 py-24 px-6 text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-moss-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-forest-600/40 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heading')}</h1>
          <p className="text-moss-200 text-lg max-w-2xl mx-auto">{t('subheading')}</p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-cream-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Contact form */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-moss-200/50 p-8">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-moss-200/50 p-8">
              <div className="space-y-8">

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-forest-600/10 shrink-0">
                    <MapPin className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-1">
                      {t('info.address_label')}
                    </p>
                    <p className="text-bark-700 leading-relaxed text-sm">
                      Latoluomantie 30<br />29100 Luvia<br />Finland
                    </p>
                  </div>
                </div>

                <div className="border-t border-moss-100" />

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-forest-600/10 shrink-0">
                    <Phone className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-1">
                      {t('info.phone_label')}
                    </p>
                    <a
                      href="tel:+358500110220"
                      className="text-bark-700 text-sm hover:text-forest-600 transition-colors"
                    >
                      +358 500 110 220
                    </a>
                  </div>
                </div>

                <div className="border-t border-moss-100" />

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-forest-600/10 shrink-0">
                    <Mail className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-forest-600 mb-1">
                      {t('info.email_label')}
                    </p>
                    <a
                      href="mailto:info@fornello.fi"
                      className="text-bark-700 text-sm hover:text-forest-600 transition-colors"
                    >
                      info@fornello.fi
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
