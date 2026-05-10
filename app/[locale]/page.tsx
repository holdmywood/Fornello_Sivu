import { Hero } from '@/components/home/Hero'
import { Intro } from '@/components/home/Intro'
import { WhatWeSupply } from '@/components/home/WhatWeSupply'
import { WhyFornello } from '@/components/home/WhyFornello'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { CertificationsBand } from '@/components/home/CertificationsBand'
import { CtaSection } from '@/components/home/CtaSection'

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
