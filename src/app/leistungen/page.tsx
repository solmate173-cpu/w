import { Metadata } from 'next'
import Link from 'next/link'
import { Car, Shield, Sparkles, Truck, Wrench, Paintbrush, Layers, Settings, Wind, Sparkle, Wrench as WrenchIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Fahrzeugaufbereitung, Keramikversiegelung, PPF Lackschutzfolie, Smart Repair, Detailing, Folierung & Tuning in Auetal, Rinteln, Bückeburg, Stadthagen & Obernkirchen. Professionell & fair.',
}

const services = [
  {
    slug: 'keramikversiegelung',
    icon: Sparkles,
    title: 'Keramikversiegelung',
    shortDesc: 'Langzeitschutz mit hydrophoben Eigenschaften',
    description: 'Unsere professionelle Keramikversiegelung schützt Ihren Lack bis zu 5 Jahre. Wasser, Schmutz & Insekten perlen einfach ab – der "Easy-to-Clean"-Effekt macht die Wäsche zum Kinderspiel.',
    features: ['Bis zu 5 Jahre Haltbarkeit', 'Extremer Tiefenglanz', 'Hydrophober Effekt', 'UV- & Chemikalienschutz', 'Kratzfestigkeit 9H', 'Werterhalt'],
    price: 'ab 629,10 €',
    images: ['/images/keramik-1.jpg', '/images/keramik-2.jpg'],
  },
  {
    slug: 'ppf',
    icon: Shield,
    title: 'PPF Lackschutzfolie',
    shortDesc: 'Unsichtbarer Schutz vor Steinschlag & Kratzern',
    description: 'Die selbstheilende Paint Protection Film (PPF) schützt exponierte Bereiche wie Frontstoßfänger, Motorhaube, Kotflügel & Außenspiegel. Unsichtbar, langlebig & mit 10 Jahren Garantie.',
    features: ['Selbstheilend bei Kratzern', 'Steinschlagschutz', 'Unsichtbar & glänzend', '10 Jahre Herstellergarantie', 'Teil- oder Vollfolierung', 'Rückstandslos entfernbar'],
    price: 'ab 1.080 €',
    images: ['/images/ppf-1.jpg', '/images/ppf-2.jpg'],
  },
  {
    slug: 'smart-repair',
    icon: Wrench,
    title: 'Smart Repair',
    shortDesc: 'Kostengünstige Instandsetzung kleiner Schäden',
    description: 'Kratzer, Parkrempler, Steinschläge & Dellen – wir reparieren punktgenau ohne teure Neulackierung. Farbgenau, schnell & bis zu 70% günstiger als Lackiererei.',
    features: ['Kratzerentfernung', 'Dellendrücken', 'Steinschlag-Reparatur', 'Farbgenaue Lackierung', 'Meist in 1 Tag', 'Kein Wertverlust'],
    price: 'ab 134,10 €',
    images: ['/images/smartrepair-1.jpg', '/images/smartrepair-2.jpg'],
  },
  {
    slug: 'aufbereitung',
    icon: Car,
    title: 'Fahrzeugaufbereitung',
    shortDesc: 'Professionelle Innen- & Außenreinigung',
    description: 'Von der einfachen Wäsche bis zum Full-Detailing: Wir bringen Ihr Fahrzeug wieder auf Neuzustand. Sorgfalt bis ins Detail – auch für Leasingrückgabe & Verkaufsvorbereitung.',
    features: ['Außenwäsche & Trocknen', 'Felgen & Reifenpflege', 'Innenraum-Saugen & Shampoonieren', 'Lederreinigung & Pflege', 'Scheiben versiegeln', 'Motorwäsche optional'],
    price: 'ab 152,10 €',
    images: ['/images/aufbereitung-1.jpg', '/images/aufbereitung-2.jpg'],
  },
  {
    slug: 'detailing',
    icon: Sparkle,
    title: 'Detailing & Politur',
    shortDesc: 'Perfektion bis ins kleinste Detail',
    description: 'Mehrstufige Politur für tiefenfreien Hochglanz. Swirls, Hologramme & leichte Kratzer werden entfernt. Die ideale Basis für jede Versiegelung.',
    features: ['1-Step bis 3-Step Politur', 'Swirl- & Hologramm-Entfernung', 'Lackdickenmessung', 'Kanten & Details per Hand', 'Vorbereitung für Keramik/PPF', 'Lackschutz-Beratung'],
    price: 'ab 299 €',
    images: ['/images/detailing-1.jpg', '/images/detailing-2.jpg'],
  },
  {
    slug: 'folierung',
    icon: Layers,
    title: 'Folierung & Design',
    shortDesc: 'Farbwechsel & Schutz in einem',
    description: 'Vollfolierung in Wunschfarbe (Matt, Glanz, Satin, Metallic, Chrome) – schützt den Originallack & ist rückstandslos entfernbar. Auch Teilfolierungen (Dach, Spiegel, Spoiler).',
    features: ['100+ Farben & Effekte', 'Originallack-Schutz', 'Rückstandslos entfernbar', 'Teil- & Vollfolierung', 'Digitaldruck & Designs', 'TÜV-konform'],
    price: 'auf Anfrage',
    images: ['/images/folierung-1.jpg', '/images/folierung-2.jpg'],
  },
  {
    slug: 'tuning-individualisierung',
    icon: Settings,
    title: 'Tuning & Individualisierung',
    shortDesc: 'Ihr Fahrzeug, Ihre Persönlichkeit',
    description: 'Fahrwerk, Auspuff, Software-Optimierung, Beleuchtung, Felgen & Zubehör. Alles aus einer Hand – mit Teilegutachten & Eintragung.',
    features: ['Fahrwerk & Tieferlegung', 'Leistungssteigerung (Chiptuning)', 'Sportauspuff & Klappensteuerung', 'Felgen & Reifen', 'LED/Beleuchtung', 'Zulassung & Eintragung'],
    price: 'auf Anfrage',
    images: ['/images/tuning-1.jpg', '/images/tuning-2.jpg'],
  },
  {
    slug: 'nachruestung',
    icon: Truck,
    title: 'Nachrüstung & Technik',
    shortDesc: 'Moderne Technik für jedes Fahrzeug',
    description: 'Nachrüsten von Parksensoren, Rückfahrkamera, Navi, CarPlay/Android Auto, Standheizung, Anhängerkupplung, Ambientelicht & mehr.',
    features: ['Parksensoren & Kamera', 'CarPlay / Android Auto', 'Standheizung', 'Anhängerkupplung', 'Ambientelicht', 'Soundsystem-Upgrade'],
    price: 'auf Anfrage',
    images: ['/images/nachruestung-1.jpg', '/images/nachruestung-2.jpg'],
  },
  {
    slug: 'security',
    icon: Wind,
    title: 'Security & Fahrzeugschutz',
    shortDesc: 'Schutz vor Diebstahl & Einbruch',
    description: 'CAN-Bus-Alarmanlagen, GPS-Tracker, OBD-Schloss, Lenkradkrallen & mechanische Sicherungen. Versicherungsanerkannte Systeme mit Einbau.',
    features: ['CAN-Bus Alarmanlage', 'GPS-Tracker (Live-Ortung)', 'OBD-Schutz', 'Lenkradkralle', 'Versicherungsrabatt', 'Fachgerechter Einbau'],
    price: 'auf Anfrage',
    images: ['/images/security-1.jpg', '/images/security-2.jpg'],
  },
  {
    slug: 'werterhalt',
    icon: Paintbrush,
    title: 'Werterhalt & Leasingrückgabe',
    shortDesc: 'Vorbereitung für Rückgabe & Verkauf',
    description: 'Wir beseitigen Gebrauchsspuren professionell: Kratzer, Dellen, Innenraum-Schäden, Felgenaufbereitung. Erhöht den Restwert & vermeidet Nachzahlungen.',
    features: ['Schaden-Analyse', 'Kostenvoranschlag', 'Reparatur aller Mängel', 'Dokumentation für Leasing', 'Fotodokumentation', 'Abholung & Bring-Service'],
    price: 'ab 299 €',
    images: ['/images/werterhalt-1.jpg', '/images/werterhalt-2.jpg'],
  },
  {
    slug: 'raeder-zubehoer',
    icon: WrenchIcon,
    title: 'Räder, Reifen & Zubehör',
    shortDesc: 'Alles rund ums Rad',
    description: 'Reifenwechsel, Einlagerung, Felgenreparatur, Pulverbeschichtung, RDKS-Service, Spur/Sturz einstellen. Große Markenauswahl vor Ort.',
    features: ['Reifenwechsel & Einlagerung', 'Felgenreparatur & Pulverbeschichtung', 'RDKS-Programmierung', 'Spur/Sturz-Vermessung', 'Markenreifen & Felgen', 'Saison-Check'],
    price: 'ab 49 €',
    images: ['/images/raeder-1.jpg', '/images/raeder-2.jpg'],
  },
]

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Unser Leistungsspektrum</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-6">
              Alles für Ihr Fahrzeug – aus einer Hand
            </h1>
            <p className="text-lg text-dark-600">
              Von der professionellen Aufbereitung bis zur High-End-Keramikversiegelung. 
              10% günstiger als die Konkurrenz in Auetal, Rinteln, Bückeburg, Stadthagen & Obernkirchen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article key={service.slug} className="card group overflow-hidden">
                <div className="relative h-48 bg-dark-100 overflow-hidden">
                  <service.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-600 text-sm font-medium">
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{service.title}</h3>
                  <p className="text-dark-600 text-sm mb-4">{service.shortDesc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-dark-600">
                        <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/leistungen/${service.slug}`}
                    className="btn-secondary w-full text-center group-hover:bg-primary-50"
                  >
                    Details & Anfrage
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Nicht das Passende gefunden?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Jedes Fahrzeug ist anders. Sprechen Sie uns an – wir finden die optimale Lösung für Ihren Bedarf und Ihr Budget.
          </p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            Individuelle Beratung anfragen
          </Link>
        </div>
      </section>
    </>
  )
}