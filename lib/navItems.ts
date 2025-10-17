export interface NavItem {
  label: string
  href: string
  sectionId?: string
}

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#',
    sectionId: 'hero',
  },
  {
    label: 'About',
    href: '#about',
    sectionId: 'about',
  },
  {
    label: 'Services',
    href: '#services',
    sectionId: 'services',
  },
  {
    label: 'Courses',
    href: '#courses',
    sectionId: 'courses',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
    sectionId: 'testimonials',
  },
  {
    label: 'FAQ',
    href: '#faq',
    sectionId: 'faq',
  },
  {
    label: 'Apply',
    href: '#apply',
    sectionId: 'apply',
  },
]

export const WHATSAPP_CTA = {
  label: 'Apply on WhatsApp',
  href: 'https://wa.me/919586538671?text=I%20want%20to%20apply',
}
