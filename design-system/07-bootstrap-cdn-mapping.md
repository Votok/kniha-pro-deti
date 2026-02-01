# Bootstrap 5 CDN Implementation Mapping

> **Binding Contract**: This document defines the ONLY permitted ways to implement the design system using Bootstrap 5 via CDN. All implementation must follow these rules exactly.

---

## 1. Purpose and Constraints

### Why CDN-Only Bootstrap

This project uses Bootstrap 5 exclusively via CDN link for the following reasons:

- **Zero build complexity** — No SCSS compilation, no npm scripts, no build failures
- **Instant updates** — Change the CDN version string to upgrade Bootstrap
- **Static hosting compatibility** — Works on any static host without build step
- **Simplicity** — Matches Eleventy's philosophy of minimal tooling

### How This Affects Customization

**What you CANNOT do:**
- Modify Bootstrap SCSS variables (`$primary`, `$spacer`, etc.)
- Rebuild Bootstrap with custom theme
- Use SCSS mixins or functions
- Import Bootstrap partials selectively

**What you CAN do:**
- Override Bootstrap CSS classes in `assets/css/style.css`
- Define CSS custom properties (`:root` variables)
- Create custom utility classes
- Use Bootstrap's default classes as base layer

### Why This Mapping Exists

This document is a **binding contract** between the design system (the "what") and the implementation layer (the "how"). Every design token, component, and interaction pattern MUST be implemented using one of the three permitted strategies defined here.

**When conflicts arise**: The design system (files 01-06) always wins. If Bootstrap cannot achieve a design requirement, extend `assets/css/style.css` — never compromise the design.

---

## 2. Color Implementation Strategy

### CSS Custom Properties (Required)

All design system colors MUST be defined as CSS custom properties in `:root`:

```css
:root {
  /* Brand Colors - Light Mode */
  --color-primary: 25 55% 40%;        /* #9B6239 - warm brown */
  --color-primary-fg: 0 0% 100%;      /* #FFFFFF */
  --color-secondary: 140 25% 90%;     /* #D9EDE2 - soft sage */
  --color-secondary-fg: 140 30% 30%;  /* #3D664D */
  --color-accent: 45 90% 65%;         /* #F5D54A - golden yellow */
  --color-accent-fg: 35 50% 25%;      /* #5F4A28 */

  /* Theme Colors */
  --color-storybook: 210 50% 45%;     /* #3C73AC - trust blue */
  --color-storybook-fg: 0 0% 100%;    /* #FFFFFF */
  --color-forest: 150 35% 35%;        /* #3D7358 - nature green */
  --color-forest-fg: 0 0% 100%;       /* #FFFFFF */

  /* Background & Surface */
  --color-background: 40 33% 97%;     /* #F9F6F2 - warm cream */
  --color-foreground: 25 30% 20%;     /* #423025 - primary text */
  --color-card: 40 40% 99%;           /* #FDFCFA */
  --color-card-fg: 25 30% 20%;        /* #423025 */

  /* Muted & Utility */
  --color-muted: 30 20% 94%;          /* #F2EFEB */
  --color-muted-fg: 25 15% 45%;       /* #7A6F62 - secondary text */
  --color-border: 30 25% 88%;         /* #E8E0D5 */
  --color-input: 30 25% 88%;          /* #E8E0D5 */
  --color-ring: 15 85% 60%;           /* #E8784B - focus rings */

  /* Feedback */
  --color-destructive: 0 84.2% 60.2%; /* #ED5555 */
  --color-destructive-fg: 210 40% 98%; /* #F5F8FC */

  /* Shadows */
  --shadow-soft: 0 4px 20px -4px hsl(30 30% 50% / 0.15);
  --shadow-card: 0 8px 30px -8px hsl(30 30% 50% / 0.2);
  --shadow-book: 0 12px 40px -10px hsl(30 30% 40% / 0.25);
}

/* Dark Mode - Media Query */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: 25 50% 50%;
    --color-secondary: 140 20% 20%;
    --color-accent: 45 80% 50%;
    --color-background: 25 25% 10%;
    --color-foreground: 40 30% 95%;
    --color-card: 25 20% 14%;
    --color-muted: 25 15% 20%;
    --color-muted-fg: 30 15% 60%;
    --color-border: 25 15% 25%;
    /* ... rest of dark mode colors */
  }
}
```

**Usage Pattern**: All color references MUST use `hsl(var(--color-name))`:

```css
.custom-element {
  background-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-fg));
}

/* For opacity variations */
.custom-element-muted {
  background-color: hsl(var(--color-primary) / 0.1);
}
```

### Bootstrap Class Overrides

Override Bootstrap's semantic color classes to match the design system:

