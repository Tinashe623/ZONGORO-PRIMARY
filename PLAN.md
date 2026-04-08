# St James Zongoro Primary School — Website Build Plan

> A step-by-step guide to building a modern, professional, mobile-first school website using **React + TypeScript + Vite + Chakra UI**.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Design System](#3-design-system)
4. [Step-by-Step Build Process](#4-step-by-step-build-process)
   - [Phase 1: Project Scaffolding](#phase-1-project-scaffolding)
   - [Phase 2: Theme & Configuration](#phase-2-theme--configuration)
   - [Phase 3: Layout Components](#phase-3-layout-components)
   - [Phase 4: Section Components](#phase-4-section-components)
   - [Phase 5: Shared UI & Data](#phase-5-shared-ui--data)
   - [Phase 6: App Assembly & Polish](#phase-6-app-assembly--polish)
5. [Folder Structure](#5-folder-structure)
6. [Verification Checklist](#6-verification-checklist)

---

## 1. Project Overview

Build a professional school website for **St James Zongoro Primary School** that showcases:

- Anglican church values and affiliation
- Academic excellence and Grade 7 results
- Community leadership and partnership with the local Chief
- Transport services (school bus, trips, hiring)
- School gallery and announcements
- Contact information and inquiry form

The site is a **single-page application** with smooth-scroll navigation between sections.

---

## 2. Tech Stack

| Technology       | Purpose                          |
| ---------------- | -------------------------------- |
| React 18         | UI framework (functional components) |
| TypeScript       | Type safety                      |
| Vite             | Build tool & dev server          |
| Chakra UI v2     | Component library & styling      |
| Framer Motion    | Scroll animations & transitions  |
| React Icons      | Icon library                     |
| react-scroll     | Smooth scrolling navigation      |

---

## 3. Design System

### Color Palette

| Token   | Hex       | Usage                              |
| ------- | --------- | ---------------------------------- |
| Maroon  | `#800020` | Primary buttons, accents, badges   |
| Cream   | `#FAF3E0` | Alternating section backgrounds    |
| White   | `#FFFFFF` | Primary background                 |
| Green   | `#2D6A4F` | Secondary highlights, transport    |
| Dark    | `#1A1A1A` | Body text, headings                |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (body), 500 (medium), 600 (semibold), 700 (headings)
- **Headings**: Large, bold, high contrast
- **Body**: Clean, readable, 16px base

### Design Principles

- Mobile-first responsive design
- Rounded corners (`2xl` = 16px)
- Subtle card shadows with hover elevation
- Alternating cream/white section backgrounds for visual rhythm
- Maroon used as accent only (never full-page background)
- Smooth fade-in animations on scroll

---

## 4. Step-by-Step Build Process

---

### Phase 1: Project Scaffolding

**Goal**: Set up the project with all dependencies and clean boilerplate.

#### Step 1.1 — Initialize Vite Project

```bash
cd /home/tinashe/zongoro
npx -y create-vite@latest ./ --template react-ts
```

#### Step 1.2 — Install Dependencies

```bash
npm install
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-icons react-scroll
npm install -D @types/react-scroll
```

#### Step 1.3 — Clean Up Boilerplate

- Delete `src/App.css` (we'll use Chakra UI for styling)
- Clear the contents of `src/App.tsx` (replace with our own)
- Remove Vite demo assets from `src/assets/` (keep the folder)
- Clear `src/index.css` (replace with minimal reset)

#### Step 1.4 — Update `index.html`

Add the following to `<head>`:

```html
<title>St James Zongoro Primary School</title>
<meta name="description" content="St James Zongoro Primary School — Quality education rooted in Anglican values and community partnership." />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta property="og:title" content="St James Zongoro Primary School" />
<meta property="og:description" content="Quality education rooted in Anglican values and community partnership." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

#### Step 1.5 — Create Folder Structure

```
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/ui
mkdir -p src/data
mkdir -p src/theme
mkdir -p src/assets/images
```

---

### Phase 2: Theme & Configuration

**Goal**: Set up the Chakra UI custom theme and global styles.

#### Step 2.1 — Create `src/theme/index.ts`

Define the custom theme:

```typescript
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    maroon: {
      50: '#fdf2f4',
      100: '#f5d0d6',
      500: '#800020',
      600: '#6b001a',
      700: '#560015',
    },
    cream: {
      50: '#FAF3E0',
      100: '#F5ECD3',
    },
    forest: {
      50: '#e6f5ed',
      500: '#2D6A4F',
      600: '#245a42',
    },
    dark: {
      500: '#1A1A1A',
      600: '#111111',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      'html': { scrollBehavior: 'smooth' },
      'body': { color: 'dark.500', bg: 'white' },
    },
  },
  components: {
    Button: { /* maroon, cream, green variants */ },
    Card: { /* rounded 2xl, soft shadow */ },
    Heading: { /* font-weight 700 */ },
  },
});

export default theme;
```

#### Step 2.2 — Update `src/main.tsx`

```typescript
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

// Wrap <App /> in <ChakraProvider theme={theme}>
```

#### Step 2.3 — Update `src/index.css`

```css
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #FAF3E0; }
::-webkit-scrollbar-thumb { background: #800020; border-radius: 4px; }
```

---

### Phase 3: Layout Components

**Goal**: Build the structural wrapper components that appear on every page.

#### Step 3.1 — Create `src/components/layout/TopBar.tsx`

- Maroon (`bg="maroon.500"`) background strip
- White text
- Left side: phone number icon + number, email icon + email
- Right side: Facebook icon link
- **Hidden on mobile**: `display={{ base: 'none', md: 'flex' }}`

#### Step 3.2 — Create `src/components/layout/Navbar.tsx`

- White background, sticky position (`position="sticky"`, `top={0}`, `zIndex={1000}`)
- Left: School logo/name text
- Right: Navigation links — Home, About, Academics, Church, Community, Transport, Gallery, Contact
- Each link uses `react-scroll` `<Link>` for smooth scrolling to section IDs
- Hover state: maroon underline (`borderBottom: '2px solid maroon.500'`)
- **Mobile**: Hamburger icon (`HamburgerIcon`) → Chakra `<Drawer>` with stacked nav links
- **Scroll effect**: Add `backdropFilter="blur(10px)"` and slight shadow when user scrolls past 50px

#### Step 3.3 — Create `src/components/layout/Footer.tsx`

- Cream background (`bg="cream.50"`)
- 4-column responsive grid (`SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}`)
  - Column 1: School name + short tagline
  - Column 2: Quick Links (Home, About, Academics, Contact)
  - Column 3: Contact Info (address, phone, email)
  - Column 4: School Hours (Mon–Fri times)
- Bottom divider + copyright text: "© 2026 St James Zongoro Primary School"

#### Step 3.4 — Create `src/components/layout/Layout.tsx`

- Composition wrapper:
  ```
  <TopBar />
  <Navbar />
  <Box as="main">{children}</Box>
  <Footer />
  ```
- Manages scroll state (passed to Navbar for blur effect)

---

### Phase 4: Section Components

**Goal**: Build each content section. Sections alternate between white and cream backgrounds.

#### Step 4.1 — Create `src/components/sections/Hero.tsx`

- **Background**: Full-viewport height, school image with dark gradient overlay
- **Content** (centered, white text):
  - Heading: `"Welcome to St James Zongoro Primary School"`
  - Subtext: `"Providing quality education rooted in Anglican values and community partnership since [year]"`
  - 3 CTA buttons:
    - "Apply for Admission" → maroon solid button
    - "Contact Us" → cream/outline button
    - "Learn More" → ghost/transparent button
- **Animation**: Framer Motion staggered fade-in for heading, subtext, buttons
- **Section ID**: `id="home"`

#### Step 4.2 — Create `src/components/sections/About.tsx`

- **Background**: Cream (`bg="cream.50"`)
- **Section heading**: "About Our School" with maroon accent bar
- **2-column layout** (`SimpleGrid columns={{ base: 1, md: 2 }}`):
  - **Left column**: School history paragraph(s), year established
  - **Right column**: Vision statement, Mission statement, Core Values list (maroon check icons)
- **Animation**: ScrollReveal fade-in
- **Section ID**: `id="about"`

#### Step 4.3 — Create `src/components/sections/ChurchSection.tsx`

- **Background**: White
- **Section heading**: "Our Anglican Heritage"
- **Layout**:
  - Featured quote block: Large quotation marks (maroon), italic text about Christian values
  - Church values list with green accent icons (cross, heart, book, etc.)
  - Image placeholder on right side
- **Accent**: Subtle green gradient divider at bottom
- **Section ID**: `id="church"`

#### Step 4.4 — Create `src/components/sections/CommunitySection.tsx`

- **Background**: Cream
- **Section heading**: "Community Partnership"
- **Layout**:
  - Chief's card: Photo placeholder, name, appreciation message
  - 3 highlight cards: Community support, school events, local partnerships
  - Each card: icon, title, description, maroon accent header
- **Section ID**: `id="community"`

#### Step 4.5 — Create `src/components/sections/Academics.tsx`

- **Background**: White
- **Section heading**: "Academic Excellence"
- **3-column card grid** (`SimpleGrid columns={{ base: 1, md: 3 }}`):
  - **Card 1**: "Grades Offered" — ECD A, ECD B, Grade 1–7, icon: `FaGraduationCap`
  - **Card 2**: "Our Curriculum" — ZIMSEC aligned, subjects list, icon: `FaBookOpen`
  - **Card 3**: "Learning Approach" — Hands-on, inclusive, icon: `FaLightbulb`
- Each card: rounded `2xl`, soft shadow, hover elevation, maroon icon circle
- **Section ID**: `id="academics"`

#### Step 4.6 — Create `src/components/sections/ResultsSection.tsx`

- **Background**: Cream
- **Section heading**: "Grade 7 Results"
- **3-column responsive grid** of year cards:
  - Each card shows: year (maroon badge), pass rate %, number of students
  - Data from `src/data/results.ts`
- **Animation**: Counter animation for percentages
- **Section ID**: `id="results"`

#### Step 4.7 — Create `src/components/sections/Testimonials.tsx`

- **Background**: White
- **Section heading**: "What People Say"
- **3 testimonial cards**:
  - Large maroon quotation icon
  - Quote text (italic)
  - Author name + role (parent / community member / alumnus)
  - Soft shadows, rounded corners
- Data from `src/data/testimonials.ts`

#### Step 4.8 — Create `src/components/sections/Transport.tsx`

- **Background**: Cream with green accent highlights
- **Section heading**: "School Transport"
- **2-column layout**:
  - **Left**: Description of transport services, safety highlights (green icon bullets), services list (daily transport, school trips, bus hire)
  - **Right**: Bus image card with caption
- **CTA button**: "Inquire About Transport" (green variant)
- **Section ID**: `id="transport"`

#### Step 4.9 — Create `src/components/sections/Gallery.tsx`

- **Background**: White
- **Section heading**: "School Gallery"
- **Filter tabs**: All | School Activities | Church Events | Trips (using Chakra `<Tabs>`)
- **Responsive grid**: `SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}`
- **Each image**: rounded corners, hover zoom effect (`transform: scale(1.05)`), overlay with caption
- **Lazy loading**: `loading="lazy"` on images
- Data from `src/data/gallery.ts`
- **Section ID**: `id="gallery"`

#### Step 4.10 — Create `src/components/sections/Announcements.tsx`

- **Background**: Cream
- **Section heading**: "Latest News & Announcements" with maroon accent
- **Card layout** (2 columns on desktop):
  - Date badge (maroon background, white text)
  - Title (bold)
  - Short excerpt
  - "Read More" link (maroon text, hover underline)
- Data from `src/data/announcements.ts`

#### Step 4.11 — Create `src/components/sections/Contact.tsx`

- **Background**: White
- **Section heading**: "Get in Touch"
- **2-column layout**:
  - **Left column**: Contact info cards (address with icon, phone, email, map placeholder)
  - **Right column**: Contact form
    - Fields: Full Name, Email, Subject, Message (textarea)
    - Chakra `<FormControl>` with validation
    - Submit button (maroon)
- **Section ID**: `id="contact"`

---

### Phase 5: Shared UI & Data

**Goal**: Build reusable UI components and data files.

#### Step 5.1 — Create `src/components/ui/ScrollReveal.tsx`

```typescript
// Framer Motion wrapper component
// Props: direction ('up' | 'left' | 'right'), delay, duration
// Uses `whileInView` for viewport-triggered animations
// Initial state: opacity 0, translateY 30px
// Animate to: opacity 1, translateY 0
```

#### Step 5.2 — Create `src/components/ui/BackToTop.tsx`

- Floating `<IconButton>` fixed to bottom-right corner
- Appears when scroll position > 400px (conditional render)
- Maroon background, white arrow icon
- Smooth scroll to top on click
- Fade-in/out with Framer Motion `<AnimatePresence>`

#### Step 5.3 — Create `src/components/ui/SectionHeading.tsx`

```typescript
// Props: title, subtitle, accentColor (default: 'maroon.500')
// Renders:
//   - <Heading> centered, size "xl"
//   - Maroon accent bar (40px wide, 3px tall, centered)
//   - <Text> subtitle, muted color
```

#### Step 5.4 — Create `src/components/ui/SectionDivider.tsx`

- Decorative gradient divider
- Props: `color` ('maroon' | 'green')
- Renders thin gradient line: color → transparent

#### Step 5.5 — Create Data Files

**`src/data/academics.ts`**
```typescript
export const academicCards = [
  { icon: 'FaGraduationCap', title: 'Grades Offered', description: 'ECD A & B through Grade 7...', items: [...] },
  { icon: 'FaBookOpen', title: 'Our Curriculum', description: 'ZIMSEC-aligned curriculum...', items: [...] },
  { icon: 'FaLightbulb', title: 'Learning Approach', description: 'Hands-on, inclusive...', items: [...] },
];
```

**`src/data/results.ts`**
```typescript
export const gradeSevenResults = [
  { year: 2025, passRate: 94, students: 45 },
  { year: 2024, passRate: 91, students: 42 },
  // ... back to 2020
];
```

**`src/data/testimonials.ts`**
```typescript
export const testimonials = [
  { quote: '...', author: 'Mrs. Moyo', role: 'Parent' },
  { quote: '...', author: 'Chief Zongoro', role: 'Community Leader' },
  { quote: '...', author: 'Tendai M.', role: 'Alumni, Class of 2020' },
];
```

**`src/data/announcements.ts`**
```typescript
export const announcements = [
  { date: '2026-04-01', title: 'Term 2 Registration Open', excerpt: '...' },
  { date: '2026-03-15', title: 'Sports Day Results', excerpt: '...' },
  { date: '2026-03-01', title: 'Church Service Schedule', excerpt: '...' },
];
```

**`src/data/gallery.ts`**
```typescript
export const galleryImages = [
  { src: '/images/...', alt: '...', category: 'School Activities' },
  { src: '/images/...', alt: '...', category: 'Church Events' },
  { src: '/images/...', alt: '...', category: 'Trips' },
];
```

---

### Phase 6: App Assembly & Polish

**Goal**: Wire everything together and polish the experience.

#### Step 6.1 — Update `src/App.tsx`

```typescript
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ChurchSection from './components/sections/ChurchSection';
import CommunitySection from './components/sections/CommunitySection';
import Academics from './components/sections/Academics';
import ResultsSection from './components/sections/ResultsSection';
import Testimonials from './components/sections/Testimonials';
import Transport from './components/sections/Transport';
import Gallery from './components/sections/Gallery';
import Announcements from './components/sections/Announcements';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <ChurchSection />
      <CommunitySection />
      <Academics />
      <ResultsSection />
      <Testimonials />
      <Transport />
      <Gallery />
      <Announcements />
      <Contact />
      <BackToTop />
    </Layout>
  );
}

export default App;
```

#### Step 6.2 — Generate Placeholder Images

Use AI image generation for:
- Hero background (school building scene)
- Gallery images (school activities, church events, trips)
- Bus/transport image

#### Step 6.3 — Final Polish

- Verify all scroll animations fire correctly
- Check section ID smooth scrolling from navbar
- Test mobile drawer menu open/close
- Ensure all hover effects work (cards, buttons, gallery)
- Verify color contrast meets accessibility standards
- Optimize images for fast loading

---

## 5. Folder Structure

```
zongoro/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── (favicon, static assets)
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero-bg.webp
│   │       ├── bus.webp
│   │       ├── gallery-1.webp
│   │       └── ...
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.tsx        ← Maroon contact bar
│   │   │   ├── Navbar.tsx        ← Sticky nav + mobile drawer
│   │   │   ├── Footer.tsx        ← Cream footer
│   │   │   └── Layout.tsx        ← Wrapper component
│   │   ├── sections/
│   │   │   ├── Hero.tsx          ← Hero with CTAs
│   │   │   ├── About.tsx         ← School history & values
│   │   │   ├── ChurchSection.tsx ← Anglican heritage
│   │   │   ├── CommunitySection.tsx ← Chief partnership
│   │   │   ├── Academics.tsx     ← Curriculum cards
│   │   │   ├── ResultsSection.tsx ← Grade 7 results
│   │   │   ├── Testimonials.tsx  ← Quotes
│   │   │   ├── Transport.tsx     ← Bus services
│   │   │   ├── Gallery.tsx       ← Photo grid
│   │   │   ├── Announcements.tsx ← News cards
│   │   │   └── Contact.tsx       ← Form + info
│   │   └── ui/
│   │       ├── ScrollReveal.tsx  ← Animation wrapper
│   │       ├── BackToTop.tsx     ← Scroll-to-top button
│   │       ├── SectionHeading.tsx ← Reusable heading
│   │       └── SectionDivider.tsx ← Gradient divider
│   ├── data/
│   │   ├── academics.ts
│   │   ├── results.ts
│   │   ├── testimonials.ts
│   │   ├── announcements.ts
│   │   └── gallery.ts
│   ├── theme/
│   │   └── index.ts              ← Chakra custom theme
│   ├── App.tsx                   ← Main app composition
│   ├── main.tsx                  ← Entry point + ChakraProvider
│   └── index.css                 ← Minimal global styles
└── PLAN.md                       ← This file
```

---

## 6. Verification Checklist

### Build Verification

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` compiles with zero TypeScript errors
- [ ] No console errors or warnings in browser

### Visual Verification

- [ ] All 11 sections render in correct order
- [ ] Cream/white backgrounds alternate correctly
- [ ] Maroon is used as accent only (buttons, badges, bars) — never full-page bg
- [ ] Green accents appear in Church and Transport sections
- [ ] All text is readable with high contrast

### Responsive Design

- [ ] **Mobile (375px)**: Hamburger menu, single-column layouts, stacked cards
- [ ] **Tablet (768px)**: Two-column layouts, responsive grid adjustments
- [ ] **Desktop (1024px+)**: Full multi-column layouts, all features visible

### Interactions

- [ ] Navbar links smooth-scroll to correct sections
- [ ] Navbar blurs on scroll
- [ ] Mobile drawer opens/closes correctly
- [ ] Cards elevate on hover
- [ ] Gallery images zoom on hover
- [ ] Back-to-top button appears on scroll and works
- [ ] Contact form fields are present and validated
- [ ] CTA buttons have hover states

### Performance

- [ ] Page loads in under 3 seconds
- [ ] Images are optimized (WebP format)
- [ ] Lazy loading on gallery images
- [ ] Smooth 60fps animations

---

## Build Order Summary

| Step | What                     | Files Created/Modified                |
| ---- | ------------------------ | ------------------------------------- |
| 1    | Init Vite project        | `package.json`, `index.html`          |
| 2    | Install dependencies     | `node_modules/`                       |
| 3    | Create theme             | `src/theme/index.ts`                  |
| 4    | Configure main entry     | `src/main.tsx`, `src/index.css`       |
| 5    | Build TopBar             | `src/components/layout/TopBar.tsx`    |
| 6    | Build Navbar             | `src/components/layout/Navbar.tsx`    |
| 7    | Build Footer             | `src/components/layout/Footer.tsx`    |
| 8    | Build Layout wrapper     | `src/components/layout/Layout.tsx`    |
| 9    | Create data files        | `src/data/*.ts` (5 files)             |
| 10   | Build shared UI          | `src/components/ui/*.tsx` (4 files)   |
| 11   | Build Hero section       | `src/components/sections/Hero.tsx`    |
| 12   | Build About section      | `src/components/sections/About.tsx`   |
| 13   | Build Church section     | `src/components/sections/ChurchSection.tsx` |
| 14   | Build Community section  | `src/components/sections/CommunitySection.tsx` |
| 15   | Build Academics section  | `src/components/sections/Academics.tsx` |
| 16   | Build Results section    | `src/components/sections/ResultsSection.tsx` |
| 17   | Build Testimonials       | `src/components/sections/Testimonials.tsx` |
| 18   | Build Transport section  | `src/components/sections/Transport.tsx` |
| 19   | Build Gallery section    | `src/components/sections/Gallery.tsx` |
| 20   | Build Announcements      | `src/components/sections/Announcements.tsx` |
| 21   | Build Contact section    | `src/components/sections/Contact.tsx` |
| 22   | Assemble App.tsx         | `src/App.tsx`                         |
| 23   | Generate images          | `src/assets/images/`                  |
| 24   | Polish & verify          | All files                             |

---

*Generated: April 8, 2026*
