# Page Patterns

> Defines the structure and layout patterns for each page type, including section composition, grid layouts, and visual hierarchy.

---

## Page Structure Overview

All pages follow this consistent structure:

```
┌────────────────────────────────────────┐
│              Fixed Header              │
├────────────────────────────────────────┤
│                                        │
│              Main Content              │
│         (page-specific sections)       │
│                                        │
├────────────────────────────────────────┤
│               Footer                   │
└────────────────────────────────────────┘
```

### Common Properties

| Property      | Value                    |
| ------------- | ------------------------ |
| Min Height    | 100vh                    |
| Header Offset | `6rem` (pt-24) for pages |
| Background    | Background color         |

---

## Homepage Pattern

The homepage consists of 5 distinct sections stacked vertically:

### Section Composition

| Order | Section      | Background         | Padding (V)     |
| ----- | ------------ | ------------------ | --------------- |
| 1     | Hero         | Hero Gradient      | Responsive top  |
| 2     | Books        | Background         | `5rem` / `7rem` |
| 3     | Why Choose   | Warm Gradient      | `5rem` / `7rem` |
| 4     | Testimonials | Storybook Gradient | `5rem` / `7rem` |
| 5     | Events       | Muted @ 30%        | `4rem` / `5rem` |

---

### Hero Section

A two-column layout with generous top padding that creates visual impact:

**Layout**: 2-column grid on large screens, stacked on mobile

**Padding**: `pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24` (header-accommodating responsive padding)

| Column | Content                          | Alignment          |
| ------ | -------------------------------- | ------------------ |
| Left   | Headline, CTAs, trust indicators | Center → Left (lg) |
| Right  | Floating book covers display     | Center             |

**Left Column Structure**:

1. Headline with gradient text span
2. Subheadline paragraph
3. Two CTA buttons (hero + outline)
4. Trust indicators row (with `pt-4` spacing)

**Right Column: Floating Books**

- 5 book covers positioned with `position: absolute` in a decorative arrangement
- Specific positioning for each book (from center):
  - Book 1: top-left, `rotate(-8deg)`, scale 0.8
  - Book 2: top-right, `rotate(6deg)`, scale 0.7
  - Book 3: center, `rotate(0deg)`, scale 1.0 (largest/featured)
  - Book 4: bottom-left, `rotate(-5deg)`, scale 0.75
  - Book 5: bottom-right, `rotate(4deg)`, scale 0.85
- Each book uses `float` animation with staggered delays (0s, 0.5s, 1s, 1.5s, 2s)
- Container has `position: relative` for absolute positioning context
- 2-3 decorative blur circles (`blur(80px)`, `opacity: 0.3`) positioned behind books

**Scroll Indicator**:

- Position: `absolute`, `bottom: 2rem`, `left: 50%`, `transform: translateX(-50%)`
- Layout: Vertical flex column, `align-items: center`, gap: 0.5rem
- Text label: 0.875rem, `hsl(var(--muted-foreground))`, "Scroll to explore"
- Button:
  - Circular: width/height 40px, border-radius: 50%
  - Background: `hsl(var(--card))`
  - Shadow: `shadow-soft`
  - Icon: Chevron down, 20×20px, color: `hsl(var(--primary))`
- Animation: `bounce` (2s ease-in-out infinite) on button only
- Hover: button background → `hsl(var(--primary))`, icon color → `hsl(var(--primary-foreground))`

---

### Books Section

**Header**: Centered section header with tag, H2, description

**Grid Layout**:

- 1 → 2 (sm) → 3 (lg) → 4 (xl) columns
- Gap: `1.5rem` / `2rem`

