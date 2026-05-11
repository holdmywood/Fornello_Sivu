import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { buildAlternates } from '@/lib/metadata'
import { Link } from '@/lib/navigation'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Leaf,
  Zap,
  Activity,
  Users,
  DollarSign,
  TrendingUp,
  Shield,
  TreePine,
} from 'lucide-react'

type Product = { name: string; tagline: string; features: string[] }
type Benefit = { heading: string; body: string }
type Point = { label: string; body: string }

const benefitIcons = [Zap, Activity, Users, DollarSign, TrendingUp, Shield]
const productAccent = [
  'border-forest-600',
  'border-amber-500',
  'border-moss-400',
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.services_software' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/services/software'),
    openGraph: { title: t('title'), description: t('description'), locale, type: 'website' },
  }
}

export default function SoftwarePage() {
  const t = useTranslations('services')
  const tp = useTranslations('services.software_page')
  const tc = useTranslations('common')
  const th = useTranslations('home.cta')

  const products = tp.raw('products') as Product[]
  const benefits = tp.raw('benefits') as Benefit[]
  const erpPoints = tp.raw('erp_points') as Point[]
  const efficiencyPoints = tp.raw('efficiency_points') as Point[]
  const scalePoints = tp.raw('scale_points') as Point[]

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 py-24 px-6 text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-moss-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-forest-600/40 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-moss-400 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {tc('back_to_services')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('software.title')}</h1>
          <p className="text-moss-200 text-lg italic">{tp('tagline')}</p>
        </div>
      </section>

      {/* ── Intro + EUDR ─────────────────────────────────────────────────── */}
      <section className="bg-cream-50 py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-bark-600 leading-relaxed text-lg">{tp('intro')}</p>
          <Link href="/eudr" className="flex items-center gap-3 bg-amber-100 border border-amber-500/40 rounded-xl px-5 py-4 hover:bg-amber-200/60 hover:border-amber-500/70 transition-colors group">
            <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
            <p className="font-semibold text-bark-900 flex-1">{tp('eudr_badge')}</p>
            <ArrowRight className="h-4 w-4 text-amber-500 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-bark-900 mb-8">{tp('products_heading')}</h2>
          <div className="space-y-6">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={`bg-cream-50 rounded-xl border-l-4 ${productAccent[i]} p-8`}
              >
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-bark-900 mb-1">{p.name}</h3>
                  <p className="text-bark-600 italic text-sm">{p.tagline}</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-bark-600">
                      <CheckCircle2 className="h-4 w-4 text-forest-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="bg-cream-50 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-bark-900 mb-2">{tp('benefits_heading')}</h2>
          <p className="text-bark-600 mb-8">{tp('benefits_intro')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[i]
              return (
                <div
                  key={b.heading}
                  className="bg-white rounded-xl p-6 shadow-sm border border-cream-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-forest-600/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-forest-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bark-900 mb-1">{b.heading}</h3>
                      <p className="text-sm text-bark-600 leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-8 text-bark-600 italic text-sm">{tp('benefits_outro')}</p>
        </div>
      </section>

      {/* ── Forestry callout ─────────────────────────────────────────────── */}
      <section className="bg-white py-3 px-6">
        <div className="max-w-4xl mx-auto flex flex-row items-center gap-4">
          <img
            src="/images/eu-vipuvoimaa.jpg"
            alt="Vipuvoimaa EU:lta 2014–2020, Euroopan aluekehitysrahasto"
            className="h-[200px] w-auto shrink-0"
            style={{ mixBlendMode: 'multiply' }}
          />
          <div className="flex flex-1 items-center gap-3 bg-cream-100 border border-moss-200 rounded-xl px-5 py-4">
            <TreePine className="h-5 w-5 text-forest-600 shrink-0" />
            <p className="font-medium text-bark-900">{tp('forestry_callout')}</p>
          </div>
        </div>
      </section>

      {/* ── ERP info sections ────────────────────────────────────────────── */}
      <section className="bg-cream-50 py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* How does a forestry company benefit */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-cream-100">
            <h2 className="text-xl font-bold text-bark-900 mb-2">{tp('erp_heading')}</h2>
            <p className="text-bark-600 mb-5 text-sm">{tp('erp_intro')}</p>
            <ul className="space-y-3">
              {erpPoints.map((pt) => (
                <li key={pt.label} className="flex items-start gap-3 text-sm text-bark-600">
                  <CheckCircle2 className="h-5 w-5 text-forest-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-bark-900">{pt.label}: </strong>
                    {pt.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* How ERP improves efficiency */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-cream-100">
            <h2 className="text-xl font-bold text-bark-900 mb-2">{tp('efficiency_heading')}</h2>
            <p className="text-bark-600 mb-5 text-sm">{tp('efficiency_intro')}</p>
            <ol className="space-y-3">
              {efficiencyPoints.map((pt, i) => (
                <li key={pt.label} className="flex items-start gap-3 text-sm text-bark-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="text-bark-900">{pt.label}: </strong>
                    {pt.body}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Scalability and growth */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-cream-100">
            <h2 className="text-xl font-bold text-bark-900 mb-2">{tp('scale_heading')}</h2>
            <p className="text-bark-600 mb-5 text-sm">{tp('scale_intro')}</p>
            <ul className="space-y-3 mb-6">
              {scalePoints.map((pt) => (
                <li key={pt.label} className="flex items-start gap-3 text-sm text-bark-600">
                  <CheckCircle2 className="h-5 w-5 text-forest-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-bark-900">{pt.label}: </strong>
                    {pt.body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-bark-600 text-sm italic">{tp('scale_outro')}</p>
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
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
