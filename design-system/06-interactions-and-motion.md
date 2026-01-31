# Interactions and Motion

> Defines hover states, transitions, and animations that bring the design to life while maintaining a playful, storybook feel.

---

## Hover States

### Button Hover

All interactive buttons include these hover behaviors:

| Property   | Value                        | Purpose                 |
| ---------- | ---------------------------- | ----------------------- |
| Background | Color darkens to 90% opacity | Visual feedback         |
| Transform  | `translateY(-2px)` to `-4px` | Lift effect             |
| Shadow     | Increases to `--shadow-card` | Depth enhancement       |
| Transition | 200ms ease-out               | Smooth, responsive feel |

**Hero Button** (primary CTA):

- Larger lift: `translateY(-4px)`
- Shadow increases to `--shadow-book`
- More prominent visual response

**Outline Button**:

- Background fills with primary color on hover
- Text color inverts to primary-foreground

**Ghost Button**:

- Background fills with accent color
- No shadow or lift

---

### Card Hover (Book Cards)

Cards featuring books use a distinctive "picked up" effect:

| Property   | Value                            | Purpose                      |
| ---------- | -------------------------------- | ---------------------------- |
| Transform  | `translateY(-8px) rotate(-1deg)` | Lift + playful tilt          |
| Shadow     | `--shadow-book`                  | Deepest shadow level         |
| Transition | 300ms ease-out                   | Smooth, intentional movement |

This effect suggests the book is being "picked up" from a table.

---

### Page Curl Effect

Optional decorative effect for card elements:

- **Trigger**: Hover on `.page-curl` elements
- **Effect**: Triangle appears in bottom-right corner
- **Size**: 60px × 60px
- **Appearance**: Linear gradient creating folded corner illusion
- **Transition**: Opacity 300ms ease

**Implementation**: Creates a pseudo-element `::after` with a gradient from transparent to muted background color.

---

### Link Hover

- **Standard links**: Underline appears on hover
- **Navigation links**: Color shift to primary, optional underline
- **Underline offset**: 4px below text baseline

---

## Transitions

### Standard Transition

Use for all interactive elements:

| Property   | Value                                                    |
| ---------- | -------------------------------------------------------- |
| Duration   | **200ms** (buttons) / **300ms** (cards)                  |
| Easing     | `ease-out`                                               |
| Properties | `all` (transform, box-shadow, opacity, background-color) |

### Recommended Defaults

| Element Type | Duration | Properties                    |
| ------------ | -------- | ----------------------------- |
| Buttons      | 200ms    | background, transform, shadow |
| Cards        | 300ms    | transform, shadow             |
| Links        | 200ms    | color, text-decoration        |
| Page curl    | 300ms    | opacity                       |

### Bootstrap Mapping Notes

```scss
// Custom transition utilities
$transition-base: all 0.2s ease-out;
$transition-card: all 0.3s ease-out;

// Example usage in component
.btn {
  transition: $transition-base;
}

.card {
  transition: $transition-card;
}
```

---

## Animations

### Floating Book Animations

Five variations create a natural, organic floating effect for book covers in the hero section. Each has slightly different timing and movement:

| Animation | Duration | Vertical Movement | Rotation Change |
| --------- | -------- | ----------------- | --------------- |
| `float1`  | 4s       | 0 → -15px         | -8° → -5°       |
| `float2`  | 5s       | 0 → -12px         | 2° → 0°         |
| `float3`  | 4.5s     | 0 → -18px         | 6° → 8°         |
| `float4`  | 5.5s     | 0 → -12px         | -5° → -3°       |
| `float5`  | 4.8s     | 0 → -14px         | 4° → 6°         |

**Characteristics**:

- Easing: `ease-in-out`
- Loop: `infinite`
- Pattern: Sinusoidal movement (smooth up and down)

**Purpose**: Creates a whimsical, storybook atmosphere where books appear to float gently in space.

---

### Gentle Float (Decorative)

For decorative elements like badges or small illustrations:

| Property | Value                                 |
| -------- | ------------------------------------- |
| Duration | 6s                                    |
| Movement | `translateY(0)` → `translateY(-10px)` |
| Rotation | 0° → 2°                               |
| Easing   | `ease-in-out`                         |
| Loop     | `infinite`                            |

---

### Entrance Animations

#### Fade In Up

Content entrance animation for sections and text blocks:

| Property   | Value                            |
| ---------- | -------------------------------- |
| Duration   | 600ms (0.6s)                     |
| Easing     | `ease-out`                       |
| Fill mode  | `forwards`                       |
| From state | `opacity: 0`, `translateY(20px)` |
| To state   | `opacity: 1`, `translateY(0)`    |

**Use for**: Hero text, section headings, content blocks appearing on scroll.

---

#### Scale In

Subtle zoom entrance for images and cards:

| Property   | Value                       |
| ---------- | --------------------------- |
| Duration   | 400ms (0.4s)                |
| Easing     | `ease-out`                  |
| Fill mode  | `forwards`                  |
| From state | `opacity: 0`, `scale(0.95)` |
| To state   | `opacity: 1`, `scale(1)`    |

**Use for**: Images, cards, and modal content.

---

### Bounce Animation

Scroll indicator at bottom of hero section:

| Property | Value                              |
| -------- | ---------------------------------- |
| Type     | CSS `bounce` (built-in/predefined) |
| Purpose  | Draw attention to scroll action    |
| Location | Bottom center of hero section      |

---

## Animation Delays (Staggered Animations)

For sequential element appearance, use these delay classes:

| Class/Delay | Value | Use Case                  |
| ----------- | ----- | ------------------------- |
| Delay 1     | 100ms | First element in sequence |
| Delay 2     | 200ms | Second element            |
| Delay 3     | 300ms | Third element             |
| Delay 4     | 400ms | Fourth element            |

**Pattern**: 100ms increment between elements creates a smooth cascade effect.

**Example sequence**:

- Card 1 appears at 100ms
- Card 2 appears at 200ms
- Card 3 appears at 300ms
- Card 4 appears at 400ms

---

## Bootstrap Mapping Notes

### Transitions

```scss
// Override Bootstrap defaults
$transition-base: all 0.2s ease-out !default;

// Custom transition classes
.transition-card {
  transition: all 0.3s ease-out;
}
```

### Animations (Custom CSS)

```css
/* Floating books - add to custom stylesheet */
@keyframes floatBook {
  0%,
  100% {
    transform: translateY(0) rotate(var(--rotate-start, 0deg));
  }
  50% {
    transform: translateY(var(--float-distance, -12px))
      rotate(var(--rotate-end, 0deg));
  }
}

.animate-float {
  animation: floatBook var(--float-duration, 5s) ease-in-out infinite;
}

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

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
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

.animate-scale-in {
  animation: scaleIn 0.4s ease-out forwards;
}

/* Animation delays */
.animation-delay-100 {
  animation-delay: 100ms;
}
.animation-delay-200 {
  animation-delay: 200ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}
.animation-delay-400 {
  animation-delay: 400ms;
}
```

### Hover Effects (Custom CSS)

```css
/* Book card hover */
.book-card {
  transition: all 0.3s ease-out;
}

.book-card:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: var(--shadow-book);
}

/* Button lift effect */
.btn-primary:hover,
.btn-hero:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.btn-hero:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-book);
}
```

---

## Design Intent Summary

The motion design creates a **whimsical, storybook atmosphere**:

1. **Floating books** suggest magic and imagination
2. **Lift effects** on hover make elements feel tangible and "pickable"
3. **Staggered entrances** add polish without being distracting
4. **Consistent easing** (`ease-out`) creates natural, satisfying motion
5. **Moderate durations** (200-600ms) balance responsiveness with smoothness

**Key principle**: Motion should feel playful and magical, appropriate for a children's book website, while remaining subtle enough not to distract from content.
