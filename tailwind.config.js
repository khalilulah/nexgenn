/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Add a custom screen size
        'md': '768px', // Add a custom screen size
        'lmd': '930px', // Add a custom screen size
        'lg': '1024px', // Add a custom screen size
      },
      backgroundPosition: {
        'custom-right': 'calc(100% + 250px) center',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-dark-blue': '#08101C',
        'custom-dark-blue-light': '#1A2A3C',
        'custom-text-color': '#999999',
        
      },
      fontFamily:{
         clashDisplay:['var(--clash-display)'],
         poppins:['var(--poppins)'],
         rajdhani:['var(--rajdhani)'],
      },
    },
  },
  plugins: [],
};
