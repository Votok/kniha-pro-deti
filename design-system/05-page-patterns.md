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

A two-column layout with generous top padding featuring the authors photo as the central visual element, with floating book covers arranged along its bottom edge.

**Layout**: 2-column grid on large screens, stacked on mobile

**Padding**: `pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24` (header-accommodating responsive padding)

| Column | Content                          | Alignment          |
| ------ | -------------------------------- | ------------------ |
| Left   | Headline, CTAs, trust indicators | Center → Left (lg) |
| Right  | Authors photo with floating books | Center            |

**Left Column Structure**:

1. Headline with gradient text span (`text-gradient-warm`)
2. Subheadline paragraph
3. Two CTA buttons (hero + outline)
4. Trust indicators row (with `pt-4` spacing): "8 knih v edici" + "Pro deti 5-12 let"

#### Right Column: Authors Photo with Floating Books

The right column contains a portrait photo of the authors with a decorative layered border, and 5 small book covers floating along the photo's bottom edge.

**Container**: `position: relative`, `flex`, `justify-center`, `items-center`, `min-h-[400px] md:min-h-[500px]`

##### Decorative Background Blurs

Two large blurred circles positioned behind the photo for ambient glow:

| Blur       | Position                | Size     | Color           | Blur Radius |
| ---------- | ----------------------- | -------- | --------------- | ----------- |
| Top-left   | `-top-8 -left-8`        | 128×128px (w-32 h-32) | `accent/30` | `blur-3xl`  |
| Bottom-right | `-bottom-8 -right-8`  | 160×160px (w-40 h-40) | `primary/20` | `blur-3xl` |

##### Authors Photo (Central Visual)

The photo uses a layered decorative frame with two offset rings behind it:

**Photo container**: `position: relative`, `z-index: 10`

**Responsive widths**:

| Breakpoint | Width     |
| ---------- | --------- |
| Mobile     | `w-80` (320px) |
| md         | `w-[352px]` |
| lg         | `w-[422px]` |

**Decorative ring layers** (back to front):

| Layer | Inset     | Border Radius | Background                                                      | Rotation |
| ----- | --------- | ------------- | --------------------------------------------------------------- | -------- |
| Outer ring | `-inset-3` | `rounded-[2.5rem]` (40px) | `bg-gradient-to-br from-primary/20 via-accent/30 to-primary/10` | `rotate-3` (3deg) |
| Inner ring | `-inset-1.5` | `rounded-[2rem]` (32px) | `bg-card/80`                                                   | `rotate-2` (2deg) |

**Photo image**:

| Property      | Value                   |
| ------------- | ----------------------- |
| Source         | `/autorky-knih.jpg`     |
| Border radius | `rounded-[1.5rem]` (24px) |
| Shadow        | `shadow-book`           |
| Object fit    | `object-cover`          |
| Position      | `relative` (sits above rings) |

##### Floating Books Row

5 book covers are positioned absolutely along the bottom edge of the photo, forming a horizontal row. They overlap the photo's bottom border, creating a "books sitting on the edge" effect. All books have `z-index: 20` (above the photo's `z-index: 10`).

**Shared book properties**:

| Property      | Value                |
| ------------- | -------------------- |
| Position      | `absolute`           |
| z-index       | `20`                 |
| Border radius | `rounded-md` (6px)   |
| Overflow      | `hidden`             |
| Shadow        | `shadow-book`        |
| Image fit     | `w-full h-auto`      |

**Individual book positions** (left to right):

| # | Book Title                    | Image File                              | Left   | Bottom | Width (mobile) | Width (md) | Rotation    | Animation       |
| - | ----------------------------- | --------------------------------------- | ------ | ------ | -------------- | ---------- | ----------- | --------------- |
| 1 | Eliska Rebelka                | `/kniha-obalka-eliska-rebelka-m.jpg`    | `20%`  | `1px` (bottom-1) | `w-16` (64px) | `w-[78px]` | `rotate(-7deg)` | `animate-float-1` |
| 2 | Viktor a zahadna teta Bobina  | `/kniha-viktor-a-zahadna-teta-bobina.jpg` | `33%` | `0.75rem` (bottom-3) | `w-16` (64px) | `w-[75px]` | `rotate(4deg)`  | `animate-float-3` |
| 3 | Eliska Detektiv               | `/kniha-obalka-eliska-detektiv-m.jpg`   | `46%`  | `0` (bottom-0) | `w-14` (56px) | `w-[70px]` | `rotate(-3deg)` | `animate-float-5` |
| 4 | Roza a ztraceny tatinek       | `/kniha-obalka-roza-a-ztraceny-tatinek.jpg` | `58%` | `0.5rem` (bottom-2) | `w-16` (64px) | `w-[75px]` | `rotate(8deg)` | `animate-float-4` |
| 5 | Tajemstvi rodiny M            | `/kniha-obalka-tajemstvi-rodiny-m.jpg`  | `69%`  | `0.75rem` (bottom-3) | `w-14` (56px) | `w-[70px]` | `rotate(15deg)` | `animate-float-2` |

