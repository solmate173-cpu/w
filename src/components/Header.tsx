'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Car, Shield, Sparkles, MapPin, Phone, Wrench } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/leistungen', label: 'Leistungen', children: [
    { href: '/leistungen/keramikversiegelung', label: 'Keramikversiegelung', icon: Sparkles },
    { href: '/leistungen/ppf', label: 'PPF Lackschutzfolie', icon: Shield },
    { href: '/leistungen/smart-repair', label: 'Smart Repair', icon: Wrench },
    { href: '/leistungen/aufbereitung', label: 'Fahrzeugaufbereitung', icon: Car },
    { href: '/leistungen/detailing', label: 'Detailing & Politur' },
    { href: '/leistungen/folierung', label: 'Folierung & Design' },
    { href: '/leistungen/tuning-individualisierung', label: 'Tuning & Individualisierung' },
    { href: '/leistungen/nachruestung', label: 'Nachrüstung & Technik' },
    { href: '/leistungen/security', label: 'Security & Fahrzeugschutz' },
    { href: '/leistungen/werterhalt', label: 'Werterhalt & Leasing' },
    { href: '/leistungen/raeder-zubehoer', label: 'Räder & Zubehör' },
  ]},
  { href: '/angebote', label: 'Angebote' },
  { href: '/standorte', label: 'Standorte', children: [
    { href: '/standort/auetal', label: 'Auetal (Hauptstandort)' },
    { href: '/standort/rinteln', label: 'Rinteln' },
    { href: '/standort/bueckeburg', label: 'Bückeburg' },
    { href: '/standort/stadthagen', label: 'Stadthagen' },
    { href: '/standort/obernkirchen', label: 'Obernkirchen' },
    { href: '/standort/hannover', label: 'Hannover' },
  ]},
  { href: '/blog', label: 'Ratgeber' },
  { href: '/kontakt', label: 'Kontakt', cta: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors" aria-label="WAGENSTOLZ Startseite">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-dark-900 hidden sm:block">WAGENSTOLZ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.children ? (
                  <div className="relative group">
                    <button className="flex items-center gap-1 text-dark-700 hover:text-primary-600 font-medium transition-colors py-2 px-1">
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 bg-white rounded-xl shadow-lg border border-dark-100 py-2 z-50">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="flex items-center gap-3 px-4 py-3 text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                          {child.icon && <child.icon className="w-5 h-5 text-primary-500" />}
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                    item.cta 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'text-dark-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-dark-700 hover:bg-dark-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-dark-200 py-4 animate-slide-down">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-3 py-3 text-dark-700 font-medium cursor-pointer list-none">
                        {item.label}
                        <svg className="w-5 h-5 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <div className="pl-6 pt-2 space-y-1 border-l-2 border-primary-100">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="block px-3 py-2 text-dark-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors text-sm">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link href={item.href} className={`block px-3 py-3 rounded-lg font-medium transition-colors ${
                      item.cta ? 'bg-primary-600 text-white mx-2 mt-2' : 'text-dark-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              {/* Quick Contact in Mobile */}
              <div className="pt-4 border-t border-dark-200 flex items-center gap-4">
                <a href="tel:+495752XXXXXX" className="flex items-center gap-2 text-primary-600 font-medium">
                  <Phone className="w-5 h-5" />
                  05752 - XXXXX
                </a>
                <a href="mailto:info@wagenstolz.de" className="flex items-center gap-2 text-dark-600 hover:text-primary-600 text-sm">
                  info@wagenstolz.de
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}