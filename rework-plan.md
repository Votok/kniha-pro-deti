# 🔄 Rework Plan: knihaprodeti.cz

> **Cíl:** Migrovat statický HTML web na Eleventy (11ty) s kompletním technickým upgradem všech závislostí.
>
> **Referenční projekt:** [divadlo-laryfary](https://github.com/Votok/divadlo-laryfary) (stejná architektura)

---

## Project Overview (pro AI nástroje)

### Stack / Generator

- Statický web postavený na **Eleventy (11ty) v3.x**.
- Šablony v **Nunjucks** (`.njk`).
- **Bootstrap 5.3** (bez jQuery dependency).
- **GLightbox** místo Swipebox (moderní lightbox).
- Zdrojový obsah v `src/`, výstup generován do `_site/`.

### Technický upgrade summary

| Komponenta       | Aktuální verze | Nová verze          | Breaking changes        |
| ---------------- | -------------- | ------------------- | ----------------------- |
| Bootstrap        | 4.0.0 (2018)   | 5.3.3 (2024)        | ✅ Ano - viz níže       |
| jQuery           | 3.2.1 (2017)   | ❌ Odstraněno       | Bootstrap 5 nepotřebuje |
| Popper.js        | 1.12.9 (2017)  | Součást Bootstrap 5 | Automaticky             |
| Swipebox         | Starý          | GLightbox 3.3       | Nová syntaxe            |
| Google Fonts API | v1             | v2 (display=swap)   | Lepší výkon             |

### Folder Map (cílová struktura)

```
kniha-pro-deti/
├── src/                          # SOURCE OF TRUTH
│   ├── _data/
│   │   ├── site.json             # Globální konfigurace webu
│   │   ├── books.json            # VŠECHNY knihy v jednom poli
│   │   ├── authors.json          # Data o autorech/ilustrátorech
│   │   └── navigation.json       # Navigační menu
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk          # Základní HTML struktura
│   │   │   ├── page.njk          # Layout pro běžné stránky
│   │   │   └── book.njk          # Layout pro detail knihy (používá pagination)
│   │   └── components/
│   │       ├── header.njk        # Navigace (Bootstrap 5)
│   │       ├── footer.njk        # Patička
│   │       ├── book-card.njk     # Karta knihy (pro listing)
│   │       ├── author-card.njk   # Karta autora
│   │       └── schema-book.njk   # Schema.org JSON-LD pro knihy
│   ├── css/
│   │   └── style.css             # NOVÉ styly pro BS5 (cache-busted)
│   ├── images/                   # Obrázky (JPG, responsive)
│   ├── js/
│   │   └── main.js               # Vanilla JS (smooth scroll, lightbox)
│   ├── svg/
│   ├── books.njk                 # Generuje všechny stránky knih z books.json
│   ├── index.njk
│   ├── nase-knihy.njk
│   ├── autori-knihy.njk
│   ├── galerie.njk
│   ├── media.njk
│   ├── robots.txt
│   ├── sitemap.njk               # Dynamická sitemap
│   └── site.webmanifest
├── _site/                        # GENERATED OUTPUT (ignored by git)
├── assets/                       # CURRENT - will be migrated to src/
│   ├── css/
│   │   ├── custom20250625.css    # Aktuální CSS (source pro nový style.css)
│   │   └── swipebox.min.css      # Bude odstraněno (GLightbox replacement)
│   ├── images/                   # → src/images/
│   ├── img/                      # Swipebox assets - BUDE ODSTRANĚNO
│   ├── js/
│   │   ├── smooth-scroll.js      # Port to vanilla JS
│   │   ├── odpocet.js            # ODSTRANIT (unused)
│   │   └── jquery.swipebox.min.js # ODSTRANIT
│   └── svg/                      # → src/svg/
├── archive/                      # Staré HTML soubory po migraci
├── .eleventy.js
├── package.json
├── .gitignore
└── README.md
```

### Mental Model

- **Přístup:** Incremental migration - stavíme Eleventy projekt vedle současného webu
- **Data-driven:** Knihy generujeme dynamicky z `books.json` pomocí Eleventy pagination
- **Assets:** Zachováváme `assets/` strukturu, Eleventy kopíruje do `_site/assets/`
- **URL kontinuita:** Všechny URL zachovávají `.html` přípony (SEO)
- Editovat **pouze** soubory v `src/` po migraci
- `archive/` obsahuje staré HTML soubory pro referenci

---

## 📋 Fáze 0: Příprava (před migrací)

### 0.1 Archivace nepoužívaných HTML stránek

| Soubor                | Důvod                        | Akce            |
| --------------------- | ---------------------------- | --------------- |
| `autorky-knihy.html`  | Duplikát, chybí Petr Korunka | 📁 → `archive/` |
| `koupit-knihu.html`   | Zastaralá z 2019, jiné menu  | 📁 → `archive/` |
| `ukazky-z-knihy.html` | Zastaralá z 2019             | 📁 → `archive/` |

```bash
mkdir -p archive
mv autorky-knihy.html koupit-knihu.html ukazky-z-knihy.html archive/
```

### 0.2 ~~Okamžité opravy současného webu~~ → PŘESKOČENO

**Rozhodnutí:** Neopravujeme současné HTML soubory. Všechny opravy implementujeme přímo v Eleventy templates.

---

## 📦 Fáze 1: Inicializace Eleventy projektu

### 1.1 Package.json

```json
{
  "name": "kniha-pro-deti",
  "version": "2.0.0",
  "description": "Web pro dětské knihy od Pavlíny Jurkové a Jarmily Vlčkové",
  "type": "module",
  "scripts": {
    "dev": "eleventy --serve --watch",
    "build": "eleventy",
    "start": "eleventy --serve"
  },
  "dependencies": {
    "@11ty/eleventy": "^3.1.2"
  },
  "devDependencies": {
    "csso": "^5.0.5",
    "terser": "^5.37.0"
  }
}
```

### 1.2 Konfigurace `.eleventy.js`

```javascript
// .eleventy.js (ESM syntax pro Eleventy 3.x)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function (eleventyConfig) {
  // CSS minifikace
  eleventyConfig.addBundle("css", {
    transforms: [
      async function (content) {
        const csso = await import("csso");
        return csso.minify(content).css;
      },
    ],
  });

  // JS minifikace
  eleventyConfig.addBundle("js", {
    transforms: [
      async function (content) {
        const { minify } = await import("terser");
        const result = await minify(content);
        return result.code;
      },
    ],
  });

  // Cache-busting
  eleventyConfig.addFilter("cacheBust", () => Date.now());

  // Aktuální rok pro copyright
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Watch targets
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");

  // Passthrough copies - mapujeme src/ → _site/assets/ pro URL kontinuitu
  eleventyConfig.addPassthroughCopy({ "src/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/svg": "assets/svg" });

  // Favicons a static assets
  const staticFiles = [
    "favicon.ico",
    "apple-touch-icon.png",
    "favicon-32x32.png",
    "favicon-16x16.png",
    "safari-pinned-tab.svg",
    "android-chrome-192x192.png",
    "android-chrome-256x256.png",
    "browserconfig.xml",
    "site.webmanifest",
  ];

  staticFiles.forEach((f) => {
    const full = path.join(__dirname, "src", f);
    if (fs.existsSync(full)) {
      eleventyConfig.addPassthroughCopy({ [`src/${f}`]: f });
    }
  });

  return {
    pathPrefix: "",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
  };
}
```

### 1.3 Vytvoření `.gitignore`

```gitignore
# Dependencies
node_modules/

# Build output
_site/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Logs
*.log
npm-debug.log*
```

---

## 📊 Fáze 1.5: Extrakce dat a definice struktury

**KRITICKÁ FÁZE:** Před migrací šablon musíme manuálně extrahovat data ze současných HTML souborů.

### 1.5.1 Data schema pro books.json

Vytvoříme `src/_data/books.json` se VŠEMI knihami v jednom poli:

```json
[
  {
    "id": "eliska-andilek",
    "title": "Eliška andílek",
    "slug": "eliska-andilek",
    "subtitle": null,
    "summary": "Všichni říkají, že vypadám jako andílek. Žádný andílek ale nejsem...",
    "description": "Delší popis knihy pro detail stránky",
    "ageGroup": "Pro děti od 6 do 9 let",
    "year": 2018,
    "publisher": "Nakladatelství XYZ",
    "isbn": "978-80-XXXXX-XX-X",
    "pages": 120,
    "cover": "/assets/images/hero/eliska-andilek-900.jpg",
    "coverThumbnail": "/assets/images/thumbnails/eliska-andilek-thumb.jpg",
    "authors": {
      "text": ["Pavlína Jurková", "Jarmila Vlčková"],
      "illustrations": ["Petr Korunka"]
    },
    "buyLinks": [
      {
        "retailer": "Databáze knih",
        "url": "https://www.databazeknih.cz/...",
        "primary": true
      },
      {
        "retailer": "Kosmas",
        "url": "https://www.kosmas.cz/..."
      }
    ],
    "excerpts": [
      {
        "title": "Kapitola 1",
        "text": "Text ukázky..."
      }
    ],
    "testimonials": [
      {
        "quote": "Úžasná kniha!",
        "author": "Jan Novák",
        "source": "Recenze XYZ",
        "rating": 5
      }
    ],
    "gallery": [
      "/assets/images/gallery/eliska-andilek-01.jpg",
      "/assets/images/gallery/eliska-andilek-02.jpg"
    ],
    "featured": true,
    "publishedDate": "2018-09-15"
  },
  {
    "id": "viktor-a-zahadna-teta-bobina",
    "title": "Viktor a záhadná teta Bobina",
    ...
  }
]
```

### 1.5.2 Knihy k extrakci

Z analýzy současných HTML souborů máme tyto knihy:

| HTML soubor                           | ID pro books.json             | Status    |
| ------------------------------------- | ----------------------------- | --------- |
| `eliska-andilek.html`                 | `eliska-andilek`              | ✅ Aktivní |
| `eliska-detektiv.html`                | `eliska-detektiv`             | ✅ Aktivní |
| `eliska-rebelka.html`                 | `eliska-rebelka`              | ✅ Aktivní |
| `viktor-a-pripad-zmizeleho-psa.html`  | `viktor-a-pripad-zmizeleho-psa` | ✅ Aktivní |
| `viktor-a-zahadna-teta-bobina.html`   | `viktor-a-zahadna-teta-bobina` | ✅ Aktivní |
| `tajemstvi-rodiny-m.html`             | `tajemstvi-rodiny-m`          | ✅ Aktivní |
| `roza-a-ztraceny-tatinek.html`        | `roza-a-ztraceny-tatinek`     | ✅ Aktivní |
| `hra-o-sen.html`                      | `hra-o-sen`                   | ✅ Aktivní |

**Celkem: 8 knih**

### 1.5.3 Proces extrakce

Pro každou knihu:

1. **Otevřít HTML soubor** (např. `eliska-andilek.html`)
2. **Extrahovat metadata:**
   - `<title>` → `title`
   - `<meta name="description">` → `summary`
   - `<meta property="og:image">` → `cover`
   - Text v hero sekci → `description`
3. **Extrahovat strukturovaný obsah:**
   - Autoři z textu stránky
   - Odkaz na nákup → `buyLinks`
   - Ukázky z knihy (pokud existují) → `excerpts`
   - Recenze → `testimonials`
4. **Doplnit chybějící data:**
   - `ageGroup` - určit z obsahu
   - `year`, `publisher`, `isbn` - zjistit nebo zadat placeholder
5. **Přidat do `books.json`**

### 1.5.4 Další datové soubory

#### `src/_data/site.json`

```json
{
  "name": "Kniha pro děti",
  "title": "Kniha pro děti | čtěte a staňte se hrdinou našich příběhů",
  "description": "Čtou vaše děti? A čtete vy jim? Zábava i napětí, tajemství a nakonec rozuzlení. Naše knihy pro zvídavé děti, rodiče i prarodiče.",
  "url": "https://www.knihaprodeti.cz",
  "lang": "cs",
  "locale": "cs_CZ",
  "og": {
    "image": "/assets/images/hero/kniha-pro-deti-900.jpg"
  },
  "themeColor": "#ca6d1b"
}
```

#### `src/_data/navigation.json`

```json
{
  "main": [
    { "title": "Naše knihy", "url": "/nase-knihy.html" },
    { "title": "Autoři", "url": "/autori-knihy.html" },
    { "title": "Galerie", "url": "/galerie.html" },
    { "title": "Média", "url": "/media.html" }
  ]
}
```

#### `src/_data/authors.json`

```json
[
  {
    "id": "pavlina-jurkova",
    "name": "Pavlína Jurková",
    "role": "author",
    "bio": "Text o autorce...",
    "photo": "/assets/images/authors/pavlina-jurkova.jpg"
  },
  {
    "id": "jarmila-vlckova",
    "name": "Jarmila Vlčková",
    "role": "author",
    "bio": "Text o autorce...",
    "photo": "/assets/images/authors/jarmila-vlckova.jpg"
  },
  {
    "id": "petr-korunka",
    "name": "Petr Korunka",
    "role": "illustrator",
    "bio": "Text o ilustrátorovi...",
    "photo": "/assets/images/authors/petr-korunka.jpg"
  }
]
```

### 1.5.5 Checklist pro tuto fázi

- [ ] Vytvořit `src/_data/` strukturu
- [ ] Extrahovat data pro všech 8 knih do `books.json`
- [ ] Vytvořit `site.json`
- [ ] Vytvořit `navigation.json`
- [ ] Vytvořit `authors.json`
- [ ] Validovat JSON syntaxi
- [ ] Zkontrolovat, že všechny cesty k obrázkům existují

---

## 🎨 Fáze 2: Technický upgrade závislostí

### 2.1 Bootstrap 4 → Bootstrap 5.3 migrace

#### Breaking changes k řešení:

| Bootstrap 4        | Bootstrap 5.3     | Změna                      |
| ------------------ | ----------------- | -------------------------- |
| `data-toggle`      | `data-bs-toggle`  | Prefix `bs-`               |
| `data-target`      | `data-bs-target`  | Prefix `bs-`               |
| `ml-*`, `mr-*`     | `ms-*`, `me-*`    | Start/End místo Left/Right |
| `pl-*`, `pr-*`     | `ps-*`, `pe-*`    | Start/End místo Left/Right |
| `text-left`        | `text-start`      |                            |
| `text-right`       | `text-end`        |                            |
| `float-left`       | `float-start`     |                            |
| `float-right`      | `float-end`       |                            |
| `font-weight-bold` | `fw-bold`         | Zkrácené utility           |
| `font-italic`      | `fst-italic`      |                            |
| `sr-only`          | `visually-hidden` | Screen reader              |
| jQuery required    | Vanilla JS        | Žádná jQuery dependency    |

#### Nový `base.njk` s Bootstrap 5:

```njk
<!DOCTYPE html>
<html lang="{{ site.lang | default('cs') }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{{ title }} | {{ site.name }}</title>
  <meta name="description" content="{{ description | default(site.description) }}">

  <!-- Preconnect pro rychlejší načítání -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>

  <!-- Bootstrap 5.3 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous">

  <!-- Google Fonts (v2 API s display=swap) -->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">

  <!-- GLightbox CSS -->
  <link href="https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/css/glightbox.min.css" rel="stylesheet">

  <!-- Custom CSS (cache-busted automatically) -->
  <link href="/assets/css/style.css?v={{ "" | cacheBust }}" rel="stylesheet">
  {% block extraStyles %}{% endblock %}

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#ca6d1b">

  <!-- Canonical & OG -->
  <link rel="canonical" href="{{ site.url }}{{ page.url }}">
  <meta property="og:title" content="{{ title }} | {{ site.name }}">
  <meta property="og:description" content="{{ description | default(site.description) }}">
  <meta property="og:image" content="{{ site.url }}{{ ogImage | default(site.og.image) }}">
  <meta property="og:url" content="{{ site.url }}{{ page.url }}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="cs_CZ">

  {% block schemaOrg %}{% endblock %}
</head>

<body>
  {% include "components/header.njk" %}

  <main>
    {{ content | safe }}
  </main>

  {% include "components/footer.njk" %}

  <!-- Bootstrap 5.3 JS Bundle (includes Popper) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"></script>

  <!-- GLightbox JS -->
  <script src="https://cdn.jsdelivr.net/npm/glightbox@3.3.0/dist/js/glightbox.min.js"></script>

  <!-- Custom JS (cache-busted automatically, no Google Analytics) -->
  <script src="/assets/js/main.js?v={{ "" | cacheBust }}"></script>
  {% block extraScripts %}{% endblock %}
</body>
</html>
```

### 2.2 Header komponenta pro Bootstrap 5

```njk
{# src/_includes/components/header.njk #}
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{{ site.name }}</a>
      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mx-auto">
          {% for item in navigation.main %}
          <li class="nav-item me-md-1 me-lg-5">
            <a class="nav-link {{ 'active' if page.url == item.url }}"
               {% if page.url == item.url %}aria-current="page"{% endif %}
               href="{{ item.url }}">{{ item.title }}</a>
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </nav>
</header>
```

### 2.3 Vanilla JS (bez jQuery)

**Konsolidace:** Port `smooth-scroll.js` funkcionalitu + odstranění `odpocet.js` + Swipebox

```javascript
// src/js/main.js - Vanilla JS, NO jQuery, NO Google Analytics

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll pro anchor linky (nahrazuje smooth-scroll.js)
  // Moderní prohlížeče podporují nativní CSS scroll-behavior: smooth
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // GLightbox inicializace (nahrazuje Swipebox)
  if (typeof GLightbox !== "undefined") {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      closeButton: true,
      autoplayVideos: false,
    });
  }
});
```

**Soubory k odstranění:**
- `assets/js/jquery.swipebox.min.js` → nahrazeno GLightbox CDN
- `assets/js/odpocet.js` → nepoužíváno
- `assets/js/smooth-scroll.js` → portováno do main.js
- `assets/css/swipebox.min.css` → nahrazeno GLightbox CDN
- `assets/img/` → Swipebox assets, již nepotřeba

### 2.4 GLightbox místo Swipebox

#### Migrace v galerie.njk:

- Nahradit `class="swipebox"` → `class="glightbox"`
- Přidat `data-gallery="gallery-name"` pro seskupení
- Odstranit odkazy na Swipebox CSS/JS

---

## 📝 Fáze 2b: Migrace obsahu do šablon

**Klíčová fáze:** Převod HTML stránek na Nunjucks templates s využitím dat z Phase 1.5.

### 2b.1 Komponenty k vytvoření

#### `src/_includes/components/book-card.njk`

```njk
{# Karta knihy pro listing (nase-knihy.html) #}
<div class="col-md-6 col-lg-4 mb-4">
  <div class="card book-card h-100">
    <img src="{{ book.cover }}" class="card-img-top" alt="{{ book.title }}">
    <div class="card-body">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="text-muted">{{ book.ageGroup }}</p>
      <p class="card-text">{{ book.summary | truncate(100) }}</p>
      <a href="/{{ book.slug }}.html" class="btn btn-primary">Více informací</a>
    </div>
  </div>
</div>
```

#### `src/_includes/components/author-card.njk`

```njk
{# Karta autora pro autori-knihy.html #}
<div class="col-md-6 mb-4">
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="{{ author.photo }}" class="img-fluid rounded-start" alt="{{ author.name }}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ author.name }}</h5>
          <p class="card-text"><small class="text-muted">{{ author.role }}</small></p>
          <p class="card-text">{{ author.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### `src/_includes/components/schema-book.njk`

```njk
{# Schema.org JSON-LD pro detail knihy #}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "{{ book.title }}",
  "author": [
    {% for author in book.authors.text %}
    { "@type": "Person", "name": "{{ author }}" }{% if not loop.last %},{% endif %}
    {% endfor %}
  ],
  "illustrator": [
    {% for illustrator in book.authors.illustrations %}
    { "@type": "Person", "name": "{{ illustrator }}" }{% if not loop.last %},{% endif %}
    {% endfor %}
  ],
  "datePublished": "{{ book.publishedDate }}",
  "publisher": {
    "@type": "Organization",
    "name": "{{ book.publisher }}"
  },
  "bookFormat": "Hardcover",
  "inLanguage": "cs",
  "numberOfPages": {{ book.pages }},
  "image": "{{ site.url }}{{ book.cover }}",
  "isbn": "{{ book.isbn }}"
  {% if book.testimonials.length > 0 %},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ book.testimonials | avgRating }}",
    "reviewCount": {{ book.testimonials.length }}
  }
  {% endif %}
}
</script>
```

### 2b.2 Layout pro dynamické knihy

#### `src/books.njk`

```njk
---
pagination:
  data: books
  size: 1
  alias: book
