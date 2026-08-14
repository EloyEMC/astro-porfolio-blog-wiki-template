import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		category: z.enum(["Iluminación", "Tecnología", "Negocio", "Conocimiento"]),
		seoTitle: z.string().optional(),
		description: z.string().optional(),
		date: z.date(),
		modifiedDate: z.string().optional(), // Campo opcional
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional(),
		image: z.string().optional(),
		image_alt: z.string().optional(),
		keywords: z.array(z.string()).optional(),
		twitter_img: z.string().optional(), // Campo opcional
		twitterCreator: z.string().optional(), // Campo opcional
		twitterSite: z.string().optional(), // Campo opcional
		canonicalUrl: z
			.object({
				url: z.string(),
			})
			.optional(),
		author: z.string().optional(), // Campo opcional
		authorUrl: z.string().optional(), // Campo opcional
		authorImage: z.string().optional(), // Campo opcional
		ogType: z.enum(["website", "article"]).optional(), // Campo opcional
		locale: z.string().optional(), // Campo opcional
		siteName: z.string().optional(), // Campo opcional
		noindex: z.boolean().optional(), // Campo opcional
		nofollow: z.boolean().optional(), // Campo opcional
		// Nuevo campo para FAQs
		faqs: z
			.array(
				z.object({
					question: z.string(),
					answer: z.string(),
				}),
			)
			.optional(), // Campo opcional
	}),
});

export const collections = { blog };
