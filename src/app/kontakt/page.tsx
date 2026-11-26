import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Car, Send, Loader2, DollarSign, Sparkles, Shield, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt & Termin',
  description: 'Kontaktieren Sie WAGENSTOLZ Automotive Studio in Auetal. Termin anfragen, Rückruf bitten oder Angebot erhalten. Telefon: 05752-XXXXXX, E-Mail: info@wagenstolz.de',
}

export default function KontaktPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">Jetzt Termin sichern</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-dark-900 mb-6">Kontakt & Termin</h1>
            <p className="text-lg text-dark-600 mb-8">
              Sie haben Fragen, wollen einen Termin oder brauchen ein Angebot? 
              Rufen Sie an, schreiben Sie uns oder nutzen Sie das Formular – wir melden uns zeitnah.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark-900 mb-6">Nachricht senden</h2>
              <form className="space-y-5" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="vorname" className="label">Vorname *</label>
                    <input type="text" id="vorname" name="vorname" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="nachname" className="label">Nachname *</label>
                    <input type="text" id="nachname" name="nachname" className="input-field" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="label">E-Mail *</label>
                    <input type="email" id="email" name="email" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="telefon" className="label">Telefon</label>
                    <input type="tel" id="telefon" name="telefon" className="input-field" />
                  </div>
                </div>
                <div>
                  <label htmlFor="fahrzeug" className="label">Fahrzeug (Marke, Modell, Baujahr)</label>
                  <input type="text" id="fahrzeug" name="fahrzeug" className="input-field" placeholder="z.B. BMW 3er G20, 2022" />
                </div>
                <div>
                  <label htmlFor="leistung" className="label">Gewünschte Leistung</label>
                  <select id="leistung" name="leistung" className="input-field">
                    <option value="">Bitte wählen</option>
                    <option value="keramik">Keramikversiegelung</option>
                    <option value="ppf">PPF Lackschutzfolie</option>
                    <option value="smart-repair">Smart Repair</option>
                    <option value="aufbereitung">Fahrzeugaufbereitung</option>
                    <option value="detailing">Detailing & Politur</option>
                    <option value="folierung">Folierung</option>
                    <option value="tuning">Tuning & Individualisierung</option>
                    <option value="winter">Winter-Schutz Paket</option>
                    <option value="leasing">Leasing-Rückgabe</option>
                    <option value="sonstiges">Sonstiges / Beratung</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nachricht" className="label">Ihre Nachricht *</label>
                  <textarea id="nachricht" name="nachricht" rows={5} className="input-field resize-none" placeholder="Beschreiben Sie Ihr Anliegen, Fahrzeugzustand, gewünschten Termin..." required></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="datenschutz" name="datenschutz" className="mt-1 w-4 h-4 text-primary-600 border-dark-300 rounded focus:ring-primary-500" required />
                  <label htmlFor="datenschutz" className="text-sm text-dark-600">
                    Ich habe die <a href="/datenschutz" className="text-primary-600 hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto" id="submit-btn">
                  <Send className="w-5 h-5 mr-2" />
                  Anfrage absenden
                </button>
                <p className="text-sm text-dark-500">* Pflichtfelder. Wir antworten meist innerhalb weniger Stunden (Mo-Fr 8-18 Uhr).</p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-dark-900">Direkt kontaktieren</h2>
              
              <div className="card p-6">
                <h3 className="font-semibold text-dark-900 mb-4">Telefonisch</h3>
                <a href="tel:+495752XXXXXX" className="flex items-center gap-3 text-2xl font-bold text-dark-900 hover:text-primary-600 transition-colors">
                  <Phone className="w-7 h-7 text-primary-600" />
                  05752 - XXXXX
                </a>
                <p className="text-dark-500 mt-2">Mo-Fr 08:00-18:00 • Sa 09:00-13:00</p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-dark-900 mb-4">E-Mail</h3>
                <a href="mailto:info@wagenstolz.de" className="flex items-center gap-3 text-dark-900 hover:text-primary-600 transition-colors">
                  <Mail className="w-7 h-7 text-primary-600" />
                  <span className="text-lg">info@wagenstolz.de</span>
                </a>
                <p className="text-dark-500 mt-2">Für Angebotsanfragen, Fotos & Dokumente</p>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-dark-900 mb-4">Adresse</h3>
                <address className="not-italic text-dark-600 space-y-1">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <span>WAGENSTOLZ Automotive Studio<br/>Rehrener Straße 28<br/>31749 Auetal (Rehren)</span>
                  </div>
                </address>
                <a href="https://maps.google.com/?q=Rehrener+Stra%C3%9Fe+28+31749+Auetal" target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-4 text-sm text-primary-600 hover:underline">
                  In Google Maps öffnen
                  <MapPin className="w-4 h-4" />
                </a>
              </div>

              <div className="card p-6 bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary-600" />
                  Abhol- & Bringservice
                </h3>
                <p className="text-dark-600">Keine Zeit zum Vorbeikommen? Wir holen Ihr Fahrzeug im Umkreis von 30 km ab & bringen es nach Fertigstellung zurück. Auf Anfrage – Leihwagen möglich.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-dark-900 text-center mb-12">Schnellzugriff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/kontakt?type=angebot" className="card p-6 text-center group hover:border-primary-300">
              <DollarSign className="w-10 h-10 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-dark-900 mb-2">Unverbindliches Angebot</h3>
              <p className="text-dark-600 text-sm">Fahrzeug, Wunsch & Fotos senden – Festpreis erhalten</p>
            </Link>
            <Link href="/kontakt?type=termin" className="card p-6 text-center group hover:border-primary-300">
              <Clock className="w-10 h-10 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-dark-900 mb-2">Termin buchen</h3>
              <p className="text-dark-600 text-sm">Wunschtermin nennen – wir bestätigen oder schlagen Alternative vor</p>
            </Link>
            <Link href="/kontakt?type=rueckruf" className="card p-6 text-center group hover:border-primary-300">
              <Phone className="w-10 h-10 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-dark-900 mb-2">Rückruf bitten</h3>
              <p className="text-dark-600 text-sm">Rufnummer & beste Zeit angeben – wir rufen an</p>
            </Link>
            <Link href="/leistungen" className="card p-6 text-center group hover:border-primary-300">
              <Sparkles className="w-10 h-10 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-dark-900 mb-2">Leistungen ansehen</h3>
              <p className="text-dark-600 text-sm">Alle Services im Überblick mit Preisen & Details</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Lieber direkt sprechen?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Rufen Sie uns an – wir beraten Sie sofort, prüfen Ihr Anliegen & machen ein faires Angebot. Kein Callcenter, direkt der Chef.</p>
          <a href="tel:+495752XXXXXX" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-xl px-8 py-4">
            <Phone className="w-6 h-6 mr-2" />
            Jetzt anrufen: 05752 - XXXXX
          </a>
        </div>
      </section>
    </>
  )
}