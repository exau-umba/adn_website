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

  return (
    <section id="temoignage" className="js-section relative overflow-hidden bg-[#01003b] py-20 text-white">
      <div className="section-bg-noise section-bg-noise--light" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#ffdf95]">Avis clients</p>
          <h2 className="mt-4 font-heading text-4xl font-bold">Ils nous font confiance au quotidien</h2>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 md:p-4">
          <div className="testimonial-track flex gap-4">
            {[...testimonials, ...testimonials].map((item, index) => (
              <article key={`${item.name}-${index}`} className="min-w-full rounded-[1.4rem] bg-white/8 p-6 md:p-8">
                <p className="text-lg text-indigo-100">"{item.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-indigo-200">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
