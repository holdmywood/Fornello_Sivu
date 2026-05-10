'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export function Intro() {
  const t = useTranslations('home.intro')

  return (
    <section className="bg-cream-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-lg md:text-xl text-bark-600 leading-relaxed">{t('body')}</p>
      </motion.div>
    </section>
  )
}
