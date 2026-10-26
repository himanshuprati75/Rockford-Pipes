# Rockford Pipes (Trinity Plumbing, HVAC, & Remodeling) — Codebase & UX Architecture Audit

## 1. GLOBAL STYLING & COLOR PSYCHOLOGY
- **Brand & Target Market**:
  - Business Name: **Trinity Plumbing, HVAC, & Remodeling** (Operating on domain `https://www.rockfordpipes.com/`)
  - Target Market: Rockford, Loves Park, Machesney Park, Belvidere, Roscoe, Rockton, Freeport, Winnebago, and the greater Chicagoland area.
  - Emergency Line: **(815) 821-1185** (Call or Text enabled).
  - Email: **Rockfordpipes@gmail.com**.
- **Curated Color Palette**:
  - `pipe-700` (`#134e77`): Steel Water Blue representing plumbing dependability, leak protection, and certified trade authority.
  - `flame-600` / `flame-700` (`#dc2626` / `#991b1b`): Emergency Crimson Flame representing immediate action, heating repair, and rapid 60-minute dispatch.
  - `copper-500` (`#d97706`): Copper Accent representing pipe craftsmanship, soldering precision, and best-price guarantees.
  - `steel-950` (`#070f1e` / `#0f172a`): Industrial deep slate base establishing modern enterprise visual contrast.

---

## 2. PROFESSIONAL 4-TO-5 SEPARATED TABS ARCHITECTURE (Core Standard)
- **Strict Tab Rule**:
  - Top navigation bars must never feature cluttered or wrapped text links. They are strictly limited to **4 to 5 clean, distinct, separated tabs**.
- **Header Separated Pill Tab System (`Header.jsx`)**:
  - **Container**: Elevated capsule pill container (`bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 shadow-inner flex items-center`).
  - **Tabs (Exactly 5)**:
    1. **Services** (with interactive dropdown containing 6 core specialties: Burst Pipe, Water Heaters, Tub Conversion, Drain Rooter, 24/7 HVAC, Mobile Home).
    2. **Pricing** (with subtle `LIVE` pill badge, linking to `#calculator`).
    3. **Real Work** (linking to `#craftsmanship`).
    4. **About Us** (linking to `#about`).
    5. **Reviews** (linking to `#reviews`).
  - **Separation & Spacing**:
    - Each tab is rendered as an individually padded rounded pill with discrete vertical dividers (`w-px h-4 bg-slate-300/80`).
    - Every tab enforces `whitespace-nowrap` to guarantee zero text wrapping.
    - Phone number `(815) 821-1185` is locked to a single line with generous breathing room.
- **Services Section Separated Tabs (`ServicesGrid.jsx`)**:
  - Interactive 5-tab filter bar: `[All Services (8)]` `[Emergency Leaks]` `[Water Heaters]` `[Tub & Shower]` `[Heating & AC]` `[Mobile Home]`.
- **Cost Calculator Category Filter Tabs (`CostCalculator.jsx`)**:
  - Segmented category tabs: `[All Services (6)]` `[Leaks & Drains]` `[Water Heaters]` `[Tub-to-Shower]` `[Heating & AC]`.

---

## 3. MOBILE-FIRST ARCHITECTURE (Crucial)
- **Mobile Menu Drawer**:
  - Replaces messy text lists with **6 separated card buttons** with category icons, live tags, and direct voucher claim cards.
- **Sticky Bottom Lifeline CTA (`MobileStickyCTA.jsx`)**:
  - Fixed to viewport bottom on screens `< 768px` (`fixed bottom-0 left-0 right-0 z-40`).
  - Implements safe-area inset padding (`pb-[max(0.75rem,env(safe-area-inset-bottom))]`) for bezel-less devices.
  - Features a prominent 1-tap `CALL (815) 821-1185` button with glowing pulse animation alongside a direct `$50 OFF` ticket button linking directly to the synchronized lead form.

---

## 4. HIGH-CONVERTING RECIPROCITY SEQUENCE
- **Step 1 — Immediate Calming & Problem Identification (`Hero.jsx`)**:
  - 3-second hook delivering instant trust: *"Rockford's 24/7 Emergency Plumbers & HVAC Pros. Best Price Guaranteed."*
  - Quick-dispatch issue selector allowing users to click their emergency.
- **Step 2 — 4-Pillar Engineering & Value Defense (`TrustShield.jsx`)**:
  - Best Price Guaranteed, Licensed/Bonded/Insured, Mobile Home Specialists, Same-Day Dispatch.
- **Step 3 — Value-First Reciprocity Engine (`CostCalculator.jsx`)**:
  - Homeowners see transparent price ranges, estimated arrival times, and typical savings before giving any personal information.
- **Step 4 — State-Synchronized Lead Capture (`LeadCaptureForm.jsx`)**:
  - Pre-populates selected emergency issue.
  - Automatically activates web courtesy discount: `-$50.00 OFF` (`CODE: TRINITY50-ROCKFORD`).
  - Realistic confirmation ticket generator (`RP-IL-XXXX`) with 15-minute response window and 1-tap emergency line.

---

## 5. BUILD & VERIFICATION STATUS
- **Production Build**: `npm run build` completed with exit code `0`.
- **Distribution Artifacts**:
  - `dist/index.html` (3.74 kB)
  - `dist/assets/index-Dd8c7w34.css` (42.94 kB)
  - `dist/assets/index-CW3zE1Yj.js` (248.81 kB)
- **Live Local Verification**: Verified on `http://localhost:3003/` across desktop (1440x900) and mobile (375x667) viewports with browser subagent visual capture.
