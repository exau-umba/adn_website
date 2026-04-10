export default function StatsSection() {
  return (
    <section className="js-section relative overflow-hidden bg-white py-14">
      <div className="section-bg-glow section-bg-glow--center" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 text-center md:grid-cols-3">
        <div className="js-card rounded-3xl bg-[#f2f3f9] p-7">
          <p className="text-4xl font-black text-[#0061a6]">500+</p>
          <p className="mt-2 font-semibold text-slate-600">Nombre d'Agents</p>
        </div>
        <div className="js-card rounded-3xl bg-[#f2f3f9] p-7">
          <p className="text-4xl font-black text-[#0061a6]">2500+</p>
          <p className="mt-2 font-semibold text-slate-600">Clients Satisfaits</p>
        </div>
        <div className="js-card rounded-3xl bg-[#f2f3f9] p-7">
          <p className="text-4xl font-black text-[#0061a6]">15k+</p>
          <p className="mt-2 font-semibold text-slate-600">Missions réalisées</p>
        </div>
      </div>
    </section>
  )
}
