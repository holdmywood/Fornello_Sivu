'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { TreePine, Layers, Zap, Flame } from 'lucide-react'

const items = [
  { key: 'sawlogs', Icon: TreePine },
  { key: 'pulpwood', Icon: Layers },
  { key: 'energy_chips', Icon: Zap },
  { key: 'energy_wood', Icon: Flame },
] as const

export function WhatWeSupply() {
  const t = useTranslations('home.supply')

  return (
    <section className="bg-cream-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-bark-900 text-center mb-16"
        >
          {t('heading')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ key, Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-sm border border-moss-200/50"
            >
              <div className="w-14 h-14 rounded-full bg-forest-600/10 flex items-center justify-center mb-5">
                <Icon className="h-7 w-7 text-forest-600" />
              </div>
              <h3 className="font-semibold text-bark-900 text-lg mb-2">
                {t(`${key}.label`)}
              </h3>
              <p className="text-sm text-bark-600 leading-relaxed">
                {t(`${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
