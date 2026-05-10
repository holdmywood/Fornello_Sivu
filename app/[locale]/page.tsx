import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { buildAlternates } from '@/lib/metadata'
import { Hero } from '@/components/home/Hero'
import { Intro } from '@/components/home/Intro'
import { WhatWeSupply } from '@/components/home/WhatWeSupply'
import { WhyFornello } from '@/components/home/WhyFornello'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { CertificationsBand } from '@/components/home/CertificationsBand'
import { CtaSection } from '@/components/home/CtaSection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(''),
    openGraph: { title: t('title'), description: t('description'), locale, type: 'website' },
  }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeSupply />
      <WhyFornello />
      <ServicesOverview />
      <CertificationsBand />
      <CtaSection />
    </>
  )
}
