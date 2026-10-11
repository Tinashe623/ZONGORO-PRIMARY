import { readFileSync, writeFileSync } from 'node:fs';
import { loadSeoModule } from './seo-shared.mjs';

const { pageMeta, SITE_URL, DEFAULT_OG_IMAGE } = await loadSeoModule();

const template = readFileSync('dist/index.html', 'utf8');

const swap = (html, regex, value) => html.replace(regex, () => value);

const buildHead = (html, path, meta) => {
  const url = `${SITE_URL}${path}`;
  let out = html;
  out = swap(out, /<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  out = swap(out, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${meta.description}" />`);
  out = swap(out, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  out = swap(out, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${meta.title}" />`);
  out = swap(out, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${meta.description}" />`);
  out = swap(out, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  out = swap(out, /<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${DEFAULT_OG_IMAGE}" />`);
  out = swap(out, /<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${meta.title}" />`);
  out = swap(out, /<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${meta.description}" />`);
  out = swap(out, /<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />`);
  return out;
};

let count = 0;
for (const path of Object.keys(pageMeta)) {
  if (!path.startsWith('/') || path === '/') continue;
  const slug = path.replace(/^\//, '');
  writeFileSync(`dist/${slug}.html`, buildHead(template, path, pageMeta[path]));
  count += 1;
}

console.log(`Prerendered meta for ${count} route(s).`);
