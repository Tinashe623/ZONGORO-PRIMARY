# Phase 2 — Multi-Page SPA Expansion

Expand the St James Zongoro Primary School website from a single-page scroll site into a fully-routed **multi-page SPA** with React Router. Add 4 new dedicated pages (Staff, Admissions, Boarding, Co-Curricular Activities), enhance the Home page with "Why Choose Us" and "Stats" sections, and refactor navigation to support both page routes and in-page scroll links.

## User Review Required

> [!IMPORTANT]
> **Routing Strategy**: Installing `react-router-dom` v6. The Home page keeps all 11 existing sections with smooth-scroll. New pages (Staff, Admissions, Boarding, Activities) get their own routes. Navbar will use a **hybrid** approach — scroll links for Home page sections + router links for dedicated pages.

> [!IMPORTANT]
> **New Pages Summary**:
> | Route | Page | Description |
> |---|---|---|
> | `/` | Home | All existing sections + new WhyChooseUs + Stats sections |
> | `/staff` | Staff | Staff members grid with roles & specialisations |
> | `/admissions` | Admissions | Requirements, steps, fees, documents, CTA |
> | `/boarding` | Boarding | Boarding facilities, fees, rules, daily schedule |
> | `/activities` | Activities | Co-curricular activities: sports, arts, clubs |

> [!WARNING]
> **Breaking Change**: The `Navbar` and `Footer` will be refactored from `react-scroll` links to a hybrid `react-router-dom` + `react-scroll` approach. The `App.tsx` will change from direct section composition to a `<BrowserRouter>` with route definitions.

---

## Proposed Changes

### 1 — Install React Router

#### [MODIFY] [package.json](file:///home/tinashe/zongoro/package.json)
- Install: `react-router-dom`
- Install: `@types/react-router-dom` (if needed for TS)

```bash
npm install react-router-dom
```

---

### 2 — Routing Infrastructure

#### [MODIFY] [src/main.tsx](file:///home/tinashe/zongoro/src/main.tsx)
- Wrap the app in `<BrowserRouter>` from `react-router-dom`
- Structure: `ChakraProvider → BrowserRouter → App`

#### [MODIFY] [src/App.tsx](file:///home/tinashe/zongoro/src/App.tsx)
- Replace direct section composition with `<Routes>` and `<Route>` definitions
- All routes wrapped inside `<Layout>`
- Route map:
  - `/` → `<HomePage />`
  - `/staff` → `<StaffPage />`
  - `/admissions` → `<AdmissionsPage />`
  - `/boarding` → `<BoardingPage />`
  - `/activities` → `<ActivitiesPage />`

---

### 3 — Page Components (new directory: `src/pages/`)

#### [NEW] [src/pages/HomePage.tsx](file:///home/tinashe/zongoro/src/pages/HomePage.tsx)
Extracts the current `App.tsx` section composition into a dedicated page component:
```
Hero → WhyChooseUs (NEW) → Stats (NEW) → About → ChurchSection →
CommunitySection → Academics → ResultsSection → Testimonials →
Transport → Gallery → Announcements → Contact
```
- Scroll-to-top on mount via `useEffect`

#### [NEW] [src/pages/StaffPage.tsx](file:///home/tinashe/zongoro/src/pages/StaffPage.tsx)
- Page hero banner with maroon gradient overlay, title "Our Team"
- Staff grid section
- CTA banner at bottom linking to Contact

#### [NEW] [src/pages/AdmissionsPage.tsx](file:///home/tinashe/zongoro/src/pages/AdmissionsPage.tsx)
- Page hero banner, title "Admissions"
- Requirements section
- Application steps timeline
- Documents checklist
- Fees overview
- CTA "Apply Now" linking to Contact

#### [NEW] [src/pages/BoardingPage.tsx](file:///home/tinashe/zongoro/src/pages/BoardingPage.tsx)
- Page hero banner, title "Boarding"
- Facilities overview
- Daily schedule timeline
- Rules & expectations
- Boarding fees
- Photo gallery of boarding facilities
- CTA "Enquire About Boarding"

#### [NEW] [src/pages/ActivitiesPage.tsx](file:///home/tinashe/zongoro/src/pages/ActivitiesPage.tsx)
- Page hero banner, title "Co-Curricular Activities"
- Activities grid (sports, arts, clubs, academic competitions)
- Achievements / awards section
- Photo highlights
- CTA "Join Our Activities"

