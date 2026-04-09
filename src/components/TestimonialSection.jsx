import { useEffect, useState } from 'react'

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Trouver une personne de confiance etait un calvaire. Avec ADN PRO SERVICE, j'ai trouve en 48h une perle rare.",
      name: 'Sophie Marchand',
      role: 'Dirigeante Tech, Paris',
      avatar: '/images/testimonial.jpg',
    },
    {
      quote:
        "Service ultra reactif. Notre agent est ponctuel, discret et tres professionnel. Je recommande vivement.",
      name: 'Jean-Pierre L.',
      role: 'Consultant, Abidjan',
      avatar: '/images/team-2.jpg',
    },
    {
      quote:
        "La plateforme est simple et le suivi est excellent. Nous avons enfin un service fiable pour la famille.",
      name: 'Aminata K.',
      role: 'Entrepreneure, Dakar',
      avatar: '/images/team-3.jpg',
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timeoutId
    const intervalId = window.setInterval(() => {
      setIsVisible(false)

      timeoutId = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsVisible(true)
      }, 340)
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [testimonials.length])

  const activeTestimonial = testimonials[currentIndex]

  return (
    <section id="temoignage" className="js-section relative overflow-hidden bg-[#01003b] py-20 text-white">
      <div className="section-bg-noise section-bg-noise--light" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#ffdf95]">Avis clients</p>
          <h2 className="mt-4 font-heading text-4xl font-bold">Ils nous font confiance au quotidien</h2>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 md:p-4">
          <article
            className={`rounded-[1.4rem] bg-white/8 p-6 transition-all duration-300 md:p-8 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
          >
            <p className="text-lg text-indigo-100">"{activeTestimonial.quote}"</p>
            <div className="mt-6 flex items-center gap-4">
              <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="font-bold">{activeTestimonial.name}</p>
                <p className="text-sm text-indigo-200">{activeTestimonial.role}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
