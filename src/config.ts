import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  lang?: string;
  title: string;
  image?: string,
  image_alt?: string;
  slogan: string;
  description?: string; 
  site: string,
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
  lang:"es",
  site: "https://eloymartinezcuesta.com/", // your site url
  title: "Eloy Martínez Cuesta",
  slogan: "¿Quieres conocerme mejor?",
  image: "Image.webp",
  image_alt: "Descripción de la imagen",
  description: "Bienvenido a EMC, donde combinamos nuestra pasión por la iluminación arquitectónica con estrategias efectivas de marketing digital y SEO.",
  social: {
    github: "https://github.com/EloyEMC", // leave empty if you don't want to show the github
    linkedin: "https://www.linkedin.com/in/eloymartinezemc/", // leave empty if you don't want to show the linkedin
    email: "example@gmail.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  },
  googleAnalysis: "", // your google analysis id
  search: true, // set this to false if you don't want to provide a search feature
};
