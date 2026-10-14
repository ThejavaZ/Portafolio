import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Importante para Astro 5

const projects = defineCollection({
  // En Astro 5 es mejor usar el loader de glob
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  // ({ image }) da acceso al helper de astro:assets para optimizar imágenes
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      image: image(),
      description: z.string().optional(),
      // Orden de exhibición en /projects (menor primero) y estado del proyecto
      order: z.number().optional(),
      status: z.enum(["funcional", "en-desarrollo", "experimental"]).optional(),
    frameworks: z.array(z.string()).optional(), // Corregido el orden de array
    type: z.string().optional(),
    // Permitimos que sea una URL, un string vacío o nulo para que no explote
    url_production: z.string().url().or(z.literal("")).optional(),
    // En urls, permitimos que el array esté vacío o que los strings no sean URLs perfectas si están vacíos
    url_repo: z.string().url().or(z.literal("")).optional(),
    urls: z.array(z.string()).optional(),
  }),
});

const certificates = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/certificates",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      firstColor: z.string(),
      secondColor: z.string(),
    }),
});

const works = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/works",
  }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    period: z.string(),
    startDate: z.string(), // "YYYY-MM" para ordenar (más reciente primero)
    logo: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    author: z.string(),
    category: z.enum(["Backend", "IoT", "Frontend", "DevOps", "Opinión", "Mobile", "Carrera"]),
  }),
});

export const collections = { projects, certificates, works, blog };
