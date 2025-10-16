# Aradhana Education - Landing Page

A production-ready Next.js 14 landing page for nursing and pharmacy admission guidance in Gujarat. Built with performance, accessibility, and SEO best practices.

## 🚀 Features

### SEO & Meta
- ✅ Optimized meta tags with proper title and description
- ✅ OpenGraph image generation via `/app/opengraph-image.tsx`
- ✅ JSON-LD structured data (LocalBusiness, WebSite, FAQPage)
- ✅ Automatic sitemap generation with `next-sitemap`
- ✅ Custom robots.txt configuration
- ✅ Canonical URLs and proper meta tags

### Forms & API
- ✅ Lead capture form with React Hook Form + Zod validation
- ✅ Rate limiting (5 requests/minute per IP)
- ✅ Data persistence to local JSON file
- ✅ WhatsApp deep-link integration with UTM params
- ✅ Analytics tracking (Plausible + Vercel Analytics)

### Performance
- ✅ Optimized font loading with `next/font`
- ✅ Image optimization with `next/image`
- ✅ Bundle analysis with `@next/bundle-analyzer`
- ✅ Tree-shaking for icons (lucide-react)
- ✅ Lazy loading for images
- ✅ Target: Lighthouse score ≥95 mobile

### Security
- ✅ Content Security Policy headers
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ X-Content-Type-Options: nosniff
- ✅ Permissions-Policy for camera/microphone

### UI/UX
- ✅ Fully responsive design
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Custom 404 and 500 error pages
- ✅ WhatsApp floating button
- ✅ Comprehensive footer with contact info
- ✅ Skip to main content link

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **SEO**: next-seo, next-sitemap, schema-dts
- **Analytics**: Vercel Analytics + Plausible
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## 🎨 Design System

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (UI and body text)

### Colors
- Sky Blue Gradient: `#DDEFFF` → `#FFF7EA`
- Primary (Teal): `#00B3A4`
- Ink (Navy): `#0E2433`
- Subtle Ink: `#41566B`

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

1. **Install dependencies:**
```bash
pnpm install
# or
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env.local
```

3. **Update `.env.local` with your values:**
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Aradhana Education"
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

4. **Update contact details in `lib/constants.ts`:**
```typescript
export const WHATSAPP_NUMBER = '919876543210' // Your WhatsApp number
export const PHONE_NUMBER = '+91 98765 43210' // Display phone number
```

5. **Update business details in `lib/structured-data.ts`:**
- Address (street, city, postal code)
- Contact information
- Social media links

### Development

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Build for Production

```bash
pnpm build
# or
npm run build
```

This will:
1. Build the Next.js application
2. Generate sitemap.xml automatically

### Start Production Server

```bash
pnpm start
# or
npm start
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production + generate sitemap |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm analyze` | Analyze bundle size |
| `pnpm lighthouse` | Run Lighthouse CI tests |

## 🚢 Deployment on Vercel

### Quick Deploy

1. **Push your code to GitHub**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables:**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_SITE_NAME=Aradhana Education
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```

4. **Deploy!**
   Vercel will automatically build and deploy your site.

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXT_PUBLIC_SITE_URL` environment variable

## 🧪 Testing & Quality

### Run Lighthouse CI

First, install Lighthouse CI globally:
```bash
npm install -g @lhci/cli
```

Then run the tests:
```bash
# Start your dev server first
pnpm dev

# In another terminal
pnpm lighthouse
```

### Check Accessibility

Use browser extensions:
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/extension/)

### Validate SEO

1. **Test OpenGraph tags:**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

2. **Validate JSON-LD:**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema.org Validator](https://validator.schema.org/)

3. **Check sitemap:**
   - Visit `/sitemap.xml` after build
   - Validate at [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

## 📁 Project Structure

```
aradhana-landing/
├── app/
│   ├── (site)/                    # Main site group
│   │   ├── components/
│   │   │   ├── sections/          # Page sections
│   │   │   ├── Footer.tsx         # Site footer
│   │   │   └── WhatsAppButton.tsx # Floating WhatsApp button
│   │   ├── layout.tsx             # Site layout
│   │   └── page.tsx               # Home page with JSON-LD
│   ├── api/
│   │   └── lead/
│   │       └── route.ts           # Lead submission API with rate limiting
│   ├── robots.txt/
│   │   └── route.ts               # Dynamic robots.txt
│   ├── error.tsx                  # 500 error page
│   ├── not-found.tsx              # 404 error page
│   ├── layout.tsx                 # Root layout with CSP
│   ├── globals.css                # Global styles
│   └── opengraph-image.tsx        # Dynamic OG image
├── components/
│   └── ui/                        # Reusable UI components
├── lib/
│   ├── constants.ts               # App constants
│   ├── env.ts                     # Environment validation
│   ├── seo-config.ts              # SEO configuration
│   ├── structured-data.ts         # JSON-LD schemas
│   └── utils.ts                   # Utility functions
├── public/
│   └── images/                    # Static images
├── scripts/
│   └── lighthouse.js              # Lighthouse CI script
├── types/
│   ├── analytics.d.ts             # Analytics type declarations
│   └── form.ts                    # Form schemas
├── data/
│   └── leads.json                 # Lead submissions (auto-generated)
├── .env.example                   # Environment variables template
├── next.config.js                 # Next.js config with security headers
├── next-sitemap.config.js         # Sitemap configuration
├── lighthouserc.js                # Lighthouse CI config
└── tailwind.config.ts             # Tailwind configuration
```

## 🔒 Security Headers

The following security headers are configured in `next.config.js`:

- **X-Frame-Options**: SAMEORIGIN (prevents clickjacking)
- **X-Content-Type-Options**: nosniff (prevents MIME sniffing)
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: Restricts camera, microphone, geolocation
- **Content-Security-Policy**: Defined in root layout (see comments for server-side setup)

## 📊 Analytics

### Plausible Analytics
Events tracked:
- `lead_submitted` - When a user submits the contact form

### Vercel Analytics
- Automatic Web Vitals tracking
- Custom event tracking for form submissions

## 🎯 Performance Targets

- **Lighthouse Performance**: ≥95
- **Lighthouse Accessibility**: ≥95
- **Lighthouse Best Practices**: ≥95
- **Lighthouse SEO**: ≥95
- **First Contentful Paint**: <1.8s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 📝 Content Updates

### Update Contact Information
Edit `lib/constants.ts`:
```typescript
export const WHATSAPP_NUMBER = 'your-number'
export const PHONE_NUMBER = 'your-display-number'
```

### Update Business Details
Edit `lib/structured-data.ts`:
- Company address
- Contact details
- Social media links

### Update Courses
Edit `lib/constants.ts`:
```typescript
export const COURSES = [
  { value: 'gnm', label: 'GNM (General Nursing & Midwifery)' },
  // Add more courses
]
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
```

### Environment Variables Not Working
- Ensure `.env.local` exists
- Restart dev server after changes
- Check variable names start with `NEXT_PUBLIC_` for client-side access

### Sitemap Not Generating
- Run `pnpm build` (sitemap generates post-build)
- Check `next-sitemap.config.js` configuration
- Verify `NEXT_PUBLIC_SITE_URL` is set

## 📞 Support

For issues or questions:
- Check existing documentation
- Review error logs
- Contact development team

## 📄 License

Private - All rights reserved © 2025 Aradhana Education
