# Enjoy Taxi - Premium Elektrische Tesla Taxi Service

Een ultra-moderne, luxe en high-tech taxi-website voor Enjoy Taxi, een premium taxidienst die 100% elektrisch (Tesla) rijdt.

## Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Taal:** TypeScript 5.7
- **Styling:** TailwindCSS 3.4
- **Runtime:** Node.js LTS
- **Hosting:** Vercel-ready

## Features

- Premium dark-mode design met Tesla/elektrisch thema
- Volledig responsive (mobile-first)
- SEO-geoptimaliseerd met structured data
- Dynamische locatiepagina's
- Contactformulier met Server Actions
- Server-side validatie met Zod
- Anti-spam (honeypot + rate limiting)
- Lighthouse scores ≥ 90

## Projectstructuur

```
enjoy-taxi/
├── app/
│   ├── layout.tsx           # Root layout met metadata
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # 404 pagina
│   ├── sitemap.ts           # Dynamische sitemap
│   ├── robots.ts            # Robots.txt configuratie
│   ├── services/
│   │   └── page.tsx         # Diensten pagina
│   ├── about/
│   │   └── page.tsx         # Over ons pagina
│   ├── contact/
│   │   └── page.tsx         # Contact pagina
│   ├── locations/
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamische locatiepagina's
│   └── actions/
│       └── contact.ts       # Server Actions
├── components/
│   ├── Header.tsx           # Navigatie header
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero sectie
│   ├── CTASection.tsx       # Call-to-action sectie
│   ├── ContactForm.tsx      # Contactformulier
│   ├── ReviewList.tsx       # Reviews/testimonials
│   └── LocationSEOSection.tsx
├── data/
│   ├── locations.ts         # Locatie data (TypeScript)
│   └── locations.json       # Locatie data (JSON)
├── styles/
│   └── globals.css          # Globale styles
├── tests/
│   ├── unit/                # Unit tests (Jest)
│   └── e2e/                 # E2E tests (Playwright)
└── public/
    └── manifest.json        # PWA manifest
```

## Installatie

1. **Clone de repository:**
   ```bash
   cd enjoy-taxi
   ```

2. **Installeer dependencies:**
   ```bash
   npm install
   ```

3. **Start de development server:**
   ```bash
   npm run dev
   ```

4. **Open de browser:**
   Ga naar [http://localhost:3000](http://localhost:3000)

## Scripts

| Commando | Beschrijving |
|----------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build voor productie |
| `npm run start` | Start productie server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:e2e` | Run E2E tests |

## Deployen naar Vercel

1. Push je code naar GitHub
2. Importeer het project in [Vercel](https://vercel.com)
3. Vercel detecteert automatisch Next.js
4. Deploy!

Of via CLI:
```bash
npx vercel
```

## Design System

### Kleuren

| Naam | Hex | Gebruik |
|------|-----|---------|
| Primary (Electric Cyan) | `#00d4ff` | CTAs, accenten |
| Secondary (Deep Black) | `#1a1a1a` | Backgrounds |
| Accent (Electric Teal) | `#00e6b0` | Highlights |

### Typografie

- **Font:** Inter (Google Fonts)
- **Headlines:** Bold, tracking-tight
- **Body:** Regular, goede leesbaarheid

### Componenten

Alle componenten gebruiken Tailwind CSS utility classes met custom component classes gedefinieerd in `globals.css`:

- `.btn-primary` - Primaire CTA button
- `.btn-secondary` - Secundaire button
- `.btn-accent` - Accent button
- `.card` - Card container met hover effects
- `.input-field` - Form input styling

## SEO

### Structured Data

De website bevat schema.org structured data voor:
- `LocalBusiness` - Bedrijfsinformatie
- `FAQPage` - Veelgestelde vragen
- `Review` - Klantbeoordelingen

### Meta Tags

Alle pagina's hebben:
- Unieke title en description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Sitemap

Automatisch gegenereerde sitemap via `/sitemap.xml`

## Testen

### Unit Tests

```bash
npm run test
```

Tests dekken:
- Component rendering
- Navigation links
- Data integriteit
- Utility functies

### E2E Tests

```bash
npm run test:e2e
```

Tests dekken:
- Homepage functionaliteit
- Navigatie flows
- Contact formulier
- Locatiepagina's
- Responsive design

## Performance

De website is geoptimaliseerd voor:
- **Lighthouse Performance:** ≥ 90
- **Lighthouse SEO:** ≥ 90
- **Core Web Vitals**
- **Image optimization**
- **Code splitting**

## Toegankelijkheid

- WCAG AA compliant
- Keyboard navigatie
- Screen reader support
- Semantic HTML
- ARIA labels

## Licentie

Proprietary - Enjoy Taxi

---

Gebouwd met Next.js, React, TypeScript en TailwindCSS.
