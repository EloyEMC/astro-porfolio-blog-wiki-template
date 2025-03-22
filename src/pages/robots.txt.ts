import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
# robots.txt optimizado

# Permitir acceso a todos los robots de búsqueda
User-agent: *
# Permitir indexar las páginas principales
Allow: /

# Permitir indexar el blog y sus secciones relacionadas
Allow: /blog/
Allow: /tags/
Allow: /archives/


# Bloquear el acceso a áreas privadas o no deseadas (ajusta según tu estructura)
Disallow: /admin/
Disallow: /login/
Disallow: /user/
Disallow: /dashboard/
Disallow: /cart/
Disallow: /checkout/

# Evitar que los motores de búsqueda indexen contenido duplicado, como las búsquedas
Disallow: /search/

# Bloquear el acceso a archivos sensibles o de configuración
Disallow: /cgi-bin/
Disallow: /tmp/

# Bloquear algunos crawlers no deseados
User-agent: Baiduspider
Disallow: /

User-agent: Yandex
Disallow: /

User-agent: AhrefsBot
Disallow: /


Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  console.log('sitemapURL = ', sitemapURL);
  return new Response(getRobotsTxt(sitemapURL));
};
