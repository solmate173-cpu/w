import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, Car, Shield, Sparkles, Wrench, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Ratgeber',
  description: 'Experten-Ratgeber zu Fahrzeugaufbereitung, Keramikversiegelung vs PPF, Leasing-Rückgabe, Kosten & Preise. WAGENSTOLZ Wissen für Auetal, Rinteln, Bückeburg, Stadthagen.',
}

const posts = [
  {
    slug: 'autoaufbereitung-kosten',
    title: 'Autoaufbereitung Kosten: Was kostet professionelle Aufbereitung?',
    excerpt: 'Transparente Preisübersicht für Innen-, Außen- & Full-Detailing. Was beeinflusst den Preis? Wann lohnt sich Full Detailing?',
    category: 'Kosten & Preise',
    date: '2024-11-15',
    readTime: '8 Min',
    image: '/images/blog/aufbereitung-kosten.jpg',
  },
  {
    slug: 'keramikversiegelung-oder-ppf',
    title: 'Keramikversiegelung oder PPF: Was ist besser für Ihr Fahrzeug?',
    excerpt: 'Direkter Vergleich: Haltbarkeit, Schutz, Kosten, Optik. Entscheidungshilfe für Ihren Lackschutz.',
    category: 'Lackschutz',
    date: '2024-11-10',
    readTime: '10 Min',
    image: '/images/blog/keramik-ppf.jpg',
  },
  {
    slug: 'leasingrueckgabe-aufbereitung',
    title: 'Leasing-Rückgabe: So vermeiden Sie teure Nachzahlungen',
    excerpt: 'Checkliste für die Rückgabe: Was prüft der Gutachter? Welche Schäden sind akzeptabel? Professionelle Vorbereitung spart Geld.',
    category: 'Leasing',
    date: '2024-11-05',
    readTime: '7 Min',
    image: '/images/blog/leasing.jpg',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Expertenwissen</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-6">Blog & Ratgeber</h1>
            <p className="text-lg text-dark-600">
              Fachwissen rund um Fahrzeugaufbereitung, Lackschutz, Keramikversiegelung, PPF, Smart Repair & Leasing-Rückgabe. 
              Aus der Praxis für die Praxis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="card overflow-hidden group">
                <div className="relative h-48 bg-dark-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-medium">{post.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">{post.title}</h2>
                  <p className="text-dark-600 mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                    Weiterlesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold text-dark-900 mb-4">Thema vermisst?</h2>
          <p className="text-dark-600 text-lg mb-8 max-w-2xl mx-auto">Schreiben Sie uns, worüber Sie mehr erfahren möchten – wir recherchieren & veröffentlichen.</p>
          <Link href="/kontakt" className="btn-primary">Thema vorschlagen</Link>
        </div>
      </section>
    </>
  )
}