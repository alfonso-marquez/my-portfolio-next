// Builds the 1200x630 link-preview images (Instagram, WhatsApp, etc.) for each artist page
// (/media/<slug>), from the project covers in src/lib/data.ts. Every other page uses the
// portrait in src/app/opengraph-image.jpg. Re-run after adding a project:
//   node scripts/og-images.mjs
// sharp ships with Next.js, so no extra install is needed.
import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const data = fs.readFileSync(path.join(root, "src/lib/data.ts"), "utf8");

// Pull slug + cover pairs straight from the data file (keeps this script dependency-free)
const projects = [...data.matchAll(/slug:\s*"([^"]+)"[\s\S]*?cover:\s*"([^"]+)"/g)]
    .map(([, slug, cover]) => ({ slug, cover }));

const outDir = path.join(root, "public/og");
fs.mkdirSync(outDir, { recursive: true });

const W = 1200, H = 630;

// Wide covers are cropped to fill the frame. Taller ones would lose heads in a 1.91:1 crop,
// so the whole photo sits centred over a blurred, darkened copy of itself.
const render = async (cover, name) => {
    const src = path.join(root, "public", cover);
    const out = path.join(outDir, `${name}.jpg`);
    const { width, height } = await sharp(src).rotate().metadata();
    if (width / height >= 1.4) {
        return sharp(src).rotate().resize(W, H, { fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
    }
    const bg = await sharp(src).rotate().resize(W, H, { fit: "cover" }).blur(40).modulate({ brightness: 0.45 }).toBuffer();
    const fg = await sharp(src).rotate().resize({ height: H }).toBuffer({ resolveWithObject: true });
    return sharp(bg)
        .composite([{ input: fg.data, left: Math.round((W - fg.info.width) / 2), top: 0 }])
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(out);
};

for (const { slug, cover } of projects) {
    await render(cover, slug);
    console.log(`og/${slug}.jpg  <- ${cover}`);
}
