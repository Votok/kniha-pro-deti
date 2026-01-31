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

| Property       | Value                  |
| -------------- | ---------------------- |
| Border Radius  | `0.5rem` (lg, rounded) |
| Font Weight    | 600 (semibold)         |
| Font Family    | Display font (Nunito)  |
| Transition     | 200ms all, ease-out    |
| Focus Ring     | 2px ring with offset   |
| Disabled State | 50% opacity            |

### Size Variants

| Size    | Height  | Padding (H) | Border Radius | Font Size |
| ------- | ------- | ----------- | ------------- | --------- |
| Default | 2.5rem  | `1.25rem`   | `0.5rem`      | 0.875rem  |
| Small   | 2.25rem | `1rem`      | `0.375rem`    | 0.875rem  |
| Large   | 3rem    | `2rem`      | `0.75rem`     | 1rem      |
| XL      | 3.5rem  | `2.5rem`    | `0.75rem`     | 1.125rem  |
| Icon    | 2.5rem  | (square)    | `0.5rem`      | —         |

### Color Variants

| Variant     | Background  | Text               | Hover Effect                           |
| ----------- | ----------- | ------------------ | -------------------------------------- |
| Default     | Primary     | Primary Foreground | bg opacity 90%, shadow-card, lift -2px |
| Destructive | Destructive | Destructive FG     | bg opacity 90%                         |
| Outline     | Transparent | Primary            | Fill with Primary bg                   |
| Secondary   | Secondary   | Secondary FG       | bg opacity 80%                         |
| Ghost       | Transparent | —                  | bg Accent, text Accent FG              |
| Link        | Transparent | Primary            | Underline                              |
| **Hero**    | Primary     | Primary FG         | shadow-book, lift -4px                 |
| Storybook   | Storybook   | Storybook FG       | shadow-card, lift -2px                 |
| Accent      | Accent      | Accent FG          | shadow-card, lift -2px                 |
| Forest      | Forest      | Forest FG          | shadow-card, lift -2px                 |

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

| Property          | Value                                    |
| ----------------- | ---------------------------------------- |
| Border Radius     | `1rem` (2xl)                             |
| Shadow            | `shadow-soft` → `shadow-card` on hover   |
| Cover Container   | Colored background with aspect ratio 3:4 |
| Cover Image       | `shadow-book` (prominent depth)          |
| Hover Transform   | `translateY(-8px) rotate(-1deg)`         |
| Title Hover       | Text color changes to Primary            |
| Stagger Animation | 100ms delay per card                     |

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

Used for section headers (e.g., "Naše knihy"):

| Property      | Value                  |
| ------------- | ---------------------- |
| Background    | Accent at 30% opacity  |
| Text Color    | Accent Foreground      |
| Padding       | `0.375rem` v, `1rem` h |
| Border Radius | Full pill              |
| Font Size     | 0.875rem               |
| Font Weight   | 600                    |

---

## Navigation

### Header

The header is a **sticky/fixed** navigation bar that transforms on scroll:

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

2-area flex layout on desktop, stacked on mobile:

| Area       | Content                         |
| ---------- | ------------------------------- |
| Brand      | Logo, description, social icons |
| Navigation | Horizontal inline nav links     |
| Bottom Bar | Copyright only                  |

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

Small inline indicators for social proof:

| Property    | Value          |
| ----------- | -------------- |
| Icon Size   | 16×16px        |
| Icon Color  | Primary        |
| Text Size   | 0.875rem       |
| Text Weight | 600 (semibold) |
| Gap         | `0.375rem`     |

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
