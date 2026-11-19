import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand palette: off-white, navy, electric blue, light gray
        paper: { DEFAULT: '#F7F6F2', deep: '#EFEDE6' },
        navy: {
          50: '#EEF1F8',
          100: '#D9DFEE',
          200: '#AEB9D6',
          300: '#7F8FB8',
          400: '#53648F',
          500: '#33456F',
          600: '#22335A',
          700: '#172546',
          800: '#0F1B37',
          900: '#0A1329',
          950: '#060C1C',
        },
        electric: {
          300: '#8DB0FF',
          400: '#5E8BFF',
          500: '#2A64F2',
          600: '#1F55E0',
          700: '#1A45B5',
        },
        mist: { 100: '#F1F2F5', 200: '#E6E8EE', 300: '#D3D7E0', 400: '#A9AFBD', 500: '#7A8193' },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk Variable"', '"Inter Variable"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { content: '72rem' },
      boxShadow: {
        card: '0 1px 2px rgba(10,19,41,0.04), 0 8px 24px -12px rgba(10,19,41,0.12)',
        glow: '0 0 0 1px rgba(47,107,255,0.25), 0 12px 40px -16px rgba(47,107,255,0.45)',
      },
    },
  },
  plugins: [],
} satisfies Config;
