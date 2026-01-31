# Components

> Defines the core UI components, their visual appearance, variants, sizes, and interactive states.

---

## Design Philosophy

Components follow a **warm, friendly, and premium** design language:

- Rounded corners for a soft, approachable feel
- Subtle shadows that add depth without heaviness
- Smooth transitions (200–300ms) for polish
- Clear visual hierarchy through color and weight variations

---

## Buttons

### Base Characteristics

All buttons share these foundational styles:

| Property       | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| Border Radius  | `0.5rem` (lg, rounded)                                      |
| Font Weight    | 600 (semibold)                                              |
| Font Family    | Display font (Nunito)                                       |
| Transition     | 200ms all, ease-out                                         |
| Focus Ring     | 2px ring with offset, using `ring` color token             |
| Disabled State | `opacity: 0.5`, `cursor: not-allowed`, `pointer-events: none` |

### Size Variants

| Size    | Height  | Padding (H) | Border Radius | Font Size |
| ------- | ------- | ----------- | ------------- | --------- |
| Default | 2.5rem  | `1.25rem`   | `0.5rem`      | 0.875rem  |
| Small   | 2.25rem | `1rem`      | `0.375rem`    | 0.875rem  |
| Large   | 3rem    | `2rem`      | `0.75rem`     | 1rem      |
| XL      | 3.5rem  | `2.5rem`    | `0.75rem`     | 1.125rem  |
| Icon    | 2.5rem  | (square)    | `0.5rem`      | —         |

### Color Variants

| Variant     | Background  | Text               | Hover Effect                                                               |
| ----------- | ----------- | ------------------ | -------------------------------------------------------------------------- |
| Default     | Primary     | Primary Foreground | bg: `hsl(var(--primary) / 0.9)`, shadow: `shadow-card`, transform: `translateY(-2px)` |
| Destructive | Destructive | Destructive FG     | bg: `hsl(var(--destructive) / 0.9)`, shadow: `shadow-card`, transform: `translateY(-2px)` |
| Outline     | Transparent | Primary            | bg: `hsl(var(--primary))`, text: `hsl(var(--primary-foreground))`, no lift |
| Secondary   | Secondary   | Secondary FG       | bg: `hsl(var(--secondary) / 0.8)`, no lift, no shadow change              |
| Ghost       | Transparent | Foreground         | bg: `hsl(var(--accent) / 0.1)`, text: `hsl(var(--accent-foreground))`, no lift |
| Link        | Transparent | Primary            | `text-decoration: underline`, `text-underline-offset: 4px`                |
| **Hero**    | Primary     | Primary FG         | bg: `hsl(var(--primary) / 0.9)`, shadow: `shadow-book`, transform: `translateY(-4px)` |
| Storybook   | Storybook   | Storybook FG       | bg: `hsl(var(--storybook) / 0.9)`, shadow: `shadow-card`, transform: `translateY(-2px)` |
| Accent      | Accent      | Accent FG          | bg: `hsl(var(--accent) / 0.9)`, shadow: `shadow-card`, transform: `translateY(-2px)` |
| Forest      | Forest      | Forest FG          | bg: `hsl(var(--forest) / 0.9)`, shadow: `shadow-card`, transform: `translateY(-2px)` |

> [!TIP]
> The **Hero** variant is designed for primary CTAs (e.g., "Buy Book"). It has a stronger lift and shadow effect than the default button.

### Hover Behavior

- **Lift effect**: Transform with `translateY(-2px)` or `translateY(-4px)` for hero
- **Shadow escalation**: Upgrade from `shadow-soft` → `shadow-card` → `shadow-book`
- **Transition**: 200ms duration with ease-out timing

---

## Cards

### Base Card

| Property      | Value                  |
| ------------- | ---------------------- |
| Background    | Card color             |
| Border        | 1px solid Border color |
| Border Radius | `0.5rem`               |
| Shadow        | `shadow-sm` (subtle)   |

### Card Parts

| Part             | Purpose              | Spacing               |
| ---------------- | -------------------- | --------------------- |
| Card Header      | Title area           | `1.5rem` padding      |
| Card Title       | Primary heading      | 1.5rem font, semibold |
| Card Description | Subtitle/description | 0.875rem, muted       |
| Card Content     | Main content area    | `1.5rem` h-padding    |
| Card Footer      | Actions/buttons area | `1.5rem` h-padding    |

### Book Card (Custom)

