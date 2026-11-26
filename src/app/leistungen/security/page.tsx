import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '$slug',
  description: '$slug in Auetal – professionell & fair. Jetzt unverbindlich anfragen!',
}

const faqs = [
  { q: 'Frage 1?', a: 'Antwort 1.' },
  { q: 'Frage 2?', a: 'Antwort 2.' },
]

export default function Page() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="container">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Zurück zu Leistungen
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-6">$slug</h1>
            <p className="text-lg text-dark-600 mb-8">Professionelle $slug in Auetal & Umgebung. Faire Preise, 10% unter Konkurrenz.</p>
            <Link href="/kontakt" className="btn-primary">Unverbindlich anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-dark-900 text-center mb-12">FAQ</h2>
          <dl className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-6">
                <dt className="font-semibold text-dark-900 mb-2">{faq.q}</dt>
                <dd className="text-dark-600">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Jetzt unverbindlich anfragen</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Wir beraten ehrlich, prüfen Ihr Fahrzeug & machen ein faires Angebot.</p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">Angebot anfordern</Link>
        </div>
      </section>
    </>
  )
}
