# GitHub Repository Metadata
## Copy-paste reference for setting up the KEMET public repo

---

## Repository Name

```
kemet
```

---

## Short Description
*(Goes in the "About" field — 1 line, shown on your profile and in search results)*

```
An interactive encyclopedia of Ancient Egyptian history. Six thousand years of dynasties, pharaohs, and artifacts — built with Next.js, Tailwind, and Framer Motion.
```

---

## Website Field
*(Once deployed to Vercel)*

```
https://kemet.vercel.app
```

---

## Topics / Tags
*(Add these under "Topics" in the repo settings — improves discoverability)*

```
nextjs
typescript
tailwindcss
framer-motion
ancient-egypt
history
educational
open-source
dark-mode
interactive-timeline
egyptology
web-application
zustand
react
premium-ui
```

---

## Social Preview (Open Graph Image)

Place your banner image at:
```
public/assets/og-banner.png
```
Recommended dimensions: **1280 × 640px**
Content: The KEMET wordmark centered on a dark background with a gold cartouche decoration.
GitHub will use this as the repo's social card when shared on Twitter/X, LinkedIn, etc.

---

## Repository Settings Checklist

In **Settings → General**:
- [x] Public repository
- [x] Add a README (already done)
- [ ] Disable Wikis (using /docs folder instead)
- [x] Allow Issues
- [x] Allow Discussions (for community questions)
- [ ] Disable Projects (unless you want to use GitHub Projects for the roadmap)

In **Settings → Pages** (optional, if you want a GitHub Pages preview):
- Source: Deploy from branch `main` / `docs` — OR use Vercel instead (recommended)

---

## Recommended Branch Protection (Settings → Branches)

Add a rule for `main`:
- [x] Require a pull request before merging
- [x] Require status checks to pass (lint, typecheck)
- [x] Do not allow bypassing the above settings

---

## Issue Labels to Create

| Label | Color | Description |
|---|---|---|
| `content` | `#C9943A` | Adding or improving historical content |
| `bug` | `#B91C1C` | Something isn't working |
| `enhancement` | `#1D4ED8` | New feature or improvement |
| `accuracy` | `#7C3AED` | Historical accuracy correction |
| `accessibility` | `#065F46` | Accessibility improvement |
| `design` | `#B87C4A` | Visual or UX change |
| `good first issue` | `#166534` | Suitable for first-time contributors |
| `help wanted` | `#92400E` | Extra attention needed |
| `documentation` | `#374151` | Documentation only |
| `wontfix` | `#6B7280` | Will not be worked on |

---

## .gitignore additions
*(Standard Next.js .gitignore already covers most of this, but double-check)*

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem
.env
.env*.local
.env.production

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## README Badge Reference
*(Swap YOUR_USERNAME for your actual GitHub handle in the README)*

```
https://github.com/YOUR_USERNAME/kemet
```

---

*This file is for setup reference only — do not commit it to the repository.*
