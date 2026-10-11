import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const IMAGES_DIR = 'public/images';
const SKIP_DIRS = new Set(['icons']);
const MAX_WIDTH = 1600;
const HERO_MAX_WIDTH = 1920;
const QUALITY = 80;
const SKIP_WEBP_BELOW_KB = 180;

const walk = (dir) => {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
};

const url = (file) => '/' + path.relative('public', file).split(path.sep).join('/');
const sizeKb = (file) => fs.statSync(file).size / 1024;

const main = async () => {
  const mapping = new Map();
  const files = walk(IMAGES_DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

  for (const file of files) {
    const rel = path.relative(IMAGES_DIR, file);
    if (SKIP_DIRS.has(rel.split(path.sep)[0])) continue;

    const meta = await sharp(file).metadata();
    const isHero = path.basename(file) === 'hero-2026.webp';
    const maxW = isHero ? HERO_MAX_WIDTH : MAX_WIDTH;
    const isWebp = meta.format === 'webp';
    const needsResize = (meta.width ?? 0) > maxW;

    if (isWebp && !needsResize && sizeKb(file) < SKIP_WEBP_BELOW_KB) continue;

    const before = sizeKb(file);
    const pipeline = sharp(file)
      .rotate()
      .resize({ width: maxW, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 });

    if (isWebp) {
      const tmp = `${file}.tmp`;
      await pipeline.toFile(tmp);
      if (sizeKb(tmp) < before) {
        fs.renameSync(tmp, file);
        console.log(`  ${before.toFixed(0)}KB -> ${sizeKb(file).toFixed(0)}KB  ${rel}`);
      } else {
        fs.unlinkSync(tmp);
      }
      continue;
    }

    const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
    await pipeline.toFile(out);
    if (sizeKb(out) < before) {
      fs.unlinkSync(file);
      mapping.set(url(file), url(out));
      console.log(`  ${before.toFixed(0)}KB -> ${sizeKb(out).toFixed(0)}KB  ${rel} -> ${path.relative(IMAGES_DIR, out)}`);
    } else {
      fs.unlinkSync(out);
      console.log(`  kept original (webp not smaller)  ${rel}`);
    }
  }

  if (mapping.size === 0) {
    console.log('\nNo references to update.');
    return;
  }

  const targets = ['index.html', ...walk('src').filter((f) => /\.(tsx?|html)$/.test(f))];
  let edited = 0;
  for (const target of targets) {
    let content = fs.readFileSync(target, 'utf8');
    let changed = false;
    for (const [oldUrl, newUrl] of mapping) {
      if (content.includes(oldUrl)) {
        content = content.split(oldUrl).join(newUrl);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(target, content);
      edited += 1;
    }
  }
  console.log(`\nConverted ${mapping.size} image(s); updated ${edited} source file(s).`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
