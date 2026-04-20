import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { estOffreExpiree, formatDateFR, offres } from '../data/offres'

export default function OffreDetailPage() {
  const { offreId } = useParams()
  const offre = offres.find((item) => item.id === offreId)

  if (!offre) {
    return (
      <div id="top" className="min-h-screen bg-[#f8f9ff] text-slate-900">
        <Header />
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-28 md:px-6">
          <p className="text-sm text-slate-600">Offre introuvable.</p>
          <Link to="/offres" className="mt-4 inline-flex rounded-full bg-[#08047a] px-4 py-2 text-xs font-bold text-white">
            Retour aux offres
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const expiree = estOffreExpiree(offre.dateFin)

  return (
    <div id="top" className="min-h-screen bg-[#f8f9ff] text-slate-900">
      <Header />
      <main className="px-4 pb-16 pt-28 md:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#08047a]">{offre.type}</p>
          <h1 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">{offre.titre}</h1>
          <p className="mt-1 text-sm font-medium text-slate-500">{offre.lieu}</p>

          <div className="mt-6 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 md:grid-cols-3">
            <p>Publication: {formatDateFR(offre.datePublication)}</p>
            <p>Fin: {formatDateFR(offre.dateFin)}</p>
            <p>Personnel recherche: {offre.nombrePersonnel}</p>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-slate-700">{offre.details}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{offre.description}</p>

          {expiree && (
            <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              Cette offre est expiree. La candidature est desactivee.
            </p>
          )}
          {!expiree && (
            <p className="mt-6 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
              Offre encore valide: cette offre n est pas encore arrivee a son echeance.
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/offres" className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700">
              Retour aux offres
            </Link>
            <button
              type="button"
              disabled={expiree}
              className={`inline-flex rounded-full px-4 py-2 text-xs font-bold text-white ${
                expiree ? 'cursor-not-allowed bg-slate-400' : 'bg-[#08047a] hover:bg-[#0b06a6]'
              }`}
            >
              Postuler
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
