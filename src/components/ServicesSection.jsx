const services = [
  { title: 'Ménage', desc: 'Entretien méticuleux de votre domicile par des mains expertes.' },
  { title: "Garde d'enfants", desc: "Des nounous qualifiées pour l'éveil et la sécurité de vos enfants." },
  { title: 'Chauffeur', desc: 'Conduite sécurisée et ponctuelle pour vos déplacements privés.' },
  { title: 'Repassage', desc: 'Un soin particulier pour votre linge, directement à domicile.' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="js-section relative overflow-hidden bg-[#f2f3f9] py-20">
      <div className="section-bg-glow section-bg-glow--right" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h2 className="text-center font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Nos Services d'Excellence</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="js-card rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
