/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-15': 'rgba(0, 82, 255, 0.15)',
        'green-20': 'rgba(121, 194, 63, 0.20)',
        'orange-20': 'rgba(248, 113, 71, 0.20)',
        'red-20': 'rgba(255, 68, 74, 0.20)',
      },
    },
  },
  plugins: [require("daisyui")],
}
