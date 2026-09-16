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

const lightingWiki = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/wiki/iluminacion" }),
	schema: z.object({
		title: z.string(),
		slug: z.string().optional(),
		category: z.enum([
			"Fundamentals",
			"Quantities and measurement",
			"Colour and visual quality",
			"Photometry and optics",
			"LED and sources",
			"Luminaires and components",
			"Controls and connectivity",
			"Safety and protection",
			"Applications and design",
			"Standards and regulation",
		]),
		shortDefinition: z.string(),
		aliases: z.array(z.string()).default([]),
		unit: z.string().optional(),
		symbol: z.string().optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		imageCaption: z.string().optional(),
		imageCredit: z.string().optional(),
		imageRights: z.string().optional(),
		relatedTerms: z.array(z.string()).default([]),
		relatedArticles: z.array(z.string()).default([]),
		sources: z.array(z.object({ publisher: z.string(), title: z.string().optional(), url: z.string().url() })).default([]),
		faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
		seoTitle: z.string().optional(),
		description: z.string().optional(),
		keywords: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, lightingWiki };
