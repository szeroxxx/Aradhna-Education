'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { navItems, WHATSAPP_CTA } from '@/lib/navItems'
import { cn } from '@/lib/utils'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => void
}

export function MobileDrawer({ isOpen, onClose, activeSection, onNavClick }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus trap
  useEffect(() => {
    if (!isOpen) return

    const drawer = drawerRef.current
    if (!drawer) return

    // Focus close button when drawer opens
    closeButtonRef.current?.focus()

    const focusableElements = drawer.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    drawer.addEventListener('keydown', handleTab)
    return () => drawer.removeEventListener('keydown', handleTab)
  }, [isOpen])

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    onNavClick(e, sectionId)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm',
          'bg-white shadow-2xl lg:hidden',
          'animate-slide-in-from-right'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/5 p-6">
          <span className="font-display text-xl font-bold text-ink">Menu</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="rounded-lg p-2 text-ink transition-colors hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.sectionId)}
                  className={cn(
                    'block min-h-[44px] rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    'hover:bg-primary/5 hover:text-primary',
                    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    activeSection === item.sectionId
                      ? 'bg-primary/10 text-primary'
                      : 'text-ink-subtle'
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={WHATSAPP_CTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block min-h-[44px] rounded-2xl bg-primary px-6 py-3 text-center text-base font-semibold text-white transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {WHATSAPP_CTA.label}
          </a>
        </nav>
      </div>
    </>
  )
}
