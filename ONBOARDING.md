# Onboarding Guide — Application Developer Hub for Azure PostgreSQL

Welcome! This guide is written for **everyone** — from someone who just wants to fix a typo, to a developer building new features. Start at the section that fits you and work your way forward as needed.

---

## Table of Contents

1. [What Is This Project?](#1-what-is-this-project)
2. [Non-Technical: Update Text & Content](#2-non-technical-update-text--content)
   - [Add or Edit a Resource Card](#21-add-or-edit-a-resource-card)
   - [Mark a Resource as Featured](#22-mark-a-resource-as-featured)
   - [Edit Quick Links](#23-edit-quick-links)
   - [Edit Learning Paths](#24-edit-learning-paths)
   - [Edit the Community & Support Section](#25-edit-the-community--support-section)
   - [Edit the Hero (Cover Page) Text](#26-edit-the-hero-cover-page-text)
   - [Add or Update Images](#27-add-or-update-images)
3. [Beginner Developer: Get the Site Running Locally](#3-beginner-developer-get-the-site-running-locally)
4. [Intermediate Developer: Codebase Walkthrough](#4-intermediate-developer-codebase-walkthrough)
   - [Project Layout](#41-project-layout)
   - [How Content Flows from JSON to Cards](#42-how-content-flows-from-json-to-cards)
   - [How Tags Work](#43-how-tags-work)
   - [How Filtering Works](#44-how-filtering-works)
   - [How Sorting Works](#45-how-sorting-works)
   - [Key Configuration File](#46-key-configuration-file)
5. [Advanced Developer: Building & Deploying](#5-advanced-developer-building--deploying)
   - [Scripts](#51-scripts)
   - [Image Optimization Pipeline](#52-image-optimization-pipeline)
   - [CI/CD Pipeline (GitHub Actions)](#53-cicd-pipeline-github-actions)
   - [Service Worker & Caching](#54-service-worker--caching)
   - [Adding a New UI Component](#55-adding-a-new-ui-component)
   - [Adding a New Tag or Content Type](#56-adding-a-new-tag-or-content-type)
6. [Contributing & Feedback](#6-contributing--feedback)
7. [Quick Reference Cheat Sheet](#7-quick-reference-cheat-sheet)

---

## 1. What Is This Project?

The **Application Developer Hub for Azure PostgreSQL** is a curated, filterable resource gallery hosted on GitHub Pages. It is a single-page Docusaurus 3 site that aggregates:

- Documentation links (Microsoft Learn, official docs)
- Code samples & solution accelerators
- Tutorials, workshops, and training paths
- Videos and blog posts
- Learning paths for structured skill-building

**Live site:** `https://azure-samples.github.io/postgres-hub/`

**Tech stack at a glance:**

| Layer                 | Technology                                           |
| --------------------- | ---------------------------------------------------- |
| Static site generator | [Docusaurus 3](https://docusaurus.io/)               |
| UI component library  | [Fluent UI v9](https://react.fluentui.dev/)          |
| Icons                 | [Lucide React](https://lucide.dev/)                  |
| Language              | TypeScript + React 18                                |
| Styling               | CSS Modules + global `custom.css`                    |
| Build tooling         | Webpack (via Docusaurus), Sharp (image optimization) |
| Hosting               | GitHub Pages                                         |
| CI/CD                 | GitHub Actions                                       |

---

## 2. Non-Technical: Update Text & Content

> **You do not need to run the project locally for most text/content changes.** You can edit files directly on GitHub through the web UI and open a pull request.

---

### 2.1 Add or Edit a Resource Card

Every resource card on the site comes from one file:

**`static/templates.json`**

Each card is a JSON object. Here is an annotated example:

```json
{
  "title": "My New Tutorial Title",
  "description": "A one or two sentence description of what this resource covers.",
  "website": "https://learn.microsoft.com/...",
  "source": "https://learn.microsoft.com/...",
  "image": "./img/my-thumbnail.png",
  "tags": ["documentation", "tutorial", "python", "flexibleserver"],
  "date": "2025-12-01",
  "priority": "P1"
}
```

**Field reference:**

| Field                     | Required | Description                                                                                                    |
| ------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| `title`                   | ✅       | Card heading shown on the tile                                                                                 |
| `description`             | ✅       | Short summary shown on the tile and in the detail dialog                                                       |
| `website`                 | ✅       | URL the primary CTA button opens                                                                               |
| `source`                  | ✅       | Usually same as `website`; used for "source" link in the detail dialog                                         |
| `image`                   | ✅       | Path to the thumbnail image inside `static/img/`                                                               |
| `tags`                    | ✅       | Array of tag keys (see [Section 2 of the tag reference](#43-how-tags-work))                                    |
| `date`                    | optional | ISO date (`YYYY-MM-DD`). Used by the "Newest" sort.                                                            |
| `priority`                | optional | `"P0"`, `"P1"`, or `"P2"`. Higher priority cards appear first in the "Recommended" sort. P0 is highest.        |
| `tileNumber`              | optional | Number shown on the card tile when a Learning Path filter is active. Controls ordering within a learning path. |
| `learningPathTitle`       | optional | Alternative title shown when the card is viewed inside a Learning Path context                                 |
| `learningPathDescription` | optional | Alternative description shown in a Learning Path context                                                       |

**To add a new card:**

1. Open `static/templates.json`.
2. Add a new JSON object inside the top-level `[…]` array.
3. Choose tags from the [available tag list](#43-how-tags-work).
4. Optionally add a thumbnail image to `static/img/`.
5. Open a pull request.

**To edit an existing card:**

1. Find the object with the matching `title` in `static/templates.json`.
2. Edit the relevant fields.
3. Open a pull request.

**To remove a card:**

1. Delete the entire JSON object for that card.

---

### 2.2 Mark a Resource as Featured

> **Featured resources are highlighted prominently** on the site — they appear in the featured carousel/section and receive special visual treatment to draw attention to the most important content.

A resource becomes **featured** by adding the `"featured"` tag to its `tags` array in `static/templates.json`:

```json
{
  "title": "My Important Tutorial",
  "description": "A high-value resource worth highlighting.",
  "website": "https://learn.microsoft.com/...",
  "source": "https://learn.microsoft.com/...",
  "image": "./img/my-thumbnail.png",
  "tags": ["documentation", "tutorial", "python", "flexibleserver", "featured"],
  "date": "2025-12-01",
  "priority": "P0"
}
```

**How featured resources are used:**

- `src/data/users.tsx` exports a `featuredUsers` array that is filtered to **only entries tagged `"featured"`**.
- The featured collection drives dedicated showcase areas that surface these resources above the main gallery.
- Best practice: combine `"featured"` with `"priority": "P0"` so the resource also ranks first in the Recommended sort within the main gallery.

**Guidelines for choosing featured resources:**

| Criteria | Notes |
| -------- | ----- |
| High quality & accuracy | Content should be current, accurate, and well-produced |
| High relevance | Should address common developer needs for PostgreSQL on Azure |
| Breadth of audience | Prefer resources useful to a wide range of skill levels |
| Limit quantity | Keep the featured set small (≤ 10–15) so the designation remains meaningful |

**To feature a resource:** add `"featured"` to its `tags` array.

**To un-feature a resource:** remove `"featured"` from its `tags` array.

> The `"featured"` tag is a **special tag** — it does not appear in the filter panel alongside content-type tags, but it is a valid `TagType` key and must remain in `src/data/tags.tsx`.

---

### 2.3 Edit Quick Links

The Quick Links tiles (top row under the hero) are configured in **`docusaurus.config.js`**, under `customFields.quickLinks`.

Each link looks like this:

```js
{
  icon: "FileText",          // Lucide icon name OR an image path like "img/logo.svg"
  color: "#6f2c91",          // Icon tint color (hex)
  label: "Documentation",    // Link title text
  description: "Complete guides and API references",  // Subtitle text
  href: "https://aka.ms/postgresqldocs",              // Destination URL
},
```

- To **add** a quick link: copy an existing entry and change the values.
- To **remove** a quick link: delete the entry.
- To **reorder** quick links: cut and paste the entry to a new position in the array.

> **Icon values:** Use any [Lucide icon name](https://lucide.dev/icons/) (e.g., `"BookOpen"`, `"GraduationCap"`, `"Gift"`) or a relative image path like `"img/postgres.svg"`.

---

### 2.4 Edit Learning Paths

The three Learning Path cards (Developing Core Applications, Building Generative AI Apps, Building AI Agents) live in **`docusaurus.config.js`** under `customFields.learningPathsSection.paths`.

Each path entry:

```js
{
  icon: "Database",                   // "Database" | "Bot" | "Layers"
  iconColor: "#0078d4",               // Hex color for the icon
  title: "Developing Core Applications",
  description: "Master the fundamentals…",
  level: "Beginner",                  // Free text label
  duration: "2-3 hours",             // Free text label
  tags: ["Database Setup", "Connection Management"],  // Display tags (decorative)
  filterTag: "developing-core-applications",          // MUST match a TagType key in tags.tsx
},
```

Editing these fields updates the text displayed on the Learning Path cards. The `filterTag` value controls which resource cards get shown when a user clicks that learning path — it must match a valid tag key in `src/data/tags.tsx`.

---

### 2.5 Edit the Community & Support Section

Located in **`docusaurus.config.js`** under `customFields.communitySupportSection`.

Structure:

```js
communitySupportSection: {
  title: "Community & Support",
  description: "Connect with fellow developers…",
  cards: [
    {
      title: "Contact Us",
      desc: "Have questions or need help?…",
      icon: "Mail",               // Lucide icon name
      actions: [
        { label: "Email", href: "mailto:…", variant: "outlined", icon: "Mail" },
      ],
    },
    // Events & Webinars card — add events here:
    {
      title: "Events & Webinars",
      icon: "Calendar",
      events: [
        {
          title: "My Event Title",
          description: "What the event is about",
          date: "December 10, 2026",
          time: "2:00 PM PST",
        },
      ],
      actions: [],
    },
  ],
},
```

To **add an upcoming event**, add an object to the `events` array of the "Events & Webinars" card.

To **remove a past event**, delete the object from the array.

---

### 2.6 Edit the Hero (Cover Page) Text

The large hero section at the top of the page is rendered by **`src/components/gallery/ShowcaseCoverPage/index.tsx`**.

The main title and description are hard-coded strings near the top of that file:

```ts
const title = "Application Developer Hub";
const description =
  "Discover comprehensive resources, learning pathways, and community support…";
const subDescription = "for PostgreSQL on Azure";
```

Edit those strings to change the hero copy.

The site-wide tagline and description (used in metadata and the Disclaimer section) are in **`docusaurus.config.js`**:

```js
customFields: {
  description: "Build scalable, secure, and high-performance applications…",
  disclaimerSection: {
    title: "Azure PostgreSQL Developer Hub",
    description: "Build scalable…",
  },
},
```

---

### 2.7 Add or Update Images

1. Place your image file in `static/img/`.  
   Supported formats: `.png`, `.jpg`, `.jpeg`, `.svg`, `.webp`
2. Reference it in `templates.json` as `"image": "./img/your-filename.png"`.
3. **Optimized versions are auto-generated** during the build step (see [Section 5.2](#52-image-optimization-pipeline)) — you only need to add the original.

> Tip: Keep image filenames lowercase with hyphens, e.g. `my-resource-thumbnail.png`.

---

## 3. Beginner Developer: Get the Site Running Locally

### Prerequisites

| Tool    | Minimum version    | Install link                        |
| ------- | ------------------ | ----------------------------------- |
| Node.js | 18.x or higher     | [nodejs.org](https://nodejs.org/)   |
| npm     | Bundled with Node  | —                                   |
| Git     | Any recent version | [git-scm.com](https://git-scm.com/) |

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Azure-Samples/postgres-hub.git
cd postgres-hub

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm start
```

The site opens automatically at `http://localhost:3000/postgres-hub/`.

**Hot reload** is enabled — most changes to `.tsx`, `.ts`, `.css`, or `.json` files are reflected immediately in the browser without a restart.

> **Windows note:** Use PowerShell or Git Bash. All `npm` commands work identically on Windows.

### Verify the build

Before opening a pull request, run a full production build to catch any errors:

```bash
npm run build
```

Output goes to `build/`. If this exits with code 0, the build is clean.

---

## 4. Intermediate Developer: Codebase Walkthrough

### 4.1 Project Layout

```
postgres-hub/
│
├── docusaurus.config.js      ← Site-wide config, Quick Links, Learning Paths, Community section
├── constants.js              ← Shared constants (cookie label/id)
├── sidebars.js               ← Docusaurus sidebar config (mostly empty; not used for main gallery)
├── package.json              ← Scripts, dependencies
│
├── static/
│   ├── templates.json        ← ALL resource card data lives here
│   ├── img/                  ← Original thumbnail images
│   ├── img-optimized/        ← Auto-generated WebP + responsive variants (don't edit manually)
│   ├── service-worker.js     ← Legacy file (sw.js is used instead)
│   └── sw.js                 ← Active service worker for caching
│
├── src/
│   ├── data/
│   │   ├── tags.tsx          ← All tag definitions and the Tag/User TypeScript types
│   │   └── users.tsx         ← Loads templates.json, exports sorted user arrays
│   │
│   ├── pages/
│   │   ├── index.tsx         ← App root: reads URL params, manages tag/filter state
│   │   ├── ShowcaseCardPage.tsx  ← Main library view: search bar, sort, view toggle, filter bar
│   │   ├── ShowcaseCards.tsx     ← Grid card view with pagination
│   │   └── ShowcaseList.tsx      ← List tile view with pagination
│   │
│   ├── components/
│   │   ├── gallery/          ← All resource-library-specific components
│   │   │   ├── ShowcaseCoverPage/   ← Hero section
│   │   │   ├── ShowcaseCard/        ← Individual grid card
│   │   │   ├── ShowcaseListTile/    ← Individual list tile
│   │   │   ├── ShowcaseCardPanel/   ← Detail dialog body
│   │   │   ├── ShowcaseDialog/      ← Modal wrapper
│   │   │   ├── ShowcaseLeftFilters/ ← Desktop sidebar filters
│   │   │   ├── MobileFilterDrawer/ ← Mobile filter drawer
│   │   │   ├── FilterAppliedBar/    ← Active filter badges bar
│   │   │   ├── SearchFilterBar/     ← Search box
│   │   │   ├── SortDropdown/        ← Sort order picker
│   │   │   ├── ViewToggle/          ← Grid / List switcher
│   │   │   ├── ResultsSummary/      ← "Showing X resources" text
│   │   │   ├── ShowcaseTag/         ← Tag badges on cards
│   │   │   ├── ShowcaseTagSelect/   ← Clickable filter checkboxes
│   │   │   ├── CustomCheckbox/      ← Accessible checkbox
│   │   │   └── ResourceTypeOverlay/ ← Icon overlays on card images
│   │   ├── LearningPathsSection/    ← Learning paths carousel + card previews
│   │   ├── QuickLinks/              ← Quick links tile row
│   │   ├── CommunitySupportSection/ ← Community cards
│   │   ├── DisclaimerSection/       ← Footer disclaimer
│   │   ├── Pagination/              ← Page navigation
│   │   ├── OptimizedImage/          ← WebP-aware image component
│   │   ├── GlobalLoader/            ← Full-page loading spinner
│   │   ├── FloatingFeedbackButton/  ← Floating "Share Feedback" button
│   │   └── CustomBadge/             ← Badge component
│   │
│   ├── utils/
│   │   ├── filterUtils.ts       ← Core filter logic (AND across categories, OR within)
│   │   ├── filterTagUtils.ts    ← URL tag normalization & parent/child tag helpers
│   │   ├── sortingUtils.ts      ← Sorting logic (Newest, Recommended)
│   │   ├── tagPriorityUtils.ts  ← CTA-driven badge ordering on cards
│   │   ├── buttonTextUtils.ts   ← Maps resource URL to CTA button label
│   │   ├── buttonStyleUtils.ts  ← Maps CTA label to button color styles
│   │   ├── jsUtils.ts           ← Generic helpers (sortBy, toggleListItem, normalizeLabel)
│   │   ├── githubUtils.ts       ← Opens GitHub feedback issue
│   │   └── imagePreloader.ts    ← Preloads critical images
│   │
│   ├── theme/                   ← Docusaurus theme overrides (swizzled components)
│   │   ├── Root.js              ← Service worker registration, global loader
│   │   ├── Navbar/              ← Custom navbar with sticky positioning + cookie banner
│   │   ├── NavbarItem/          ← "Share Feedback" button + Newsletter dialog
│   │   ├── Footer/              ← Footer link item override (cookie management)
│   │   └── Icon/                ← Twitter/X icon
│   │
│   ├── css/
│   │   └── custom.css           ← Global CSS variables, font settings, navbar/footer overrides
│   │
│   └── types/                   ← TypeScript ambient type declarations
│
├── scripts/
│   └── optimize-images.js       ← Node script: PNG/JPG → WebP, generates responsive sizes
│
└── docs/
    └── intro.md                 ← Minimal docs page (contributor guide stub)
```

---

### 4.2 How Content Flows from JSON to Cards

```
static/templates.json
        │
        ▼
src/data/users.tsx          ← Imports templates.json, adds `order` field, exports arrays
        │
        ├─ unsortedUsers    ← Raw order from JSON
        ├─ sortedUsers      ← Alphabetically sorted
        └─ featuredUsers    ← Filtered to only "featured" tagged entries

        │
        ▼
src/pages/index.tsx         ← Reads URL ?tags= params, holds selectedTags state
        │
        ▼
src/pages/ShowcaseCardPage  ← Calls filterUsers() + getSortedUsers(), passes result down
        │
        ├─ ShowcaseCards.tsx    ← Renders grid of <ShowcaseCard> with pagination
        └─ ShowcaseList.tsx     ← Renders list of <ShowcaseListTile> with pagination
```

---

### 4.3 How Tags Work

Tags are defined in **`src/data/tags.tsx`**. Each tag has:

```ts
type Tag = {
  label: string; // Human-readable name shown in the UI
  description: string; // Tooltip / accessibility description
  type?: string; // Category grouping: "Language" | "ResourceType" | "ContentType" | "Service" | "GenerativeAI"
  color?: string; // Badge color name
  subType?: SubType[]; // Child tags (shown as nested checkboxes in the filter panel)
  buttonText?: string; // Override for the CTA button label
};
```

**Tag categories and their purposes:**

| `type` value     | Used for               | Example tags                                                                                 |
| ---------------- | ---------------------- | -------------------------------------------------------------------------------------------- |
| `"Language"`     | Programming language   | `python`, `dotnet`, `javascript`, `java`, `go`, `php`                                        |
| `"ResourceType"` | Format of the resource | `documentation`, `video`, `blog`, `workshop`, `tutorial`, `training`, `solution-accelerator` |
| `"ContentType"`  | Topic area             | `fundamentals`, `genai`, `app-dev`, `analytics`                                              |
| `"Service"`      | Azure service          | `flexibleserver`, `horizondb`                                                                |
| `"GenerativeAI"` | AI sub-topic           | `rag`, `agents`, `vector-search`, `semantic-search`, `graph`                                 |
| _(none)_         | Learning paths         | `developing-core-applications`, `building-genai-apps`, `building-ai-agents`                  |
| _(none)_         | Special                | `featured`                                                                                   |

**The `TagType` union** (in `tags.tsx`) is the authoritative list of all valid tag keys. Any tag used in `templates.json` must exist in this union or TypeScript will error.

---

### 4.4 How Filtering Works

**File:** `src/utils/filterUtils.ts`

Filter logic applies:

- **AND** logic across tag _categories_ (selecting `python` AND `tutorial` shows only Python tutorials)
- **OR** logic _within_ a category (selecting `python` and `javascript` shows both)

Parent tags act as "select all children". For example, selecting `documentation` implicitly matches cards tagged with `concepts`, `how-to`, or `tutorial`.

The parent-child map is defined in `filterUtils.ts`:

```ts
export const PARENT_CHILD_MAP = {
  documentation: ["concepts", "how-to", "tutorial"],
  fundamentals:  ["fundamentals-overview", "getting-started"],
  genai:         ["genai-overview", "vector-search", "rag", "agents", …],
  "app-dev":     ["connect-&-query", "visual-studio-code-extension", …],
  analytics:     ["powerbi", "microsoft-fabric", "azure-data-factory-(adf)"],
};
```

**Learning path filters** (`developing-core-applications`, `building-genai-apps`, `building-ai-agents`) are mutually exclusive — selecting one clears the others. When active, cards are sorted by `tileNumber` rather than the user-selected sort option.

Tags are stored in the URL as query parameters: `?tags=python&tags=documentation`. This makes filtered views shareable and bookmarkable.

---

### 4.5 How Sorting Works

**File:** `src/utils/sortingUtils.ts`

Two sort modes are available from the dropdown:

| Mode                        | Logic                                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Recommended** _(default)_ | Sort by `priority` (P0 → P1 → P2 → unset), then `solution-accelerator` tag first, then original JSON order |
| **Newest**                  | Sort by `date` field descending; items without a date go last                                              |

---

### 4.6 Key Configuration File

**`docusaurus.config.js`** is the single source of truth for:

- Site metadata (title, URL, favicon, organization/project name)
- Quick Links
- Learning Paths section
- Community & Support section
- Disclaimer section text
- Navbar items
- Footer links
- Docusaurus plugin configuration (ideal-image, PWA, etc.)

If you are adding a new site-wide configurable section, add it under `customFields` and read it in the relevant component via `useDocusaurusContext().siteConfig.customFields`.

---

## 5. Advanced Developer: Building & Deploying

### 5.1 Scripts

| Script               | Command                              | What it does                                              |
| -------------------- | ------------------------------------ | --------------------------------------------------------- |
| Dev server           | `npm start`                          | Starts Docusaurus dev server with HMR at `localhost:3000` |
| Full build           | `npm run build`                      | Runs image optimization → Docusaurus build                |
| Fast build           | `npm run build:fast`                 | Docusaurus build only (skips image optimization)          |
| Optimize images only | `npm run optimize-images`            | Runs `scripts/optimize-images.js`                         |
| Lint                 | `npm run lint`                       | ESLint with auto-fix on all `src/**/*.{ts,tsx,js,jsx}`    |
| Serve build          | `npm run serve`                      | Serves the `build/` output locally                        |
| Deploy (SSH)         | `USE_SSH=true npm run deploy`        | Builds and pushes to `gh-pages` branch                    |
| Deploy (HTTPS)       | `GIT_USER=<username> npm run deploy` | Same, using HTTPS                                         |
| Clear cache          | `npm run clear`                      | Clears the Docusaurus cache                               |

---

### 5.2 Image Optimization Pipeline

**File:** `scripts/optimize-images.js`

When `npm run build` or `npm run optimize-images` runs, this script:

1. Reads all images from `static/img/`
2. For `.png` and `.jpg`: generates WebP versions at three widths (300px, 600px, 1200px) in `static/img-optimized/`
3. For `.svg`: runs SVGO optimization and saves to `static/img-optimized/`
4. Original files remain as fallbacks

The `OptimizedImage` component (`src/components/OptimizedImage/index.tsx`) automatically serves the WebP variant when available and falls back to the original.

> **Do not manually edit** `static/img-optimized/` — it is fully regenerated on each build.

---

### 5.3 CI/CD Pipeline (GitHub Actions)

**File:** `.github/workflows/optimize-and-deploy.yml`

Triggers: push to `main` or `master`, or manual `workflow_dispatch`.

Steps:

1. Checkout
2. Setup Node 20
3. `npm ci`
4. `npm run optimize-images`
5. `npm run build:fast`
6. Upload build artifact
7. Deploy to GitHub Pages via `actions/deploy-pages`

The deployment target is the `gh-pages` branch. The live URL is:  
`https://azure-samples.github.io/postgres-hub/`

---

### 5.4 Service Worker & Caching

**File:** `static/sw.js`

A service worker is registered in `src/theme/Root.js` (production only). Caching strategy:

- **HTML pages:** Network-first (always fresh)
- **Images:** Cache-first (served from cache for 7 days, max 100 entries)
- **Precached** on install: `index.html` and the root path

The `static/_headers` file documents the _desired_ HTTP cache headers but is **not applied** by GitHub Pages (which does not support custom headers). The service worker is the actual caching mechanism.

---

### 5.5 Adding a New UI Component

1. Create a folder under `src/components/` or `src/components/gallery/` for gallery-specific components.
2. Add your component in `index.tsx`.
3. Add a co-located `styles.module.css` for scoped styles.
4. Import and use the component in the relevant page or parent component.

Follow the existing pattern:

- Use **Fluent UI v9** (`@fluentui/react-components`) for interactive controls (buttons, dialogs, dropdowns, etc.)
- Use **Lucide React** icons for decorative icons.
- Use CSS Modules for component-scoped styles.
- Prefix global styles in `src/css/custom.css` only when necessary.

---

### 5.6 Adding a New Tag or Content Type

**Step 1 — Add the tag definition in `src/data/tags.tsx`:**

```ts
// 1. Add the key to the TagType union:
export type TagType =
  | … existing tags …
  | "my-new-tag";          // ← add here

// 2. Add the metadata object to the Tags map:
export const Tags = {
  …
  "my-new-tag": {
    label: "My New Tag",
    description: "Description of what this tag means.",
    type: "ContentType",   // or "ResourceType", "Language", "Service", etc.
    color: "blue",
  },
};
```

**Step 2 — (Optional) Register as a child of a parent tag in `src/utils/filterUtils.ts`:**

```ts
export const PARENT_CHILD_MAP = {
  …
  "app-dev": [
    …existing children…,
    "my-new-tag",    // ← add here if it belongs under app-dev
  ],
};
```

**Step 3 — Use it in `templates.json`:**

```json
{
  "tags": ["documentation", "my-new-tag", "python"]
}
```

**Step 4 — Adding a new Learning Path tag** additionally requires:

- A new entry in `learningPathsSection.paths` in `docusaurus.config.js`
- The new filter tag key added to the `LEARNING_PATH_TAGS` array in:
  - `src/pages/ShowcaseCards.tsx`
  - `src/pages/ShowcaseList.tsx`
  - `src/components/LearningPathsSection/index.tsx`
  - `src/components/gallery/ShowcaseCard/index.tsx`
  - `src/components/gallery/ShowcaseListTile/index.tsx`
  - `src/components/gallery/ShowcaseLeftFilters/index.tsx` (the `learningPathTags` array)

---

## 6. Contributing & Feedback

- Read [Contributing.md](./Contributing.md) before submitting a PR.
- Use the GitHub issue templates: go to **Issues → New Issue** and choose the **Feedback** template.
- The floating "Share Feedback" button on the live site opens a pre-filled GitHub issue at:  
  `https://github.com/Azure-Samples/postgres-hub/issues/new?template=feedback.md`
- Questions? Email: `AskAzurePostgreSQL@microsoft.com`

### PR checklist

- [ ] `npm run build` exits with code 0 (no build errors)
- [ ] `npm run lint` shows no new errors
- [ ] New images are placed in `static/img/` (not `static/img-optimized/`)
- [ ] New tag keys are added to both `TagType` union and `Tags` object in `tags.tsx`
- [ ] `templates.json` is valid JSON (use a JSON validator if unsure)
- [ ] No secrets or credentials are committed

---

## 7. Quick Reference Cheat Sheet

| Goal                               | Where to change                                                 |
| ---------------------------------- | --------------------------------------------------------------- |
| Add a new resource card            | `static/templates.json`                                         |
| Edit an existing card's text/URL   | `static/templates.json`                                         |
| Mark a resource as featured        | Add `"featured"` to the card's `tags` array in `static/templates.json` |
| Add a card image                   | `static/img/`                                                   |
| Edit Quick Links                   | `docusaurus.config.js` → `customFields.quickLinks`              |
| Edit Learning Path cards           | `docusaurus.config.js` → `customFields.learningPathsSection`    |
| Edit Community/Events              | `docusaurus.config.js` → `customFields.communitySupportSection` |
| Edit hero heading/text             | `src/components/gallery/ShowcaseCoverPage/index.tsx`            |
| Edit disclaimer/site description   | `docusaurus.config.js` → `customFields.disclaimerSection`       |
| Add a new tag                      | `src/data/tags.tsx`                                             |
| Change filter behavior             | `src/utils/filterUtils.ts`                                      |
| Change sort behavior               | `src/utils/sortingUtils.ts`                                     |
| Change CTA button label logic      | `src/utils/buttonTextUtils.ts`                                  |
| Change CTA button colors           | `src/utils/buttonStyleUtils.ts`                                 |
| Change tag badge ordering on cards | `src/utils/tagPriorityUtils.ts`                                 |
| Edit global styles/fonts           | `src/css/custom.css`                                            |
| Edit navbar                        | `src/theme/Navbar/`                                             |
| Edit footer links                  | `docusaurus.config.js` → `themeConfig.footer.links`             |
| Run locally                        | `npm install` then `npm start`                                  |
| Production build                   | `npm run build`                                                 |
| Deploy manually                    | `GIT_USER=<username> npm run deploy`                            |
