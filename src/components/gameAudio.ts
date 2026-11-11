import { TextToSpeech } from "@capacitor-community/text-to-speech";
import { isNative } from "@/lib/platform";

// ---------- Contexto de áudio único ----------
//
// Efeitos e música usam o MESMO AudioContext. Criar um contexto por som (como
// era antes) vaza um contexto a cada resposta: o navegador limita quantos podem
// existir e, com a criança tocando em tudo, o áudio começa a falhar e a travar.

let audioCtx: AudioContext | null = null;
let audioPaused = false;

function getCtx(): AudioContext | null {
  try {
    if (!audioCtx || audioCtx.state === "closed") audioCtx = new AudioContext();
    if (audioCtx.state === "suspended" && !audioPaused) audioCtx.resume().catch(() => {});
    return audioCtx;
  } catch {
    // Audio not supported – silent fallback
    return null;
  }
}

/** Pausa (app em segundo plano) ou retoma todo o áudio gerado pelo jogo. */
export function setAudioActive(active: boolean) {
  audioPaused = !active;
  if (!audioCtx || audioCtx.state === "closed") return;
  const change = active ? audioCtx.resume() : audioCtx.suspend();
  change.catch(() => {});
}

// Simple correct-answer jingle using Web Audio API
export function playCorrectSound() {
  const ctx = getCtx();
  if (!ctx) return;
  try {
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 – happy chord arpeggio
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.4);
    });
  } catch {
    // Audio not supported – silent fallback
  }
}

// Wrong-answer buzzer sound
export function playWrongSound() {
  const ctx = getCtx();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(120, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.35);
  } catch {
    // Audio not supported – silent fallback
  }
}

// ---------- Speech ----------

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const v = window.speechSynthesis.getVoices();
  if (v.length > 0) cachedVoices = v;
}

/** Call on the home screen to pre-load voices before the first speech request. */
export function prewarmSpeech() {
  // No app nativo a fala vem do TTS do sistema: basta acordar o motor cedo,
  // para ele já estar conectado quando a primeira pergunta for falada.
  if (isNative) {
    TextToSpeech.getSupportedLanguages().catch(() => {});
    return;
  }
  if (!("speechSynthesis" in window)) return;
  try {
    loadVoices();
    if (cachedVoices.length === 0) {
      window.speechSynthesis.addEventListener("voiceschanged", loadVoices, { once: true });
    }
    // Speak a silent utterance to unlock the audio context on mobile
    const silent = new SpeechSynthesisUtterance(" ");
    silent.volume = 0;
    window.speechSynthesis.speak(silent);
  } catch {
    // Speech not available – silent fallback
  }
}

const SPEECH_TIMEOUT_MS = 15000;
const NATIVE_RETRY_MS = 800;

/** Encerra a promessa da fala em andamento (não a fala em si). */
let settleCurrentSpeech: (() => void) | null = null;

/**
 * Fala o texto e resolve quando a fala termina. A promessa SEMPRE resolve:
 * no fim da fala, em erro, ao ser interrompida por outra fala ou por
 * `stopSpeech()`, ou depois de `SPEECH_TIMEOUT_MS` — quem espera por ela
 * nunca fica preso. Uma fala nova interrompe a anterior.
 *
 * No app nativo usa o TTS do sistema (o WebView do Android não implementa
 * `speechSynthesis`); no navegador, a Web Speech API.
 */
