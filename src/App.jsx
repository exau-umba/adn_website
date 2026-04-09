import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { title: 'Menage', desc: 'Entretien meticuleux de votre domicile par des mains expertes.' },
  { title: "Garde d'enfants", desc: "Des nounous qualifiees pour l'eveil et la securite de vos enfants." },
  { title: 'Chauffeur', desc: 'Conduite securisee et ponctuelle pour vos deplacements prives.' },
  { title: 'Repassage', desc: 'Un soin particulier pour votre linge, directement a domicile.' },
]

const realisations = [
  { title: 'Residence secondaire a Paris', img: '/stitch-export/assets/img-06.jpg' },
  { title: 'Accompagnement senior', img: '/stitch-export/assets/img-07.jpg' },
  { title: 'Gestion hoteliere privee', img: '/stitch-export/assets/img-08.jpg' },
  { title: 'Transfert aeroport VIP', img: '/stitch-export/assets/img-09.jpg' },
]

const team = [
  { name: 'Marie L.', role: 'Gouvernante', img: '/stitch-export/assets/img-10.jpg' },
  { name: 'Thomas D.', role: 'Chauffeur prive', img: '/stitch-export/assets/img-11.jpg' },
  { name: 'Awa K.', role: "Garde d'enfants", img: '/stitch-export/assets/img-12.jpg' },
  { name: 'Julien S.', role: 'Home manager', img: '/stitch-export/assets/img-13.jpg' },
]

