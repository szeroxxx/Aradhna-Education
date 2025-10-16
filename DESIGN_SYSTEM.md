# Design System Documentation

## Overview

The Aradhana design system creates a soft, trustworthy, and professional aesthetic inspired by modern SaaS landing pages. The design emphasizes clarity, accessibility, and a calming user experience.

## Color Palette

### Primary Colors

```css
--primary: #00b3a4 /* Teal - CTAs, accents */ --primary-600: #009a8e /* Hover state */
  --primary-700: #008579 /* Active state */;
```

### Neutral Colors

```css
--ink: #0e2433 /* Deep navy - headings */ --subtle-ink: #41566b /* Body text, secondary content */
  --surface: #ffffff /* Cards, panels */ --muted-surface: #f6fafd
  /* Pills, chips, subtle backgrounds */;
```

### Background Gradient

```css
--bg-gradient-start: #ddefff /* Sky blue */ --bg-gradient-end: #fff7ea /* Warm morning light */;
```

Applied as: `background: linear-gradient(to bottom, #DDEFFF, #FFF7EA)`

### Semantic Colors

```css
--success: #13c296 /* Success states, positive feedback */ --warning: #ffb020
  /* Warnings, attention */;
```

## Typography

### Font Families

**Display (Headings)**

```css
font-family: 'Playfair Display', ui-serif, Georgia, serif;
```

**Body/UI**

```css
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
```

### Type Scale

| Element    | Size                            | Weight  | Line Height |
| ---------- | ------------------------------- | ------- | ----------- |
| Display XL | `clamp(2rem, 5vw, 3.5rem)`      | 700     | 1.1         |
| H2         | `clamp(1.5rem, 3.4vw, 2.25rem)` | 700     | 1.2         |
| H3         | `1.375rem` (22px)               | 700     | 1.3         |
| Body Large | `1.125rem` (18px)               | 400-500 | 1.6         |
| Body       | `1rem` (16px)                   | 400-500 | 1.6         |
| Small      | `0.875rem` (14px)               | 400-500 | 1.5         |

### Usage

```tsx
// Display heading
<h1 className="text-display-xl font-display font-bold">

// Section heading
<h2 className="text-h2 font-display font-bold">

// Subsection
<h3 className="text-h3 font-display font-bold">

// Body text
<p className="text-base text-ink-subtle">
```

## Spacing

### Section Padding

```css
/* Mobile */
padding-top: 72px;
padding-bottom: 72px;

/* Desktop (md+) */
padding-top: 120px;
padding-bottom: 120px;
```

Utility class: `section-padding`

### Container

Max width: `1200px` (2xl breakpoint)
Responsive padding with centered content

```tsx
<Container>{/* Content */}</Container>
```

## Border Radius

```css
rounded-2xl: 20px  /* Cards, buttons */
rounded-3xl: 28px  /* Large panels, hero cards */
```

## Shadows

### Soft Shadow

```css
box-shadow: 0 10px 30px rgba(14, 36, 51, 0.06);
```

Utility class: `shadow-soft`

## Effects

### Glass Panel

Creates a frosted glass effect for cards and overlays:

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

Usage:

```tsx
<div className="glass-panel rounded-3xl p-8">{/* Content */}</div>
```

## Components

### Button

**Variants:**

- `primary` - Teal background, white text
- `secondary` - Outlined with ink border
- `ghost` - Transparent, hover background

**Sizes:**

- `sm` - Small (px-4 py-2)
- `md` - Medium (px-6 py-3) [default]
- `lg` - Large (px-8 py-4)

```tsx
<Button variant="primary" size="lg">
  Get Started
</Button>
```

### Cards

**IconCard** - Feature cards with icon, title, description

```tsx
<IconCard icon={Users} title="Expert Mentors" description="Connect with professionals" />
```

**TestimonialCard** - Glass effect testimonial

```tsx
<TestimonialCard
  quote="Amazing experience!"
  author="John Doe"
  role="Student"
  avatar="/avatar.jpg"
/>
```

### Stats

Display large numbers with labels:

```tsx
<Stat number="10K+" label="Students Guided" />
```

### Badges & Pills

**Badge** - Small status indicators

```tsx
<Badge variant="success">Active</Badge>
```

**Pill** - Larger tag-style elements

```tsx
<Pill>Featured</Pill>
```

## Accessibility

### Focus States

All interactive elements have visible focus indicators:

```css
focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-primary
```

### Skip Link

Keyboard users can skip to main content:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### Reduced Motion

Respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Landmark regions (header, main, footer, nav)
- ARIA labels on icon-only buttons
- Alt text on images

## Responsive Design

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Approach

All styles are mobile-first. Use responsive prefixes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

## Animation Guidelines

### Micro-interactions

Use Framer Motion for subtle animations:

- Hover scale: `hover:scale-105`
- Fade in on scroll
- Stagger children animations

### Performance

- Use `transform` and `opacity` for animations
- Avoid animating `width`, `height`, `top`, `left`
- Keep animations under 300ms for snappy feel

## Best Practices

1. **Consistency** - Use design tokens, not arbitrary values
2. **Accessibility** - Test with keyboard and screen readers
3. **Performance** - Optimize images, lazy load below fold
4. **Responsive** - Test on mobile, tablet, desktop
5. **Semantic** - Use proper HTML elements
6. **Contrast** - Maintain WCAG AA standards (4.5:1 for text)

## Examples

### Hero Section

```tsx
<section className="section-padding relative min-h-[90vh]">
  <GradientClouds />
  <Container className="relative z-10">
    <h1 className="text-display-xl mb-6 text-center">Your Heading</h1>
    <p className="text-ink-subtle mb-8 text-center text-xl">Subtitle text</p>
    <div className="flex justify-center gap-4">
      <Button size="lg">Primary CTA</Button>
      <Button variant="secondary" size="lg">
        Secondary
      </Button>
    </div>
  </Container>
</section>
```

### Feature Grid

```tsx
<section className="section-padding">
  <Container>
    <SectionHeader
      eyebrow="Features"
      title="What We Offer"
      subtitle="Everything you need"
      centered
      className="mb-16"
    />
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <IconCard key={feature.title} {...feature} />
      ))}
    </div>
  </Container>
</section>
```
