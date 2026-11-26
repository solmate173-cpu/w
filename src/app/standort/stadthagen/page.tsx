import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Car, Shield, Sparkles, Wrench, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fahrzeugaufbereitung Stadthagen | WAGENSTOLZ',
  description: 'Autopflege & Lackschutzfolie in Stadthagen. Wir holen Ihr Fahrzeug ab, bearbeiten es in Auetal & bringen es zurück. Keramikversiegelung, PPF, Smart Repair.',
}

const location = {
  name: 'Stadthagen',
  desc: 'Autopflege & Lackschutzfolie in Stadthagen. Wir holen Ihr Fahrzeug ab, bearbeiten es in Auetal & bringen es zurück. Keramikversiegelung, PPF, Smart Repair.',
}

const services = [
  { icon: Sparkles, title: 'Keramikversiegelung', desc: 'ab 629,10 €', slug: 'keramikversiegelung' },
  { icon: Shield, title: 'PPF Lackschutzfolie', desc: 'ab 1.080 €', slug: 'ppf' },
  { icon: Wrench, title: 'Smart Repair', desc: 'ab 134,10 €', slug: 'smart-repair' },
  { icon: Car, title: 'Fahrzeugaufbereitung', desc: 'ab 152,10 €', slug: 'aufbereitung' },
]

const nearby = ['Auetal', 'Rinteln', 'Bückeburg', 'Obernkirchen', 'Hannover']

export default function StadthagenPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="container">
          <Link href="/standorte" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Alle Standorte
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Betreutes Gebiet</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-4">Fahrzeugaufbereitung Stadthagen</h1>
            <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">Autopflege & Lackschutzfolie in Stadthagen. Wir holen Ihr Fahrzeug ab, bearbeiten es in Auetal & bringen es zurück. Keramikversiegelung, PPF, Smart Repair.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-primary">Termin für Stadthagen anfragen</Link>
              <Link href="/leistungen" className="btn-secondary">Leistungen ansehen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="card p-8">
                <h2 className="text-2xl font-display font-bold text-dark-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  Service für Stadthagen
                </h2>
                <p className="text-dark-600 mb-6">Autopflege & Lackschutzfolie in Stadthagen. Wir holen Ihr Fahrzeug ab, bearbeiten es in Auetal & bringen es zurück. Keramikversiegelung, PPF, Smart Repair.</p>
                <h3 className="font-semibold text-dark-900 mb-4">So funktioniert der Abholservice:</h3>
                <ol className="space-y-3 text-dark-600">
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">1</span>Sie fordern Angebot/Termin an</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">2</span>Wir vereinbaren Abholtermin bei Ihnen</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">3</span>Fahrzeug wird in Auetal professionell bearbeitet</li>
                  <li className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-bold">4</span>Fertigstellung & Rückgabe bei Ihnen</li>
                </ol>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-display font-bold text-dark-900 mb-6">Unsere Leistungen für Stadthagen</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/leistungen/${s.slug}`} className="card p-4 group hover:border-primary-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <s.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">{s.title}</h3>
                          <p className="text-sm text-primary-600 font-medium">{s.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6 bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary-600" />
                  Abhol- & Bringservice
                </h3>
                <p className="text-dark-600 mb-4">Wir holen Ihr Fahrzeug in Stadthagen & Umgebung ab, bearbeiten es in unserem Studio in Auetal & bringen es sauber & geschützt zurück.</p>
                <Link href="/kontakt" className="btn-secondary text-sm">Abholung anfragen</Link>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-dark-900 mb-4">Auch in der Nähe</h3>
                <ul className="space-y-2">
                  {['Auetal', 'Rinteln', 'Bückeburg', 'Obernkirchen', 'Hannover'].map((city) => (
                    <li key={city}>
                      <Link href={`/standort/${city.toLowerCase().replace('ü','ue').replace('ö','oe')}`} className="flex items-center justify-between text-dark-600 hover:text-primary-600 transition-colors">
                        <span>{city}</span>
                        <ArrowRight className="w-4 h-4 text-primary-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Stadthagen: Ihr Fahrzeug verdient den besten Schutz</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Abholservice buchen, Angebot anfordern oder direkt anrufen. 10% günstiger als Konkurrenz vor Ort.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">Jetzt anfragen</Link>
            <a href="tel:+495752XXXXXX" className="btn-secondary border-white text-white hover:bg-white/10">Anrufen: 05752 - XXXXX</a>
          </div>
        </div>
      </section>
    </>
  )
}