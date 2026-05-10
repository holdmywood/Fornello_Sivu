'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Globe, Leaf, ShieldCheck, Truck } from 'lucide-react'

const pillars = [
  { key: 'supply', Icon: Globe },
  { key: 'sustainability', Icon: Leaf },
  { key: 'quality', Icon: ShieldCheck },
  { key: 'logistics', Icon: Truck },
] as const

export function WhyFornello() {
  const t = useTranslations('home.why')

  return (
    <section className="bg-cream-50 py-24 px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map(({ key, Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-xl bg-white border border-moss-200/50 shadow-sm"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-moss-200 flex items-center justify-center">
                <Icon className="h-6 w-6 text-forest-700" />
              </div>
              <div>
                <h3 className="font-semibold text-bark-900 text-lg mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-bark-600 leading-relaxed text-sm">
                  {t(`${key}.body`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
