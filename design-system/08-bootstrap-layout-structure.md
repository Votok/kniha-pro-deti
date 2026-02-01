# Bootstrap Layout Structure

> **Target Specification**: Defines the HTML layout structure using Bootstrap 5 classes. This document prescribes exactly which Bootstrap classes to use for page structure, sections, headers, footers, and grids.

---

## 1. Purpose and Scope

This document defines the **structural layer** of the website using Bootstrap 5 class names. It specifies:

- Container usage rules
- Page skeleton patterns
- Section wrapper structures
- Header and footer structures
- Grid patterns by context

**What this document does NOT define:**
- Visual styling (colors, typography, shadows) — see `07-bootstrap-cdn-mapping.md`
- Content patterns (what goes inside sections) — see `05-page-patterns.md`
- Spacing values — see `03-spacing-and-layout.md`

**Relationship to other documents:**
- Implements layout patterns from `05-page-patterns.md`
- Uses spacing values from `03-spacing-and-layout.md`
- Provides structure for styling rules in `07-bootstrap-cdn-mapping.md`

---

## 2. Container Rules

### Global Container Strategy

**RULE**: Every section MUST use `.container`, NEVER `.container-fluid`.

**Structure Pattern**:
```
<section>
  <div class="container">
    <!-- Content -->
  </div>
</section>
```

### Container Usage Matrix

| Context | Class | Justification |
|---------|-------|---------------|
| Section content wrapper | `.container` | All content respects 1280px max-width |
| Header inner wrapper | `.container` | Header content aligns with sections |
| Footer inner wrapper | `.container` | Footer content aligns with sections |
| Breadcrumb wrapper | `.container` | Breadcrumbs align with section content |

### Prohibited Patterns

**NEVER**:
- Use `.container-fluid` for main content sections
- Nest `.container` inside `.container`
- Apply `.container` to `<section>` elements (container goes INSIDE section)
- Use `.container-sm`, `.container-md`, `.container-lg`, `.container-xl` variants

### Container Positioning

**RULE**: Container MUST be centered using Bootstrap's default behavior (no additional classes needed).

**FORBIDDEN**: Adding `.mx-auto` to `.container` (redundant, Bootstrap does this by default).

---

## 3. Page Structure Skeletons

### Base Page Template Structure

**All pages follow this structure**:

```
<div class="min-vh-100">
  <header class="fixed-top">
    <div class="container">
      <!-- Header content -->
    </div>
  </header>

  <main>
    <!-- Sections -->
  </main>

  <footer>
    <div class="container">
      <!-- Footer content -->
    </div>
  </footer>
</div>
```

**Required Classes**:
- Wrapper: `.min-vh-100` (minimum viewport height)
- Header: `.fixed-top` (fixed positioning at top)
- Main: No class (plain `<main>` element)

### Main Content Offset

**RULE**: First element inside `<main>` MUST have top padding to account for fixed header.

**Implementation Options**:
1. Add `.pt-5` to `<main>` element
2. Add `.pt-5` to first section inside `<main>`

**Value**: `pt-5` = 3rem = 48px (accommodates fixed header height)

---

## 4. Section Wrapper Patterns

### Standard Section Structure

**Pattern**:
```
<section class="[vertical-padding] [background-class]">
  <div class="container">
    <!-- Section content -->
  </div>
</section>
```

### Section Vertical Padding Classes

**RULE**: All sections MUST use `.section-padding` or `.section-padding-compact` custom classes (defined in `style.css`).

| Section Type | Class | Mobile Padding | Desktop Padding |
|--------------|-------|----------------|-----------------|
| Standard content section | `.section-padding` | 5rem (80px) | 7rem (112px) |
| Compact section (CTA, events) | `.section-padding-compact` | 4rem (64px) | 5rem (80px) |

**Prohibited**: Using Bootstrap's `.py-*` utilities directly on sections (inconsistent with design system).

### Section Background Patterns

**RULE**: Background classes go on `<section>`, NOT on `.container`.

**Permitted Background Classes**:
- No background: (no class)
- Solid backgrounds: `.bg-primary`, `.bg-secondary`, `.bg-light`, `.bg-dark`
- Custom gradients: `.bg-gradient-warm`, `.bg-gradient-storybook`, `.bg-gradient-hero`
- Subtle tints: `.bg-muted-subtle`, `.bg-accent-subtle`

### Section ID Rules

**RULE**: Sections requiring anchor navigation MUST have `id` attribute.

**Pattern**: `<section id="knihy" class="section-padding">`

