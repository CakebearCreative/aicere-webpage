/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(at 30% 30%, var(--tw-gradient-stops))',
      },
      colors: {
        purple: {
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        pink: {
          500: '#EC4899',
        },
        green: {
          500: '#10B981',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      // custom shine animation for button border highlight
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-50%) skewX(-70deg)' },
          '100%': { transform: 'translateX(550%) skewX(-83deg)' },
        },
        dash: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-280' },
        },
      },
      animation: {
        // triggers on hover: plays once, remove 'infinite' to play only on hover trigger
        shine: 'shine 2s ease-in-out infinite',
        dash: 'dash 1.5s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 