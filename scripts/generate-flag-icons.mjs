import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const flagSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="10.67" height="32" fill="#009246"/>
  <rect x="10.67" width="10.66" height="32" fill="#FFFFFF"/>
  <rect x="21.33" width="10.67" height="32" fill="#CE2B37"/>
</svg>`;

async function writePng(size, outputPath) {
    await sharp(Buffer.from(flagSvg)).resize(size, size).png().toFile(outputPath);
}

async function main() {
    const appDir = path.join(root, 'src', 'app');
    const publicDir = path.join(root, 'public');

    fs.mkdirSync(appDir, { recursive: true });
    fs.mkdirSync(publicDir, { recursive: true });

    const tmpDir = path.join(root, '.tmp-icons');
    fs.mkdirSync(tmpDir, { recursive: true });

    await writePng(180, path.join(appDir, 'apple-icon.png'));
    await writePng(150, path.join(appDir, 'mstile-150x150.png'));
    await writePng(150, path.join(publicDir, 'mstile-150x150.png'));
    await writePng(192, path.join(publicDir, 'android-chrome-192x192.png'));
    await writePng(512, path.join(publicDir, 'android-chrome-512x512.png'));

    const icoSizes = [16, 32, 48];
    const icoBuffers = await Promise.all(
        icoSizes.map(async (size) => {
            const tmpPath = path.join(tmpDir, `favicon-${size}.png`);
            await writePng(size, tmpPath);
            return tmpPath;
        }),
    );

    const icoBuffer = await pngToIco(icoBuffers);
    fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

    fs.rmSync(tmpDir, { recursive: true, force: true });

    console.log('Icons generated:');
    console.log('  src/app/favicon.ico');
    console.log('  src/app/apple-icon.png');
    console.log('  src/app/mstile-150x150.png');
    console.log('  public/mstile-150x150.png');
    console.log('  public/android-chrome-192x192.png');
    console.log('  public/android-chrome-512x512.png');
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
