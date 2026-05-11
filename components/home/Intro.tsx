'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Leaf } from 'lucide-react'

export function Intro() {
  const t = useTranslations('home.intro')

  return (
    <section className="relative bg-gradient-to-br from-forest-800 via-forest-700 to-forest-600 py-7 px-6 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-moss-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-forest-900/30 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="h-px w-16 bg-moss-400/50" />
          <Leaf className="h-4 w-4 text-moss-400" />
          <span className="h-px w-16 bg-moss-400/50" />
        </div>

        <p className="text-base md:text-lg text-white font-light leading-relaxed tracking-wide">
          {t('body')}
        </p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-moss-400/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-moss-400/60" />
          <span className="h-px w-12 bg-moss-400/40" />
        </div>
      </motion.div>
    </section>
  )
}
