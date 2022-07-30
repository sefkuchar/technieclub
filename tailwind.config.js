module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "cyber": ["Cyberpunk"],
      'poppins': ['Poppins', 'sans-serif'],
      'adelia': ["ADELIA", "cursive"],
      
    },
    extend: {
      boxShadow: {
        '3xl': '30px 35px 100px 3000px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}