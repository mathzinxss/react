/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#b0eef7", 
        secondary: "#12b59f"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}