**Layout observations**:

- Books span from `left: 20%` to `left: 69%`, covering roughly the central 50% of the container width
- Horizontal spacing between books: ~12-13 percentage points apart
- Bottom offsets alternate between `0`, `1px`, `0.5rem`, and `0.75rem` to create a natural uneven baseline
- Rotations alternate between negative and positive angles, increasing toward the edges (from -7deg to +15deg)
- Book sizes alternate between `w-16`/`w-14` (64px/56px mobile), creating visual rhythm
- At `md` breakpoint, books scale to 70-78px, maintaining the same proportions
- Each book uses a different float animation (1-5), creating desynchronized floating movement

**Animation assignment** (see [06-interactions-and-motion.md](06-interactions-and-motion.md) for keyframe details):

| Book # | Animation Class    | Duration | Base Rotation (rest) | Float Rotation (peak) | Vertical Travel |
| ------ | ------------------ | -------- | -------------------- | --------------------- | --------------- |
| 1      | `animate-float-1`  | 4.0s     | -8deg → -7deg (inline) | -5deg               | -15px           |
| 2      | `animate-float-3`  | 4.5s     | 6deg → 4deg (inline)   | 8deg                | -18px           |
| 3      | `animate-float-5`  | 4.8s     | 4deg → -3deg (inline)  | 6deg                | -14px           |
| 4      | `animate-float-4`  | 5.5s     | -5deg → 8deg (inline)  | -3deg               | -12px           |
| 5      | `animate-float-2`  | 5.0s     | 15deg (inline)          | 12deg               | -12px           |

> **Note on rotation interaction**: Each book has an inline `style={{ transform: "rotate(Xdeg)" }}` that sets its resting angle. The CSS animation keyframes define their own rotation values. The inline transform is overridden when the animation runs, so the **animation's keyframe rotation** is what the user actually sees. The inline style acts as a fallback/initial state before the animation starts.

##### Scroll Indicator

- Position: Below the grid, centered with `mt-12 md:mt-16`
- Layout: Vertical flex column, `align-items: center`, gap: `0.5rem`
- Text label: 0.875rem, `font-semibold`, `text-foreground/70`, text: "Objevte vice"
- Icon container:
  - Circular: `w-10 h-10` (40px), `rounded-full`
  - Background: `primary/20`
  - Icon: ChevronDown, `w-6 h-6`, color: `primary`
- Animation: `animate-bounce` on the entire indicator group

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

- Tag badge text: "Co v nich najdete" (storybook/10 background, storybook text color)
- H2 title: "Proc prave nase knihy?"

**Layout**: Single centered grid of benefit cards (no author photo — photo has moved to Hero section)

**Grid**: `sm:grid-cols-2 lg:grid-cols-4`, gap: `1.5rem` (24px), `max-w-5xl mx-auto`

**Benefits Card** (4 cards: Heart/Hodnoty pro zivot, Palette/Prekrasne ilustrace, Users/Zkusene autorky, Award/Kvalitni nakladatelstvi):

| Element     | Style                                                                    |
| ----------- | ------------------------------------------------------------------------ |
| Container   | Background: `hsl(var(--card))`, border-radius: `1rem` (16px, rounded-2xl), shadow: `shadow-soft` |
| Padding     | `1.5rem` (24px)                                                          |
| Icon Box    | Width/height: 48px (w-12 h-12), background: `hsl(var(--primary) / 0.1)`, border-radius: `0.75rem` (12px, rounded-xl) |
| Icon        | Width/height: 24px (w-6 h-6), color: `hsl(var(--primary))`              |
| Icon Hover  | Icon box background changes to `primary/20` on group hover               |
| Title       | Font: Nunito (display), size: 1.125rem (18px, text-lg), weight: 700, margin-bottom: 0.5rem |
| Description | Color: `hsl(var(--muted-foreground))`, size: 0.875rem (14px, text-sm), line-height: relaxed (1.625) |
| Hover       | Shadow: `shadow-card`, transform: `translateY(-4px)` (`hover:-translate-y-1`), transition: 300ms ease-out |
| Entrance    | Animation delays staggered: 0ms, 100ms, 200ms, 300ms (one per card)     |

