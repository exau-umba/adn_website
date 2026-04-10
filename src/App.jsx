import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhySection from './components/WhySection'
import StatsSection from './components/StatsSection'
import ProcessSection from './components/ProcessSection'
import RealisationsSection from './components/RealisationsSection'
import TeamSection from './components/TeamSection'
import TestimonialSection from './components/TestimonialSection'
import CtaSection from './components/CtaSection'
import DownloadSection from './components/DownloadSection'
import TarifsSection from './components/TarifsSection'
import ContactSection from './components/ContactSection'
import BackToTopButton from './components/BackToTopButton'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.js-hero-sub', { y: 30, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' })
      gsap.from('.js-hero-cta', { y: 20, opacity: 0, duration: 0.7, delay: 0.3, ease: 'power3.out' })
      gsap.from('.js-hero-img', { x: 40, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })

      gsap.from('.js-section', {
        scrollTrigger: { trigger: '.js-section', start: 'top 82%' },
        y: 34,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
      })

      gsap.utils.toArray('.js-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 86%' },
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div id="top" ref={pageRef} className="min-h-screen bg-[#f8f9ff] text-slate-900">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <StatsSection />
        <ProcessSection />
        <RealisationsSection />
        <TeamSection />
        <TestimonialSection />
        <TarifsSection />
        <CtaSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
