'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceAreas from '@/components/ServiceAreas'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen pb-14 lg:pb-0">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <About />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
      <FloatingCallButton />
      <ScrollToTop />

      {/* Fixed Get a quote bar — mobile, bottom, green */}
      <a
        href="#contact"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex items-center justify-center w-full bg-primary-green text-white font-bold text-sm uppercase tracking-wide py-4 px-4 hover:bg-primary-green-dark active:opacity-90 transition-colors"
        style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        Get a quote
      </a>
  )
}
