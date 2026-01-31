# Typography System

> Defines the complete typography system for the children's book website, including font families, type scale, font weights, and text styling.

---

## Design Philosophy

The typography creates a friendly, approachable, and readable experience:

- **Display headings** use Nunito — rounded, warm, and playful
- **Body text** uses Inter — clean, highly readable, and modern
- Both fonts are from Google Fonts for easy implementation

---

## Font Families

### Display Font (Headings)

- **Font**: Nunito
- **Fallback**: system-ui, sans-serif
- **Source**: [Google Fonts](https://fonts.google.com/specimen/Nunito)
- **Import**: `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');`
- **Use for**: All headings (H1–H6), buttons, badges, and accent text

### Body Font (Text)

- **Font**: Inter
- **Fallback**: system-ui, sans-serif
- **Source**: [Google Fonts](https://fonts.google.com/specimen/Inter)
- **Import**: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');`
- **Use for**: Body text, paragraphs, labels, and form inputs

---

## Font Weights

| Weight Name | Value | Use Case                                   |
| ----------- | ----- | ------------------------------------------ |
| Regular     | 400   | Body text, secondary info                  |
| Medium      | 500   | Slightly emphasized body text (Inter only) |
| Semibold    | 600   | Sub-headings, labels, button text          |
| Bold        | 700   | Headings, strong emphasis                  |
| Extra Bold  | 800   | Hero headings, primary page titles         |

---

## Type Scale

### Headings

| Element | Mobile Size     | Tablet Size (md:) | Desktop Size (lg:) | Weight     | Font   | Line Height |
| ------- | --------------- | ----------------- | ------------------ | ---------- | ------ | ----------- |
| H1      | 2.25rem (36px)  | 3rem (48px)       | 3.75rem (60px)     | Extra Bold | Nunito | 1.1         |
| H2      | 1.875rem (30px) | 2.25rem (36px)    | 3rem (48px)        | Bold       | Nunito | 1.1         |
| H3      | 1.5rem (24px)   | 1.75rem (28px)    | 2rem (32px)        | Bold       | Nunito | 1.1         |
| H4      | 1.25rem (20px)  | 1.5rem (24px)     | 1.5rem (24px)      | Bold       | Nunito | 1.4         |
| H5      | 1.125rem (18px) | 1.25rem (20px)    | 1.25rem (20px)     | Bold       | Nunito | 1.4         |
| H6      | 1rem (16px)     | 1rem (16px)       | 1.125rem (18px)    | Bold       | Nunito | 1.4         |

> [!NOTE]
> All headings use `tracking-tight` (letter-spacing: -0.025em) for a refined, modern appearance.

### Body Text

| Element    | Size            | Weight  | Line Height  | Use Case                     |
| ---------- | --------------- | ------- | ------------ | ---------------------------- |
| Body Large | 1.125rem (18px) | Regular | 1.625 (26px) | Feature descriptions, intros |
| Body       | 1rem (16px)     | Regular | 1.5 (24px)   | Standard paragraphs          |
| Body Small | 0.875rem (14px) | Regular | 1.5 (21px)   | Captions, secondary info     |
| Tiny       | 0.75rem (12px)  | Regular | 1.5 (18px)   | Fine print, badges           |

---

## Text Colors

### Primary Text

- **Color Token**: `foreground`
- **Light mode**: HSL `25 30% 20%` — warm dark brown
- **Dark mode**: HSL `40 30% 95%` — warm off-white

### Secondary Text

- **Color Token**: `muted-foreground`
- **Light mode**: HSL `25 15% 45%` — medium warm gray
- **Dark mode**: HSL `30 15% 60%` — lighter warm gray

### Accent Text

- **Color Token**: `primary`
- **Use for**: Links, interactive text, emphasis
- **Light mode**: HSL `25 55% 40%` — warm brown
- **Dark mode**: HSL `25 50% 50%` — lighter warm brown

---

## Heading Styles by Context

### Hero Section (H1)

```
Font family: Nunito
Size: 2.25rem → 3rem → 3.75rem (responsive)
Weight: 800 (Extra Bold)
Line height: tight (1.1)
Letter spacing: tight (-0.025em)
Color: foreground
```

### Section Titles (H2)

```
Font family: Nunito
Size: 1.875rem → 2.25rem → 3rem (responsive)
Weight: 700 (Bold)
Line height: 1.1
Letter spacing: -0.025em
Color: foreground
Margin bottom: 1.5rem (24px) on mobile, 2rem (32px) on desktop
```

### Card/Feature Titles (H3)

```
Font family: Nunito
Size: 1.25rem (20px)
Weight: 700 (Bold)
Line height: normal (1.4)
Color: foreground
Margin bottom: 0.75rem (12px)
```

---

## Special Text Treatments

### Gradient Heading Text

A decorative text style for hero emphasis:

```
Background: linear-gradient(135deg, primary 0%, accent 100%)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

Use sparingly for single key phrases within headings.

### Section Label/Badge

Used for section headers (e.g., "Naše knihy", "O autorce"):

```
Display: inline-block
Padding: 0.375rem 1rem (6px vertical, 16px horizontal)
Background: hsl(var(--primary) / 0.1)
Color: hsl(var(--primary))
Border radius: 9999px (full pill shape)
Font family: Nunito (display font)
Font size: 0.875rem (14px)
Font weight: 600 (Semibold)
Text transform: none (preserve original case)
Margin bottom: 1rem (16px) when above heading
```

---

## Responsive Typography Pattern

The design uses a mobile-first, 3-breakpoint scaling pattern:

| Breakpoint | Width    | Scale                          |
| ---------- | -------- | ------------------------------ |
| Base       | < 768px  | Mobile sizes (smallest)        |
| md:        | ≥ 768px  | Tablet sizes (medium scale-up) |
| lg:        | ≥ 1024px | Desktop sizes (full scale)     |

**Scaling ratio**: Headings increase by approximately 25-33% between breakpoints.

---

## Anti-Aliasing

Apply antialiased font rendering for smoother text:

```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## Bootstrap Mapping Notes

### Font Families

```scss
$font-family-sans-serif:
  "Inter",
  system-ui,
  -apple-system,
  sans-serif;
$font-family-headings:
  "Nunito",
  system-ui,
  -apple-system,
  sans-serif;
$headings-font-family: $font-family-headings;
```

### Type Scale

```scss
$font-size-base: 1rem;
$h1-font-size: 2.25rem; // Override with responsive utilities
$h2-font-size: 1.875rem;
$h3-font-size: 1.5rem;
$h4-font-size: 1.25rem;
$h5-font-size: 1.125rem;
$h6-font-size: 1rem;
```

### Font Weights

```scss
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$headings-font-weight: 700;
```

### Line Heights

```scss
$line-height-base: 1.5;
$line-height-sm: 1.25;
$headings-line-height: 1.1;
```

> [!TIP]
> Create utility classes like `.display-heading` or `.font-display` to easily apply Nunito to non-heading elements like buttons.
