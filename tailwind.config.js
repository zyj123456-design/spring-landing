/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spring-red': '#DC2626',
        'spring-gold': '#F59E0B',
        'spring-dark-red': '#991B1B',
        'spring-light-red': '#EF4444'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'lantern': 'lantern 4s ease-in-out infinite',
        'firework': 'firework 2s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        lantern: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        },
        firework: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
          '100%': { opacity: '0', transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
