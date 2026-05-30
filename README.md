<div align="center">

<br />

```
██╗  ██╗███████╗███╗   ███╗███████╗████████╗
██║ ██╔╝██╔════╝████╗ ████║██╔════╝╚══██╔══╝
█████╔╝ █████╗  ██╔████╔██║█████╗     ██║
██╔═██╗ ██╔══╝  ██║╚██╔╝██║██╔══╝     ██║
██║  ██╗███████╗██║ ╚═╝ ██║███████╗   ██║
╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝   ╚═╝
```

**كيمت — الأرض السوداء**

_A premium, interactive encyclopedia of Ancient Egyptian history._

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer)](https://framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-C9943A?style=flat-square)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-In_Development-bronze?style=flat-square&color=B87C4A)]()

<br />

![KEMET Banner](./public/assets/og-banner.png)

<br />

</div>

---

## What is KEMET?

**KEMET** (from the ancient Egyptian _kmt_ — "the black land") is a premium, open-source educational web application dedicated to the full breadth of Ancient Egyptian history. It spans six thousand years of civilization — from the Predynastic farmers of the Nile Delta to Cleopatra, the last queen of an ancient world.

This is not a Wikipedia mirror. KEMET is built around a single conviction: **history should feel alive**. Every pharaoh has a profile. Every dynasty has a story. Every artifact has a frame worthy of its age.

The project is cinematic in design, editorial in voice, and obsessive in detail.

---

## Features

- **Interactive Timeline** — A scroll-driven horizontal rail spanning 6,000 years. Scrub through eras, filter by kingdom, and click into any dynasty or ruler seamlessly.
- **Dynasty Browser** — A full carousel of all 30+ dynasties, organized by kingdom, with key facts and navigable links.
- **Pharaoh Profiles** — Deep-dive pages for every major ruler: biography, reign stats, monuments, cartouche display, artifact gallery, and family relations.
- **Artifact Gallery** — A curated, filterable visual archive of statues, reliefs, tomb paintings, jewelry, and monuments.
- **Dark Luxury Design** — A custom design system built on deep blacks, aged gold, and bronze — no UI kits, no templates.
- **Cinematic Animations** — Scroll-triggered reveals, fluid page transitions, and purposeful micro-interactions via Framer Motion.
- **Fully Responsive** — Designed for desktop, refined for tablet and mobile.
- **Accessible** — WCAG AA compliant, keyboard-navigable, and screen-reader friendly throughout.

---

## Coverage

| Period                  | Arabic              | Dates            |
| ----------------------- | ------------------- | ---------------- |
| Predynastic             | عصر ما قبل الأسرات  | c. 6000–3150 BCE |
| Early Dynastic (I–II)   | عصر الأسرات المبكرة | c. 3150–2686 BCE |
| Old Kingdom (III–VI)    | الدولة القديمة      | c. 2686–2181 BCE |
| First Intermediate      | عصر الانتقال الأول  | c. 2181–2055 BCE |
| Middle Kingdom (XI–XII) | الدولة الوسطى       | c. 2055–1650 BCE |
| Second Intermediate     | عصر الانتقال الثاني | c. 1650–1550 BCE |
| New Kingdom (XVIII–XX)  | الدولة الحديثة      | c. 1550–1069 BCE |
| Third Intermediate      | عصر الانتقال الثالث | c. 1069–664 BCE  |
| Late Period (XXVI–XXXI) | العصر المتأخر       | c. 664–332 BCE   |
| Ptolemaic               | العصر البطلمي       | 332–30 BCE       |

---

## Tech Stack

| Layer      | Technology                                                           |
| ---------- | -------------------------------------------------------------------- |
| Framework  | [Next.js 14+](https://nextjs.org) (App Router)                       |
| Language   | [TypeScript](https://typescriptlang.org) (strict)                    |
| Styling    | [Tailwind CSS v3](https://tailwindcss.com) with custom design tokens |
| Animation  | [Framer Motion](https://framer.com/motion)                           |
| State      | [Zustand](https://zustand-demo.pmnd.rs)                              |
| Icons      | [Lucide React](https://lucide.dev)                                   |
| Fonts      | Cormorant Garamond · Cormorant SC · Source Serif 4                   |
| Images     | `next/image`                                                         |
| Deployment | [Vercel](https://vercel.com)                                         |

---

## Getting Started

### Prerequisites

- Node.js `18.17.0` or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/abdohosnie/kemet.git
cd kemet

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
kemet/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout, font setup
│   ├── page.tsx                # Landing / Hero
│   ├── timeline/               # Interactive timeline view
│   ├── era/[slug]/             # Era landing pages
│   ├── dynasty/[slug]/         # Dynasty detail pages
│   ├── pharaoh/[slug]/         # Pharaoh profile pages
│   └── gallery/                # Artifact gallery
├── components/
│   ├── layout/                 # Header, Footer, PageTransition
│   ├── timeline/               # TimelineRail, TimelineEra, TimelineMarker
│   ├── dynasty/                # DynastyCarousel, DynastyCard
│   ├── pharaoh/                # PharaohHero, PharaohStats, PharaohGallery
│   └── ui/                     # Shared primitives: GoldDivider, EraChip, etc.
├── data/
│   ├── eras.ts                 # All historical periods
│   ├── dynasties/              # One file per dynasty
│   └── pharaohs/               # One file per pharaoh
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   ├── animations.ts           # Shared Framer Motion variants
│   ├── store.ts                # Zustand global store
│   └── utils.ts                # Date formatting, slug helpers
└── styles/
    ├── globals.css             # CSS custom properties, base styles
    └── animations.css          # Keyframes
```

---

## Design System

KEMET uses a fully custom design system — no external UI libraries.

### Color Palette

| Token                  | Hex       | Usage                 |
| ---------------------- | --------- | --------------------- |
| `--color-void`         | `#080706` | Body background       |
| `--color-tomb`         | `#0E0C0A` | Primary surface       |
| `--color-chamber`      | `#141210` | Elevated cards        |
| `--color-gold-true`    | `#C9943A` | Primary accent, links |
| `--color-gold-pale`    | `#F5E6C8` | Body text             |
| `--color-gold-mist`    | `#D4AF6A` | Secondary text        |
| `--color-bronze-light` | `#B87C4A` | Tags, badges          |

### Typography

| Font               | Role                                             |
| ------------------ | ------------------------------------------------ |
| Cormorant Garamond | All headings and display text                    |
| Cormorant SC       | Small-caps labels, dynasty identifiers, metadata |
| Source Serif 4     | All body copy and narrative text                 |

---

## Contributing

Contributions are welcome — whether that's adding a pharaoh profile, fixing a historical inaccuracy, improving animations, or refining the design.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

```bash
# Create a feature branch
git checkout -b feature/add-pharaoh-senusret-iii

# Make your changes, then commit
git commit -m "feat: add full profile for Senusret III"

# Push and open a PR
git push origin feature/add-pharaoh-senusret-iii
```

### What we especially need help with

- [ ] Pharaoh biography copy (see the [Content Voice Guide](./docs/content-voice.md))
- [ ] Historical accuracy review for existing content
- [ ] Additional artifact image metadata
- [ ] Arabic language support / RTL layout
- [ ] Accessibility audit passes
- [ ] Unit and integration tests

---

## Roadmap

- [x] Project architecture and design system
- [x] Interactive timeline component
- [x] Dynasty browser and carousel
- [ ] All 17 priority pharaoh profiles
- [ ] Full artifact gallery with filtering
- [ ] Cartouche display component with hieroglyphs
- [ ] Search functionality across all content
- [ ] Arabic (RTL) language support
- [ ] Mobile-optimized timeline experience
- [ ] Open Graph / social sharing cards per pharaoh

---

## Historical Accuracy

KEMET aims for the highest standard of historical accuracy while remaining accessible. Primary sources consulted include work by Egyptologists such as James Henry Breasted, Nicolas Grimal, Toby Wilkinson, and Joyce Tyldesley. Content is reviewed against the _Oxford History of Ancient Egypt_ and cross-referenced with the collections of the Egyptian Museum in Cairo, the British Museum, and the Louvre.

If you spot a factual error — a wrong reign date, a misattributed monument, an anachronism in the prose — please [open an issue](https://github.com/abdohosnie/kemet/issues) and flag it. History deserves precision.

---

## License

This project is licensed under the **MIT License** — see [LICENSE](./LICENSE) for details.

Image assets sourced from public domain collections (Wikimedia Commons, Metropolitan Museum Open Access Program) are attributed individually in [ATTRIBUTIONS.md](./ATTRIBUTIONS.md).

---

## Acknowledgements

Built with respect for the civilization that gave the world writing, mathematics, architecture, and medicine — long before any of us arrived.

> _"The monuments of man are mightier than his memories."_

---

<div align="center">

Made with obsession by [Hosnie](https://github.com/abdohosnie)

<br />

**كيمت — الأرض السوداء**

</div>