**Buttons** (override in `assets/css/style.css`):
```css
.btn-primary {
  background-color: hsl(var(--color-primary));
  border-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-fg));
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: hsl(var(--color-primary) / 0.9);
  border-color: hsl(var(--color-primary) / 0.9);
}

/* DO NOT override per-button instance - use variants instead */
```

**Text Colors** (override Bootstrap utilities):
```css
.text-primary {
  color: hsl(var(--color-primary)) !important;
}

.text-muted {
  color: hsl(var(--color-muted-fg)) !important;
}

/* FORBIDDEN: Do not use Bootstrap's default .text-primary without override */
```

**Background Colors**:
```css
.bg-primary {
  background-color: hsl(var(--color-primary)) !important;
}

.bg-secondary {
  background-color: hsl(var(--color-secondary)) !important;
}

/* FORBIDDEN: Bootstrap's default .bg-primary (blue) must never appear in production */
```

### Custom Utility Classes (Required for Non-Bootstrap Colors)

Create custom color utilities for design system colors that don't map to Bootstrap:

```css
/* Theme Colors - Custom Utilities */
.btn-storybook {
  background-color: hsl(var(--color-storybook));
  border-color: hsl(var(--color-storybook));
  color: hsl(var(--color-storybook-fg));
}

.btn-forest {
  background-color: hsl(var(--color-forest));
  border-color: hsl(var(--color-forest));
  color: hsl(var(--color-forest-fg));
}

.btn-accent {
  background-color: hsl(var(--color-accent));
  border-color: hsl(var(--color-accent));
  color: hsl(var(--color-accent-fg));
}

/* Background Utilities */
.bg-accent {
  background-color: hsl(var(--color-accent)) !important;
}

.bg-storybook {
  background-color: hsl(var(--color-storybook)) !important;
}

.bg-forest {
  background-color: hsl(var(--color-forest)) !important;
}

/* Text Utilities */
.text-accent {
  color: hsl(var(--color-accent)) !important;
}

.text-storybook {
  color: hsl(var(--color-storybook)) !important;
}
```

### Gradient Backgrounds (Custom CSS Required)

Gradients CANNOT be achieved with Bootstrap utilities alone. Define as custom classes:

```css
/* Hero Gradient */
.bg-gradient-hero {
  background: linear-gradient(
    180deg,
    hsl(40 40% 98%) 0%,
    hsl(35 35% 95%) 50%,
    hsl(30 30% 93%) 100%
  );
}

/* Warm Section Gradient */
.bg-gradient-warm {
  background: linear-gradient(
    135deg,
    hsl(var(--color-secondary)) 0%,
    hsl(40 35% 96%) 100%
  );
}

/* Storybook Gradient */
.bg-gradient-storybook {
  background: linear-gradient(
    180deg,
    hsl(210 40% 96%) 0%,
    hsl(var(--color-background)) 100%
  );
}

/* Text Gradient (for decorative headings) */
.text-gradient-warm {
  background: linear-gradient(
    135deg,
    hsl(var(--color-primary)) 0%,
    hsl(var(--color-accent)) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Shadow System (CSS Custom Properties)

```css
/* Shadows already defined in :root above */

/* Shadow Utility Classes */
.shadow-soft {
  box-shadow: var(--shadow-soft) !important;
}

.shadow-card {
  box-shadow: var(--shadow-card) !important;
}

.shadow-book {
  box-shadow: var(--shadow-book) !important;
}
```

**Bootstrap's `.shadow` and `.shadow-sm` classes are FORBIDDEN** — use custom shadow classes only.

### Permitted vs. Forbidden Bootstrap Color Utilities

**PERMITTED** (after override in `assets/css/style.css`):
- `.btn-primary`, `.btn-secondary`, `.btn-danger` (mapped to destructive)
- `.btn-outline-primary`, `.btn-outline-secondary`
- `.bg-primary`, `.bg-secondary`, `.bg-light`, `.bg-dark`
- `.text-primary`, `.text-secondary`, `.text-muted`
- `.border-primary`, `.border-secondary`

**FORBIDDEN** (never use, even after override):
- `.btn-success`, `.btn-info`, `.btn-warning` (use custom `.btn-forest`, `.btn-storybook`, `.btn-accent` instead)
- `.bg-success`, `.bg-info`, `.bg-warning` (use custom classes)
- `.text-success`, `.text-info`, `.text-warning` (use custom classes)
- `.alert-*` classes with Bootstrap colors (create custom alert styles)

---

## 3. Typography Implementation Strategy

### Global Font Application

**Base Typography** (override Bootstrap in `assets/css/style.css`):

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

/* Override Bootstrap body font */
body {
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: hsl(var(--color-foreground));
  background-color: hsl(var(--color-background));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Override Bootstrap heading font */
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: "Nunito", system-ui, -apple-system, sans-serif;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: hsl(var(--color-foreground));
}
```