export function speakText(text: string, lang: string = "pt-BR"): Promise<void> {
  settleCurrentSpeech?.();
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      if (settleCurrentSpeech === finish) settleCurrentSpeech = null;
      resolve();
    };
    const timer = setTimeout(finish, SPEECH_TIMEOUT_MS);
    settleCurrentSpeech = finish;

    try {
      if (isNative) {
        // A estratégia padrão do plugin descarta a fala anterior ao começar esta.
        // Logo depois de abrir o app o motor de TTS pode ainda não estar
        // conectado e a fala é recusada: tenta de novo enquanto esta fala
        // ainda for a atual (interrompida ou cancelada, `done` já é true).
        const attempt = (retriesLeft: number) => {
          TextToSpeech.speak({ text, lang, rate: 0.9, pitch: 1.2 }).then(finish, () => {
            if (done || retriesLeft <= 0) finish();
            else setTimeout(() => !done && attempt(retriesLeft - 1), NATIVE_RETRY_MS);
          });
        };
        attempt(2);
        return;
      }
      if (!("speechSynthesis" in window)) {
        finish();
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
      const langPrefix = lang.split("-")[0];
      const voice = voices.find((v) => v.lang.startsWith(langPrefix));
      if (voice) utterance.voice = voice;
      utterance.onend = finish;
      utterance.onerror = finish;
      window.speechSynthesis.speak(utterance);
    } catch {
      finish();
    }
  });
}

/** Interrompe a fala em andamento (sair do jogo, app em segundo plano). */
export function stopSpeech() {
  const settle = settleCurrentSpeech;
  settleCurrentSpeech = null;
  settle?.();
  try {
    if (isNative) {
      TextToSpeech.stop().catch(() => {});
    } else if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  } catch {
    // Fala indisponível – nada a interromper
  }
}

// ---------- Background Music (procedural, cheerful loop) ----------

/** Ganho da "sessão" de música atual; desligá-lo silencia as notas já agendadas. */
let bgGain: GainNode | null = null;
let bgInterval: ReturnType<typeof setInterval> | null = null;
let bgPlaying = false;

const MELODIES: { melody: number[]; bass: number[]; tempo: number; melodyType: OscillatorType; bassType: OscillatorType }[] = [
  {
    // Melody 1: Cheerful C major
    melody: [392, 440, 494, 523, 494, 440, 392, 330, 349, 392, 440, 494, 440, 392, 349, 330,
             262, 330, 392, 523, 494, 440, 392, 349, 330, 349, 392, 440, 392, 349, 330, 262],
    bass:   [131, 131, 165, 165, 175, 175, 131, 131, 131, 131, 165, 165, 175, 175, 131, 131,
             131, 131, 165, 165, 175, 175, 131, 131, 131, 131, 165, 165, 175, 175, 131, 131],
    tempo: 0.28, melodyType: "triangle", bassType: "sine",
  },
  {
    // Melody 2: Playful G major waltz
    melody: [392, 494, 587, 494, 392, 330, 294, 330, 392, 440, 523, 587, 523, 440, 392, 330,
             294, 392, 494, 587, 659, 587, 494, 392, 330, 392, 440, 494, 440, 392, 330, 294],
    bass:   [196, 196, 247, 247, 196, 196, 165, 165, 196, 196, 247, 247, 196, 196, 165, 165,
             147, 147, 196, 196, 247, 247, 196, 196, 165, 165, 196, 196, 147, 147, 165, 165],
    tempo: 0.30, melodyType: "sine", bassType: "triangle",
  },
  {
    // Melody 3: Bouncy F major
    melody: [349, 440, 523, 440, 349, 523, 659, 523, 349, 392, 440, 523, 587, 523, 440, 349,
             262, 349, 440, 523, 659, 523, 440, 349, 330, 349, 392, 440, 523, 440, 349, 262],
    bass:   [175, 175, 220, 220, 175, 175, 131, 131, 175, 175, 196, 196, 220, 220, 175, 175,
             131, 131, 175, 175, 220, 220, 175, 175, 165, 165, 196, 196, 220, 220, 131, 131],
    tempo: 0.25, melodyType: "triangle", bassType: "sine",
  },
  {
    // Melody 4: Gentle D major lullaby-like
    melody: [294, 330, 370, 440, 494, 440, 370, 330, 294, 370, 440, 494, 554, 494, 440, 370,
             294, 330, 370, 440, 554, 494, 440, 370, 330, 370, 440, 494, 440, 370, 330, 294],
    bass:   [147, 147, 185, 185, 220, 220, 147, 147, 147, 147, 185, 185, 220, 220, 147, 147,
             147, 147, 185, 185, 220, 220, 147, 147, 165, 165, 185, 185, 220, 220, 147, 147],
    tempo: 0.32, melodyType: "sine", bassType: "sine",
  },
];

