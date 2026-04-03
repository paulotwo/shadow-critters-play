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

// ---------- Speech API voice cache ----------

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const v = window.speechSynthesis.getVoices();
  if (v.length > 0) cachedVoices = v;
}

/** Call on the home screen to pre-load voices before the first speech request. */
export function prewarmSpeech() {
  if (!("speechSynthesis" in window)) return;
  loadVoices();
  if (cachedVoices.length === 0) {
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices, { once: true });
  }
  // Speak a silent utterance to unlock the audio context on mobile
  const silent = new SpeechSynthesisUtterance(" ");
  silent.volume = 0;
  window.speechSynthesis.speak(silent);
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
      const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
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
  const m = MELODIES[currentMelodyIndex];
  const noteDuration = m.tempo;
  const startTime = ctx.currentTime + 0.05;

  m.melody.forEach((freq, i) => {
    playBgNote(ctx, freq, startTime + i * noteDuration, noteDuration * 0.9, m.melodyType, 0.08);
  });

  m.bass.forEach((freq, i) => {
    playBgNote(ctx, freq, startTime + i * noteDuration, noteDuration * 0.9, m.bassType, 0.06);
  });
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

export function startBackgroundMusic() {
  if (bgPlaying) return;
  try {
    currentMelodyIndex = 0;
    bgCtx = new AudioContext();
    bgGain = bgCtx.createGain();
    bgGain.gain.value = 1;
    bgGain.connect(bgCtx.destination);
    bgPlaying = true;
    restartLoop();
  } catch {
    // Audio not supported
  }
}

export function switchMelody() {
  if (!bgPlaying) return;
  currentMelodyIndex = (currentMelodyIndex + 1) % MELODIES.length;

  // Close old context to stop all scheduled notes, then create a fresh one
  if (bgInterval) { clearInterval(bgInterval); bgInterval = null; }
  const oldCtx = bgCtx;
  const oldGain = bgGain;
  if (oldGain && oldCtx) {
    try { oldGain.gain.linearRampToValueAtTime(0, oldCtx.currentTime + 0.3); } catch {}
    setTimeout(() => { try { oldCtx.close(); } catch {} }, 400);
  }

  try {
    bgCtx = new AudioContext();
    bgGain = bgCtx.createGain();
    bgGain.gain.value = 1;
    bgGain.connect(bgCtx.destination);
    restartLoop();
  } catch {}
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
