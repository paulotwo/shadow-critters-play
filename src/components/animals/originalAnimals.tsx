import React from "react";
import type { AnimalProps } from "./types";
import { shadowFill } from "./types";

export const Cat: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <polygon points="25,45 35,15 50,40" fill={isShadow ? shadowFill : "#F59E0B"} />
    <polygon points="70,40 85,15 95,45" fill={isShadow ? shadowFill : "#F59E0B"} />
    <ellipse cx="60" cy="55" rx="35" ry="30" fill={isShadow ? shadowFill : "#FBBF24"} />
    <ellipse cx="60" cy="90" rx="28" ry="22" fill={isShadow ? shadowFill : "#FBBF24"} />
    <path d="M88,85 Q110,60 100,50" stroke={isShadow ? shadowFill : "#F59E0B"} strokeWidth="5" strokeLinecap="round" fill="none" />
    {!isShadow && (
      <>
        <ellipse cx="48" cy="50" rx="5" ry="6" fill="white" />
        <ellipse cx="72" cy="50" rx="5" ry="6" fill="white" />
        <circle cx="49" cy="51" r="3" fill="#1a1a2e" />
        <circle cx="73" cy="51" r="3" fill="#1a1a2e" />
        <polygon points="58,60 62,60 60,63" fill="#F472B6" />
        <line x1="20" y1="58" x2="45" y2="62" stroke="#92400E" strokeWidth="1.5" />
        <line x1="20" y1="65" x2="45" y2="65" stroke="#92400E" strokeWidth="1.5" />
        <line x1="75" y1="62" x2="100" y2="58" stroke="#92400E" strokeWidth="1.5" />
        <line x1="75" y1="65" x2="100" y2="65" stroke="#92400E" strokeWidth="1.5" />
        <path d="M56,66 Q60,72 64,66" stroke="#92400E" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Dog: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="30" cy="40" rx="14" ry="22" fill={isShadow ? shadowFill : "#92400E"} transform="rotate(-15,30,40)" />
    <ellipse cx="90" cy="40" rx="14" ry="22" fill={isShadow ? shadowFill : "#92400E"} transform="rotate(15,90,40)" />
    <ellipse cx="60" cy="55" rx="32" ry="28" fill={isShadow ? shadowFill : "#D97706"} />
    <ellipse cx="60" cy="92" rx="26" ry="20" fill={isShadow ? shadowFill : "#D97706"} />
    <ellipse cx="60" cy="65" rx="14" ry="10" fill={isShadow ? shadowFill : "#FDE68A"} />
    {!isShadow && (
      <>
        <ellipse cx="48" cy="48" rx="5" ry="5.5" fill="white" />
        <ellipse cx="72" cy="48" rx="5" ry="5.5" fill="white" />
        <circle cx="49" cy="49" r="3" fill="#1a1a2e" />
        <circle cx="73" cy="49" r="3" fill="#1a1a2e" />
        <ellipse cx="60" cy="62" rx="5" ry="4" fill="#1a1a2e" />
        <path d="M55,68 Q60,74 65,68" stroke="#92400E" strokeWidth="1.5" fill="none" />
        <ellipse cx="60" cy="74" rx="4" ry="5" fill="#F472B6" />
      </>
    )}
  </svg>
);

export const Elephant: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="22" cy="50" rx="18" ry="24" fill={isShadow ? shadowFill : "#7C9CBF"} />
    <ellipse cx="98" cy="50" rx="18" ry="24" fill={isShadow ? shadowFill : "#7C9CBF"} />
    <ellipse cx="60" cy="52" rx="34" ry="32" fill={isShadow ? shadowFill : "#93B5D0"} />
    <path d="M60,75 Q60,95 50,105" stroke={isShadow ? shadowFill : "#93B5D0"} strokeWidth="10" strokeLinecap="round" fill="none" />
    {!isShadow && (
      <>
        <ellipse cx="22" cy="50" rx="12" ry="16" fill="#B4D0E4" />
        <ellipse cx="98" cy="50" rx="12" ry="16" fill="#B4D0E4" />
        <ellipse cx="45" cy="44" rx="5" ry="5.5" fill="white" />
        <ellipse cx="75" cy="44" rx="5" ry="5.5" fill="white" />
        <circle cx="46" cy="45" r="3" fill="#1a1a2e" />
        <circle cx="76" cy="45" r="3" fill="#1a1a2e" />
        <path d="M48,68 Q44,78 46,82" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M72,68 Q76,78 74,82" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
      </>
    )}
  </svg>
);

