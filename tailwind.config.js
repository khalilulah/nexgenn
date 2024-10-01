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
