/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false, // Disables the base styles completely
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}