> **Note**: The author photo that previously appeared in this section has been moved to the Hero section as the central visual element. This section is now purely a benefits card grid.

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

### Besedy (Workshops) Page

A specialized page for showcasing author workshops and school visits with detailed program information.

**Section Composition**:

| Section           | Background       | Purpose                          |
| ----------------- | ---------------- | -------------------------------- |
| Breadcrumb        | Transparent      | Navigation trail                 |
| Hero              | Forest @ 10%     | Page introduction with benefits  |
| Programs Grid     | Background       | Detailed workshop offerings      |
| Testimonials      | Warm Gradient    | Social proof quote               |
| Special Events CTA| Background       | Additional booking opportunities |

---

#### Hero Section (Besedy)

**Layout**: 2-column grid on large screens (content left, image right), stacked on mobile

**Container**:
- Background: `hsl(var(--forest) / 0.1)`
- Padding: 3rem (mobile) → 5rem (lg) vertical

**Left Column Structure**:
1. Category badge (Forest @ 20% background, Forest text)
2. H1 title (Display font, 1.875rem → 2.25rem → 3rem responsive)
3. Lead paragraph (1.125rem, muted color)
4. Feature pills row (inline-flex badges with icons):
   - Clock icon + duration
   - Users icon + grade levels
   - Background: Card color
   - Shadow: `shadow-soft`
   - Border-radius: 9999px (full pill)
   - Padding: `0.5rem 1rem`
   - Font-weight: 500 (medium)

**Right Column**:
- Image container: max-width 28rem (mobile) → 448px (lg), centered
- Image border-radius: `1rem` (16px)
- Image shadow: `shadow-card`
- Decorative blur circle: positioned bottom-right, `-z-10`

---

#### Programs/Workshop Cards

Horizontal cards showcasing individual workshop programs with integrated contact information.

**Card Structure**: 4-column grid on large screens (`lg:grid-cols-4`), stacked on mobile

**Container**:
- Background: Tinted theme color with low opacity
  - Options: `hsl(var(--accent) / 0.2)`, `hsl(var(--forest) / 0.1)`, `hsl(var(--storybook) / 0.1)`, `hsl(var(--primary) / 0.1)`
- Border: `1px solid hsl(var(--border) / 0.5)` — 50% opacity for subtle definition
- Border-radius: `1rem` (16px)
- Overflow: hidden (for image clipping)
- Grid gap: 0 (columns touch directly)

**Column 1: Image** (`lg:col-span-1`)

| Property      | Mobile                | Desktop (lg)           |
| ------------- | --------------------- | ---------------------- |
| Height        | 12rem (192px, h-48)   | Full height (h-auto)   |
| Width         | Full width            | Full column width      |
| Object Fit    | `cover`               | `cover`                |

**Columns 2-3: Main Content** (`lg:col-span-2`)

Padding: `1.5rem` (mobile) → `2rem` (md)

**Header**:
- Layout: Horizontal flex with icon box + text
- Gap: 1rem
- Icon box:
  - Size: 48×48px (w-12 h-12)
  - Background: `hsl(var(--card))`
  - Border-radius: `0.75rem` (12px)
  - Shadow: `shadow-soft`
  - Icon size: 24×24px (w-6 h-6)
  - Icon color: `hsl(var(--primary))`
- Title: H3, Display font, 1.25rem (mobile) → 1.5rem (md), font-weight: 700
- Subtitle: Muted color, 1rem

**Description**:
- Color: Muted foreground
- Margin-bottom: 1rem

**Activities List**:
- Unordered list with custom bullet styling
- Item spacing: `0.5rem` vertical gap
- Bullet: Primary color, bold weight
- Text: Muted foreground
- Margin-bottom: 1.5rem

**Metadata Badges**:
- Layout: Horizontal flex wrap
- Gap: `0.75rem`
- Badge style:
  - Padding: `0.375rem 0.75rem` (6px × 12px)
  - Background: `hsl(var(--card))`
  - Border-radius: 9999px (full pill)
  - Font-size: 0.875rem (14px)
  - Font-weight: 500 (medium)
  - Shadow: `shadow-soft`
  - Icon: 16×16px (w-4 h-4), inline with 0.25rem margin-right

**Column 4: Contact Sidebar** (`lg:col-span-1`)

| Property   | Value                                         |
| ---------- | --------------------------------------------- |
| Background | `hsl(var(--card))`                            |
| Padding    | `1.5rem` (24px)                               |
| Layout     | Vertical flex, justify-content: center        |

