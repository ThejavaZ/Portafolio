import { defineCollection, z, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders"; // Importante para Astro 5

/* ──────────────────────────────────────────────────────────────
   Español (idioma por defecto, vive en /)
   ────────────────────────────────────────────────────────────── */

const projectsSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string().optional(),
    image: image(),
    description: z.string().optional(),
    // Orden de exhibición en /projects (menor primero) y estado del proyecto
    order: z.number().optional(),
    status: z.enum(["funcional", "en-desarrollo", "experimental"]).optional(),
    frameworks: z.array(z.string()).optional(),
    type: z.string().optional(),
    // Permitimos que sea una URL, un string vacío o nulo para que no explote
    url_production: z.string().url().or(z.literal("")).optional(),
    // En urls, permitimos que el array esté vacío o que los strings no sean URLs perfectas si están vacíos
    url_repo: z.string().url().or(z.literal("")).optional(),
    urls: z.array(z.string()).optional(),
    // Resultados medibles del proyecto (se muestran como cifras destacadas)
    results: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
  });

const worksSchema = z.object({
  role: z.string(),
  company: z.string(),
  period: z.string(),
  startDate: z.string(), // "YYYY-MM" para ordenar (más reciente primero)
  logo: z.string().optional(),
  // Logros concretos que se muestran bajo el puesto
  achievements: z.array(z.string()).optional(),
});

const cubitsSchema = z.object({
  name: z.string(),
  company: z.string(),
  subtitle: z.string(),
  description: z.string(),
  participation: z.string(),
  technologies: z.array(z.string()),
  learnings: z.string().optional(),
  order: z.number().optional(),
});

const projects = defineCollection({
  // En Astro 5 es mejor usar el loader de glob
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: projectsSchema,
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
  schema: worksSchema,
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

// Proyectos desarrollados en el entorno profesional (Grupo Cubits).
// Sin código, capturas ni información interna: solo descripción profesional.
const cubits = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/cubits",
  }),
  schema: cubitsSchema,
});

/* ──────────────────────────────────────────────────────────────
   Inglés (/en): superficie de reclutamiento. Mismos esquemas,
   mismo id (slug) que su versión en español para que las rutas
   /projects/x y /en/projects/x compartan URL base.
   ────────────────────────────────────────────────────────────── */

const projectsEn = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/en/projects",
  }),
  schema: projectsSchema,
});

const worksEn = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/en/works",
  }),
  schema: worksSchema,
});

const cubitsEn = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/en/cubits",
  }),
  schema: cubitsSchema,
});

export const collections = {
  projects,
  projectsEn,
  certificates,
  works,
  worksEn,
  blog,
  cubits,
  cubitsEn,
};
