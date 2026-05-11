'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Globe, Leaf, ShieldCheck, Truck, type LucideIcon } from 'lucide-react'

type PillarKey = 'supply' | 'sustainability' | 'quality' | 'logistics'

const pillars: { key: PillarKey; Icon: LucideIcon }[] = [
  { key: 'supply', Icon: Globe },
  { key: 'sustainability', Icon: Leaf },
  { key: 'quality', Icon: ShieldCheck },
  { key: 'logistics', Icon: Truck },
]

function AnimatedFeatureIcon({
  iconKey,
  Icon,
  delay,
}: {
  iconKey: PillarKey
  Icon: LucideIcon
  delay: number
}) {
  const shouldReduce = useReducedMotion()
  const cls = 'h-6 w-6 text-forest-700'

  if (shouldReduce) return <Icon className={cls} />

  const enterAnimation = {
    supply:         { rotate: [0, 22, -8, 0] as number[],     transition: { duration: 2.4, ease: 'easeInOut' as const, delay } },
    sustainability: { rotate: [0, -10, 7, -4, 0] as number[], transition: { duration: 2.8, ease: 'easeInOut' as const, delay } },
    quality:        { scale:  [1, 1.18, 1] as number[],       transition: { duration: 1.6, ease: 'easeInOut' as const, delay } },
    logistics:      { x: 0,                                   transition: { duration: 0.85, ease: 'easeOut' as const,  delay } },
  }

  const hoverAnimation = {
    supply:         { rotate: [0, 28, 0] as number[],         transition: { duration: 1.4, ease: 'easeInOut' as const } },
    sustainability: { rotate: [0, -12, 9, -5, 0] as number[], transition: { duration: 1.8, ease: 'easeInOut' as const } },
    quality:        { scale:  [1, 1.22, 1] as number[],       transition: { duration: 0.9, ease: 'easeInOut' as const } },
    logistics:      { x: [-5, 0] as number[],                 transition: { duration: 0.5, ease: 'easeOut' as const  } },
  }

  return (
    <motion.div
      className="flex items-center justify-center"
      initial={iconKey === 'logistics' ? { x: -20 } : undefined}
      whileInView={enterAnimation[iconKey]}
      whileHover={hoverAnimation[iconKey]}
      viewport={{ once: true }}
    >
      <Icon className={cls} />
    </motion.div>
  )
}

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
              <div className="shrink-0 w-12 h-12 rounded-full bg-moss-200 flex items-center justify-center overflow-hidden">
                <AnimatedFeatureIcon iconKey={key} Icon={Icon} delay={0.6 + i * 0.1} />
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
