'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROTATING_PHRASES = [
  { text: 'Done right.', color: 'text-primary-blue lg:text-primary-blue-light' },
  { text: 'Your property.', color: 'text-accent-orange lg:text-accent-orange' },
  { text: 'Satisfaction.', color: 'text-accent-yellow lg:text-accent-yellow' },
]

const heroReviewSnippets = [
  { name: 'Maria R.', location: 'Boynton Beach', quote: 'Best landscaping company in the area. Quality work and fair pricing.' },
  { name: 'James T.', location: 'Delray Beach', quote: 'Over 20 years of experience shows. Our yard has never looked better.' },
  { name: 'Sandra L.', location: 'Boca Raton', quote: 'Free estimate, great attention to detail. Treated our property like their own.' },
  { name: 'David M.', location: 'Lake Worth', quote: 'Honest, efficient, and built a lasting relationship. Highly recommend.' },
]

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
      <div className="relative flex flex-col lg:min-h-[80vh] lg:flex-row lg:items-center">
        {/* Background image — desktop only; shifted right + slight zoom to show person */}
        <div className="absolute inset-0 z-0 hidden lg:block overflow-hidden">
          <img
            src="/assets/tropical-landscape-design.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-right scale-105"
          />
          {/* Gradient from lower-left up (softer on the left) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent pointer-events-none" />
          {/* Grain overlay — desktop only */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
            aria-hidden
          />
        </div>

        {/* Content — white on mobile (tall so only ~1/3 of image visible), over background on desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:pl-5 xl:pl-8 lg:pr-8 pt-40 sm:pt-44 lg:pt-44 pb-12 sm:pb-14 lg:pb-32 bg-white lg:bg-transparent min-h-[62vh] lg:min-h-0 flex flex-col justify-start lg:justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold text-gray-500 lg:text-gray-300 uppercase tracking-[0.2em] mb-4"
          >
            Boynton Beach Landscaping LLC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-oswald text-6xl sm:text-7xl lg:text-6xl xl:text-7xl font-bold text-gray-900 lg:text-white leading-[1.05] uppercase tracking-tight"
          >
            Landscaping<br />
            <span className="inline-block overflow-hidden h-[1.05em] leading-none align-top min-w-[14ch] sm:min-w-[16ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`block ${ROTATING_PHRASES[phraseIndex].color}`}
                >
                  {ROTATING_PHRASES[phraseIndex].text}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="origin-left mt-5 h-1 w-24 bg-gray-400 lg:bg-gray-300"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="hidden lg:block mt-6 text-base sm:text-lg text-gray-600 lg:text-gray-300 max-w-sm"
          >
            Over 20 years of experience. Free estimates, quality work, and competitive pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-auto lg:mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:5611234567"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 lg:bg-white lg:text-gray-900 text-white font-bold rounded-none text-base hover:bg-black lg:hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call now
            </a>
            <a
              href="#services"
              className="inline-flex items-center text-gray-700 lg:text-gray-300 font-semibold text-sm border-b-2 border-transparent hover:border-gray-500 hover:text-gray-900 lg:hover:text-white transition-colors"
            >
              Our services →
            </a>
          </motion.div>
        </div>

        {/* Mobile only: image below content — modest size, with dark overlay */}
        <div className="lg:hidden relative w-full h-[40vh] min-h-[220px] flex-shrink-0 overflow-hidden">
          <img
            src="/assets/tropical-landscape-design.jpg"
            alt="Boynton Beach Landscaping LLC — quality landscaping and gardening"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>
      </div>

      {/* Scrolling review bar — back below hero */}
      <div className="relative z-20 border-t border-gray-100 bg-gray-50/80 py-2 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...heroReviewSnippets, ...heroReviewSnippets].map((r, i) => (
            <div key={i} className="flex items-center gap-4 px-8 flex-shrink-0">
              <div className="flex gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm font-medium whitespace-nowrap">
                {r.quote}
              </span>
              <span className="text-gray-400 text-xs whitespace-nowrap">
                — {r.name}, {r.location}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust bar — turquoise gradient */}
      <div className="relative z-20 bg-gradient-to-r from-primary-blue to-primary-blue-light text-white py-3 px-4 lg:py-4 lg:px-6">
        <div className="max-w-5xl mx-auto flex flex-nowrap justify-center gap-4 sm:gap-6 lg:gap-12 text-center text-xs sm:text-sm font-semibold overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Licensed & Insured
          </span>
          <span>Free estimates</span>
          <span>20+ years experience</span>
          <span>Residential & Commercial</span>
          <span className="font-bold">5.0 Google</span>
        </div>
      </div>
    </section>
  )
}