### Heading Size Overrides

Bootstrap's default heading sizes MUST be overridden with responsive design system values:

```css
/* Mobile-first responsive headings */
h1, .h1 {
  font-size: 2.25rem;  /* 36px mobile */
  font-weight: 800;
}

h2, .h2 {
  font-size: 1.875rem; /* 30px mobile */
  font-weight: 700;
}

h3, .h3 {
  font-size: 1.5rem;   /* 24px mobile */
  font-weight: 700;
}

h4, .h4 {
  font-size: 1.25rem;  /* 20px mobile */
  font-weight: 700;
  line-height: 1.4;
}

h5, .h5 {
  font-size: 1.125rem; /* 18px mobile */
  font-weight: 700;
  line-height: 1.4;
}

h6, .h6 {
  font-size: 1rem;     /* 16px mobile */
  font-weight: 700;
  line-height: 1.4;
}

/* Tablet breakpoint (md) */
@media (min-width: 768px) {
  h1, .h1 { font-size: 3rem; }      /* 48px */
  h2, .h2 { font-size: 2.25rem; }   /* 36px */
  h3, .h3 { font-size: 1.75rem; }   /* 28px */
  h4, .h4 { font-size: 1.5rem; }    /* 24px */
  h5, .h5 { font-size: 1.25rem; }   /* 20px */
  h6, .h6 { font-size: 1rem; }      /* 16px */
}

/* Desktop breakpoint (lg) */
@media (min-width: 1024px) {
  h1, .h1 { font-size: 3.75rem; }   /* 60px */
  h2, .h2 { font-size: 3rem; }      /* 48px */
  h3, .h3 { font-size: 2rem; }      /* 32px */
  h4, .h4 { font-size: 1.5rem; }    /* 24px */
  h5, .h5 { font-size: 1.25rem; }   /* 20px */
  h6, .h6 { font-size: 1.125rem; }  /* 18px */
}
```

### Body Text Utilities

Create custom utilities for body text variations:

```css
.text-body-large {
  font-size: 1.125rem;   /* 18px */
  line-height: 1.625;    /* 26px */
}

.text-body {
  font-size: 1rem;       /* 16px - Bootstrap default */
  line-height: 1.5;      /* 24px */
}

.text-body-small {
  font-size: 0.875rem;   /* 14px */
  line-height: 1.5;      /* 21px */
}

.text-tiny {
  font-size: 0.75rem;    /* 12px */
  line-height: 1.5;      /* 18px */
}
```

### Font Weight Utilities

```css
.fw-regular {
  font-weight: 400 !important;
}

.fw-medium {
  font-weight: 500 !important;
}

.fw-semibold {
  font-weight: 600 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-extrabold {
  font-weight: 800 !important;
}
```

### Display Font Utility

For applying Nunito to non-heading elements (buttons, badges):

```css
.font-display {
  font-family: "Nunito", system-ui, -apple-system, sans-serif !important;
}
```

### Bootstrap Typography Utilities: Permitted vs. Forbidden

**PERMITTED**:
- `.lead` (override size to match design system if needed)
- `.text-start`, `.text-center`, `.text-end`
- `.text-uppercase`, `.text-lowercase`, `.text-capitalize`
- `.fw-bold`, `.fw-normal` (after font-weight overrides)
- `.lh-1`, `.lh-sm`, `.lh-base`, `.lh-lg`

**FORBIDDEN**:
- `.display-1` through `.display-6` — **DO NOT USE**. These Bootstrap classes conflict with the design system's responsive heading scale. If you need large display text, use `<h1>` with design system styles.
- `.fs-1` through `.fs-6` — **DO NOT USE**. Use custom `.text-body-*` classes instead.
- Per-page font-size overrides with inline styles — **FORBIDDEN**. All typography sizes must come from predefined classes.

---

## 4. Spacing and Layout Strategy

### Bootstrap Spacing Utilities: Mapping

Bootstrap's spacing scale uses `$spacer: 1rem` with multipliers. Map design system tokens to Bootstrap classes:

| Design Token | Value   | Bootstrap Class  | When to Use                      |
|--------------|---------|------------------|----------------------------------|
| `xs`         | 0.25rem | `.m-1`, `.p-1`   | Icon gaps, tight badge padding   |
| `sm`         | 0.5rem  | `.m-2`, `.p-2`   | Small gaps, inline spacing       |
| `md`         | 1rem    | `.m-3`, `.p-3`   | Standard gaps, card padding      |
| `lg`         | 1.5rem  | `.m-4`, `.p-4`   | Section card padding             |
| `xl`         | 2rem    | Custom `.p-5`    | Between grouped elements         |
| `2xl`        | 3rem    | Custom `.p-6`    | Grid gaps, section margins       |
| `3xl`        | 4rem    | Custom `.p-7`    | Mobile section padding           |
| `4xl`        | 5rem    | Custom `.p-8`    | Tablet section padding           |
| `5xl`        | 7rem    | Custom `.p-9`    | Desktop section padding          |