**Common IDs**:
- `#knihy` (books section)
- `#o-nas` (about section)
- `#proc-si-vybrat` (why choose section)
- `#recenze` (testimonials section)
- `#akce` (events section)

---

## 5. Header Structure Rules

### Header Layout Structure

**Pattern**:
```
<header class="fixed-top navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="/">
      <!-- Logo/Brand -->
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <!-- Nav items -->
      </ul>
      <!-- Optional: CTA button -->
    </div>
  </div>
</header>
```

### Required Header Classes

| Element | Classes | Purpose |
|---------|---------|---------|
| `<header>` | `.fixed-top .navbar .navbar-expand-lg` | Fixed position, navbar behavior, expand at lg breakpoint |
| Inner container | `.container` | Content width constraint |
| Brand | `.navbar-brand` | Logo/brand styling |
| Toggle button | `.navbar-toggler` | Mobile menu toggle |
| Toggle icon | `.navbar-toggler-icon` | Hamburger icon |
| Nav wrapper | `.collapse .navbar-collapse` | Collapsible nav container |
| Nav list | `.navbar-nav` | Navigation list |
| Nav list positioning | `.ms-auto` | Push nav to right side |
| Nav item | `.nav-item` | List item wrapper |
| Nav link | `.nav-link` | Link styling |

### Mobile Menu Collapse Rules

**RULE**: Navigation MUST collapse at `lg` breakpoint and below.

**Implementation**: Use `.navbar-expand-lg` on `<header>`.

**Behavior**:
- Desktop (≥1024px): `.navbar-nav` displayed inline
- Mobile (<1024px): `.navbar-nav` hidden in collapsible menu

### Header State Classes

**Dynamic class application** (via JavaScript):
- Default state: `.navbar` only
- Scrolled state: `.navbar.scrolled` (add via JS when `window.scrollY > 50`)

---

## 6. Footer Structure Rules

### Footer Layout Structure

**Pattern**:
```
<footer class="footer">
  <div class="container">
    <div class="footer-main">
      <div class="footer-brand">
        <!-- Logo, tagline, description -->
      </div>
      <nav class="footer-nav">
        <!-- Navigation links -->
      </nav>
    </div>

    <div class="footer-bottom">
      <!-- Copyright text -->
    </div>
  </div>
</footer>
```

### Footer Layout Grid Rules

**RULE**: `.footer-main` MUST use flexbox for responsive layout, NOT Bootstrap grid.

**Desktop Layout** (≥1024px):
```
.footer-main: display: flex; flex-direction: row; justify-content: space-between;
.footer-brand: width: 50%
.footer-nav: width: 50%
```

**Mobile Layout** (<1024px):
```
.footer-main: display: flex; flex-direction: column; gap: 2.5rem;
.footer-brand: width: 100%
.footer-nav: width: 100%
```

**Justification**: Bootstrap's grid adds unnecessary markup overhead. Flexbox achieves the same layout with cleaner HTML.

### Footer Divider Pattern

**RULE**: Copyright section (`.footer-bottom`) MUST have top border and top margin.

**Classes**:
- Border: `.border-top`
- Margin: `.mt-5` (3rem)
- Padding: `.pt-4` (1.5rem)

---

## 7. Grid Patterns by Context

### Homepage Grid Patterns

#### Hero Section (2-Column Desktop)

**Pattern**:
```
<section class="section-padding bg-gradient-hero">
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-12 col-lg-6">
        <!-- Left: Text content -->
      </div>
      <div class="col-12 col-lg-6">
        <!-- Right: Image/visual -->
      </div>
    </div>
  </div>
</section>
```

**Required Classes**:
- Row: `.row .g-5 .align-items-center`
- Columns: `.col-12 .col-lg-6`

**Behavior**:
- Mobile: Stacked (single column)
- Desktop (≥1024px): Side-by-side (two equal columns)

#### Books Grid (1→2→3→4 Columns)

**Pattern**:
```
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 g-md-5">
  <div class="col">
    <!-- Book card -->
  </div>
  <!-- Repeat for each book -->
</div>
```

**Required Classes**:
- Row: `.row .row-cols-1 .row-cols-sm-2 .row-cols-lg-3 .row-cols-xl-4`
- Gap: `.g-4 .g-md-5` (custom `.g-5` defined in `style.css`)
- Column: `.col` (no modifier needed, handled by `row-cols-*`)

