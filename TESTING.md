# Testing Guide

Comprehensive testing checklist for the Aradhana Education landing page.

## Pre-Launch Testing

### 1. Functional Testing

#### Forms
- [ ] Contact form validates all fields correctly
- [ ] Phone number validation accepts valid Indian numbers
- [ ] Form submission creates entry in `/data/leads.json`
- [ ] WhatsApp redirect works with correct message
- [ ] Success message displays after submission
- [ ] Form resets after successful submission
- [ ] Error messages display for invalid inputs

#### Navigation
- [ ] All internal links work correctly
- [ ] Footer links navigate to correct sections
- [ ] Skip to main content link works
- [ ] Privacy and Terms pages load correctly
- [ ] 404 page displays for invalid URLs
- [ ] Back button works on error pages

#### WhatsApp Integration
- [ ] Floating WhatsApp button is visible on all pages
- [ ] Button opens WhatsApp with correct number
- [ ] Pre-filled message is correct
- [ ] UTM parameters are included in form submissions

### 2. SEO Testing

#### Meta Tags
```bash
# View page source and verify:
```
- [ ] Title tag is present and correct
- [ ] Meta description is present (155-160 characters)
- [ ] Canonical URL is set correctly
- [ ] OpenGraph tags are present (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags are present
- [ ] Keywords meta tag is present

#### Structured Data
Test at: https://search.google.com/test/rich-results

- [ ] Organization schema is valid
- [ ] WebSite schema is valid
- [ ] FAQPage schema is valid
- [ ] No errors in structured data

#### OpenGraph Image
Test at:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator

- [ ] OG image loads correctly
- [ ] Image dimensions are 1200x630
- [ ] Image displays correctly in preview
- [ ] Alt text is descriptive

#### Sitemap & Robots
- [ ] `/sitemap.xml` is accessible
- [ ] Sitemap includes all important pages
- [ ] `/robots.txt` is accessible
- [ ] Robots.txt allows search engine crawling

### 3. Performance Testing

#### Lighthouse Audit
```bash
# Run Lighthouse
pnpm lighthouse
```

Target scores (mobile):
- [ ] Performance: ≥95
- [ ] Accessibility: ≥95
- [ ] Best Practices: ≥95
- [ ] SEO: ≥95

#### Core Web Vitals
- [ ] First Contentful Paint (FCP): <1.8s
- [ ] Largest Contentful Paint (LCP): <2.5s
- [ ] Cumulative Layout Shift (CLS): <0.1
- [ ] First Input Delay (FID): <100ms
- [ ] Time to Interactive (TTI): <3.8s

#### Image Optimization
- [ ] All images use `next/image` component
- [ ] Images are properly sized
- [ ] Images have alt text
- [ ] Hero image is preloaded
- [ ] Other images are lazy-loaded

#### Font Loading
- [ ] Fonts are preloaded
- [ ] No FOUT (Flash of Unstyled Text)
- [ ] Font display: swap is used

### 4. Accessibility Testing

#### Automated Testing
Use browser extensions:
- axe DevTools: https://www.deque.com/axe/devtools/
- WAVE: https://wave.webaim.org/extension/

- [ ] No critical accessibility errors
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Buttons have accessible names
- [ ] Color contrast meets WCAG AA standards

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators are visible
- [ ] Skip to main content link works
- [ ] Form can be submitted with keyboard
- [ ] Modals can be closed with Escape key

#### Screen Reader Testing
Test with:
- NVDA (Windows): https://www.nvaccess.org/
- VoiceOver (Mac): Built-in

- [ ] Page structure is logical
- [ ] Headings are in correct order
- [ ] Links are descriptive
- [ ] Form errors are announced
- [ ] ARIA labels are present where needed

### 5. Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 6. Device Testing

Test on:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Large Mobile (414x896)

### 7. Security Testing

#### Headers
Check at: https://securityheaders.com/

- [ ] X-Frame-Options is set
- [ ] X-Content-Type-Options is set
- [ ] Referrer-Policy is set
- [ ] Content-Security-Policy is set
- [ ] Permissions-Policy is set

#### SSL/TLS
Check at: https://www.ssllabs.com/ssltest/

- [ ] SSL certificate is valid
- [ ] HTTPS is enforced
- [ ] Grade A or A+ rating

#### Rate Limiting
- [ ] API rate limiting works (test with multiple rapid submissions)
- [ ] Appropriate error message for rate limit exceeded

### 8. Analytics Testing

#### Plausible Analytics
- [ ] Script loads correctly
- [ ] Page views are tracked
- [ ] Custom events fire (`lead_submitted`)
- [ ] No console errors

#### Vercel Analytics
- [ ] Web Vitals are tracked
- [ ] Custom events are tracked
- [ ] Data appears in Vercel dashboard

### 9. Content Testing

#### Copy
- [ ] No spelling errors
- [ ] No grammatical errors
- [ ] Phone numbers are correct
- [ ] Email addresses are correct
- [ ] Social media links are correct
- [ ] Course information is accurate

#### Links
- [ ] All external links open in new tab
- [ ] All external links have rel="noopener noreferrer"
- [ ] No broken links (use: https://www.deadlinkchecker.com/)

### 10. Error Handling

#### 404 Page
- [ ] Custom 404 page displays
- [ ] Branding is consistent
- [ ] Links back to home work

#### 500 Page
- [ ] Custom error page displays
- [ ] Try again button works
- [ ] Error details show in development only

#### Form Errors
- [ ] Validation errors display correctly
- [ ] API errors are handled gracefully
- [ ] Network errors don't break the page

## Testing Tools

### Required Tools
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Install axe CLI (optional)
npm install -g @axe-core/cli
```

### Browser Extensions
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)

### Online Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## Automated Testing Scripts

### Run All Tests
```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Format checking
pnpm format:check

# Build
pnpm build

# Lighthouse
pnpm lighthouse
```

### CI/CD Integration
Add to your GitHub Actions or CI pipeline:

```yaml
- name: Run tests
  run: |
    npm run typecheck
    npm run lint
    npm run build
    
- name: Run Lighthouse CI
  run: |
    npm run start &
    sleep 5
    npm run lighthouse
```

## Post-Launch Monitoring

### Daily Checks
- [ ] Check analytics for traffic
- [ ] Monitor form submissions
- [ ] Check error logs in Vercel

### Weekly Checks
- [ ] Review Web Vitals in Vercel
- [ ] Check for broken links
- [ ] Review user feedback

### Monthly Checks
- [ ] Run full Lighthouse audit
- [ ] Review and update content
- [ ] Check for security updates
- [ ] Update dependencies

## Bug Reporting Template

When reporting bugs, include:

```
**Description:**
Brief description of the issue

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Environment:**
- Browser: Chrome 120
- Device: iPhone 14
- OS: iOS 17
- URL: https://example.com/page

**Screenshots:**
[Attach screenshots if applicable]

**Console Errors:**
[Paste any console errors]
```

## Sign-Off Checklist

Before going live:
- [ ] All functional tests pass
- [ ] SEO elements are verified
- [ ] Performance targets are met
- [ ] Accessibility audit passes
- [ ] Security headers are configured
- [ ] Analytics are working
- [ ] Content is reviewed and approved
- [ ] Contact information is correct
- [ ] Privacy and Terms pages are complete
- [ ] Deployment guide is followed
- [ ] Backup plan is in place