permalink: "{{ book.slug }}.html"
layout: layouts/book.njk
---
```

#### `src/_includes/layouts/book.njk`

```njk
---
layout: layouts/base.njk
---

{% set title = book.title %}
{% set description = book.summary %}
{% set ogImage = book.cover %}

{% block schemaOrg %}
  {% include "components/schema-book.njk" %}
{% endblock %}

<div class="book-detail">
  <div class="hero" style="background-image: url('{{ book.cover }}');">
    <div class="container">
      <h1>{{ book.title }}</h1>
      {% if book.subtitle %}<p class="lead">{{ book.subtitle }}</p>{% endif %}
    </div>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <h2>O knize</h2>
        <p>{{ book.description }}</p>

        <p class="text-muted">{{ book.ageGroup }}</p>

        {% if book.excerpts %}
        <h3>Ukázky z knihy</h3>
        {% for excerpt in book.excerpts %}
        <div class="excerpt">
          <h4>{{ excerpt.title }}</h4>
          <p>{{ excerpt.text }}</p>
        </div>
        {% endfor %}
        {% endif %}

        {% if book.testimonials %}
        <h3>Recenze</h3>
        {% for testimonial in book.testimonials %}
        <blockquote class="blockquote">
          <p>{{ testimonial.quote }}</p>
          <footer class="blockquote-footer">{{ testimonial.author }}
            {% if testimonial.source %}, <cite>{{ testimonial.source }}</cite>{% endif %}
          </footer>
        </blockquote>
        {% endfor %}
        {% endif %}
      </div>

      <div class="col-md-4">
        <div class="card">
          <img src="{{ book.cover }}" class="card-img-top" alt="{{ book.title }}">
          <div class="card-body">
            <h5>Kde koupit</h5>
            {% for link in book.buyLinks %}
            <a href="{{ link.url }}" class="btn btn-primary btn-block mb-2" target="_blank" rel="noopener">
              {{ link.retailer }}
            </a>
            {% endfor %}

            <hr>
            <p><strong>Vydavatel:</strong> {{ book.publisher }}</p>
            <p><strong>Rok vydání:</strong> {{ book.year }}</p>
            <p><strong>ISBN:</strong> {{ book.isbn }}</p>
            <p><strong>Počet stran:</strong> {{ book.pages }}</p>
          </div>
        </div>
      </div>
    </div>

    {% if book.gallery %}
    <div class="row mt-5">
      <div class="col-12">
        <h3>Galerie</h3>
        <div class="gallery-grid">
          {% for image in book.gallery %}
          <a href="{{ image }}" class="glightbox" data-gallery="book-{{ book.id }}">
            <img src="{{ image }}" alt="Ilustrace z knihy {{ book.title }}" loading="lazy">
          </a>
          {% endfor %}
        </div>
      </div>
    </div>
    {% endif %}
  </div>
