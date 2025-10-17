'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { navItems, WHATSAPP_CTA } from '@/lib/navItems'
import { MobileDrawer } from './MobileDrawer'
import { cn } from '@/lib/utils'

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    if (!sectionId) return

    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: sectionId === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Scroll spy effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.3, 0.5],
      }
    )

    // Observe all sections
    const sections = navItems
      .map((item) => item.sectionId && document.getElementById(item.sectionId))
      .filter(Boolean) as HTMLElement[]

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-ink/5 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-ink transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:text-2xl"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            Aradhana Education
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className={cn(
                      'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                      'hover:bg-primary/5 hover:text-primary',
                      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                      activeSection === item.sectionId
                        ? 'text-primary'
                        : 'text-ink-subtle'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <a
            href={WHATSAPP_CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:block"
          >
            {WHATSAPP_CTA.label}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="rounded-lg p-2 text-ink transition-colors hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:hidden"
            aria-label="Open menu"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-drawer"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  )
}
