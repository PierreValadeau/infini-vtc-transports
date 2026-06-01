# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Infini VTC is a premium private chauffeur service website for the French Riviera (Côte d'Azur). This is a single-page application showcasing luxury transportation services targeting high-end clientele and international tourists.

**Client**: Infini by MHV
**Service Area**: Saint-Tropez, Monaco, Cannes, Antibes, Nice
**Tech Stack**: React + Vite, Tailwind CSS, Shadcn/ui, react-i18next, EmailJS
**Deployment**: Static build for OVH hosting via FTP

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Single-Page Structure

The app follows a single-page layout with smooth scroll navigation between sections. All sections are rendered in `src/App.jsx` in this order:

1. Hero - Full-screen landing with call-to-action
2. Services - Three service categories (Transfers, Availability, Events)
3. Vehicle - Mercedes V-Class showcase with features
4. About - Company presentation
5. Coverage - Service areas and transport hubs
6. Contact - Contact form with EmailJS integration

### Internationalization (i18n)

- Uses `react-i18next` with language files in `src/locales/`
- Default language: French (`fr`)
- Available languages: French (`fr`), English (`en`)
- Configuration: `src/lib/i18n.js`
- Language switcher component: `src/components/common/LanguageSwitcher.jsx`
- All user-facing text must be added to both `fr.json` and `en.json`

### Component Organization

```
src/
├── components/
│   ├── layout/           # Header (sticky nav) and Footer
│   ├── sections/         # Main page sections (Hero, Services, etc.)
│   ├── ui/               # Shadcn/ui components (button, card, input, etc.)
│   └── common/           # Reusable components (ServiceCard, LanguageSwitcher)
├── lib/
│   ├── utils.js          # Tailwind merge utility (cn)
│   └── i18n.js           # i18n configuration
├── locales/              # Translation files (fr.json, en.json)
└── styles/               # Global styles (globals.css)
```

### Styling System

**Color Scheme** (Black & Gold luxury theme):
- Background: `bg-black` (#000000)
- Accent: `text-gold` (configured as white in current build, should be #D4AF37)
- Primary text: `text-white` (#FFFFFF)
- Secondary text: `text-gray-light` (#A1A1A1)

**Responsive Design**:
- Mobile-first approach
- Sticky phone button on mobile (bottom-right)
- Burger menu for mobile navigation
- Tailwind standard breakpoints

### Path Aliases

Configured in `vite.config.js` and `components.json`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/components/ui` → `src/components/ui`

Use these aliases when importing: `import { Button } from '@/components/ui/button'`

## EmailJS Integration

Contact form uses EmailJS for email delivery. Configuration requires environment variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Contact form implementation: `src/components/sections/Contact.jsx`

**Template variables**:
- `{{from_name}}` - Contact name
- `{{from_email}}` - Contact email
- `{{phone}}` - Phone number
- `{{message}}` - Message content
- `{{to_email}}` - Destination (infini@mhvtransports.com)

## Important Project Constraints

### Content Guidelines
- **No pricing displayed** - All rates are provided on request only
- Contact methods: Phone (0673652202), Email (infini@mhvtransports.com), WhatsApp
- Brand: "Infini by MHV"
- Vehicle: Mercedes Classe V extra-long, 6 passengers, black exterior, beige leather interior

### Design Philosophy
- Luxury, elegance, minimalism
- Subtle scroll animations
- Emphasis on visuals over text
- Professional, trustworthy aesthetic

### Pending Assets
The following assets use placeholders pending real content:
- Logo Infini (currently text, needs image)
- Vehicle photos (exterior, interior, starry roof)
- Driver photo
- Hero background image

When adding images, place in `src/assets/images/`

## Shadcn/ui Components

Installed components (in `src/components/ui/`):
- button
- card
- input
- label
- separator
- textarea

To add more Shadcn components:
```bash
npx shadcn@latest add [component-name]
```

Configuration: `components.json` (default style, no RSC, JavaScript not TypeScript)

## SEO Configuration

- Meta tags are in `index.html`
- Sitemap and robots.txt should be added to `public/` folder
- All images need `alt` attributes
- Heading hierarchy must be maintained (h1, h2, h3)

## Deployment

Build output goes to `dist/` folder. Upload contents to OVH hosting:

```bash
npm run build
# Upload dist/ contents via FTP to public_html or www folder
```

**Important**: Do not upload `.env` file. Environment variables must be configured on the server or embedded at build time.

## Contact Information

- Phone: 06 73 65 22 02
- Email: infini@mhvtransports.com
- Response time promise: Within one hour

## Key Files Reference

- Main app structure: `src/App.jsx`
- i18n setup: `src/lib/i18n.js`
- Translations: `src/locales/fr.json`, `src/locales/en.json`
- Tailwind config: `tailwind.config.js`
- Vite config: `vite.config.js`
- Shadcn config: `components.json`
- Detailed specifications: `infini-vtc-specs.md`
- Project status: `NEXT_STEPS.md`
