const { execFileSync } = require('node:child_process');
const { mkdtempSync, mkdirSync, copyFileSync, readdirSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');

const page = Number(process.argv[2]);
if (!Number.isSafeInteger(page) || page < 1) {
  console.error('Usage: pnpm render:slide <page-number>');
  process.exit(1);
}

const root = path.resolve(__dirname, '..');
const temp = mkdtempSync(path.join(tmpdir(), 'swipytics-slide-'));
try {
  execFileSync('pnpm', ['exec', 'marp', 'main.md', '--theme', 'themes/swipytics.css', '--html', '--allow-local-files', '--images', 'png', '-o', path.join(temp, 'slide.png')], { cwd: root, stdio: 'inherit' });
  const images = readdirSync(temp).filter((name) => /^slide\.\d+\.png$/.test(name)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  if (page > images.length) throw new Error(`Page ${page} does not exist (deck has ${images.length} pages).`);
  const outputDir = path.join(root, 'dist');
  mkdirSync(outputDir, { recursive: true });
  const output = path.join(outputDir, `slide-${page}.png`);
  copyFileSync(path.join(temp, images[page - 1]), output);
  console.log(`Rendered page ${page}: ${output}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  rmSync(temp, { recursive: true, force: true });
}
