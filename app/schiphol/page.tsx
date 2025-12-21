import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ReviewList from '@/components/ReviewList'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  title: 'Taxi naar Schiphol | Vaste Prijs vanaf €79 | 24/7 Service | Enjoy Taxi',
  description: 'Taxi naar Schiphol vanaf €79 vaste prijs. ✓ Flight tracking ✓ 30 min gratis wachttijd ✓ Bagage inbegrepen ✓ 24/7 beschikbaar vanuit Den Haag en Leiden. Boek nu!',
  keywords: [
    'taxi naar schiphol',
    'taxi schiphol',
    'schiphol taxi',
    'schiphol transfer',
    'luchthaven taxi',
    'taxi schiphol den haag',
    'taxi schiphol leiden',
    'schiphol taxi vaste prijs',
    'taxi amsterdam airport',
    'schiphol taxi service',
    'goedkope taxi schiphol',
    'taxi schiphol boeken',
  ],
  alternates: {
    canonical: 'https://enjoytaxi.nl/schiphol',
  },
  openGraph: {
    title: 'Taxi naar Schiphol | Vaste Prijs vanaf €79 | Enjoy Taxi',
    description: 'Taxi naar Schiphol vanaf €79. Flight tracking, gratis wachttijd, 24/7 beschikbaar.',
    url: 'https://enjoytaxi.nl/schiphol',
    images: [
      {
        url: '/Taxi naar Schiphol .webp',
        width: 1200,
        height: 630,
        alt: 'Taxi naar Schiphol - Enjoy Taxi',
      },
    ],
  },
}

const pricing = [
  { location: 'Den Haag Centrum', price: 79, duration: '45 min' },
  { location: 'Scheveningen', price: 85, duration: '50 min' },
  { location: 'Leiden Centrum', price: 79, duration: '35 min' },
  { location: 'Delft', price: 69, duration: '40 min' },
  { location: 'Zoetermeer', price: 75, duration: '35 min' },
  { location: 'Wassenaar', price: 75, duration: '40 min' },
  { location: 'Voorburg', price: 75, duration: '40 min' },
  { location: 'Rijswijk', price: 75, duration: '40 min' },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '30 Min Gratis Wachttijd',
    description: 'Bij vertraging van uw vlucht wachten wij gratis tot 30 minuten.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Vaste Prijs Garantie',
    description: 'De prijs die u ziet is de prijs die u betaalt. Geen toeslagen bij files.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Flight Tracking',
    description: 'Wij volgen uw vlucht en passen de ophaaltijd automatisch aan.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Bagage Inbegrepen',
    description: 'Standaard bagage is altijd inbegrepen in de prijs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '100% Tesla',
    description: 'Reis comfortabel en duurzaam in onze Tesla Model S of X.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Beschikbaar',
    description: 'Ook voor vroege ochtendvluchten of late aankomsten.',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Bel of WhatsApp',
    description: 'Neem contact op via telefoon of WhatsApp met uw vluchtgegevens.',
  },
  {
    step: '2',
    title: 'Ontvang Vaste Prijs',
    description: 'U ontvangt direct een vaste prijs voor uw Schiphol transfer.',
  },
  {
    step: '3',
    title: 'Bevestig Uw Rit',
    description: 'Bevestig de boeking. Wij sturen een bevestiging met chauffeurgegevens.',
  },
  {
    step: '4',
    title: 'Ontspannen naar Schiphol',
    description: 'Uw chauffeur staat op tijd klaar. Relax en geniet van de Tesla rit naar Schiphol.',
  },
]