---

### 4 — Shared Page Components

#### [NEW] [src/components/ui/PageHero.tsx](file:///home/tinashe/zongoro/src/components/ui/PageHero.tsx)
Reusable hero banner for sub-pages (not the Home hero):
- Shorter height (`40vh` / `300px`)
- Maroon-to-dark gradient overlay
- Breadcrumb: Home > Current Page
- Page title (white, bold)
- Optional subtitle
- Uses `react-router-dom` `<Link>` for breadcrumb nav

#### [NEW] [src/components/ui/CTABanner.tsx](file:///home/tinashe/zongoro/src/components/ui/CTABanner.tsx)
Reusable call-to-action banner for bottom of sub-pages:
- Maroon gradient background
- Heading + subtitle
- Primary CTA button (white on maroon)
- Used at the bottom of Staff, Admissions, Boarding, Activities pages

---

### 5 — New Home Page Sections

#### [NEW] [src/components/sections/WhyChooseUs.tsx](file:///home/tinashe/zongoro/src/components/sections/WhyChooseUs.tsx)
**Position**: After Hero, before About

- White background
- Section heading: "Why Choose St James Zongoro?"
- **6-card grid** (`SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }}`):
  - 🎓 **Academic Excellence** — Consistent Grade 7 pass rates above 90%
  - ⛪ **Christian Foundation** — Rooted in Anglican values and morals
  - 🏘️ **Community Partnership** — Strong ties with local leadership
  - 🚌 **Reliable Transport** — Safe daily school bus service
  - 🏠 **Boarding Facilities** — Modern boarding institute (NEW!)
  - 🎯 **Holistic Development** — Sports, arts, and extracurricular activities
- Each card: maroon icon circle, heading, description text
- Hover elevation effect
- Staggered scroll reveal animation

#### [NEW] [src/components/sections/StatsSection.tsx](file:///home/tinashe/zongoro/src/components/sections/StatsSection.tsx)
**Position**: After WhyChooseUs, before About

- Maroon gradient background (`linear-gradient(135deg, #800020, #560015)`)
- White text
- **4 animated stat counters** in a row:
  - `500+` Students Enrolled
  - `30+` Qualified Staff
  - `95%` Grade 7 Pass Rate
  - `39+` Years of Excellence
- Animated count-up on scroll (using Framer Motion `useInView` + `useMotionValue`)
- Responsive: 2×2 grid on mobile, 4 columns on desktop
- Subtle particle/shimmer effect or decorative pattern overlay

---

### 6 — Staff Section & Data

#### [NEW] [src/data/staff.ts](file:///home/tinashe/zongoro/src/data/staff.ts)
Staff data array with fields:
```typescript
interface StaffMember {
  id: number;
  name: string;
  title: string;           // e.g. "Head Teacher", "Senior Teacher"
  specialisation: string;  // e.g. "Mathematics & Science", "English & Literature"
  image?: string;          // placeholder avatar or generated
  qualifications: string;  // e.g. "B.Ed (UZ), Dip.Ed"
  yearsAtSchool: number;
  bio: string;             // short 2-sentence bio
  category: 'leadership' | 'teaching' | 'support';
}
```
- Include ~12-15 placeholder staff members:
  - **Leadership** (3): Head Teacher, Deputy Head, Senior Teacher
  - **Teaching Staff** (8-10): Subject specialists across grades
  - **Support Staff** (2-3): Admin Secretary, Groundskeeper, Kitchen Staff

#### [NEW] [src/components/sections/StaffGrid.tsx](file:///home/tinashe/zongoro/src/components/sections/StaffGrid.tsx)
- Category filter tabs: All | Leadership | Teaching Staff | Support Staff
- Responsive grid (`SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}`)
- Staff cards with:
  - Avatar/photo (circular, maroon border)
  - Name (bold)
  - Title (maroon text)
  - Specialisation (muted text)
  - Qualifications badge
  - Years at school badge
  - Hover: card flips or expands to show short bio
- Scroll reveal animation with stagger

#### [NEW] [src/components/sections/StaffLeadership.tsx](file:///home/tinashe/zongoro/src/components/sections/StaffLeadership.tsx)
- Featured section for Head Teacher and Deputy Head
- Larger card layout, 2-column (image left, bio right)
- Quote from Head Teacher
- More prominent than regular staff cards
- Maroon accent sidebar on quote block