**Behavior**:
- Mobile (base): 1 column
- Small (≥640px): 2 columns
- Large (≥1024px): 3 columns
- XL (≥1280px): 4 columns

#### About Section (Feature Cards 1→2→4)

**Pattern**:
```
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-md-5">
  <div class="col">
    <!-- Feature card -->
  </div>
  <!-- Repeat for 4 features -->
</div>
```

**Required Classes**:
- Row: `.row .row-cols-1 .row-cols-sm-2 .row-cols-lg-4`
- Gap: `.g-4 .g-md-5`
- Column: `.col`

#### Why Choose Section (2-Column with Benefits Grid)

**Pattern**:
```
<div class="row g-5 g-lg-6 align-items-center">
  <div class="col-12 col-lg-6">
    <div class="row row-cols-1 row-cols-sm-2 g-4">
      <div class="col">
        <!-- Benefit card 1 -->
      </div>
      <div class="col">
        <!-- Benefit card 2 -->
      </div>
      <div class="col">
        <!-- Benefit card 3 -->
      </div>
      <div class="col">
        <!-- Benefit card 4 -->
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-6">
    <!-- Author photo -->
  </div>
</div>
```

**Nested Grid Rules**:
- Outer row: 2 columns on desktop (left: benefits, right: image)
- Inner row: 2×2 grid within left column

### Book Detail Page Grid Patterns

#### Product Hero (2-Column Desktop)

**Pattern**: Same as Homepage Hero Section (`.row .g-5 .align-items-center` with `.col-12 .col-lg-6`)

**Column Content**:
- Left: Book cover image
- Right: Metadata, description, CTAs

#### Text Samples Section (Alternating Layout)

**Pattern**:
```
<div class="row g-5 g-lg-6 align-items-center">
  <div class="col-12 col-lg-6 order-2 order-lg-1">
    <!-- Image (left on desktop) -->
  </div>
  <div class="col-12 col-lg-6 order-1 order-lg-2">
    <!-- Text (right on desktop) -->
  </div>
</div>

<!-- Next sample (reversed) -->
<div class="row g-5 g-lg-6 align-items-center">
  <div class="col-12 col-lg-6 order-2 order-lg-2">
    <!-- Text (left on desktop) -->
  </div>
  <div class="col-12 col-lg-6 order-1 order-lg-1">
    <!-- Image (right on desktop) -->
  </div>
</div>
```

**RULE**: Use `.order-*` utilities to control visual order at different breakpoints.

**Mobile**: Image always appears BEFORE text (`.order-1` = image, `.order-2` = text)
**Desktop**: Order alternates (even samples: text-left, odd samples: image-left)

#### Related Books (3-Column Grid)

**Pattern**:
```
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-md-5">
  <div class="col">
    <!-- Related book card -->
  </div>
  <!-- Repeat for related books -->
</div>
```

**Additional Constraint**: Wrap grid in `<div class="mx-auto" style="max-width: 56rem;">` for centered, narrower layout.

### Authors Page Grid Pattern

**Pattern** (per author card):
```
<div class="row g-5 align-items-center">
  <div class="col-12 col-md-5 col-lg-4">
    <!-- Author photo -->
  </div>
  <div class="col-12 col-md-7 col-lg-8">
    <!-- Author bio -->
  </div>
</div>

<!-- Next author (reversed) -->
<div class="row g-5 align-items-center">
  <div class="col-12 col-md-7 col-lg-8 order-2 order-md-1">
    <!-- Author bio -->
  </div>
  <div class="col-12 col-md-5 col-lg-4 order-1 order-md-2">
    <!-- Author photo -->
  </div>
</div>
```

**RULE**: Author cards alternate image position using `.order-*` utilities at `md` breakpoint.

**Column Split**:
- Desktop: 40% image / 60% text (approximate using `col-md-5` / `col-md-7`)
- Mobile: Stacked (image first)

### Gallery Page Grid Pattern

**Pattern** (per gallery section):
```
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
  <div class="col">
    <!-- Gallery image -->
  </div>
  <!-- Repeat for all images in category -->
</div>
```

**Required Classes**:
- Row: `.row .row-cols-2 .row-cols-md-3 .row-cols-lg-4`
- Gap: `.g-3` (tighter gap for gallery)
- Column: `.col`

**Behavior**:
- Mobile: 2 columns
- Tablet (≥768px): 3 columns
- Desktop (≥1024px): 4 columns

### Media Page Grid Pattern

**Pattern**:
```
<div class="row row-cols-1 row-cols-md-2 g-4 g-md-5">
  <div class="col">
    <!-- Media item -->
  </div>
  <!-- Repeat for media items -->
</div>
```

