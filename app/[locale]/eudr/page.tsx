import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata'
import { Link } from '@/lib/navigation'
import { AlertTriangle, CheckCircle2, ArrowRight, Database, Link2, FileText, Globe, BarChart3 } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.eudr' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/eudr'),
  }
}

const sysreqIcons = [Database, Link2, FileText, Globe, BarChart3]

export default async function EudrPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'eudr' })

  const sixAspects = ([1, 2, 3, 4, 5, 6] as const).map((i) => ({
    title: t(`aspects.${i}.title`),
    body: t(`aspects.${i}.body`),
  }))

  const systemReqs = ([1, 2, 3, 4, 5] as const).map((i, idx) => ({
    icon: sysreqIcons[idx],
    title: t(`sysreqs.${i}.title`),
    body: t(`sysreqs.${i}.body`),
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 py-24 px-6 text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-forest-600/40 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 rounded-full px-4 py-1.5 mb-6">
            <AlertTriangle className="h-4 w-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200">{t('badge')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('h1')}</h1>
          <p className="text-moss-200 text-lg leading-relaxed max-w-3xl">
            {t('hero_intro')}
          </p>
        </div>
      </section>

      {/* What is EUDR */}
      <section className="bg-cream-50 py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-100">
            <h2 className="text-2xl font-bold text-bark-900 mb-4">{t('what_h2')}</h2>
            <p className="text-bark-600 leading-relaxed">
              <strong className="text-bark-900">EUDR (EU Deforestation Regulation)</strong>{' '}
              {t('what_body')}
            </p>
          </div>

          {/* Six aspects */}
          <div>
            <h2 className="text-2xl font-bold text-bark-900 mb-6">{t('aspects_h2')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sixAspects.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-cream-100 flex gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-forest-600/10 text-forest-600 font-bold text-sm shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-bark-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-bark-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System requirements */}
          <div>
            <h2 className="text-2xl font-bold text-bark-900 mb-2">{t('sysreqs_h2')}</h2>
            <p className="text-bark-600 mb-6">{t('sysreqs_intro')}</p>
            <div className="space-y-4">
              {systemReqs.map(({ icon: Icon, title, body }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-cream-100 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-600/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-bark-900 mb-1">{title}</h3>
                    <p className="text-sm text-bark-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-moss-300" />
                <span className="font-semibold">{t('cta_badge')}</span>
              </div>
              <p className="text-moss-200 text-sm leading-relaxed">
                {t('cta_body')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/software"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                {t('btn_software')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
              >
                {t('btn_contact')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