**Bootstrap's default spacing stops at `.m-5` (3rem / 48px)**. You MUST create custom utilities for larger spacing:

```css
/* Extended Spacing Utilities */
.m-6, .my-6, .mt-6, .mb-6 { margin: 3rem !important; }      /* 48px */
.m-7, .my-7, .mt-7, .mb-7 { margin: 4rem !important; }      /* 64px */
.m-8, .my-8, .mt-8, .mb-8 { margin: 5rem !important; }      /* 80px */
.m-9, .my-9, .mt-9, .mb-9 { margin: 7rem !important; }      /* 112px */

.p-6, .py-6, .pt-6, .pb-6 { padding: 3rem !important; }     /* 48px */
.p-7, .py-7, .pt-7, .pb-7 { padding: 4rem !important; }     /* 64px */
.p-8, .py-8, .pt-8, .pb-8 { padding: 5rem !important; }     /* 80px */
.p-9, .py-9, .pt-9, .pb-9 { padding: 7rem !important; }     /* 112px */

/* Responsive variants (md breakpoint) */
@media (min-width: 768px) {
  .m-md-6, .my-md-6, .mt-md-6, .mb-md-6 { margin: 3rem !important; }
  .m-md-7, .my-md-7, .mt-md-7, .mb-md-7 { margin: 4rem !important; }
  .m-md-8, .my-md-8, .mt-md-8, .mb-md-8 { margin: 5rem !important; }
  .m-md-9, .my-md-9, .mt-md-9, .mb-md-9 { margin: 7rem !important; }

  .p-md-6, .py-md-6, .pt-md-6, .pb-md-6 { padding: 3rem !important; }
  .p-md-7, .py-md-7, .pt-md-7, .pb-md-7 { padding: 4rem !important; }
  .p-md-8, .py-md-8, .pt-md-8, .pb-md-8 { padding: 5rem !important; }
  .p-md-9, .py-md-9, .pt-md-9, .pb-md-9 { padding: 7rem !important; }
}

/* Repeat for lg, xl breakpoints as needed */
```

### Section Padding Pattern

For consistent section vertical rhythm, use these classes:

```css
/* Section Padding Utilities */
.section-padding {
  padding-top: 5rem;    /* 80px mobile */
  padding-bottom: 5rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 7rem;    /* 112px desktop */
    padding-bottom: 7rem;
  }
}

.section-padding-compact {
  padding-top: 4rem;    /* 64px mobile */
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section-padding-compact {
    padding-top: 5rem;    /* 80px desktop */
    padding-bottom: 5rem;
  }
}
```

**RULE**: Apply `.section-padding` to all `<section>` elements. Do NOT use ad-hoc padding values.

### Container Settings

Bootstrap's container works well but needs max-width adjustment:

```css
/* Override Bootstrap container max-width */
.container {
  max-width: 1280px !important;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}

/* FORBIDDEN: Do not use .container-fluid for main content sections */
```

### Grid System

**PERMITTED** Bootstrap grid classes:
- `.row`, `.col`, `.col-*`
- `.row-cols-1`, `.row-cols-sm-2`, `.row-cols-lg-3`, `.row-cols-xl-4`
- `.g-*` (gap utilities: `.g-3`, `.g-4`, `.g-5`)
- `.justify-content-*`, `.align-items-*`

**Custom gap utilities** for design system gaps:

```css
.g-6 { gap: 3rem !important; }   /* 48px */
.g-7 { gap: 4rem !important; }   /* 64px */
```

### Border Radius

Override Bootstrap's default border radius with design system values:

```css
:root {
  --bs-border-radius: 1rem;           /* Base: 16px */
  --bs-border-radius-sm: 0.5rem;      /* Small: 8px */
  --bs-border-radius-lg: 1.25rem;     /* Large: 20px */
  --bs-border-radius-xl: 1.5rem;      /* XL: 24px */
  --bs-border-radius-2xl: 1.5rem;     /* 2XL: 24px */
  --bs-border-radius-pill: 9999px;    /* Full pill */
}

/* Utility classes */
.rounded-sm { border-radius: 0.5rem !important; }     /* 8px */
.rounded-md { border-radius: 0.75rem !important; }    /* 12px */
.rounded-lg { border-radius: 1rem !important; }       /* 16px */
.rounded-xl { border-radius: 1.25rem !important; }    /* 20px */
.rounded-2xl { border-radius: 1.5rem !important; }    /* 24px */
.rounded-3xl { border-radius: 1.5rem !important; }    /* 24px - same as 2xl */
.rounded-full { border-radius: 9999px !important; }   /* Full pill */
```

