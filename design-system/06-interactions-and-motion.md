# Interactions and Motion

> Defines hover states, transitions, and animations that bring the design to life while maintaining a playful, storybook feel.

---

## Hover States

### Button Hover

All interactive buttons include these hover behaviors:

| Property   | Value                                                                       | Purpose                 |
| ---------- | --------------------------------------------------------------------------- | ----------------------- |
| Background | Background opacity changes to 0.9 (multiply current background by 0.9)      | Visual feedback         |
| Transform  | `translateY(-2px)` (standard buttons) or `translateY(-4px)` (hero buttons) | Lift effect             |
| Shadow     | Escalates from current level to `shadow-card` (or `shadow-book` for hero)  | Depth enhancement       |
| Transition | 200ms ease-out on: `transform, box-shadow, background-color, opacity`      | Smooth, responsive feel |

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

### Card Hover Effects

**Book Cards** (product cards with `.book-card` class):

Cards featuring books use a distinctive "picked up" effect:

| Property   | Value                                    | Purpose                      |
| ---------- | ---------------------------------------- | ---------------------------- |
| Transform  | `translateY(-8px) rotate(-1deg)`         | Lift + playful tilt          |
| Shadow     | Changes from `shadow-soft` to `shadow-book` | Deepest shadow level    |
| Transition | 300ms ease-out on `transform, box-shadow` | Smooth, intentional movement |

This effect suggests the book is being "picked up" from a table.

**Feature Cards** (about section, why choose section):

| Property   | Value                                    | Purpose             |
| ---------- | ---------------------------------------- | ------------------- |
| Transform  | `translateY(-4px)`                       | Subtle lift         |
| Shadow     | Changes from `shadow-soft` to `shadow-card` | Moderate elevation |
| Transition | 300ms ease-out on `transform, box-shadow` | Smooth movement    |

**Standard Cards** (testimonials, author cards):

- No hover transform or shadow change
- May include internal element hovers (buttons, links)

---

### Page Curl Effect

Optional decorative effect for card elements:

**Trigger**: Hover on elements with `.page-curl` class

**Implementation**:

```css
.page-curl {
  position: relative;
  overflow: hidden;
}

.page-curl::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 60px 60px;
  border-color: transparent transparent hsl(var(--muted)) transparent;
  opacity: 0;
  transition: opacity 300ms ease;
}

.page-curl:hover::after {
  opacity: 0.6;
}
```

**Specifications**:

- Triangle size: 60px × 60px (created with CSS border trick)
- Position: Bottom-right corner
- Color: Muted background color at 60% opacity
- Transition: opacity 300ms ease

---

### Link Hover

**Standard text links** (body content):

- Default state: `text-decoration: none`, color: `primary`
- Hover state: `text-decoration: underline`, `text-underline-offset: 4px`
- Transition: 200ms ease-out on `color, text-decoration-color`

**Navigation links** (header/footer):

- Default state: `text-decoration: none`, color: `foreground` at 80% opacity
- Hover state: color changes to `primary`, no underline
- Transition: 200ms ease-out on `color`

**Underline specifications**:

- Offset from baseline: 4px (`text-underline-offset: 4px`)
- Thickness: 1px (default)
- Color: Inherits from text color

---

## Transitions

### Standard Transition

Use for all interactive elements (avoid using `transition: all` for performance):

| Property   | Value                                                                  |
| ---------- | ---------------------------------------------------------------------- |
| Duration   | **200ms** (buttons, links) / **300ms** (cards, complex elements)       |
| Easing     | `ease-out`                                                             |
| Properties | Explicitly list: `transform, box-shadow, opacity, background-color, color` |

### Recommended Defaults

| Element Type | Duration | Easing   | Properties (explicit list)                        |
| ------------ | -------- | -------- | ------------------------------------------------- |
| Buttons      | 200ms    | ease-out | `background-color, transform, box-shadow, opacity` |
| Cards        | 300ms    | ease-out | `transform, box-shadow`                           |
| Links        | 200ms    | ease-out | `color, text-decoration-color`                    |
| Page curl    | 300ms    | ease     | `opacity`                                         |
| Images       | 300ms    | ease-out | `transform, opacity`                              |

