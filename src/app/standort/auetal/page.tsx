import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Car, Shield, Sparkles, Wrench, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fahrzeugaufbereitung Auetal | WAGENSTOLZ',
  description: 'Professionelle Fahrzeugaufbereitung, Keramikversiegelung, PPF & Smart Repair in Auetal (Rehren). 10% günstiger als Konkurrenz. Jetzt Termin anfragen!',
  openGraph: {
    title: 'Fahrzeugaufbereitung Auetal | WAGENSTOLZ',
    description: 'Ihr lokaler Partner für Autopflege in Auetal & Umgebung.',
  },
}

const location = {
  name: 'Auetal (Rehren)',
  address: 'Rehrener Straße 28, 31749 Auetal',
  phone: '05752 - XXXXX',
  email: 'info@wagenstolz.de',
  hours: 'Mo-Fr 08:00-18:00 | Sa 09:00-13:00',
  mapsUrl: 'https://maps.google.com/?q=Rehrener+Stra%C3%9Fe+28+31749+Auetal',
  description: 'Unser Hauptstandort in Auetal-Rehren. Hier finden Sie unser volles Leistungsspektrum: Keramikversiegelung, PPF Lackschutzfolie, Smart Repair, Fahrzeugaufbereitung, Detailing & mehr.',
}

const services = [
  { icon: Sparkles, title: 'Keramikversiegelung', desc: 'ab 629,10 €', slug: 'keramikversiegelung' },
  { icon: Shield, title: 'PPF Lackschutzfolie', desc: 'ab 1.080 €', slug: 'ppf' },
  { icon: Wrench, title: 'Smart Repair', desc: 'ab 134,10 €', slug: 'smart-repair' },
  { icon: Car, title: 'Fahrzeugaufbereitung', desc: 'ab 152,10 €', slug: 'aufbereitung' },
]

const nearby = ['Rinteln', 'Bückeburg', 'Stadthagen', 'Obernkirchen', 'Hannover']

export default function AuetalPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="container">
          <Link href="/standorte" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Alle Standorte
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Hauptstandort</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-4">Fahrzeugaufbereitung Auetal</h1>
            <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
              {location.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-primary">Termin in Auetal buchen</Link>
              <a href={location.mapsUrl} target="_blank" rel="noopener" className="btn-secondary flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Route planen
              </a>
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
                  Ihr Standort in Auetal
                </h2>
                <dl className="space-y-4 text-dark-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <dd>{location.address}</dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <dd><a href={`tel:${location.phone}`} className="hover:text-primary-600">{location.phone}</a></dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <dd><a href={`mailto:${location.email}`} className="hover:text-primary-600">{location.email}</a></dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <dd>{location.hours}</dd>
                  </div>
                </dl>
                <div className="mt-8 pt-8 border-t border-dark-200">
                  <a href={location.mapsUrl} target="_blank" rel="noopener" className="btn-primary inline-flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    In Google Maps öffnen
                  </a>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-2xl font-display font-bold text-dark-900 mb-6">Leistungen vor Ort</h2>
                <p className="text-dark-600 mb-6">In Auetal bieten wir unser vollständiges Spektrum an. Klicken Sie für Details & Preise:</p>
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
                <p className="text-dark-600 mb-4">Keine Zeit? Wir holen Ihr Fahrzeug im Umkreis von 30 km ab (Auetal, Rinteln, Bückeburg, Stadthagen, Obernkirchen, Hannover) & bringen es zurück.</p>
                <Link href="/kontakt" className="btn-secondary text-sm">Service anfragen</Link>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-dark-900 mb-4">Auch in Ihrer Nähe</h3>
                <ul className="space-y-2">
                  {nearby.map((city) => (
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

      <section className="py-16 bg-dark-50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-dark-900 text-center mb-12">Warum WAGENSTOLZ in Auetal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: '10% Preisvorteil', desc: 'Garantiert günstiger als alle Anbieter in Auetal, Rinteln, Bückeburg, Stadthagen & Obernkirchen.' },
              { icon: Sparkles, title: '15+ Jahre Erfahrung', desc: 'Seit 2001 in der Region – wir kennen jedes Fahrzeug & jeden Lack.' },
              { icon: CheckCircle, title: 'Ehrliche Beratung', desc: 'Keine unnötigen Upsells. Wir empfehlen nur, was Ihr Fahrzeug wirklich braucht.' },
            ].map((b, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{b.title}</h3>
                <p className="text-dark-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Ihr Fahrzeug in besten Händen – direkt in Auetal</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Kommen Sie vorbei, rufen Sie an oder fordern Sie online an. Wir freuen uns auf Sie!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">Jetzt Termin anfragen</Link>
            <a href="tel:+495752XXXXXX" className="btn-secondary border-white text-white hover:bg-white/10">Anrufen: 05752 - XXXXX</a>
          </div>
        </div>
      </section>
    </>
  )
}