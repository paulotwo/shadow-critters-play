# Shadow Critters Play

A children's educational shadow-guessing game. A silhouette appears on screen — can you identify the animal or dinosaur hiding in the shadows?

Play at: **https://shadow-critters-play.ksepisteme.com.br/**

## How to Play

1. Choose a game mode: **Animals** or **Dinosaurs**
2. Look at the shadow and pick the correct creature from 3 options
3. Hear the creature's name spoken aloud and learn a fun fact when you get it right
4. The melody changes every 3 correct answers to keep things fresh

If you take too long, the correct option will briefly pulse as a hint.

## Features

- **30 animals** and **20 dinosaurs**
- **6 languages:** Português, English, Español, Français, Italiano, Deutsch
- **Text-to-speech** — creature names and fun facts read aloud in the selected language
- **Procedural background music** — 4 cheerful melodies generated entirely via Web Audio API (no audio files)
- **PWA** — installable on mobile, works offline, supports portrait lock
- **Fullscreen mode** on game start

## Getting Started

```bash
bun install
bun run dev
```

The dev server runs at `http://localhost:8080`.

Build for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

Run tests:

```bash
bun test
```

## Deploy

The app is deployed to Cloudflare Workers as a static site. Make sure you are logged in first:

```bash
wrangler login
```

Then deploy:

```bash
bun run deploy
```

This runs `vite build` followed by `wrangler deploy`, publishing the contents of `dist/` as static assets.

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) with PWA plugin
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Cloudflare Workers](https://workers.cloudflare.com/) (static assets)
- [Bun](https://bun.sh/) (package manager)
- Web Audio API (sound effects + background music)
- Web Speech API (text-to-speech)

## Project Structure

```
src/
├── components/
│   ├── ShadowGame.tsx        # Main game component
│   ├── LanguageSelector.tsx  # Flag-based language picker
│   ├── gameAudio.ts          # Sound effects, music, TTS
│   ├── animals/              # Animal SVG components & types
│   ├── dinosaurs/            # Dinosaur SVG components & types
│   ├── animalFunFacts*.ts    # Fun facts per language (animals)
│   └── dinoFunFacts*.ts      # Fun facts per language (dinos)
├── i18n/                     # i18n provider & translations
├── assets/
│   ├── animals/              # Animal PNG images
│   ├── dinos/                # Dinosaur PNG images
│   └── flags/                # Flag PNGs (br, us, es, fr, it, de)
└── pages/
    └── Index.tsx
```
