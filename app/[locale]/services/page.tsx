import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { buildAlternates } from '@/lib/metadata'
import { ServiceCard } from '@/components/services/ServiceCard'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.services' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates('/services'),
    openGraph: { title: t('title'), description: t('description'), locale, type: 'website' },
  }
}

export default function ServicesPage() {
  const t = useTranslations('services')
  const sections = ['roundwood', 'software', 'consulting'] as const

  return (
    <>
      <section className="bg-forest-700 py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heading')}</h1>
          <p className="text-moss-200 text-lg">{t('subheading')}</p>
        </div>
      </section>

      <section className="bg-cream-50 py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {sections.map((key) => (
            <ServiceCard
              key={key}
              title={t(`${key}.title`)}
              body={t(`${key}.body`)}
              features={t.raw(`${key}.features`) as string[]}
            />
          ))}
        </div>
      </section>
    </>
  )
}