const faqs = [
  {
    question: 'Wat kost een taxi naar Schiphol?',
    answer: 'Een taxi naar Schiphol kost vanaf €79 vanuit Den Haag of Leiden. Dit is een vaste prijs - geen toeslagen bij files of omleidingen. Bagage en 30 minuten wachttijd zijn inbegrepen.',
  },
  {
    question: 'Hoe laat moet ik de taxi naar Schiphol bestellen?',
    answer: 'Wij adviseren om de taxi naar Schiphol minimaal 3 uur voor uw vertrektijd te boeken. Voor internationale vluchten raden wij 3,5 uur aan. Wij houden rekening met mogelijke drukte op de weg.',
  },
  {
    question: 'Wat als mijn vlucht vertraging heeft?',
    answer: 'Geen probleem! Wij volgen uw vlucht via flight tracking. Bij vertraging passen wij de ophaaltijd voor uw taxi naar Schiphol automatisch aan. De eerste 30 minuten wachttijd zijn gratis.',
  },
  {
    question: 'Kan ik een taxi naar Schiphol vooraf betalen?',
    answer: 'Ja, wij accepteren contant, PIN, creditcard en voor zakelijke klanten facturatie. Vooraf betalen via iDEAL is ook mogelijk voor uw Schiphol transfer.',
  },
  {
    question: 'Hoeveel bagage mag ik meenemen naar Schiphol?',
    answer: 'Standaard bagage (1 koffer + 1 handbagage per persoon) is inbegrepen bij de taxi naar Schiphol. Voor extra bagage of bijzondere items zoals ski\'s, neem vooraf contact met ons op.',
  },
  {
    question: 'Kan ik een kinderzitje aanvragen voor de Schiphol taxi?',
    answer: 'Ja, kinderzitjes zijn beschikbaar op aanvraag. Geef dit aan bij uw boeking voor de taxi naar Schiphol zodat wij dit kunnen regelen.',
  },
  {
    question: 'Waar wordt ik opgehaald op Schiphol?',
    answer: 'Onze chauffeur staat klaar bij de afgesproken ontmoetingsplek, meestal bij de aankomsthal. U ontvangt vooraf een bericht met de exacte locatie en het telefoonnummer van de chauffeur.',
  },
  {
    question: "Is de taxi naar Schiphol ook 's nachts beschikbaar?",
    answer: 'Ja, onze Schiphol taxi service is 24/7 beschikbaar. Ook voor vroege ochtendvluchten of late nachtvluchten kunt u bij ons terecht.',
  },
]

