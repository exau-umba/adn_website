import { Link } from 'react-router-dom'
import { estOffreExpiree, formatDateFR, offres } from '../data/offres'

export default function OffresSection() {
  return (
    <section id="offres" className="js-section bg-white px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#08047a]">Recrutement</p>
          <h2 className="mt-3 font-heading text-3xl font-black text-slate-900 md:text-4xl">Toutes nos offres</h2>
          <p className="mt-4 text-sm text-slate-600 md:text-base">
            Retrouvez ici toutes les offres de recrutement publiees par ADN Pro Service.
          </p>
        </div>

        {offres.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <h3 className="text-lg font-bold text-slate-900">Aucune offre disponible pour le moment</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Revenez bientot : nos prochaines offres de recrutement seront publiees ici.
            </p>
            <a
              href="/#contact"
              className="mt-5 inline-flex rounded-full bg-[#08047a] px-4 py-2 text-xs font-bold text-white hover:bg-[#0b06a6]"
            >
              Nous contacter
            </a>
          </div>
        ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offres.map((offre) => {
            const expiree = estOffreExpiree(offre.dateFin)

            return (
              <article
                key={offre.id}
                className={`js-card rounded-2xl border p-6 transition ${
                  expiree ? 'cursor-not-allowed border-slate-200 bg-slate-100 opacity-70' : 'border-slate-200 bg-slate-50'
                }`}
              >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#08047a]">{offre.type}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{offre.titre}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">{offre.lieu}</p>
              <div className="mt-3 space-y-1 text-xs text-slate-600">
                <p>Date de publication: {formatDateFR(offre.datePublication)}</p>
                <p>Date de fin: {formatDateFR(offre.dateFin)}</p>
                <p>Nombre de personnel: {offre.nombrePersonnel}</p>
              </div>
              <p
                className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  expiree ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}
              >
                {expiree ? 'Offre arrivee a echeance' : 'Offre encore valide'}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{offre.description}</p>
              <div className="mt-5">
                <Link
                  to={`/offres/${offre.id}`}
                  className="inline-flex rounded-full bg-[#08047a] px-4 py-2 text-xs font-bold text-white hover:bg-[#0b06a6]"
                >
                  Voir detail
                </Link>
              </div>
            </article>
            )
          })}
        </div>
        )}
      </div>
    </section>
  )
}
