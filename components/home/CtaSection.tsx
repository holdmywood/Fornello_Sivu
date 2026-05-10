'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  const t = useTranslations('home.cta')

  return (
    <section className="bg-amber-100 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-bark-900 mb-4">
          {t('heading')}
        </h2>
        <p className="text-bark-600 text-lg mb-10 leading-relaxed">{t('body')}</p>
        <Button
          size="lg"
          className="bg-forest-600 hover:bg-forest-700 text-white px-10 font-semibold"
          render={<Link href="/contact" />}
        >
          {t('button')}
        </Button>
      </motion.div>
    </section>
  )
}
