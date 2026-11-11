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
bun run build:native  # vite build --mode native + cap sync android
bun run android:apk   # debug APK → android/app/build/outputs/apk/debug/
bun run android:aab   # release AAB (needs signing config, not set up yet)
bun run android:open  # open android/ in Android Studio
```

First deploy requires `wrangler login`. The site is published at `https://shadow-critters-play.ksepisteme.com.br/`.

## Architecture

### Entry Point

`main.tsx` → `App.tsx` (providers) → `pages/Index.tsx` → `components/ShadowGame.tsx`

`App.tsx` wraps the tree with `QueryClientProvider`, `I18nProvider`, `TooltipProvider`, and `BrowserRouter`. All game logic lives in `ShadowGame.tsx`; `pages/Index.tsx` is just a thin route wrapper.

### ShadowGame.tsx — central state machine

All gameplay is managed here. Key state:
- `showIntro`: intro screen vs. game
- `round`: current `Round` with its own `mode` (`"animals" | "dinos" | "aquatics"`), `shadow` (correct answer) and `options` (3 choices). Everything rendered derives the category from `round.mode`; there is no separate mode state that could disagree with the round.
- `feedback`: `"correct" | "wrong" | null`
- `recentShadowsRef`: last 15 creature IDs shown, used by `pickRound<T>` to avoid repetition

**Round flow**: `pickRound(mode, recent)` selects 1 correct creature + 2 distractors from the relevant pool, excluding the last 15 seen. Correct answer → sound + TTS + fun fact (300 ms delay) → next round after speech ends (600 ms delay). Wrong answer → sound → next round after 1.2 s. A hint pulses the correct shadow after 5 s of inactivity.

Melody switches every 3 correct answers: `if (newScore % 3 === 0) switchMelody()`.

**Stale flows**: an answer schedules sound, speech and the next round in delayed steps. Schedule them only with `later()` and check `flowRef` after any `await`; `goHome` and `handleStartGame` call `cancelFlow()`, which invalidates every pending step. `busyRef` locks the round on the first tap (the `feedback` state arrives too late for burst taps). Never use a bare `setTimeout` for game flow: a step from an old game firing inside a new one used to crash the app to a blank screen. `GameErrorBoundary` (in `pages/Index.tsx`) remounts the game on any render error.

`node scripts/stress-test.mjs` (against `bun run preview`) clicks everything at random and then checks these invariants; run it after touching the round flow or the audio.

### Creature data pattern (animals / dinos / aquatics)

Each category is identical in structure:

```
components/
  animals/
    types.ts          AnimalId union + AnimalProps interface
    index.ts          animalComponents: Record<AnimalId, React.FC<AnimalProps>>
    allAnimals.tsx    ~25 stateless components that render one WebP via AnimalImage
    AnimalImage.tsx   applies CSS brightness(0) shadow filter when isShadow=true
  animalFunFacts.ts       Portuguese facts  Record<AnimalId, string[]>
  animalFunFactsEn.ts     English facts
  animalFunFactsDe.ts     German facts
  … (one file per language per category)
```

Shadow silhouettes are **not SVG** — the same WebP images (`src/assets/`) are darkened with `filter: brightness(0) opacity(0.85)` when `isShadow` is true.

Creature names live in `i18n/translations.ts` (`t[locale].animalNames`, `.dinoNames`, `.aquaticNames`). The legacy `animalNames` export in `animals/index.ts` is unused.

Fun facts are separate files per language (not in `translations.ts`) to allow independent translation of each language's facts. Use `getRandomFunFact(id, locale)` to retrieve one.

### i18n

`I18nContext.tsx` provides `{ locale, setLocale, t, speechLang }`. Locale detection order: `localStorage("shadow-game-locale")` → browser language → `"en"`. All UI strings and creature names are in `i18n/translations.ts` keyed by `Locale` (`"pt" | "en" | "es" | "fr" | "it" | "de"`). `speechLang` maps short codes to BCP-47 tags (e.g. `pt → pt-BR`) for Web Speech API.

### Audio (gameAudio.ts)

Three independent subsystems:

- **Sound effects**: Web Audio API. Effects and music share ONE `AudioContext` (`getCtx()`); never create one per sound, they leak.
- **TTS**: Web Speech API. `prewarmSpeech()` must be called on the intro screen (user-gesture boundary) to unlock iOS audio. `speakText(text, lang)` returns a Promise that always resolves (end, error, interruption by another speech or `stopSpeech()`, or a 15 s timeout). Voices are cached in `cachedVoices[]`.
- **Background music**: Procedural. `MELODIES` array holds 4 hardcoded note sequences. `startBackgroundMusic()` opens a music session (a gain node), schedules notes, and loops. `switchMelody()` fades the old session out and starts the next melody. Always call `stopBackgroundMusic()` when leaving the game screen.

### Native app (Capacitor, Android)

`capacitor.config.ts` (appId `com.pjdev.shadowcrittersplay`) wraps `dist/` with no `server.url`: the bundle ships inside the app and runs at `https://localhost`. `android/` is committed; `android/local.properties` (SDK path) is not.

- `vite build --mode native` drops `VitePWA` (no service worker) and strips the `analytics:start`/`analytics:end` block from `index.html` (no analytics in the app: Play Families Policy). The web build keeps both.
- `src/lib/platform.ts` exports `isNative`. Use it for anything that differs in the app.
- Android WebView has no `speechSynthesis`: on native, `speakText`/`stopSpeech` use `@capacitor-community/text-to-speech`. It needs the `TTS_SERVICE` `<queries>` entry in `AndroidManifest.xml`.
- `ShadowGame.tsx` handles the Android back button (game → intro → exit app) and stops music/speech when the app goes to background.
- The status bar stays visible over the game background: `SystemBars` in `capacitor.config.ts` + `viewport-fit=cover`, and the screens keep clear of the bars with `env(safe-area-inset-*)`. Do not hide the system bars: Capacitor pads the WebView and a gray band shows up. Portrait comes from `android:screenOrientation`; `enterFullscreen()` is a no-op on native. The PWA install banner is hidden.
- Icons/splash: `node scripts/gen-app-icons.mjs` builds the icon from the lion art (sources in `assets/`, plus `public/pwa-*.png` and `favicon.ico`); then `bunx capacitor-assets generate --android` writes the Android resources. The launcher name is localized in `android/app/src/main/res/values-*/strings.xml`.
- After changing web code, run `bun run build:native` before building in Gradle.

### Styling

Tailwind CSS with custom tokens in `tailwind.config.ts`: `game-sky`, `game-grass`, `game-sun`, `game-shadow`, `game-correct`, `game-wrong`. Custom keyframes: `bounce-in`, `pop-correct`, `shake-wrong`, `float`.

### TypeScript

`tsconfig.app.json` has `strict: false`, `noImplicitAny: false`, `noUnusedLocals: false`. Types are used selectively — creature IDs are rigorous union types, but general code is loosely typed.

## Adding a new creature category

1. Create `components/<category>/types.ts`, `index.ts`, `all<Category>.tsx`, `<Category>Image.tsx` following the animals pattern.
2. Add `<Category>Id` to the `RoundData<T>` generic in `ShadowGame.tsx` and wire up a mode button.
3. Create `<category>FunFacts.ts` (PT) + one file per additional language.
4. Add names to each locale entry in `i18n/translations.ts`.
