/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        'banner-animation': {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 12px)' },
          '100%': { transform: 'translate(0, 0px)' },
        },
      },

      colors: {
        'default-purple': '#b810c3',
        white: '#ffffff',
      },
    },
    animation: {
      'banner-animation': 'banner-animation 4s ease-in-out infinite',
    },
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};
