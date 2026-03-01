/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif-sc': ['Noto Serif SC', 'serif'],
        'dm-mono': ['DM Mono', 'monospace'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#111118',
        'bg-surface': '#16161f',
        'bg-elevated': '#1c1c28',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-active': 'rgba(220,38,38,0.5)',
        'accent-primary': '#dc2626',
        'accent-secondary': '#f59e0b',
        'accent-glow': 'rgba(220,38,38,0.15)',
        'text-primary': '#f0f0f5',
        'text-secondary': '#8888a0',
        'text-muted': '#44445a',
      },
      animation: {
        'character-draw': 'characterDraw 2s ease-in-out forwards',
        'stagger-in': 'staggerIn 0.6s ease-out forwards',
        'scan-focus': 'scanFocus 0.4s ease-out',
        'loading-scan': 'loadingScan 1.5s ease-in-out infinite',
        'card-hover': 'cardHover 0.2s cubic-bezier(0.4,0,0.2,1)',
        'pulse-red': 'pulseRed 1s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float-particles': 'floatParticles 8s ease-in-out infinite',
      },
      keyframes: {
        characterDraw: {
          '0%': { 'stroke-dashoffset': '100%' },
          '100%': { 'stroke-dashoffset': '0%' },
        },
        staggerIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanFocus: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        loadingScan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        cardHover: {
          '0%': { transform: 'translateY(0)', boxShadow: 'none' },
          '100%': { transform: 'translateY(-2px)', boxShadow: '0 8px 32px rgba(220,38,38,0.1)' },
        },
        pulseRed: {
          '0%': { borderLeftColor: 'var(--accent-primary)' },
          '50%': { borderLeftColor: 'transparent' },
          '100%': { borderLeftColor: 'var(--accent-primary)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatParticles: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
