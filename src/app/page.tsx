import Link from 'next/link'
import { Car, Shield, Sparkles, Truck, MapPin, Clock, Phone, Mail, ArrowRight, CheckCircle, Star } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Keramikversiegelung',
    description: 'Langzeitschutz mit hydrophoben Eigenschaften. Wasser & Schmutz perlen einfach ab.',
    price: 'ab 629,10 €',
    features: ['Bis zu 5 Jahre Schutz', 'Extremer Glanz', 'Leichte Reinigung', 'UV-Schutz'],
  },
  {
    icon: Shield,
    title: 'PPF Lackschutzfolie',
    description: 'Unsichtbarer Schutz vor Steinschlag, Kratzern & Umwelteinflüssen. Selbstheilend.',
    price: 'ab 1.080 €',
    features: ['Front-Schutz', 'Vollfolierung möglich', 'Selbstheilend', '10 Jahre Garantie'],
  },
  {
    icon: Car,
    title: 'Smart Repair',
    description: 'Kostengünstige Instandsetzung kleiner Lackschäden ohne Neulackierung.',
    price: 'ab 134,10 €',
    features: ['Kratzer entfernen', 'Dellen drücken', 'Spot-Repair', 'Farbgenau'],
  },
  {
    icon: Truck,
    title: 'Fahrzeugaufbereitung',
    description: 'Professionelle Innen- & Außenreinigung bis ins Detail. Vom Alltag bis zum Showcar.',
    price: 'ab 152,10 €',
    features: ['Innenraum', 'Außenwäsche', 'Polieren', 'Lederpflege'],
  },
]

const packages = [
  {
    name: 'Winter-Schutz S',
    price: '149 €',
    description: 'Grundschutz für die kalte Jahreszeit',
    includes: ['Intensive Handwäsche', 'Keramik-Sprühversiegelung', 'Unterbodenwäsche', 'Reifenpflege'],
    cta: 'S anfragen',
  },
  {
    name: 'Winter-Schutz M',
    price: '349 €',
    description: 'Erweiterter Schutz mit Politur',
    includes: ['Alles aus S', '1-Step-Politur', 'Scheibenversiegelung', 'Felgenversiegelung'],
    cta: 'M anfragen',
    popular: true,
  },
  {
    name: 'Winter-Schutz L',
    price: '599 €',
    description: 'Rundum-Sorglos-Paket',
    includes: ['Alles aus M', 'Komplette Keramikversiegelung', 'Felgenversiegelung', 'Innenraum-Schutz'],
    cta: 'L anfragen',
  },
]

const locations = [
  { name: 'Auetal', slug: 'auetal' },
  { name: 'Rinteln', slug: 'rinteln' },
  { name: 'Bückeburg', slug: 'bueckeburg' },
  { name: 'Stadthagen', slug: 'stadthagen' },
  { name: 'Obernkirchen', slug: 'obernkirchen' },
  { name: 'Hannover', slug: 'hannover' },
]