The book card has specialized styling for product display:

| Property            | Value                                                                      |
| ------------------- | -------------------------------------------------------------------------- |
| Border Radius       | `1rem` (16px, 2xl)                                                         |
| Shadow              | Default: `shadow-soft`, Hover: `shadow-card`                               |
| Cover Container     | Colored background with `aspect-ratio: 3/4`                                |
| Cover Image         | `shadow-book` (prominent depth)                                            |
| Hover Transform     | `translateY(-8px) rotate(-1deg)`                                           |
| Hover Transition    | 300ms ease-out on `transform, box-shadow`                                  |
| Title Hover         | Text color changes from `foreground` to `primary`                          |
| Entrance Animation  | `fadeInUp` (0.6s) with staggered delay: card 1 = 0ms, card 2 = 100ms, card 3 = 200ms, etc. |

> [!IMPORTANT]
> Book cards use a **page curl effect** on hover — the slight rotation combined with lift creates the illusion of picking up a book.

---

## Badges

### Base Characteristics

| Property      | Value                                      |
| ------------- | ------------------------------------------ |
| Border Radius | Full pill (`9999px`)                       |
| Padding       | `0.125rem` vertical, `0.625rem` horizontal |
| Font Size     | 0.75rem (xs)                               |
| Font Weight   | 600 (semibold)                             |
| Transition    | Color changes only                         |

### Variants

| Variant     | Background  | Border      | Text Color         |
| ----------- | ----------- | ----------- | ------------------ |
| Default     | Primary     | Transparent | Primary Foreground |
| Secondary   | Secondary   | Transparent | Secondary FG       |
| Destructive | Destructive | Transparent | Destructive FG     |
| Outline     | Transparent | Border      | Foreground         |

### Section Tag Badge

Used for section headers with thematic color variations:

| Property      | Value                                                    |
| ------------- | -------------------------------------------------------- |
| Display       | inline-block                                             |
| Background    | Varies by section (see variants below)                   |
| Text Color    | Matches background color at full opacity                 |
| Padding       | 0.375rem vertical, 1rem horizontal (6px × 16px)          |
| Border Radius | 9999px (full pill)                                       |
| Font Family   | Nunito (display font)                                    |
| Font Size     | 0.875rem (14px)                                          |
| Font Weight   | 600 (semibold)                                           |

**Color Variants** (background / text):

- Default: `hsl(var(--primary) / 0.1)` / `hsl(var(--primary))`
- About/Features: `hsl(var(--accent) / 0.3)` / `hsl(var(--accent-foreground))`
- Storybook theme: `hsl(var(--storybook) / 0.1)` / `hsl(var(--storybook))`
- Forest theme: `hsl(var(--forest) / 0.1)` / `hsl(var(--forest))`

---

## Navigation

### Header

The header is a **fixed-position** navigation bar (`position: fixed; top: 0; left: 0; right: 0; z-index: 50`) that transforms on scroll:

| State         | Background         | Padding (V) | Shadow      |
| ------------- | ------------------ | ----------- | ----------- |
| Top (default) | Transparent        | `1.25rem`   | None        |
| Scrolled      | Card @ 95% opacity | `0.75rem`   | shadow-soft |

Additional scrolled state properties:

- `backdrop-filter: blur(12px)` for frosted glass effect
- Transition: 300ms all

### Navigation Links

| Property      | Value                    |
| ------------- | ------------------------ |
| Font Family   | Display font (Nunito)    |
| Font Weight   | 600 (semibold)           |
| Color         | Foreground @ 80% opacity |
| Hover Color   | Primary                  |
| Gap (Desktop) | `2rem`                   |
| Transition    | 200ms color              |

### Mobile Menu

| Property     | Value                     |
| ------------ | ------------------------- |
| Background   | Card                      |
| Shadow       | shadow-card               |
| Animation    | fade-in-up (slide down)   |
| Link Spacing | `0.5rem` vertical padding |
| Link Size    | 1.125rem (lg)             |

### Social Icons

| Property    | Value            |
| ----------- | ---------------- |
| Size        | 20×20px (icon)   |
| Padding     | `0.5rem`         |
| Color       | Muted Foreground |
| Hover Color | Primary          |

---

## Footer

### Structure

3-area layout with flexible arrangement:

**Main Footer Area** (flex layout on lg, stacked on mobile):

