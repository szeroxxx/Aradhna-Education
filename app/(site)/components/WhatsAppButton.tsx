'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export function WhatsAppButton() {
  const handleClick = () => {
    const message = 'Hi! I would like to know more about admission guidance.'
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