---

### 7 — Admissions Section & Data

#### [NEW] [src/data/admissions.ts](file:///home/tinashe/zongoro/src/data/admissions.ts)
```typescript
interface AdmissionRequirement {
  grade: string;       // "ECD A", "ECD B", "Grade 1-7"
  ageRange: string;    // "3-4 years", "4-5 years"
  requirements: string[];
}

interface ApplicationStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

interface FeeStructure {
  category: string;
  amount: string;
  period: string;  // "per term", "once-off"
}

interface RequiredDocument {
  name: string;
  description: string;
}
```

#### [NEW] [src/components/sections/AdmissionRequirements.tsx](file:///home/tinashe/zongoro/src/components/sections/AdmissionRequirements.tsx)
- Grade-by-grade requirements in expandable accordion or tabbed cards
- Age requirements, class sizes, entry assessments
- Clean card layout with maroon grade badges

#### [NEW] [src/components/sections/ApplicationSteps.tsx](file:///home/tinashe/zongoro/src/components/sections/ApplicationSteps.tsx)
- **Vertical timeline** design (mobile) / **Horizontal stepper** (desktop)
- 5 steps:
  1. 📋 Collect Application Form
  2. 📄 Prepare Required Documents
  3. 📝 Submit Application
  4. 🎯 Entrance Assessment (if applicable)
  5. ✅ Receive Admission Letter
- Each step: numbered maroon circle, title, description
- Animated line connecting steps (Framer Motion draw)
- Green checkmark accent on completion visual

#### [NEW] [src/components/sections/DocumentsChecklist.tsx](file:///home/tinashe/zongoro/src/components/sections/DocumentsChecklist.tsx)
- Required documents list with checkbox-style icons
- Documents: Birth Certificate, Transfer Letter, School Reports, Passport Photos, Immunisation Record, etc.
- Clean two-column layout with maroon check icons
- Downloadable forms note (placeholder)

#### [NEW] [src/components/sections/FeesOverview.tsx](file:///home/tinashe/zongoro/src/components/sections/FeesOverview.tsx)
- Fee table by grade/category
- Uses Chakra `<Table>` with striped alternating rows
- Categories: Tuition, Levies, Boarding (if applicable), Transport
- "Fees are subject to change" disclaimer
- Maroon header row

---

### 8 — Boarding Section & Data

#### [NEW] [src/data/boarding.ts](file:///home/tinashe/zongoro/src/data/boarding.ts)
```typescript
interface BoardingFacility {
  name: string;
  description: string;
  icon: string;
}

interface DailyScheduleItem {
  time: string;
  activity: string;
  icon: string;
}

interface BoardingRule {
  category: string;
  rules: string[];
}
```

#### [NEW] [src/components/sections/BoardingOverview.tsx](file:///home/tinashe/zongoro/src/components/sections/BoardingOverview.tsx)
- Introduction text about the new boarding institute
- 2-column layout: text + image placeholder
- Key highlights: modern dormitories, supervised study time, nutritious meals, safe environment
- Cream background section

#### [NEW] [src/components/sections/BoardingFacilities.tsx](file:///home/tinashe/zongoro/src/components/sections/BoardingFacilities.tsx)
- 6-card icon grid:
  - 🛏️ Dormitories — Separate boys/girls, clean, well-maintained
  - 🍽️ Dining Hall — Nutritious meals, 3 times daily
  - 📚 Study Hall — Supervised evening study sessions
  - 🏥 Sick Bay — On-site first aid and health monitoring
  - 🏃 Recreation — Sports fields, common room
  - 🔒 Security — 24-hour supervision, controlled access
- White background, maroon icon circles, hover elevation

#### [NEW] [src/components/sections/DailySchedule.tsx](file:///home/tinashe/zongoro/src/components/sections/DailySchedule.tsx)
- Visual timeline of a boarder's typical day:
  - 5:30 AM — Wake up & Personal hygiene
  - 6:00 AM — Morning devotion
  - 6:30 AM — Breakfast
  - 7:30 AM — Classes begin
  - 12:30 PM — Lunch
  - 1:30 PM — Afternoon classes
  - 3:30 PM — Sports & activities
  - 5:00 PM — Evening study (prep)
  - 7:00 PM — Dinner
  - 8:00 PM — Free time
  - 9:00 PM — Lights out
