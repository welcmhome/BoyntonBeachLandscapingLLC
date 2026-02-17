'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const localImages = [
  '/assets/2023-06-29.webp',   // Landscaping Design & Installation
  '/assets/2023-09-12.webp',   // Lawn Care & Maintenance
  '/assets/97f7ddda-1ff6-4793-b6ef-0a69ce7da30b.webp',   // Garden & Planting
  '/assets/a71bdc31-bdfe-45bc-a0cb-3832f167f1fb.webp',   // Tree & Shrub Care
  '/assets/aba95107-48fb-4f6a-a46e-2ac9b525c128.webp',   // Irrigation & Watering
  '/assets/d5264d87-e33a-417a-b0f2-7ac95d107cc9.webp',   // Commercial Landscaping
]

const services = [
  {
    name: 'Landscaping Design & Installation',
    description: 'Full landscape design and installation. We transform your property with quality plants, hardscape, and attention to detail.',
    image: localImages[0],
  },
  {
    name: 'Lawn Care & Maintenance',
    description: 'Regular mowing, edging, and upkeep to keep your lawn healthy and looking its best year-round.',
    image: localImages[1],
  },
  {
    name: 'Garden & Planting',
    description: 'Professional planting, mulching, and garden beds. We treat your property as if it were our own.',
    image: localImages[2],
  },
  {
    name: 'Tree & Shrub Care',
    description: 'Trimming, pruning, and care for trees and shrubs. Safety and efficiency are our top priorities.',
    image: localImages[3],
  },
  {
    name: 'Irrigation & Watering',
    description: 'Efficient irrigation design and repair so your landscape stays healthy with minimal waste.',
    image: localImages[4],
  },
  {
    name: 'Commercial Landscaping',
    description: 'Commercial properties, HOAs, and businesses. We deliver consistent quality and lasting results.',
    image: localImages[5],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-white border-t border-gray-200" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="border-l-4 border-primary-blue pl-6 mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary-blue font-semibold text-sm uppercase tracking-wider"
          >
            What we offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1"
          >
            Landscaping & gardening services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col sm:flex-row overflow-hidden bg-white rounded-none border border-gray-200 hover:border-primary-blue/50 hover:shadow-lg transition-all"
            >
              <div className="sm:w-2/5 relative h-44 sm:h-auto sm:min-h-[180px] flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/30 to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
