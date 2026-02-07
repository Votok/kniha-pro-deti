# Archived Unused Assets - February 7, 2025

This archive contains assets that were not referenced in the active codebase and have been moved here for safekeeping.

## What Was Archived

### SVG Files (`svg/`)
All SVG files were unused - no references found in templates, CSS, or data files:
- `chevron-down-white.gif`, `chevron-down-gray.gif` - old GIF chevrons
- `chevron-down.svg`, `chevron-down-white.svg` - unused SVG chevrons
- `device-mobile.svg` - mobile icon (not referenced)
- `Viktor.svg`, `Viktor.png` - character graphics (not in use)
- `primitive-dot.svg` - dot icon (not referenced anywhere)
- `quote.svg` - quote icon (not in use)

### Publisher Logos (`images/publisher-logos/`)
Publisher logo images that were never referenced in data files or templates:
- `nakladatelstvi-grada.png` - Grada publishing logo
- `nakladatelstvi-albatros.gif` - Albatros publishing logo (old GIF format)
- `nakladatelstvi-65-pole.svg` - 65. pole publishing logo

**Note:** Publisher names are used as text in `books.json`, but logos were never displayed.

### Duplicate Book Covers (`images/duplicate-covers/`)
Book cover images that exist in both root `/images/` and organized `/images/knihy/` folder:
- `kniha-obalka-eliska-andilek.jpg` - duplicate of `/images/knihy/obalka-eliska-andilek.jpg`
- `kniha-viktor-a-pripad-zmizeleho-psa.jpg` - duplicate of `/images/knihy/obalka-viktor-a-pripad-zmizeleho-psa.jpg`
- `kniha-viktor-a-zahadna-teta-bobina.jpg` - duplicate of `/images/knihy/obalka-viktor-a-zahadna-teta-bobina.jpg`
- `kniha-viktor-a-pripad-zmizeleho-psa-2.jpg` - alternate version (unused)

**Active covers:** All books use `/images/knihy/obalka-*.jpg` paths in `books.json`

### Standalone Photos (`images/standalone-photos/`)
Author and media photos that were duplicates or not referenced:
- `pavlina-jurkova-a-jarmila-vlckova.jpg` - duplicate authors photo
- `jarmila-vlckova-a-pavlina-jurkova.jpg` - duplicate (different order)
- `eva-chupikova.jpg` - standalone, exists in `/images/autori/`
- `martina-fojtu.jpg`, `martina-fojtu-2.jpg` - duplicates, exists in `/images/autori/`
- `petr-korunka.jpg` - duplicate, exists in `/images/autori/`
- `divadlo-viola.jpg` - theater photo (not referenced)
- `ceska-televize.jpg` - Czech TV logo/photo (hardcoded inline in `media.json`, not as file reference)
- `rozhovor-pisecky-svet.jpg` - interview photo (not referenced)
- `autorky-knih.jpg` - old authors photo (not in use)

**Active photos:** All organized in `/images/autori/autor-*.jpg` and referenced in `authors.json`

## Active Asset Locations

### Currently Used Assets:
- **Book covers:** `/src/assets/images/knihy/obalka-*.jpg` (referenced in `books.json`)
- **Hero images:** `/src/assets/images/hero/*.jpg` (responsive sizes: 470px, 900px, full)
- **Author photos:** `/src/assets/images/autori/autor-*.jpg` (referenced in `authors.json`)
- **Book excerpts:** `/src/assets/images/ukazky/*.jpg` (referenced in `books.json` excerpts)
- **Testimonial photos:** `/src/assets/images/recenze/*.jpg` (referenced in `books.json` testimonials)
- **Event photos:** `/src/assets/images/besedy/*.jpg`
- **SUK award photos:** `/src/assets/images/suk/*.jpg`
- **Gallery photos:** `/src/assets/images/galerie/*.jpg` (referenced in `galleries.json`)
- **Audio file:** `/src/assets/signal-radio-podcast-rozhovor.mp3` (referenced in `media.json`)
- **Main JS:** `/src/assets/js/main.js` (only active JavaScript file)
- **Main CSS:** `/src/assets/css/style.css` (Bootstrap 5 + custom styles)

## Verification

All archived files were verified as unused by:
1. Grepping all template files (`.njk`, `.html`)
2. Searching all data files in `src/_data/*.json`
3. Checking CSS references in `src/assets/css/style.css`
4. Identifying duplicates by comparing organized folders vs root level files

## Restoration

If any of these files are needed in the future, they can be restored by copying them back to:
- SVG files → `/src/assets/svg/`
- Image files → `/src/assets/images/`

### Unused Excerpt Images (`images/unused-ukazky/`)
Book excerpt illustrations that were never referenced in `books.json` excerpts section (39 files, 8.8 MB):

**Unused Eliška excerpts:** Various illustration files from the Eliška book series that were superseded by newer versions or not selected for use:
- `eliska-andilek-2.jpg` through `eliska-andilek-6.jpg` (older versions)
- `eliska-detektiv-3.jpg` through `eliska-detektiv-8.jpg` (unused illustrations)
- `eliska-rebelka-1.jpg` through `eliska-rebelka-10.jpg` (older/unused versions)

**Unused Róza excerpts:**
- `ukazka-roza-1.jpg`, `ukazka-roza-3.jpg` through `ukazka-roza-6.jpg` (5 unused illustrations)

**Other unused excerpts:**
- `cikanka.jpg`, `dyne.jpg`, `ela-ema.jpg`, `hlidac.jpg`, `jablka.jpg`, `listek-zeleny.jpg`, `listek.jpg`, `maringotka.jpg`, `namornik-alois.jpg`, `pes.jpg`, `podnos.jpg`, `sipek.jpg`, `snek.jpg`, `viktor.jpg`

**Active excerpts (16 files):** Currently used in books:
- `eliska-andilek-1.jpg`, `eliska-andilek-2-new.jpg`
- `eliska-detektiv-1.jpg`, `eliska-detektiv-2-new.jpg`
- `eliska-rebelka-1-new.jpg`, `eliska-rebelka-2-new.jpg`
- `hlidac.jpg`, `hra-o-sen-adam.jpg`, `hra-o-sen.jpg`, `hrbitov.jpg`
- `lunino-kralovstvi.jpg`, `roza-a-ztraceny-tatinek-1.jpg`
- `tajemstvi-rodiny-m-1.jpg`, `tajemstvi-rodiny-m-2.jpg`
- `ukazka-roza-2.jpg`, `ziguli.jpg`

## Size Savings

**Total archived: ~10 MB** (66 files across all categories)

Run `du -sh *` in this directory to see disk space reclaimed per category.
