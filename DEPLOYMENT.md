# Deployment Guide

This guide covers deploying your Aradhana Education landing page to production.

## Pre-Deployment Checklist

### 1. Update Configuration Files

#### `lib/constants.ts`
```typescript
export const WHATSAPP_NUMBER = '919876543210' // Your actual WhatsApp number
export const PHONE_NUMBER = '+91 98765 43210' // Your display phone number
```

#### `lib/structured-data.ts`
Update the following:
- Company address (street, city, postal code)
- Contact phone number
- Social media URLs (Facebook, Instagram, Twitter, LinkedIn)

#### `.env.local` (for production, set in Vercel)
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Aradhana Education"
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

### 2. Test Locally

```bash
# Build the project
pnpm build

# Test production build
pnpm start

# Run Lighthouse tests
pnpm lighthouse
```

### 3. Verify SEO Elements

- [ ] Check `/sitemap.xml` is generated
- [ ] Verify `/robots.txt` is accessible
- [ ] Test OG image at `/opengraph-image`
- [ ] Validate JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test OG tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   In Vercel dashboard → Settings → Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_SITE_NAME=Aradhana Education
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `aradhana.com`)

2. **Update DNS Records**
   Add these records at your domain registrar:
   
   **For apex domain (aradhana.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update Environment Variables**
   Change `NEXT_PUBLIC_SITE_URL` to your custom domain:
   ```
   NEXT_PUBLIC_SITE_URL=https://aradhana.com
   ```

4. **Redeploy**
   Trigger a new deployment for changes to take effect.

## Post-Deployment Tasks

### 1. Submit Sitemap to Search Engines

**Google Search Console:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 2. Set Up Analytics

**Plausible Analytics:**
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Verify tracking is working

**Vercel Analytics:**
- Automatically enabled for Vercel deployments
- View in Vercel dashboard → Analytics

### 3. Test Production Site

- [ ] Test all forms and submissions
- [ ] Verify WhatsApp button works
- [ ] Check all internal links
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Test accessibility with axe DevTools

### 4. Monitor Performance

**Vercel Dashboard:**
- Monitor deployment status
- Check analytics and Web Vitals
- Review function logs

**Plausible Dashboard:**
- Track visitor metrics
- Monitor conversion events
- Analyze traffic sources

## Continuous Deployment

Vercel automatically deploys when you push to your main branch:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel will automatically deploy
```

## Rollback

If you need to rollback to a previous version:

1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "..." → "Promote to Production"

## Environment-Specific Builds

**Preview Deployments:**
- Automatically created for pull requests
- Use for testing before merging to main

**Production Deployments:**
- Triggered by pushes to main branch
- Use production environment variables

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Test build locally: `pnpm build`

### Environment Variables Not Working

1. Ensure variables start with `NEXT_PUBLIC_` for client-side
2. Redeploy after adding/changing variables
3. Check variable names match exactly

### Sitemap Not Generating

1. Verify `postbuild` script in package.json
2. Check `next-sitemap.config.js` configuration
3. Ensure `NEXT_PUBLIC_SITE_URL` is set

### Images Not Loading

1. Check image paths are correct
2. Verify images exist in `/public` directory
3. Check `next.config.js` image configuration

## Security Checklist

- [ ] All environment variables are set in Vercel (not in code)
- [ ] `.env.local` is in `.gitignore`
- [ ] Security headers are configured in `next.config.js`
- [ ] CSP headers are properly set
- [ ] No sensitive data in client-side code
- [ ] Rate limiting is enabled for API routes

## Performance Optimization

- [ ] Images are optimized and use `next/image`
- [ ] Fonts are preloaded
- [ ] Bundle size is analyzed
- [ ] Lighthouse score is ≥95 on all metrics
- [ ] Web Vitals are within targets

## Support

For deployment issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
3. Contact your development team
