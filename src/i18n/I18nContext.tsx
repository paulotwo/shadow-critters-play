import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
import { translations, type Locale, type Translations } from "./translations";

const SITE_URL = "https://shadow-critters-play.lovable.app";

function updatePreviewMeta(locale: Locale) {
  if (typeof document === "undefined") return;
  const url = `${SITE_URL}/og/preview-${locale}.png`;
  const selectors: Array<[string, string]> = [
    ["meta[property='og:image']", "content"],
    ["meta[property='og:image:secure_url']", "content"],
    ["meta[name='twitter:image']", "content"],
  ];
  for (const [sel, attr] of selectors) {
    const el = document.querySelector(sel);
    if (el) el.setAttribute(attr, url);
  }
  document.documentElement.setAttribute("lang", locale === "pt" ? "pt-BR" : locale);
}

const STORAGE_KEY = "shadow-game-locale";

function detectLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en" || saved === "es" || saved === "fr" || saved === "it" || saved === "de") return saved;
  const browserLang = navigator.language || (navigator as any).userLanguage || "en";
  if (browserLang.startsWith("pt")) return "pt";
  if (browserLang.startsWith("es")) return "es";
  if (browserLang.startsWith("fr")) return "fr";
  if (browserLang.startsWith("it")) return "it";
  if (browserLang.startsWith("de")) return "de";
  return "en";
}

const SPEECH_LANGS: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  it: "it-IT",
  de: "de-DE",
};

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  speechLang: string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  useEffect(() => {
    updatePreviewMeta(locale);
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    t: translations[locale],
    setLocale,
    speechLang: SPEECH_LANGS[locale],
  }), [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
