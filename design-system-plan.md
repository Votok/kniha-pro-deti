# Design System Extraction Plan

> **Goal**: Extract a technology-agnostic design system from this Lovable (React + Tailwind) prototype, suitable for later implementation in Bootstrap 5.

---

## Repository Analysis Summary

### Key Design Sources Identified

| File                      | Purpose                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------- |
| `src/index.css`           | CSS variables (colors, shadows, radius), keyframe animations, custom component styles |
| `tailwind.config.ts`      | Font families, color token mappings, container settings, shadow presets               |
| `src/components/*.tsx`    | 9 main components (HeroSection, Header, Footer, etc.)                                 |
| `src/components/ui/*.tsx` | 49 UI primitives (button, card, badge, etc.)                                          |
| `src/pages/*.tsx`         | 7 pages (Index, BookDetail, Autori, Besedy, Galerie, Media, NotFound)                 |

### Design Tokens Already Extracted

- **Colors**: Primary (warm brown), Secondary (sage green), Accent (golden yellow), Storybook (blue), Forest (green) + dark mode variants
- **Typography**: Nunito (headings), Inter (body)
- **Shadows**: soft, card, book (3-tier depth system)
- **Border Radius**: Base 1rem with size variants (sm, md, lg, xl, 2xl)
- **Animations**: 5+ floating animations, fade-in-up, scale-in, bounce

---

## Extraction Phases

### Phase 1: Foundation Tokens

**Duration**: ~30 min  
**Output**: `01-colors.md`, `02-typography.md`

#### Tasks

1. **Extract Color Palette** (`01-colors.md`)
   - [x] Parse HSL values from `src/index.css` `:root` block
   - [x] Document light mode palette with hex conversions
   - [x] Document dark mode palette with hex conversions
   - [x] Group by semantic purpose (brand, accent, background, text, border, feedback)
   - [x] Add Bootstrap variable mapping notes

2. **Extract Typography System** (`02-typography.md`)
   - [x] Document font families (Nunito for display, Inter for body)
   - [x] Define type scale (H1–H6, body, small)
   - [x] Document font weights used (400, 600, 700, 800)
   - [x] Establish line height rules
   - [x] Define text color hierarchy

#### Source Files to Analyze

- `src/index.css` (lines 1-130)
- `tailwind.config.ts` (lines 16-19)
- `src/components/HeroSection.tsx` (heading sizes)
- `src/components/AboutSection.tsx`

---

### Phase 2: Spacing and Layout

**Duration**: ~20 min  
**Output**: `03-spacing-and-layout.md`

#### Tasks

1. **Extract Spacing Scale**
   - [x] Analyze padding/margin patterns in components
   - [x] Define semantic spacing levels (xs, sm, md, lg, xl, 2xl)
   - [x] Document section vertical rhythm

2. **Document Layout Patterns**
   - [x] Container max-width (1280px at 2xl)
   - [x] Container padding (1.5rem)
   - [x] Grid column patterns
   - [x] Responsive breakpoint behavior

#### Source Files to Analyze

- `tailwind.config.ts` (lines 8-14, container settings)
- `src/components/HeroSection.tsx` (grid layout)
- `src/pages/BookDetail.tsx` (page layout)

---

### Phase 3: Component Documentation

**Duration**: ~45 min  
**Output**: `04-components.md`

#### Tasks

1. **Document Button Variants**
   - [x] Primary / Hero button style
   - [x] Secondary / Outline button style
   - [x] Ghost button style
   - [x] Size variants (sm, md, lg, xl)
   - [x] Hover/active states

2. **Document Card Patterns**
   - [x] Book card appearance
   - [x] Hover lift effect
   - [x] Shadow usage
   - [x] Border radius

3. **Document Navigation**
   - [x] Header structure
   - [x] Navigation link states
   - [x] Mobile menu behavior

4. **Document Footer**
   - [x] Layout structure
   - [x] Link styles
   - [x] Content sections

5. **Document Supporting Components**
   - [x] Badges (variant: default, secondary, destructive, outline)
   - [x] Breadcrumbs
   - [x] Trust indicators
   - [x] Price/metadata blocks

#### Source Files to Analyze

- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/badge.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/BooksSection.tsx`

---

### Phase 4: Page Patterns

**Duration**: ~30 min  
**Output**: `05-page-patterns.md`

#### Tasks

1. **Document Homepage Pattern**
   - [x] Hero section layout (2-column grid)
   - [x] Floating book display composition
   - [x] Trust indicators positioning
   - [x] Section transitions

2. **Document Book Detail Pattern**
   - [x] Product layout (image + info grid)
   - [x] Metadata display
   - [x] Related books section
   - [x] Breadcrumb navigation

3. **Document Listing Patterns**
   - [x] Grid layouts (Autori, Galerie)
   - [x] Card arrangement
   - [x] Filtering/sorting UI (if present)

4. **Document Content Sections**
   - [x] About section layout
   - [x] Events section layout
   - [x] Testimonials layout

#### Source Files to Analyze

- `src/pages/Index.tsx`
- `src/pages/BookDetail.tsx`
- `src/pages/Autori.tsx`
- `src/pages/Galerie.tsx`
- `src/components/AboutSection.tsx`
- `src/components/EventsSection.tsx`
- `src/components/TestimonialsSection.tsx`

---

### Phase 5: Interactions and Motion

**Duration**: ~20 min  
**Output**: `06-interactions-and-motion.md`

#### Tasks

1. **Document Hover States**
   - [x] Button hover behavior
   - [x] Card hover lift effect (translateY -8px, rotate -1deg)
   - [x] Link hover underlines
   - [x] Page curl effect on hover

2. **Document Transitions**
   - [x] Standard transition duration (300ms)
   - [x] Easing function (ease-out)
   - [x] Properties animated (transform, box-shadow, opacity)

3. **Document Animations**
   - [x] Floating book animations (5 variants, 4-6s cycles)
   - [x] Fade-in-up entrance (0.6s)
   - [x] Scale-in entrance (0.4s)
   - [x] Scroll indicator bounce

4. **Document Animation Delays**
   - [x] Staggered animation pattern (100ms, 200ms, 300ms, 400ms)

#### Source Files to Analyze

- `src/index.css` (lines 132-321)
- `src/components/HeroSection.tsx`

---

### Phase 6: Output Files Creation

**Duration**: ~60 min  
**Output**: All 6 Markdown files in `/design-system/` folder

#### Tasks

1. **Create Output Directory**
   - [x] Create `/design-system/` folder in project root

2. **Write Design System Files**
   - [x] Write `01-colors.md`
   - [x] Write `02-typography.md`
   - [x] Write `03-spacing-and-layout.md`
   - [x] Write `04-components.md`
   - [x] Write `05-page-patterns.md`
   - [x] Write `06-interactions-and-motion.md`

3. **Quality Assurance**
   - [x] Review all files for technology-agnostic language
   - [x] Verify no Tailwind/React references
   - [x] Check Bootstrap mapping notes are helpful
   - [x] Ensure each file is self-contained

---

## File Output Format

Each design system file will follow this structure:

```markdown
# [Document Title]

> Brief description of what this document covers

## [Section 1]

### [Subsection]

- Design rule or value
- Usage explanation
- Examples where helpful

## Bootstrap Mapping Notes

How these values translate to Bootstrap variables/utilities.
```

---

## Estimated Total Time

| Phase                            | Duration       |
| -------------------------------- | -------------- |
| Phase 1: Foundation Tokens       | 30 min         |
| Phase 2: Spacing and Layout      | 20 min         |
| Phase 3: Component Documentation | 45 min         |
| Phase 4: Page Patterns           | 30 min         |
| Phase 5: Interactions and Motion | 20 min         |
| Phase 6: Output Files Creation   | 60 min         |
| **Total**                        | **~3.5 hours** |

---

## Dependencies and Prerequisites

- No external tools required
- All extraction is visual/analytical
- Output is pure Markdown
- No code execution needed

## Success Criteria

- [x] All 6 Markdown files created
- [x] Files are technology-agnostic (no React/Tailwind mentions)
- [x] Each file is self-contained and human-readable
- [x] Bootstrap mapping notes included where applicable
- [x] Design intent clearly communicated
- [x] Another developer can implement from these files without seeing the prototype
