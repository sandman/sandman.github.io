import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		updatedDate: z.date().optional(),
		featuredImage: z.string().optional(),
		/** Where the article was first published, e.g. LinkedIn. */
		originalUrl: z.string().url().optional(),
		excerpt: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