export default function SchipholPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Taxi naar Schiphol - Enjoy Taxi',
            description: 'Premium taxi service naar Schiphol Airport vanuit Den Haag en Leiden. Vaste prijzen, flight tracking en 24/7 beschikbaar.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Enjoy Taxi',
              telephone: '+31620172767',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Den Haag',
                addressRegion: 'Zuid-Holland',
                addressCountry: 'NL',
              },
            },
            areaServed: [
              { '@type': 'City', name: 'Den Haag' },
              { '@type': 'City', name: 'Leiden' },
              { '@type': 'City', name: 'Delft' },
              { '@type': 'City', name: 'Zoetermeer' },
              { '@type': 'City', name: 'Wassenaar' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Taxi naar Schiphol Tarieven',
              itemListElement: pricing.map((item) => ({
                '@type': 'Offer',
                name: `Taxi ${item.location} naar Schiphol`,
                price: item.price,
                priceCurrency: 'EUR',
              })),
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero Section - Like Home Page */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <svg className="w-4 h-4 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-sm font-semibold text-white uppercase tracking-wider">Schiphol Transfer</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Taxi naar <span className="text-primary-300">Schiphol</span>
              </h1>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Comfortabel en stressvrij naar Schiphol Airport met onze premium Tesla taxi service.
                Vaste prijzen vanaf €79, flight tracking en 30 minuten gratis wachttijd bij vertraging.
              </p>

              {/* USPs */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { text: 'Vaste Prijs', icon: '✓' },
                  { text: 'Flight Tracking', icon: '✓' },
                  { text: '24/7 Service', icon: '✓' },
                  { text: '100% Tesla', icon: '✓' },
                  { text: 'Bagage Inbegrepen', icon: '✓' },
                  { text: '30 Min Wachttijd', icon: '✓' },
                ].map((usp, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                      {usp.icon}
                    </span>
                    <span className="text-sm font-medium">{usp.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+31620172767"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Boek Nu: 06 2017 2767
                </a>
                <a
                  href="https://wa.me/31620172767?text=Hallo,%20ik%20wil%20graag%20een%20taxi%20naar%20Schiphol%20boeken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right - Price Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Taxi naar Schiphol</span>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className="text-lg text-secondary-500">vanaf</span>
                    <span className="text-6xl font-bold text-secondary-900 mx-2">€79</span>
                  </div>
                  <p className="text-secondary-500 mt-2">vaste prijs, geen verrassingen</p>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    'Vaste prijs, ook bij files',
                    '30 min gratis wachttijd',
                    'Flight tracking inbegrepen',
                    'Bagage inbegrepen',
                    'Luxe Tesla voertuig',
                    '24/7 beschikbaar',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+31620172767"
                  className="block w-full py-4 bg-primary-600 text-white text-center font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Boek Uw Schiphol Taxi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Tarieven Taxi naar Schiphol
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Vaste Prijzen naar Schiphol
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Transparante tarieven voor uw taxi naar Schiphol. De prijs die u ziet is de prijs die u betaalt - geen verrassingen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-primary-600 text-white font-semibold">
                <div>Vertrekpunt</div>
                <div className="text-center">Reistijd</div>
                <div className="text-right">Prijs</div>
              </div>
              {pricing.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-4 items-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-secondary-50'
                  }`}
                >
                  <div className="font-medium text-secondary-900">{item.location}</div>
                  <div className="text-center text-secondary-600">~{item.duration}</div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary-600">€{item.price}</span>
                    <span className="text-secondary-500 text-sm">,-</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-secondary-500 mt-6 text-sm">
              * Alle prijzen voor taxi naar Schiphol zijn inclusief bagage en 30 minuten wachttijd. Uw locatie niet in de lijst? Neem contact op voor een offerte.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Taxi naar Schiphol .webp"
                  alt="Taxi naar Schiphol - Premium Tesla Service"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary-200/50 -z-10" />
              {/* Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-secondary-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">Flight</div>
                    <div className="text-sm text-secondary-500">Tracking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                Waarom Enjoy Taxi naar Schiphol
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                De Beste Taxi naar Schiphol
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Enjoy Taxi is uw partner voor premium vervoer naar Schiphol. Tesla comfort, vaste prijzen,
                en 24/7 beschikbaar vanuit Den Haag, Leiden en omgeving.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-secondary-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              Hoe Werkt Het
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Taxi naar Schiphol Boeken
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              In 4 eenvoudige stappen uw taxi naar Schiphol geboekt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="tel:+31620172767"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Boek Nu Uw Schiphol Taxi
            </a>
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              Onze Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Taxi naar Schiphol Service
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Alles voor een zorgeloze reis naar Schiphol Airport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-secondary-200 hover:shadow-lg hover:border-primary-200 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewList />

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl shadow-secondary-900/5 border border-secondary-100 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Trust badges */}
              <div>
                <h3 className="text-lg font-bold text-secondary-900 mb-6">Waarom klanten onze Schiphol taxi vertrouwen</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">Verzekerd</div>
                      <div className="text-xs text-secondary-500">Volledig gedekt</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">Gecertificeerd</div>
                      <div className="text-xs text-secondary-500">Ervaren chauffeurs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary-900">5.0 Rating</div>
                      <div className="text-xs text-secondary-500">Klant Reviews</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment methods */}
              <div className="lg:border-l lg:border-secondary-200 lg:pl-8">
                <h3 className="text-lg font-bold text-secondary-900 mb-6">Betaalmethoden</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'PIN', icon: '💳' },
                    { name: 'Contant', icon: '💵' },
                    { name: 'Creditcard', icon: '💳' },
                    { name: 'Factuur', icon: '📄' },
                    { name: 'iDEAL', icon: '🏦' },
                  ].map((method) => (
                    <div
                      key={method.name}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary-50 rounded-xl border border-secondary-200 hover:bg-secondary-100 transition-colors"
                    >
                      <span className="text-lg">{method.icon}</span>
                      <span className="text-sm font-medium text-secondary-700">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Veelgestelde Vragen over Taxi naar Schiphol
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-secondary-50 rounded-xl border border-secondary-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-semibold text-secondary-900 pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center group-open:bg-primary-100 transition-colors">
                      <svg
                        className="w-4 h-4 text-secondary-500 group-open:text-primary-600 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-secondary-600">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar om Uw Taxi naar Schiphol te Boeken?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Boek nu uw taxi naar Schiphol en reis comfortabel in een Tesla. Vaste prijzen, geen verrassingen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+31620172767"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel: 06 2017 2767
            </a>
            <a
              href="https://wa.me/31620172767?text=Hallo,%20ik%20wil%20graag%20een%20taxi%20naar%20Schiphol%20boeken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Contact Formulier
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </>
  )
}
