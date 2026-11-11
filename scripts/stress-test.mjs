// Teste de stress do jogo no navegador: uma "criança" clica em tudo, rápido,
// e depois o jogo precisa continuar respondendo normalmente.
// Uso: suba o site (bun run build && bun run preview) e rode
//   node scripts/stress-test.mjs [url] [segundos de caos]
import { chromium } from "playwright";

const URL = process.argv[2] ?? "http://localhost:4173/";
const CHAOS_SECONDS = Number(process.argv[3] ?? 45);
const SPEECH_MS = 1500;

const failures = [];
const check = (ok, label, detail = "") => {
  console.log(`${ok ? "  ok  " : " FALHA"} ${label}${detail ? ` (${detail})` : ""}`);
  if (!ok) failures.push(label);
};

// Usa o Chrome instalado (headless, perfil temporário): dispensa baixar o Chromium do Playwright.
const browser = await chromium.launch({
  channel: "chrome",
  // Sem isto o Chrome sem janela limita os temporizadores da página a 1 por segundo.
  args: [
    "--disable-background-timer-throttling",
    "--disable-renderer-backgrounding",
    "--disable-backgrounding-occluded-windows",
    "--autoplay-policy=no-user-gesture-required",
  ],
});
const context = await browser.newContext({ viewport: { width: 412, height: 915 }, hasTouch: true, locale: "pt-BR" });
const page = await context.newPage();

const errors = [];
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(`console.error: ${m.text()}`);
});

// Instrumentação: conta contextos de áudio vivos e troca a fala por uma
// simulação com duração previsível (o Chromium sem tela não tem vozes).
await page.addInitScript((speechMs) => {
  const stats = { created: 0, live: 0, maxLive: 0, speaks: 0, speaking: 0, maxSpeaking: 0, rejections: [] };
  window.__stats = stats;
  window.addEventListener("unhandledrejection", (e) => stats.rejections.push(String(e.reason)));

  const Native = window.AudioContext;
  window.AudioContext = class extends Native {
    constructor(...args) {
      super(...args);
      stats.created++;
      stats.live++;
      stats.maxLive = Math.max(stats.maxLive, stats.live);
    }
    close() {
      if (this.state !== "closed") stats.live--;
      return super.close();
    }
  };

  // A folha de compartilhar do sistema ficaria aberta bloqueando o teste.
  navigator.share = async () => {};

  let current = null;
  const finish = (how) => {
    if (!current) return;
    const { utterance, timer } = current;
    current = null;
    clearTimeout(timer);
    stats.speaking--;
    if (how === "end") utterance.onend?.(new Event("end"));
    else utterance.onerror?.(new Event("error"));
  };
  const fake = {
    getVoices: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    cancel: () => finish("error"),
    speak: (utterance) => {
      if (utterance.volume === 0) return;
      finish("error");
      stats.speaks++;
      stats.speaking++;
      stats.maxSpeaking = Math.max(stats.maxSpeaking, stats.speaking);
      current = { utterance, timer: setTimeout(() => finish("end"), speechMs) };
    },
  };
  Object.defineProperty(window, "speechSynthesis", { value: fake, configurable: true });
}, SPEECH_MS);

await page.goto(URL);
await page.waitForSelector('[data-testid="mode-animals"]');

const stats = () => page.evaluate(() => window.__stats);
const score = () => page.locator('[data-testid="score"]').innerText();
const shadowSrc = () => page.locator('[data-testid="shadow"] img').getAttribute("src");
const sleep = (ms) => page.waitForTimeout(ms);

/** Índice da opção certa (mesma imagem da sombra) ou de uma errada. */
async function optionIndex(correct) {
  const target = await shadowSrc();
  const srcs = await page.locator('[data-testid="option"] img').evaluateAll((imgs) => imgs.map((i) => i.getAttribute("src")));
  return srcs.findIndex((s) => (s === target) === correct);
}
const clickOption = async (correct) => page.locator('[data-testid="option"]').nth(await optionIndex(correct)).click();
const optionsEnabled = () =>
  page.locator('[data-testid="option"]').evaluateAll((bs) => bs.length === 3 && bs.every((b) => !b.disabled));
async function goHomeIfPlaying() {
  if (await page.locator('[data-testid="home"]').count()) await page.locator('[data-testid="home"]').click();
  try {
    await page.waitForSelector('[data-testid="mode-animals"]', { timeout: 5000 });
  } catch (e) {
    await page.screenshot({ path: "test-results/stress-falha.png" });
    console.log("   URL:", page.url(), "| texto:", (await page.locator("body").innerText()).slice(0, 200).replace(/\s+/g, " "));
    console.log("   erros:", errors.slice(0, 5).join(" || "));
    throw e;
  }
}

