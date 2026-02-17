'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  { title: '20+ Years Experience', description: 'Built an excellent reputation for client satisfaction.', color: 'blue' },
  { title: 'Free Estimates', description: 'No obligation. We give honest, competitive quotes.', color: 'orange' },
  { title: 'Residential & Commercial', description: 'Homes, offices, and everything in between.', color: 'yellow' },
  { title: 'Attention to Detail', description: 'We treat your property as if it were our own.', color: 'blue' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" ref={ref} className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-amber-50/40 to-slate-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((item, index) => {
            const isBlue = item.color === 'blue'
            const isOrange = item.color === 'orange'
            const isYellow = item.color === 'yellow'
            const bgClass = isBlue ? 'bg-primary-blue/15' : isOrange ? 'bg-accent-orange/15' : 'bg-accent-yellow/20'
            const iconClass = isBlue ? 'text-primary-blue' : isOrange ? 'text-accent-orange' : 'text-accent-yellow'
            const borderHover = isBlue ? 'hover:border-primary-blue/40' : isOrange ? 'hover:border-accent-orange/40' : 'hover:border-accent-yellow/50'
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-none p-6 border border-gray-200 text-center ${borderHover} hover:shadow-md transition-all`}
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-none ${bgClass} flex items-center justify-center`}>
                  <svg className={`w-6 h-6 ${iconClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-none overflow-hidden border-2 border-gray-900/20"
          >
            <img
              src="https://images.unsplash.com/photo-1558904541-efa84396f2eb?w=1200&q=80"
              alt="Boynton Beach Landscaping LLC — quality landscaping and gardening"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-2">Why Boynton Beach Landscaping</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Quality work and lasting relationships
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We value honesty and integrity. Safety and efficiency are among our top priorities, guaranteeing a great project from start to finish. We strive to build lasting relationships and guarantee your satisfaction.
            </p>
            <a
              href="tel:5611234567"
              className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 lg:px-6 lg:py-3 bg-gray-900 text-white font-bold rounded-none text-lg lg:text-base hover:bg-black transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call for a free estimate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
