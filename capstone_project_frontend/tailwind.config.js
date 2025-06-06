/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F5F3F8',
          100: '#E2DAF1',
          600: '#8B5CF6',
          700: '#7C3AED',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          600: '#4B5563',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
