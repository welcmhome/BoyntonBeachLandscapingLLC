'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROTATING_PHRASES = ['Peace in.', 'Done right.', 'Problem solved.']

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Hero: on mobile = white + content + image below; on desktop = full-bleed background */}
      <div className="relative flex flex-col lg:min-h-[72vh] lg:flex-row lg:items-center">
        {/* Background image — desktop only */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <img
            src="/assets/hero-technician-truck.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
        </div>

        {/* Content — white on mobile, over background on desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-12 pt-32 sm:pt-36 lg:pt-28 pb-10 sm:pb-12 lg:pb-24 bg-white lg:bg-transparent">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4"
          >
            South Florida
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-oswald text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] uppercase tracking-tight"
          >
            Pests out.<br />
            <span className="inline-block overflow-hidden h-[1.05em] leading-none align-top min-w-[14ch] sm:min-w-[16ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="block text-primary-green"
                >
                  {ROTATING_PHRASES[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="origin-left mt-5 h-1 w-24 bg-primary-green"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-gray-600 max-w-sm"
          >
            In & Out Florida Pest Control — licensed, same-day, bilingual. Free estimates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:9542134572"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-bold rounded-none text-base hover:bg-black transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call now
            </a>
            <a
              href="#services"
              className="inline-flex items-center text-gray-700 font-semibold text-sm border-b-2 border-transparent hover:border-primary-green hover:text-primary-green transition-colors"
            >
              Our services →
            </a>
          </motion.div>
        </div>

        {/* Mobile only: image below content — tall so user scrolls to see full picture */}
        <div className="lg:hidden relative w-full h-[78vh] min-h-[420px] flex-shrink-0 overflow-hidden">
          <img
            src="/assets/hero-technician-truck.png"
            alt="In & Out Florida Pest Control technician with company truck"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Trust bar — green to match logo; single row on mobile like desktop */}
      <div className="relative z-20 bg-primary-green text-white py-3 px-4 lg:py-4 lg:px-6">
        <div className="max-w-5xl mx-auto flex flex-nowrap justify-center gap-4 sm:gap-6 lg:gap-12 text-center text-xs sm:text-sm font-semibold overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Licensed & Insured
          </span>
          <span>Same-day service</span>
          <span>Free estimates</span>
          <span>Bilingual EN / ES</span>
          <span className="font-bold">5.0 Google</span>
        </div>
      </div>
    </section>
  )
}
