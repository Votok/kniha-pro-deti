# Color Palette

> Defines the complete color system for the children's book website, including light mode, dark mode, and semantic color roles.

---

## Design Philosophy

The color palette is inspired by warmth, nature, and childhood imagination:

- **Warm browns** — inspired by book spines and natural wood
- **Sage greens** — evoking nature, growth, and calm
- **Golden yellows** — magical, joyful, and inviting
- **Storybook blues** — trust, imagination, and adventure
- **Forest greens** — nature and adventure themes

---

## Light Mode Palette

### Brand Colors

| Token        | HSL Value     | Hex Approx. | Purpose                             |
| ------------ | ------------- | ----------- | ----------------------------------- |
| Primary      | `25 55% 40%`  | #9B6239     | Primary brand color (warm brown)    |
| Primary FG   | `0 0% 100%`   | #FFFFFF     | Text on primary                     |
| Secondary    | `140 25% 90%` | #D9EDE2     | Secondary actions (soft sage green) |
| Secondary FG | `140 30% 30%` | #3D664D     | Text on secondary                   |
| Accent       | `45 90% 65%`  | #F5D54A     | Highlights, CTAs (golden yellow)    |
| Accent FG    | `35 50% 25%`  | #5F4A28     | Text on accent                      |

### Theme Colors

| Token        | HSL Value     | Hex Approx. | Purpose                         |
| ------------ | ------------- | ----------- | ------------------------------- |
| Storybook    | `210 50% 45%` | #3C73AC     | Trust and imagination (blue)    |
| Storybook FG | `0 0% 100%`   | #FFFFFF     | Text on storybook               |
| Forest       | `150 35% 35%` | #3D7358     | Nature/adventure themes (green) |
| Forest FG    | `0 0% 100%`   | #FFFFFF     | Text on forest                  |

### Background & Surface Colors

| Token      | HSL Value    | Hex Approx. | Purpose                      |
| ---------- | ------------ | ----------- | ---------------------------- |
| Background | `40 33% 97%` | #F9F6F2     | Page background (warm cream) |
| Foreground | `25 30% 20%` | #423025     | Primary text                 |
| Card       | `40 40% 99%` | #FDFCFA     | Card backgrounds             |
| Card FG    | `25 30% 20%` | #423025     | Card text                    |
| Popover    | `40 40% 99%` | #FDFCFA     | Popover backgrounds          |
| Popover FG | `25 30% 20%` | #423025     | Popover text                 |

### Muted & Utility Colors

| Token    | HSL Value    | Hex Approx. | Purpose              |
| -------- | ------------ | ----------- | -------------------- |
| Muted    | `30 20% 94%` | #F2EFEB     | Subtle backgrounds   |
| Muted FG | `25 15% 45%` | #7A6F62     | Secondary/muted text |
| Border   | `30 25% 88%` | #E8E0D5     | Subtle borders       |
| Input    | `30 25% 88%` | #E8E0D5     | Form input borders   |
| Ring     | `15 85% 60%` | #E8784B     | Focus rings          |

### Feedback Colors

| Token          | HSL Value       | Hex Approx. | Purpose        |
| -------------- | --------------- | ----------- | -------------- |
| Destructive    | `0 84.2% 60.2%` | #ED5555     | Error states   |
| Destructive FG | `210 40% 98%`   | #F5F8FC     | Text on errors |

---

## Dark Mode Palette

### Brand Colors

| Token        | HSL Value     | Hex Approx. | Purpose               |
| ------------ | ------------- | ----------- | --------------------- |
| Primary      | `25 50% 50%`  | #BF7540     | Warmer, lighter brown |
| Primary FG   | `0 0% 100%`   | #FFFFFF     | Text on primary       |
| Secondary    | `140 20% 20%` | #293D30     | Deeper sage green     |
| Secondary FG | `140 25% 85%` | #C3DED0     | Text on secondary     |
| Accent       | `45 80% 50%`  | #E6BA19     | More saturated gold   |
| Accent FG    | `0 0% 100%`   | #FFFFFF     | Text on accent        |

### Theme Colors

