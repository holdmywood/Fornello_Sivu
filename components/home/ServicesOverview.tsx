'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import { ArrowRight } from 'lucide-react'

const services = ['roundwood', 'software', 'consulting'] as const

export function ServicesOverview() {
  const t = useTranslations('home.services_overview')

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border-t-4 border-forest-600 p-8 flex flex-col"
            >
              <h3 className="font-bold text-bark-900 text-xl mb-3">
                {t(`${key}.title`)}
              </h3>
              <p className="text-bark-600 text-sm leading-relaxed mb-6 flex-1">
                {t(`${key}.body`)}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors group"
              >
                {t(`${key}.cta`)}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
