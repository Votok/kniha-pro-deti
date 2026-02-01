# CLAUDE.md

Static website for children's books by Pavlína Jurková and Jarmila Vlčková. Built with Eleventy, Bootstrap 5, and Nunjucks templates. Czech language content.

**Tech:** Eleventy 3.1.2, Bootstrap 5.3.3, Nunjucks, CSSO minification

## Commands

```bash
npm install           # Install dependencies
npm run dev           # Dev server at http://localhost:8080
npm run build         # Build to _site/
npm start             # Production build + serve
```

## Architecture

**Directory Structure:**
```
src/
├── _data/           # JSON: books, authors, galleries, media, navigation, site
├── _includes/       # Nunjucks templates
│   ├── layouts/     # base.njk, book.njk, page.njk
│   └── components/  # header, footer, cards, schema
├── assets/
│   ├── css/         # style.css (Bootstrap 5 + custom)
│   ├── js/          # main.js (vanilla JS only)
│   ├── images/      # → copies to /images/ in build
│   └── svg/
└── *.html|.njk      # Page templates
```

**Data Files** (`src/_data/`):
- `books.json` - Complete book database (metadata, excerpts, testimonials, buy links)
- `authors.json`, `galleries.json`, `media.json`, `navigation.json`, `site.json`

**Dynamic Pages:** Books auto-generate via Eleventy pagination → `/knihy/{slug}/`

**Images:** Source in `src/assets/images/`, build copies to `/images/` (not `/assets/images/`) for CSS `../images/` refs.

**CSS:** Bootstrap 5 base + custom (`#7c8743` buttons, `rgba(202,109,27,0.85)` navbar, Open Sans font). Minified via CSSO.

**JS:** `main.js` only - smooth scroll, GLightbox galleries, active nav, lazy load fade-in. No jQuery.

## Content Management

**Add a Book:**
1. Add entry to `src/_data/books.json`:
   - Required: `id`, `title`, `slug`, `summary`, `description`, `ageGroup`, `year`, `publisher`, `authors`, `buyLinks`, `cover`
   - Optional: `excerpts`, `testimonials`, `gallery`, `awards`
2. Place cover in `src/assets/images/hero/`
3. Build auto-generates `/knihy/{slug}/`

**Modify Content:** Edit JSON files in `src/_data/`. All data globally available in templates.

## Eleventy Config

`.eleventy.js` (CommonJS, Czech comments):
- CSS bundling + CSSO minification
- Custom filters: `cacheBust`, `year`, `readFile`, `dateToRfc3339`
- Watch: CSS/JS for hot reload
- Passthrough: images → `/images/`, others → `/assets/{type}/`
- Template engine: `htmlTemplateEngine: "njk"`

## Gotchas

**Legacy Files:** Repository transitioning from archived site. Legacy JS files exist (`jquery.swipebox.min.js`, `smooth-scroll.js`, `odpocet.js`) but are NOT used. Only `main.js` is active.

**Design System:** `design-system/` folder contains markdown files to guide redesign from old site. Will be deleted after transition complete.

**Images Path:** Source uses `src/assets/images/`, build outputs to `/images/` (not `/assets/images/`) to support CSS relative paths.

**Language:** Czech language content - respect existing text when editing.

**Templates:** Nunjucks syntax (`{% %}`, `{{ }}`). Bootstrap 5 classes preferred over custom CSS.
