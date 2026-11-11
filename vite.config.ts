import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { VitePWA } from "vite-plugin-pwa";

// On Windows, K: may be a junction to a C: path. fs.realpathSync.native resolves
// the real path, which Vite uses internally. We must set root to the same resolved
// path so that relative paths are computed consistently.
const projectRoot = fs.realpathSync.native(path.resolve(__dirname));

// https://vitejs.dev/config/
// Build do app (Capacitor): `vite build --mode native`. Sem service worker
// (o bundle já vai dentro do app) e sem analytics (Política de Famílias do Play).
const stripAnalytics = (): Plugin => ({
  name: "strip-analytics",
  transformIndexHtml: (html) =>
    html.replace(/[ \t]*<!-- analytics:start[\s\S]*?<!-- analytics:end -->\r?\n?/, ""),
});

// As prévias de Open Graph (public/og, ~13 MB) só servem a quem compartilha o
// link do site; não entram no app.
const dropWebOnlyFiles = (): Plugin => ({
  name: "drop-web-only-files",
  closeBundle: () => fs.rmSync(path.join(projectRoot, "dist", "og"), { recursive: true, force: true }),
});

export default defineConfig(({ mode }) => {
  const native = mode === "native";
  return {
  root: projectRoot,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    native && stripAnalytics(),
    native && dropWebOnlyFiles(),
    !native && VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      workbox: {
        navigateFallbackDenylist: [/^\/~oauth/],
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,woff,woff2}"],
        maximumFileSizeToCacheInBytes: 4194304,
      },
      manifest: {
        name: "Jogo das Sombras",
        short_name: "Sombras",
        description: "Jogo educativo gratuito: adivinhe animais e dinossauros pela sombra! 50+ criaturas em 6 idiomas.",
        lang: "pt-BR",
        categories: ["games", "education", "kids"],
        theme_color: "#1a1a2e",
        background_color: "#1a1a2e",
        display: "fullscreen",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.join(projectRoot, "src"),
    },
  },
  };
});