### Spacing Rules: When to Use Custom Classes

**Use Bootstrap spacing utilities when:**
- The spacing value matches Bootstrap's default scale (0-3rem)
- You're spacing between simple elements (margins between cards, padding inside containers)

**Use custom spacing utilities when:**
- Section vertical padding (always use `.section-padding`)
- Large gaps (> 3rem / 48px)
- Design system requires exact spacing not in Bootstrap's scale

**FORBIDDEN**:
- Inline styles for spacing (e.g., `style="margin-top: 20px"`) — **NEVER**
- Arbitrary spacing values not defined in design system
- Bootstrap `.gap-*` classes beyond `.g-5` without custom utility definition

---

## 5. Component Implementation Rules

### Buttons

**Base Bootstrap component**: `.btn`

**What to override in `assets/css/style.css`**:
```css
/* Base button styling */
.btn {
  font-family: "Nunito", system-ui, sans-serif;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-out, transform 0.2s ease-out,
              box-shadow 0.2s ease-out, opacity 0.2s ease-out;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Primary button with hover lift */
.btn-primary {
  background-color: hsl(var(--color-primary));
  border-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-fg));
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: hsl(var(--color-primary) / 0.9);
  border-color: hsl(var(--color-primary) / 0.9);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

/* Hero button variant - custom class */
.btn-hero {
  background-color: hsl(var(--color-primary));
  border-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-fg));
  font-family: "Nunito", system-ui, sans-serif;
  font-weight: 600;
  border-radius: 0.75rem;  /* Larger radius */
  padding: 1rem 2.5rem;    /* XL size */
  font-size: 1.125rem;
}

.btn-hero:hover {
  background-color: hsl(var(--color-primary) / 0.9);
  transform: translateY(-4px);  /* Larger lift */
  box-shadow: var(--shadow-book);  /* Stronger shadow */
}

/* Custom color variants */
.btn-accent {
  background-color: hsl(var(--color-accent));
  border-color: hsl(var(--color-accent));
  color: hsl(var(--color-accent-fg));
}

.btn-storybook {
  background-color: hsl(var(--color-storybook));
  border-color: hsl(var(--color-storybook));
  color: hsl(var(--color-storybook-fg));
}

.btn-forest {
  background-color: hsl(var(--color-forest));
  border-color: hsl(var(--color-forest));
  color: hsl(var(--color-forest-fg));
}
```

**Size variants** (use Bootstrap classes with overrides):
- Small: `.btn-sm` (override padding if needed)
- Default: `.btn` (no modifier)
- Large: `.btn-lg` (override padding if needed)
- XL: Custom `.btn-xl` class (define with `padding: 1rem 2rem; font-size: 1.125rem;`)

**FORBIDDEN**:
- Per-button padding overrides — use size variants only
- Inline styles on buttons
- Bootstrap's `.btn-success`, `.btn-info`, `.btn-warning` without remapping

### Cards

**Base Bootstrap component**: `.card`

**What to override**:
```css
.card {
  background-color: hsl(var(--color-card));
  color: hsl(var(--color-card-fg));
  border: 1px solid hsl(var(--color-border));
  border-radius: 1rem;  /* lg */
  box-shadow: var(--shadow-soft);
}

.card-header {
  padding: 1.5rem;
  background-color: transparent;
  border-bottom: 1px solid hsl(var(--color-border));
}

.card-body {
  padding: 1.5rem;
}

.card-footer {
  padding: 1.5rem;
  background-color: transparent;
  border-top: 1px solid hsl(var(--color-border));
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 0.875rem;
  color: hsl(var(--color-muted-fg));
}
```

**Book Card** (custom class extends `.card`):
```css
.book-card {
  background-color: hsl(var(--color-card));
  border: 1px solid hsl(var(--color-border));
  border-radius: 1rem;
  box-shadow: var(--shadow-soft);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  overflow: hidden;
}

.book-card:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: var(--shadow-book);
}

.book-card .book-cover {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  position: relative;
}

.book-card .book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: var(--shadow-book);
}

.book-card .book-title {
  font-family: "Nunito", system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(var(--color-foreground));
  transition: color 0.2s ease-out;
}

.book-card:hover .book-title {
  color: hsl(var(--color-primary));
}
```

**FORBIDDEN**:
- Removing `.card` class and building from scratch
- Inline styles for card sizing or positioning
- Per-card shadow overrides — use `.shadow-soft`, `.shadow-card`, `.shadow-book` classes

### Badges