export const Rabbit: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="42" cy="22" rx="8" ry="24" fill={isShadow ? shadowFill : "#E5E7EB"} />
    <ellipse cx="72" cy="22" rx="8" ry="24" fill={isShadow ? shadowFill : "#E5E7EB"} />
    <ellipse cx="57" cy="58" rx="28" ry="26" fill={isShadow ? shadowFill : "#F3F4F6"} />
    <ellipse cx="57" cy="92" rx="22" ry="20" fill={isShadow ? shadowFill : "#F3F4F6"} />
    {!isShadow && (
      <>
        <ellipse cx="42" cy="22" rx="4" ry="16" fill="#FECDD3" />
        <ellipse cx="72" cy="22" rx="4" ry="16" fill="#FECDD3" />
        <ellipse cx="46" cy="52" rx="5" ry="5.5" fill="white" />
        <ellipse cx="68" cy="52" rx="5" ry="5.5" fill="white" />
        <circle cx="47" cy="53" r="3" fill="#1a1a2e" />
        <circle cx="69" cy="53" r="3" fill="#1a1a2e" />
        <circle cx="47" cy="52" r="1" fill="white" />
        <circle cx="69" cy="52" r="1" fill="white" />
        <ellipse cx="57" cy="63" rx="3" ry="2.5" fill="#F9A8D4" />
        <path d="M52,67 Q57,72 62,67" stroke="#9CA3AF" strokeWidth="1.5" fill="none" />
        <circle cx="38" cy="62" r="5" fill="#FECDD3" opacity="0.5" />
        <circle cx="76" cy="62" r="5" fill="#FECDD3" opacity="0.5" />
        <rect x="54" y="69" width="3" height="4" rx="1" fill="white" />
        <rect x="58" y="69" width="3" height="4" rx="1" fill="white" />
      </>
    )}
  </svg>
);

export const Bird: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="60" cy="65" rx="28" ry="24" fill={isShadow ? shadowFill : "#60A5FA"} />
    <circle cx="60" cy="38" r="18" fill={isShadow ? shadowFill : "#3B82F6"} />
    <ellipse cx="35" cy="65" rx="18" ry="12" fill={isShadow ? shadowFill : "#2563EB"} transform="rotate(-20,35,65)" />
    <polygon points="85,70 110,55 108,75" fill={isShadow ? shadowFill : "#2563EB"} />
    <polygon points="60,42 72,38 60,34" fill={isShadow ? shadowFill : "#F97316"} />
    <line x1="50" y1="88" x2="45" y2="105" stroke={isShadow ? shadowFill : "#F97316"} strokeWidth="3" />
    <line x1="65" y1="88" x2="70" y2="105" stroke={isShadow ? shadowFill : "#F97316"} strokeWidth="3" />
    {!isShadow && (
      <>
        <circle cx="53" cy="34" r="4" fill="white" />
        <circle cx="54" cy="35" r="2" fill="#1a1a2e" />
        <ellipse cx="60" cy="72" rx="16" ry="14" fill="#BFDBFE" />
        <ellipse cx="60" cy="22" rx="4" ry="6" fill="#F97316" />
      </>
    )}
  </svg>
);

export const Fish: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="60" rx="35" ry="22" fill={isShadow ? shadowFill : "#F472B6"} />
    <polygon points="88,60 110,40 110,80" fill={isShadow ? shadowFill : "#EC4899"} />
    <polygon points="45,38 55,25 65,38" fill={isShadow ? shadowFill : "#EC4899"} />
    <polygon points="50,82 58,92 66,82" fill={isShadow ? shadowFill : "#EC4899"} />
    {!isShadow && (
      <>
        <circle cx="38" cy="55" r="5" fill="white" />
        <circle cx="39" cy="56" r="2.5" fill="#1a1a2e" />
        <path d="M50,50 Q55,55 50,60" stroke="#DB2777" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M58,48 Q63,53 58,58" stroke="#DB2777" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M66,50 Q71,55 66,60" stroke="#DB2777" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M54,58 Q59,63 54,68" stroke="#DB2777" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M62,56 Q67,61 62,66" stroke="#DB2777" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M22,58 Q25,62 22,66" stroke="#DB2777" strokeWidth="2" fill="none" />
        <circle cx="15" cy="48" r="3" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="40" r="2" stroke="#93C5FD" strokeWidth="1" fill="none" />
      </>
    )}
  </svg>
);
