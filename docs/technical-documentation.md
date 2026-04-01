# Aman Portfolio — Technical Documentation

> **Project:** Personal Portfolio Website for Aman Prakash  
> **Live URL:** https://aman-prakash.vercel.app/  
> **Repository Owner:** [Amanhost](https://github.com/Amanhost)  
> **Framework:** React 18 (Create React App)  
> **Last Updated:** April 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Architecture](#3-project-architecture)
4. [Folder Structure](#4-folder-structure)
5. [Routing & Navigation](#5-routing--navigation)
6. [Component Documentation](#6-component-documentation)
7. [UI System & Design Language](#7-ui-system--design-language)
8. [Styling System](#8-styling-system)
9. [State Management](#9-state-management)
10. [API & External Service Communication](#10-api--external-service-communication)
11. [Authentication Flow](#11-authentication-flow)
12. [Reusable Logic & Utilities](#12-reusable-logic--utilities)
13. [Development Standards](#13-development-standards)
14. [Engineering Guardrails](#14-engineering-guardrails)
15. [Code Review Checklist](#15-code-review-checklist)

---

## 1. Project Overview

This is a **single-page portfolio website** for Aman Prakash, a frontend/AI software engineer. The application is built with **React 18** using **Create React App (CRA)** as the scaffolding tool and **Tailwind CSS** as the primary styling framework.

The site is deployed on **Vercel** and serves as a personal branding and professional showcase platform. It includes:

- Hero section with animated typewriter introduction
- Technical skills with proficiency bars
- Featured project showcase with expand/collapse
- About/journey section with stats
- Work experience timeline
- Client testimonials
- GitHub activity display
- Blog & insights section with newsletter subscription
- Contact form (EmailJS integration) with WhatsApp option
- Downloadable resume (PDF viewer)
- Persistent WhatsApp floating action button

**There is no backend server, no database, no authentication module, and no Redux store.** The entire application is a static frontend rendered client-side.

---

## 2. Technology Stack

Derived directly from `package.json`:

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | Core UI library |
| `react-dom` | ^18.3.1 | DOM rendering |
| `react-router-dom` | ^6.30.3 | Client-side routing |
| `react-bootstrap` | ^2.10.7 | Bootstrap grid components (`Col`, `Row`, `Container`, `Button`) |
| `react-icons` | ^5.5.0 | Icon library (FontAwesome, DevIcons, SimpleIcons, etc.) |
| `react-pdf` | ^9.2.1 | PDF rendering in the legacy Resume component |
| `react-github-calendar` | ^4.5.2 | GitHub contribution calendar (commented out in code) |
| `typewriter-effect` | ^2.21.0 | Animated typewriter text in hero section |
| `emailjs-com` | ^3.2.0 | Client-side email sending via EmailJS |
| `date-fns` | ^4.1.0 | Date utility library (installed but not actively used in components) |
| `gh-pages` | ^6.2.0 | GitHub Pages deployment utility |
| `scss` | ^0.2.4 | SCSS compilation support |
| `web-vitals` | ^4.2.4 | Core Web Vitals measurement |
| `@tailwindcss/forms` | ^0.5.9 | Tailwind plugin for form element styling |
| `@tailwindcss/typography` | ^0.5.15 | Tailwind plugin for prose/typography |

### Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | ^3.4.17 | Utility-first CSS framework |
| `postcss` | ^8.4.49 | CSS post-processing |
| `autoprefixer` | ^10.4.20 | Vendor prefix automation |

### NPM Scripts

```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

### ESLint Configuration

Defined inline in `package.json` — extends the default CRA presets:

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

No custom ESLint rules, no `.eslintrc` file, no Prettier config, no Stylelint config.

---

## 3. Project Architecture

### Architecture Pattern: Flat Component-Based SPA

The application follows a **flat, component-driven architecture** with no layered abstractions:

```
                    ┌─────────────┐
                    │   index.js   │  React root, StrictMode
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │    App.js    │  Router container
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │                         │
       ┌──────▼──────┐          ┌──────▼──────┐
       │   Nav (/)    │          │ Resume      │
       │  (Home Page) │          │ (/resume)   │
       └──────┬──────┘          └─────────────┘
              │
    ┌─────────┼─────────────────────────┐
    │         │         │               │
    ▼         ▼         ▼               ▼
 Hero    TechStack  FeaturedProjects  ... (10+ sections)
                                        │
                                     Footer
```

### Key Architectural Characteristics

1. **No state management library** — No Redux, no Context API, no Zustand. Each component manages its own local state via `useState`.
2. **No API layer / service layer** — There is no `services/`, `api/`, or `hooks/` directory. External communication is handled inline (EmailJS in `ContactSection`, Formspree in `BlogInsights`).
3. **No authentication** — The site is a public portfolio with no login, session, or token management.
4. **No custom hooks** — All logic is co-located within components.
5. **Two routes only** — `/` (home page rendered by `Nav`) and `/resume` (resume viewer).
6. **Data is hardcoded** — All project data, skills, testimonials, experience, and blog posts are defined as JavaScript arrays/objects within their respective components.

### Data Flow

```
Component State (useState) ──► JSX Rendering
                                    │
                                    ▼
                         User Interaction (click, form submit)
                                    │
                                    ▼
                         State Update (setFormData, setIsOpen, etc.)
                                    │
                                    ▼
                         Re-render with new state
```

There is no global state. Each component is self-contained with its own data and state.

### External Service Integration

| Service | Component | Method |
|---|---|---|
| EmailJS | `ContactSection.jsx` | `emailjs.sendForm()` — sends contact form emails |
| Formspree | `BlogInsights.jsx` | `fetch()` POST — newsletter subscription |
| WhatsApp API | `WhatsAppButton.jsx`, `ContactSection.jsx` | Deep link `https://wa.me/` |

---

## 4. Folder Structure

```
aman-portfolio/
├── package.json                  # Dependencies, scripts, ESLint config
├── tailwind.config.js            # Tailwind CSS configuration
├── build/                        # Production build output (CRA generated)
│   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── media/
│   └── ...
├── public/                       # Static public assets served as-is
│   ├── index.html                # HTML template with SEO meta tags, fonts, JSON-LD
│   ├── manifest.json             # PWA manifest
│   └── robots.txt                # Search engine crawling rules
└── src/                          # Application source code
    ├── index.js                  # React entry point, renders <App />
    ├── App.js                    # Root component with Router and Routes
    ├── App.css                   # Default CRA styles (mostly unused)
    ├── App.scss                  # SCSS overrides for emerald CSS variables
    ├── index.css                 # Tailwind directives (@tailwind base/components/utilities)
    ├── style.css                 # Primary custom CSS: variables, scrollbar, tech-icons, sticky nav
    ├── Project.jsx               # Standalone Project component (unused in routing)
    ├── reportWebVitals.js        # Web Vitals performance reporting
    ├── setupTests.js             # Jest testing setup
    ├── App.test.js               # Default CRA test
    ├── Assets/
    │   └── Image/
    │       └── AmanPrakashResume.pdf  # Resume PDF file
    └── component/                # All UI components
        ├── Nav.jsx               # Home page: header, hero, tech stack, + all section composition
        ├── AboutJourney.jsx      # About section with highlights and stats
        ├── Blog.jsx              # Simple blog layout (unused in main routing)
        ├── BlogInsights.jsx      # Blog cards + newsletter subscription form
        ├── ContactSection.jsx    # Contact form (EmailJS) + WhatsApp integration
        ├── FeaturedProjects.jsx  # Project cards with expand/collapse
        ├── Footer.jsx            # Footer with social links, quick links, contact info
        ├── GitHubActivity.jsx    # GitHub statistics display
        ├── SkillsExpertise.jsx   # Skills cards + proficiency percentages
        ├── Techstack.jsx         # Tech icon grid (inlined into Nav.jsx instead)
        ├── Testimonials .jsx     # Client testimonials grid (note: filename has trailing space)
        ├── Type.jsx              # Typewriter animation component
        ├── WorkExperience.jsx    # Timeline of work experience + resume download
        ├── Resume.jsx            # Legacy resume viewer (uses react-pdf, not used in routes)
        ├── ChatBoat/
        │   └── WhatsAppButton.jsx  # Floating WhatsApp CTA button
        └── Resume/
            └── Resume.jsx        # Active resume page (iframe-based PDF viewer)
```

### Directory Responsibility Breakdown

| Directory | Responsibility |
|---|---|
| `src/` | All application source code; entry point, root component, styles |
| `src/component/` | All UI components — both page-level composites and individual sections |
| `src/component/ChatBoat/` | WhatsApp floating button widget |
| `src/component/Resume/` | Resume page with PDF iframe viewer (active route) |
| `src/Assets/Image/` | Static assets — currently only the resume PDF |
| `public/` | HTML template, favicon, manifest, robots.txt |
| `build/` | CRA production build output |

### Directories NOT Present

The following directories from the analysis template do **not exist** in this project:

- `api/` — No API layer
- `auth/` — No authentication
- `constants/` — Constants are inline in components
- `context/` — No React Context providers
- `dictionary/` — Not applicable
- `hooks/` — No custom hooks
- `pages/` — No dedicated pages directory; `Nav.jsx` acts as the home page
- `redux/` — No Redux store
- `schemas/` — No validation schemas
- `services/` — No service layer
- `styles/` — Styles are in `src/` root (`style.css`, `index.css`, `App.css`, `App.scss`)
- `utils/` — No utility modules

---

## 5. Routing & Navigation

### Router Setup (`App.js`)

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
};
```

### Route Map

| Path | Component | Description |
|---|---|---|
| `/` | `Nav` | Full home page with all sections composed together |
| `/resume` | `Resume` (from `component/Resume/Resume.jsx`) | PDF resume viewer page |

### Navigation Pattern

- The `Nav` component renders both the **sticky header navigation** and the **entire home page** content.
- In-page navigation uses **anchor links** (`#tech_stack`, `#featured_projects`, `#about_journey`, etc.).
- The Resume link uses React Router's `<Link to="/resume">`.
- The `WhatsAppButton` renders **globally** outside routes (appears on every page).
- Mobile navigation uses a hamburger toggle (`isOpen` state) with a slide-down menu.

---

## 6. Component Documentation

### `Nav.jsx` — Home Page Composite

**Role:** Acts as the home page controller. Renders the navigation header, hero section, tech stack grid, and composes all other section components.

**State:**
- `isOpen` (boolean) — controls mobile menu visibility

**Data:** Contains inline `skillCategories` array with proficiency percentages and `links` array for navigation items.

**Child Components Composed:**
```
Nav → Header → Hero → TechStack (inline) → FeaturedProjects → AboutJourney →
      SkillsExpertise → WorkExperience → Testimonials → GitHubActivity →
      BlogInsights → ContactSection → Footer
```

**External Dependencies:** `react-icons` (DiJavascript1, FaReact, SiRedux, etc.), `react-bootstrap` (Col), `react-router-dom` (Link)

---

### `Type.jsx` — Typewriter Animation

**Role:** Renders animated typewriter text cycling through role titles.

```jsx
<Typewriter
  options={{
    strings: ["AI-Software Engineer", "Frontend Engineer "],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  }}
/>
```

**Dependency:** `typewriter-effect`

---

### `FeaturedProjects.jsx` — Project Showcase

**Role:** Displays project cards with a "View More/Less" toggle.

**State:**
- `showAll` (boolean) — toggles between showing 3 projects or all 8

**Data:** Contains 8 hardcoded project objects with `id`, `title`, `description`, `image`, `technologies`, and optional `git` link.

---

### `AboutJourney.jsx` — About Section

**Role:** Displays professional journey, highlights, and career stats.

**Dynamic Calculation:** `yearsExperience = currentYear - 2021`

**Data:** Hardcoded `highlights` and `stats` arrays.

---

### `SkillsExpertise.jsx` — Skills Grid

**Role:** Displays categorized skill cards and proficiency percentages.

**Data:** Three skill categories (Frontend, Backend, DevOps & Tools) with bullet-point skills, plus four proficiency percentage items.

---

### `WorkExperience.jsx` — Experience Timeline

**Role:** Renders a vertical timeline of professional experience.

**Data:** Three experience entries with time period, role, company, and details.

**Feature:** Includes a "Download Resume" button linking to the PDF asset.

---

### `Testimonials .jsx` — Client Testimonials

> **Note:** This file has a trailing space in the filename (`Testimonials .jsx`), which requires the import `import Testimonials from "./Testimonials "` — note the space before the closing quote.

**Role:** Displays a grid of client testimonial cards with star ratings.

**Data:** Four hardcoded testimonial objects. Uses `react-icons` for avatars and stars.

---

### `GitHubActivity.jsx` — GitHub Stats

**Role:** Displays hardcoded GitHub statistics (contributions, repos, PRs, reviews) and a link to the GitHub profile.

**Note:** A GitHub contribution calendar (`react-github-calendar`) was previously used but is commented out.

---

### `BlogInsights.jsx` — Blog & Newsletter

**Role:** Displays three static blog post cards and a newsletter subscription form.

**State:**
- `email` (string), `status` (string), `loading` (boolean)

**External Service:** Newsletter form submits to Formspree (`https://formspree.io/f/your_form_id` — placeholder, not configured).

---

### `ContactSection.jsx` — Contact Form

**Role:** Contact form with email sending and WhatsApp deep link.

**State:**
- `formData` (object: name, email, subject, message)
- `status` (string), `loading` (boolean)

**External Service:** EmailJS integration:
```jsx
emailjs.sendForm("service_jq4bzdb", "template_svh44jv", e.target, "7h2zVXJfRRrsMfrqg")
```

**WhatsApp:** Builds a `wa.me` link with form data as pre-filled message text.

---

### `Footer.jsx` — Site Footer

**Role:** Four-column footer with About, Quick Links, Services, and Contact info.

**Data:** Social links (WhatsApp, Instagram, GitHub, LinkedIn, Twitter) with inline SVG icons.

---

### `WhatsAppButton.jsx` — Floating CTA

**Role:** Fixed-position floating button (bottom-right) linking to WhatsApp.

**Behavior:** Shows tooltip on hover. Always visible across all routes (rendered in `App.js` outside `<Routes>`).

---

### `Resume/Resume.jsx` — Resume Page (Active)

**Role:** Full-page resume viewer using an `<iframe>` to embed the PDF.

**Features:** Open in new tab button + download button. Has its own navigation header with Home/Resume/Contact links.

---

### Unused / Legacy Components

| Component | Status |
|---|---|
| `Project.jsx` | Not imported or routed. Standalone placeholder. |
| `Blog.jsx` | Not imported or routed. Replaced by `BlogInsights.jsx`. |
| `component/Resume.jsx` | Legacy resume viewer using `react-pdf`. Superseded by `Resume/Resume.jsx`. |
| `Techstack.jsx` | Logic inlined into `Nav.jsx`. Component file exists but is not imported. |

---

## 7. UI System & Design Language

### Design Theme

The portfolio uses a **dark theme** with an emerald green accent:

- **Background:** Deep navy/black (`#0B0F19`)
- **Surface/cards:** Dark gray (`#111827`)
- **Text primary:** Light gray (`#e5e7eb`)
- **Text secondary:** Neutral 400 (`text-neutral-400` via Tailwind)
- **Accent color:** Emerald 500 (`#10b981` / Tailwind `emerald-500`)
- **Fonts:** Inter and Montserrat (loaded from Google Fonts in `public/index.html`)

### UI Library Usage

- **Tailwind CSS** — Primary styling method. Utility classes applied directly on JSX elements.
- **React Bootstrap** — Used sparingly for grid layout (`Col`, `Row`) in the tech stack icon section and legacy Resume component. Not the primary UI library.
- **React Icons** — Icon library providing icons from multiple sets (FontAwesome, DevIcons, SimpleIcons, Typicons, Bootstrap Icons).

### Component Structure Pattern

All components follow the same pattern:

```jsx
import React from "react";

const ComponentName = () => {
  // Inline data arrays/objects
  const data = [...];

  // Optional state
  const [state, setState] = useState(initialValue);

  return (
    <section id="section_id" className="py-24 section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Section Title
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Section description
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="p-6 rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300">
              {/* Card content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentName;
```

### Common UI Patterns

| Pattern | Implementation |
|---|---|
| Section wrapper | `<section className="py-24 section">` with `max-w-7xl` container |
| Card | `rounded-xl border border-neutral-800` with `hover:border-emerald-500/50` |
| CTA Button (primary) | `bg-emerald-500 text-white hover:bg-emerald-600 rounded-lg px-6 py-3` |
| CTA Button (outline) | `border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white` |
| Section heading | `text-3xl sm:text-4xl font-bold text-white mb-4` |
| Body text | `text-neutral-400` |
| Accent text | CSS class `status-emerald` (custom CSS variable) |
| Tags/badges | `rounded-full bg-black/40 text-emerald-400 border border-emerald-500/30` |
| Transitions | `transition-all duration-300` on interactive elements |
| Responsive grid | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |

---

## 8. Styling System

### Layered CSS Architecture

The styling is composed of four layers loaded in this order:

#### Layer 1: Tailwind Base (`src/index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This is the entry point for all Tailwind utility classes.

#### Layer 2: Custom CSS Variables & Components (`src/style.css`)

Defines the project's CSS custom properties and custom component styles:

```css
:root {
  --app-bg: #0B0F19;
  --app-surface: #111827;
  --app-text: #e5e7eb;
  --status-emerald: #9ca3af;
  --status-emerald-border: rgba(179, 196, 190, 0.3);
}

.section { background-color: var(--app-bg); }
.status-emerald { color: var(--status-emerald); border-color: var(--status-emerald-border); }
```

Also includes: custom scrollbar styling, `.sticky` nav class, `.tech-icons` icon box styling with hover effects.

#### Layer 3: SCSS Variables Override (`src/App.scss`)

Redefines the emerald CSS variables (overrides `style.css` values):

```scss
:root {
  --status-emerald: #10b981;
  --status-emerald-border: rgba(16, 185, 129, 0.3);
}
```

> **Note:** There is a discrepancy — `style.css` sets `--status-emerald` to `#9ca3af` (gray), while `App.scss` sets it to `#10b981` (emerald green). The final resolved value depends on CSS cascade order.

#### Layer 4: CRA Default Styles (`src/App.css`)

Contains default Create React App styles (`.App`, `.App-header`, `.App-logo`). Mostly unused by the current implementation.

### Tailwind Configuration (`tailwind.config.js`)

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

- **No custom theme extensions** — relies entirely on Tailwind defaults
- **No custom colors, spacing, or breakpoints** defined
- The `@tailwindcss/forms` and `@tailwindcss/typography` plugins are installed as dependencies but **not listed in the plugins array** — they are effectively unused

### Typography (Google Fonts)

Loaded in `public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Fonts are loaded but **not configured in `tailwind.config.js`** — they must be applied via direct CSS `font-family` rules or inherited from the browser.

### Responsive Design

The project uses Tailwind's responsive prefixes:

| Breakpoint | Prefix | Usage |
|---|---|---|
| Default | (none) | Mobile-first base styles |
| 640px | `sm:` | Small tablets |
| 768px | `md:` | Tablets, 2-column grids |
| 1024px | `lg:` | Desktop, full nav, side-by-side layouts |

Custom media query in `style.css`:
```css
@media (max-width: 767px) {
  .tech-icons { margin: 10px !important; }
}
```

---

## 9. State Management

### Approach: Component-Local State Only

The project uses **no global state management**. All state is managed locally within individual components using React's `useState` hook.

### State Inventory

| Component | State Variable | Type | Purpose |
|---|---|---|---|
| `Nav` | `isOpen` | boolean | Mobile menu toggle |
| `FeaturedProjects` | `showAll` | boolean | Show/hide additional projects |
| `ContactSection` | `formData` | object | Contact form field values |
| `ContactSection` | `status` | string | Form submission status message |
| `ContactSection` | `loading` | boolean | Form submission loading state |
| `BlogInsights` | `email` | string | Newsletter email input |
| `BlogInsights` | `status` | string | Subscription status message |
| `BlogInsights` | `loading` | boolean | Subscription loading state |
| `Resume` (legacy) | `width` | number | Window width for PDF scaling |

### Side Effects

| Component | Hook | Purpose |
|---|---|---|
| `Resume` (legacy) | `useEffect` | Sets `width` from `window.innerWidth` on mount |

No other `useEffect`, `useRef`, `useMemo`, `useCallback`, or `useContext` hooks are used in the active codebase.

---

## 10. API & External Service Communication

### EmailJS — Contact Form (`ContactSection.jsx`)

**Library:** `emailjs-com`  
**Method:** `emailjs.sendForm(serviceId, templateId, formElement, publicKey)`

```jsx
emailjs.sendForm(
  "service_jq4bzdb",      // EmailJS service ID
  "template_svh44jv",     // EmailJS template ID
  e.target,               // Form DOM element
  "7h2zVXJfRRrsMfrqg"    // EmailJS public key
)
```

- Called on form submit
- Success: clears form, shows success message
- Failure: shows error message
- Loading state disables submit button during request

> **Security Note:** EmailJS public keys are meant to be client-side. The service ID and template ID are not secrets — they're identifiers for the EmailJS dashboard configuration.

### Formspree — Newsletter Subscription (`BlogInsights.jsx`)

**Method:** Native `fetch()` POST

```jsx
await fetch("https://formspree.io/f/your_form_id", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});
```

> **Note:** The Formspree form ID is a placeholder (`your_form_id`) — this feature is **not configured** and will not work in production.

### WhatsApp Deep Links

Used in `WhatsAppButton.jsx` and `ContactSection.jsx`:

```
https://wa.me/918739071486?text=<encoded_message>
```

No API call — browser opens WhatsApp with pre-filled message.

### Error Handling Pattern

All external calls use the same pattern:
1. Set `loading = true`
2. Make the request
3. On success: update status message, reset form
4. On failure: show error message
5. Set `loading = false`

There is no centralized error handling, no retry logic, no request interceptors.

---

## 11. Authentication Flow

**There is no authentication in this project.**

The application is a public-facing portfolio website. There are:
- No login/signup pages
- No token storage
- No session management
- No protected routes
- No authorization logic
- No user accounts

---

## 12. Reusable Logic & Utilities

### Custom Hooks

**None.** There are no custom hooks in the project.

### Utility Files

**None.** There is no `utils/` directory or utility modules.

### Shared Patterns Across Components

The following patterns are repeated (not abstracted) across components:

1. **Section Layout Pattern** — Every section component uses:
   ```jsx
   <section id="..." className="py-24 section">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   ```

2. **Section Header Pattern** — Every section has:
   ```jsx
   <div className="text-center mb-16">
     <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Title</h2>
     <p className="text-neutral-400 max-w-2xl mx-auto">Description</p>
   </div>
   ```

3. **Card Pattern** — Repeated card styling:
   ```
   rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300
   ```

4. **Form Handling Pattern** — `ContactSection` and `BlogInsights` both use the same loading/status/error state pattern.

### `reportWebVitals.js`

Standard CRA utility for measuring Core Web Vitals (CLS, FID, FCP, LCP, TTFB). Used in `index.js` but no callback is passed — metrics are not reported anywhere.

---

## 13. Development Standards

### Conventions Derived from Codebase

#### Component Conventions

- **Functional components only** — No class components anywhere.
- **Arrow function components** — Most components use `const ComponentName = () => {}` except `Type.jsx` which uses `function Type()`.
- **Default exports** — Every component file uses `export default ComponentName`.
- **Single component per file** — Each `.jsx` file contains one component.
- **`.jsx` extension** — Component files use `.jsx`. Entry and config files use `.js`.

#### Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| Component files | PascalCase | `FeaturedProjects.jsx` |
| Component names | PascalCase | `FeaturedProjects` |
| CSS files | lowercase | `style.css`, `index.css` |
| Directories | lowercase | `component/`, `Assets/` (exception: `Assets` is capitalized) |
| Section IDs | snake_case | `tech_stack`, `featured_projects`, `contact_connect` |
| State variables | camelCase | `formData`, `isOpen`, `showAll` |
| Event handlers | `handle` prefix | `handleSubmit`, `handleInputChange`, `handleSubscribe` |

#### Data Pattern

All display data (projects, skills, testimonials, experiences, blog posts) is **hardcoded as JavaScript arrays** directly inside component bodies. There is no external data file, JSON, or API fetching.

#### Import Order (Observed Convention)

```jsx
// 1. React
import React, { useState } from "react";
// 2. Third-party libraries
import emailjs from "emailjs-com";
// 3. React Icons
import { FaGithub, FaWhatsapp } from "react-icons/fa";
// 4. Local components
import Footer from "./Footer";
// 5. Assets
import pdf from "../../src/Assets/Image/AmanPrakashResume.pdf";
// 6. Styles
import "./style.css";
```

### Testing Strategy

- **Test framework:** Jest (via CRA defaults)
- **Test setup:** `setupTests.js` (standard CRA file importing `@testing-library/jest-dom`)
- **Existing tests:** Only `App.test.js` (default CRA test)
- **Testing coverage:** Minimal — no component-specific tests

### SEO Implementation

The `public/index.html` includes:
- Open Graph meta tags
- Twitter Card meta tags
- JSON-LD structured data (Person schema)
- Canonical URL
- Robots meta tag (`index, follow`)
- Descriptive title and meta description

---

## 14. Engineering Guardrails

The following guardrails are derived from the existing codebase patterns. They should be followed for consistency.

### Component Development Rules

1. **Create functional components using arrow functions** with `const` declarations.
2. **One component per file.** Export as default.
3. **Use `.jsx` extension** for all component files.
4. **Place new components in `src/component/`** — maintain the flat structure.
5. **Keep data inline** within the component unless it exceeds ~50 items, then extract to a separate data file.
6. **Use `useState` for local state.** Do not introduce global state management unless multiple components need to share reactive data.
7. **Follow the section layout pattern** for new page sections:
   ```jsx
   <section id="section_id" className="py-24 section">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   ```
8. **Always provide section IDs** for anchor-link navigation.

### Architecture Rules

1. **Do not introduce Redux, Zustand, or other state managers** unless the app grows to need shared state across multiple unrelated components.
2. **Do not create a `pages/` directory.** Routes are handled by components in `src/component/`.
3. **Do not create a `services/` or `api/` layer** for a static portfolio. Inline external calls where needed.
4. **New routes must be added in `App.js`** following the existing `<Route>` pattern.
5. **Global persistent UI (like WhatsAppButton)** should be placed in `App.js` outside `<Routes>`.

### Styling Rules

1. **Use Tailwind utility classes as the primary styling method.** Avoid writing custom CSS unless Tailwind cannot achieve the desired result.
2. **Use the established color palette:**
   - Background: `section` class (maps to `--app-bg`)
   - Text: `text-white`, `text-neutral-300`, `text-neutral-400`
   - Accent: `bg-emerald-500`, `text-emerald-400`, `hover:bg-emerald-600`
   - Borders: `border-neutral-800`, `hover:border-emerald-500/50`
3. **Use the card pattern** for any boxed content:
   ```
   rounded-xl border border-neutral-800 section hover:border-emerald-500/50 transition-all duration-300
   ```
4. **Add transitions** to all interactive elements: `transition-all duration-300` or `transition-colors duration-300`.
5. **Follow mobile-first responsive design.** Use `sm:`, `md:`, `lg:` breakpoint prefixes.
6. **Do not use `!important`** in new CSS. Existing `!important` usage in `style.css` (`.tech-icons`) is legacy.
7. **Do not add new CSS files.** Add custom styles to `style.css` if absolutely necessary.

### State Management Rules

1. **Use `useState` for component-local state.**
2. **Do not lift state** unless two sibling components need to share it.
3. **Form state pattern:**
   ```jsx
   const [formData, setFormData] = useState({ field1: "", field2: "" });
   const [status, setStatus] = useState("");
   const [loading, setLoading] = useState(false);
   ```
4. **Reset form on successful submission.** Show status messages for both success and failure.

### API / External Service Rules

1. **Use `emailjs-com`** for any contact/email functionality.
2. **Handle loading states** — disable submit buttons during requests.
3. **Show user-facing status messages** for success and failure.
4. **Use `target="_blank" rel="noopener noreferrer"`** for all external links.
5. **Encode user input** when building URLs (use `encodeURIComponent`).

### File Naming Rules

1. **PascalCase** for component files: `MyComponent.jsx`
2. **camelCase** for utility/config files: `reportWebVitals.js`
3. **lowercase** for CSS files: `style.css`
4. **No spaces in filenames** — fix `Testimonials .jsx` naming when possible.

---

## 15. Code Review Checklist

Use this checklist for every pull request:

### General

- [ ] Code compiles without errors (`npm start` runs successfully)
- [ ] No console errors or warnings in browser DevTools
- [ ] Component follows the project's functional arrow component pattern
- [ ] File uses `.jsx` extension and PascalCase naming
- [ ] Single default export per file
- [ ] No unused imports or variables

### Styling

- [ ] Tailwind utility classes used (no unnecessary custom CSS)
- [ ] Follows the established color palette (emerald-500 accent, neutral backgrounds)
- [ ] Card components use the standard border/hover pattern
- [ ] All interactive elements have transition classes
- [ ] Responsive breakpoints applied (`sm:`, `md:`, `lg:`)
- [ ] Tested on mobile viewport (375px+)

### Data & State

- [ ] Display data is defined as a JavaScript array/object inside the component
- [ ] State variables use descriptive camelCase names
- [ ] Forms implement loading/status/error state pattern
- [ ] Form inputs have `required` attribute where needed
- [ ] Form resets after successful submission

### External Services

- [ ] External links use `target="_blank" rel="noopener noreferrer"`
- [ ] API keys/service IDs are appropriate for client-side use (no secrets)
- [ ] User input is encoded when used in URLs
- [ ] Error states are handled and displayed to the user
- [ ] Loading state prevents duplicate submissions

### Accessibility

- [ ] Images have `alt` attributes
- [ ] Interactive elements are keyboard-accessible
- [ ] `aria-label` used for icon-only buttons
- [ ] Semantic HTML tags used (`<section>`, `<nav>`, `<header>`, `<footer>`, `<article>`)
- [ ] Color contrast meets WCAG AA standards

### Navigation & Routing

- [ ] New sections have an `id` attribute for anchor navigation
- [ ] New nav links are added to both desktop and mobile menus in `Nav.jsx`
- [ ] New routes are added in `App.js`
- [ ] Internal links use React Router `<Link>`, external links use `<a>`

### Performance

- [ ] Images use appropriate sizes (no oversized assets)
- [ ] No unnecessary re-renders (check state placement)
- [ ] Lazy loading considered for below-fold content
- [ ] No blocking resources added to `<head>`

### SEO (if adding new pages)

- [ ] Page title is descriptive
- [ ] Meta description is present
- [ ] JSON-LD schema updated if applicable
- [ ] Canonical URL set

---

## Appendix A: Known Issues & Technical Debt

| Issue | Location | Description |
|---|---|---|
| Trailing space in filename | `Testimonials .jsx` | Filename has a space before `.jsx`. Should be renamed to `Testimonials.jsx`. |
| Formspree placeholder | `BlogInsights.jsx` | Newsletter subscription uses `your_form_id` — not configured. |
| Unused dependencies | `package.json` | `date-fns`, `react-github-calendar`, `@tailwindcss/forms`, `@tailwindcss/typography` are installed but unused or not configured. |
| Tailwind plugins not registered | `tailwind.config.js` | `@tailwindcss/forms` and `@tailwindcss/typography` are in `package.json` but not in `plugins` array. |
| CSS variable conflict | `style.css` vs `App.scss` | Both define `--status-emerald` with different values (`#9ca3af` vs `#10b981`). |
| Legacy components | `Project.jsx`, `Blog.jsx`, `component/Resume.jsx`, `Techstack.jsx` | Not used in routing or imports. Can be removed. |
| Hardcoded EmailJS credentials | `ContactSection.jsx` | Service ID, template ID, and public key are inline. Consider using environment variables. |
| Google Fonts not in Tailwind config | `tailwind.config.js` | Inter and Montserrat are loaded but not configured as Tailwind font families. |
| Missing `key` best practice | Multiple components | Some components use array index as `key` prop instead of unique identifiers. |

## Appendix B: Environment & Deployment

### Local Development

```bash
npm install        # Install dependencies
npm start          # Start dev server (localhost:3000)
npm run build      # Create production build in /build
npm test           # Run Jest tests
```

### Deployment

- **Platform:** Vercel
- **URL:** https://aman-prakash.vercel.app/
- **Build command:** `npm run build` (CRA default)
- **Output directory:** `build/`
- **GitHub Pages:** `gh-pages` package is installed as a dependency, indicating previous or alternative deployment to GitHub Pages.

### Browser Support

From `package.json` `browserslist`:

- **Production:** `>0.2%`, `not dead`, `not op_mini all`
- **Development:** Last 1 version of Chrome, Firefox, Safari
