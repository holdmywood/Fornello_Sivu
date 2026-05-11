'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const IMAGES = [
  '/images/kuvabank.jpg',
  '/images/kuvabank2.jpg',
  '/images/kuvabank3.jpg',
  '/images/kuvabank4.jpg',
  '/images/kuvabank5.jpg',
  '/images/kuvabank6.jpg',
  '/images/kuvabank7.jpg',
  '/images/kuvabank8.jpg',
  '/images/kuvabank9.jpg',
  '/images/kuvabank10.jpg',
]

const INTERVAL = 5000

export function CtaSection() {
  const t = useTranslations('home.gallery')
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const advance = useCallback((dir: 1 | -1) => {
    setCurrent((c) => {
      const next = (c + dir + IMAGES.length) % IMAGES.length
      setPrev(c)
      return next
    })
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => advance(1), INTERVAL)
  }, [advance])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const go = (dir: 1 | -1) => {
    advance(dir)
    resetTimer()
  }

  const goTo = (i: number) => {
    setPrev(current)
    setCurrent(i)
    resetTimer()
  }

  return (
    <section>
      {/* Carousel */}
      <div className="relative w-full h-[520px] md:h-[640px] overflow-hidden">
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : i === prev ? 1 : 0 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Heading + CTA bar — overlaid at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-forest-700/90 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <h2 className="text-base md:text-lg font-semibold text-white tracking-tight">
            {t('heading')}
          </h2>
          <div className="flex items-center gap-4">
            {/* Dots */}
            <div className="flex gap-1.5">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <a
              href="https://photos.app.goo.gl/8RAqENR2784UVkp29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
            >
              {t('button')}
            </a>
          </div>
        </div>
      </div>
      <div className="h-10 bg-white" />
    </section>
  )
}
