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

The homepage consists of 6 distinct sections stacked vertically:

### Section Composition

| Order | Section      | Background         | Padding (V)     |
| ----- | ------------ | ------------------ | --------------- |
| 1     | Hero         | Hero Gradient      | Responsive top  |
| 2     | About        | Warm Gradient      | `5rem` / `7rem` |
| 3     | Books        | Background         | `5rem` / `7rem` |
| 4     | Why Choose   | Warm Gradient      | `5rem` / `7rem` |
| 5     | Testimonials | Storybook Gradient | `5rem` / `7rem` |
| 6     | Events       | Muted @ 30%        | `4rem` / `5rem` |

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

- 5 book covers positioned absolutely in a scattered arrangement
- Each book has slight rotation (-8° to +6°)
- Books float with different animation delays (staggered)
- Center book is largest and featured
- Decorative blur circles behind

**Scroll Indicator**:

- Positioned at bottom center
- Bounce animation
- Text label + circular button with chevron

---

### About Section (Features Grid)

**Header**: Centered section header with tag badge, H2, and description

**Grid Layout**:

- 1 column (mobile) → 2 columns (sm) → 4 columns (lg)
- Gap: `1.5rem` / `2rem`

**Feature Card**:

| Element     | Style                                    |
| ----------- | ---------------------------------------- |
| Container   | Card bg, `1rem` radius, `shadow-soft`    |
| Icon Box    | 56×56px, Primary @ 10%, `0.75rem` radius |
| Icon        | 28×28px, Primary color                   |
| Title       | Display font, 1.25rem, bold              |
| Description | Muted foreground, relaxed line-height    |
| Hover       | `shadow-card`, lift -4px                 |
| Stagger     | 100ms animation delay per card           |

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

| Element     | Style                                       |
| ----------- | ------------------------------------------- |
| Container   | Card bg, `1rem` radius (2xl), `shadow-soft` |
| Padding     | `1.5rem`                                    |
| Icon Box    | 48×48px, Primary @ 10%, `0.75rem` radius    |
| Icon        | 24×24px, Primary color                      |
| Title       | Display font, 1.125rem, bold                |
| Description | Muted foreground, 0.875rem, relaxed         |
| Hover       | `shadow-card`, lift -4px                    |
| Stagger     | 100ms animation delay per card              |

**Author Photo**:

| Element       | Style                                 |
| ------------- | ------------------------------------- |
| Image Size    | 320–420px width                       |
| Border Radius | `1rem` (2xl)                          |
| Shadow        | `shadow-book`                         |
| Hover         | Scale 105% (optional)                 |
| Caption       | Floating card at bottom, pill shape   |
| Decorative    | Blurred accent/primary circles behind |

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

| Element     | Style                               |
| ----------- | ----------------------------------- |
| Photo       | 128–160px circle, `shadow-book`     |
| Quote Text  | 1.25–1.5rem, medium weight, relaxed |
| Author Name | Display font, 1.25rem, bold         |
| Author Role | Muted foreground                    |
| Gap         | `2rem` / `3rem` (md)                |

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

- Card bg, `shadow-soft`, pill shape
- Icon + text pairs

---

### Text Samples Section

**Header**: Centered with storybook-colored tag

**Layout**: Alternating image/text rows

| Row  | Layout                 |
| ---- | ---------------------- |
| Odd  | Image left, text right |
| Even | Text left, image right |

**Sample Card**:

- Image with shadow and colored offset behind
- Sample title (H3)
- Multiple paragraphs

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

- Accent @ 10% background
- Centered tag, H1, description

**Gallery Section**:

- Section title (H2)
- 2 → 3 → 4 column grid
- `1rem` gap

**Gallery Image**:

| Property      | Value                         |
| ------------- | ----------------------------- |
| Aspect Ratio  | 1:1 (square)                  |
| Border Radius | `0.75rem`                     |
| Shadow        | `shadow-soft` → `shadow-card` |
| Hover Image   | Scale 110% (500ms)            |
| Hover Overlay | Foreground @ 20%              |

> [!TIP]
> Gallery images are ready for lightbox integration. The hover effect provides visual feedback for clickable items.

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

| Pattern       | When to use                   |
| ------------- | ----------------------------- |
| Background    | Default content sections      |
| Warm Gradient | Emphasis, testimonials, about |
| Muted @ 30%   | Subtle differentiation        |
| Primary @ 10% | Call-to-action banners        |
| Book Color    | Product heroes (dynamic)      |

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

> [!IMPORTANT]
> Use CSS custom properties for section backgrounds and gradients. Bootstrap's utility classes alone won't cover the gradient patterns — define them in your custom stylesheet.