- Vertical timeline with maroon line and time badges
- Alternating left/right cards (desktop), stacked (mobile)
- Subtle green accent for break/meal times

#### [NEW] [src/components/sections/BoardingRules.tsx](file:///home/tinashe/zongoro/src/components/sections/BoardingRules.tsx)
- Accordion/expandable sections:
  - General Conduct
  - Personal Items (what to bring / not to bring)
  - Leave & Visitation Policy
  - Health & Safety
- Cream background, maroon accordion headers
- Clean typography, bullet-point rules

---

### 9 — Co-Curricular Activities Section & Data

#### [NEW] [src/data/activities.ts](file:///home/tinashe/zongoro/src/data/activities.ts)
```typescript
interface Activity {
  id: number;
  name: string;
  category: 'sports' | 'arts' | 'clubs' | 'academic';
  description: string;
  icon: string;
  schedule: string;    // e.g. "Tuesdays & Thursdays, 3:30 PM"
  achievements?: string[];
  image?: string;
}
```
- Include 12-16 activities:
  - **Sports** (5): Soccer, Netball, Athletics, Cricket, Swimming
  - **Arts** (3): Choir, Drama, Traditional Dance
  - **Clubs** (4): Scripture Union, Debate Club, Environmental Club, Reading Club
  - **Academic Competitions** (3): Quiz Team, Science Fair, Mathematics Olympiad

#### [NEW] [src/components/sections/ActivitiesGrid.tsx](file:///home/tinashe/zongoro/src/components/sections/ActivitiesGrid.tsx)
- Category filter tabs: All | Sports | Arts & Culture | Clubs | Academic
- Responsive card grid (`SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }}`)
- Each card:
  - Category colour badge (sports=green, arts=maroon, clubs=forest, academic=dark)
  - Icon
  - Activity name
  - Description
  - Schedule
  - Hover: reveal achievements list
- Staggered scroll reveal

#### [NEW] [src/components/sections/Achievements.tsx](file:///home/tinashe/zongoro/src/components/sections/Achievements.tsx)
- Trophy/medal showcase section
- Maroon background with white text
- Notable achievements in competitions, district/provincial
- Stat counters: "X District Titles", "X Provincial Medals", etc.
- Trophy icon decorations

---

### 10 — Navigation Refactor

#### [MODIFY] [src/components/layout/Navbar.tsx](file:///home/tinashe/zongoro/src/components/layout/Navbar.tsx)
**Major refactor** — Hybrid navigation system:

- **Nav link types**:
  - **Route links** (react-router `<Link>`): Staff, Admissions, Boarding, Activities
  - **Scroll links** (react-scroll `<ScrollLink>`): Home sections (About, Academics, Church, etc.) — only active when on Home page
  - **Dropdown menus** for grouping related links

- **Updated link structure**:
  ```
  Home (route: /)
  About (scroll on home / route to /#about)
  Academics ▼ (dropdown)
    ├── Curriculum (scroll: #academics)
    ├── Results (scroll: #results)
    └── Co-Curricular Activities (route: /activities)
  Admissions (route: /admissions)
  Boarding (route: /boarding)
  Our Team (route: /staff)
  Church (scroll: #church)
  Gallery (scroll: #gallery)
  Contact (scroll: #contact)
  ```

- **Smart scroll behaviour**: When clicking a scroll link from a sub-page, navigate to `/#section` (route to home first, then scroll)
- Mobile drawer updated with same hybrid link structure
- Active route highlighting with maroon underline

#### [MODIFY] [src/components/layout/Footer.tsx](file:///home/tinashe/zongoro/src/components/layout/Footer.tsx)
- Update Quick Links to include new pages
- Add new column: "Pages" with links to Staff, Admissions, Boarding, Activities
- Use `react-router-dom` `<Link>` for page routes, `<a href="/#section">` for scroll targets

---

### 11 — Hero CTA Updates

#### [MODIFY] [src/components/sections/Hero.tsx](file:///home/tinashe/zongoro/src/components/sections/Hero.tsx)
- Change "Apply for Admission" button to route to `/admissions` page (react-router `<Link>`)
- Keep "Contact Us" as scroll link to `#contact`
- Keep "Learn More" as scroll link to `#about`

---

## Folder Structure (Phase 2 additions)

