import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/offres', label: 'Offres' },
  { href: '/#pourquoi', label: 'Pourquoi nous choisir' },
  { href: '/#processus', label: 'Processus' },
  { href: '/#temoignage', label: 'Temoignages' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#contact', label: 'Contact' },
]

const getCurrentHref = () => {
  const { pathname, hash } = window.location
  if (pathname.startsWith('/offres')) return '/offres'
  return hash ? `/${hash}` : ''
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(getCurrentHref)
  const { pathname } = useLocation()

  useEffect(() => {
    setActiveHref(getCurrentHref())
    const onHashChange = () => setActiveHref(getCurrentHref())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [pathname])

  // Sur la page d'accueil, le menu suit la section visible pendant le defilement
  useEffect(() => {
    if (pathname !== '/') return undefined

    const sections = navLinks
      .filter((link) => link.href.startsWith('/#'))
      .map((link) => document.getElementById(link.href.slice(2)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`/#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  const handleNavClick = (href) => {
    setActiveHref(href)
    setIsMobileMenuOpen(false)
  }

  const linkClass = (href) =>
    href === activeHref
      ? 'text-[#08047a] underline decoration-2 underline-offset-8'
      : 'transition hover:text-[#08047a]'

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logos/and_pro_service_multiservice_cercle.png" alt="ADN Pro Service" className="h-10 w-10 rounded-full object-cover md:h-11 md:w-11" />
          <span className="font-heading text-base font-black text-[#08047a] md:text-xl">ADN PRO SERVICE</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              aria-current={link.href === activeHref ? 'page' : undefined}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="/#contact" className="hidden rounded-full bg-[#08047a] px-4 py-2 text-[11px] font-bold text-white md:inline-block md:px-5 md:text-sm">
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
              <a
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                aria-current={link.href === activeHref ? 'page' : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => handleNavClick('/#contact')}
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
