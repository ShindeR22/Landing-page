# 📸 Magic Vision Photography — Atelier Landing Page

A bespoke, fine-art landing page and booking portal for **Magic Vision Photography**, a boutique photography atelier based in Pune & Pimpri-Chinchwad (PCMC), Maharashtra.

The studio specializes in maternity, newborn, first birthday / cake smash, and family heirloom portraiture, founded and led by **Ashpak** (Director of Photography) and **Arju** (Stylist & Creative Director).

---

## 🌟 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture & File Structure](#-project-architecture--file-structure)
- [Photoshoot Packages Breakdown](#-photoshoot-packages-breakdown)
- [Booking & Contact Flow](#-booking--contact-flow)
- [Getting Started](#-getting-started)
- [Configuration & Data Customization](#-configuration--data-customization)
- [Deployment](#-deployment)
- [Credits & Contact](#-credits--contact)

---

## 📖 Overview

Magic Vision Photography is tailored to deliver an intimate, luxury, and stress-free portrait experience for growing families. This web application serves as the digital storefront and conversion engine for the atelier:
- Presenting editorial imagery and portfolio highlights.
- Providing transparent pricing and package comparisons.
- Introducing the founders' vision, ethics, and infant-safe handling.
- Offering an interactive booking inquiry mechanism routed directly to WhatsApp.

---

## ✨ Key Features

1. **Top Announcement Bar & Sticky Header**
   - Live booking status notification.
   - Studio branding with custom mark (`MV`) and logo.
   - Smooth anchor navigation with a responsive mobile navigation drawer.
   - Quick "Book a session" call-to-action button.

2. **Editorial Hero Carousel (`Hero`)**
   - High-impact photography slider with auto-advance timer (6.5s interval).
   - Interactive slide indicators, slide count display (`01 / 03`), and manual navigation buttons.
   - Editorial typography overlay with subtle scrim and backdrop gradations.

3. **Atelier Introduction (`AtelierIntro`)**
   - Biography and philosophy of co-founders Ashpak & Arju.
   - Highlights 8+ years of craft, lighting mastery, wardrobe drapery, and infant safety.

4. **Curated Packages Carousel (`Packages`, `PackageCarousel`, `PackageDetails`)**
   - Horizontal scrollable carousel with navigation arrows.
   - 6 detailed Maternity Photography packages (ranging from ₹2,999 to ₹9,999).
   - Native HTML5 `<dialog>` modal popup for viewing full package sheets and high-res samples.
   - Instant WhatsApp inquiry button pre-filled with package context.

5. **Archival Portfolio Gallery (`Portfolio`)**
   - Dynamic category filtering:
     - *All Work*
     - *Maternity • Traditional*
     - *Maternity • Western*
     - *Maternity • Outdoor*
     - *Kids & 1st Birthday*
   - Progressive loading ("View more" button).
   - Fullscreen lightbox modal with zoom preview, metadata captions, and keyboard accessibility (Esc key support).

6. **Studio Values & Philosophy (`StudioValues`)**
   - Personalized photoshoot experience.
   - Thoughtful posing with dedicated female stylist (Arju).
   - Fine-art color grading and painterly warmth.
   - Archival prints and heirloom album craftsmanship.

7. **Parent Testimonials (`Testimonial`)**
   - Verified parent reviews from Pune & PCMC (Wakad, Baner, Pimpri-Chinchwad).
   - Interactive review slider with star ratings and client tags.

8. **Instagram Feed Integration (`InstagramGrid`)**
   - Curated grid preview showcasing recent studio sessions and behind-the-scenes content.
   - Direct link to `@magicvision_photography`.

9. **Interactive Booking Form (`BookingSection`, `BookingForm`)**
   - Client-side validated form fields:
     - Client Full Name
     - 10-digit Indian Mobile Number (`pattern="[0-9]{10}"`)
     - Email Address (optional)
     - Photoshoot Experience selector
     - Expected session / due date
     - Preferred setting (Studio, Outdoor, Undecided)
     - Custom notes and wishes
   - Seamlessly compiles inquiries and routes them directly to WhatsApp (`wa.me/917558250015`) with a pre-formatted message.

10. **Site Footer (`SiteFooter`)**
    - Geographic coverage details (Pune, PCMC, Wakad, Baner, Hinjawadi, Aundh, Kothrud).
    - Direct phone dialing (`+91 95951 44144`) and WhatsApp links.
    - Smooth "Back to top" navigation.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16.4** | Modern React Framework with App Router & Turbopack |
| **React 19** | Component-based UI library |
| **TypeScript 5** | Strict type safety across components and data schemas |
| **Tailwind CSS v4** | Utility-first CSS framework with `@tailwindcss/turbopack` |
| **Custom Design Tokens** | Warm palette (`--paper`, `--beige`, `--espresso`, `--taupe`, `--gold`) |
| **Google Fonts** | `Playfair Display` (editorial serif) & `Plus Jakarta Sans` (body font) |
| **ESLint 9** | Code quality and Next.js specific lint rules |

---

## 📁 Project Architecture & File Structure

```text
Landing page/
├── public/
│   ├── images/
│   │   ├── instagram/           # 18 curated portfolio & gallery images (.webp)
│   │   ├── hero-*.webp/.jpg     # Hero carousel imagery
│   │   ├── maternity-package-*.webp # Package sheet previews (Packages 1-6)
│   │   └── magic-vision-logo.jpg # Brand logo
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css          # Design tokens, theme, typography, and styling
│   │   ├── layout.tsx           # Root HTML layout with Google Font imports
│   │   └── page.tsx             # Home page assembling all landing sections
│   ├── components/
│   │   ├── atelier-intro.tsx    # Founders' story and credentials
│   │   ├── booking-form.tsx     # Validated form with WhatsApp redirect
│   │   ├── booking-section.tsx  # Wrapper for booking section and direct hotline
│   │   ├── hero.tsx             # Carousel hero section with auto-advance
│   │   ├── instagram-grid.tsx   # Curated social showcase grid
│   │   ├── package-carousel.tsx # Smooth horizontal carousel for package cards
│   │   ├── package-details.tsx  # Modal dialog displaying package sheet & samples
│   │   ├── packages.tsx         # Package pricing cards & WhatsApp CTAs
│   │   ├── portfolio.tsx        # Filterable gallery & fullscreen lightbox modal
│   │   ├── section-heading.tsx  # Standardized heading typography component
│   │   ├── site-footer.tsx      # Atelier address, service areas, contact details
│   │   ├── site-header.tsx      # Announcement banner & responsive navigation
│   │   ├── studio-values.tsx    # 4 core studio commitments
│   │   └── testimonial.tsx      # Client reviews carousel
│   └── data/
│       └── atelier.ts           # Centralized mock data, schemas, packages & copy
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and npm scripts
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## 📦 Photoshoot Packages Breakdown

All maternity packages include raw clicks and edited soft copies:

| Package | Mood / Setting | Changes | Price | Key Inclusions |
| :--- | :--- | :--- | :--- | :--- |
| **Package 1** | Studio + Garden | 2 Outfits | ₹2,999 | 15 edited copies, all raw photos, 1 saree + 1 magic gown, standard props |
| **Package 2** | Studio Only | 2 Outfits | ₹3,999 | 15 edited copies, all raw photos, 1 saree + 1 magic gown, makeup artist available |
| **Package 3** | Studio + Garden | 3 Outfits | ₹4,999 | 25 edited copies, all raw photos, 1 saree + 2 magic gowns, 30s reel, makeup available |
| **Package 4** | Shiv Shahi Wada | 1 Outfit | ₹6,999 | 20 edited copies, all raw photos, 1 saree, 1-min reel, makeup available |
| **Package 5** | Wada + Studio + Garden | 3 Outfits | ₹9,999 | 30 edited copies, all raw photos, 1 saree + 1 premium gown + 1 garden gown, 1-min reel |
| **Package 6** | Weekday Home Session | 2 Outfits | ₹5,999 | 20 edited copies, all raw photos, 1 saree + 1 magic gown, 30s reel, makeup artist included |

> *Note: Physical prints (6×8 inch) are available at ₹50 per print. Specific outdoor location or garden entry fees apply separately.*

---

## 📲 Booking & Contact Flow

1. **Direct Inquiries**:
   - Primary Phone: [`+91 95951 44144`](tel:+917558250015)
   - WhatsApp Support: [`+91 75582 50015`](https://wa.me/917558250015)
2. **Package Inquiries**:
   - Each package card has an **"Inquire on WhatsApp"** button that sends a pre-populated inquiry for that specific package.
3. **Custom Booking Form**:
   - The booking form validates user inputs and generates a structured WhatsApp message:
     ```text
     Hello Ashpak & Arju, I would like to discuss a photoshoot session.
     Name: [Client Name]
     Phone: [10-digit Phone]
     Email: [Client Email]
     Photoshoot: [Selected Package / Session Type]
     Date / due date: [Selected Date]
     Setting: [Preferred Location]
     Notes: [Client Notes]
     ```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18+` or `v20+` recommended
- **npm**, **pnpm**, or **yarn**

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd "Landing page"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

Create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm run start
```

### Linting

Check code standards using ESLint:

```bash
npm run lint
```

---

## ⚙️ Configuration & Data Customization

All textual content, gallery photos, pricing packages, and founder details are decoupled from UI logic and stored in [`src/data/atelier.ts`](src/data/atelier.ts):

- **Update Packages**: Edit the `experiencePackages` array.
- **Update Portfolio Items**: Modify `atelierPhotos` (title, category, location, image path).
- **Update Hero Carousel Slides**: Edit `heroSlides` (quotes, captions, background images).
- **Update Testimonials**: Modify `familyWords` in [`src/components/testimonial.tsx`](src/components/testimonial.tsx).
- **Styling & Theme Colors**: Adjust design tokens in [`src/app/globals.css`](src/app/globals.css) under `:root`.

---

## 📍 Service Locations

Magic Vision Photography serves families across:
- **Pune**: Baner, Aundh, Kothrud, Shivajinagar, Koregaon Park, Viman Nagar, etc.
- **Pimpri-Chinchwad (PCMC)**: Wakad, Hinjawadi, Ravet, Nigdi, Pimple Saudagar, Moshi, etc.
- Private studio sessions and on-location shoots (e.g., Shiv Shahi Wada, nature parks, home sessions).

---

## 📄 License & Attribution

- **Website Design & Code**: © 2026 Magic Vision Photography. All rights reserved.
- **Photography & Media**: All images and trademarks belong to Magic Vision Photography.
