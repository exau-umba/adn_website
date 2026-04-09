export default function Footer() {
  return (
    <footer className="bg-white" id="contact">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logos/and_pro_service_multiservice_cercle.png" alt="logo ADN" className="h-9 w-9 rounded-full object-cover" />
            <p className="font-heading text-lg font-black text-[#08047a]">ADN PRO SERVICE</p>
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
          <p className="mt-4 text-sm text-slate-600">Kinshasa, RD Congo</p>
          <p className="text-sm text-slate-600">+243 82 90 84 314</p>
          <p className="text-sm text-slate-600">contact@adnproservice.com</p>
        </div>
      </div>
    </footer>
  )
}
