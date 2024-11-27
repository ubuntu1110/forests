module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
      },
    },
    extend: {
      colors: {
        'forest-green': '#0b3d0b',
        'light-green': '#d4edda',
        'gold': '#ffd700',
        'primary': '#ff4500',
        'secondary': '#ffd700',
        'dark-bg': '#1a202c',
      },
    },
  },
  plugins: [],
};