```
src/
├── pages/                          ← NEW directory
│   ├── HomePage.tsx                ← Extracted from App.tsx
│   ├── StaffPage.tsx               ← NEW
│   ├── AdmissionsPage.tsx          ← NEW
│   ├── BoardingPage.tsx            ← NEW
│   └── ActivitiesPage.tsx          ← NEW
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              ← REFACTORED (hybrid nav)
│   │   ├── Footer.tsx              ← MODIFIED (new links)
│   │   ├── Layout.tsx              ← UNCHANGED
│   │   └── TopBar.tsx              ← UNCHANGED
│   ├── sections/
│   │   ├── WhyChooseUs.tsx         ← NEW (Home page)
│   │   ├── StatsSection.tsx        ← NEW (Home page)
│   │   ├── StaffGrid.tsx           ← NEW (Staff page)
│   │   ├── StaffLeadership.tsx     ← NEW (Staff page)
│   │   ├── AdmissionRequirements.tsx ← NEW (Admissions page)
│   │   ├── ApplicationSteps.tsx    ← NEW (Admissions page)
│   │   ├── DocumentsChecklist.tsx  ← NEW (Admissions page)
│   │   ├── FeesOverview.tsx        ← NEW (Admissions page)
│   │   ├── BoardingOverview.tsx    ← NEW (Boarding page)
│   │   ├── BoardingFacilities.tsx  ← NEW (Boarding page)
│   │   ├── DailySchedule.tsx       ← NEW (Boarding page)
│   │   ├── BoardingRules.tsx       ← NEW (Boarding page)
│   │   ├── ActivitiesGrid.tsx      ← NEW (Activities page)
│   │   ├── Achievements.tsx        ← NEW (Activities page)
│   │   ├── Hero.tsx                ← MODIFIED (CTA routing)
│   │   └── ... (existing sections unchanged)
│   └── ui/
│       ├── PageHero.tsx            ← NEW (sub-page banner)
│       ├── CTABanner.tsx           ← NEW (bottom CTA)
│       └── ... (existing UI unchanged)
├── data/
│   ├── staff.ts                    ← NEW
│   ├── admissions.ts               ← NEW
│   ├── boarding.ts                 ← NEW
│   ├── activities.ts               ← NEW
│   └── ... (existing data unchanged)
└── ...
```

---

## Open Questions

> [!IMPORTANT]
> 1. **Staff Data**: Do you have actual staff names, titles, and specialisations to use? Otherwise I'll create realistic placeholder data.

> [!IMPORTANT]
> 2. **Fee Structure**: Should I include actual fee amounts, or use placeholders like "Contact school for current fees"?

> [!IMPORTANT]
> 3. **Boarding Status**: Is the boarding institute already open, or should the page be framed as "Coming Soon"?

> [!IMPORTANT]
> 4. **Activities Achievements**: Do you have specific achievements/awards to highlight, or should I use realistic placeholder data?

---

## Verification Plan

### Automated Tests
- `npm run build` — Zero TypeScript errors across all new files
- `npx tsc --noEmit` — Type checking pass

### Browser Verification
1. Run `npm run dev`
2. **Routing checks**:
   - Navigate to `/` — Home page with all sections including new WhyChooseUs + Stats
   - Navigate to `/staff` — Staff page renders with grid
   - Navigate to `/admissions` — Admissions page renders with timeline
   - Navigate to `/boarding` — Boarding page renders with schedule
   - Navigate to `/activities` — Activities page renders with grid
   - Click browser Back/Forward — navigation works correctly
   - Direct URL access (e.g. refresh on `/staff`) — page loads correctly
3. **Navbar checks**:
   - On Home page: scroll links work (About, Academics, etc.)
   - On Home page: route links work (Staff, Admissions, etc.)
   - On sub-pages: "Home" link returns to `/`
   - On sub-pages: scroll links navigate to `/#section`
   - Mobile drawer: all links work and drawer closes
   - Active route is highlighted in maroon
4. **New sections**:
   - WhyChooseUs: 6 cards render, hover effects work
   - Stats: 4 counters animate on scroll
5. **Responsive**:
   - All new pages at 375px (mobile)
   - All new pages at 768px (tablet)
   - All new pages at 1280px (desktop)
6. **Scroll behaviour**:
   - Every page scrolls to top on mount
   - Back-to-top button works on all pages
