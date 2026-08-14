import type { PostFilter } from "./utils/posts";

export interface SeoPerson {
	name: string;
	image: string;
	sameAs: string[];
}

export const verifiedPerson: SeoPerson = {
	name: "Eloy Martínez Cuesta",
	image: "/eloy-author.webp",
	sameAs: [
		"https://github.com/EloyEMC",
		"https://www.linkedin.com/in/eloymartinezemc/",
		"https://twitter.com/eloy_emc",
	],
};

export interface SiteConfig {
	lang?: string;
	title: string;
	image?: string;
	defaultImage?: string;
	image_alt?: string;
	slogan: string;
	description?: string;
	site: string;
	social: {
		github?: string;
		linkedin?: string;
		email?: string;
		rss?: boolean;
	};
	homepage: PostFilter;
	googleAnalysis?: string;
	search?: boolean;
}

export const siteConfig: SiteConfig = {
	lang: "es",
	site: "https://eloymartinezcuesta.com", // your site url
	title: "Eloy Martínez Cuesta",
	slogan: "Iluminación. Tecnología. Negocio.",
	image: "logo-emc.webp",
	defaultImage: "logo-emc.webp",
	image_alt: "Logotipo de Eloy Martínez Cuesta",
	description:
		"Iluminación profesional, tecnología aplicada y negocio. Más de 20 años de experiencia convertidos en proyectos, conocimiento y herramientas.",
	social: {
		github: "https://github.com/EloyEMC", // leave empty if you don't want to show the github
		linkedin: "https://www.linkedin.com/in/eloymartinezemc/", // leave empty if you don't want to show the linkedin
		email: undefined, // leave empty if you don't want to show the email
		rss: true, // set this to false if you don't want to provide an rss feed
	},
	homepage: {
		maxPosts: 5,
		tags: [],
		excludeTags: [],
	},
	googleAnalysis: "G-9W0RCLSX3X", // Google Analytics measurement ID
	search: true, // set this to false if you don't want to provide a search feature
};
