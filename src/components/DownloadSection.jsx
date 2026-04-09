import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa6'

export default function DownloadSection() {
  return (
    <section className="js-section relative overflow-hidden py-6 pb-20 md:py-10 md:pb-24">
      <div className="section-bg-glow section-bg-glow--right" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#08047a] p-8 text-white md:p-12">
        <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#41a2ff]/35 blur-3xl" />
        <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-[#ffdf95]/30 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#ffdf95]">Application mobile</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Telechargez notre app client
            </h2>
            <p className="mt-4 max-w-xl text-indigo-100">
              Faites votre demande d'agent en quelques clics, suivez vos reservations et echangez facilement avec notre equipe depuis votre mobile.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-start lg:justify-end">
            <a
              href="#"
              className="js-card inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white px-6 py-4 text-center font-bold text-[#08047a] shadow-lg transition hover:-translate-y-0.5"
              aria-label="Telecharger sur Android"
            >
              <FaGooglePlay className="text-lg" />
              Google Play
            </a>
            <a
              href="#"
              className="js-card inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black px-6 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              aria-label="Telecharger sur iOS"
            >
              <FaAppStoreIos className="text-lg" />
              App Store
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
