export interface ExternalPublication {
	publication: string;
	date: string;
	issue: number;
	author: string;
	role: string;
	title: string;
	topics: string[];
	description: string;
	url: string;
	image: string;
	alt: string;
}

export const publications: ExternalPublication[] = [
	{
		publication: "Revista AÚNA",
		date: "Julio 2026",
		issue: 15,
		author: "Eloy Martínez",
		role: "Disano Iluminación",
		title: "Luminarias LED y sobretensiones transitorias",
		topics: [
			"Iluminación",
			"Fiabilidad",
			"Protección eléctrica",
			"LED",
			"Alumbrado exterior",
		],
		description:
			"Por qué una instalación correctamente ejecutada puede sufrir fallos prematuros en luminarias LED y qué papel desempeñan las sobretensiones transitorias, la protección de los equipos y el diseño del conjunto de la instalación.",
		url: "https://www.aunadistribucion.com/visor-revistas/73/revista-auna-15-jul-26",
		image: "/articles/auna-luminarias-led-sobretensiones.webp",
		alt: "Página del artículo Luminarias LED y sobretensiones transitorias de Eloy Martínez publicado en Revista AÚNA en julio de 2026",
	},
	{
		publication: "Revista AÚNA",
		date: "Diciembre 2025",
		issue: 14,
		author: "Eloy Martínez Cuesta",
		role: "Sales & Project Manager en Iluminación Disano",
		title: "Iluminación inteligente y conectividad",
		topics: [
			"Iluminación",
			"Control",
			"DALI-2",
			"Bluetooth Mesh",
			"Gestión remota",
			"Conectividad",
		],
		description:
			"Una aproximación a la evolución de la iluminación profesional hacia instalaciones conectadas, eficientes y preparadas para adaptarse a nuevas necesidades mediante sistemas de control y gestión.",
		url: "https://www.aunadistribucion.com/visor-revistas/70/revista-auna-14-dic-25",
		image: "/articles/auna-iluminacion-inteligente-conectividad.webp",
		alt: "Página del artículo Iluminación inteligente y conectividad de Eloy Martínez Cuesta publicado en Revista AÚNA en diciembre de 2025",
	},
];