**Book Cards**: See [04-components.md](file:///04-components.md) for detailed book card specs

**Help Text**: Centered paragraph below grid with inline link

---

### Why Choose Section

**Background**: Warm Gradient

**Header**: Centered section header with storybook-colored tag badge

**Layout**: 2-column grid on large screens (benefits cards + author photo), stacked on mobile

| Column | Content                |
| ------ | ---------------------- |
| Left   | 2×2 benefits card grid |
| Right  | Author photo           |

**Benefits Card**:

| Element     | Style                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Container   | Background: `hsl(var(--card))`, border-radius: `1rem` (16px), shadow: `shadow-soft` |
| Padding     | `1.5rem` (24px)                                                          |
| Icon Box    | Width/height: 48px, background: `hsl(var(--primary) / 0.1)`, border-radius: `0.75rem` (12px) |
| Icon        | Width/height: 24px, color: `hsl(var(--primary))`                        |
| Title       | Font: Nunito (display), size: 1.125rem (18px), weight: 700, margin-bottom: 0.5rem |
| Description | Color: `hsl(var(--muted-foreground))`, size: 0.875rem (14px), line-height: 1.6 |
| Hover       | Shadow: `shadow-card`, transform: `translateY(-4px)`, transition: 300ms ease-out |
| Entrance    | Animation: `fadeInUp` with staggered delays (0ms, 100ms, 200ms, 300ms)  |

**Author Photo**:

| Element       | Style                                                                |
| ------------- | -------------------------------------------------------------------- |
| Image Size    | Width: 320px (mobile) → 420px (lg), height: auto (maintains aspect) |
| Border Radius | `1rem` (16px)                                                        |
| Shadow        | `shadow-book`                                                        |
| Hover         | Transform: `scale(1.05)`, transition: 300ms ease-out (optional feature) |
| Caption       | Floating card positioned at bottom with `position: absolute`, `bottom: 1rem`, rounded-full pill shape, padding: `0.5rem 1rem` |
| Decorative    | 2-3 blurred circles (`blur(80px)`) with `hsl(var(--accent) / 0.3)` and `hsl(var(--primary) / 0.3)`, positioned behind with `z-index: -1` |

---

### Testimonials Section

**Background**: Storybook Gradient (soft blue top fading to background)

**Layout**: Single featured testimonial card, centered with max-width constraint

**Container**: Max-width `56rem` (4xl), centered

**Featured Testimonial Card**:

| Element        | Style                                         |
| -------------- | --------------------------------------------- |
| Container      | Card bg, `1.5rem` radius (3xl), `shadow-card` |
| Padding        | `2rem` / `3rem` (md)                          |
| Quote Icon     | Floating above card (-20px top)               |
| Quote Icon Box | 48×48px, Primary bg, `0.75rem` radius         |

**Card Layout**: Horizontal flex on desktop (photo + content), stacked on mobile

| Element     | Style                                                      |
| ----------- | ---------------------------------------------------------- |
| Photo       | 128px (mobile) → 160px (lg), `border-radius: 50%`, `shadow-book` |
| Quote Text  | 1.25rem (mobile) → 1.5rem (lg), weight 500, line-height 1.6 |
| Author Name | Display font (Nunito), 1.25rem, weight 700                 |
| Author Role | Muted foreground, 0.875rem                                 |
| Gap         | 2rem (mobile) → 3rem (md)                                  |

---

### Events Section (CTA Banner)

**Container**: Rounded card (`1.5rem` radius) with warm gradient background

**Layout**: Two-column flexbox, stacked on mobile

| Column | Content                  |
| ------ | ------------------------ |
| Left   | Tag, headline, text, CTA |
| Right  | Stats pills row          |

**Stats Pills**:

- Card background, `0.75rem` radius, `shadow-soft`
- Icon + label pair
- Icons use different theme colors (forest, storybook, primary)

**Decorative Elements**: Blurred circles in corners

---

## Book Detail Pattern

A product-focused page with multiple content sections:

### Section Composition

| Section       | Background           | Purpose                |
| ------------- | -------------------- | ---------------------- |
| Breadcrumb    | Transparent          | Navigation trail       |
| Product Hero  | Book color (dynamic) | Main product display   |
| Text Samples  | Background           | Excerpts from the book |
| Testimonial   | Warm Gradient        | Author/reader quote    |
| Related Books | Muted @ 30%          | Cross-sell grid        |
| CTA Banner    | Primary @ 10%        | Final purchase prompt  |

---

### Breadcrumb

- Container padding: `1rem` vertical
- Structure: Home → Books → [Book Title]

---

### Product Hero

**Layout**: 2-column grid on large screens

| Column | Content                          |
| ------ | -------------------------------- |
| Left   | Book cover with decorative blurs |
| Right  | Metadata, description, CTAs      |

**Book Cover Display**:

- Large scaled image (16rem → 24rem)
- `shadow-book` for depth
- Hover: scale 105%
- Decorative blur circles behind

**Product Info**:

1. Series badge (pill)
2. Title (H1)
3. Author line
4. Metadata pills (age, publisher, year, stars)
5. Long description
6. Two CTA buttons (hero + outline)

**Metadata Pills**:

- Display: inline-flex, align-items: center, gap: 0.5rem
- Background: `hsl(var(--card))`
- Shadow: `shadow-soft`
- Border-radius: 9999px (full pill)
- Padding: `0.5rem 1rem` (8px vertical, 16px horizontal)
- Font-size: 0.875rem (14px)
- Font-weight: 500 (medium)
- Icon size: 16×16px
- Icon color: `hsl(var(--muted-foreground))`
- Text color: `hsl(var(--foreground))`
- Layout: Horizontal flex row with multiple pills, gap: 0.75rem

---

### Text Samples Section

**Header**: Centered with storybook-colored tag

**Layout**: Alternating 2-column layouts (stacked on mobile, side-by-side on lg)

Each sample alternates image/text positions:

| Sample # | Mobile Order       | Desktop Layout (lg)   |
| -------- | ------------------ | --------------------- |
| 1        | Image, then text   | Image left, text right |
| 2        | Image, then text   | Text left, image right |
| 3        | Image, then text   | Image left, text right |
| n (odd)  | Image, then text   | Image left, text right |
| n (even) | Image, then text   | Text left, image right |

**Sample Card Structure**:

- Image container with `shadow-soft` and colored offset div behind (8px offset, uses theme colors)
- Sample title (H3, 1.5rem, bold)
- 2-4 body paragraphs with 1rem bottom margin
- Grid gap: 2rem (mobile) → 3rem (lg)

---

### Inline Testimonial (Book-specific)

**Container**: Card bg, `1rem` radius, `shadow-card`

**Structure**:

- Quote icon box floating above (-20px)
- Horizontal layout: avatar + quote/author

**Avatar**: 96–128px with ring decoration

---

### Related Books Section

**Header**: Centered H2 with series name

**Grid**: 3-column on lg, max-width constrained (4xl)

**Cards**: Simplified book cards with hover lift

---

### CTA Banner

**Container**: Centered text block with Primary @ 10% background

**Content**: H2, supporting text, hero button

---

## Listing Pages

### Authors Page (Autori)

**Page Header**:

- Tag badge, H1, description paragraph
- Max-width 3xl, centered

**Cards Layout**:

- Vertical stack with `3rem` / `4rem` spacing
- Full-width alternating cards

**Author Card**:

| Row Type | Layout                          |
| -------- | ------------------------------- |
| Odd      | Image left (2/5), content right |
| Even     | Content left, image right (2/5) |

**Card Structure**:

- No border, `shadow-card`
- Image: aspect 4:5, object-cover
- Content padding: `1.5rem` → `3rem`
- Title: H2, Display font
- Bio: Multi-paragraph prose

---

### Gallery Page (Galerie)

**Structure**:

1. Breadcrumb
2. Mini Hero (accent tinted)
3. Categorized gallery sections
4. CTA section

**Mini Hero**:

- Background: `hsl(var(--accent) / 0.1)` — accent color at 10% opacity
- Centered content: tag badge, H1 title, description paragraph
- Max-width: 48rem (768px), centered with `margin: 0 auto`
- Padding: 4rem (mobile) → 6rem (lg) vertical

**Gallery Section**:

- Section title (H2)
- 2 → 3 → 4 column grid
- `1rem` gap

**Gallery Image**:

| Property          | Default State          | Hover State                                             |
| ----------------- | ---------------------- | ------------------------------------------------------- |
| Container         | `aspect-ratio: 1/1`, `overflow: hidden`, `position: relative` | — |
| Border Radius     | `0.75rem` (12px)       | —                                                       |
| Shadow            | `shadow-soft`          | `shadow-card`                                           |
| Image Transform   | `scale(1)`             | `scale(1.1)` — zooms in 10%                             |
| Overlay           | `opacity: 0`           | `opacity: 1`, background: `hsl(var(--foreground) / 0.2)` |
| Transition (img)  | —                      | `transform 500ms ease-out`                              |
| Transition (overlay) | —                   | `opacity 300ms ease-out`                                |
| Cursor            | —                      | `pointer`                                               |

> [!TIP]
> Gallery images are ready for lightbox integration. The hover effect provides visual feedback for clickable items.

---

### Media Page (Média)

A content-rich page showcasing press coverage, interviews, and reviews with visual categorization.

**Section Composition**:

| Section            | Background      | Purpose                     |
| ------------------ | --------------- | --------------------------- |
| Breadcrumb         | Transparent     | Navigation trail            |
| Hero               | Background      | Page introduction with badge |
| Media Items        | Background      | Main content grid           |
| Scanned Articles   | Storybook @ 10% | Visual press gallery        |
| Media CTA          | Background      | Contact for media inquiries |

---

#### Hero Section

**Container**: Max-width 3xl, centered, padding: 5rem (mobile) → 7rem (lg) vertical

**Structure**:
1. Category badge (Storybook @ 30% background)
2. H1 title (Display font, 2.5rem → 3rem → 4rem responsive)
3. Lead paragraph (1.25rem, muted color)

**Badge**:
- Display: inline-block
- Padding: `0.375rem 1rem` (6px vertical, 16px horizontal)
- Background: `hsl(var(--storybook) / 0.3)`
- Border-radius: 9999px (full pill)
- Font-size: 0.875rem (14px)
- Font-weight: 600 (semibold)
- Color: `hsl(var(--storybook-foreground))`

---

#### Media Items Grid

**Layout**: 2-column grid on medium screens, single column on mobile
- Gap: `1.5rem` (24px)
- Container: Max-width constrained

**Media Card**:

| Element         | Style                                                                |
| --------------- | -------------------------------------------------------------------- |
| Container       | `<article>`, full height, padding: `1.5rem` (24px), border-radius: `1rem` (16px) |
| Background      | Type-specific: `hsl(var(--forest) / 0.1)`, `hsl(var(--primary) / 0.1)`, `hsl(var(--storybook) / 0.1)` |
| Border          | `border: 1px solid hsl(var(--border) / 0.5)`                        |
| Shadow (hover)  | `shadow-card`                                                        |
| Transform (hover) | `translateY(-4px)`                                                  |
| Transition      | `all 300ms ease-out`                                                 |

**Card Header**:
- Layout: Horizontal flex, align-items: start, gap: 1rem
- Icon badge: 48×48px box with icon inside
- Icon badge background: `hsl(var(--card))`
- Icon badge border-radius: `0.75rem` (12px)
- Icon badge shadow: `shadow-soft`
- Icon size: 24×24px, color: `hsl(var(--primary))`

**Card Content**:
- Source label: 0.75rem (12px), font-weight: 500, color: `hsl(var(--muted-foreground))`
- Title: H3, 1.125rem (18px), font-weight: 700, margin-bottom: 0.5rem
- Title hover: `color: hsl(var(--primary))`, underline
- Description: 0.875rem (14px), line-height: 1.6, color: `hsl(var(--muted-foreground))`
- Line clamp: 2 lines max with ellipsis

**Optional Elements**:
- Image: If present, display below description with `border-radius: 0.75rem`, `shadow-soft`, margin-top: 1rem
- Audio player: HTML5 `<audio controls>`, full width, margin-top: 1rem

**Icon Type Mapping**:

| Media Type | Icon      | Color Theme |
| ---------- | --------- | ----------- |
| Article    | Newspaper | Forest      |
| Review     | Message   | Primary     |
| TV         | TV        | Storybook   |
| Radio      | Radio     | Accent      |

---

#### Scanned Articles Gallery

**Container**:
- Background: `hsl(var(--storybook) / 0.1)`
- Padding: 5rem (mobile) → 7rem (lg) vertical

**Header**: Centered H2, max-width 3xl

**Gallery Grid**:
- Columns: 2 (mobile) → 4 (desktop)
- Gap: `1rem` (mobile) → `1.5rem` (desktop)
- Max-width: Contained

**Gallery Item**:

| Element       | Style                                                                |
| ------------- | -------------------------------------------------------------------- |
| Container     | `<button>`, `aspect-ratio: 3/4`, `position: relative`, full rounded corners |
| Image         | `object-fit: cover`, full width/height                               |
| Border-radius | `0.75rem` (12px)                                                     |
| Shadow        | `shadow-soft` → `shadow-card` on hover                               |
| Overlay       | Gradient: `linear-gradient(to top, hsl(0 0% 0% / 0.7), transparent)` |
| Overlay opacity | `opacity: 0` → `opacity: 1` on group hover                         |
| Icon position | Absolute centered with text label                                    |
| Icon          | Zoom In icon, 24×24px, white color                                   |
| Text          | "Zobrazit", 0.875rem, white, below icon                             |
| Cursor        | `pointer`                                                            |

**Lightbox**: Use Dialog/Modal component with close button, full-size image display

---

#### Media Collaboration CTA

**Container**:
- Padding: 4rem vertical
- Max-width: 42rem (672px), centered
- Text alignment: center

**Content**:
- H2: 1.875rem (30px), font-weight: 700, margin-bottom: 1rem
- Description: 1.125rem, muted color, margin-bottom: 1.5rem
- CTA button: Hero style with email link (`mailto:`)

---

---

## Content Section Patterns

### Standard Section Header

Used across multiple sections:

| Element     | Style                                  |
| ----------- | -------------------------------------- |
| Container   | Max-width 3xl, centered, margin-bottom |
| Tag Badge   | Colored pill with section label        |
| Title       | H2, Display font, 3–5xl responsive     |
| Description | 1.125rem, muted, optional              |

### Section Backgrounds

| Pattern              | CSS Value                                                                        | When to use                                      |
| -------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------ |
| Background           | `background: hsl(var(--background))`                                             | Default content sections                         |
| Warm Gradient        | `background: linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(40 35% 96%) 100%)` | Emphasis sections, why choose, events      |
| Storybook Gradient   | `background: linear-gradient(180deg, hsl(210 40% 96%) 0%, hsl(var(--background)) 100%)` | Testimonials section                   |
| Storybook @ 10%      | `background: hsl(var(--storybook) / 0.1)`                                        | Scanned articles gallery, media page sections    |
| Muted @ 30%          | `background: hsl(var(--muted) / 0.3)`                                            | Subtle differentiation, deprecated               |
| Primary @ 10%        | `background: hsl(var(--primary) / 0.1)`                                          | Call-to-action banners, CTA sections             |
| Accent @ 10%         | `background: hsl(var(--accent) / 0.1)`                                           | Mini heroes, gallery page header                 |
| Book Color (dynamic) | `background: hsl(var(--book-color))` — set via inline style or data attribute   | Product hero sections (color from book metadata) |

---

## Bootstrap Mapping Notes

### Page Structure

Use Bootstrap's container and grid system:

```html
<div class="min-vh-100">
  <header><!-- Fixed navbar --></header>
  <main class="pt-5"><!-- Sections --></main>
  <footer><!-- Footer --></footer>
</div>
```

### Section Layout

```html
<section class="py-5 py-md-6 bg-light">
  <div class="container">
    <!-- Section header -->
    <div class="text-center mx-auto" style="max-width: 48rem;">
      <span class="badge rounded-pill bg-primary-subtle text-primary mb-3">Tag</span>
      <h2 class="display-5 fw-bold mb-3">Title</h2>
      <p class="lead text-muted">Description</p>
    </div>

    <!-- Content grid -->
    <div class="row g-4">
      <!-- Cards/content -->
    </div>
  </div>
</section>
```

### Responsive Grids

| Design Pattern | Bootstrap Classes                            |
| -------------- | -------------------------------------------- |
| 1 → 2 → 4      | `row-cols-1 row-cols-sm-2 row-cols-lg-4`     |
| 1 → 2 → 3 → 4  | Add `row-cols-xl-4`                          |
| 2-column hero  | `col-12 col-lg-6`                            |
| Author cards   | Custom `flex-md-row` / `flex-md-row-reverse` |

### Alternating Layouts

For alternating image/content pairs (author cards, text samples):

```html
<div class="d-flex flex-column flex-md-row">...</div>
<div class="d-flex flex-column flex-md-row-reverse">...</div>
```

### Media Page Implementation

**Media Cards Grid**:
```html
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <article class="h-100 p-4 rounded-3 border border-opacity-50 transition-all">
      <div class="d-flex align-items-start gap-3">
        <div class="icon-badge">
          <!-- Icon (Bootstrap Icons or custom SVG) -->
        </div>
        <div class="flex-grow-1">
          <p class="small fw-medium text-muted mb-1">Source</p>
          <h3 class="h5 fw-bold mb-2">
            <a href="#" class="text-decoration-none text-dark hover-primary">Title</a>
          </h3>
          <p class="small text-muted mb-0">Description...</p>
        </div>
      </div>
    </article>
  </div>
</div>
```

**Scanned Articles Gallery**:
```html
<section class="py-5 py-md-6" style="background: hsl(var(--storybook) / 0.1);">
  <div class="container">
    <h2 class="text-center mb-5">Napsali o nás</h2>
    <div class="row row-cols-2 row-cols-md-4 g-3 g-md-4">
      <div class="col">
        <button class="gallery-item position-relative w-100 border-0 p-0" data-bs-toggle="modal" data-bs-target="#imageModal">
          <img src="..." alt="..." class="img-fluid rounded-3 shadow-sm">
          <div class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center opacity-0">
            <!-- Zoom icon -->
            <span class="text-white small">Zobrazit</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</section>
```

**Custom CSS Required**:
```css
.icon-badge {
  width: 48px;
  height: 48px;
  background: hsl(var(--card));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-soft);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item img {
  aspect-ratio: 3/4;
  object-fit: cover;
}

article:hover {
  box-shadow: var(--shadow-card);
  transform: translateY(-4px);
}
```

> [!IMPORTANT]
> Use CSS custom properties for section backgrounds and gradients. Bootstrap's utility classes alone won't cover the gradient patterns — define them in your custom stylesheet.
