import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Importante para Astro 5

const projects = defineCollection({
  // En Astro 5 es mejor usar el loader de glob
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    frameworks: z.array(z.string()).optional(), // Corregido el orden de array
    type: z.string().optional(),
    // Permitimos que sea una URL, un string vacío o nulo para que no explote
    url_production: z.string().url().or(z.literal("")).optional(),
    // En urls, permitimos que el array esté vacío o que los strings no sean URLs perfectas si están vacíos
    urls: z.array(z.string()).optional(),
  }),
});

const certificates = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/certificates",
  }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    firstColor: z.string(),
    secondColor: z.string(),
  }),
});

export const collections = { projects, certificates };
