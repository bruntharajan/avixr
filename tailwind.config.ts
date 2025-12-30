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
        // Colors from Figma design
        purple: {
          DEFAULT: '#7C3AED',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
        },
        blue: {
          DEFAULT: '#3B82F6',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
      fontFamily: {
        // Fonts will be updated with exact Figma font families
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        // Spacing scale will be updated to match Figma design system
      },
      borderRadius: {
        // Border radius values will match Figma design
      },
    },
  },
  plugins: [],
}
export default config

