/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#242424",
        accent: {
          DEFAULT: "#1A8917",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
