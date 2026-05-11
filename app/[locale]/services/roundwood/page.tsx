import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { buildAlternates } from '@/lib/metadata'
import { Link } from '@/lib/navigation'
import { ArrowLeft, CheckCircle2, Leaf } from 'lucide-react'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.services_roundwood' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/services/roundwood'),
    openGraph: { title: t('title'), description: t('description'), locale, type: 'website' },
  }
}

export default function RoundwoodPage() {
  const t = useTranslations('services')
  const tp = useTranslations('services.roundwood_page')
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('roundwood.title')}</h1>
          <p className="text-moss-200 text-lg italic">{tp('tagline')}</p>
        </div>
      </section>

      <section className="bg-cream-50 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Section 1: forest image left, text right */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-72 md:min-h-full bg-cream-100">
                <Image
                  src="/images/roundwood-section1.jpg"
                  alt={tp('section1.heading')}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-8 border-l-4 border-forest-600">
                <h2 className="text-2xl font-bold text-bark-900 mb-4">{tp('section1.heading')}</h2>
                <p className="text-bark-600 leading-relaxed mb-4">{tp('section1.body1')}</p>
                <p className="text-bark-600 leading-relaxed">{tp('section1.body2')}</p>
              </div>
            </div>
          </div>

          {/* Section 2: text left, crane image right */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-l-4 border-forest-600 order-2 md:order-1">
                <h2 className="text-2xl font-bold text-bark-900 mb-4">{tp('section2.heading')}</h2>
                <p className="text-bark-600 leading-relaxed mb-4">{tp('section2.body1')}</p>
                <p className="text-bark-600 leading-relaxed">{tp('section2.body2')}</p>
              </div>
              <div className="relative min-h-72 md:min-h-full bg-cream-100 order-1 md:order-2">
                <Image
                  src="/images/roundwood-section2.jpg"
                  alt={tp('section2.heading')}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Section 3: import */}
          <div className="bg-white rounded-xl border-l-4 border-moss-500 shadow-sm p-8">
            <h2 className="text-2xl font-bold text-bark-900 mb-4">{tp('section3.heading')}</h2>
            <p className="text-bark-600 leading-relaxed">{tp('section3.body')}</p>
          </div>

          {/* Features grid */}
          <div className="bg-white rounded-xl border border-moss-200/60 shadow-sm p-8">
            <h3 className="font-semibold text-bark-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-forest-600" />
              {t('roundwood.title')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(t.raw('roundwood.features') as string[]).map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-bark-700">
                  <CheckCircle2 className="h-4 w-4 text-forest-600 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
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
              <h3 className="text-lg font-bold text-white mb-2">{th('heading')}</h3>
              <div className="h-px w-10 bg-moss-400/50 mx-auto mb-4" />
              <p className="text-moss-200 text-sm leading-relaxed mb-6">{th('body')}</p>
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
