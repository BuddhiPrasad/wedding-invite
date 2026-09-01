/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': {
          DEFAULT: '#C5A059',
          light: '#D9BA78',
          dark: '#A6843E',
        },
        'brand-charcoal': {
          DEFAULT: '#292524',
          light: '#3F3B38',
          dark: '#1C1917',
        },
        'brand-taupe': {
          DEFAULT: '#938D89',
          light: '#B5AFA9',
          dark: '#716C68',
        },
        'brand-ivory': {
          DEFAULT: '#FFFFF0',
          dark: '#F5F5E3',
        },
        'brand-beige': {
          DEFAULT: '#FFFFF0',
          light: '#FFFFFF',
          dark: '#F5F5E3',
          deep: '#938D89',
          gold: '#C5A059',
        },
        'brand-champagne': {
          DEFAULT: '#C5A059',
          light: '#D9BA78',
          dark: '#A6843E',
        }
      },
      fontFamily: {
        serif: ['"Playball"', 'cursive', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 30px rgba(41,37,36,0.06)',
        'card-glow': '0 12px 40px rgba(197,160,89,0.22)',
        'envelope': '0 20px 50px rgba(41,37,36,0.12)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
