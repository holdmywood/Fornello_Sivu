import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { buildAlternates } from '@/lib/metadata'
import { Link } from '@/lib/navigation'
import { ArrowLeft, Leaf } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.services_consulting' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/services/consulting'),
    openGraph: { title: t('title'), description: t('description'), locale, type: 'website' },
  }
}

export default function ConsultingPage() {
  const t = useTranslations('services')
  const tp = useTranslations('services.consulting_page')
  const tc = useTranslations('common')
  const th = useTranslations('home.cta')

  return (
    <>
      <section className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 py-24 px-6 text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-forest-600/40 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-moss-300 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {tc('back_to_services')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('consulting.title')}</h1>
          <p className="text-moss-200 text-lg">{tp('subheading')}</p>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border-l-4 border-forest-600 shadow-sm p-6 md:p-12">
            <blockquote className="text-xl md:text-2xl font-medium text-bark-900 italic border-l-0 mb-8 leading-relaxed">
              &ldquo;{tp('subheading')}&rdquo;
            </blockquote>
            <p className="text-bark-600 leading-relaxed text-lg">{tp('body')}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 px-6 pb-0">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-sm">
          <img
            src="/images/consulting-barge.png"
            alt=""
            className="w-full h-[220px] sm:h-[420px] object-cover"
          />
        </div>
      </section>

      <section className="bg-cream-50 py-12 px-6">
        <div className="max-w-md mx-auto">
          <div className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 rounded-2xl px-8 py-10 text-center text-white overflow-hidden shadow-lg">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-moss-400/20 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-forest-600/40 blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 mx-auto mb-5">
                <Leaf className="h-5 w-5 text-moss-300" />
              </div>
              <p className="text-white text-lg font-semibold leading-relaxed mb-6">{th('body')}</p>
              <Link
                href="/contact"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-7 py-2.5 rounded-lg transition-colors text-sm shadow-sm"
              >
                {tc('contact_us')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
