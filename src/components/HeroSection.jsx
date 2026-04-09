import { FaCircleCheck } from 'react-icons/fa6'

export default function HeroSection() {
  const heroImages = {
    bg: '/images/hero-bg.jpg',
    main: '/images/hero-main.jpg',
    second: '/images/about-1.jpg',
  }

  return (
    <section className="hero-wave relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <img src={heroImages.bg} alt="" className="h-full w-full object-cover object-center opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(65,162,255,0.45),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,223,149,0.32),transparent_30%),linear-gradient(130deg,rgba(8,4,122,0.95),rgba(1,0,59,0.92))]" />
      </div>
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#41a2ff]/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-300/35 blur-3xl" />

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-8 px-4 py-12 md:px-6 md:py-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="inline-block rounded-full bg-amber-300 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#251a00] md:px-4 md:text-xs">
            L'excellence au service de l'humain
          </span>
          <h1 className="js-hero-title mt-4 max-w-xl font-heading text-[34px] font-black leading-tight sm:text-4xl md:mt-5 md:text-6xl">
            Des agents fiables, formés et vérifiés
          </h1>
          <p className="js-hero-sub mt-4 max-w-lg text-base text-indigo-100 md:mt-5 md:text-lg">
            Simplifiez votre quotidien avec des professionnels de confiance rigoureusement selectionnes pour votre confort.
          </p>
          <div className="js-hero-cta mt-7 flex flex-wrap gap-3 md:mt-8">
            <button className="rounded-full bg-[#ffdf95] px-5 py-2.5 text-sm font-bold text-[#251a00] md:px-7 md:py-3 md:text-base">Demander un agent</button>
            <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white md:px-7 md:py-3 md:text-base">Voir les tarifs</button>
          </div>
        </div>

        <div className="js-hero-img relative">
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="hero-deck absolute inset-0">
              <article className="hero-card hero-card-a">
                <img src={heroImages.main} alt="Agent menage professionnel" className="h-full w-full object-cover" />
              </article>
              <article className="hero-card hero-card-b">
                <img src={heroImages.second} alt="Service de garde d'enfants" className="h-full w-full object-cover" />
              </article>
            </div>
          </div>

          <div className="absolute -bottom-5 left-3 rounded-2xl bg-white/95 p-3 text-slate-900 shadow-xl md:-bottom-6 md:-left-6 md:p-4">
            <p className="inline-flex items-center gap-2 text-xs font-bold text-[#0061a6]">
              <FaCircleCheck className="text-sm" aria-hidden="true" />
              100% VÉRIFIÉ
            </p>
            <p className="text-sm">Processus de certification strict</p>
          </div>
        </div>
      </div>
    </section>
  )
}
