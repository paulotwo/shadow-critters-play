import type { CapacitorConfig } from "@capacitor/cli";

// Casca nativa: sem `server.url`. O WebView serve o bundle de `dist/`
// (gerado por `bun run build:native`) em https://localhost, então o jogo
// funciona offline desde a instalação.
const config: CapacitorConfig = {
  appId: "com.pjdev.shadowcrittersplay",
  appName: "Jogo das Sombras",
  webDir: "dist",
  android: {
    allowMixedContent: false,
  },
};

export default config;