**Base Bootstrap component**: `.badge`

**What to override**:
```css
.badge {
  font-family: "Nunito", system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.125rem 0.625rem;
  border-radius: 9999px;  /* Full pill */
}

/* Remap Bootstrap badge colors */
.badge.bg-primary {
  background-color: hsl(var(--color-primary)) !important;
  color: hsl(var(--color-primary-fg)) !important;
}

.badge.bg-secondary {
  background-color: hsl(var(--color-secondary)) !important;
  color: hsl(var(--color-secondary-fg)) !important;
}

/* Section tag badge - custom variant */
.badge-section-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background-color: hsl(var(--color-primary) / 0.1);
  color: hsl(var(--color-primary));
  border-radius: 9999px;
  font-family: "Nunito", system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Color variants for section tags */
.badge-section-tag.badge-accent {
  background-color: hsl(var(--color-accent) / 0.3);
  color: hsl(var(--color-accent-fg));
}

.badge-section-tag.badge-storybook {
  background-color: hsl(var(--color-storybook) / 0.1);
  color: hsl(var(--color-storybook));
}

.badge-section-tag.badge-forest {
  background-color: hsl(var(--color-forest) / 0.1);
  color: hsl(var(--color-forest));
}
```

**FORBIDDEN**:
- Bootstrap's `.badge` without color class
- Custom badges not using `.badge` base class

### Navigation

**Base Bootstrap component**: `.navbar`

**What to override**:
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1050;
  background-color: transparent;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  transition: all 0.3s ease-out;
}

/* Scrolled state - apply via JavaScript */
.navbar.scrolled {
  background-color: hsl(var(--color-card) / 0.95);
  backdrop-filter: blur(12px);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  box-shadow: var(--shadow-soft);
}

.navbar-brand {
  font-family: "Nunito", system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(var(--color-primary));
}

.navbar-nav .nav-link {
  font-family: "Nunito", system-ui, sans-serif;
  font-weight: 600;
  color: hsl(var(--color-foreground) / 0.8);
  transition: color 0.2s ease-out;
  padding: 0.5rem 1rem;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link:focus {
  color: hsl(var(--color-primary));
}

/* Mobile menu */
@media (max-width: 767px) {
  .navbar-collapse {
    background-color: hsl(var(--color-card));
    box-shadow: var(--shadow-card);
    border-radius: 1rem;
    margin-top: 1rem;
    padding: 1rem;
  }

  .navbar-nav .nav-link {
    font-size: 1.125rem;
    padding: 0.5rem 1rem;
  }
}
```

**JavaScript requirement** for scroll state:
```javascript
// Required: Add 'scrolled' class to navbar on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
```

**FORBIDDEN**:
- Static navbar (must be `.fixed-top` or equivalent positioning)
- Removing Bootstrap's `.navbar` structure
- Custom navigation without Bootstrap base classes

### Footer

**Base Bootstrap component**: None (custom structure using Bootstrap grid)

**Required structure**:
```html
<footer class="footer">
  <div class="container">
    <div class="footer-main">
      <!-- Brand area (50%) and nav area (50%) on lg -->
    </div>
    <div class="footer-bottom">
      <!-- Copyright bar -->
    </div>
  </div>
</footer>
```

**What to style in `assets/css/style.css`**:
```css
.footer {
  background-color: hsl(var(--color-foreground));
  color: hsl(var(--color-background));
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.footer-main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

@media (min-width: 1024px) {
  .footer-main {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-brand {
  max-width: 28rem;
}

.footer-brand p {
  color: hsl(var(--color-background) / 0.7);
  margin-bottom: 1.5rem;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-nav a {
  color: hsl(var(--color-background) / 0.7);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-out;
}

.footer-nav a:hover {
  color: hsl(var(--color-primary));
}

.footer-bottom {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid hsl(var(--color-background) / 0.1);
  font-size: 0.875rem;
  color: hsl(var(--color-background) / 0.5);
  text-align: center;
}

@media (min-width: 1024px) {
  .footer-bottom {
    text-align: left;
  }
}
```

### Breadcrumbs

**Base Bootstrap component**: `.breadcrumb`

**What to override**:
```css
.breadcrumb {
  background-color: transparent;
  padding: 1rem 0;
  margin-bottom: 0;
  font-size: 0.875rem;
}

.breadcrumb-item {
  color: hsl(var(--color-muted-fg));
}

.breadcrumb-item a {
  color: hsl(var(--color-muted-fg));
  text-decoration: none;
  transition: color 0.2s ease-out;
}

.breadcrumb-item a:hover {
  color: hsl(var(--color-foreground));
}

.breadcrumb-item.active {
  color: hsl(var(--color-foreground));
}

/* Override Bootstrap's breadcrumb separator */
.breadcrumb-item + .breadcrumb-item::before {
  content: "›";  /* Chevron right character */
  color: hsl(var(--color-muted-fg));
  padding: 0 0.375rem;
}
```

---

## 6. Interactions and Motion

### Hover States Implementation

**All interactive elements MUST include explicit hover states** defined in `assets/css/style.css`:

```css
/* Button hover (already shown in section 5) */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.btn-hero:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-book);
}

/* Card hover */
.book-card:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: var(--shadow-book);
}

.feature-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

/* Link hover */
a {
  color: hsl(var(--color-primary));
  text-decoration: none;
  transition: color 0.2s ease-out, text-decoration-color 0.2s ease-out;
}

a:hover {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

/* Navigation link hover (exception - no underline) */
.navbar-nav .nav-link:hover,
.footer-nav a:hover {
  text-decoration: none;
  color: hsl(var(--color-primary));
}
```

**RULE**: All `:hover` states must include `transition` property. **NEVER** define hover without transition.

### Transitions

**Standard transition definition** (must be explicitly listed properties, NOT `all`):

```css
/* For buttons and interactive elements */
.btn, .badge, .nav-link {
  transition: background-color 0.2s ease-out,
              color 0.2s ease-out,
              transform 0.2s ease-out,
              box-shadow 0.2s ease-out,
              opacity 0.2s ease-out;
}

/* For cards and complex elements */
.card, .book-card, .feature-card {
  transition: transform 0.3s ease-out,
              box-shadow 0.3s ease-out;
}

/* For links and text */
a, .nav-link {
  transition: color 0.2s ease-out,
              text-decoration-color 0.2s ease-out;
}

/* For images */
img {
  transition: transform 0.3s ease-out,
              opacity 0.3s ease-out;
}
```

**FORBIDDEN**:
- `transition: all` — Performance issue, always specify properties explicitly
- Transitions longer than 600ms — Feels sluggish
- Transitions shorter than 100ms — Too fast to perceive

### Animations (Custom CSS Required)

Bootstrap has NO animation system. Define all animations in `assets/css/style.css`:

```css
/* Floating book animations for hero */
@keyframes float1 {
  0%, 100% { transform: translateY(0) rotate(-8deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0) rotate(2deg); }
  50% { transform: translateY(-12px) rotate(0deg); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0) rotate(6deg); }
  50% { transform: translateY(-18px) rotate(8deg); }
}

@keyframes float4 {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-12px) rotate(-3deg); }
}

