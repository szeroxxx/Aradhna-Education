import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-gradient-start': '#DDEFFF',
        'bg-gradient-end': '#FFF7EA',
        ink: {
          DEFAULT: '#0E2433',
          subtle: '#41566B',
        },
        primary: {
          DEFAULT: '#00B3A4',
          600: '#009A8E',
          700: '#008579',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F6FAFD',
        },
        success: '#13C296',
        warning: '#FFB020',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': 'clamp(2rem, 5vw, 3.5rem)',
        'h2': 'clamp(1.5rem, 3.4vw, 2.25rem)',
        'h3': '1.375rem',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(14, 36, 51, 0.06)',
      },
      backdropBlur: {
        glass: '12px',
      },
      spacing: {
        'section-mobile': '72px',
        'section-desktop': '120px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
      keyframes: {
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-from-right': 'slide-in-from-right 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
export default config
