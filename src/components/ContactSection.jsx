export default function ContactSection() {
  return (
    <section id="contact" className="js-section relative overflow-hidden bg-white py-20">
      <div className="section-bg-glow section-bg-glow--left" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#08047a]">Contact</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-[#08047a] md:text-4xl">Parlons de votre besoin</h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Une equipe vous repond rapidement pour vous proposer un service adapte a votre domicile ou votre entreprise.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-700">
            <p>Kinshasa, RD Congo</p>
            <p>+243 82 90 84 314</p>
            <p>contact@adnproservice.com</p>
          </div>
        </div>

        <form className="js-card rounded-[1.6rem] border border-slate-200 bg-[#f8f9ff] p-6 shadow-sm md:p-8">
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#08047a]"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#08047a]"
            />
            <textarea
              rows="5"
              placeholder="Expliquez votre besoin..."
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#08047a]"
            />
            <button type="button" className="rounded-full bg-[#08047a] px-5 py-3 text-sm font-bold text-white">
              Envoyer ma demande
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
