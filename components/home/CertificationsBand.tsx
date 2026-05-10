'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const certs = ['FSC®', 'PEFC', 'REDIII', 'EUDR']

export function CertificationsBand() {
  const t = useTranslations('home.certifications')

  return (
    <section className="bg-forest-700 py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-moss-200 mb-8">
          {t('heading')}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {certs.map((cert) => (
            <span
              key={cert}
              className="px-5 py-2 rounded-full border border-moss-400/40 text-white text-sm font-medium tracking-wide"
            >
              {cert}
            </span>
          ))}
        </div>
        <p className="text-moss-200 text-sm">{t('note')}</p>
      </motion.div>
    </section>
  )
}