</div>
```

### 2b.3 Stránky k migraci

| HTML soubor          | Nový soubor       | Poznámka                                     |
| -------------------- | ----------------- | -------------------------------------------- |
| `index.html`         | `src/index.njk`   | Homepage                                     |
| `nase-knihy.html`    | `src/nase-knihy.njk` | Listing všech knih (iterace přes books.json) |
| `autori-knihy.html`  | `src/autori-knihy.njk` | Autoři (iterace přes authors.json)           |
| `galerie.html`       | `src/galerie.njk` | Galerie obrázků                              |
| `media.html`         | `src/media.njk`   | Média a recenze                              |
| 8× knihy HTML        | `src/books.njk`   | Generováno dynamicky z books.json            |

### 2b.4 Checklist

- [ ] Vytvořit všechny layouts (`base.njk`, `page.njk`, `book.njk`)
- [ ] Vytvořit komponenty (`header.njk`, `footer.njk`, `book-card.njk`, `author-card.njk`, `schema-book.njk`)
- [ ] Migrovat `index.html` → `index.njk`
- [ ] Migrovat `nase-knihy.html` → `nase-knihy.njk`
- [ ] Migrovat `autori-knihy.html` → `autori-knihy.njk`
- [ ] Migrovat `galerie.html` → `galerie.njk`
- [ ] Migrovat `media.html` → `media.njk`
- [ ] Nastavit pagination pro `books.njk`
- [ ] Test build: `npm run build`
- [ ] Porovnat výstup `_site/` s aktuálním webem

---

## 🎯 Fáze 2.5: UI/UX vylepšení (ODLOŽENO - Minimal Viable First)

**Rozhodnutí:** Implementujeme pouze základní styly potřebné pro funkční web. Pokročilé animace a efekty přidáme iterativně po spuštění.

- Migrovat `assets/css/custom20250625.css` do `src/css/style.css`
- Aktualizovat Bootstrap 4 CSS utility → Bootstrap 5 (ml-* → ms-*, sr-only → visually-hidden)
- Odstranit `!important` nadužívání
- Základní responsive design (existující styl zachovat)

### 2.5.2 Co přidat POZDĚJI (post-launch)

Všechny pokročilé vylepšení z původního plánu budou přidány iterativně:
- Fluid typography s `clamp()`
- Hover efekty na book cards
- Scroll-triggered fade-in animace
- CSS Grid galerie s overlay efekty
- Navbar blur efekt
- Ken Burns efekt na hero
- Pokročilé focus states

**Důvod odložení:** Priorita je funkční web s čistým kódem. Vizuální vylepšení přidáme po validaci základní funkcionality.

---

## 🔍 Fáze 3: SEO a technické opravy

### 3.1 Schema.org strukturovaná data ✅ DONE

**Již implementováno v Phase 2b:** `src/_includes/components/schema-book.njk` obsahuje kompletní Book schema včetně:
- Základní metadata (title, author, illustrator, publisher)
- ISBN, počet stran, jazyk
- Aggregate rating z testimonials (pokud existují)

### 3.2 Dynamická sitemap

#### `src/sitemap.njk`

```njk
---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>{{ site.url }}/</loc>
    <lastmod>{{ page.date | dateToRfc3339 }}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>{{ site.url }}/nase-knihy.html</loc>
    <lastmod>{{ page.date | dateToRfc3339 }}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>{{ site.url }}/autori-knihy.html</loc>
    <lastmod>{{ page.date | dateToRfc3339 }}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>{{ site.url }}/galerie.html</loc>
    <lastmod>{{ page.date | dateToRfc3339 }}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>{{ site.url }}/media.html</loc>
    <lastmod>{{ page.date | dateToRfc3339 }}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  {% for book in books %}
  <url>
    <loc>{{ site.url }}/{{ book.slug }}.html</loc>
    <lastmod>{{ book.publishedDate | dateToRfc3339 }}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  {% endfor %}
