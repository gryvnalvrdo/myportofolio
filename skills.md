# UI/UX & Engineering Skills — Event Planner Portfolio (`Michelle Nathalie`)

> **Scope & Purpose**  
> This document defines the domain design rules, UI/UX architecture, interactivity patterns, anti-AI-slop guardrails, and factual integrity standards for building **Michelle Nathalie's Event Planner & Organizational Leadership Portfolio** (`Next.js` + `Tailwind CSS` + `Vercel`).  
> Every contributor or AI coding agent working on this repository must treat these skills as strict implementation rules.

---

## Skill 01 — Strict Factual Integrity ("Zero Claim, Zero Hallucination")

This portfolio represents a real person. Credibility for an event planner comes from **verified scale, exact roles, clear timelines, and real accountability** — never from fabricated marketing claims.

### Rules
1. **Source of Truth Only**: Every bio statement, role title, date range, organization name, partner entity, GPA, language, skill, and numeric figure MUST trace directly to Michelle Nathalie's verified CV.
2. **Forbidden Content**:
   - No invented client testimonials, ratings, or quotes.
   - No fabricated corporate logos or partner badges beyond entities explicitly named in the CV (`Universitas Ciputra Makassar`, `Badan Eksekutif Mahasiswa`, `Himpunan Mahasiswa Manajemen`, `BNN`, `Dokter Residen`, `TNI AD`).
   - No fake skill percentage bars or arbitrary proficiency meters (e.g., `Leadership: 95%`).
   - No inflated superlatives or unverifiable claims (e.g., *"Award-winning luxury event architect"*, *"Guaranteed seamless ROI"*, *"Best event organizer in Indonesia"*).
   - No invented event budgets, revenue numbers, or ticket prices.
3. **Preserve Ambiguities Honestly**:
   - If the CV lists `15.000+.` for ENTRANCE 2.0 without repeating the unit word, display `15.000+` cleanly (or confirm the exact unit with the owner before appending a label).
   - Correct clear typographical errors only where meaning is unambiguous (e.g., `Time Mangement` -> `Time Management`), without altering factual scope.
4. **Verified Fact Baseline**:
   - **Identity**: Michelle Nathalie · Makassar, Indonesia · `082291956529` · `micnatar@gmail.com` · LinkedIn: `https://www.linkedin.com/in/michelle-nathalie-a3aaab295/`
   - **Education**: Bachelor of Management (`S1 Manajemen`), Universitas Ciputra Makassar (`Sep 2022 – Oct 2026`), GPA `3.77/4.00`
   - **Confirmed Attendance Label**: ENTRANCE 2.0 `15.000+` confirmed as `15.000+ pengunjung` / `15,000+ attendees`
   - **Languages**: Indonesia, Inggris, Hokkien
   - **Hard Skills**: Event Management, Spreadsheet, Strategic Planning, Administrative Management
   - **Soft Skills**: Leadership, Analytical Thinking, Problem Solving, Decision Making, Adaptability, Communication, Teamwork, Time Management

---

## Skill 02 — Anti-AI-Slop Visual Direction (Event Production Lookbook)

Event planning is tactile, structured, logistical, and atmospheric. The interface must feel like an **editorial production dossier / cue-sheet lookbook** — crisp, intentional, and human-curated.

### Aesthetic Direction
- **Canvas & Surface Palette**: Warm editorial alabaster/paper base (`#FAF8F5` / `#F4F1EA`), elevated crisp card surfaces (`#FFFFFF`), deep charcoal ink (`#171717`), muted slate secondary ink (`#52525B`), and fine architectural hairline borders (`#E4DFD5`).
- **Restrained Accent**: Maximum one primary editorial accent (e.g., Deep Espresso/Burgundy `#6E2C36` or Terracotta Clay `#9E472A`) used strictly for active states, rank progression markers, and primary calls-to-action.
- **Typography Pairing**:
  - **Display & Headings**: Crisp geometric/humanist sans-serif (`Plus Jakarta Sans`) with tight tracking (`-0.02em`) for authoritative corporate HR legibility.
  - **Body & UI**: Clean humanist sans-serif (`Inter`) with generous line height (`1.6–1.7`) and `tabular-nums` for dates (`Oct 2025 – May 2026`), GPA (`3.77 / 4.00`), and verified headcounts (`30.000+`, `>100`).
  - **Avoid**: Decorative newspaper serifs or terminal monospace fonts on general UI labels.

