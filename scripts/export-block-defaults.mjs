// Exports the bundled website block defaults as JSON so the management system
// can seed/preview them in the Website Manager editor.
//
// Usage: node scripts/export-block-defaults.mjs [output.json]
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';

const out = process.argv[2];

const result = await build({
  entryPoints: ['src/data/blocks/index.ts'],
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

const json = JSON.stringify(mod.defaultBlocks, null, 2) + '\n';

if (out) {
  writeFileSync(out, json);
  console.log(`Wrote ${out} (${json.length} bytes)`);
} else {
  process.stdout.write(json);
}
