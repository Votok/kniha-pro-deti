# Spacing and Layout

> Defines the spacing scale, container settings, grid layouts, and responsive breakpoint behavior.

---

## Design Philosophy

The layout system creates comfortable, readable pages with clear visual hierarchy:

- **Generous whitespace** — sections breathe with substantial vertical padding
- **Consistent container** — centered content with reasonable max-width
- **Responsive grids** — adapt from single column on mobile to multi-column on desktop
- **Semantic spacing** — gaps that reinforce visual grouping

---

## Spacing Scale

The design uses a consistent spacing scale based on multiples of 4px (0.25rem):

| Token | Value   | Pixels | Common Uses                          |
| ----- | ------- | ------ | ------------------------------------ |
| xs    | 0.25rem | 4px    | Icon gaps, tight badge padding       |
| sm    | 0.5rem  | 8px    | Small gaps, inline element spacing   |
| md    | 1rem    | 16px   | Standard gaps, card internal padding |
| lg    | 1.5rem  | 24px   | Section card padding, larger gaps    |
| xl    | 2rem    | 32px   | Between grouped elements             |
| 2xl   | 3rem    | 48px   | Grid gaps, section header margins    |
| 3xl   | 4rem    | 64px   | Mobile section vertical padding      |
| 4xl   | 5rem    | 80px   | Tablet section vertical padding      |
| 5xl   | 7rem    | 112px  | Desktop section vertical padding     |

---

## Section Vertical Rhythm

Sections use consistent vertical padding for visual rhythm:

| Section Type     | Mobile (py-) | Desktop (md:py-) | Use Case                       |
| ---------------- | ------------ | ---------------- | ------------------------------ |
| Standard section | 5rem (80px)  | 7rem (112px)     | Main content sections          |
| Compact section  | 4rem (64px)  | 5rem (80px)      | CTA sections, smaller sections |
| Hero section     | min-h-screen | min-h-screen     | Full viewport hero             |
| Footer           | 4rem (64px)  | 4rem (64px)      | Footer padding                 |

**Pattern**: `py-20 md:py-28` (5rem → 7rem)

---

## Container Settings

### Max Width

- **Max width**: 1280px (at 2xl breakpoint)
- **Center aligned**: Always centered horizontally

### Padding

- **Horizontal padding**: 1.5rem (24px)
- **Applied to**: All container elements

### CSS Implementation

```css
.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
```

---

## Grid Layouts

### Section Header Pattern

Centered content with max-width constraint:

```
max-width: 48rem (768px)
margin: 0 auto
text-align: center
margin-bottom: 3rem (48px) on mobile, 4rem (64px) on lg breakpoint
```

### Common Grid Configurations

| Grid Type      | Mobile   | Tablet (sm:) | Desktop (lg:) | XL (xl:)  | Gap         |
| -------------- | -------- | ------------ | ------------- | --------- | ----------- |
| Book cards     | 1 column | 2 columns    | 3 columns     | 4 columns | 1.5rem-2rem |
| Feature cards  | 1 column | 2 columns    | 4 columns     | —         | 1.5rem-2rem |
| Footer columns | 1 column | 2 columns    | 4 columns     | —         | 3rem        |
| Hero 2-column  | 1 column | —            | 2 columns     | —         | 3rem        |
| Related books  | 1 column | 2 columns    | 3 columns     | —         | 2rem        |

### Gap Patterns

| Gap Size | Value  | Use Case                       |
| -------- | ------ | ------------------------------ |
| Small    | 0.5rem | Inline elements, button groups |
| Medium   | 1rem   | Grid items on mobile           |
| Large    | 1.5rem | Standard grid gaps             |
| XL       | 2rem   | Larger grid gaps               |
| 2XL      | 3rem   | Hero section grids             |
| 3XL      | 4rem   | Desktop grid gaps              |

**Pattern**: `gap-6 md:gap-8` (1.5rem → 2rem)

---

## Border Radius

The design uses a base radius with calculated variants:

| Token | Calculation | Value (base=1rem) | Use Case               |
| ----- | ----------- | ----------------- | ---------------------- |
| sm    | base - 8px  | 8px               | Small elements, pills  |
| md    | base - 4px  | 12px              | Buttons, inputs        |
| lg    | base        | 16px              | Standard cards         |
| xl    | base + 4px  | 20px              | Large cards            |
| 2xl   | base + 8px  | 24px              | Featured cards, modals |
| 3xl   | 1.5rem      | 24px              | Section cards          |
| full  | 9999px      | pill              | Badges, pills          |

**Base radius**: `--radius: 1rem` (16px)

---

## Responsive Breakpoints

| Breakpoint | Min Width | Use Case                      |
| ---------- | --------- | ----------------------------- |
| (base)     | 0         | Mobile-first styles           |
| sm         | 640px     | Large phones, small tablets   |
| md         | 768px     | Tablets, larger type scale    |
| lg         | 1024px    | Desktop, 2-column layouts     |
| xl         | 1280px    | Large desktop, 4-column grids |
| 2xl        | 1280px    | Container max-width cap       |

---

## Common Component Padding

### Card Content

- **Standard**: `p-6` (1.5rem / 24px)
- **Large cards**: `p-8 md:p-12` (2rem → 3rem)

### Badges/Pills

- **Horizontal**: `px-3` to `px-4` (12px-16px)
- **Vertical**: `py-1` to `py-1.5` (4px-6px)

### Buttons

- **Standard**: `px-4 py-2` (16px × 8px)
- **Large**: `px-6 py-3` (24px × 12px)
- **XL/Hero**: `px-8 py-4` (32px × 16px)

### Section Headers

- **Label margin**: `mb-4` (1rem)
- **Title margin**: `mb-6` (1.5rem)
- **Section header group**: `mb-12` to `mb-16` (3rem-4rem)

---

## Layout Patterns

### Two-Column Hero Layout

```
grid lg:grid-cols-2
gap-12 lg:gap-8
items-center
```

- Mobile: stacked (content first)
- Desktop: side-by-side

### Book Card Aspect Ratio

```
Cover container: aspect-[3/4]
Padding inside: p-4
```

### Centered Content Block

Use these max-width constraints for centered content:

| Max Width         | Pixels | Use Case                                                        |
| ----------------- | ------ | --------------------------------------------------------------- |
| max-w-xl (36rem)  | 576px  | Single column body text, feature descriptions, intro paragraphs |
| max-w-3xl (48rem) | 768px  | Section headers (tag + title + description)                     |
| max-w-4xl (56rem) | 896px  | Testimonial cards, author bios, long-form content               |

All centered blocks must have `margin: 0 auto` and `text-align: center` (unless content requires left alignment).

---

## Bootstrap Mapping Notes

### Container

```scss
$container-max-widths: (
  xl: 1280px,
);
$container-padding-x: 1.5rem;
```

### Spacing

```scss
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  // 4px
  2: $spacer * 0.5,
  // 8px
  3: $spacer,
  // 16px
  4: $spacer * 1.5,
  // 24px
  5: $spacer * 3, // 48px
);
```

### Grid

```scss
$grid-gutter-width: 1.5rem;
```

### Border Radius

```scss
$border-radius: 1rem;
$border-radius-sm: 0.5rem;
$border-radius-lg: 1.25rem;
$border-radius-xl: 1.5rem;
$border-radius-pill: 50rem;
```

> [!TIP]
> Create custom section classes like `.section-padding` with `padding-top: 5rem; padding-bottom: 5rem;` and responsive overrides for consistent section rhythm.