### Explicit Anti-Slop Bans
- **NO** dark neon purple/indigo/cyan gradients, glowing blobs, or radial aura backgrounds.
- **NO** frosted-glass cards floating over chaotic gradient meshes.
- **NO** generic 3-column "Why Hire Me" icon boxes with pastel circles and buzzword fluff.
- **NO** emoji bullet points (`🚀`, `✨`, `🔥`) in headings, metric cards, or skill tags.
- **NO** wall-of-text CV dumps directly on the landing page.
- **NO** generic copy (*"Passionate visionary turning dreams into unforgettable moments"*).

---

## Skill 03 — Symmetric Responsive Grid & Layout Discipline

Symmetry and alignment are mandatory across **mobile (`375px`)**, **tablet (`768px`)**, and **desktop (`1280px–1440px`)**.

### Desktop & Mobile Symmetry Rules
1. **Zero-Orphan Grid Rule**:
   - Never design a grid that leaves a lone orphan card on the final row at desktop breakpoints.
   - Consolidate the 9 raw CV entries into **7 logical showcase items**:
     - **1 Full-Width Flagship Series Card (`12 cols`)**: **ENTRANCE Series (1.0 · 2.0 · 3.0)**
     - **6 Equal-Height Grid Cards**: arranged in a balanced **`2 × 3` (desktop)** or **`3 × 2` (wide)** grid — **zero remainder on desktop**.
   - When category filters are active, ensure subsets still align symmetrically (`Event & Festival` = 4 cards -> `2×2`; `Organisasi & Kepemimpinan` = 2 cards -> `2×1`; plus Flagship Series where applicable).
2. **Uniform Card Anatomy**:
   - Every grid card uses `h-full flex flex-col justify-between`.
   - Fixed-aspect cover media frame (`aspect-[16/10]` across all grid cards) so image tops and bottoms align horizontally across every row.
   - Standardized vertical rhythm: Cover Frame -> Metadata Row (Period + Category) -> Title & Role -> 1–2 line factual hook + key verified figures -> Bottom Action Cue (`Lihat Detail & Dokumentasi ->`).
3. **Mobile Symmetry (`< 768px`)**:
   - Main experience cards stack cleanly (`grid-cols-1`) with uniform padding (`p-4` / `p-5`) and matching `aspect-[16/10]` frames.
   - Compact Hero highlight slots use symmetric `grid-cols-2` (`2×1` side-by-side) and cards match metric count (`grid-cols-2` or `grid-cols-3`) so no cell sits orphaned.
   - Zero horizontal page overflow (`overflow-x-hidden` audit at `375px` width) and touch targets at least `44×44px`.

---

## Skill 04 — Interactive Progressive Disclosure & Event-Planner UX

Users should feel invited to explore rather than overwhelmed by dense CV bullet points upfront.

### 1. Click-to-Expand Split Case Study (Preview Outside, Text + Photos Inside)
- **Outside (Grid Card)**: Show only the visual cover frame, event/organization title, role badge, period, 1 factual hook, and key verified numbers (`30.000+ Pengunjung`, `>100 Anggota`).
- **Inside (On Click -> Modal / Slide-Over Split View)**:
  - Side-by-side layout on desktop (`Text & Responsibilities` on one column, `Photo Documentation Gallery` on the other); stacked cleanly on mobile.
  - Displays the parent organization, exact period, verified scale indicators, full factual CV responsibilities, and multi-slot photo gallery with captions + lightbox zoom.
  - Supports keyboard escape (`Esc`), backdrop click close, and `Previous / Next` navigation between experiences without leaving the modal.

### 2. Consolidated ENTRANCE Series (`1.0 · 2.0 · 3.0`) Showcase
- Instead of 3 repetitive ENTRANCE cards cluttering the grid, group them into **one flagship interactive card** spanning `Nov 2022 – May 2025`.
- **Single Click -> All 3 Editions Visible & Rank-Differentiated**:
  - Clicking the ENTRANCE card opens a unified progression view where **all 3 editions (`1.0`, `2.0`, `3.0`) are immediately visible together**, arranged chronologically/hierarchically with unmistakable visual differentiation by **role & rank**:
    - `ENTRANCE 1.0` (`Nov 2022 – May 2023`) — **Tier: Department Member** (`Sponsorship Department` · 3 sponsor perusahaan)
    - `ENTRANCE 2.0` (`Oct 2023 – May 2024`) — **Tier: Chairperson** (`Ketua` · 150 anggota · 4 hari · 15.000+)
    - `ENTRANCE 3.0` (`Oct 2024 – May 2025`) — **Tier: Chairperson** (`Ketua` · di bawah Himpunan Mahasiswa Manajemen · 150+ anggota · 3 hari · 20.000+ pengunjung)
  - Include an interactive edition filter/focus tab (`Semua 3 Edisi` | `1.0 Sponsorship` | `2.0 Ketua` | `3.0 Ketua`) so visitors can compare all three side-by-side or inspect one edition's photo gallery up close.