</urlset>
```

### 3.3 Robots.txt

#### `src/robots.txt`

```
User-agent: *
Disallow:

Sitemap: https://www.knihaprodeti.cz/sitemap.xml
```

### 3.4 site.webmanifest - oprava názvu

**Aktuální problém:** `"name": "Viktor a zahadna teta Bobina"` (nesprávný)

**Oprava v `src/site.webmanifest`:**

```json
{
    "name": "Kniha pro děti",
    "short_name": "Kniha pro děti",
    "icons": [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/android-chrome-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        }
    ],
    "theme_color": "#ca6d1b",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

---

## ⚡ Fáze 4: Responsivní obrázky

### 4.1 Responsive images

Použít `srcset` atribut pro různé velikosti obrazovek:

```html
<img
  src="/images/book-cover.jpg"
  srcset="
    /images/book-cover-400.jpg  400w,
    /images/book-cover-800.jpg  800w,
    /images/book-cover.jpg     1200w
  "
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Název knihy"
  loading="lazy"
/>
```

### 4.2 Lazy loading

Přidat `loading="lazy"` na obrázky pod záhybem (první viewport bez lazy loading pro LCP).

---

## 🚀 Fáze 5: Nové funkce (volitelné)

### 5.1 Sociální sítě

- [ ] Přidat odkazy do footeru

