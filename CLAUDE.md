# Tour du Mont Blanc 2026 — Travel Assistant

Interactive web application for planning and performing the Tour du Mont Blanc (TMB), a 170 km trek across France, Italy, and Switzerland circling Western Europe's highest peak (4,810m).

## Project Overview

- **Purpose:** Personal trip planning tool for a summer 2026 TMB hike
- **Stack:** Vanilla HTML/CSS/JS — no build step, no frameworks, no server
- **Run:** Open `index.html` in any modern browser
- **External dependencies (CDN):**
  - Leaflet 1.9.4 — interactive map
  - OpenTopoMap tiles — topographic map layer
  - Google Fonts — Inter (body) + Playfair Display (headings)

## Deployment

- **GitHub Pages:** Auto-deploys via GitHub Actions on push to `master`
- **Workflow:** `.github/workflows/deploy.yml`
- **Live URL:** https://smidigbommen.github.io/tmb/

## File Structure

```
mount-blanc-2026/
├── CLAUDE.md              # This file — project docs for Claude Code
├── README.md              # GitHub project README
├── index.html             # Main page structure and all sections
├── styles.css             # Complete design system and responsive styles
├── app.js                 # All data, interactivity, and rendering logic
├── tmb-research-data.md   # Source research data (30+ sources, not used at runtime)
├── .github/workflows/
│   └── deploy.yml         # GitHub Pages deployment workflow
└── images/                # Refuge photos (800px wide, ~100-200KB each)
    ├── refuge-miage.jpg
    ├── refuge-nant-borrant.jpg
    ├── refuge-de-la-balme.jpg
    ├── refuge-croix-du-bonhomme.jpg
    ├── refuge-des-mottets.jpg
    ├── rifugio-elisabetta.jpg
    ├── cabane-du-combal.jpg
    ├── rifugio-maison-vieille.jpg
    ├── rifugio-bertone.jpg
    ├── rifugio-bonatti.jpg
    ├── rifugio-elena.jpg
    ├── alpage-de-la-peule.jpg
    ├── refuge-le-peuty.jpg
    ├── refuge-col-de-balme.jpg
    ├── refuge-de-la-flegere.jpg
    ├── refuge-du-lac-blanc.jpg
    └── refuge-de-bellachat.jpg
```

### index.html

Page structure with seven sections:
1. **Hero** — Landing with route stats (170km, 10,000m elevation, 11 stages, 10-12 days)
2. **Interactive Map** (`#map-section`) — Leaflet map with route polyline, markers, legend
3. **Planner** (`#planner-section`) — Budget calculator, timing chart, route variants, country info, transport
4. **Stages** (`#stages-section`) — Elevation profile canvas + 11 stage cards (clickable → modal)
5. **Stays** (`#refuges-section`) — Tiered accommodation cards (campsites/refuges/hotels) with country filters and booking links (clickable → fly to map)
6. **Gear** (`#gear-section`) — Checklist with localStorage persistence and progress bar
7. **Safety** (`#safety-section`) — Emergency contacts, hazards, weather tips, mobile coverage

Also includes: sticky nav, stage detail modal, footer with external links.

### styles.css

Design system built on CSS custom properties:
- **Colors:** Navy/slate/stone palette with alpine-blue accent, country colors (France blue, Italy green, Swiss red)
- **Typography:** Inter for body, Playfair Display for headings
- **Components:** Cards, badges, buttons, filter pills, form controls, modal, progress bars
- **Responsive:** Breakpoints at 900px, 768px, 480px — grid layouts collapse to single column
- **Map:** Custom Leaflet popup styling and marker overrides

### app.js

All data is embedded as JS constants — no API calls, no fetching. Key sections:

- **`STAGES` array (11 items):** Each stage has `num`, `from`, `to`, `country`, `distance`, `elevGain`, `elevLoss`, `hours`, `difficulty`, `highPoint`, `landmarks[]`, `viewpoints[]`, `accommodations[]`, `notes`, `startElev`, `endElev`, optional `border`
- **`REFUGES` array (37 items):** Each entry has `name`, `altitude`, `capacity`, `price`, `country`, `stage`, `lat`, `lng`, `bookingUrl`, `image` (null for gradient fallback), `tier` (`'budget'`/`'mid'`/`'comfort'`), `notes`, `amenities[]`. 17 mid-tier refuges, 10 budget-tier campsites, 10 comfort-tier hotels.
- **`VARIANTS` array (8 items):** Route variant decision points with `stage`, `name`, `desc`, `highlight`
- **`GEAR` object:** 8 categories, ~40 items total
- **`ROUTE_COORDS` array:** 43 lat/lng pairs tracing the TMB route for the Leaflet polyline
- **`MAP_POINTS` array:** 25 points of interest (towns, passes, refuges, Mont Blanc summit)