let currentMelodyIndex = 0;

function playBgNote(
  ctx: AudioContext,
  out: GainNode,
  freq: number,
  time: number,
  duration: number,
  type: OscillatorType,
  volume: number,
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration * 0.95);
  osc.connect(gain).connect(out);
  osc.start(time);
  osc.stop(time + duration);
}

function scheduleMelodyLoop() {
  const ctx = audioCtx;
  const out = bgGain;
  if (!ctx || !out || !bgPlaying || ctx.state !== "running") return;
  try {
    const m = MELODIES[currentMelodyIndex];
    const noteDuration = m.tempo;
    const startTime = ctx.currentTime + 0.05;

    m.melody.forEach((freq, i) => {
      playBgNote(ctx, out, freq, startTime + i * noteDuration, noteDuration * 0.9, m.melodyType, 0.08);
    });

    m.bass.forEach((freq, i) => {
      playBgNote(ctx, out, freq, startTime + i * noteDuration, noteDuration * 0.9, m.bassType, 0.06);
    });
  } catch {
    // Audio not supported
  }
}

function restartLoop() {
  if (bgInterval) clearInterval(bgInterval);
  const m = MELODIES[currentMelodyIndex];
  const loopDuration = m.melody.length * m.tempo * 1000;
  scheduleMelodyLoop();
  bgInterval = setInterval(() => {
    if (bgPlaying) scheduleMelodyLoop();
  }, loopDuration);
}

/** Abre uma sessão de música nova; a anterior (se houver) some em 0,3 s. */
function openMusicSession(ctx: AudioContext) {
  const old = bgGain;
  if (old) {
    try {
      old.gain.setValueAtTime(old.gain.value, ctx.currentTime);
      old.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
    } catch {
      // Audio not supported
    }
    setTimeout(() => {
      try {
        old.disconnect();
      } catch {
        // already disconnected
      }
    }, 400);
  }
  bgGain = ctx.createGain();
  bgGain.gain.value = 1;
  bgGain.connect(ctx.destination);
}

export function startBackgroundMusic() {
  if (bgPlaying) return;
  const ctx = getCtx();
  if (!ctx) return;
  try {
    currentMelodyIndex = 0;
    openMusicSession(ctx);
    bgPlaying = true;
    // Um contexto recém-criado pode levar um instante até rodar.
    if (ctx.state === "running") restartLoop();
    else
      ctx
        .resume()
        .then(() => {
          if (bgPlaying) restartLoop();
        })
        .catch(() => {});
  } catch {
    // Audio not supported
  }
}

export function switchMelody() {
  if (!bgPlaying) return;
  const ctx = getCtx();
  if (!ctx) return;
  try {
    currentMelodyIndex = (currentMelodyIndex + 1) % MELODIES.length;
    openMusicSession(ctx);
    restartLoop();
  } catch {
    // Audio not supported
  }
}

export function stopBackgroundMusic() {
  bgPlaying = false;
  if (bgInterval) {
    clearInterval(bgInterval);
    bgInterval = null;
  }
  if (bgGain) {
    try {
      bgGain.disconnect();
    } catch {
      // already disconnected
    }
    bgGain = null;
  }
}

// Request fullscreen and lock orientation to portrait
export function enterFullscreen() {
  // No app nativo a tela e a orientação são da casca (manifesto do Android).
  if (isNative) return;
  try {
    // Skip fullscreen request when running as installed PWA (already fullscreen)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: fullscreen)").matches ||
      (navigator as any).standalone === true;
    if (isStandalone) return;

    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen()
        .then(() => {
          try {
            (screen.orientation as any)?.lock?.("portrait").catch(() => {});
          } catch {
            // orientation lock not supported
          }
        })
        .catch(() => {});
    }
  } catch {
    // fullscreen not supported
  }
}
