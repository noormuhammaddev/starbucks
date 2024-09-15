// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this if your files are in a different location
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest-guerrilla': ['Protest Guerrilla', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
