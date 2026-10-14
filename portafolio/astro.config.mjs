// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://javiersg.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
  adapter: netlify(),
});