| Area       | Content                         | Desktop Width |
| ---------- | ------------------------------- | ------------- |
| Brand      | Logo, description, social icons | 50%           |
| Navigation | Horizontal inline nav links     | 50%           |

**Bottom Bar** (full-width, separate area below main footer):

- Copyright text
- Separated by top border

### Styling

| Property    | Value                 |
| ----------- | --------------------- |
| Background  | Foreground (inverted) |
| Text Color  | Background (inverted) |
| Padding (V) | `3rem`                |
| Gap         | `2.5rem`              |

### Brand Area

| Property          | Value                    |
| ----------------- | ------------------------ |
| Max Width         | `28rem`                  |
| Description Color | Background @ 70% opacity |
| Description MB    | `1.5rem`                 |

### Footer Navigation Links

| Property | Value                    |
| -------- | ------------------------ |
| Layout   | Horizontal flex wrap     |
| Gap      | `2rem` horizontal        |
| Color    | Background @ 70% opacity |
| Hover    | Primary                  |
| Font     | Medium weight            |

### Footer Social Buttons

| Property      | Value                    |
| ------------- | ------------------------ |
| Size          | 40×40px                  |
| Background    | Background @ 10% opacity |
| Hover Bg      | Primary                  |
| Border Radius | `0.5rem`                 |
| Icon Size     | 20×20px                  |
| Gap           | `0.75rem`                |

### Bottom Bar

| Property    | Value                      |
| ----------- | -------------------------- |
| Margin Top  | `2.5rem`                   |
| Border Top  | 1px solid Background @ 10% |
| Padding Top | `1.5rem`                   |
| Font Size   | 0.875rem                   |
| Text Color  | Background @ 50%           |
| Alignment   | Center on mobile, left lg  |

---

## Breadcrumbs

### Structure

Horizontal list with chevron separators:

| Property       | Value                 |
| -------------- | --------------------- |
| Font Size      | 0.875rem              |
| Text Color     | Muted Foreground      |
| Gap            | `0.375rem`–`0.625rem` |
| Separator Icon | Chevron Right (14px)  |

### States

| State          | Color            |
| -------------- | ---------------- |
| Link (default) | Muted Foreground |
| Link (hover)   | Foreground       |
| Current Page   | Foreground       |

---

## Trust Indicators

Small inline indicators for social proof (e.g., "1000+ satisfied readers"):

| Property     | Value                                |
| ------------ | ------------------------------------ |
| Layout       | Inline-flex, align-items: center     |
| Icon Size    | 16×16px                              |
| Icon Color   | `hsl(var(--primary))`                |
| Text Size    | 0.875rem (14px)                      |
| Text Weight  | 600 (semibold)                       |
| Text Color   | `hsl(var(--foreground))`             |
| Gap          | 0.375rem (6px) between icon and text |
| Container Gap | 1.5rem (24px) between multiple indicators when displayed in a row |

---

## Bootstrap Mapping Notes

### Buttons

| Design Variant | Bootstrap Mapping                         |
| -------------- | ----------------------------------------- |
| Default        | `btn btn-primary`                         |
| Outline        | `btn btn-outline-primary`                 |
| Secondary      | `btn btn-secondary`                       |
| Destructive    | `btn btn-danger`                          |
| Ghost          | `btn btn-link` (customized)               |
| Hero           | Custom class `btn-hero` extending primary |

Button sizes map to Bootstrap size classes:

- Small → `btn-sm`
- Large → `btn-lg`
- XL → Custom class needed

### Cards

Bootstrap's card component provides the structure:

- `.card` → base container
- `.card-header`, `.card-body`, `.card-footer` → sections
- Add custom class `.book-card` for product cards with hover effects

### Badges

| Design Variant | Bootstrap Mapping       |
| -------------- | ----------------------- |
| Default        | `badge bg-primary`      |
| Secondary      | `badge bg-secondary`    |
| Destructive    | `badge bg-danger`       |
| Outline        | `badge border` (custom) |

### Navigation

- Use Bootstrap's `.navbar` with `.navbar-expand-md`
- Apply `.fixed-top` for sticky behavior
- Add custom JavaScript for scroll-based style changes
- Use `.navbar-toggler` for mobile menu button

### Breadcrumbs

Use Bootstrap's breadcrumb component:

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Current</li>
  </ol>
</nav>
```

> [!TIP]
> Override Bootstrap's default chevron separator with custom CSS if needed to match the design.