Key functions:
- `initMap()` — Creates Leaflet map, route polyline, markers with popups (including booking links for refuges), border crossing labels. Stores map instance in `mapInstance` and markers in `mapMarkers` dict.
- `drawElevationProfile()` — Renders canvas elevation profile with bezier curves, country-colored stage labels, altitude grid
- `renderStages()` — Builds stage cards with click → `openStageModal()`
- `renderRefuges()` — Builds accommodation cards filtered by `currentTier` and `currentCountry`. Cards have "Book now" link (opens booking URL) and "View on map" (calls `flyToRefuge()`)
- `setTier(tier)` — Updates active tier filter and re-renders accommodations
- `updateAccommodationHeader()` — Updates section title/subtitle based on active tier
- `flyToRefuge(name)` — Scrolls to map, flies to refuge coordinates, opens popup with booking link
- `updateBudget()` — Calculates cost breakdown from style/days/hikers inputs
- `renderTimingChart()` — Horizontal bar chart for June-September conditions
- `renderVariants()` — Toggleable variant cards
- `renderGear()` — Checklist with localStorage persistence, progress tracking

Global state:
- `mapInstance` — Leaflet map reference (used by `flyToRefuge`)
- `mapMarkers` — Object keyed by point name → Leaflet marker (used to open existing popups)
- `currentTier` — Active accommodation tier filter (`'budget'`/`'mid'`/`'comfort'`/`'all'`), default `'mid'`
- `currentCountry` — Active country filter (`'all'`/`'France'`/`'Italy'`/`'Switzerland'`), default `'all'`
- `TIER_CONFIG` — Title/subtitle/priceLabel per tier
- `BUDGET_TO_TIER` — Maps budget style dropdown values to accommodation tiers
- Gear checklist state stored in `localStorage` key `tmb-gear`

### tmb-research-data.md

Comprehensive research document (not loaded at runtime). Contains:
- Full stage-by-stage breakdown with tables
- Complete refuge directory with 2025 pricing
- Practical planning info (weather, fitness, permits, transport, budgets)
- Route variants and decision points
- Safety info and emergency contacts
- Three-country border/currency/language info
- GPS coordinates for app data
- 30+ cited web sources

## Design Decisions

- **No build step:** Single HTML file loads CSS and JS directly. Easy to share, host, or open locally.
- **Embedded data:** All TMB data lives in `app.js` as constants. No API keys, no backend. This makes the app fully offline-capable once loaded.
- **Leaflet + OpenTopoMap:** Free, open-source, no API key needed. Topo tiles are ideal for a hiking app.
- **localStorage for gear:** Checklist state persists across sessions without needing a backend.
- **Country color-coding:** France (#002395), Italy (#008C45), Switzerland (#D52B1E) used consistently across stage badges, elevation profile labels, and refuge filters.
- **Tier color-coding:** Budget/campsites (meadow green), mid/refuges (orange, existing), comfort/hotels (gold #d4a017). Used for card accents and fallback image gradients.
- **Budget → accommodations sync:** Changing the travel style dropdown in the budget calculator automatically updates the accommodation tier filter.

## Adding Data

To add a new accommodation, add an entry to the `REFUGES` array in `app.js` with all fields including `tier` (`'budget'`, `'mid'`, or `'comfort'`). Set `image: null` for entries without a photo — they'll display a color-coded gradient fallback. If you want it to appear as a marker on the map, also add it to `MAP_POINTS` with the appropriate `type`.

To modify stage data, update the corresponding entry in the `STAGES` array. The elevation profile, stage cards, and modal all render from this single source.

## Key Interactions

- **Budget style dropdown** → Changes travel style and automatically updates accommodation tier filter
- **Tier filters** → Switch between Campsites / Refuges / Hotels / All Types
- **Country filters** → Filter accommodations by France / Italy / Switzerland / All (works within active tier)
- **Accommodation cards** → Click flies map to location and opens popup; "Book now" opens external booking site
- **Stage cards** → Click opens detail modal with landmarks, viewpoints, accommodations, tips
- **Variant cards** → Click to toggle selected state (visual only)
- **Gear items** → Click to check/uncheck, persisted to localStorage
- **Map markers** → Click opens popup with info; refuge markers include booking link