**Behavior**:
- Mobile: 1 column (stacked)
- Tablet+ (≥768px): 2 columns

---

## 8. Responsive Breakpoint Usage

### Bootstrap Breakpoint Classes in Use

| Breakpoint | Min Width | Suffix | Common Usage |
|------------|-----------|--------|--------------|
| Extra small | <576px | (none) | Mobile-first base styles |
| Small | ≥576px | `sm` | Unused in this design |
| Medium | ≥768px | `md` | 2-column grids, flexbox direction change |
| Large | ≥1024px | `lg` | 3-column grids, navigation expand, major layout shifts |
| Extra large | ≥1280px | `xl` | 4-column grids, container max-width |

### Breakpoint Strategy

**RULE**: Skip `sm` breakpoint unless explicitly required.

**Standard Responsive Progression**:
- Mobile: Base classes (`.col-12`)
- Tablet: `md` classes (`.col-md-6`)
- Desktop: `lg` classes (`.col-lg-4`)
- Large Desktop: `xl` classes (`.col-xl-3`)

**Example**:
```
<div class="col-12 col-md-6 col-lg-4 col-xl-3">
```
NOT:
```
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
```

### Utility Breakpoint Pattern

**RULE**: Apply responsive utilities at `md` and `lg` breakpoints primarily.

**Common Patterns**:
- Text alignment: `.text-center .text-lg-start`
- Display utilities: `.d-none .d-lg-block`
- Flexbox direction: `.flex-column .flex-lg-row`
- Margin/padding: `.mb-4 .mb-lg-0`

---

## 9. Common Layout Composition Patterns

### Section Header Pattern

**Structure**:
```
<div class="text-center mx-auto mb-5 mb-lg-6" style="max-width: 48rem;">
  <span class="badge-section-tag mb-3">
    <!-- Section label -->
  </span>
  <h2 class="mb-4">
    <!-- Section title -->
  </h2>
  <p class="lead text-muted">
    <!-- Section description -->
  </p>
</div>
```

**Required Classes**:
- Container: `.text-center .mx-auto` with inline `max-width: 48rem;`
- Bottom margin: `.mb-5 .mb-lg-6` (responsive spacing)
- Badge: `.badge-section-tag .mb-3` (custom class)
- Title margin: `.mb-4`
- Description: `.lead .text-muted`

**Justification for Inline Style**: Bootstrap has no `.max-w-3xl` equivalent; inline style is cleaner than creating single-use utility class.

### Breadcrumb Wrapper Pattern

**Structure**:
```
<div class="container py-3">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li class="breadcrumb-item">
        <a href="/knihy/">Knihy</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        Book Title
      </li>
    </ol>
  </nav>
</div>
```

**Required Classes**:
- Container: `.container .py-3`
- Nav: `aria-label="breadcrumb"`
- List: `.breadcrumb .mb-0`
- Item: `.breadcrumb-item`
- Active item: `.breadcrumb-item.active` with `aria-current="page"`

**Positioning**: Breadcrumb goes OUTSIDE any section, directly after `<main>` opening tag.

### CTA Section Pattern

**Structure**:
```
<section class="section-padding-compact bg-primary-subtle">
  <div class="container">
    <div class="text-center mx-auto" style="max-width: 48rem;">
      <h2 class="mb-4">
        <!-- CTA headline -->
      </h2>
      <p class="lead text-muted mb-5">
        <!-- CTA description -->
      </p>
      <a href="#" class="btn btn-primary btn-lg">
        <!-- CTA button -->
      </a>
    </div>
  </div>
</section>
```

**Pattern**: Compact section with centered, narrower content block.

### Testimonial Card Pattern

**Structure**:
```
<div class="mx-auto" style="max-width: 56rem;">
  <div class="card shadow-card">
    <div class="card-body p-4 p-md-5">
      <div class="row g-4 g-md-5 align-items-center">
        <div class="col-12 col-md-auto text-center">
          <!-- Avatar image -->
        </div>
        <div class="col">
          <!-- Quote text, author name, role -->
        </div>
      </div>
    </div>
  </div>
</div>
```

**Layout**:
- Outer wrapper: Centered with `max-width: 56rem;`
- Card: Bootstrap `.card` with custom shadow
- Card body: `.card-body` with responsive padding (`.p-4 .p-md-5`)
- Inner grid: `.row .g-4 .g-md-5 .align-items-center`
- Avatar column: `.col-12 .col-md-auto .text-center`
- Quote column: `.col`