**Content**:
- Header: H4, Display font, font-weight: 700, margin-bottom: 1rem, text: "Objednat besedu"
- Contact links stack with `0.75rem` vertical gap:
  - Phone link:
    - Icon: Phone, 16×16px (w-4 h-4)
    - Text: Phone number
    - Color: Muted foreground
    - Hover: Primary color
  - Email link:
    - Icon: Mail, 16×16px (w-4 h-4), shrink-0
    - Text: Email address
    - Color: Muted foreground
    - Hover: Primary color
    - Word break: break-all (for long emails)

**Spacing**: Cards stacked with `2rem` vertical gap

---

#### Testimonials Section (Besedy)

**Background**: Warm Gradient (secondary → cream)

**Container**: Max-width 3xl, centered, padding: 4rem vertical

**Layout**: Centered blockquote with attribution

| Element         | Style                                                                |
| --------------- | -------------------------------------------------------------------- |
| Blockquote text | Font-size: 1.25rem (mobile) → 1.5rem (md), italic, color: Foreground |
| Margin-bottom   | 1.5rem                                                               |
| Attribution     | Color: Muted foreground, preceded by em dash (—)                     |
| Text alignment  | Center                                                               |

---

#### Special Events CTA

**Container**:
- Background: `hsl(var(--card))`
- Border-radius: `1rem` (16px)
- Padding: `2rem` (mobile) → `3rem` (md)
- Shadow: `shadow-card`
- Text alignment: center

**Content**:
- H2: Display font, 1.5rem (mobile) → 1.875rem (md), font-weight: 700, margin-bottom: 1rem
- Description: 1.125rem, muted color, max-width: 42rem (centered), margin-bottom: 2rem
- CTA button: Forest variant, size lg, with Mail icon

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

### Hero Section (Authors Photo + Floating Books)

```html
<section class="position-relative overflow-hidden pt-5 pt-md-6 pb-4 pb-md-5 bg-hero-gradient">
  <div class="container position-relative" style="z-index: 10;">
    <div class="row g-4 g-lg-3 align-items-center">
      <!-- Left: Content -->
      <div class="col-12 col-lg-6 text-center text-lg-start">
        <h1 class="display-4 fw-bold">
          Headline <span class="text-gradient-warm">gradient span</span>
        </h1>
        <p class="lead text-muted">Subheadline...</p>
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
          <a class="btn btn-hero btn-lg">CTA</a>
          <a class="btn btn-outline-primary btn-lg">Secondary</a>
        </div>
      </div>

      <!-- Right: Authors photo with floating books -->
      <div class="col-12 col-lg-6 position-relative d-flex justify-content-center align-items-center" style="min-height: 500px;">
        <!-- Decorative blurs -->
        <div class="position-absolute" style="top:-2rem;left:-2rem;width:8rem;height:8rem;background:hsl(var(--accent)/0.3);border-radius:50%;filter:blur(48px);"></div>
        <div class="position-absolute" style="bottom:-2rem;right:-2rem;width:10rem;height:10rem;background:hsl(var(--primary)/0.2);border-radius:50%;filter:blur(48px);"></div>

        <!-- Photo with decorative rings -->
        <div class="position-relative" style="z-index:10;">
          <div class="position-relative" style="width:422px;max-width:100%;">
            <!-- Outer ring -->
            <div class="position-absolute" style="inset:-0.75rem;border-radius:2.5rem;background:linear-gradient(to bottom right,hsl(var(--primary)/0.2),hsl(var(--accent)/0.3),hsl(var(--primary)/0.1));transform:rotate(3deg);"></div>
            <!-- Inner ring -->
            <div class="position-absolute" style="inset:-0.375rem;border-radius:2rem;background:hsl(var(--card)/0.8);transform:rotate(2deg);"></div>
            <img src="/autorky-knih.jpg" alt="Authors" class="position-relative w-100 shadow-book" style="border-radius:1.5rem;object-fit:cover;">
          </div>
        </div>

        <!-- Floating books (positioned absolutely along bottom) -->
        <div class="position-absolute animate-float-1" style="bottom:0.25rem;left:20%;width:78px;transform:rotate(-7deg);z-index:20;border-radius:0.375rem;overflow:hidden;">
          <img src="/kniha-obalka-eliska-rebelka-m.jpg" alt="Book 1" class="w-100 shadow-book">
        </div>
        <!-- Repeat for books 2-5 with respective left%, bottom, width, rotation values -->
      </div>
    </div>
  </div>
</section>
```

**Custom CSS for floating books**:
```css
/* Each book needs position:absolute, z-index:20, border-radius, overflow:hidden, shadow-book */
/* Apply animate-float-1 through animate-float-5 classes (see 06-interactions-and-motion.md) */
/* Inline transform sets the resting rotation angle */
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