@keyframes float5 {
  0%, 100% { transform: translateY(0) rotate(4deg); }
  50% { transform: translateY(-14px) rotate(6deg); }
}

/* Apply to elements */
.float-book-1 { animation: float1 4s ease-in-out infinite; }
.float-book-2 { animation: float2 5s ease-in-out infinite; }
.float-book-3 { animation: float3 4.5s ease-in-out infinite; }
.float-book-4 { animation: float4 5.5s ease-in-out infinite; }
.float-book-5 { animation: float5 4.8s ease-in-out infinite; }

/* Entrance animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* Utility classes for animations */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.4s ease-out forwards;
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

/* Animation delay utilities for staggered effects */
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
```

### Focus States

**Required for accessibility** — override Bootstrap's default focus ring:

```css
:root {
  --bs-focus-ring-width: 2px;
  --bs-focus-ring-opacity: 1;
  --bs-focus-ring-color: hsl(var(--color-ring));
}

/* Focus visible (keyboard navigation only) */
.btn:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid hsl(var(--color-ring));
  outline-offset: 2px;
  box-shadow: none;
}

/* Remove focus for mouse users */
.btn:focus:not(:focus-visible),
a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}
```

### Consistency Rules

1. **All hover effects** MUST include `transform` AND `box-shadow` changes (except links)
2. **All buttons** lift with `translateY(-2px)` on hover (hero buttons lift `-4px`)
3. **All cards** either don't transform OR transform with rotation for "pick up" effect
4. **All transitions** explicitly list affected properties (no `all`)
5. **Animation durations**:
   - Buttons/links: 200ms
   - Cards: 300ms
   - Entrance animations: 400-600ms
   - Floating animations: 4-6s

---

## 7. Guardrails and Non-Goals

### What Developers MUST NOT Do

#### Absolute Prohibitions

1. **NEVER use inline styles** for anything defined in the design system
   - ❌ `<div style="color: #7c8743;">`
   - ✅ `<div class="text-primary">`

2. **NEVER override design system values per-component instance**
   - ❌ `.custom-button { padding: 15px 25px; }` (arbitrary values)
   - ✅ `.btn-xl { padding: 1rem 2rem; }` (defined size variant)

3. **NEVER use Bootstrap's default semantic colors without remapping**
   - ❌ `.btn-success` (Bootstrap green)
   - ✅ `.btn-forest` (design system green)

4. **NEVER use `transition: all`**
   - ❌ `transition: all 0.3s;`
   - ✅ `transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;`

5. **NEVER create spacing utilities that don't match the design system scale**
   - ❌ `.my-special-gap { margin: 23px; }`
   - ✅ Use existing utilities or request addition to design system

6. **NEVER use Bootstrap's `.display-*` or `.fs-*` utility classes**
   - These conflict with responsive heading scale

7. **NEVER define colors using hex or RGB**
   - ❌ `color: #9B6239;`
   - ✅ `color: hsl(var(--color-primary));`

