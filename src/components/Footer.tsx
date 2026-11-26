import Link from 'next/link'
import { MapPin, Phone, Mail, Car, Shield, Sparkles, Instagram, Facebook, MapPin as MapPinIcon, Wrench } from 'lucide-react'

const locations = [
  { name: 'Auetal', slug: 'auetal' },
  { name: 'Rinteln', slug: 'rinteln' },
  { name: 'Bückeburg', slug: 'bueckeburg' },
  { name: 'Stadthagen', slug: 'stadthagen' },
  { name: 'Obernkirchen', slug: 'obernkirchen' },
  { name: 'Hannover', slug: 'hannover' },
]

const services = [
  { href: '/leistungen/keramikversiegelung', label: 'Keramikversiegelung', Icon: Sparkles },
  { href: '/leistungen/ppf', label: 'PPF Lackschutzfolie', Icon: Shield },
  { href: '/leistungen/smart-repair', label: 'Smart Repair', Icon: Wrench },
  { href: '/leistungen/aufbereitung', label: 'Fahrzeugaufbereitung', Icon: Car },
  { href: '/leistungen/detailing', label: 'Detailing', Icon: Sparkles },
  { href: '/leistungen/folierung', label: 'Folierung', Icon: Shield },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl">WAGENSTOLZ</span>
            </Link>
            <p className="text-dark-400 mb-4 max-w-md">
              PFLEGE. SCHUTZ. PERFEKTION. Seit über 15 Jahren Ihr Partner für professionelle Fahrzeugaufbereitung, Keramikversiegelung, PPF Lackschutzfolie & Smart Repair in Auetal & Umgebung.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://google.com/maps" target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors" aria-label="Google Maps">
                <MapPin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="flex items-center gap-2 text-dark-400 hover:text-white transition-colors text-sm">
                    <s.Icon className="w-4 h-4" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Standorte</h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/standort/${loc.slug}`} className="flex items-center gap-2 text-dark-400 hover:text-white transition-colors text-sm">
                    <MapPin className="w-4 h-4" />
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <address className="not-italic text-dark-400 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span>Rehrener Straße 28<br />31749 Auetal (Rehren)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+495752XXXXXX" className="hover:text-white transition-colors">05752 - XXXXX</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@wagenstolz.de" className="hover:text-white transition-colors">info@wagenstolz.de</a>
              </div>
            </address>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-dark-500 text-sm">Mo-Fr 08-18 | Sa 09-13</span>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm">
              © 2024 WAGENSTOLZ Automotive Studio. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-dark-400">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}