### 3. Avoid Redundant Experience Duplication
- Do not repeat the same event list across multiple overlapping sections (e.g., separate "Timeline", "Highlight Cards", or standalone "Competencies/Education" sections duplicating the CV). Keep page structure concise (**Profile**, **Experience**, **Contact**), placing academic credentials inline in the Profile summary and full skills/education breakdown inside the Bilingual CV Viewer (`Lihat / Cetak CV`).
- Keep career positioning open for HR teams across Management, Operations, Project, and Event roles rather than boxing the navbar brand strictly into one narrow job title.

### 4. Mobile Navigation, Scrollbars & Touch Symmetry
- On mobile (`< lg`), use a smooth **slide-in drawer from the left** triggered by the hamburger button (`Menu`), with full backdrop overlay and `Esc` support.
- Filter tabs must fit cleanly in a single symmetric row (`grid-cols-3`) without awkward multi-line pill wrapping on `375px` viewports.
- Card metric grids must match item count (`grid-cols-2` for 2 metrics, `grid-cols-3` for 3 metrics) so no metric sits orphaned.
- Style scrollbars cleanly (`scrollbar-width: thin` + `::-webkit-scrollbar` with hidden arrow buttons) to harmonize with the warm ivory/burgundy palette inside modals and horizontal filmstrips.

---

## Skill 05 — Two-Layer Media & Scalable Multi-Photo Gallery Architecture

Photos are planned for both **outside the cards** and **inside the expanded experience drawers**, and each event may eventually contain **many photos** (`2`, `6`, `15+`).

### Media Layers
1. **Outside Photos (Immediately Visible on Page)**:
   - **Hero Portrait Frame**: Balanced `4:3` portrait card in the Hero section.
   - **Card Cover Thumbnails**: Every experience card outside renders 1 clean cover photo frame (`aspect-[16/10]`) plus a live photo-count indicator when real photos are present.
2. **Inside Photos (Scalable Carousel + Filmstrip Gallery)**:
   - Use `<EventPhotoGallery />` supporting **any number of photos per event** via an active `16:10` stage viewer, `←` / `→` slide controls, `01 / NN` photo counter, scrollable thumbnail filmstrip, and fullscreen lightbox with keyboard navigation.
   - Automatically hide empty placeholder entries once at least 1 real photo path is provided in `gallerySlots`.
   - For the consolidated **ENTRANCE Series**, each edition (`1.0`, `2.0`, `3.0`) keeps its own separate `<EventPhotoGallery />` so photos from her Sponsorship era stay distinct from her Ketua eras.

### Placeholder Engineering Standard
- Never render broken `<img>` tags, generic browser broken icons, or sloppy "No Image" boxes.
- Create a reusable `<EventMediaFrame />` component powered by a central data file (`src/data/portfolio.ts`).
- When `imageSrc` is `null` or empty, render an **intentional Architectural Photo Slot**:
  - Subtle tonal grid pattern + `1px` inner hairline frame.
  - Clean sans slot label (e.g., `DOKUMENTASI // REKFEST 2.0`).
  - Recommended aspect ratio indicator (`16:10` / `4:3`) so the owner knows exactly what image to drop in.
- When `imageSrc` is provided (e.g., `"/images/rekfest-cover.jpg"`), `<EventMediaFrame />` seamlessly renders `<Image />` with `object-cover`, smooth hover scale (`scale-[1.02]`), and lightbox support.

---

## Skill 06 — Motion, Accessibility & Responsive Polish

1. **Purposeful Motion**:
   - Animate only GPU-composited properties (`transform`, `opacity`) and clean layout transitions (`180ms–320ms`, smooth cubic-bezier easing).
   - Respect `@media (prefers-reduced-motion: reduce)` across all drawers, filter pills, and hover states.
2. **Accessibility (WCAG AA)**:
   - Minimum `4.5:1` text contrast (`#171717` on `#FAF8F5` / `#FFFFFF`), `3:1` for borders and large display text.
   - Full keyboard support: `Tab` focus rings (`focus-visible:ring-2`), `Enter`/`Space` to open cards, `Esc` to close drawers/lightboxes, focus trapping inside modals.
   - Descriptive `aria-label` attributes on interactive timeline bars, close buttons, and edition tabs.

---

## Skill 07 — Vercel & Production Engineering Standards

