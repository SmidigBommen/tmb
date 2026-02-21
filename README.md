# Tour du Mont Blanc 2026 — Travel Assistant

Interactive web application for planning and performing the **Tour du Mont Blanc (TMB)**, a 170 km trek across France, Italy, and Switzerland circling Western Europe's highest peak (4,810m).

## Features

- **Interactive Map** — Leaflet-powered topographic map with route polyline, stage markers, refuge locations, and border crossings
- **Trip Planner** — Budget calculator by travel style, best-time-to-go chart, route variant selector, country info, and transport options
- **11 Stage Breakdown** — Elevation profile canvas and detailed stage cards with distance, elevation, difficulty, landmarks, and tips
- **Budget-Aware Accommodations** — 37 places to stay filtered by tier (campsites, mountain refuges, hotels) and country, synced with your budget selection
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

```bash
git clone git@github.com:SmidigBommen/tmb.git
cd tmb
open index.html
```

Or simply open `index.html` in any modern browser.

## Project Structure

```
tmb/
├── index.html             # Page structure — 7 sections + modal
├── styles.css             # Design system with CSS custom properties
├── app.js                 # All data, interactivity, and rendering
├── tmb-research-data.md   # Source research (30+ sources, not used at runtime)
└── images/                # Refuge photos (800px wide, ~100-200KB each)
```

## Screenshots

Open `index.html` to explore the full interactive experience including:

- Topographic route map with clickable markers
- Elevation profile with country-colored stage labels
- Accommodation cards with booking links and map fly-to
- Budget calculator that updates accommodation recommendations

## License

Personal project for trip planning. Trail data sourced from public information — always verify with official sources before your trek.
