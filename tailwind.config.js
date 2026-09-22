/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        femotech: {
          navy: {
            DEFAULT: '#0B3B82',
            dark: '#062350',
            light: '#1B54A6',
            subtle: '#EBF2FB'
          },
          orange: {
            DEFAULT: '#F37021',
            dark: '#D3580E',
            light: '#FF8839',
            subtle: '#FEF3EB'
          },
          slate: {
            900: '#0F172A',
            800: '#1E293B',
            700: '#334155',
            600: '#475569',
            500: '#64748B',
            100: '#F1F5F9',
            50: '#F8FAFC'
          },
          pharma: {
            teal: '#0D9488',
            blue: '#0284C7',
            silver: '#E2E8F0'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
}
