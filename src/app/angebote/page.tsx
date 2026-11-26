import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Package, Car, Sparkles, Shield, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Angebote & Pakete',
  description: 'Fahrzeugpflege-Pakete & Preise: Winter-Schutz, Keramikversiegelung, PPF, Aufbereitung, Smart Repair. Transparente Festpreise, 10% unter Konkurrenz. Auetal, Rinteln, Bückeburg, Stadthagen.',
}

const packages = [
  {
    category: 'Winter-Schutz (Saison)',
    items: [
      { name: 'Winter-Schutz S', price: '149 €', includes: ['Intensive Handwäsche', 'Keramik-Sprühversiegelung', 'Unterbodenwäsche', 'Reifenpflege'], cta: 'S anfragen' },
      { name: 'Winter-Schutz M', price: '349 €', includes: ['Alles aus S', '1-Step-Politur', 'Scheibenversiegelung', 'Felgenversiegelung'], cta: 'M anfragen', popular: true },
      { name: 'Winter-Schutz L', price: '599 €', includes: ['Alles aus M', 'Komplette Keramikversiegelung', 'Felgenversiegelung', 'Innenraum-Schutz'], cta: 'L anfragen' },
    ]
  },
  {
    category: 'Keramikversiegelung',
    items: [
      { name: 'Keramik Light', price: 'ab 629,10 €', includes: ['1-2 Jahre Haltbarkeit', 'Hydrophober Effekt', 'UV-Schutz', 'Einfache Reinigung'], cta: 'Light anfragen' },
      { name: 'Keramik Pro', price: 'ab 899 €', includes: ['3-4 Jahre', '9H Kratzfestigkeit', 'Felgen & Scheiben inkl.', 'Pflege-Set gratis'], cta: 'Pro anfragen', popular: true },
      { name: 'Keramik Ultra', price: 'ab 1.299 €', includes: ['5+ Jahre', 'Selbstheilend', 'Jährliche Inspektion inkl.', 'Innenraum-Schutz'], cta: 'Ultra anfragen' },
    ]
  },
  {
    category: 'PPF Lackschutzfolie',
    items: [
      { name: 'PPF Front', price: 'ab 1.080 €', includes: ['Stoßfänger, Haube, Kotflügel, Spiegel', 'Steinschlag-Schutz', '10 Jahre Garantie'], cta: 'Front anfragen' },
      { name: 'PPF Teilfolierung', price: 'ab 399 €', includes: ['Individuelle Bereiche', 'Türkanten, Ladekante', 'Selbstheilend'], cta: 'Teil anfragen', popular: true },
      { name: 'PPF Vollfolierung', price: 'ab 4.500 €', includes: ['Gesamtes Fahrzeug', 'Keramik-Top-Coat', 'Wertsteigerung'], cta: 'Voll anfragen' },
    ]
  },
  {
    category: 'Aufbereitung & Smart Repair',
    items: [
      { name: 'Außen-Aufbereitung', price: 'ab 152,10 €', includes: ['Handwäsche, Knete, Felgen, Wachs', '2-3 Std.'], cta: 'Anfragen' },
      { name: 'Full Detailing', price: 'ab 449 €', includes: ['Innen & Außen + Politur + Versiegelung', '1 Tag'], cta: 'Anfragen', popular: true },
      { name: 'Smart Repair', price: 'ab 134,10 €', includes: ['Kratzer, Dellen, Steinschlag', 'Bis 70% günstiger'], cta: 'Anfragen' },
      { name: 'Leasing-Rückgabe', price: 'ab 299 €', includes: ['Nach Herstellervorgabe', 'Fotodokumentation'], cta: 'Anfragen' },
    ]
  },
]

const priceNote = `
* Alle Preise sind Einstiegspreise (inkl. MwSt.). Fahrzeuggröße, Lackzustand & Aufwand können den Endpreis beeinflussen – wir klären das transparent VOR dem Termin.
Gilt für Auetal, Rinteln, Bückeburg, Stadthagen, Obernkirchen & Hannover. 10% günstiger als Konkurrenz vor Ort – garantiert.
`

export default function AngebotePage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Transparente Preise</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-6">Angebote & Pakete</h1>
            <p className="text-lg text-dark-600 mb-8">
              Faire Festpreise für jeden Bedarf. Keine versteckten Kosten – 10% günstiger als die Konkurrenz in Auetal, Rinteln, Bückeburg, Stadthagen & Obernkirchen.
            </p>
            <Link href="/kontakt" className="btn-primary">Individuelles Angebot anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          {packages.map((cat) => (
            <div key={cat.category} className="mb-20">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark-900 mb-8 pb-4 border-b border-dark-200">
                {cat.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <article key={item.name} className={`card p-6 relative ${item.popular ? 'ring-2 ring-primary-500' : ''}`}>
                    {item.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">Beliebt</span>}
                    <h3 className="text-xl font-bold text-dark-900 mb-1">{item.name}</h3>
                    <div className="text-3xl font-bold text-dark-900 mb-4">{item.price}</div>
                    <ul className="space-y-2 mb-6">
                      {item.includes.map((inc) => <li key={inc} className="flex items-center gap-2 text-dark-600 text-sm"><CheckCircle className="w-4 h-4 text-primary-500" />{inc}</li>)}
                    </ul>
                    <Link href="/kontakt" className={`w-full text-center ${item.popular ? 'btn-primary' : 'btn-secondary'}`}>{item.cta}</Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-dark-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-dark-900 text-center mb-8">Wichtige Hinweise</h2>
          <div className="prose prose-dark max-w-none text-dark-600 whitespace-pre-line">{priceNote}</div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ihr individuelles Angebot</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Jedes Fahrzeug ist anders. Wir prüfen Ihren Bedarf vor Ort & machen ein faires Festpreis-Angebot – 10% unter Konkurrenz.</p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">Angebot anfordern</Link>
        </div>
      </section>
    </>
  )
}