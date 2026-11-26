import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

export const metadataBase = new URL('https://wagenstolz.de')

export const metadata: Metadata = {
  title: {
    default: 'Fahrzeugaufbereitung in Auetal | WAGENSTOLZ',
    template: '%s | WAGENSTOLZ Automotive Studio',
  },
  description: 'Professionelle Fahrzeugaufbereitung, Keramikversiegelung, PPF Lackschutzfolie, Smart Repair & Detailing in Auetal, Rinteln, Bückeburg, Stadthagen & Umgebung. Jetzt Termin anfragen!',
  keywords: [
    'Fahrzeugaufbereitung',
    'Keramikversiegelung',
    'PPF',
    'Lackschutzfolie',
    'Smart Repair',
    'Detailing',
    'Autoaufbereitung',
    'Auetal',
    'Rinteln',
    'Bückeburg',
    'Stadthagen',
    'Obernkirchen',
  ],
  authors: [{ name: 'WAGENSTOLZ Automotive Studio' }],
  creator: 'WAGENSTOLZ',
  publisher: 'WAGENSTOLZ Automotive Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://wagenstolz.de',
    siteName: 'WAGENSTOLZ Automotive Studio',
    title: 'Fahrzeugaufbereitung in Auetal | WAGENSTOLZ',
    description: 'Professionelle Fahrzeugaufbereitung, Keramikversiegelung, PPF Lackschutzfolie, Smart Repair & Detailing in Auetal & Umgebung.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'WAGENSTOLZ Automotive Studio - Fahrzeugaufbereitung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fahrzeugaufbereitung in Auetal | WAGENSTOLZ',
    description: 'Professionelle Fahrzeugaufbereitung, Keramikversiegelung, PPF Lackschutzfolie, Smart Repair & Detailing.',
    images: ['/images/og-default.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'WAGENSTOLZ Automotive Studio',
              image: 'https://wagenstolz.de/images/og-default.jpg',
              '@id': 'https://wagenstolz.de/#localbusiness',
              url: 'https://wagenstolz.de',
              telephone: '+49-5752-XXXXXX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rehrener Straße 28',
                addressLocality: 'Auetal',
                addressRegion: 'Niedersachsen',
                postalCode: '31749',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.2377,
                longitude: 9.1234,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '13:00',
                },
              ],
              priceRange: '€€',
              currenciesAccepted: 'EUR',
              paymentAccepted: 'Cash, Credit Card, EC Card',
              areaServed: [
                'Auetal',
                'Rinteln',
                'Bückeburg',
                'Stadthagen',
                'Obernkirchen',
                'Hannover',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Fahrzeugaufbereitung & Schutz',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Keramikversiegelung',
                      description: 'Langzeitschutz für Lack mit hydrophoben Eigenschaften',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'PPF Lackschutzfolie',
                      description: 'Unsichtbarer Schutz vor Steinschlag & Kratzern',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Smart Repair',
                      description: 'Kostengünstige Instandsetzung kleiner Lackschäden',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Fahrzeugaufbereitung & Detailing',
                      description: 'Professionelle Innen- & Außenreinigung',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}