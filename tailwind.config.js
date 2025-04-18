/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36bb00",       // brandGreen, used for primary elements (buttons, etc.)
        secondary: "#ffe808",     // brandYellow, used for accents (buttons, links)
        dark: "#1e1e1e",          // brandDark, used for dark backgrounds/text
        light: "#f7f7f7",         // light background or neutral tones
        accent: "#ff6f61",        // a fresh accent color for highlights, calls to action
      },
    },
  },
  plugins: [],
}