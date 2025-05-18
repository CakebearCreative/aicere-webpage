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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 