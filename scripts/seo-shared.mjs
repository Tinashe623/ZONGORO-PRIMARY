import esbuild from 'esbuild';

export async function loadSeoModule() {
  const result = await esbuild.build({
    entryPoints: ['src/lib/seo.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'es2020',
    write: false,
  });

  const code = result.outputFiles[0].text;
  const mod = await import(
    `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`
  );

  return mod;
}

export const ROUTE_PRIORITY = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/admissions': { changefreq: 'monthly', priority: '0.9' },
  '/contact': { changefreq: 'monthly', priority: '0.9' },
  '/about': { changefreq: 'monthly', priority: '0.8' },
  '/academics': { changefreq: 'monthly', priority: '0.8' },
  '/gallery': { changefreq: 'weekly', priority: '0.8' },
  '/assessment': { changefreq: 'monthly', priority: '0.7' },
  '/boarding': { changefreq: 'monthly', priority: '0.7' },
  '/church': { changefreq: 'monthly', priority: '0.7' },
  '/community': { changefreq: 'monthly', priority: '0.7' },
  '/activities': { changefreq: 'monthly', priority: '0.7' },
  '/transport': { changefreq: 'monthly', priority: '0.7' },
  '/staff': { changefreq: 'monthly', priority: '0.6' },
  '/privacy': { changefreq: 'yearly', priority: '0.2' },
  '/terms': { changefreq: 'yearly', priority: '0.2' },
};