const reviews = [
  { name: 'M. Weber', location: 'Rinteln', rating: 5, text: 'Meine Keramikversiegelung hält seit 3 Jahren perfekt. Wasser perlt wie am ersten Tag. Top Beratung, fairer Preis.' },
  { name: 'S. Hoffmann', location: 'Bückeburg', rating: 5, text: 'PPF an der Front gemacht - sieht man nicht, schützt aber super vor Steinschlag. Sehr professionell!' },
  { name: 'T. Müller', location: 'Stadthagen', rating: 5, text: 'Winter-Check mit Geschenkaktion genutzt. Eiskratzer gratis, Check gründlich. Komme wieder.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5" />
        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
              🎁 Winter-Check + Eiskratzer gratis – solange Vorrat reicht
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-900 mb-6 animate-slide-up text-balance">
              PFLEGE. SCHUTZ. PERFEKTION.
            </h1>
            <p className="text-lg sm:text-xl text-dark-600 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              WAGENSTOLZ Automotive Studio – Ihr Experte für Fahrzeugaufbereitung, Keramikversiegelung, PPF & Smart Repair in Auetal & Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Link href="/kontakt" className="btn-primary w-full sm:w-auto">
                Termin anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/angebote" className="btn-secondary w-full sm:w-auto">
                Pakete ansehen
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-16 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-dark-500">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">2.500+</div>
                <div className="text-sm text-dark-500">Fahrzeuge betreut</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5</div>
                <div className="text-sm text-dark-500">Standorte im Umkreis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4.9★</div>
                <div className="text-sm text-dark-500">Google Bewertung</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 text-primary-500" />
        </div>
      </section>

      {/* Services Overview */}
      <section id="leistungen" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Unsere Leistungen</span>
            <h2 className="section-title">Alles für Ihr Fahrzeug</h2>
            <p className="section-subtitle mx-auto">Von der einfachen Wäsche bis zur High-End-Versiegelung – wir bieten das passende Paket für jeden Anspruch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <article key={service.title} className="card p-6 group">
                <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{service.title}</h3>
                <p className="text-dark-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-primary-600 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-dark-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className="btn-secondary w-full text-center">
                  Unverbindlich anfragen
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Winter Packages */}
      <section id="winter" className="section bg-dark-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Saisonale Aktion</span>
            <h2 className="section-title">Winter-Schutz Pakete</h2>
            <p className="section-subtitle mx-auto">Bereiten Sie Ihr Fahrzeug optimal auf die kalte Jahreszeit vor. Streusalz, Splitt & Frost – wir schützen was Ihnen wichtig ist.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <article key={pkg.name} className={`card p-6 relative ${pkg.popular ? 'ring-2 ring-primary-500' : ''}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    Beliebt
                  </span>
                )}
                <h3 className="text-xl font-bold text-dark-900 mb-1">{pkg.name}</h3>
                <p className="text-dark-500 text-sm mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-dark-900 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-dark-600">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className={`w-full text-center ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {pkg.cta}
                </Link>
              </article>
            ))}
          </div>
          <p className="text-center text-sm text-dark-500 mt-8 max-w-2xl mx-auto">
            * Preise sind Einstiegspreise. Fahrzeuggröße & Zustand können den Aufwand beeinflussen – wir klären das transparent vorab.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section id="standorte" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Unser Einzugsgebiet</span>
            <h2 className="section-title">Vor Ort für Sie da</h2>
            <p className="section-subtitle mx-auto">Wir bedienen Auetal und die umliegenden Städte. 10% günstiger als die Konkurrenz vor Ort – garantiert.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((loc) => (
              <Link key={loc.name} href={`/standort/${loc.slug}`} className="card p-6 text-center group hover:bg-primary-50">
                <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">{loc.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-dark-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Das sagen unsere Kunden</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <article key={review.name} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-600 mb-4 italic">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-dark-900">{review.name}</p>
                    <p className="text-sm text-dark-500">{review.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/bewertungen" className="btn-secondary">
              Alle Bewertungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Bereit für den besten Schutz Ihres Fahrzeugs?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin. Wir prüfen Ihr Fahrzeug, beraten ehrlich und machen ein faires Angebot – 10% unter Konkurrenzpreisen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Termin telefonisch: 05752-XXXXXX
            </Link>
            <Link href="/kontakt" className="btn-secondary border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <Mail className="w-5 h-5 mr-2" />
              Online anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display font-bold mb-4">WAGENSTOLZ Automotive Studio</h3>
              <p className="text-dark-400 mb-4 max-w-md">
                PFLEGE. SCHUTZ. PERFEKTION. Seit über 15 Jahren Ihr Partner für professionelle Fahrzeugaufbereitung, Keramikversiegelung, PPF Lackschutzfolie & Smart Repair in Auetal & Umgebung.
              </p>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://google.com/maps" target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors" aria-label="Google Maps">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-dark-400">
                <li><a href="/leistungen/keramikversiegelung" className="hover:text-white transition-colors">Keramikversiegelung</a></li>
                <li><a href="/leistungen/ppf" className="hover:text-white transition-colors">PPF Lackschutzfolie</a></li>
                <li><a href="/leistungen/smart-repair" className="hover:text-white transition-colors">Smart Repair</a></li>
                <li><a href="/leistungen/aufbereitung" className="hover:text-white transition-colors">Fahrzeugaufbereitung</a></li>
                <li><a href="/leistungen/detailing" className="hover:text-white transition-colors">Detailing</a></li>
                <li><a href="/leistungen/folierung" className="hover:text-white transition-colors">Folierung</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Standorte</h4>
              <ul className="space-y-2 text-dark-400">
                {locations.map((loc) => (
                  <li key={loc.name}><a href={`/standort/${loc.slug}`} className="hover:text-white transition-colors">{loc.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-dark-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-dark-400 text-sm">
                © 2024 WAGENSTOLZ Automotive Studio. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-6 text-sm text-dark-400">
                <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
                <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
                <a href="/agb" className="hover:text-white transition-colors">AGB</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}