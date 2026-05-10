'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import { Button } from '@/components/ui/button'

export function Hero() {
  const t = useTranslations('home.hero')

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-forest-800/70" />

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
          className="text-lg md:text-xl text-moss-200 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-500/90 text-white font-semibold px-8"
            render={<Link href="/contact" />}
          >
            {t('cta_primary')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/50 text-white hover:bg-white/10 bg-transparent px-8"
            render={<Link href="/services" />}
          >
            {t('cta_secondary')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
