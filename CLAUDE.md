# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev        # dev server at localhost:8080
bun run build      # production build → dist/
bun run preview    # serve dist/ locally at localhost:4173
bun run deploy     # vite build + wrangler deploy (Cloudflare Workers)
bun run lint       # ESLint
bun run format     # Prettier
bun test           # Vitest (single run)
bun run test:watch # Vitest watch mode
```

First deploy requires `wrangler login`. The site is published at `https://shadow-critters-play.ksepisteme.com.br/`.

## Architecture

### Entry Point

`main.tsx` → `App.tsx` (providers) → `pages/Index.tsx` → `components/ShadowGame.tsx`

`App.tsx` wraps the tree with `QueryClientProvider`, `I18nProvider`, `TooltipProvider`, and `BrowserRouter`. All game logic lives in `ShadowGame.tsx`; `pages/Index.tsx` is just a thin route wrapper.

### ShadowGame.tsx — central state machine

All gameplay is managed here. Key state:
- `mode`: `"animals" | "dinos" | "aquatics" | null` — null = intro screen
- `round`: current `RoundData<T>` with `shadow` (correct answer) and `options` (3 choices)
- `feedback`: `"correct" | "wrong" | null`
- `recentShadowsRef`: last 15 creature IDs shown, used by `pickRound<T>` to avoid repetition

**Round flow**: `pickRound<T>` selects 1 correct creature + 2 distractors from the relevant pool, excluding the last 15 seen. Correct answer → sound + TTS + fun fact (300 ms delay) → next round after speech ends (600 ms delay). Wrong answer → sound → next round after 1.2 s. A hint pulses the correct shadow after 5 s of inactivity.

Melody switches every 3 correct answers: `if (newScore % 3 === 0) switchMelody()`.

### Creature data pattern (animals / dinos / aquatics)

Each category is identical in structure:

```
components/
  animals/
    types.ts          AnimalId union + AnimalProps interface
    index.ts          animalComponents: Record<AnimalId, React.FC<AnimalProps>>
    allAnimals.tsx    ~25 stateless components that render one PNG via AnimalImage
    AnimalImage.tsx   applies CSS brightness(0) shadow filter when isShadow=true
  animalFunFacts.ts       Portuguese facts  Record<AnimalId, string[]>
  animalFunFactsEn.ts     English facts
  animalFunFactsDe.ts     German facts
  … (one file per language per category)
```

Shadow silhouettes are **not SVG** — the same PNG images are darkened with `filter: brightness(0) opacity(0.85)` when `isShadow` is true.

Creature names live in `i18n/translations.ts` (`t[locale].animalNames`, `.dinoNames`, `.aquaticNames`). The legacy `animalNames` export in `animals/index.ts` is unused.

Fun facts are separate files per language (not in `translations.ts`) to allow independent translation of each language's facts. Use `getRandomFunFact(id, locale)` to retrieve one.

### i18n

`I18nContext.tsx` provides `{ locale, setLocale, t, speechLang }`. Locale detection order: `localStorage("shadow-game-locale")` → browser language → `"en"`. All UI strings and creature names are in `i18n/translations.ts` keyed by `Locale` (`"pt" | "en" | "es" | "fr" | "it" | "de"`). `speechLang` maps short codes to BCP-47 tags (e.g. `pt → pt-BR`) for Web Speech API.

### Audio (gameAudio.ts)

Three independent subsystems:

- **Sound effects**: Web Audio API. `playCorrectSound()` / `playWrongSound()` create a fresh `AudioContext` per call.
- **TTS**: Web Speech API. `prewarmSpeech()` must be called on the intro screen (user-gesture boundary) to unlock iOS audio. `speakText(text, lang)` returns a Promise. Voices are cached in `cachedVoices[]`.
- **Background music**: Procedural. `MELODIES` array holds 4 hardcoded note sequences. `startBackgroundMusic()` builds an `AudioContext`, schedules notes, and loops. `switchMelody()` closes the old context and starts the next melody. Always call `stopBackgroundMusic()` when leaving the game screen.

### Styling

Tailwind CSS with custom tokens in `tailwind.config.ts`: `game-sky`, `game-grass`, `game-sun`, `game-shadow`, `game-correct`, `game-wrong`. Custom keyframes: `bounce-in`, `pop-correct`, `shake-wrong`, `float`.

### TypeScript

`tsconfig.app.json` has `strict: false`, `noImplicitAny: false`, `noUnusedLocals: false`. Types are used selectively — creature IDs are rigorous union types, but general code is loosely typed.

## Adding a new creature category

1. Create `components/<category>/types.ts`, `index.ts`, `all<Category>.tsx`, `<Category>Image.tsx` following the animals pattern.
2. Add `<Category>Id` to the `RoundData<T>` generic in `ShadowGame.tsx` and wire up a mode button.
3. Create `<category>FunFacts.ts` (PT) + one file per additional language.
4. Add names to each locale entry in `i18n/translations.ts`.
