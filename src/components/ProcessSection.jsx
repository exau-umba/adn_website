export default function ProcessSection() {
  return (
    <section id="processus" className="js-section relative overflow-hidden py-20">
      <div className="section-bg-glow section-bg-glow--left" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Comment ca marche ?</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {['Demande', 'Selection', 'Intervention'].map((item, index) => (
          <article key={item} className="js-card rounded-3xl border border-slate-200 bg-white p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0061a6] text-lg font-bold text-white">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-bold">{item}</h3>
            <p className="mt-2 text-sm text-slate-600">Un parcours simple, clair et rapide pour reserver votre agent.</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}