---

## 10. Enforcement Rules

### Structural Invariants (MUST)

1. **Every section MUST have a `.container` child** (no exceptions)
2. **`.container` MUST be direct child of `<section>`** (no intermediate wrappers)
3. **Header MUST use `.fixed-top` class** (no absolute/relative positioning)
4. **Main MUST have `.pt-5` or first child has `.pt-5`** (fixed header offset)
5. **All grids MUST use `.row` parent and `.col-*` children** (no direct `.col` siblings without `.row`)
6. **Breadcrumbs MUST be wrapped in `.container .py-3`** and placed before first section

### Structural Prohibitions (MUST NOT)

1. **NEVER use `.container-fluid`** for main content sections
2. **NEVER nest `.container` inside `.container`**
3. **NEVER apply background classes to `.container`** (backgrounds go on `<section>`)
4. **NEVER use `.row` without gap utility** (always specify `.g-*` or `.g-md-*`)
5. **NEVER mix `.row-cols-*` with explicit `.col-*` modifiers on children** (use one pattern, not both)
6. **NEVER use inline styles for spacing** (except max-width constraints on centered blocks)

### Grid Pattern Consistency

**RULE**: Choose grid pattern based on content type and stick to it.

**Pattern Selection Matrix**:

| Content Type | Pattern | Classes |
|--------------|---------|---------|
| Equal-width cards (responsive columns) | Row-cols pattern | `.row .row-cols-1 .row-cols-md-2 .row-cols-lg-3` |
| Asymmetric 2-column (e.g., 40/60 split) | Explicit columns | `.row` → `.col-12 .col-md-5` / `.col-12 .col-md-7` |
| Hero section (50/50 split) | Explicit columns | `.row` → `.col-12 .col-lg-6` / `.col-12 .col-lg-6` |
| Alternating layout | Explicit columns + order | `.row` → `.col-12 .col-lg-6 .order-*` |

### Spacing Consistency

**RULE**: Use semantic spacing classes, not arbitrary values.

**Gap Values**:
- Tight: `.g-3` (gallery images)
- Normal: `.g-4` (default cards)
- Generous: `.g-5` (large cards, hero sections)
- Extra generous: `.g-lg-6` (desktop-only larger gaps)

**Vertical Spacing Between Elements**:
- Use `.mb-*` utilities on elements: `.mb-3`, `.mb-4`, `.mb-5`
- Use responsive variants: `.mb-4 .mb-lg-5`

### Accessibility Requirements

**RULE**: All structural elements MUST include appropriate ARIA attributes where applicable.

**Required ARIA Patterns**:
- Breadcrumbs: `<nav aria-label="breadcrumb">`, `<li class="breadcrumb-item active" aria-current="page">`
- Header navigation: `<nav aria-label="Main navigation">`
- Footer navigation: `<nav aria-label="Footer navigation">`
- Collapsible elements: `aria-expanded`, `aria-controls`

### Validation Checklist

Before committing markup, verify:

- [ ] All sections have `.container` child
- [ ] No `.container-fluid` in main content
- [ ] Header uses `.fixed-top`
- [ ] Main or first section has header offset padding
- [ ] All grids use `.row` parent
- [ ] All `.row` elements have `.g-*` gap class
- [ ] Section backgrounds are on `<section>`, not `.container`
- [ ] Breadcrumbs placed correctly (after `<main>`, before first section)
- [ ] Responsive column classes follow breakpoint strategy
- [ ] No inline styles except `max-width` on centered content blocks
- [ ] ARIA attributes present on navigation and breadcrumbs

---

## Summary

This document defines the **HTML structure layer** using Bootstrap 5 classes:

1. **Container strategy**: Always `.container`, never `.container-fluid`
2. **Page skeleton**: Fixed header, offset main, standard footer
3. **Section pattern**: Section → container → content
4. **Grid patterns**: Defined by content type (row-cols vs explicit columns)
5. **Responsive strategy**: Mobile-first, skip `sm`, focus on `md`/`lg`/`xl`
6. **Enforcement rules**: Structural invariants and prohibitions

**Implementation order**:
1. Build page skeleton (header, main, footer)
2. Add section wrappers with containers
3. Implement grids using prescribed patterns
4. Add responsive modifiers at correct breakpoints
5. Validate against enforcement checklist

This structure provides the foundation for applying visual styles defined in `07-bootstrap-cdn-mapping.md`.
