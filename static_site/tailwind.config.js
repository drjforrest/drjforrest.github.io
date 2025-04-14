/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        fpp: {
          blue: '#2563eb',
          green: '#10b981',
          amber: '#f59e0b',
          red: '#ef4444',
          slate: '#1e293b',
        }
      },
      animation: {
        fade: "fadeIn 0.8s ease-out forwards",
        zoom: "zoomIn 0.6s ease-out forwards"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        zoomIn: {
          '0%': { transform: "scale(0.95)", opacity: 0 },
          '100%': { transform: "scale(1)", opacity: 1 }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b',
            a: {
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}