#### Strong Recommendations (Violations Require Justification)

1. **Avoid creating new utility classes** without updating this document
   - New utilities must be documented here and added to `assets/css/style.css`

2. **Avoid using Bootstrap components not mentioned in this document**
   - Examples: `.accordion`, `.alert`, `.modal` — these need custom design system mapping first

3. **Avoid animations longer than 600ms** or shorter than 100ms
   - Exceptions require design approval

4. **Avoid hover effects that don't include `transform` + `box-shadow`**
   - Links are the only exception (color + underline change only)

### What This Document Does NOT Solve

This mapping does NOT address:

1. **JavaScript interactions** beyond class toggling (e.g., carousel logic, form validation)
2. **Data binding** or templating logic (handled by Eleventy/Nunjucks)
3. **Image optimization** or asset pipeline (handled by Eleventy config)
4. **Accessibility** beyond focus states (follow WCAG 2.1 AA separately)
5. **Browser compatibility** testing (assumed modern browsers: Chrome, Firefox, Safari, Edge)
6. **Performance optimization** beyond transition guidelines
7. **Content strategy** or copy guidelines (out of scope)

### How to Resolve Conflicts

When implementation conflicts arise, follow this hierarchy:

1. **Design system always wins** — Files 01-06 are the single source of truth
2. **This mapping document defines implementation** — Follow these rules exactly
3. **Bootstrap documentation is advisory only** — Ignore Bootstrap conventions if they conflict with design system
4. **If a requirement cannot be met**:
   - First: Check if a custom class in `assets/css/style.css` can extend Bootstrap
   - Second: Document the limitation and propose a design system amendment
   - **NEVER**: Compromise the design by accepting Bootstrap defaults

### Adding New Utilities

If you need a utility class not defined here:

1. **Check design system files 01-06** — Is the value already defined?
2. **Add to `assets/css/style.css`** using existing naming conventions
3. **Update this document** in the relevant section
4. **Use consistent naming**:
   - Color utilities: `.text-{color}`, `.bg-{color}`, `.border-{color}`
   - Spacing utilities: `.m-{size}`, `.p-{size}` with responsive variants
   - Component variants: `.{component}-{variant}` (e.g., `.btn-hero`)

### Maintenance Contract

**This document must be updated whenever:**
- A new component is added to the design system
- A design token value changes
- A new utility class is created in `assets/css/style.css`
- Bootstrap CDN version is upgraded (retest all overrides)

**Version Control**:
- All changes to `assets/css/style.css` MUST reference this document
- Comment above custom CSS rules with section number from this doc:
  ```css
  /* 2.2 - Bootstrap Class Overrides: Primary Button */
  .btn-primary {
    background-color: hsl(var(--color-primary));
  }
  ```

---

## Summary

This document establishes a **three-layer architecture**:

1. **Bootstrap 5 CDN** (base layer) — Provides structure, grid, and basic component patterns
2. **Design System** (files 01-06) — Defines colors, typography, spacing, components, patterns, interactions
3. **Custom CSS** (`assets/css/style.css`) — Bridges the gap using CSS variables, overrides, and custom utilities

**The golden rule**: If Bootstrap can't achieve it via CDN, extend `assets/css/style.css` to make it work. Never compromise the design to fit Bootstrap's defaults.

**Implementation checklist**:
- [ ] Define all color tokens as CSS custom properties in `:root`
- [ ] Override Bootstrap typography with Google Fonts and responsive scales
- [ ] Create extended spacing utilities (`.p-6` through `.p-9`, responsive variants)
- [ ] Override button, card, badge, and navigation components
- [ ] Define all animations and transitions explicitly
- [ ] Apply `.section-padding` to all `<section>` elements
- [ ] Use shadow utilities (`.shadow-soft`, `.shadow-card`, `.shadow-book`) exclusively
- [ ] Test all hover states include `transition` properties
- [ ] Verify no Bootstrap default colors appear in production
- [ ] Document any new utility classes in this file

This contract is now in effect. All implementation work must comply with these rules.
