import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypePrettyCode from "rehype-pretty-code";
import { unified } from "@astrojs/markdown-remark";
import { siteConfig } from "./src/config";

import sitemap from "@astrojs/sitemap";

function externalLinksPlugin() {
	return (tree) => {
		const visit = (node) => {
			if (
				node.type === "element" &&
				node.tagName === "a" &&
				typeof node.properties?.href === "string" &&
				/^https?:\/\//.test(node.properties.href)
			) {
				node.properties.target = "_blank";
				node.properties.rel = ["noopener", "noreferrer"];
			}

			for (const child of node.children ?? []) {
				visit(child);
			}
		};

		visit(tree);
	};
}

export default defineConfig({
	site: "https://eloymartinezcuesta.com",
	redirects: {
		"/programacion/como-poner-cajas-de-autor-en-wordpress-en-generatepress/":
			"/blog/cómo-poner-cajas-de-autor-en-wordpress-en-generatepress/",
		"/marketing/que-es-el-ritmo-circadiano-y-el-hcl/":
			"/blog/qué-es-el-ritmo-circadiano-y-el-hcl/",
		"/eficiencia-energetica/nueva-etiqueta-energetica-2021/":
			"/blog/la-nueva-etiqueta-energética-adiós-a/",
		"/aviso-legal-imprint/": "/Aviso-legal/",
		"/que-es-el-ritmo-circadiano-y-el-hcl/":
			"/blog/qué-es-el-ritmo-circadiano-y-el-hcl/",
		"/iluminacion/hormonas-de-la-felicidad-y-la-luz":
			"/blog/hormonas-de-la-felicidad/",
	},
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap({
			filter: (page) =>
				!/^https:\/\/eloymartinezcuesta\.com\/(?:tags(?:\/|$)|archive\/?$|blog\/?(?:\d+\/?)?$)/.test(
					page,
				),
		}),
	],
	markdown: {
		processor: unified({
			rehypePlugins: [
				externalLinksPlugin,
				[
					rehypePrettyCode,
					{
						theme: "github-dark",
						onVisitLine(node) {
							if (node.children.length === 0) {
								node.children = [{ type: "text", value: " " }];
							}
						},
					},
				],
			],
		}),
	},
});
