'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'

export function Hero() {
  const t = useTranslations('home.hero')

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          {t('headline')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-10 rounded-lg px-8 bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm transition-colors"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center h-10 rounded-lg px-8 border border-white/50 text-white hover:bg-white/10 bg-transparent font-semibold text-sm transition-colors"
          >
            {t('cta_secondary')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
