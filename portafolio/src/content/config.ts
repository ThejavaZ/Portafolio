import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    frameworks: z.string().array().optional(),
    type: z.string().optional(),
    url_production: z.string().url().optional(),
    urls: z.string().url("Not Found").array().optional(),
  }),
});

const certificates = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    firstColor: z.string(),
    secondColor: z.string(),
  }),
});

export const collections = { projects, certificates };
