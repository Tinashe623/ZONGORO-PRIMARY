// Exports the full bundled website content as JSON so the management system can
// seed the Website Manager with the school's real content.
//
// Usage: node scripts/export-website-defaults.mjs [output.json]
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';

const out = process.argv[2];

const result = await build({
  entryPoints: ['src/data/websiteDefaults.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: 'node20',
  write: false,
  logLevel: 'silent',
});

const code = result.outputFiles[0].text;
const mod = await import(
  'data:text/javascript;base64,' + Buffer.from(code).toString('base64')
);

const json = JSON.stringify(mod.defaultWebsiteContent, null, 2) + '\n';

if (out) {
  writeFileSync(out, json);
  console.log(`Wrote ${out} (${json.length} bytes)`);
} else {
  process.stdout.write(json);
}
