# SEO plán — knihaprodeti.cz

**Cíl:** Odlišit se od velkých nakladatelství a e-shopů, které dominují frázi „kniha pro děti". Cílit na long-tail klíčová slova: _české knihy pro děti_, _knihy pro děti od X let_, _dětské knihy od českých autorek_, _autorské čtení pro školy_.

---

## Fáze 1: Oprava kritických chyb

### 1. ~~Opravit chybějící lomítko v og:image URL~~ ✅

- **Problém:** `site.url` = `https://www.knihaprodeti.cz` (bez lomítka), cesty k obrázkům = `images/...` (bez lomítka) → výsledek: `knihaprodeti.czimages/...`
- **Soubory:** `src/_includes/layouts/base.njk` (řádky 37, 44), `src/_includes/components/schema-book.njk` (řádek 20)
- **Řešení:** Přidat `/` mezi `site.url` a cestu k obrázku ve všech výskytech

### 2. ~~Opravit překlep v site.json~~ ✅

- **Soubor:** `src/_data/site.json`
- **Problém:** `description` obsahuje „napétí" → správně „napětí"

### 3. ~~Odstranit falešný aggregateRating ze schema Book~~ ✅

- **Soubor:** `src/_includes/components/schema-book.njk`
- **Problém:** Generuje 5hvězdičkové hodnocení z jednoho testimonalu — Google může penalizovat jako zneužití strukturovaných dat
- **Řešení:** Odstranit celý blok `aggregateRating`

---

## Fáze 2: Optimalizace titulků a popisků stránek

### 4. Titulek homepage

- **Soubor:** `src/index.html` (front matter)
- **Změna:** `Píšeme příběhy, které pomáhají dětem růst` → `České knihy pro děti 5–13 let od Pavlíny Jurkové a Jarmily Vlčkové`

### 5. Meta description homepage

- **Soubor:** `src/index.html` (front matter)
- **Změna:** Odstranit emoji, přidat klíčová slova: _„České knihy pro děti od 5 do 13 let. Příběhy od Pavlíny Jurkové a Jarmily Vlčkové, které učí odvaze, přátelství a sebedůvěře. 8 knih s krásnými ilustracemi od českých ilustrátorů."_

### 6. Titulky knihových stránek — přidat věkovou skupinu

- **Soubor:** `src/_includes/layouts/base.njk`
- **Změna:** `{book.title} | Kniha pro děti` → `{book.title} – {ageGroup} | Kniha pro děti`
- Např.: _„Eliška andílek – pro děti od 5 do 9 let | Kniha pro děti"_

### 7. Meta description knihových stránek — použít description místo summary

- **Soubor:** `src/_includes/layouts/base.njk`
- **Změna:** `book.summary` (krátký) → `book.description` (delší, bohatší na klíčová slova)

### 8. Opravit generické titulky ostatních stránek

- `src/autori.html`: `Tvoříme společně` → `Pavlína Jurková a Jarmila Vlčková — české autorky knih pro děti`
- `src/galerie.html`: `Galerie` → `Galerie z autorských čtení a křtů knih`
- `src/media.html`: `Média` → `Rozhovory a recenze — Kniha pro děti v médiích`

---

## Fáze 3: Klíčová slova v on-page textech

### 9. Alt texty obálek knih na homepage

- **Soubor:** `src/index.html` (books grid)
- **Změna:** `alt="{{ book.title }}"` → `alt="Obálka knihy {{ book.title }} – {{ book.ageGroup | lower }}"`

---

## Fáze 4: Vylepšení strukturovaných dat (Schema.org)

### 11. Přidat description, url a typicalAgeRange do Book schema

- **Soubor:** `src/_includes/components/schema-book.njk`
- Přidat: `"description"`, `"url"`, `"typicalAgeRange"` (např. `"5-9"` extrahovaný z `ageGroup`)

### 12. Přidat Offer do Book schema

- **Soubor:** `src/_includes/components/schema-book.njk`
- Vyjádřit nákupní odkazy jako `"offers": { "@type": "Offer", "url": "...", "availability": "InStock" }`

### 13. Přidat BreadcrumbList schema na knihové stránky

- **Soubor:** `src/_includes/layouts/book.njk` nebo `schema-book.njk`
- Drobečková navigace je vizuálně přítomná, ale chybí v JSON-LD: Úvod → Knihy → {Název knihy}

### 14. Přidat WebSite + Organization schema na homepage

- **Soubor:** `src/_includes/layouts/base.njk`
- Přidat JSON-LD pro identitu webu a organizace (pouze na homepage)

---

## Fáze 5: Interní prolinkování

### 15. Přidat odkazy na knihy do patičky

- **Soubor:** `src/_includes/components/footer.njk`
- Přidat sloupec „Naše knihy" s odkazy na všechny knihové stránky — distribuuje link equity z každé stránky

---

## Fáze 6: Ověření

- `npm run build` a kontrola:
  - `grep "<title>" _site/*.html` — všechny titulky obsahují klíčová slova
  - `grep "og:image" _site/eliska-andilek.html` — URL má správné lomítko
  - `grep "aggregateRating" _site/*.html` — nesmí nic najít (odstraněno)
  - `grep "typicalAgeRange" _site/eliska-andilek.html` — přítomno ve schema
  - Validace strukturovaných dat: https://validator.schema.org/
  - Test social sharing: https://www.opengraph.xyz/

---

## BUDE ŘEŠENO POZDĚJI: Změny nadpisů H1/H2 a lead textu

Tyto úpravy vyžadují pečlivé zvážení copywritingu a vizuálního dopadu — budou řešeny v samostatném kroku.

### A. Lead text pod H1 — přidat klíčová slova

- **Soubor:** `src/index.html`
- **Změna `<p class="lead">`:** Přepsat na: _„České knihy pro děti od 5 do 13 let. Příběhy, které učí odvaze, sebedůvěře a zvládání životních výzev. S krásnými ilustracemi od českých ilustrátorů."_

### B. Homepage H1

- **Soubor:** `src/index.html`
- **Aktuální:** _„Píšeme příběhy, které pomáhají dětem růst"_ — kreativní, ale neobsahuje žádná klíčová slova
- **Návrh:** Zvážit přidání „české knihy pro děti" do H1 nebo přidat keyword-rich podnadpis pod H1

### C. Homepage H2 sekce Knihy

- **Soubor:** `src/index.html`
- **Aktuální:** _„Vyberte tu pravou knihu"_
- **Návrh:** Změnit na _„Naše české knihy pro děti podle věku"_ nebo _„České dětské knihy od 5 do 13 let"_

---

## Rozhodnutí

- **Necílíme na „kniha pro děti"** — velké e-shopy budou vždy dominovat. Místo toho cílíme na „české knihy pro děti", „knihy pro děti od X let", „dětské knihy od českých autorek"
- **Odstraňujeme emoji z meta popisků** — v roce 2026 už není best practice, zahlcují SERP a mohou být oříznuty
- **Odstraňujeme falešný aggregateRating** — riziko penalizace převažuje nad benefitem rich snippetů
- **Mimo rozsah:** image sitemap, samostatná /knihy/ stránka, GDPR stránky, Core Web Vitals optimalizace
