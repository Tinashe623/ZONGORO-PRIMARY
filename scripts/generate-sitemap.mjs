import { writeFileSync } from 'node:fs';
import { loadSeoModule, ROUTE_PRIORITY } from './seo-shared.mjs';

const { SITE_URL, pageMeta } = await loadSeoModule();

const routes = Object.keys(pageMeta).filter((path) => path.startsWith('/'));

const lastmod = new Date().toISOString().slice(0, 10);

const urls = routes
  .map((route) => {
    const { changefreq, priority } = ROUTE_PRIORITY[route] ?? {
      changefreq: 'monthly',
      priority: '0.6',
    };
    return [
      '  <url>',
      `    <loc>${SITE_URL}${route}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml);
console.log(`sitemap.xml written with ${routes.length} routes (lastmod ${lastmod}).`);
