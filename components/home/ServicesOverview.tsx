'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  { key: 'roundwood', href: '/services/roundwood', image: '/images/service-roundwood.png' },
  { key: 'software',  href: '/services/software',  image: '/images/service-software.jpg' },
  { key: 'consulting', href: '/services/consulting', image: '/images/service-consulting.jpg' },
] as const

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
          {services.map(({ key, href, image }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -8px rgba(0,0,0,0.18)' }}
              className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col cursor-pointer"
              style={{ transition: 'box-shadow 0.35s ease, transform 0.35s ease' }}
            >
              <div className="relative h-48 shrink-0">
                <Image
                  src={image}
                  alt={t(`${key}.title`)}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 384px, 100vw"
                />
              </div>
              <div className="border-t-4 border-forest-600 p-6 flex flex-col flex-1">
                <h3 className="font-bold text-bark-900 text-xl mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-bark-600 text-sm leading-relaxed mb-6 flex-1">
                  {t(`${key}.body`)}
                </p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors group"
                >
                  {t(`${key}.cta`)}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
