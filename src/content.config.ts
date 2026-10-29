import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 블로그 글: src/content/blog/ko/*.md (한글), src/content/blog/en/*.md (영어)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
