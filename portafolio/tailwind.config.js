/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "hover:shadow-orange-500",
    "hover:shadow-violet-500",
    "hover:shadow-yellow-500",
    "hover:shadow-blue-500",
    "hover:border-orange-500",
    "hover:border-violet-500",
    "hover:border-yellow-500",
    "hover:border-blue-500",
    "border-orange-500",
    "border-violet-500",
    "border-yellow-500",
    "border-blue-500",
    "shadow-orange-500",
    "shadow-violet-500",
    "shadow-yellow-500",
    "shadow-blue-500",
  ],
};