### 5.2 Vylepšení UX

- [ ] CTA tlačítko v hero sekci
- [ ] Věkové kategorie u knih

---

## ✅ Checklist pro spuštění

### Před nasazením

- [ ] `npm run build` bez chyb
- [ ] Všechny stránky fungují (`npm run dev`)
- [ ] Bootstrap 5 komponenty fungují (navbar toggle)
- [ ] GLightbox funguje v galerii
- [ ] Žádné jQuery errory v console
- [ ] Responsivní design OK
- [ ] Hover animace fungují (book cards, buttons)
- [ ] Scroll fade-in animace fungují
- [ ] Focus states viditelné (accessibility)
- [ ] HTML validace (W3C Validator)
- [ ] Lighthouse score > 90
- [ ] Schema.org validace

### Po nasazení

- [ ] Submit sitemap do Google Search Console
- [ ] Zkontrolovat 404 v logech

---

## 📅 Časový odhad (AKTUALIZOVÁNO)

| Fáze      | Popis                                     | Odhad            | Priorita     | Status        |
| --------- | ----------------------------------------- | ---------------- | ------------ | ------------- |
| **0**     | Příprava, archivace                       | 0.5h             | 🔴 Vysoká    | Not started   |
| **1**     | Eleventy inicializace                     | 1-2h             | 🔴 Vysoká    | Not started   |
| **1.5**   | **Extrakce dat do JSON** ⭐               | 3-4h             | 🔴 KRITICKÁ  | Not started   |
| **2**     | Tech upgrade (BS5, GLightbox, vanilla JS) | 2-3h             | 🔴 Vysoká    | Not started   |
| **2b**    | Migrace obsahu do šablon                  | 6-8h             | 🔴 Vysoká    | Not started   |
| **2.5**   | ~~UI/UX vylepšení~~ → MVP CSS only        | 1-2h             | 🟡 Střední   | Deferred      |
| **3**     | SEO (sitemap, robots.txt, webmanifest)    | 1h               | 🟡 Střední   | Not started   |
| **4**     | Obrázky (lazy loading)                    | 1h               | 🟡 Střední   | Not started   |
| **5**     | Pokročilé UI/UX vylepšení                 | 3-5h             | 🟢 Post-MVP  | Deferred      |
|           | **Celkem MVP (Fáze 0-4)**                 | **~15-21 hodin** |              |               |
|           | **S pokročilými vylepšeními (+ Fáze 5)**  | **~18-26 hodin** |              |               |

