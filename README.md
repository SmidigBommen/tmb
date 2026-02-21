# Tour du Mont Blanc 2026 — Travel Assistant

Interactive web application for planning and performing the **Tour du Mont Blanc (TMB)**, a 170 km trek across France, Italy, and Switzerland circling Western Europe's highest peak (4,810m).

**Live site:** [smidigbommen.github.io/tmb](https://smidigbommen.github.io/tmb/)

## Features

- **Interactive Map** — Leaflet-powered topographic map with route polyline, stage markers, refuge locations, and border crossings
- **Trip Planner** — Budget calculator by travel style, best-time-to-go chart, route variant selector, country info, and transport options
- **11 Stage Breakdown** — Elevation profile canvas and detailed stage cards with distance, elevation, difficulty, landmarks, and tips
- **Budget-Aware Accommodations** — 37 places to stay filtered by tier (campsites, mountain refuges, hotels) and country — synced with your budget selection
- **Gear Checklist** — Persistent packing list with localStorage, organized by category with progress tracking
- **Safety Info** — Emergency contacts for all three countries, common hazards, weather tips, and mobile coverage notes

## Tech Stack

Vanilla HTML/CSS/JS — no build step, no frameworks, no server.

| Dependency | Purpose |
|---|---|
| [Leaflet 1.9.4](https://leafletjs.com/) | Interactive map |
| [OpenTopoMap](https://opentopomap.org/) | Topographic map tiles |
| [Google Fonts](https://fonts.google.com/) | Inter + Playfair Display |

All trek data is embedded directly in `app.js` — no API keys, no backend, fully offline-capable once loaded.

## Getting Started

### View online

Visit [smidigbommen.github.io/tmb](https://smidigbommen.github.io/tmb/)

### Run locally

```bash
git clone git@github.com:SmidigBommen/tmb.git
cd tmb
open index.html
```

No install or build step required — just open `index.html` in any modern browser.

## Deployment

The site deploys automatically to GitHub Pages via a GitHub Actions workflow on every push to `master`. See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To enable: go to **Settings → Pages → Source** and select **GitHub Actions**.

## Project Structure

```
tmb/
├── index.html             # Page structure — 7 sections + modal
├── styles.css             # Design system with CSS custom properties
├── app.js                 # All data, interactivity, and rendering
├── tmb-research-data.md   # Source research (30+ sources, not used at runtime)
├── images/                # Refuge photos (800px wide, ~100-200KB each)
└── .github/workflows/
    └── deploy.yml         # GitHub Pages deployment
```

## Page Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Landing with route stats (170km, 10,000m elevation, 11 stages) |
| 2 | **Map** | Interactive Leaflet map with route, markers, and popups |
| 3 | **Planner** | Budget calculator, timing chart, route variants, country info, transport |
| 4 | **Stages** | Elevation profile + 11 stage cards with detail modals |
| 5 | **Stays** | 37 accommodations filtered by tier and country |
| 6 | **Gear** | Checklist with localStorage persistence and progress bar |
| 7 | **Safety** | Emergency contacts, hazards, weather, mobile coverage |

## Key Interactions

- **Budget style** → Changing travel style (camping/refuges/hotels/guided) automatically updates the accommodation filter
- **Tier filters** → Switch between campsites, refuges, hotels, or view all
- **Country filters** → Filter accommodations by France, Italy, or Switzerland
- **Accommodation cards** → Click to fly the map to that location; "Book now" opens the booking site
- **Stage cards** → Click to open detail modal with landmarks, viewpoints, and tips
- **Gear items** → Click to check/uncheck, persisted across sessions
- **Map markers** → Click for info popup; refuge markers include booking links

## Adding Data

To add a new accommodation, add an entry to the `REFUGES` array in `app.js` with all fields including `tier` (`'budget'`, `'mid'`, or `'comfort'`). Set `image: null` for entries without a photo — they'll display a color-coded gradient fallback.

To add a map marker, also add the entry to `MAP_POINTS` with the appropriate `type`.

To modify stage data, update the corresponding entry in the `STAGES` array. The elevation profile, stage cards, and modal all render from this single source.

## License

Personal project for trip planning. Trail data sourced from public information — always verify with official sources before your trek.
