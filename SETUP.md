# Setup Guide

## Quick Start

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment**:
```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local with your values
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Aradhana
```

3. **Run development server**:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm run start

# Analyze bundle size
npm run analyze
```

## Code Quality

```bash
# Run linter
npm run lint

# Type check
npm run typecheck

# Format code
npm run format

# Check formatting
npm run format:check
```

## Git Hooks

Husky is configured to run lint-staged on pre-commit:
- Lints and formats staged files
- Runs type checking

## Project Structure

```
aradhana-landing/
├── app/
│   ├── (site)/              # Main site routes
│   │   ├── components/
│   │   │   └── sections/    # Page sections
│   │   └── page.tsx         # Home page
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── opengraph-image.tsx  # OG image generator
│   └── robots.txt/          # Robots.txt route
├── components/
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── env.ts              # Environment validation
│   ├── seo-config.ts       # SEO configuration
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── types/                  # TypeScript types
└── scripts/                # Build scripts
```

## Design System

### Colors
- **Primary**: `#00B3A4` (Teal)
- **Ink**: `#0E2433` (Navy)
- **Background**: Gradient from `#DDEFFF` to `#FFF7EA`

### Typography
- **Display**: Playfair Display (headings)
- **Body**: Inter (text)

### Components
All components are in `components/ui/`:
- Button (primary, secondary, ghost variants)
- Container (responsive wrapper)
- SectionHeader (eyebrow + title + subtitle)
- IconCard (feature cards)
- TestimonialCard (glass effect)
- Stat (number + label)
- Badge, Pill (tags)
- AvatarGroup (user avatars)
- LogosMarquee (auto-scrolling logos)
- VideoMock (video call mockup)
- GradientClouds (decorative background)

## Next Steps

1. Add actual images to `/public/images/`
2. Replace placeholder content in sections
3. Add contact form functionality
4. Configure analytics (Plausible/Vercel)
5. Add more pages (About, Services, etc.)
6. Implement i18n for Gujarati/Hindi
7. Add FAQ section with JSON-LD
8. Create partner logos for marquee

## Performance Targets

- Lighthouse Performance: ≥ 95
- Lighthouse Accessibility: ≥ 95
- Lighthouse Best Practices: ≥ 95
- Lighthouse SEO: ≥ 95

Run Lighthouse CI:
```bash
npm install -D @lhci/cli
npm run build
npx lhci autorun
```