1. **Framework & Structure**:
   - `Next.js` (App Router, TypeScript strict mode) + `Tailwind CSS` + `framer-motion` (or `motion`) + `lucide-react`.
   - Centralized factual dataset in `src/data/portfolio.ts` so updating text or adding real photo paths requires editing only one typed file.
2. **Vercel Deployment Readiness**:
   - Static-friendly architecture (`next build` succeeds cleanly with zero TypeScript or ESLint errors).
   - Properly configured `next/image` dimensions/aspect ratios to prevent Cumulative Layout Shift (`CLS = 0`).
   - Factual SEO `<title>`, meta description, and OpenGraph tags (`Michelle Nathalie — Event Planner & Organizational Lead | Makassar`).
   - Direct contact actions (`mailto:micnatar@gmail.com`, `tel:+6282291956529`, LinkedIn `https://www.linkedin.com/in/michelle-nathalie-a3aaab295/`, one-click Copy Email) tested for mobile and desktop.
3. **Pre-Push Verification Checklist**:
   - Desktop (`1440px`) and Mobile (`375px`) symmetry check (zero orphan cards, zero horizontal scroll).
   - Interactive flow check: Filter tabs -> Language toggle (`ID | EN`) -> Open normal card (Text + Photo split) -> Open consolidated ENTRANCE card (1.0, 2.0, 3.0 rank differentiation) -> Timeline interaction -> Copy email feedback -> Printable Bilingual CV view.
   - Factual audit against original CV PDF (zero invented claims).

---

## Skill 08 — Bilingual Experience & HR-Ready Dual-Language CV (`ID / EN`)

Corporate recruiters and HR teams evaluate clarity across both Indonesian and English.

1. **Instant Bilingual UI & Content Switching (`ID | EN`)**:
   - Every visible label, navigation link, section heading, filter button, timeline cue, experience role, responsibility bullet, education label, and printable CV text switches cleanly between **Bahasa Indonesia** and **English**.
   - Persist preference safely in `localStorage` without SSR hydration flicker or layout shift.
2. **Faithful Translation Discipline**:
   - English translations must remain 100% faithful to the Indonesian CV facts without embellishing metrics or adding buzzwords (e.g., `Penanggung Jawab` -> `Person in Charge / Event Lead`, `Ketua` -> `Chairperson`, `Koordinator Acara` -> `Event Coordinator`, `Koordinator Perlengkapan dan Penanggung Jawab` -> `Equipment Coordinator & Person in Charge`).
3. **HR-Ready Dual-Language Printable CV Sheet**:
   - Provide an accessible **"Lihat / Cetak CV (ID / EN)"** (`View / Print CV`) modal or `/cv` route formatted with `@media print` rules so HR teams can inspect or save a crisp, structured single-page resume in either Indonesian or English.

---

## Skill 09 — Web Security & Production Deployment Hardening

Even a static-first portfolio deployed to Vercel must follow modern defensive web security standards.

1. **Strict Security Headers (`next.config.ts`)**:
   - `poweredByHeader: false` to hide framework fingerprinting (`X-Powered-By`).
   - `Content-Security-Policy` (CSP): Lock `default-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'`, `img-src 'self' data: blob:`, `font-src 'self'`, `connect-src 'self'`, `upgrade-insecure-requests`, and disallow `'unsafe-eval'`.
   - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`.
   - `X-Frame-Options`: `DENY` and `X-Content-Type-Options`: `nosniff`.
   - `Referrer-Policy`: `strict-origin-when-cross-origin`.
   - `Permissions-Policy`: Disable unused hardware/tracking APIs (`camera=(), microphone=(), geolocation=(), payment=(), usb=()`).
   - `Cross-Origin-Opener-Policy: same-origin` & `Cross-Origin-Resource-Policy: same-origin`.
2. **Zero Client-Side XSS / Injection Surfaces**:
   - Self-host typography at build time via `next/font/google` (zero runtime third-party font tracking or external CDN script calls).
   - Never use `dangerouslySetInnerHTML`, `eval`, or unvalidated `href` schemes; sanitize/whitelist external links (`https://`, `mailto:`, `tel:`) and attach `rel="noopener noreferrer"` on `target="_blank"`.
   - Keep zero secrets or private tokens in client bundles (`NEXT_PUBLIC_*` audit).
3. **Resilient Production Boundaries & Metadata**:
   - Custom `not-found.tsx` and `error.tsx` boundaries that never expose stack traces.
   - `robots.ts` and `sitemap.ts` configured cleanly for production crawling.
   - Run `npm audit` and verify `next build` + `tsc --noEmit` + lint before pushing to GitHub / deploying to Vercel.
