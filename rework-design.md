# 🎨 Design Reference: knihaprodeti.cz

> **Zdroj:** Export z Lovable (`/lovable-export/`)
>
> **Účel:** Referenční dokument pro vizuální redesign webu při migraci na Eleventy.
>
> **Poznámka:** Tento dokument popisuje pouze design, barvy, typografii, animace a vizuální prvky. Neobsahuje architekturu, JS logiku ani strukturu souborů.

---

## Obsah

1. [Barevná paleta](#1-barevná-paleta)
2. [Typografie](#2-typografie)
3. [Spacing systém](#3-spacing-systém)
4. [Stíny a efekty](#4-stíny-a-efekty)
5. [Border radius](#5-border-radius)
6. [Animace a přechody](#6-animace-a-přechody)
7. [Komponenty - proporce](#7-komponenty---proporce)
8. [Responsivita](#8-responsivita)
9. [Navigace](#9-navigace)
10. [Ikony a SVG](#10-ikony-a-svg)
11. [Obrázky a assety](#11-obrázky-a-assety)
12. [Dekorativní vzory](#12-dekorativní-vzory)

---

## 1. Barevná paleta

### 1.1 CSS Custom Properties (doporučeno pro implementaci)

```css
:root {
  /* Základní barvy */
  --background: 40 33% 97%;           /* #F9F7F4 - teplá krémová */
  --foreground: 25 30% 20%;           /* #3D3227 - tmavě hnědá (text) */
  
  /* Karty a povrchy */
  --card: 40 40% 99%;                 /* #FDFCFA */
  --card-foreground: 25 30% 20%;      /* #3D3227 */
  
  /* Primární barva - korálová/terakota */
  --primary: 15 75% 55%;              /* #DA6B3E */
  --primary-foreground: 40 33% 98%;   /* #FCFAF8 */
  
  /* Sekundární - šalvějová zelená */
  --secondary: 140 25% 90%;           /* #E0EDE2 */
  --secondary-foreground: 140 30% 25%; /* #2D4532 */
  
  /* Tlumené/muted */
  --muted: 35 30% 92%;                /* #F0EAE1 - teplá béžová */
  --muted-foreground: 25 15% 45%;     /* #7A7067 */
  
  /* Accent - zlatý med */
  --accent: 42 90% 60%;               /* #F2B83D */
  --accent-foreground: 25 30% 15%;    /* #2E2619 */
  
  /* Lesní zelená */
  --forest: 150 35% 30%;              /* #327553 */
  --forest-foreground: 40 33% 98%;    /* #FCFAF8 */
  
  /* Růžová */
  --blush: 350 60% 92%;               /* #F8E1E4 */
  --blush-foreground: 350 40% 35%;    /* #7D4349 */
  
  /* Nebeská modrá */
  --sky: 200 70% 85%;                 /* #B3DAF0 */
  --sky-foreground: 200 50% 25%;      /* #204050 */
  
  /* Destruktivní/chyba */
  --destructive: 0 84% 60%;           /* #EE4444 */
  
  /* Rámeček a focus */
  --border: 35 25% 88%;               /* #E8E1D6 */
  --ring: 15 75% 55%;                 /* #DA6B3E (= primary) */
  
  /* Base radius */
  --radius: 1rem;                     /* 16px */
}
```

### 1.2 Hex reference tabulka

| Token | HSL | HEX | Použití |
|-------|-----|-----|---------|
| `background` | `40 33% 97%` | `#F9F7F4` | Hlavní pozadí stránky |
| `foreground` | `25 30% 20%` | `#3D3227` | Primární text |
| `primary` | `15 75% 55%` | `#DA6B3E` | CTA tlačítka, odkazy, akcenty |
| `secondary` | `140 25% 90%` | `#E0EDE2` | Pozadí sekcí, jemné zvýraznění |
| `accent` | `42 90% 60%` | `#F2B83D` | Odznaky, speciální zvýraznění |
| `forest` | `150 35% 30%` | `#327553` | Alternativní CTA, ikony funkcí |
| `blush` | `350 60% 92%` | `#F8E1E4` | Dekorativní prvky, plovoucí bubliny |
| `sky` | `200 70% 85%` | `#B3DAF0` | Dekorativní prvky, měkké akcenty |
| `muted` | `35 30% 92%` | `#F0EAE1` | Disabled stavy, placeholder |
| `muted-foreground` | `25 15% 45%` | `#7A7067` | Sekundární text |
| `border` | `35 25% 88%` | `#E8E1D6` | Ohraničení |

### 1.3 Sémantické použití barev

- **Primary (korálová)**: CTA tlačítka, aktivní odkazy, zvýraznění, focus ring
- **Secondary (šalvějová)**: Pozadí sekcí, jemné zvýraznění
- **Accent (zlatá)**: Odznaky (badges), speciální označení (např. "Novinka")
- **Forest (zelená)**: Alternativní tlačítka, ikony vlastností/funkcí
- **Blush (růžová)**: Dekorativní blur prvky, hravé akcenty
- **Sky (modrá)**: Dekorativní blur prvky, měkké pozadí

### 1.4 Opacity hodnoty

| Opacity | Tailwind | Použití |
|---------|----------|---------|
| 10% | `/10` | Velmi jemné pozadí (`bg-forest/10`) |
| 20% | `/20` | Dekorativní blur elementy |
| 30% | `/30` | Střední dekorace |
| 40% | `/40` | Silnější dekorace |
| 50% | `/50` | Vyvážené dekorace, pattern overlay |
| 70% | `/70` | Tlumený text (`text-primary-foreground/70`) |
| 80% | `/80` | Semi-transparentní text |
| 95% | `/95` | Téměř neprůhledné pozadí s blur |

### 1.5 Gradienty

```css
/* Hero sekce - diagonální teplý krém */
--gradient-hero: linear-gradient(135deg, 
  hsl(40 33% 97%) 0%, 
  hsl(35 40% 94%) 50%, 
  hsl(40 35% 96%) 100%
);

/* Vertikální teplý */
--gradient-warm: linear-gradient(180deg, 
  hsl(40 40% 99%) 0%, 
  hsl(35 30% 95%) 100%
);

/* Akcentní gradient */
--gradient-accent: linear-gradient(135deg, 
  hsl(15 75% 55%) 0%, 
  hsl(25 80% 60%) 100%
);

/* Overlay na obrázcích */
.image-overlay {
  background: linear-gradient(to top, 
    rgba(61, 50, 39, 0.2) 0%, 
    transparent 50%
  );
}
```

---

## 2. Typografie

### 2.1 Font family

```css
/* Primární font - Nunito */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');

:root {
  --font-primary: 'Nunito', system-ui, sans-serif;
}

body {
  font-family: var(--font-primary);
}
```

### 2.2 Font weights

| Váha | Hodnota | Použití |
|------|---------|---------|
| Regular | 400 | Tělo textu, popisy |
| Medium | 500 | Odkazy, popisky |
| Semibold | 600 | Podnadpisy, tlačítka |
| Bold | 700 | Nadpisy |
| Extra Bold | 800 | Hlavní nadpisy (h1, h2) |

### 2.3 Hierarchie nadpisů (responsive)

```css
/* H1 - Hero nadpis */
h1, .h1 {
  font-weight: 800;
  line-height: 1.25; /* leading-tight */
  font-size: clamp(2.25rem, 5vw + 1rem, 4.5rem);
  /* Tailwind: text-4xl sm:text-5xl lg:text-6xl xl:text-7xl */
}

/* H2 - Sekční nadpis */
h2, .h2 {
  font-weight: 800;
  font-size: clamp(1.875rem, 4vw + 0.5rem, 3rem);
  /* Tailwind: text-3xl sm:text-4xl lg:text-5xl */
}

/* H3 - Karta/komponenta */
h3, .h3 {
  font-weight: 700;
  font-size: clamp(1.25rem, 2vw + 0.25rem, 1.5rem);
  /* Tailwind: text-xl sm:text-2xl */
}

/* H3 - Footer sekce */
.h3-footer {
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  /* Tailwind: text-lg font-bold */
}
```

### 2.4 Velikosti textu

| Účel | CSS | Tailwind | Velikost |
|------|-----|----------|----------|
| Velký body | `font-size: clamp(1.125rem, 1vw + 0.5rem, 1.25rem)` | `text-lg sm:text-xl` | 18px → 20px |
| Normální body | `font-size: clamp(0.875rem, 0.5vw + 0.5rem, 1rem)` | `text-sm sm:text-base` | 14px → 16px |
| Malý text | `font-size: 0.875rem` | `text-sm` | 14px |
| Badge text | `font-size: 0.875rem; font-weight: 500` | `text-sm font-medium` | 14px |

### 2.5 Line heights

| Název | Hodnota | Použití |
|-------|---------|---------|
| `leading-tight` | 1.25 | Nadpisy |
| `leading-normal` | 1.5 | Default |
| `leading-relaxed` | 1.625 | Citace, dlouhý text |

### 2.6 Příklad CSS implementace

```css
/* Kompletní typografie */
body {
  font-family: 'Nunito', system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: hsl(25 30% 20%);
}

h1 {
  font-weight: 800;
  line-height: 1.25;
  font-size: 2.25rem;
}
@media (min-width: 640px) { h1 { font-size: 3rem; } }
@media (min-width: 1024px) { h1 { font-size: 3.75rem; } }
@media (min-width: 1280px) { h1 { font-size: 4.5rem; } }

h2 {
  font-weight: 800;
  font-size: 1.875rem;
}
@media (min-width: 640px) { h2 { font-size: 2.25rem; } }
@media (min-width: 1024px) { h2 { font-size: 3rem; } }

h3 {
  font-weight: 700;
  font-size: 1.25rem;
}
@media (min-width: 640px) { h3 { font-size: 1.5rem; } }

.text-muted {
  color: hsl(25 15% 45%);
}
```

---

## 3. Spacing systém

### 3.1 Container

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;  /* 24px */
  padding-right: 1.5rem; /* 24px */
}

/* Breakpoint max-widths */
@media (min-width: 640px)  { .container { max-width: 640px; } }
@media (min-width: 768px)  { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1200px; } }
@media (min-width: 1536px) { .container { max-width: 1400px; } }
```

### 3.2 Sekční padding

| Pattern | CSS | Tailwind |
|---------|-----|----------|
| Standardní sekce | `padding: 5rem 0` → `padding: 7rem 0` | `py-20 sm:py-28` |
| Hero sekce | `padding-top: 5rem` | `pt-20` |
| Footer | `padding: 4rem 0 2rem` | `pt-16 pb-8` |

```css
/* Sekce */
section {
  padding-top: 5rem;    /* 80px */
  padding-bottom: 5rem; /* 80px */
}
@media (min-width: 640px) {
  section {
    padding-top: 7rem;    /* 112px */
    padding-bottom: 7rem; /* 112px */
  }
}
```

### 3.3 Gap hodnoty

| Tailwind | CSS | Použití |
|----------|-----|---------|
| `gap-2` | `gap: 0.5rem` (8px) | Malé mezery, ikony |
| `gap-3` | `gap: 0.75rem` (12px) | Sociální ikony |
| `gap-4` | `gap: 1rem` (16px) | Skupiny tlačítek, seznamy |
| `gap-6` | `gap: 1.5rem` (24px) | Grid karty (mobile) |
| `gap-8` | `gap: 2rem` (32px) | Grid karty (desktop) |
| `gap-10` | `gap: 2.5rem` (40px) | Footer grid |
| `gap-12` | `gap: 3rem` (48px) | Hlavní layout mezery |
| `gap-20` | `gap: 5rem` (80px) | Velké layout mezery (lg) |

### 3.4 Padding hodnoty

| Tailwind | CSS | Použití |
|----------|-----|---------|
| `p-4` | `padding: 1rem` (16px) | Container padding |
| `p-5` | `padding: 1.25rem` (20px) | Karta padding |
| `p-6` | `padding: 1.5rem` (24px) | Karta padding (sm+) |
| `p-8` | `padding: 2rem` (32px) | Velký padding |
| `p-12` | `padding: 3rem` (48px) | Extra velký padding (sm+) |
| `px-3` | `padding: 0 0.75rem` | Badge horizontal |
| `px-4` | `padding: 0 1rem` | Tlačítko default |
| `px-6` | `padding: 0 1.5rem` | Tlačítko medium |
| `px-8` | `padding: 0 2rem` | Tlačítko large |

### 3.5 Margin hodnoty

| Tailwind | CSS | Použití |
|----------|-----|---------|
| `mb-2` | `margin-bottom: 0.5rem` | Mezi nadpisem a podtitulem |
| `mb-4` | `margin-bottom: 1rem` | Pod nadpisy |
| `mb-6` | `margin-bottom: 1.5rem` | Pod sekčními nadpisy |
| `mb-8` | `margin-bottom: 2rem` | Větší bloky obsahu |
| `mb-12` | `margin-bottom: 3rem` | Pod sekčním headerem |
| `mb-16` | `margin-bottom: 4rem` | Sekční header (sm+) |

---

## 4. Stíny a efekty

### 4.1 Shadow proměnné

```css
:root {
  /* Jemný stín - karty, tlačítka */
  --shadow-soft: 0 4px 20px -4px hsl(25 30% 20% / 0.08);
  
  /* Výraznější stín - knihy, testimonials */
  --shadow-book: 0 8px 30px -8px hsl(25 30% 20% / 0.15),
                 0 4px 10px -4px hsl(25 30% 20% / 0.1);
  
  /* Hover stín */
  --shadow-hover: 0 12px 40px -10px hsl(25 30% 20% / 0.2),
                  0 6px 15px -6px hsl(25 30% 20% / 0.12);
}

.shadow-soft { box-shadow: var(--shadow-soft); }
.shadow-book { box-shadow: var(--shadow-book); }
.shadow-hover { box-shadow: var(--shadow-hover); }
```

### 4.2 Backdrop blur

```css
/* Navbar při scrollu */
.navbar-scrolled {
  background-color: hsl(40 40% 99% / 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

### 4.3 Focus states

```css
/* Focus ring */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 
              0 0 0 4px hsl(var(--ring));
}

/* Offset pro tlačítka */
button:focus-visible {
  --ring-offset: 2px;
  box-shadow: 0 0 0 var(--ring-offset) hsl(var(--background)), 
              0 0 0 calc(var(--ring-offset) + 2px) hsl(var(--ring));
}
```

---

## 5. Border radius

### 5.1 Radius proměnné

```css
:root {
  --radius: 1rem; /* 16px - base */
}

/* Odvozenéhodnoty */
.rounded-sm { border-radius: calc(var(--radius) - 4px); }  /* 12px */
.rounded-md { border-radius: calc(var(--radius) - 2px); }  /* 14px */
.rounded-lg { border-radius: var(--radius); }              /* 16px */
.rounded-xl { border-radius: calc(var(--radius) + 4px); }  /* 20px */
.rounded-2xl { border-radius: calc(var(--radius) + 8px); } /* 24px */
.rounded-3xl { border-radius: calc(var(--radius) + 16px); }/* 32px */
.rounded-full { border-radius: 9999px; }
```

### 5.2 Použití podle elementu

| Element | Radius | CSS |
|---------|--------|-----|
| Karty | 24px | `border-radius: 1.5rem` |
| Testimonial karta | 32px | `border-radius: 2rem` |
| Tlačítka (default) | 20px | `border-radius: 1.25rem` |
| Tlačítka (large) | 24px | `border-radius: 1.5rem` |
| Obrázky knih | 20-24px | `border-radius: 1.25rem` - `1.5rem` |
| Ikony/kontejnery | 16-20px | `border-radius: 1rem` - `1.25rem` |
| Badges | 9999px | `border-radius: 9999px` (pill) |
| Dekorativní kruhy | 9999px | `border-radius: 50%` |

---

## 6. Animace a přechody

### 6.1 Keyframe animace

```css
/* Fade in */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Fade in + posun nahoru */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale in */
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Plovoucí efekt */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Kývání */
@keyframes wiggle {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}
```

### 6.2 Animation classes

```css
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scale-in 0.5s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-wiggle {
  animation: wiggle 0.5s ease-in-out;
}
```

### 6.3 CSS přechody (transitions)

```css
/* Standardní transition */
.transition-all {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

/* Stíny a efekty */
.transition-shadow {
  transition-property: box-shadow;
  transition-duration: 300ms;
}

/* Barvy */
.transition-colors {
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
}

/* Transform */
.transition-transform {
  transition-property: transform;
  transition-duration: 500ms;
}

/* Delší pro karty */
.card-transition {
  transition: all 500ms ease;
}
```

### 6.4 Hover efekty

```css
/* Tlačítko hover */
.btn:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-book);
}

.btn:active {
  transform: scale(0.98);
}

/* Hero tlačítko */
.btn-hero:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-hover);
}

/* Karta hover */
.card:hover {
  box-shadow: var(--shadow-hover);
}

.card:hover img {
  transform: scale(1.05);
}

.card:hover .card-title {
  color: hsl(var(--primary));
}
```

### 6.5 Scroll reveal (pomocí JS)

```javascript
// IntersectionObserver pro scroll animace
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Počáteční stav elementů
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
```

### 6.6 Staggered animace (delay)

```css
/* Pro gridy - každý item má postupný delay */
.grid-item:nth-child(1) { animation-delay: 0ms; }
.grid-item:nth-child(2) { animation-delay: 100ms; }
.grid-item:nth-child(3) { animation-delay: 200ms; }
.grid-item:nth-child(4) { animation-delay: 300ms; }
/* atd. */
```

---

## 7. Komponenty - proporce

### 7.1 Karta knihy (BookCard)

```
┌─────────────────────────────┐
│  ┌─────────┐                │ ← Badge: top-4 left-4
│  │ Novinka │                │    px-3 py-1 rounded-full
│  └─────────┘                │
│                             │
│     ┌───────────────┐       │
│     │               │       │ ← Obrázek: aspect-ratio 3:4
│     │    Obrázek    │       │    rounded-t (nahoře)
│     │     knihy     │       │    object-cover
│     │               │       │
│     └───────────────┘       │
│                             │
│  ┌─────────────────────┐    │ ← Content: p-5 sm:p-6
│  │ Název knihy         │    │    
│  │ Popis knihy lorem...│    │ ← line-clamp-3
│  │                     │    │
│  │ [  Více o knize  ]  │    │ ← Button: w-full
│  └─────────────────────┘    │
└─────────────────────────────┘
   ↑ rounded-2xl (24px)
   ↑ shadow-soft → hover:shadow-hover
```

**CSS:**
```css
.book-card {
  background: hsl(var(--card));
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  transition: all 500ms ease;
}

.book-card:hover {
  box-shadow: var(--shadow-hover);
}

.book-card-image {
  aspect-ratio: 3 / 4;
  object-fit: cover;
  transition: transform 500ms ease;
}

.book-card:hover .book-card-image {
  transform: scale(1.05);
}

.book-card-content {
  padding: 1.25rem;
}
@media (min-width: 640px) {
  .book-card-content { padding: 1.5rem; }
}
```

### 7.2 Tlačítka

```
Velikosti:
┌──────────────────────────────────────────────────────────────┐
│ sm:    h-10 (40px)  │ px-4  │ text-sm   │ rounded-lg        │
│ md:    h-12 (48px)  │ px-6  │ text-base │ rounded-xl        │
│ lg:    h-14 (56px)  │ px-8  │ text-lg   │ rounded-2xl       │
│ xl:    h-16 (64px)  │ px-10 │ text-xl   │ rounded-2xl       │
│ icon:  h-12 w-12    │ -     │ -         │ rounded-xl        │
└──────────────────────────────────────────────────────────────┘
```

**CSS:**
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 300ms ease;
}

.btn-sm { height: 2.5rem; padding: 0 1rem; font-size: 0.875rem; border-radius: 1rem; }
.btn-md { height: 3rem; padding: 0 1.5rem; font-size: 1rem; border-radius: 1.25rem; }
.btn-lg { height: 3.5rem; padding: 0 2rem; font-size: 1.125rem; border-radius: 1.5rem; }
.btn-xl { height: 4rem; padding: 0 2.5rem; font-size: 1.25rem; border-radius: 1.5rem; }

.btn-primary {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: var(--shadow-soft);
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-book);
}

.btn-outline {
  border: 2px solid hsl(var(--primary));
  background: transparent;
  color: hsl(var(--primary));
}

.btn-outline:hover {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

### 7.3 Badge/Odznak

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-accent {
  background: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.badge-blush {
  background: hsl(var(--blush) / 0.5);
  color: hsl(var(--blush-foreground));
}
```

### 7.4 Testimonial/Citace

```
┌─────────────────────────────────────────────────────────────┐
│     ┌───┐                                                   │
│     │ " │  ← Quote ikona: absolute -top-6 left-8           │
│     └───┘     w-12 h-12 rounded-full bg-primary            │
│                                                             │
│  "Citace lorem ipsum dolor sit amet, consectetur           │
│   adipiscing elit. Sed do eiusmod tempor incididunt."      │
│                                         leading-relaxed     │
│                                                             │
│  ────  Jméno autora                                        │
│        Role/popis     ← attribution s čárou vlevo          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
   ↑ max-w-4xl mx-auto
   ↑ p-8 sm:p-12
   ↑ rounded-3xl (32px)
   ↑ bg-card shadow-book
```

### 7.5 Ikona v kontejneru

```css
/* Malý kontejner */
.icon-container-sm {
  width: 2.5rem;  /* 40px */
  height: 2.5rem;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Střední kontejner */
.icon-container-md {
  width: 3rem;  /* 48px */
  height: 3rem;
  border-radius: 1.25rem;
}

/* Velký kontejner (AuthorReadings) */
.icon-container-lg {
  width: 8rem;  /* 128px */
  height: 8rem;
  border-radius: 50%;
  background: hsl(var(--forest) / 0.1);
}

.icon-container-lg-inner {
  width: 6rem;  /* 96px */
  height: 6rem;
  border-radius: 50%;
  background: hsl(var(--forest));
}
```

### 7.6 Hero sekce proporce

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  min-height: 100vh                                                  │
│  padding-top: 5rem (80px) - prostor pro navbar                     │
│                                                                     │
│  ┌────────────────────────┐    ┌─────────────────────────────┐     │
│  │                        │    │                             │     │
│  │   Badge                │    │   ┌─────┐ ┌─────┐          │     │
│  │   Hlavní nadpis        │    │   │Book2│ │Book3│          │     │
│  │   (text-4xl → 7xl)     │    │   └─────┘ └─────┘          │     │
│  │                        │    │       ┌───────┐            │     │
│  │   Podtitul             │    │       │       │            │     │
│  │   (text-lg → xl)       │    │       │ Main  │            │     │
│  │                        │    │       │ Book  │            │     │
│  │   [CTA Button] [Link]  │    │       │       │            │     │
│  │                        │    │       └───────┘            │     │
│  │                        │    │   ┌─────┐ ┌─────┐          │     │
│  └────────────────────────┘    │   │Book4│ │Book5│          │     │
│                                │   └─────┘ └─────┘          │     │
│  lg:grid-cols-2                └─────────────────────────────┘     │
│  gap-12 lg:gap-20                                                  │
│                                                                     │
│  ↓ Scroll indicator (animate-bounce)                               │
└─────────────────────────────────────────────────────────────────────┘
```

**Velikosti knih v hero:**
| Kniha | Mobile | SM | LG |
|-------|--------|----|----|
| Hlavní | w-44 (176px) | w-52 (208px) | w-64 (256px) |
| Sekundární | w-28-32 (112-128px) | w-36-40 (144-160px) | w-40-44 (160-176px) |

---

## 8. Responsivita

### 8.1 Breakpointy

| Název | Šířka | Container max | Použití |
|-------|-------|---------------|---------|
| (base) | < 640px | 100% | Mobil |
| `sm` | ≥ 640px | 640px | Velký mobil |
| `md` | ≥ 768px | 768px | Tablet |
| `lg` | ≥ 1024px | 1024px | Desktop |
| `xl` | ≥ 1280px | 1200px | Velký desktop |
| `2xl` | ≥ 1536px | 1400px | Extra velký |

### 8.2 Mobile-first patterns

```css
/* Typography - mobile first */
h1 { font-size: 2.25rem; }                    /* base */
@media (min-width: 640px) { h1 { font-size: 3rem; } }
@media (min-width: 1024px) { h1 { font-size: 3.75rem; } }
@media (min-width: 1280px) { h1 { font-size: 4.5rem; } }

/* Spacing - mobile first */
section { padding: 5rem 0; }
@media (min-width: 640px) { section { padding: 7rem 0; } }

/* Grid - mobile first */
.books-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) { .books-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; } }
@media (min-width: 1024px) { .books-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1280px) { .books-grid { grid-template-columns: repeat(4, 1fr); } }

/* Layout switch */
.hero-content {
  display: flex;
  flex-direction: column;
  text-align: center;
}
@media (min-width: 1024px) {
  .hero-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
}

/* Visibility */
.desktop-only { display: none; }
@media (min-width: 768px) { .desktop-only { display: flex; } }

.mobile-only { display: block; }
@media (min-width: 768px) { .mobile-only { display: none; } }
```

### 8.3 Responzivní vzory podle komponenty

| Komponenta | Mobile | SM | MD | LG | XL |
|------------|--------|----|----|----|----|
| Books grid | 1 col | 2 col | 2 col | 3 col | 4 col |
| Footer grid | 1 col | 1 col | 2 col | 4 col | 4 col |
| Hero layout | stack | stack | stack | 2 col | 2 col |
| Section padding | py-20 | py-28 | py-28 | py-28 | py-28 |
| Card padding | p-5 | p-6 | p-6 | p-6 | p-6 |

---

## 9. Navigace

### 9.1 Navbar struktura

```
Desktop (md+):
┌──────────────────────────────────────────────────────────────────┐
│  [Logo Icon]  Logo Text     Link1  Link2  Link3  Link4    [CTA] │
│  ↑ w-10 h-10               ↑ gap-8                        ↑     │
│  ↑ rounded-xl              ↑ font-medium                  ↑     │
│  ↑ bg-primary                                             btn   │
└──────────────────────────────────────────────────────────────────┘
   ↑ h-20 (80px) výška

Mobile (< md):
┌────────────────────────────────────────────┐
│  [Logo Icon]  Logo Text           [☰]     │
│                                   Menu btn │
└────────────────────────────────────────────┘
   ↑ h-16 (64px) výška
   
┌────────────────────────────────────────────┐  ← Mobile menu
│  Link1                                     │     (toggled)
│  Link2                                     │
│  Link3                                     │
│  Link4                                     │
│  [    CTA Button    ]                      │
└────────────────────────────────────────────┘
```

### 9.2 Scroll state změna

```css
/* Default (not scrolled) */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: transparent;
  transition: all 300ms ease;
}

/* Po scrollu (> 20px) */
.navbar.scrolled {
  background: hsl(var(--card) / 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-soft);
}
```

### 9.3 Nav link hover efekt

```css
.nav-link {
  position: relative;
  font-weight: 500;
  color: hsl(var(--foreground) / 0.8);
  transition: color 200ms ease;
}

.nav-link:hover {
  color: hsl(var(--primary));
}

/* Underline animace */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: hsl(var(--primary));
  transition: width 300ms ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

### 9.4 Výšky a rozměry

| Prvek | Mobile | Desktop (md+) |
|-------|--------|---------------|
| Navbar výška | 64px (h-16) | 80px (h-20) |
| Logo ikona | 40px × 40px | 40px × 40px |
| Nav gap | - | 32px (gap-8) |
| Mobile menu item padding | py-3 px-4 | - |

---

## 10. Ikony a SVG

### 10.1 Použité Lucide ikony

| Ikona | Komponenta | Velikost | Barva |
|-------|------------|----------|-------|
| `ChevronDown` | Hero | w-8 h-8 | muted-foreground → primary |
| `Heart` | Hero (badge) | w-4 h-4 | inherit |
| `Menu` | Navbar | w-6 h-6 | inherit |
| `X` | Navbar | w-6 h-6 | inherit |
| `BookOpen` | Navbar, Footer | w-5 h-5 | primary-foreground |
| `ArrowRight` | BookCard, Footer | w-4 h-4 | inherit |
| `Mail` | Footer | w-4 h-4 | primary |
| `Phone` | Footer | w-4 h-4 | primary |
| `Facebook` | Footer | w-5 h-5 | inherit |
| `Instagram` | Footer | w-5 h-5 | inherit |
| `Quote` | Testimonial | w-6 h-6 | primary-foreground |
| `Calendar` | AuthorReadings | w-4 h-4 | inherit |
| `Mic` | AuthorReadings | w-12-14 h-12-14 | forest-foreground |
| `Users` | AuthorReadings | w-6-7 h-6-7 | forest / blush-foreground |
| `MapPin` | AuthorReadings | w-6-7 h-6-7 | forest / sky-foreground |
| `Clock` | AuthorReadings | w-6-7 h-6-7 | forest / accent-foreground |

### 10.2 Velikosti ikon

| Kontext | Velikost | CSS |
|---------|----------|-----|
| V textu/badge | 16px | `width: 1rem; height: 1rem` |
| V tlačítkách | 20px | `width: 1.25rem; height: 1.25rem` |
| Feature ikony | 24px | `width: 1.5rem; height: 1.5rem` |
| Plovoucí ikony | 28px | `width: 1.75rem; height: 1.75rem` |
| Scroll indikátor | 32px | `width: 2rem; height: 2rem` |
| Velké centrované | 48-56px | `width: 3rem-3.5rem; height: 3rem-3.5rem` |

### 10.3 Inline SVG - vlnitá čára pod textem

```html
<!-- Dekorativní podtržení slova -->
<span class="relative">
  hrdinou
  <svg 
    class="absolute -bottom-2 left-0 w-full" 
    viewBox="0 0 200 12" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 8C40 4 80 2 100 4C120 6 160 10 198 6"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      class="text-accent"
    />
  </svg>
</span>
```

### 10.4 Lucide React implementace → vanilla HTML/CSS

```html
<!-- Lucide ikona jako inline SVG -->
<!-- Příklad: BookOpen -->
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="20" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round"
>
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
</svg>
```

**Zdroj pro SVG paths:** https://lucide.dev/icons/

---

## 11. Obrázky a assety

### 11.1 Lokální obrázky (src/assets/)

| Soubor | Použití | Rozměry/Aspect |
|--------|---------|----------------|
| `eliska-andilek.jpg` | Hero, BooksSection | 3:4 (portrait) |
| `eliska-detektiv.jpg` | Hero, BooksSection | 3:4 (portrait) |
| `eliska-rebelka.jpg` | Hero, BooksSection | 3:4 (portrait) |
| `viktor-pes.jpg` | BooksSection | 3:4 (portrait) |
| `roza-tatinek.jpg` | Hero, BooksSection | 3:4 (portrait) |
| `hra-o-sen.jpg` | BooksSection | 3:4 (portrait) |
| `tajemstvi-rodiny.jpg` | BooksSection | 3:4 (portrait) |
| `viktor-bobina.jpg` | BooksSection | 3:4 (portrait) |
| `tatjana-medvecka.jpg` | AuthorReadings | 1:1 (square) |

### 11.2 Aspect ratia

| Použití | Aspect ratio | CSS |
|---------|--------------|-----|
| Obálky knih | 3:4 | `aspect-ratio: 3 / 4` |
| Profilové foto | 1:1 | `aspect-ratio: 1 / 1` |

### 11.3 Velikosti obrázků (responsive)

**Knihy v hero:**
| Kniha | Mobile | SM | LG |
|-------|--------|----|----|
| Hlavní | 176px | 208px | 256px |
| Sekundární | 112-128px | 144-160px | 160-176px |

**Profilové foto:**
| Mobile | SM+ |
|--------|-----|
| 128×128px | 160×160px |

### 11.4 Image styling

```css
/* Obrázek knihy */
.book-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 500ms ease;
}

.book-card:hover .book-image {
  transform: scale(1.05);
}

/* Hero kniha s rotací */
.hero-book {
  border-radius: 1.5rem;
  box-shadow: var(--shadow-book);
  transform: rotate(2deg); /* nebo rotate(-2deg) */
  transition: box-shadow 300ms ease;
}

.hero-book:hover {
  box-shadow: var(--shadow-hover);
}

/* Profilové foto */
.profile-image {
  width: 8rem;
  height: 8rem;
  border-radius: 1.5rem;
  object-fit: cover;
  box-shadow: var(--shadow-soft);
}
@media (min-width: 640px) {
  .profile-image {
    width: 10rem;
    height: 10rem;
  }
}

/* Lazy loading */
img[loading="lazy"] {
  /* Native lazy loading */
}
```

### 11.5 Overlay na obrázcích

```css
/* Gradient overlay při hoveru */
.image-container {
  position: relative;
  overflow: hidden;
}

.image-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    hsl(25 30% 20% / 0.2) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 300ms ease;
}

.image-container:hover::after {
  opacity: 1;
}
```

---

## 12. Dekorativní vzory

### 12.1 Pattern dots (tečkový vzor)

```css
.pattern-dots {
  background-image: radial-gradient(
    hsl(var(--muted-foreground) / 0.15) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
}

/* Použití */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.5;
  /* pattern-dots styles */
}
```

### 12.2 Pattern waves (vlnový vzor - SVG)

```css
.pattern-waves {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23E8DED4' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E");
}
```

### 12.3 Plovoucí blur kruhy

```css
/* Dekorativní blur element */
.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px); /* blur-2xl = 40px, blur-3xl = 64px */
  pointer-events: none;
}

/* Příklady */
.blur-blush {
  width: 5rem;   /* w-20 */
  height: 5rem;  /* h-20 */
  background: hsl(var(--blush) / 0.5);
  filter: blur(40px);
}

.blur-sky {
  width: 8rem;   /* w-32 */
  height: 8rem;  /* h-32 */
  background: hsl(var(--sky) / 0.4);
  filter: blur(64px);
}

.blur-primary {
  width: 16rem;  /* w-64 */
  height: 16rem; /* h-64 */
  background: hsl(var(--primary) / 0.1);
  filter: blur(64px);
}
```

### 12.4 Pozice dekorací

```css
/* Hero dekorace */
.hero .blur-circle-1 {
  top: 25%;
  left: 2.5rem;
  width: 5rem;
  height: 5rem;
}

.hero .blur-circle-2 {
  bottom: 25%;
  right: 2.5rem;
  width: 8rem;
  height: 8rem;
}

/* Section dekorace */
.section .blur-circle {
  top: 0;
  left: 25%;
  width: 16rem;
  height: 16rem;
}
```

### 12.5 Rotující dekorativní kruh

```css
/* Přerušovaný rotující kruh */
.rotating-circle {
  width: 24rem;  /* w-96 */
  height: 24rem; /* h-96 */
  border: 2px dashed hsl(var(--muted-foreground) / 0.2);
  border-radius: 50%;
  animation: rotate 60s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### 12.6 Plovoucí ikony s animací

```css
/* Plovoucí ikona */
.floating-icon {
  position: absolute;
  width: 3rem;   /* w-12 */
  height: 3rem;  /* h-12 */
  border-radius: 0.75rem; /* rounded-xl */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-soft);
  animation: float 5s ease-in-out infinite;
}

/* Různé pozice a delay */
.floating-icon-1 {
  top: 10%;
  left: -2rem;
  background: hsl(var(--blush));
  animation-delay: 0s;
}

.floating-icon-2 {
  top: 30%;
  right: -1rem;
  background: hsl(var(--sky));
  animation-delay: 1s;
}

.floating-icon-3 {
  bottom: 20%;
  left: 0;
  background: hsl(var(--accent));
  animation-delay: 2s;
}
```

---

## Z-Index vrstvy

| Vrstva | Z-Index | Obsah |
|--------|---------|-------|
| Pozadí dekorace | auto (0) | Blur kruhy, patterns |
| Obsah | 10 | Hlavní content container |
| Badge na kartě | 10 | Overlay badge |
| Hero sekundární knihy | 10-20 | Vedlejší knihy |
| Hero hlavní kniha | 30 | Centrální kniha |
| Navbar | 50 | Fixní header |

---

## Shrnutí designu

Tento design je **teplý, hravý a přívětivý** web pro dětské knihy s následujícími charakteristikami:

- **Teplá barevná paleta** založená na krémovém pozadí, korálové primární barvě a šalvějové sekundární
- **Font Nunito** pro přátelský, zaoblený vzhled
- **Velkorysé odsazení** a "vzduch" mezi prvky
- **Měkké, zaoblené rohy** (16-32px)
- **Vrstvené stíny** s teplými hnědými tóny
- **Hravé animace** včetně plovoucích prvků a plynulých přechodů
- **Mobile-first responsive** design
- **Group hover interakce** pro karty a odkazy
- **Dekorativní blur elementy** pro hloubku a hravost

---

*Tento dokument slouží jako referenční příručka pro implementaci designu v Eleventy/Bootstrap 5 prostředí.*