// ---------- 1. Caos: clica em qualquer botão visível, sem parar ----------
console.log(`\n1. Caos por ${CHAOS_SECONDS}s`);
const chaos = await page.evaluate(async (seconds) => {
  const end = performance.now() + seconds * 1000;
  let clicks = 0;
  let longestStall = 0;
  let last = performance.now();
  while (performance.now() < end) {
    const buttons = [...document.querySelectorAll("button")];
    const b = buttons[Math.floor(Math.random() * buttons.length)];
    if (b) {
      b.click();
      clicks++;
    }
    await new Promise((r) => setTimeout(r, 15 + Math.random() * 70));
    const now = performance.now();
    longestStall = Math.max(longestStall, now - last);
    last = now;
  }
  return { clicks, longestStall: Math.round(longestStall) };
}, CHAOS_SECONDS);
const afterChaos = await stats();
console.log(`   ${chaos.clicks} cliques, ${afterChaos.created} contextos de áudio criados, ${afterChaos.speaks} falas`);
check(chaos.longestStall < 1000, "a tela não travou durante o caos", `maior pausa ${chaos.longestStall} ms`);
check(afterChaos.maxLive <= 4, "contextos de áudio vivos ficam limitados", `pico ${afterChaos.maxLive}`);
check(afterChaos.maxSpeaking <= 1, "nunca há duas falas ao mesmo tempo", `pico ${afterChaos.maxSpeaking}`);

// ---------- 2. Depois do caos o jogo responde normalmente ----------
console.log("\n2. Jogo normal depois do caos");
await goHomeIfPlaying();
await page.locator('[data-testid="mode-animals"]').click();
await sleep(150);
check(await optionsEnabled(), "opções liberadas logo ao começar um jogo novo");
check((await score()) === "0/0", "placar começa zerado", await score());
const firstShadow = await shadowSrc();
await clickOption(true);
await sleep(100);
check((await score()) === "1/1", "acerto conta uma vez", await score());
await sleep(300 + SPEECH_MS + 600 + 700);
check(await optionsEnabled(), "próxima rodada chega depois da fala");
check((await shadowSrc()) !== firstShadow, "a sombra mudou de rodada");

// ---------- 3. Sair no meio da fala e começar outro jogo ----------
console.log("\n3. Trocar de tela com o áudio rodando");
await clickOption(true);
await sleep(500);
await page.locator('[data-testid="home"]').click();
await page.locator('[data-testid="mode-dinos"]').click();
await sleep(150);
check(await optionsEnabled(), "jogo novo não herda o bloqueio da rodada anterior");
check((await score()) === "0/0", "placar do jogo novo zerado", await score());
const dinoShadow = await shadowSrc();
await sleep(SPEECH_MS + 1500);
check((await shadowSrc()) === dinoShadow, "a rodada antiga não pula a rodada do jogo novo");
check(await optionsEnabled(), "opções continuam liberadas");

// ---------- 4. Erro seguido de troca de tela ----------
await clickOption(false);
await sleep(200);
await page.locator('[data-testid="home"]').click();
await page.locator('[data-testid="mode-aquatics"]').click();
await sleep(150);
check(await optionsEnabled(), "depois de um erro, jogo novo começa liberado");
const aquaShadow = await shadowSrc();
await sleep(1600);
check((await shadowSrc()) === aquaShadow, "o temporizador do erro antigo não troca a rodada nova");

// ---------- 5. Toque duplo na mesma resposta ----------
console.log("\n5. Toque duplo");
const idx = await optionIndex(true);
await page.locator('[data-testid="option"]').nth(idx).evaluate((b) => {
  b.click();
  b.click();
  b.click();
});
await sleep(100);
check((await score()) === "1/1", "três toques seguidos contam um acerto só", await score());
const before = await shadowSrc();
await sleep(300 + SPEECH_MS + 600 + 700);
const mid = await shadowSrc();
await sleep(1500);
check(mid !== before && (await shadowSrc()) === mid, "avança exatamente uma rodada");

// ---------- 6. Música ligada e desligada sem parar ----------
console.log("\n6. Botão de música em rajada");
await page.locator('[data-testid="music"]').evaluate(async (b) => {
  for (let i = 0; i < 60; i++) {
    b.click();
    await new Promise((r) => setTimeout(r, 20));
  }
});
await sleep(800);
const end = await stats();
check(end.live <= 3, "contextos de áudio vivos no fim", `${end.live}`);

console.log("\nErros da página");
check(errors.length === 0, "nenhum erro no console", errors.slice(0, 3).join(" | "));
check(end.rejections.length === 0, "nenhuma promessa rejeitada sem tratamento", end.rejections.slice(0, 3).join(" | "));

await page.screenshot({ path: "test-results/stress-final.png" });
await browser.close();
console.log(failures.length ? `\n${failures.length} FALHA(S)` : "\nTudo certo");
process.exit(failures.length ? 1 : 0);
