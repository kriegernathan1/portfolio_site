/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "accent-green": "#08FDD8",
      },
      screens: {
        'xsm': '365px'
      }
    },
  },
  plugins: [],
};
