export default function AboutSection() {
  return (
    <section className="js-section relative overflow-hidden">
      <div className="section-bg-glow section-bg-glow--left" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <div className="grid grid-cols-2 gap-4 relative z-10">
        <img src="/images/about-1.jpg" alt="Nounou" className="h-72 w-full rounded-3xl object-cover shadow-md md:h-80" />
        <img src="/images/about-2.jpg" alt="Chauffeur" className="h-72 w-full rounded-3xl object-cover shadow-md md:h-80" />
      </div>
      <div className="relative z-10">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#0061a6]">A propos de nous</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-[#08047a] md:text-5xl">Nous connectons des clients avec des agents qualifiés</h2>
        <p className="mt-5 text-slate-600">
          ADN PRO SERVICE est votre partenaire de confiance pour les services à la personne premium, avec un accompagnement humain et un suivi qualité.
        </p>
      </div>
      </div>
    </section>
  )
}