| Token        | HSL Value     | Hex Approx. | Purpose              |
| ------------ | ------------- | ----------- | -------------------- |
| Storybook    | `210 45% 55%` | #5A8EC2     | Lighter blue         |
| Storybook FG | `0 0% 100%`   | #FFFFFF     | Text on storybook    |
| Forest       | `150 30% 45%` | #508668     | Lighter forest green |
| Forest FG    | `0 0% 100%`   | #FFFFFF     | Text on forest       |

### Background & Surface Colors

| Token      | HSL Value    | Hex Approx. | Purpose              |
| ---------- | ------------ | ----------- | -------------------- |
| Background | `25 25% 10%` | #201813     | Dark page background |
| Foreground | `40 30% 95%` | #F7F4EE     | Primary text         |
| Card       | `25 20% 14%` | #2A221E     | Card backgrounds     |
| Card FG    | `40 30% 95%` | #F7F4EE     | Card text            |
| Popover    | `25 20% 14%` | #2A221E     | Popover backgrounds  |
| Popover FG | `40 30% 95%` | #F7F4EE     | Popover text         |

### Muted & Utility Colors

| Token    | HSL Value    | Hex Approx. | Purpose            |
| -------- | ------------ | ----------- | ------------------ |
| Muted    | `25 15% 20%` | #3D312C     | Subtle backgrounds |
| Muted FG | `30 15% 60%` | #A89C8F     | Secondary text     |
| Border   | `25 15% 25%` | #4A3E36     | Subtle borders     |
| Input    | `25 15% 25%` | #4A3E36     | Form input borders |
| Ring     | `15 80% 55%` | #DF6633     | Focus rings        |

### Feedback Colors

| Token          | HSL Value       | Hex Approx. | Purpose        |
| -------------- | --------------- | ----------- | -------------- |
| Destructive    | `0 62.8% 30.6%` | #7F2323     | Error states   |
| Destructive FG | `210 40% 98%`   | #F5F8FC     | Text on errors |

---

## Shadows

The design uses a 3-tier shadow depth system with warm undertones:

| Shadow Name | CSS Value                                  | Use Case          |
| ----------- | ------------------------------------------ | ----------------- |
| Soft        | `0 4px 20px -4px hsl(30 30% 50% / 0.15)`   | Subtle elevation  |
| Card        | `0 8px 30px -8px hsl(30 30% 50% / 0.2)`    | Card hover states |
| Book        | `0 12px 40px -10px hsl(30 30% 40% / 0.25)` | Featured elements |

---

## Gradient Backgrounds

### Hero Gradient

A vertical gradient from warm cream to slightly warmer tones:

```
180deg:
  hsl(40 40% 98%) at 0%
  hsl(35 35% 95%) at 50%
  hsl(30 30% 93%) at 100%
```

### Warm Section Gradient

A diagonal gradient blending secondary and cream:

```
135deg:
  secondary at 0%
  hsl(40 35% 96%) at 100%
```

### Storybook Section Gradient

A vertical gradient with soft blue top:

```
180deg:
  hsl(210 40% 96%) at 0%
  background at 100%
```

---

## Text Gradient

### Warm Text Gradient

A diagonal gradient for decorative headings:

```
135deg:
  primary at 0%
  accent at 100%
```

---

## Bootstrap Mapping Notes

When implementing in Bootstrap 5, map these values to:

| Design Token | Bootstrap Variable      |
| ------------ | ----------------------- |
| Primary      | `$primary`              |
| Secondary    | `$secondary`            |
| Accent       | `$warning` or custom    |
| Background   | `$light` / `$body-bg`   |
| Foreground   | `$dark` / `$body-color` |
| Muted        | `$gray-200`             |
| Muted FG     | `$text-muted`           |
| Border       | `$border-color`         |
| Destructive  | `$danger`               |
| Storybook    | `$info` or custom       |
| Forest       | `$success` or custom    |

**Custom CSS variables** should be defined in `:root` for tokens that don't map directly to Bootstrap.

> [!TIP]
> Use Bootstrap's `--bs-` prefix when defining custom CSS variables to maintain consistency.
