import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { buildAlternates } from '@/lib/metadata'
import { Leaf, Shield, TreePine, ArrowUpRight } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.ymparisto' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/ymparisto'),
    openGraph: { title: t('title'), description: t('description'), locale, type: 'website' },
  }
}

export default function YmparistoPage() {
  const t = useTranslations('ymparisto')

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 py-24 px-6 text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-forest-600/40 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heading')}</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-cream-50 py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-cream-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-forest-600/10 flex items-center justify-center shrink-0">
                <Leaf className="h-5 w-5 text-forest-600" />
              </div>
              <h2 className="text-2xl font-bold text-bark-900">{t('section_heading')}</h2>
            </div>
            <p className="text-bark-600 leading-relaxed mb-5">{t('body1')}</p>
            <p className="text-bark-600 leading-relaxed">{t('body2')}</p>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://fornello.fi/wp-content/uploads/2025/04/INS-PEFC-COC-208336_FI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm border border-cream-100 flex items-start gap-3 hover:border-forest-600/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-forest-600/10 flex items-center justify-center shrink-0">
                <TreePine className="h-5 w-5 text-forest-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-bark-900 flex items-center gap-1">
                  PEFC
                  <ArrowUpRight className="h-4 w-4 text-forest-600 opacity-70 group-hover:opacity-100" />
                </p>
                <p className="text-xs text-bark-500 mt-0.5">INS-PEFC-COC-208336_FI</p>
              </div>
            </a>
            <a
              href="https://fornello.fi/wp-content/uploads/2025/04/INS-COC-100045_INS-CW-100045_Issue-No.-7.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm border border-cream-100 flex items-start gap-3 hover:border-forest-600/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-forest-600/10 flex items-center justify-center shrink-0">
                <Shield className="h-5 w-5 text-forest-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-bark-900 flex items-center gap-1">
                  FSC®
                  <ArrowUpRight className="h-4 w-4 text-forest-600 opacity-70 group-hover:opacity-100" />
                </p>
                <p className="text-xs text-bark-500 mt-0.5">INS-COC-100045</p>
              </div>
            </a>
            <a
              href="https://fornello.fi/wp-content/uploads/2026/04/Fornello-OY_Sustainable-Biomass-Program_SBP-12-20_21-Apr-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm border border-cream-100 flex items-start gap-3 hover:border-forest-600/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-forest-600/10 flex items-center justify-center shrink-0">
                <Leaf className="h-5 w-5 text-forest-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-bark-900 flex items-center gap-1">
                  SBP
                  <ArrowUpRight className="h-4 w-4 text-forest-600 opacity-70 group-hover:opacity-100" />
                </p>
                <p className="text-xs text-bark-500 mt-0.5">Sustainable Biomass Program</p>
              </div>
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-100 space-y-4 text-sm text-bark-600 leading-relaxed">
            <p>
              {t('pefc_info')}{' '}
              <a href="https://pefc.fi" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline font-medium">pefc.fi</a>
            </p>
            <p>
              {t('fsc_info')}{' '}
              <a href="https://info.fsc.org" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline font-medium">info.fsc.org</a>
            </p>
            <p>
              {t('sbp_info')}{' '}
              <a href="https://sbp-cert.org" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline font-medium">sbp-cert.org</a>
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
