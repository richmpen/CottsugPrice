/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oi': ['Oi-Regular', 'serif'],
        'borsok': ['Borsok-Regular', 'sans-serif'],
      },
      colors: {
        'pink-custom': '#f9cbd6',
        'pink-accent': '#ff94af',
        'red-custom': '#9d182b',
        'cream': '#f2e0d2',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-in': 'bounceIn 1.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(157, 24, 43, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(157, 24, 43, 0.6)' },
        },
      },
      textShadow: {
        'custom': '20px 6px 0px #ff94af',
      }
    },
  },
  plugins: [],
}