export default function TestimonialSection() {
  return (
    <section id="temoignage" className="js-section bg-[#01003b] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#ffdf95]">Avis clients</p>
          <h2 className="mt-4 font-heading text-4xl font-bold">Ils nous font confiance au quotidien</h2>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8">
          <p className="text-lg text-indigo-100">
            "Trouver une personne de confiance etait un calvaire. Avec ADN PRO SERVICE, j'ai trouve en 48h une perle rare."
          </p>
          <div className="mt-6 flex items-center gap-4">
            <img src="/images/testimonial.jpg" alt="Sophie Marchand" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-bold">Sophie Marchand</p>
              <p className="text-sm text-indigo-200">Dirigeante Tech, Paris</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
