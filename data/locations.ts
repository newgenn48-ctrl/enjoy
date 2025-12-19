export interface PopularRoute {
  destination: string
  priceFrom: number
}

export interface Location {
  slug: string
  name: string
  region: string
  description: string
  longDescription: string
  highlights: string[]
  nearbyAirport?: string
  schipholDistance: string
  schipholTime: string
  popularRoutes: PopularRoute[]
  metaTitle: string
  metaDescription: string
}

export const locations: Location[] = [
  // Den Haag en omgeving
  {
    slug: 'den-haag',
    name: 'Den Haag',
    region: 'Den Haag e.o.',
    description:
      'Taxi Den Haag nodig? Enjoy Taxi biedt premium vervoer met Tesla in Den Haag en omgeving. Taxi naar Schiphol vanaf €79, zakelijk vervoer bij het Binnenhof, of taxi naar Scheveningen - wij rijden 24/7 met vaste prijzen.',
    longDescription:
      'Bent u op zoek naar een betrouwbare taxi in Den Haag? Enjoy Taxi is uw premium taxiservice in de hofstad. Of u nu vanaf Den Haag Centraal Station, Den Haag HS, het Binnenhof of Scheveningen vertrekt - wij staan 24 uur per dag, 7 dagen per week voor u klaar. Onze Tesla vloot biedt maximaal comfort voor zowel zakelijke reizigers als toeristen. Met vaste prijzen vooraf weet u precies wat u betaalt, zonder verrassingen door files of omrijden. Taxi Den Haag bestellen was nog nooit zo makkelijk.',
    highlights: ['Binnenhof & Tweede Kamer', 'Den Haag Centraal & HS', 'Scheveningen', 'World Forum', 'Madurodam', 'Vredespaleis'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '55 km',
    schipholTime: '40-55 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 79 },
      { destination: 'Rotterdam The Hague Airport', priceFrom: 35 },
      { destination: 'Leiden', priceFrom: 35 },
      { destination: 'Delft', priceFrom: 25 },
    ],
    metaTitle: 'Taxi Den Haag | 24/7 Beschikbaar | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Den Haag bestellen? ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Schiphol vanaf €79 ✓ Tesla comfort ✓ Geen wachttijd. Bel nu!',
  },
  {
    slug: 'scheveningen',
    name: 'Scheveningen',
    region: 'Den Haag e.o.',
    description:
      'Taxi Scheveningen bestellen? Van de pier, Kurhaus of strand naar Schiphol of Den Haag Centrum. Enjoy Taxi biedt 24/7 taxi service in Scheveningen met vaste prijzen en Tesla comfort.',
    longDescription:
      'Taxi nodig in Scheveningen? Enjoy Taxi is de premium taxiservice voor de populairste badplaats van Nederland. Of u nu vertrekt vanaf de boulevard, het Kurhaus, de haven of het strand - wij halen u op waar u wilt. Ideaal voor toeristen die Scheveningen bezoeken, zakelijke gasten van hotels aan de kust, of bewoners die comfortabel naar Schiphol of andere bestemmingen willen. Onze chauffeurs kennen Scheveningen op hun duimpje en brengen u snel en veilig naar uw bestemming.',
    highlights: ['Kurhaus', 'Scheveningse Pier', 'Sea Life', 'De Haven', 'Boulevard', 'Circustheater'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '60 km',
    schipholTime: '45-60 minuten',
    popularRoutes: [
      { destination: 'Den Haag Centrum', priceFrom: 20 },
      { destination: 'Schiphol Airport', priceFrom: 85 },
      { destination: 'Leiden', priceFrom: 40 },
      { destination: 'Rotterdam', priceFrom: 45 },
    ],
    metaTitle: 'Taxi Scheveningen | 24/7 Service | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Scheveningen nodig? ✓ 24/7 service ✓ Vanaf Kurhaus & Boulevard ✓ Schiphol vanaf €85 ✓ Vaste prijzen. Bel nu!',
  },
  {
    slug: 'delft',
    name: 'Delft',
    region: 'Den Haag e.o.',
    description:
      'Taxi Delft bestellen? Enjoy Taxi rijdt 24/7 in Delft. Taxi naar Schiphol vanaf €65, Rotterdam €25, Den Haag €25. Ideaal voor TU Delft bezoekers en toeristen. Vaste prijzen, Tesla comfort.',
    longDescription:
      'Op zoek naar een taxi in Delft? Enjoy Taxi biedt premium taxiservice in de historische stad Delft. Wij vervoeren dagelijks studenten en medewerkers van de TU Delft, toeristen die het centrum en de beroemde Delfts Blauw fabrieken bezoeken, en zakelijke reizigers. Vanaf Delft Station of het centrum brengen wij u comfortabel naar Schiphol, Rotterdam The Hague Airport of andere bestemmingen. Met onze Tesla vloot reist u stil, schoon en stijlvol door de Randstad.',
    highlights: ['TU Delft Campus', 'Oude Kerk & Nieuwe Kerk', 'Markt', 'Royal Delft', 'Station Delft', 'Prinsenhof'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '50 km',
    schipholTime: '35-50 minuten',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 25 },
      { destination: 'Schiphol Airport', priceFrom: 65 },
      { destination: 'Rotterdam', priceFrom: 25 },
      { destination: 'Leiden', priceFrom: 35 },
    ],
    metaTitle: 'Taxi Delft | 24/7 Beschikbaar | TU Delft & Schiphol | Enjoy Taxi',
    metaDescription:
      'Taxi Delft nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €65 ✓ TU Delft vervoer ✓ Vaste tarieven. Bel nu voor taxi Delft!',
  },
  {
    slug: 'rijswijk',
    name: 'Rijswijk',
    region: 'Den Haag e.o.',
    description:
      'Taxi Rijswijk bestellen? Enjoy Taxi biedt premium taxiservice in Rijswijk. Centraal gelegen tussen Den Haag en Delft, perfect voor zakelijke ritten en luchthaven transfers naar Schiphol.',
    longDescription:
      'Taxi nodig in Rijswijk? Enjoy Taxi is uw betrouwbare taxipartner in Rijswijk. De centrale ligging tussen Den Haag en Delft maakt Rijswijk een ideale uitvalsbasis. Wij vervoeren dagelijks zakelijke reizigers naar kantoren, bewoners naar de luchthaven, en bezoekers naar de vele attracties in de regio. Met vaste prijzen en 24/7 beschikbaarheid bent u verzekerd van betrouwbaar vervoer. Onze Tesla taxi staat binnen 15 minuten bij u voor de deur.',
    highlights: ['Rijswijk Centrum', 'Station Rijswijk', 'In de Bogaard', 'Landgoed Te Werve', 'Rijswijkse Bos'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '48 km',
    schipholTime: '35-45 minuten',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 20 },
      { destination: 'Schiphol Airport', priceFrom: 60 },
      { destination: 'Delft', priceFrom: 20 },
      { destination: 'Rotterdam', priceFrom: 35 },
    ],
    metaTitle: 'Taxi Rijswijk | 24/7 Service | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Rijswijk nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €60 ✓ Den Haag €20 ✓ Vaste prijzen. Bel nu voor taxi Rijswijk!',
  },
  {
    slug: 'zoetermeer',
    name: 'Zoetermeer',
    region: 'Den Haag e.o.',
    description:
      'Taxi Zoetermeer bestellen? Enjoy Taxi biedt premium taxiservice in Zoetermeer. Snelle verbindingen naar Den Haag, Leiden en Schiphol met onze luxe Tesla vloot. 24/7 beschikbaar, vaste prijzen.',
    longDescription:
      'Op zoek naar een taxi in Zoetermeer? Enjoy Taxi is de premium taxiservice voor Zoetermeer en omgeving. Als snelgroeiende stad met veel bedrijven en attracties zoals Snowworld, vervoeren wij dagelijks bewoners en bezoekers. Vanaf Zoetermeer Centrum West, Lansingerland-Zoetermeer of andere locaties brengen wij u comfortabel naar uw bestemming. Of het nu gaat om een luchthaven transfer naar Schiphol of een rit naar Den Haag - wij staan voor u klaar.',
    highlights: ['Snowworld', 'Stadshart', 'Station Zoetermeer', 'Dutch Water Dreams', 'Westerpark'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '45 km',
    schipholTime: '35-50 minuten',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 30 },
      { destination: 'Schiphol Airport', priceFrom: 65 },
      { destination: 'Leiden', priceFrom: 30 },
      { destination: 'Rotterdam', priceFrom: 40 },
    ],
    metaTitle: 'Taxi Zoetermeer | 24/7 Beschikbaar | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Zoetermeer nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €65 ✓ Den Haag €30 ✓ Tesla comfort. Bel nu voor taxi Zoetermeer!',
  },
  {
    slug: 'leidschendam-voorburg',
    name: 'Leidschendam-Voorburg',
    region: 'Den Haag e.o.',
    description:
      'Taxi Leidschendam-Voorburg bestellen? Enjoy Taxi biedt premium taxiservice. Ideaal gelegen voor snelle verbindingen naar Den Haag centrum, Schiphol en omliggende steden. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Leidschendam of Voorburg? Enjoy Taxi is uw betrouwbare taxiservice in deze gemeente. Gelegen tussen Den Haag en Zoetermeer, bent u met onze taxi snel op uw bestemming. Wij halen u op bij station Voorburg, winkelcentrum Leidsenhage, of waar u maar wilt. Populaire ritten zijn luchthaven transfers naar Schiphol, zakelijke ritten naar Den Haag, en uitstapjes naar de kust. Met vaste prijzen weet u vooraf wat u betaalt.',
    highlights: ['Mall of the Netherlands', 'Station Voorburg', 'Vlietland', 'Historisch Voorburg', 'De Heuvel'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '42 km',
    schipholTime: '30-45 minuten',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 20 },
      { destination: 'Schiphol Airport', priceFrom: 55 },
      { destination: 'Leiden', priceFrom: 25 },
      { destination: 'Zoetermeer', priceFrom: 20 },
    ],
    metaTitle: 'Taxi Leidschendam-Voorburg | 24/7 Service | Enjoy Taxi',
    metaDescription:
      'Taxi Leidschendam-Voorburg nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €55 ✓ Vaste prijzen ✓ Tesla comfort. Bel nu!',
  },
  {
    slug: 'wassenaar',
    name: 'Wassenaar',
    region: 'Den Haag e.o.',
    description:
      'Taxi Wassenaar bestellen? Enjoy Taxi biedt exclusieve taxiservice in Wassenaar. Onze Tesla vloot past perfect bij deze stijlvolle gemeente. 24/7 beschikbaar voor luchthaven transfers en meer.',
    longDescription:
      'Op zoek naar een taxi in Wassenaar? Enjoy Taxi biedt exclusieve taxiservice die past bij het karakter van Wassenaar. Onze premium Tesla vloot is ideaal voor de bewoners en bezoekers van deze stijlvolle gemeente. Wij vervoeren u graag naar Schiphol, internationale scholen, ambassades, of de prachtige duinen en strand van Wassenaar. Discrete, professionele service met chauffeurs die de omgeving kennen.',
    highlights: ['Duinrell', 'Meijendel', 'Landgoed Clingendael', 'Strand Wassenaar', 'Amerikaanse School'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '35 km',
    schipholTime: '25-40 minuten',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 25 },
      { destination: 'Schiphol Airport', priceFrom: 50 },
      { destination: 'Leiden', priceFrom: 20 },
      { destination: 'Katwijk', priceFrom: 25 },
    ],
    metaTitle: 'Taxi Wassenaar | Premium Tesla Service | Enjoy Taxi',
    metaDescription:
      'Taxi Wassenaar nodig? ✓ Exclusieve service ✓ Schiphol vanaf €50 ✓ 24/7 beschikbaar ✓ Tesla comfort. Bel nu!',
  },
  // Leiden en omgeving
  {
    slug: 'leiden',
    name: 'Leiden',
    region: 'Leiden e.o.',
    description:
      'Taxi Leiden bestellen? Enjoy Taxi biedt premium vervoer in Leiden en omgeving. Taxi naar Schiphol vanaf €45, Den Haag €35. 24/7 beschikbaar met vaste prijzen. Ideaal voor universiteit, centrum en luchthaven transfers.',
    longDescription:
      'Bent u op zoek naar een betrouwbare taxi in Leiden? Enjoy Taxi is de premium taxiservice voor de oudste universiteitsstad van Nederland. Wij vervoeren dagelijks studenten, wetenschappers en bezoekers van de Universiteit Leiden en het LUMC. Ook toeristen die de historische binnenstad, musea en grachten verkennen maken graag gebruik van onze service. Vanaf Leiden Centraal of elke andere locatie in Leiden brengen wij u comfortabel naar Schiphol, Den Haag of andere bestemmingen.',
    highlights: ['Universiteit Leiden', 'LUMC', 'Leiden Centraal', 'Pieterskerk', 'Naturalis', 'Hortus Botanicus', 'Rijksmuseum van Oudheden'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '30 km',
    schipholTime: '20-35 minuten',
    popularRoutes: [
      { destination: 'Schiphol Airport', priceFrom: 45 },
      { destination: 'Den Haag', priceFrom: 35 },
      { destination: 'Katwijk', priceFrom: 20 },
      { destination: 'Noordwijk', priceFrom: 25 },
    ],
    metaTitle: 'Taxi Leiden | 24/7 Beschikbaar | Schiphol €45 | Enjoy Taxi',
    metaDescription:
      'Taxi Leiden nodig? ✓ Schiphol vanaf €45 ✓ 24/7 beschikbaar ✓ Vaste prijzen ✓ Tesla comfort. Bel nu voor taxi Leiden!',
  },
  {
    slug: 'katwijk',
    name: 'Katwijk',
    region: 'Leiden e.o.',
    description:
      'Taxi Katwijk bestellen? Enjoy Taxi biedt premium taxiservice in Katwijk aan Zee. Perfect voor strandgangers, ESA/ESTEC bezoekers en iedereen die stijlvol wil reizen. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Katwijk? Enjoy Taxi is de premium taxiservice voor Katwijk aan Zee en Katwijk aan den Rijn. Wij vervoeren dagelijks bezoekers en medewerkers van ESA/ESTEC, strandgangers, en bewoners die naar de luchthaven of andere bestemmingen moeten. Katwijk is een populaire badplaats en onze chauffeurs kennen alle hotels, vakantiewoningen en attracties. Met vaste prijzen en 24/7 beschikbaarheid staat uw taxi altijd klaar.',
    highlights: ['ESA/ESTEC', 'Strand Katwijk', 'Boulevard', 'Katwijks Museum', 'Spinozaweg'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '35 km',
    schipholTime: '25-40 minuten',
    popularRoutes: [
      { destination: 'Leiden', priceFrom: 20 },
      { destination: 'Schiphol Airport', priceFrom: 50 },
      { destination: 'Den Haag', priceFrom: 35 },
      { destination: 'Noordwijk', priceFrom: 15 },
    ],
    metaTitle: 'Taxi Katwijk | 24/7 Service | ESA/ESTEC | Enjoy Taxi',
    metaDescription:
      'Taxi Katwijk nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €50 ✓ ESA/ESTEC vervoer ✓ Vaste prijzen. Bel nu!',
  },
  {
    slug: 'noordwijk',
    name: 'Noordwijk',
    region: 'Leiden e.o.',
    description:
      'Taxi Noordwijk bestellen? Enjoy Taxi biedt premium taxiservice in Noordwijk aan Zee. Ideaal voor congresgangers, Space Expo bezoekers en strandliefhebbers. 24/7 beschikbaar met vaste prijzen.',
    longDescription:
      'Op zoek naar een taxi in Noordwijk? Enjoy Taxi is de premium taxiservice voor deze populaire badplaats en congreslocatie. Noordwijk is bekend om haar stranden, bloembollenvelden en Space Expo. Wij vervoeren dagelijks hotelgasten, congresgangers en toeristen. Of u nu naar Schiphol moet voor een vlucht, naar een congres in het Huis ter Duin, of een dagje uit in de regio - onze Tesla taxi staat voor u klaar.',
    highlights: ['Space Expo', 'Huis ter Duin', 'Strand Noordwijk', 'Bloembollenvelden', 'Golfbaan'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '38 km',
    schipholTime: '30-45 minuten',
    popularRoutes: [
      { destination: 'Leiden', priceFrom: 25 },
      { destination: 'Schiphol Airport', priceFrom: 55 },
      { destination: 'Den Haag', priceFrom: 40 },
      { destination: 'Katwijk', priceFrom: 15 },
    ],
    metaTitle: 'Taxi Noordwijk | 24/7 Beschikbaar | Congres & Strand | Enjoy Taxi',
    metaDescription:
      'Taxi Noordwijk nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €55 ✓ Hotels & congressen ✓ Vaste prijzen. Bel nu!',
  },
  {
    slug: 'voorschoten',
    name: 'Voorschoten',
    region: 'Leiden e.o.',
    description:
      'Taxi Voorschoten bestellen? Enjoy Taxi biedt premium taxiservice in Voorschoten. Centraal gelegen tussen Leiden en Den Haag voor snelle en comfortabele ritten. 24/7 beschikbaar.',
    longDescription:
      'Taxi nodig in Voorschoten? Enjoy Taxi is uw betrouwbare taxipartner in dit groene dorp tussen Leiden en Den Haag. De centrale ligging maakt Voorschoten ideaal voor snelle verbindingen naar beide steden én Schiphol. Wij vervoeren bewoners naar de luchthaven, zakelijke reizigers naar kantoren in de regio, en bezoekers van de prachtige landgoederen. Met vaste prijzen en professionele chauffeurs bent u verzekerd van kwaliteit.',
    highlights: ['Landgoed Berbice', 'Voorschoten Centrum', 'Station Voorschoten', 'Vlietlanden'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '28 km',
    schipholTime: '20-35 minuten',
    popularRoutes: [
      { destination: 'Leiden', priceFrom: 15 },
      { destination: 'Den Haag', priceFrom: 25 },
      { destination: 'Schiphol Airport', priceFrom: 45 },
      { destination: 'Wassenaar', priceFrom: 15 },
    ],
    metaTitle: 'Taxi Voorschoten | 24/7 Service | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Voorschoten nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €45 ✓ Leiden €15 ✓ Vaste prijzen. Bel nu!',
  },
  {
    slug: 'oegstgeest',
    name: 'Oegstgeest',
    region: 'Leiden e.o.',
    description:
      'Taxi Oegstgeest bestellen? Enjoy Taxi biedt premium taxiservice in Oegstgeest. Direct naast Leiden gelegen, perfect voor universiteitsbezoekers, LUMC en zakelijke reizigers. 24/7 beschikbaar.',
    longDescription:
      'Op zoek naar een taxi in Oegstgeest? Enjoy Taxi is de premium taxiservice voor dit groene dorp direct naast Leiden. Door de nabijheid van de Universiteit Leiden en het LUMC vervoeren wij veel academici, medische professionals en hun bezoekers. Ook bewoners die naar Schiphol of andere bestemmingen moeten, maken graag gebruik van onze comfortabele Tesla taxi service. Snel, betrouwbaar en altijd een vaste prijs.',
    highlights: ['Bio Science Park', 'LUMC', 'Endegeest', 'Oegstgeest Centrum', 'Poelgeest'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '27 km',
    schipholTime: '20-30 minuten',
    popularRoutes: [
      { destination: 'Leiden', priceFrom: 15 },
      { destination: 'Schiphol Airport', priceFrom: 42 },
      { destination: 'Den Haag', priceFrom: 30 },
      { destination: 'Katwijk', priceFrom: 18 },
    ],
    metaTitle: 'Taxi Oegstgeest | 24/7 Beschikbaar | LUMC & Bio Science | Enjoy Taxi',
    metaDescription:
      'Taxi Oegstgeest nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €42 ✓ LUMC vervoer ✓ Vaste prijzen. Bel nu!',
  },
  {
    slug: 'leiderdorp',
    name: 'Leiderdorp',
    region: 'Leiden e.o.',
    description:
      'Taxi Leiderdorp bestellen? Enjoy Taxi biedt premium taxiservice in Leiderdorp. Snelle verbindingen naar Leiden centrum, Schiphol en de rest van de Randstad. 24/7 beschikbaar met vaste prijzen.',
    longDescription:
      'Taxi nodig in Leiderdorp? Enjoy Taxi is uw betrouwbare taxiservice in Leiderdorp. Dit dorp grenst direct aan Leiden en biedt snelle toegang tot de A4 richting Schiphol en Amsterdam. Wij vervoeren bewoners naar de luchthaven, winkelend publiek naar Winkelhof, en zakelijke reizigers naar bestemmingen in de Randstad. Met onze Tesla vloot reist u comfortabel en milieuvriendelijk. Bel of WhatsApp voor een taxi met vaste prijs.',
    highlights: ['Winkelhof', 'Leiderdorp Centrum', 'De Bloemerd', 'Sportpark Leiderdorp'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '28 km',
    schipholTime: '20-30 minuten',
    popularRoutes: [
      { destination: 'Leiden', priceFrom: 15 },
      { destination: 'Schiphol Airport', priceFrom: 42 },
      { destination: 'Den Haag', priceFrom: 35 },
      { destination: 'Alphen aan den Rijn', priceFrom: 25 },
    ],
    metaTitle: 'Taxi Leiderdorp | 24/7 Service | Vaste Prijzen | Enjoy Taxi',
    metaDescription:
      'Taxi Leiderdorp nodig? ✓ 24/7 beschikbaar ✓ Schiphol vanaf €42 ✓ Leiden €15 ✓ Vaste prijzen. Bel nu!',
  },
  // Luchthavens
  {
    slug: 'schiphol',
    name: 'Schiphol Airport',
    region: 'Luchthaven',
    description:
      'Taxi Schiphol naar Den Haag vanaf €79, naar Leiden vanaf €45 - vaste prijzen, geen verrassingen. Enjoy Taxi biedt 24/7 Schiphol taxi service met Tesla comfort. Wij monitoren uw vlucht en staan klaar bij alle terminals.',
    longDescription:
      'Schiphol taxi nodig naar Den Haag of Leiden? Enjoy Taxi is uw premium taxiservice van en naar Schiphol Airport. Wij monitoren uw vlucht en staan op tijd klaar bij Aankomsthal 1, 2, 3 of 4. Bij vertraging van uw vlucht passen wij de ophaaltijd automatisch aan - zonder extra kosten. Onze chauffeurs kennen de weg en brengen u via de snelste route naar Den Haag, Leiden, Delft of andere bestemmingen in Zuid-Holland. Reis comfortabel in onze Tesla met gratis WiFi en laadmogelijkheden voor uw telefoon.',
    highlights: ['Aankomsthal 1-4', 'Vertrekhal', 'Schiphol Plaza', 'P-Long', 'Sheraton', 'Hilton'],
    nearbyAirport: 'Schiphol',
    schipholDistance: '0 km',
    schipholTime: '-',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 79 },
      { destination: 'Leiden', priceFrom: 45 },
      { destination: 'Delft', priceFrom: 65 },
      { destination: 'Katwijk', priceFrom: 50 },
    ],
    metaTitle: 'Taxi Schiphol Den Haag €79 | Taxi Schiphol Leiden €45 | Enjoy Taxi',
    metaDescription:
      'Schiphol taxi nodig? ✓ Den Haag vanaf €79 ✓ Leiden vanaf €45 ✓ Vaste prijzen ✓ Flight tracking ✓ 24/7. Boek nu!',
  },
  {
    slug: 'rotterdam-the-hague-airport',
    name: 'Rotterdam The Hague Airport',
    region: 'Luchthaven',
    description:
      'Taxi Rotterdam The Hague Airport naar Den Haag vanaf €35, naar Delft vanaf €25. Enjoy Taxi biedt premium luchthaven transfers met Tesla comfort. 24/7 beschikbaar, vaste prijzen.',
    longDescription:
      'Taxi nodig van Rotterdam The Hague Airport? Enjoy Taxi is uw premium taxiservice voor deze regionale luchthaven. Ook wel bekend als Rotterdam Airport, is dit de ideale luchthaven voor reizigers uit Den Haag, Delft en omgeving. Wij staan klaar bij de terminal en brengen u snel naar uw bestemming. De luchthaven ligt dichtbij, dus u bent binnen 20-30 minuten in Den Haag of Delft. Ideaal voor zakenreizigers en vakantiegangers die via Rotterdam vliegen.',
    highlights: ['Terminal', 'Parkeren P1/P2', 'Business Lounge', 'Autoverhuur'],
    nearbyAirport: 'Rotterdam The Hague Airport',
    schipholDistance: '45 km',
    schipholTime: '35-45 minuten',
    popularRoutes: [
      { destination: 'Den Haag', priceFrom: 35 },
      { destination: 'Delft', priceFrom: 25 },
      { destination: 'Leiden', priceFrom: 45 },
      { destination: 'Scheveningen', priceFrom: 40 },
    ],
    metaTitle: 'Taxi Rotterdam Airport | Den Haag €35 | Delft €25 | Enjoy Taxi',
    metaDescription:
      'Rotterdam Airport taxi nodig? ✓ Den Haag vanaf €35 ✓ Delft vanaf €25 ✓ 24/7 beschikbaar ✓ Vaste prijzen. Boek nu!',
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug)
}
