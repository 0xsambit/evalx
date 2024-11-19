/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'100': '#5a5a5a',
  				'200': '#4b4b4b',
  				DEFAULT: '#212121'
  			},
  			secondary: {
  				'100': '#a5a5a5',
  				'200': '#cdcdcd',
  				DEFAULT: '#969696'
  			},
  			astral: '#346DA3',
  			glacier: '#81A7C2'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
