import { useState } from 'react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pourquoi', label: 'Pourquoi nous choisir' },
  { href: '#processus', label: 'Processus' },
  { href: '#temoignage', label: 'Temoignages' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logos/and_pro_service_multiservice_cercle.png" alt="ADN Pro Service" className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11" />
          <span className="font-heading text-base font-black text-[#08047a] md:text-xl">ADN PRO SERVICE</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full bg-[#08047a] px-4 py-2 text-[11px] font-bold text-white md:inline-block md:px-5 md:text-sm">
          Demander un agent
        </a>
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 md:hidden"
        >
          {isMobileMenuOpen ? 'Fermer' : 'Menu'}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a key={`mobile-${link.href}`} href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-1 inline-flex w-fit rounded-full bg-[#08047a] px-4 py-2 text-xs font-bold text-white"
            >
              Demander un agent
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
