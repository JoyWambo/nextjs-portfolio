/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f0f8ff",
          100: "#e0f0ff",
          200: "#b3d9ff",
          300: "#80c1ff",
          400: "#4da6ff",
          500: "#1a8cff",
          600: "#0066cc",
          700: "#0052a3",
          800: "#003d7a",
          900: "#002952",
        },
      },
    },
  },
  plugins: [],
};
