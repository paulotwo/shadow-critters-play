// Gera o ícone do app (leão metade revelado, metade sombra) a partir da arte
// do jogo: fontes do Capacitor em assets/ e ícones web em public/.
// Uso, na raiz do projeto:
//   node scripts/gen-app-icons.mjs && bunx capacitor-assets generate --android
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const SOURCE = "src/assets/animals/lion.webp";
const YELLOW = "#FFD23F";
const TEAL = "#1FC8C0";
const SHADOW = "#17324D";

/** Fundo dividido ao meio com a linha tracejada no centro. */
function background(size) {
  const k = size / 1024;
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
      `<rect width="${size}" height="${size}" fill="${YELLOW}"/>` +
      `<rect x="${size / 2}" width="${size / 2}" height="${size}" fill="${TEAL}"/>` +
      `<line x1="${size / 2}" y1="0" x2="${size / 2}" y2="${size}" stroke="#ffffff" stroke-width="${14 * k}" stroke-dasharray="${34 * k} ${26 * k}"/>` +
      `</svg>`,
  );
}

/**
 * Menor círculo que contém todo o leão (centro e raio em frações da largura
 * da imagem recortada). O launcher do Android recorta o ícone em círculo, e o
 * leão com o rabo para o lado não é centrado pela caixa retangular.
 */
async function enclosingCircle(trimmed) {
  const { data, info } = await sharp(trimmed)
    .resize(320, 320, { fit: "inside" })
    .extractChannel("alpha")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const points = [];
  for (let y = 0; y < info.height; y++)
    for (let x = 0; x < info.width; x++) if (data[y * info.width + x] > 8) points.push([x + 0.5, y + 0.5]);
  const farthest = (cx, cy) => {
    let best = points[0];
    let dist = -1;
    for (const p of points) {
      const d = (p[0] - cx) ** 2 + (p[1] - cy) ** 2;
      if (d > dist) [best, dist] = [p, d];
    }
    return [best, Math.sqrt(dist)];
  };
  // Bădoiu–Clarkson: o centro caminha, em passos cada vez menores, até o ponto mais distante.
  let [cx, cy] = [info.width / 2, info.height / 2];
  for (let i = 1; i <= 3000; i++) {
    const [p] = farthest(cx, cy);
    cx += (p[0] - cx) / (i + 1);
    cy += (p[1] - cy) / (i + 1);
  }
  const [, r] = farthest(cx, cy);
  return { cx: cx / info.width, cy: cy / info.width, r: (r + 1) / info.width };
}

/**
 * Leão num quadro transparente de `size` px, com o rosto (à esquerda do centro
 * do quadro) colorido e o resto em sombra. O leão é o maior possível dentro
 * do círculo de diâmetro `diameter` centrado no quadro.
 */
async function lion(size, diameter) {
  const trimmed = await sharp(SOURCE).trim().toBuffer();
  const circle = await enclosingCircle(trimmed);
  const width = Math.floor(diameter / (2 * circle.r));
  const { data, info } = await sharp(trimmed).resize({ width }).png().toBuffer({ resolveWithObject: true });
  const alpha = await sharp(data).extractChannel("alpha").toBuffer();
  const shadow = await sharp({ create: { width: info.width, height: info.height, channels: 3, background: SHADOW } })
    .joinChannel(alpha)
    .png()
    .toBuffer();
  const left = Math.round(size / 2 - circle.cx * info.width);
  const top = Math.round(size / 2 - circle.cy * info.width);
  const cut = size / 2 - left;
  const face = await sharp(data).extract({ left: 0, top: 0, width: cut, height: info.height }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([
      { input: shadow, left, top },
      { input: face, left, top },
    ])
    .png()
    .toBuffer();
}

/** Ícone completo: fundo + leão + linha tracejada por cima. */
async function icon(size, diameter) {
  const dash = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
      `<line x1="${size / 2}" y1="0" x2="${size / 2}" y2="${size}" stroke="#ffffff" stroke-width="${(14 * size) / 1024}" stroke-dasharray="${(34 * size) / 1024} ${(26 * size) / 1024}"/>` +
      `</svg>`,
  );
  return sharp(background(size))
    .composite([{ input: await lion(size, diameter) }, { input: dash }])
    .flatten({ background: YELLOW })
    .png()
    .toBuffer();
}

/** .ico com um PNG embutido (formato aceito desde o Windows Vista). */
function ico(png, size) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(size, 6);
  header.writeUInt8(size, 7);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

// Capacitor (@capacitor/assets). O ícone adaptativo gerado por ele encaixa a
// imagem inteira nos 72dp visíveis (inset de 16,7%), então a zona segura de
// 66dp, que nenhum launcher corta, é um círculo de 66/72 do lado da imagem.
const SAFE = Math.floor((1024 * 66) / 72);
// icon-only também vira ícone redondo (Android antigo) e "maskable" no PWA
// (zona segura: círculo de 80%).
const full = await icon(1024, 800);
await sharp(full).toFile("assets/icon-only.png");
await sharp(background(1024)).png().toFile("assets/icon-background.png");
await sharp(await lion(1024, SAFE)).toFile("assets/icon-foreground.png");
const splash = await icon(2732, 1100);
await sharp(splash).toFile("assets/splash.png");
await sharp(splash).toFile("assets/splash-dark.png");

// Web / PWA
await sharp(full).resize(512, 512).png().toFile("public/pwa-512x512.png");
await sharp(full).resize(192, 192).png().toFile("public/pwa-192x192.png");
writeFileSync("public/favicon.ico", ico(await sharp(full).resize(48, 48).png().toBuffer(), 48));

// Prévia do ícone adaptativo como o launcher recorta (círculo e quadrado arredondado).
const adaptive = await sharp("assets/icon-background.png")
  .composite([{ input: "assets/icon-foreground.png" }])
  .png()
  .toBuffer()
  .then((layered) => sharp(layered).resize(400, 400).png().toBuffer());
const mask = (rx) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" rx="${rx}" fill="#fff"/></svg>`);
const masked = (rx) => sharp(adaptive).composite([{ input: mask(rx), blend: "dest-in" }]).png().toBuffer();
await sharp({ create: { width: 1340, height: 480, channels: 3, background: "#f2f2f2" } })
  .composite([
    { input: await masked(200), left: 40, top: 40 },
    { input: await masked(90), left: 470, top: 40 },
    { input: await sharp(full).resize(400, 400).toBuffer(), left: 900, top: 40 },
  ])
  .png()
  .toFile("test-results/icone-aplicado.png");
console.log("ícones gerados");
