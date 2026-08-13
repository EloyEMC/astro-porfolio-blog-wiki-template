# Eloy Martínez Cuesta

Sitio web personal de Eloy Martínez Cuesta, construido con Astro alrededor de tres áreas de trabajo:

**Iluminación · Tecnología · Negocio**

El proyecto ya no es una plantilla genérica de blog. Es una web editorial y profesional que reúne experiencia en iluminación, proyectos reales, herramientas digitales, software, laboratorio y artículos técnicos.

## Estado del proyecto

El sitio está en desarrollo activo. La arquitectura visual, el contenido y las páginas principales se han adaptado a la identidad de Eloy y a su forma de trabajar: entender primero el problema y construir después una solución útil.

La futura extracción de una plantilla reutilizable se realizará en una fase posterior. Este repositorio representa actualmente el sitio personal, no una plantilla independiente.

## Secciones principales

- `/` — Página de inicio y navegación principal.
- `/iluminacion/` — Experiencia y conocimiento aplicado a la iluminación profesional.
- `/tecnologia/` — Software, automatización, datos, APIs y herramientas para problemas reales.
- `/proyectos/` — Proyectos de iluminación, herramientas digitales, open source y laboratorio.
- `/articulos/` — Índice de artículos.
- `/trayectoria/` — Recorrido profesional.
- `/sobre-mi/` — Presentación personal y contacto.

## Stack

- [Astro](https://astro.build/) 5
- TypeScript
- Markdown y MDX para los artículos
- Tailwind CSS y CSS específico por página
- `@astrojs/rss` para el feed RSS
- `@astrojs/sitemap` para el sitemap
- JSON-LD y metadatos SEO reutilizables
- Cloudflare Pages para el despliegue

## Desarrollo local

### Requisitos

- Node.js `>=18.20.8`
- npm

### Instalación

```bash
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

La web estará disponible en `http://localhost:4321`.

### Compilar el sitio

```bash
npm run build
```

### Vista previa de producción

```bash
npm run preview
```

## Contenido

Los artículos viven en `src/content/blog/` y utilizan frontmatter validado por el esquema de contenido del proyecto.

Para crear un artículo nuevo:

```bash
npm run new-post nombre-del-articulo
```

La configuración editorial y de sitio se encuentra en:

- `src/config.ts`
- `src/content/config.ts`

## Estructura del proyecto

```text
eloy-blog/
├── public/                  # Imágenes, fuentes y otros recursos estáticos
├── scripts/                 # Scripts de apoyo, incluido el creador de artículos
├── src/
│   ├── components/          # Componentes Astro reutilizables
│   ├── content/blog/        # Artículos en Markdown/MDX
│   ├── layouts/             # Layouts de inicio, interiores y artículos
│   ├── pages/               # Rutas públicas del sitio
│   ├── styles/              # Estilos globales y del sistema visual
│   ├── utils/               # Utilidades de contenido y SEO
│   ├── config.ts             # Configuración editorial y datos del sitio
│   └── content/config.ts     # Validación de colecciones de contenido
├── astro.config.mjs
├── package.json
└── README.md
```

## Principios del proyecto

- El contenido y la experiencia de lectura tienen prioridad sobre la lógica de plantilla.
- La identidad visual debe mantenerse sobria, editorial y orientada a la claridad.
- Las páginas deben explicar problemas y soluciones reales, no presentar tecnología como decoración.
- Las URLs y los artículos existentes se mantienen estables salvo decisión explícita.
- Los schemas SEO se construyen de forma centralizada y reutilizable.
- Las imágenes deben optimizarse antes de incorporarse a `public/`.

## Despliegue

El sitio se compila como un proyecto Astro estático y se despliega en Cloudflare Pages.

Configuración principal de salida:

```toml
pages_build_output_dir = "dist"
```

El comando de compilación y la versión de Node se configuran en el panel de Cloudflare Pages.

## Próxima fase: extraer una plantilla

Cuando la identidad y la arquitectura del sitio estén suficientemente consolidadas, se podrá separar lo reutilizable de lo específico de Eloy para crear una plantilla independiente.

Esa plantilla deberá extraer, entre otros elementos:

- layouts y componentes visuales reutilizables;
- sistema de navegación y páginas interiores;
- configuración SEO y JSON-LD;
- colección de artículos y scripts editoriales;
- documentación de instalación y personalización.

Esa extracción no forma parte todavía de este repositorio: primero se termina y estabiliza el sitio real.

## Licencia

Este repositorio contiene el sitio personal y sus contenidos. La licencia y las condiciones de reutilización se definirán junto con la futura plantilla.
