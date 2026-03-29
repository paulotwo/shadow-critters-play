// Simple correct-answer jingle using Web Audio API
export function playCorrectSound() {
  try {
    const ctx = new AudioContext();
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
  try {
    const ctx = new AudioContext();
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

// Speak text using Web Speech API – returns a promise that resolves when speech ends
export function speakText(text: string, lang: string = "pt-BR"): Promise<void> {
  return new Promise((resolve) => {
    try {
      if (!("speechSynthesis" in window)) { resolve(); return; }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      const voices = window.speechSynthesis.getVoices();
      const langPrefix = lang.split("-")[0];
      const voice = voices.find((v) => v.lang.startsWith(langPrefix));
      if (voice) utterance.voice = voice;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
      setTimeout(resolve, 15000);
    } catch {
      resolve();
    }
  });
}

// ---------- Background Music (procedural, cheerful loop) ----------

let bgCtx: AudioContext | null = null;
let bgGain: GainNode | null = null;
let bgInterval: ReturnType<typeof setInterval> | null = null;
let bgPlaying = false;

const MELODY_NOTES = [
  // A cheerful, child-friendly melody in C major (frequencies in Hz)
  392, 440, 494, 523, 494, 440, 392, 330,
  349, 392, 440, 494, 440, 392, 349, 330,
  262, 330, 392, 523, 494, 440, 392, 349,
  330, 349, 392, 440, 392, 349, 330, 262,
];

const BASS_NOTES = [
  131, 131, 165, 165, 175, 175, 131, 131,
  131, 131, 165, 165, 175, 175, 131, 131,
  131, 131, 165, 165, 175, 175, 131, 131,
  131, 131, 165, 165, 175, 175, 131, 131,
];

function playBgNote(ctx: AudioContext, freq: number, time: number, duration: number, type: OscillatorType, volume: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration * 0.95);
  osc.connect(gain).connect(bgGain!);
  osc.start(time);
  osc.stop(time + duration);
}

function scheduleMelodyLoop() {
  if (!bgCtx || !bgGain || !bgPlaying) return;
  const ctx = bgCtx;
  const noteDuration = 0.28;
  const startTime = ctx.currentTime + 0.05;

  MELODY_NOTES.forEach((freq, i) => {
    playBgNote(ctx, freq, startTime + i * noteDuration, noteDuration * 0.9, "triangle", 0.08);
  });

  BASS_NOTES.forEach((freq, i) => {
    playBgNote(ctx, freq, startTime + i * noteDuration, noteDuration * 0.9, "sine", 0.06);
  });
}

export function startBackgroundMusic() {
  if (bgPlaying) return;
  try {
    bgCtx = new AudioContext();
    bgGain = bgCtx.createGain();
    bgGain.gain.value = 1;
    bgGain.connect(bgCtx.destination);
    bgPlaying = true;
    scheduleMelodyLoop();
    const loopDuration = MELODY_NOTES.length * 0.28 * 1000;
    bgInterval = setInterval(() => {
      if (bgPlaying) scheduleMelodyLoop();
    }, loopDuration);
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
    try { bgGain.gain.setValueAtTime(0, bgCtx?.currentTime ?? 0); } catch {}
  }
  if (bgCtx) {
    try { bgCtx.close(); } catch {}
    bgCtx = null;
    bgGain = null;
  }
}

// Request fullscreen and lock orientation to portrait
export function enterFullscreen() {
  try {
    // Skip fullscreen request when running as installed PWA (already fullscreen)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: fullscreen)").matches ||
      (navigator as any).standalone === true;
    if (isStandalone) return;

    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().then(() => {
        try {
          (screen.orientation as any)?.lock?.("portrait").catch(() => {});
        } catch {}
      }).catch(() => {});
    }
  } catch {}
}
