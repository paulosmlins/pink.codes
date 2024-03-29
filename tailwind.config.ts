import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f03880',
        'text-grey': '#939393',
        'primary-hover': '#F5629C',
        secondary: '#6F6F6F',
        'primary-dark': '#EDEDED',
        'secondary-dark': '#A0A0A0'
      },
      spacing: {
        'page-top': 'var(--page-top)',
        'page-top-mobile': 'var(--page-top-mobile)',
        'page-bottom': 'var(--page-bottom)',
        'page-bottom-mobile': 'var(--page-bottom-mobile)'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      animation: {
        shine: 'shineAnimation 2.5s linear 0s infinite normal forwards'
      },
      keyframes: {
        shineAnimation: {
          '0%': { 'background-position': 'left' },
          '50%': { 'background-position': 'right' }
        }
      },
      backgroundSize: {
        '200': '200%'
      }
    }
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
