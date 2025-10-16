// Type declarations for analytics
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void
    va?: (event: string, eventName?: string, data?: Record<string, any>) => void
  }
}

export {}
