/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          950: '#070f1e',
          900: '#0f172a',
          850: '#152238',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        pipe: {
          900: '#0c3252',
          800: '#10436d',
          700: '#134e77', // Brand Trinity Water Blue
          600: '#0284c7',
          500: '#0ea5e9',
          400: '#38bdf8',
          100: '#e0f2fe',
          50: '#f0f9ff',
        },
        flame: {
          900: '#751a1a',
          800: '#831c1d', // Brand Trinity Crimson / Emergency Red
          700: '#991b1b',
          600: '#dc2626',
          500: '#ef4444',
          100: '#fee2e2',
          50: '#fef2f2',
        },
        copper: {
          600: '#b45309',
          500: '#d97706',
          400: '#ea580c',
          300: '#f97316',
        },
        gold: {
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
