# Contributing to KEMET

First — thank you. KEMET is a passion project built in public, and every contribution,
whether it's a typo fix or a full pharaoh profile, makes the project more complete.

---

## Before You Start

- Check the [open issues](https://github.com/YOUR_USERNAME/kemet/issues) to avoid duplicates
- For large changes (new sections, major redesigns), open an issue first to align before building
- Read the [Content Voice Guide](./docs/content-voice.md) before writing any copy

---

## Ways to Contribute

### Content
- Add or improve pharaoh biographies
- Correct historical inaccuracies (please cite your source)
- Add artifact metadata to the data files
- Improve Arabic translations or transliterations

### Code
- Bug fixes — always welcome, no discussion needed
- New components or features — open an issue first
- Performance improvements
- Accessibility improvements
- Test coverage

### Design
- Spot inconsistencies in the design system
- Propose improvements to the mobile experience
- Improve animation timing or easing

---

## Development Setup

```bash
git clone https://github.com/YOUR_USERNAME/kemet.git
cd kemet
npm install
npm run dev
```

---

## Branch Naming

```
feat/short-description        # New feature
fix/short-description         # Bug fix
content/pharaoh-name          # Adding or improving content
docs/short-description        # Documentation changes
chore/short-description       # Tooling, config, deps
```

---

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat: add profile for Senusret III
fix: correct reign dates for Pepi II
content: expand Hatshepsut biography — rise to power section
docs: update contributing guide
chore: upgrade framer-motion to 11.x
```

---

## Pull Request Guidelines

- Keep PRs focused — one concern per PR
- Include a short description of what changed and why
- If adding content, cite your historical sources in the PR description
- Screenshots or screen recordings for any visual changes
- All new code must pass `npm run lint` and `npm run typecheck`

---

## Historical Accuracy Standard

KEMET takes accuracy seriously. When contributing content:

- Prefer primary sources and peer-reviewed Egyptology scholarship
- For disputed dates or facts, note the uncertainty in the copy ("circa" / "estimated")
- Do not present speculation as established fact
- When in doubt, link to a source in your PR description

Suggested references:
- *The Oxford History of Ancient Egypt* — Ian Shaw (ed.)
- *A History of Ancient Egypt* — Nicolas Grimal
- *The Rise and Fall of Ancient Egypt* — Toby Wilkinson
- Egyptian Museum Cairo digital collections
- Metropolitan Museum Open Access Program

---

## Code Style

- TypeScript strict mode — no `any`, no `@ts-ignore` without a comment explaining why
- Tailwind utility classes only — no inline `style` props except for dynamic values
- Framer Motion for all animations — no raw CSS transitions on interactive elements
- All components must have a JSDoc comment describing their purpose and props
- File names: PascalCase for components, camelCase for utilities and data files

---

## Questions?

Open a [Discussion](https://github.com/YOUR_USERNAME/kemet/discussions) — not an issue —
for questions, ideas, or anything that isn't a bug or a concrete feature request.

---

*Thank you for helping build something worthy of the history it tells.*
