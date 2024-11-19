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
        primary: {
          DEFAULT: "#2C2B2A",
          '100': "#F8F8F8",
          '200': "#E5E5E5",
        },
        secondary: {
          DEFAULT: "#B2B1B1",
          '100': "#F6F6F6",
        },
        astral: "#346DA3",
        glacier: "#81A7C2"
      },
    },
  },
  plugins: [],
};
