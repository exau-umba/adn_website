export default function CtaSection() {
  return (
    <section className="js-section relative overflow-hidden py-20">
      <div className="section-bg-glow section-bg-glow--left" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="rounded-[2rem] bg-[#e7e8ee] p-10 text-center md:p-16">
        <h2 className="font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Prêt à simplifier votre vie ?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">Réservez votre premier agent en quelques clics et bénéficiez de 50% de crédit d'impôt.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-[#08047a] px-7 py-3 font-bold text-white">Réserver votre agent</button>
          <button className="rounded-full border border-slate-300 bg-white px-7 py-3 font-bold text-slate-700"><a href="#tarifs">Voir les Tarifs</a></button>
        </div>
      </div>
      </div>
    </section>
  )
}