### Kritická cesta (MVP)

1. ✅ **Fáze 0** (0.5h) - Příprava
2. ✅ **Fáze 1** (2h) - Eleventy setup
3. ⚠️ **Fáze 1.5** (4h) - **DATA EXTRACTION** ← Kritický blokér
4. ✅ **Fáze 2** (3h) - Tech upgrade
5. ✅ **Fáze 2b** (8h) - Template migration
6. ✅ **Fáze 3** (1h) - SEO
7. ✅ **Fáze 4** (1h) - Images

**Total: ~19h pro funkční web**

---

## 📚 Reference

- [Bootstrap 5 migrace guide](https://getbootstrap.com/docs/5.3/migration/)
- [GLightbox dokumentace](https://biati-digital.github.io/glightbox/)
- [Eleventy 3.x dokumentace](https://www.11ty.dev/docs/)

---

## 📝 Poznámky

1. **URL struktura:** Zachovat `.html` přípony pro SEO kontinuitu ✅
2. **Assets path:** Zachovat `/assets/` strukturu pro URL kompatibilitu ✅
3. **Data-driven:** Všechny knihy generované dynamicky z `books.json` ✅
4. **No analytics:** Google Analytics odstraněno dle požadavku ✅
5. **Minimal CSS:** Pokročilé animace odloženy na post-MVP ✅
6. **CSS migrace:** Bootstrap 4 → 5 utility updates (ml-* → ms-*, sr-only → visually-hidden)
7. **JS konsolidace:** Odstranění jQuery, Swipebox, odpocet.js; port smooth-scroll.js
8. **Testování:** Důkladně otestovat navbar na mobilu (BS5 má jiný JS)
9. **Reference projekt:** Architektura bude zrcadlit divadlo-laryfary

---

## 🎯 Závěrečné shrnutí aktualizací

### Co se změnilo oproti originálu:

| Aspekt | Původní plán | Aktualizovaný plán | Důvod |
|--------|-------------|-------------------|-------|
| **Folder structure** | `src/css/`, `src/images/` | `src/` → `_site/assets/` | Zachovat URL kompatibilitu |
| **Data organizace** | Nedefinováno | `books.json` array + schemas | Data-driven architecture |
| **Fáze pořadí** | Fáze 2b nejasná | Nová Fáze 1.5 + detailní 2b | Kritická cesta jasná |
| **Book pages** | Individuální files | Dynamic pagination | DRY principle |
| **Analytics** | Neuvedeno | Explicitně odstraněno | User requirement |
| **UI/UX** | Kompletní hned | MVP first, iterativní | Faster time-to-market |
| **CSS files** | Nejasné | `custom20250625.css` → `style.css` | Konsolidace |
| **JS dependencies** | Nejasné | Port + removal plan | Technický dluh |
| **Schema.org** | Základní | Enhanced s reviews | SEO optimalizace |
| **Missing pages** | Neidentifikováno | 4 knihy doplněny | Kompletní inventura |
| **Image folders** | Neuvedeno | `img/` removed (Swipebox) | Cleanup |

### Klíčová rozhodnutí:

✅ **Incremental migration** - stavíme vedle, ne přes
✅ **Data extraction first** - Fáze 1.5 jako kritický blokér
✅ **Minimal viable first** - pokročilé CSS post-launch
✅ **Mirror divadlo-laryfary** - proven architecture
✅ **Keep `.html` extensions** - SEO kontinuita
✅ **No Google Analytics** - clean stack
✅ **Single `books.json`** - centrální zdroj pravdy
✅ **Enhanced Schema.org** - s reviews pro rich snippets

### Next steps:

1. **Spustit Fázi 0** - archivace starých souborů
2. **Spustit Fázi 1** - npm init + Eleventy setup
3. **Spustit Fázi 1.5** - manuální extrakce dat (KRITICKÁ)
4. Postupovat dle aktualizovaného plánu
