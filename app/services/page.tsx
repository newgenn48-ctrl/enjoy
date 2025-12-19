import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Taxi Diensten Den Haag & Leiden | Luchthaven Transfer, Zakelijk, VIP | Enjoy Taxi',
  description:
    'Premium elektrische taxi diensten in Den Haag en Leiden. Luchthaven transfers naar Schiphol, zakelijk vervoer, evenementen en VIP service. 100% Tesla vloot, 24/7 beschikbaar.',
  keywords: [
    'taxi diensten den haag',
    'luchthaven transfer schiphol',
    'zakelijk vervoer leiden',
    'vip taxi service',
    'tesla taxi',
    'elektrische taxi',
    'evenementen vervoer',
  ],
  openGraph: {
    title: 'Premium Taxi Diensten | Enjoy Taxi Den Haag & Leiden',
    description:
      'Ontdek onze premium elektrische taxi diensten. Van Schiphol transfers tot VIP service met onze Tesla vloot.',
    url: 'https://enjoytaxi.nl/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://enjoytaxi.nl/services',
  },
}

const services = [
  {
    id: 'luchthaven',
    title: 'Luchthaven Transfer',
    subtitle: 'Zorgeloos naar uw vlucht',
    description:
      'Stressvrij van en naar Schiphol of Rotterdam The Hague Airport. Wij monitoren uw vluchtstatus en passen de ophaaltijd automatisch aan bij vertragingen.',
    longDescription:
      'Onze luchthaven transfer service is de perfecte keuze voor reizigers die waarde hechten aan comfort en betrouwbaarheid. Met flight tracking volgen wij uw vlucht in real-time, zodat wij altijd op het juiste moment klaar staan. Onze chauffeurs kennen alle terminals en zorgen voor een soepele overdracht.',
    features: [
      'Vaste prijzen, geen verrassingen',
      'Vlucht monitoring - wij volgen uw aankomsttijd',
      'Meet & greet service op de luchthaven',
      'Ruimte voor bagage en handbagage',
      '24/7 beschikbaar, ook voor vroege vluchten',
      'Gratis wachttijd bij vertraging (tot 60 min)',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    priceFrom: 35,
    priceNote: 'Vanaf Leiden naar Schiphol',
    popular: true,
    routes: [
      { from: 'Den Haag', to: 'Schiphol', price: 55 },
      { from: 'Leiden', to: 'Schiphol', price: 35 },
      { from: 'Den Haag', to: 'Rotterdam Airport', price: 25 },
    ],
  },
  {
    id: 'zakelijk',
    title: 'Zakelijk Vervoer',
    subtitle: 'Professioneel & discreet',
    description:
      'Maak indruk op uw zakenpartners met onze premium Tesla service. Discrete service, WiFi aan boord en opladers voor al uw devices.',
    longDescription:
      'Voor zakelijke klanten bieden wij een service die past bij uw professionele uitstraling. Onze chauffeurs zijn discreet, punctueel en professioneel gekleed. Met WiFi en opladers aan boord kunt u onderweg productief blijven. Flexibele facturatie en zakelijke accounts maken het administratief gemakkelijk.',
    features: [
      'Professionele, discrete chauffeurs',
      'WiFi en USB-C/Lightning opladers',
      'Flexibele facturatie (BTW-specificatie)',
      'Zakelijke accounts met korting',
      'Prioriteit reserveringen 24/7',
      'Maandelijkse facturatie mogelijk',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    priceFrom: 35,
    priceNote: 'Binnen Den Haag/Leiden',
    popular: false,
    routes: [],
  },
  {
    id: 'evenementen',
    title: 'Evenementen Vervoer',
    subtitle: 'Maak het onvergetelijk',
    description:
      'Van bruiloften tot congressen, van galadiner tot sportevenement. Meerdere Tesla voertuigen beschikbaar voor groepsvervoer in stijl.',
    longDescription:
      'Maak uw speciale dag nog bijzonderder met onze evenementen service. Of het nu gaat om een bruiloft, bedrijfsevenement of familiefeest - wij zorgen voor stijlvol vervoer dat indruk maakt. Coördinatie van meerdere voertuigen, speciale decoratie en ervaren event chauffeurs maken uw evenement compleet.',
    features: [
      'Meerdere Tesla voertuigen beschikbaar',
      'Professionele coördinatie groepsvervoer',
      'Speciale decoratie op aanvraag (bruiloft)',
      'Flexibele planning en routes',
      'Ervaren event chauffeurs',
      'Shuttle service voor gasten',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    priceFrom: 150,
    priceNote: 'Per evenement (excl. km)',
    popular: false,
    routes: [],
  },
  {
    id: 'vip',
    title: 'VIP Service',
    subtitle: 'Ultieme luxe & privacy',
    description:
      'Exclusieve service voor de meest veeleisende reizigers. Maximale privacy, persoonlijke aandacht en onze beste voertuigen.',
    longDescription:
      'Onze VIP service is ontworpen voor klanten die het allerbeste verwachten. Met onze Tesla Model S en Model X voertuigen, persoonlijke chauffeur en complete discretie bieden wij een ongeëvenaarde reiservaring. Inclusief complimentary versnaperingen en concierge service op aanvraag.',
    features: [
      'Tesla Model S of Model X',
      'Persoonlijke vaste chauffeur',
      'Maximale privacy & discretie',
      'Complimentary versnaperingen',
      'Priority service & flexibiliteit',
      'Concierge service op aanvraag',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    priceFrom: 95,
    priceNote: 'Per uur (min. 2 uur)',
    popular: false,
    routes: [],
  },
]

const fleetFeatures = [
  {
    title: 'Tesla Model S',
    description: 'Onze flagship sedan voor maximaal comfort en bereik. Ideaal voor zakelijke ritten en VIP service.',
    specs: ['Tot 4 passagiers', '600+ km bereik', 'Premium lederen interieur', 'Autopilot'],
    image: '/tesla-model-s.jpg',
  },
  {
    title: 'Tesla Model X',
    description: 'Ruime SUV perfect voor families, extra bagage en groepen. De ultieme reiscomfort.',
    specs: ['Tot 6 passagiers', 'Falcon Wing deuren', 'Maximale bagageruimte', 'Panoramisch dak'],
    image: '/tesla-model-x.jpg',
  },
  {
    title: 'Tesla Model 3',
    description: 'Compacte luxe voor stedelijk vervoer. Wendbaar en efficiënt met premium features.',
    specs: ['Tot 4 passagiers', 'Wendbaar in de stad', 'Premium audio systeem', 'Snelladen'],
    image: '/tesla-model-3.jpg',
  },
]

const faqs = [
  {
    question: 'Hoe ver van tevoren moet ik boeken?',
    answer:
      'Voor reguliere ritten kunt u tot 2 uur van tevoren boeken. Voor luchthaven transfers en evenementen raden wij aan minimaal 24 uur van tevoren te reserveren om beschikbaarheid te garanderen.',
  },
  {
    question: 'Wat zijn de betalingsmogelijkheden?',
    answer:
      'Wij accepteren contant, PIN, creditcard en facturatie voor zakelijke klanten. Bij zakelijke accounts is maandelijkse facturatie mogelijk.',
  },
  {
    question: 'Wat gebeurt er bij vertraging van mijn vlucht?',
    answer:
      'Wij monitoren alle vluchten in real-time. Bij vertraging passen wij automatisch de ophaaltijd aan. Tot 60 minuten wachttijd is gratis inbegrepen bij luchthaven transfers.',
  },
  {
    question: 'Hoeveel bagage kan ik meenemen?',
    answer:
      'In de Tesla Model S en Model 3 passen 2 grote koffers en handbagage. De Model X biedt ruimte voor 4+ grote koffers. Neem bij twijfel contact met ons op.',
  },
  {
    question: 'Zijn er kinderzitjes beschikbaar?',
    answer:
      'Ja, wij hebben kinderzitjes en verhogingen beschikbaar. Geef dit aan bij uw reservering zodat wij het juiste zitje klaar kunnen zetten.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Taxi Service',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Enjoy Taxi',
              url: 'https://enjoytaxi.nl',
            },
            areaServed: [
              { '@type': 'City', name: 'Den Haag' },
              { '@type': 'City', name: 'Leiden' },
              { '@type': 'City', name: 'Delft' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Taxi Diensten',
              itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: service.priceFrom,
                  priceCurrency: 'EUR',
                },
              })),
            },
          }),
        }}
      />

      {/* FAQ Structured Data */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/enjoy taxi.webp"
            alt="Enjoy Taxi - Premium Elektrische Tesla Taxi"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/90 to-primary-900/80" />
          {/* Color glow effects */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-400/15 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 60L0 35C180 45 360 25 540 20C720 15 900 25 1080 32C1260 40 1350 45 1440 48L1440 60H0Z" fill="white" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Diensten</span>
            </nav>

            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90">Premium Tesla Vloot</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Onze Taxi Diensten
              <span className="block text-primary-300">Den Haag & Leiden</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Van luchthaven transfers tot exclusieve VIP service. Ontdek hoe Enjoy
              Taxi u in stijl en comfort naar uw bestemming brengt.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Elektrisch</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 Beschikbaar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Vaste Prijzen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-4 bg-white border-b border-secondary-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 hover:bg-primary-100 text-secondary-700 hover:text-primary-700 transition-colors whitespace-nowrap text-sm font-medium"
              >
                {service.title}
                {service.popular && (
                  <span className="w-2 h-2 bg-primary-500 rounded-full" />
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {service.popular && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-4">
                        Meest Gekozen
                      </span>
                    )}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-lg">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-secondary-900">{service.title}</h2>
                        <p className="text-primary-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    <p className="text-secondary-500 mb-6">
                      {service.longDescription}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <svg
                            className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-secondary-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-6">
                      <div className="bg-secondary-50 rounded-xl px-6 py-4">
                        <span className="text-sm text-secondary-500 block">Vanaf</span>
                        <div className="text-3xl font-bold text-primary-600">
                          &euro;{service.priceFrom}
                        </div>
                        <span className="text-xs text-secondary-400">{service.priceNote}</span>
                      </div>
                      <Link href="/contact" className="btn-primary">
                        Offerte Aanvragen
                      </Link>
                      <a href="tel:+31612345678" className="btn-secondary">
                        Bel Direct
                      </a>
                    </div>

                    {/* Popular routes for airport transfer */}
                    {service.routes && service.routes.length > 0 && (
                      <div className="mt-8 p-4 bg-secondary-50 rounded-xl">
                        <h4 className="font-semibold text-secondary-900 mb-3">Populaire Routes & Prijzen</h4>
                        <div className="space-y-2">
                          {service.routes.map((route) => (
                            <div key={`${route.from}-${route.to}`} className="flex justify-between items-center text-sm">
                              <span className="text-secondary-600">{route.from} → {route.to}</span>
                              <span className="font-semibold text-primary-600">&euro;{route.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-2xl border border-primary-200 overflow-hidden relative">
                      {/* Decorative elements */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary-400/10 rounded-full blur-xl" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary-600 border border-primary-100">
                          {service.icon}
                        </div>
                      </div>
                      {/* Service number badge */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-600">0{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider between services */}
                {index < services.length - 1 && (
                  <div className="mt-24 border-t border-secondary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="section-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              Onze Vloot
            </span>
            <h2 className="heading-2 mb-4">
              100% Tesla, 100% Elektrisch
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Onze volledige vloot bestaat uit premium Tesla voertuigen. Zero
              emissie, maximaal comfort en de nieuwste technologie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetFeatures.map((vehicle) => (
              <div key={vehicle.title} className="bg-white rounded-2xl border border-secondary-200 overflow-hidden hover:shadow-xl transition-shadow group">
                {/* Vehicle image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {vehicle.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">{vehicle.description}</p>
                  <ul className="space-y-2">
                    {vehicle.specs.map((spec) => (
                      <li
                        key={spec}
                        className="text-sm text-secondary-600 flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="heading-2 mb-4">Veelgestelde Vragen</h2>
            <p className="text-lg text-secondary-600">
              Antwoorden op de meest gestelde vragen over onze diensten.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-secondary-50 border border-secondary-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-secondary-100 transition-colors">
                  <span className="font-semibold text-secondary-900 pr-4">
                    {faq.question}
                  </span>
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
      </section>

      {/* CTA Section */}
      <CTASection
        title="Klaar voor Premium Elektrisch Vervoer?"
        subtitle="Neem contact op voor een vrijblijvende offerte of boek direct uw rit in Den Haag of Leiden."
      />
    </>
  )
}
