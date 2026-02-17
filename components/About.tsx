'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-none overflow-hidden shadow-lg border border-gray-200"
          >
            <img
              src="/assets/2023-02-02.webp"
              alt="Boynton Beach Landscaping LLC — quality landscaping and gardening"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-l-4 border-primary-blue pl-6 mb-8">
              <p className="text-primary-blue font-semibold text-sm uppercase tracking-wider mb-1">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Boynton Beach Landscaping LLC
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              We pride ourselves on being the best gardening company in the area. With over 20 years of experience we have built an excellent reputation for client satisfaction through high-quality work, free estimates, great attention to detail, and competitive pricing. We value honesty and integrity, and treat your property as if it were our own. Safety and efficiency are among our top priorities, guaranteeing a great project from start to finish. We strive to build lasting relationships with each of our customers and guarantee their satisfaction.
            </p>

            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <div className="px-4 py-2 bg-primary-blue text-white font-semibold rounded-none text-sm">
                20+ Years Experience
              </div>
              <div className="px-4 py-2 bg-accent-orange text-white font-semibold rounded-none text-sm">
                Free Estimates
              </div>
              <div className="px-4 py-2 bg-gray-900 text-white font-semibold rounded-none text-sm">
                Residential & Commercial
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
