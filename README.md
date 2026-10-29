# VIAJAR — Modern Tour Guidance & Travel Discovery Platform

VIAJAR is a modern, high-performance travel discovery platform built to assist independent travelers with exploring destinations, discovering curated travel styles, comparing grounded per-person travel budgets, and organizing custom itineraries without sponsored bias or inflated commercial quotes.

---

## 🌟 Key Features

1. **Intelligent Destination Discovery & Search**
   - Case-insensitive, multi-keyword search matching destinations, regions, categories, and attraction tags.
   - Synchronized URL query parameters (`?q=...&category=...&season=...&budget=...`) for shareable search states.

2. **Combined Multi-Factor Filtering**
   - **Travel Style Categories:** Mountain Escapes, Beach Holidays, Adventure Trips, Heritage & Culture, Nature & Wildlife, Romantic Getaways, Weekend Trips, Spiritual Journeys.
   - **Seasonal Travel Calendar:** Real-world climate recommendations across Summer (Mar–Jun), Monsoon (Jul–Sep), Autumn (Oct–Nov), and Winter (Dec–Feb).
   - **Transparent Budget Tiers:**
     - *Budget-Friendly:* Under ₹15,000 (~$180 per person for 4–5 days).
     - *Moderate:* ₹15,000 – ₹35,000 (~$180 – $420).
     - *Premium:* Above ₹35,000 (~$420+).
   - Active filter indicator chips with one-click dismiss and "Clear All" reset.

3. **In-Depth Destination Guides (`/destinations/:slug`)**
   - High-resolution hero imagery and climate overview.
   - Grounded cost breakdown across Accommodation, Food & Dining, Sightseeing, and Local Transit.
   - Key attractions and experiential highlights with category tags.
   - Practical field tips (e.g., Rohtang NGT permits, AMS acclimatization in Leh, prepaid SIM requirements in Kashmir).
   - Multi-modal transit guide covering access by Air, Rail, and Road.
   - Related destination recommendations.

4. **Saved Trips & Wishlist (`/saved`)**
   - Client-side persistence using `localStorage`.
   - Real-time aggregated budget calculation (minimum and maximum combined ground costs).
   - Dynamic navbar wishlist counter badge and toast notifications.

5. **Editorial Inspiration & Value Transparency**
   - Editorial articles on mountain retreats, royal Rajasthan, and coastal escapes.
   - Clear distinction between grounded independent estimates and commercial tour packages.
   - Fully validated Contact & Feedback form with accessible ARIA error feedback and demo submission states.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React 19 (TypeScript)
- **Routing:** React Router 7 (`react-router-dom`)
- **Styling:** Tailwind CSS v4 with custom serif/sans typographic pairings
- **Icons:** Lucide React
- **Animations:** CSS transitions & keyframe transforms
- **Build Tool:** Vite 8
- **Testing:** Node.js native test runner (`node:test`, `node:assert/strict`) via `npx --yes tsx --test`
- **End-to-End Verification:** Playwright CLI (Headless Chromium)

---

## 📂 Project Structure

```
├── .env.example                     # Sample environment configuration
├── index.html                       # HTML entry point with meta & typography links
├── metadata.json                    # AI Studio platform configuration
├── package.json                     # Dependencies and run scripts
├── tsconfig.json                    # TypeScript compiler configuration
├── vite.config.ts                   # Vite bundler configuration
├── src/
│   ├── main.tsx                     # React root mount
│   ├── App.tsx                      # App router, layout wrapper & providers
│   ├── index.css                    # Global typography & Tailwind 4 setup
│   ├── types/
│   │   └── destination.ts           # Data interfaces & filter state definitions
│   ├── data/
│   │   └── destinations.ts          # Curated dataset (Manali, Goa, Jaipur, etc.)
│   ├── utils/
│   │   ├── filterLogic.ts           # Pure filtering, sorting & budget math
│   │   └── filterLogic.test.ts      # Unit tests using node:test
│   ├── context/
│   │   └── FavoritesContext.tsx     # LocalStorage wishlist state & toast manager
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Responsive navigation with drawer & counter
│   │   │   └── Footer.tsx           # Footer with disclaimers & manifesto
│   │   ├── destination/
│   │   │   └── DestinationCard.tsx  # Reusable card with heart toggle & budget
│   │   ├── home/
│   │   │   ├── HeroSection.tsx      # High-impact hero with interactive search
│   │   │   ├── TravelStylesSection.tsx
│   │   │   ├── SeasonalSection.tsx  # Interactive season tabs
│   │   │   ├── BudgetDiscoverySection.tsx
│   │   │   ├── TravelInspirationSection.tsx
│   │   │   └── WhyWanderlySection.tsx
│   │   └── ui/
│   │       └── Toast.tsx            # Floating toast notification
│   └── pages/
│       ├── HomePage.tsx             # Curated landing page
│       ├── ExplorePage.tsx          # Dedicated multi-filter search directory
│       ├── DestinationDetailPage.tsx# Comprehensive destination profile
│       ├── SavedTripsPage.tsx       # Wishlist with aggregated budget
│       ├── AboutPage.tsx            # Mission & budget methodology
│       ├── ContactPage.tsx          # Accessible validated contact form
│       ├── NotFoundPage.tsx         # 404 error page
│       ├── PrivacyPage.tsx          # Privacy policy
│       └── TermsPage.tsx            # Terms of service & travel disclaimer
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

Start the local development server at `http://localhost:3000`:

```bash
npm run dev
```

### Running Unit Tests

Run the pure logic unit tests (filtering, sorting, budget aggregation):

```bash
npx --yes tsx --test src/utils/filterLogic.test.ts
```

### Production Build

Create an optimized static distribution in the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

Wanderly is designed as a zero-latency React SPA that can be deployed to any static host (Cloud Run, Vercel, Netlify, Cloudflare Pages, or AWS S3/CloudFront):

1. **Build Command:** `npm run build`
2. **Output Directory:** `dist`
3. **SPA Rewrite Fallback:** Configure all requests to route to `/index.html` so client-side routing (`/explore`, `/destinations/:slug`, `/saved`) functions without 404 errors.

---

## 📝 Disclaimers & Notes

- **Budget Estimates:** All monetary figures represent average independent ground travel estimates. Long-distance flights and train tickets are omitted as starting locations vary.
- **Climate Suitability:** Seasonal guidelines represent historical regional weather patterns; travelers must always check official advisories and real-time forecast updates prior to transit.
- **Contact Submissions:** In this preview deployment, form submissions are validated client-side; production integration requires connecting an SMTP or serverless email webhook.
