/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          bgSecondary: '#F7F4FF',
          lavender: '#EDE5FF',
          lavenderLight: '#F3EDFF',
          lavenderSurface: '#FAF8FF',
          border: '#E8E2F1',
          primary: '#7952C7',
          primaryHover: '#6943B7',
          primaryActive: '#5E3B9F',
          dark: '#56358E',
          text: '#202033',
          textSecondary: '#68677A',
          muted: '#8D8C9F',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -1px rgba(86, 53, 142, 0.05)',
        'soft': '0 4px 20px -2px rgba(121, 82, 199, 0.08)',
        'soft-md': '0 8px 24px -3px rgba(121, 82, 199, 0.10)',
        'soft-lg': '0 16px 36px -4px rgba(121, 82, 199, 0.12)',
        'card': '0 1px 3px rgba(86, 53, 142, 0.04), 0 6px 16px -2px rgba(121, 82, 199, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(86, 53, 142, 0.06), 0 16px 32px -4px rgba(121, 82, 199, 0.14)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