### Bootstrap Mapping Notes

```scss
// Custom transition utilities (avoid 'all' for better performance)
$transition-base: background-color 0.2s ease-out, transform 0.2s ease-out, box-shadow 0.2s ease-out, opacity 0.2s ease-out;
$transition-card: transform 0.3s ease-out, box-shadow 0.3s ease-out;
$transition-link: color 0.2s ease-out, text-decoration-color 0.2s ease-out;

// Example usage in component
.btn {
  transition: $transition-base;
}

.card {
  transition: $transition-card;
}

a {
  transition: $transition-link;
}
```

---

## Animations

### Floating Book Animations

Five variations create a natural, organic floating effect for the book covers arranged along the bottom of the hero photo. Each has slightly different timing, rotation range, and vertical travel to prevent synchronized movement:

| Animation | Duration | Keyframe 0%/100%                      | Keyframe 50%                               | Vertical Travel | Rotation Range |
| --------- | -------- | ------------------------------------- | ------------------------------------------ | --------------- | -------------- |
| `float1`  | 4.0s     | `translateY(0) rotate(-8deg)`         | `translateY(-15px) rotate(-5deg)`          | 15px            | 3deg           |
| `float2`  | 5.0s     | `translateY(0) rotate(15deg)`         | `translateY(-12px) rotate(12deg)`          | 12px            | 3deg           |
| `float3`  | 4.5s     | `translateY(0) rotate(6deg)`          | `translateY(-18px) rotate(8deg)`           | 18px            | 2deg           |
| `float4`  | 5.5s     | `translateY(0) rotate(-5deg)`         | `translateY(-12px) rotate(-3deg)`          | 12px            | 2deg           |
| `float5`  | 4.8s     | `translateY(0) rotate(4deg)`          | `translateY(-14px) rotate(6deg)`           | 14px            | 2deg           |

**Shared Characteristics**:

- Easing: `ease-in-out`
- Iteration: `infinite`
- Direction: `normal`
- Pattern: Sinusoidal movement (smooth up and down, peaks at 50%)
- Apply with: `animation: float1 4s ease-in-out infinite;` (replace with appropriate float animation)
- Vertical travel range: 12px to 18px (gentle bobbing)
- Rotation change per cycle: 2-3 degrees (subtle tilting)

**Context**: These animations are applied to the 5 floating book covers that sit along the bottom edge of the hero photo. The different durations (4.0s to 5.5s) ensure the books never synchronize, creating an organic, living feel. See [05-page-patterns.md](05-page-patterns.md) → Hero Section → Floating Books Row for exact positioning details.

**Purpose**: Creates a whimsical, storybook atmosphere where books appear to gently bob and tilt along the edge of the photo, suggesting they are lightly resting on or hovering near the surface.

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

**Implementation**:

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.scroll-indicator {
  animation: bounce 2s ease-in-out infinite;
}
```

**Specifications**:

| Property       | Value                         |
| -------------- | ----------------------------- |
| Animation name | `bounce`                      |
| Duration       | 2s                            |
| Easing         | ease-in-out                   |
| Iteration      | infinite                      |
| Movement       | 0 → -12px → 0 (vertical only) |
| Purpose        | Draw attention to scroll action |
| Location       | Bottom center of hero section |

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
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.book-card:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: var(--shadow-book);
}

/* Button lift effect */
.btn-primary,
.btn-hero {
  transition: background-color 0.2s ease-out, transform 0.2s ease-out, box-shadow 0.2s ease-out, opacity 0.2s ease-out;
}

.btn-primary:hover {
  background-color: hsl(var(--primary) / 0.9);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.btn-hero:hover {
  background-color: hsl(var(--primary) / 0.9);
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
