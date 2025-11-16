import { defineCollection, z } from "astro:content";
import { array, string } from "astro:schema";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    images: z.string().array(),
    description: z.string(),
    frameworks: z.string().array(),
    type: z.string(),
    url_production: z.string().url(),
    urls: z.string().url().array(),
  }),
});

export const collections = { projects };