export default function App() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.js-hero-title', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.js-hero-sub', { y: 30, opacity: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' })
      gsap.from('.js-hero-cta', { y: 20, opacity: 0, duration: 0.7, delay: 0.3, ease: 'power3.out' })
      gsap.from('.js-hero-img', { x: 40, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
      gsap.from('.js-section', {
        scrollTrigger: { trigger: '.js-section', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power2.out',
      })
      gsap.utils.toArray('.js-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 85%' },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-[#f8f9ff] text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <img src="/logos/and_pro_service_multiservice_cercle.png" alt="ADN Pro Service" className="h-11 w-11 rounded-full object-cover" />
            <span className="font-serif text-lg font-black text-[#08047a] md:text-xl">ADN PRO SERVICE</span>
          </div>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#services">Services</a>
            <a href="#pourquoi">Pourquoi nous choisir</a>
            <a href="#processus">Processus</a>
            <a href="#temoignage">Temoignages</a>
          </div>
          <button className="rounded-full bg-[#08047a] px-5 py-2 text-xs font-bold text-white md:text-sm">Demander un agent</button>
        </nav>
      </header>

      <main className="pt-20">
        <section className="hero-wave relative overflow-hidden bg-[#08047a] text-white">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#41a2ff]/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-300/35 blur-3xl" />
          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-amber-300 px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#251a00]">
                L'excellence au service de l'humain
              </span>
              <h1 className="js-hero-title mt-5 max-w-xl font-serif text-4xl font-black leading-tight md:text-6xl">
                Des agents fiables, formes et verifies
              </h1>
              <p className="js-hero-sub mt-5 max-w-lg text-lg text-indigo-100">
                Simplifiez votre quotidien avec des professionnels de confiance rigoureusement selectionnes pour votre confort.
              </p>
              <div className="js-hero-cta mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#ffdf95] px-7 py-3 font-bold text-[#251a00]">Demander un agent</button>
                <button className="rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white">Voir les tarifs</button>
              </div>
            </div>
            <div className="js-hero-img relative">
              <img src="/stitch-export/assets/img-02.jpg" alt="Agent menage" className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 text-slate-900 shadow-xl">
                <p className="text-xs font-bold text-[#0061a6]">100% VERIFIE</p>
                <p className="text-sm">Processus de certification strict</p>
              </div>
            </div>
          </div>
        </section>

        <section className="js-section mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img src="/stitch-export/assets/img-03.jpg" alt="Nounou" className="h-72 w-full rounded-3xl object-cover shadow-md md:h-80" />
            <img src="/stitch-export/assets/img-04.jpg" alt="Chauffeur" className="h-72 w-full rounded-3xl object-cover shadow-md md:h-80" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#0061a6]">A propos de nous</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#08047a] md:text-5xl">Nous connectons des clients avec des agents qualifies</h2>
            <p className="mt-5 text-slate-600">
              ADN PRO SERVICE est votre partenaire de confiance pour les services a la personne premium, avec un accompagnement humain et un suivi qualite.
            </p>
          </div>
        </section>

        <section id="services" className="js-section bg-[#f2f3f9] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center font-serif text-3xl font-bold text-[#08047a] md:text-4xl">Nos Services d'Excellence</h2>
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

        <section id="pourquoi" className="js-section mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] bg-[#08047a] p-8 text-white md:p-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold md:text-4xl">Pourquoi nous choisir ?</h2>
              <ul className="mt-6 space-y-4 text-indigo-100">
                <li>Agents verifies (references et antecedents controles)</li>
                <li>Suivi en temps reel et service client dedie</li>
                <li>Securite et assurance responsabilite civile</li>
                <li>Formation continue des agents</li>
              </ul>
            </div>
            <img src="/stitch-export/assets/img-05.jpg" alt="Client satisfait" className="h-80 w-full rounded-3xl object-cover" />
          </div>
        </section>

        <section className="js-section bg-white py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 text-center md:grid-cols-3">
            <div className="js-card rounded-3xl bg-[#f2f3f9] p-7">
              <p className="text-4xl font-black text-[#0061a6]">500+</p>
              <p className="mt-2 font-semibold text-slate-600">Nombre d'agents</p>
            </div>
            <div className="js-card rounded-3xl bg-[#f2f3f9] p-7">
              <p className="text-4xl font-black text-[#0061a6]">2500+</p>
              <p className="mt-2 font-semibold text-slate-600">Clients satisfaits</p>
            </div>
            <div className="js-card rounded-3xl bg-[#f2f3f9] p-7">
              <p className="text-4xl font-black text-[#0061a6]">15k+</p>
              <p className="mt-2 font-semibold text-slate-600">Missions realisees</p>
            </div>
          </div>
        </section>

        <section id="processus" className="js-section mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-center font-serif text-3xl font-bold text-[#08047a] md:text-4xl">Comment ca marche ?</h2>
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
        </section>

        <section className="js-section bg-[#f2f3f9] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center font-serif text-3xl font-bold text-[#08047a] md:text-4xl">Nos Realisations</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {realisations.map((item) => (
                <article key={item.title} className="js-card group relative overflow-hidden rounded-3xl">
                  <img src={item.img} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-64" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                    <p className="font-bold text-white">{item.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="js-section mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl font-bold text-[#08047a] md:text-4xl">Nos Agents Ambassadeurs</h2>
            <button className="rounded-full border border-[#0061a6]/30 px-5 py-2 text-sm font-semibold text-[#0061a6]">Rejoindre l'equipe</button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="js-card">
                <img src={member.img} alt={member.name} className="h-72 w-full rounded-3xl object-cover" />
                <p className="mt-3 text-lg font-bold">{member.name}</p>
                <p className="text-sm text-[#0061a6]">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="temoignage" className="js-section bg-[#01003b] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ffdf95]">Avis clients</p>
              <h2 className="mt-4 font-serif text-4xl font-bold">Ils nous font confiance au quotidien</h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8">
              <p className="text-lg text-indigo-100">
                "Trouver une personne de confiance etait un calvaire. Avec ADN PRO SERVICE, j'ai trouve en 48h une perle rare."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img src="/stitch-export/assets/img-14.jpg" alt="Sophie Marchand" className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-bold">Sophie Marchand</p>
                  <p className="text-sm text-indigo-200">Dirigeante Tech, Paris</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="js-section mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] bg-[#e7e8ee] p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-[#08047a] md:text-4xl">Pret a simplifier votre vie ?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">Reservez votre premier agent en quelques clics et beneficiez de 50% de credit d'impot.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className="rounded-full bg-[#08047a] px-7 py-3 font-bold text-white">Reservez votre agent</button>
              <button className="rounded-full border border-slate-300 bg-white px-7 py-3 font-bold text-slate-700">Voir les tarifs</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white" id="contact">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logos/and_pro_service_multiservice_cercle.png" alt="logo ADN" className="h-9 w-9 rounded-full object-cover" />
              <p className="font-serif text-lg font-black text-[#08047a]">ADN PRO SERVICE</p>
            </div>
            <p className="mt-4 text-sm text-slate-600">L'excellence du service a la personne pour particuliers et entreprises.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Services</li>
              <li>Pourquoi nous choisir</li>
              <li>Tarifs</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Informations</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Contact</li>
              <li>Mentions legales</li>
              <li>Confidentialite</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Contact</p>
            <p className="mt-4 text-sm text-slate-600">12 Rue de la Paix, 75002 Paris</p>
            <p className="text-sm text-slate-600">+33 (0)1 23 45 67 89</p>
            <p className="text-sm text-slate-600">contact@adnproservice.fr</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
