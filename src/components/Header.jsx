export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logos/and_pro_service_multiservice_cercle.png" alt="ADN Pro Service" className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11" />
          <span className="font-heading text-base font-black text-[#08047a] md:text-xl">ADN PRO SERVICE</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          <a href="#services">Services</a>
          <a href="#pourquoi">Pourquoi nous choisir</a>
          <a href="#processus">Processus</a>
          <a href="#temoignage">Temoignages</a>
        </div>
        <button className="rounded-full bg-[#08047a] px-4 py-2 text-[11px] font-bold text-white md:px-5 md:text-sm">Demander un agent</button>
      </nav>
    </header>
  )
}
