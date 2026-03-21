import React from "react";
import type { AnimalProps } from "./types";
import { shadowFill } from "./types";

export const Lion: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Mane */}
    <circle cx="60" cy="52" r="38" fill={isShadow ? shadowFill : "#D97706"} />
    {/* Head */}
    <circle cx="60" cy="55" r="26" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Body */}
    <ellipse cx="60" cy="95" rx="22" ry="18" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Tail */}
    <path d="M82,90 Q100,75 95,65" stroke={isShadow ? shadowFill : "#D97706"} strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="95" cy="65" r="5" fill={isShadow ? shadowFill : "#92400E"} />
    {!isShadow && (
      <>
        <ellipse cx="48" cy="50" rx="5" ry="5.5" fill="white" />
        <ellipse cx="72" cy="50" rx="5" ry="5.5" fill="white" />
        <circle cx="49" cy="51" r="3" fill="#1a1a2e" />
        <circle cx="73" cy="51" r="3" fill="#1a1a2e" />
        <ellipse cx="60" cy="62" rx="5" ry="4" fill="#F59E0B" />
        <circle cx="60" cy="61" r="3" fill="#1a1a2e" />
        <path d="M55,68 Q60,73 65,68" stroke="#92400E" strokeWidth="1.5" fill="none" />
        <line x1="25" y1="48" x2="42" y2="52" stroke="#B45309" strokeWidth="1.5" />
        <line x1="25" y1="55" x2="42" y2="56" stroke="#B45309" strokeWidth="1.5" />
        <line x1="78" y1="52" x2="95" y2="48" stroke="#B45309" strokeWidth="1.5" />
        <line x1="78" y1="56" x2="95" y2="55" stroke="#B45309" strokeWidth="1.5" />
      </>
    )}
  </svg>
);

export const Turtle: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Shell */}
    <ellipse cx="60" cy="60" rx="36" ry="28" fill={isShadow ? shadowFill : "#059669"} />
    {/* Shell pattern */}
    <ellipse cx="60" cy="55" rx="24" ry="18" fill={isShadow ? shadowFill : "#10B981"} />
    {/* Head */}
    <circle cx="98" cy="62" r="14" fill={isShadow ? shadowFill : "#6EE7B7"} />
    {/* Legs */}
    <ellipse cx="38" cy="82" rx="8" ry="6" fill={isShadow ? shadowFill : "#6EE7B7"} />
    <ellipse cx="78" cy="82" rx="8" ry="6" fill={isShadow ? shadowFill : "#6EE7B7"} />
    <ellipse cx="35" cy="42" rx="7" ry="5" fill={isShadow ? shadowFill : "#6EE7B7"} />
    <ellipse cx="80" cy="42" rx="7" ry="5" fill={isShadow ? shadowFill : "#6EE7B7"} />
    {/* Tail */}
    <path d="M24,65 L14,62" stroke={isShadow ? shadowFill : "#6EE7B7"} strokeWidth="4" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="103" cy="58" r="3" fill="white" />
        <circle cx="104" cy="59" r="1.5" fill="#1a1a2e" />
        <path d="M108,65 Q112,67 108,69" stroke="#047857" strokeWidth="1.5" fill="none" />
        <path d="M48,50 Q55,45 62,50" stroke="#047857" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M55,55 Q60,60 65,55" stroke="#047857" strokeWidth="1.5" fill="none" opacity="0.5" />
      </>
    )}
  </svg>
);

export const Butterfly: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Wings */}
    <ellipse cx="35" cy="42" rx="24" ry="20" fill={isShadow ? shadowFill : "#C084FC"} transform="rotate(-15,35,42)" />
    <ellipse cx="85" cy="42" rx="24" ry="20" fill={isShadow ? shadowFill : "#C084FC"} transform="rotate(15,85,42)" />
    <ellipse cx="32" cy="72" rx="18" ry="16" fill={isShadow ? shadowFill : "#F0ABFC"} transform="rotate(-10,32,72)" />
    <ellipse cx="88" cy="72" rx="18" ry="16" fill={isShadow ? shadowFill : "#F0ABFC"} transform="rotate(10,88,72)" />
    {/* Body */}
    <ellipse cx="60" cy="58" rx="6" ry="28" fill={isShadow ? shadowFill : "#7C3AED"} />
    {/* Antennae */}
    <path d="M57,32 Q50,18 45,14" stroke={isShadow ? shadowFill : "#7C3AED"} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M63,32 Q70,18 75,14" stroke={isShadow ? shadowFill : "#7C3AED"} strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="45" cy="14" r="3" fill={isShadow ? shadowFill : "#A855F7"} />
    <circle cx="75" cy="14" r="3" fill={isShadow ? shadowFill : "#A855F7"} />
    {!isShadow && (
      <>
        <circle cx="35" cy="40" r="8" fill="#E879F9" opacity="0.6" />
        <circle cx="85" cy="40" r="8" fill="#E879F9" opacity="0.6" />
        <circle cx="32" cy="70" r="6" fill="#D946EF" opacity="0.5" />
        <circle cx="88" cy="70" r="6" fill="#D946EF" opacity="0.5" />
        <circle cx="57" cy="45" r="2" fill="white" />
        <circle cx="63" cy="45" r="2" fill="white" />
        <circle cx="58" cy="46" r="1" fill="#1a1a2e" />
        <circle cx="64" cy="46" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Frog: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <ellipse cx="60" cy="72" rx="32" ry="24" fill={isShadow ? shadowFill : "#22C55E"} />
    {/* Head */}
    <ellipse cx="60" cy="48" rx="28" ry="22" fill={isShadow ? shadowFill : "#4ADE80"} />
    {/* Eyes (bulging) */}
    <circle cx="42" cy="32" r="12" fill={isShadow ? shadowFill : "#4ADE80"} />
    <circle cx="78" cy="32" r="12" fill={isShadow ? shadowFill : "#4ADE80"} />
    {/* Front legs */}
    <path d="M32,85 Q20,95 18,100" stroke={isShadow ? shadowFill : "#16A34A"} strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M88,85 Q100,95 102,100" stroke={isShadow ? shadowFill : "#16A34A"} strokeWidth="5" strokeLinecap="round" fill="none" />
    {!isShadow && (
      <>
        <circle cx="42" cy="30" r="7" fill="white" />
        <circle cx="78" cy="30" r="7" fill="white" />
        <circle cx="43" cy="31" r="4" fill="#1a1a2e" />
        <circle cx="79" cy="31" r="4" fill="#1a1a2e" />
        <path d="M48,55 Q60,62 72,55" stroke="#15803D" strokeWidth="2" fill="none" />
        <circle cx="50" cy="60" r="4" fill="#F472B6" opacity="0.4" />
        <circle cx="70" cy="60" r="4" fill="#F472B6" opacity="0.4" />
      </>
    )}
  </svg>
);

export const Horse: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <ellipse cx="60" cy="70" rx="32" ry="22" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Neck */}
    <path d="M40,55 Q35,30 40,20" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="18" strokeLinecap="round" fill="none" />
    {/* Head */}
    <ellipse cx="42" cy="22" rx="18" ry="14" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Ears */}
    <polygon points="34,10 38,2 42,12" fill={isShadow ? shadowFill : "#78350F"} />
    <polygon points="46,12 50,2 54,10" fill={isShadow ? shadowFill : "#78350F"} />
    {/* Legs */}
    <line x1="42" y1="88" x2="40" y2="112" stroke={isShadow ? shadowFill : "#78350F"} strokeWidth="6" strokeLinecap="round" />
    <line x1="55" y1="90" x2="53" y2="112" stroke={isShadow ? shadowFill : "#78350F"} strokeWidth="6" strokeLinecap="round" />
    <line x1="68" y1="90" x2="70" y2="112" stroke={isShadow ? shadowFill : "#78350F"} strokeWidth="6" strokeLinecap="round" />
    <line x1="80" y1="88" x2="82" y2="112" stroke={isShadow ? shadowFill : "#78350F"} strokeWidth="6" strokeLinecap="round" />
    {/* Mane */}
    <path d="M36,18 Q30,30 34,45 Q28,35 32,50" stroke={isShadow ? shadowFill : "#451A03"} strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Tail */}
    <path d="M90,65 Q105,55 100,45" stroke={isShadow ? shadowFill : "#451A03"} strokeWidth="4" strokeLinecap="round" fill="none" />
    {!isShadow && (
      <>
        <circle cx="36" cy="20" r="3" fill="white" />
        <circle cx="37" cy="21" r="1.5" fill="#1a1a2e" />
        <ellipse cx="30" cy="28" rx="4" ry="3" fill="#B45309" />
        <circle cx="29" cy="27" r="1.5" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Owl: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <ellipse cx="60" cy="68" rx="30" ry="32" fill={isShadow ? shadowFill : "#78350F"} />
    {/* Head */}
    <circle cx="60" cy="40" r="24" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Ear tufts */}
    <polygon points="38,22 42,8 48,24" fill={isShadow ? shadowFill : "#78350F"} />
    <polygon points="72,24 78,8 82,22" fill={isShadow ? shadowFill : "#78350F"} />
    {/* Wings */}
    <ellipse cx="30" cy="70" rx="14" ry="24" fill={isShadow ? shadowFill : "#6B2F0A"} transform="rotate(10,30,70)" />
    <ellipse cx="90" cy="70" rx="14" ry="24" fill={isShadow ? shadowFill : "#6B2F0A"} transform="rotate(-10,90,70)" />
    {/* Feet */}
    <path d="M48,98 L42,108 M48,98 L48,108 M48,98 L54,108" stroke={isShadow ? shadowFill : "#D97706"} strokeWidth="3" strokeLinecap="round" />
    <path d="M72,98 L66,108 M72,98 L72,108 M72,98 L78,108" stroke={isShadow ? shadowFill : "#D97706"} strokeWidth="3" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="48" cy="38" r="10" fill="#FDE68A" />
        <circle cx="72" cy="38" r="10" fill="#FDE68A" />
        <circle cx="48" cy="38" r="6" fill="white" />
        <circle cx="72" cy="38" r="6" fill="white" />
        <circle cx="49" cy="39" r="4" fill="#1a1a2e" />
        <circle cx="73" cy="39" r="4" fill="#1a1a2e" />
        <circle cx="50" cy="37" r="1.5" fill="white" />
        <circle cx="74" cy="37" r="1.5" fill="white" />
        <polygon points="57,46 60,52 63,46" fill="#D97706" />
        <ellipse cx="60" cy="75" rx="14" ry="16" fill="#B45309" />
        <path d="M52,70 Q56,66 60,70 Q64,66 68,70" stroke="#92400E" strokeWidth="1.5" fill="none" />
        <path d="M50,76 Q54,72 58,76 Q62,72 66,76" stroke="#92400E" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Penguin: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <ellipse cx="60" cy="65" rx="28" ry="35" fill={isShadow ? shadowFill : "#1E293B"} />
    {/* Head */}
    <circle cx="60" cy="32" r="20" fill={isShadow ? shadowFill : "#1E293B"} />
    {/* Belly */}
    <ellipse cx="60" cy="72" rx="18" ry="24" fill={isShadow ? shadowFill : "#F8FAFC"} />
    {/* Wings */}
    <ellipse cx="30" cy="65" rx="10" ry="20" fill={isShadow ? shadowFill : "#334155"} transform="rotate(15,30,65)" />
    <ellipse cx="90" cy="65" rx="10" ry="20" fill={isShadow ? shadowFill : "#334155"} transform="rotate(-15,90,65)" />
    {/* Feet */}
    <ellipse cx="48" cy="100" rx="10" ry="5" fill={isShadow ? shadowFill : "#F97316"} />
    <ellipse cx="72" cy="100" rx="10" ry="5" fill={isShadow ? shadowFill : "#F97316"} />
    {/* Beak */}
    <polygon points="55,38 60,46 65,38" fill={isShadow ? shadowFill : "#F97316"} />
    {!isShadow && (
      <>
        <circle cx="50" cy="30" r="4" fill="white" />
        <circle cx="70" cy="30" r="4" fill="white" />
        <circle cx="51" cy="31" r="2" fill="#1a1a2e" />
        <circle cx="71" cy="31" r="2" fill="#1a1a2e" />
        <circle cx="52" cy="29" r="0.8" fill="white" />
        <circle cx="72" cy="29" r="0.8" fill="white" />
      </>
    )}
  </svg>
);

export const Monkey: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Ears */}
    <circle cx="26" cy="45" r="14" fill={isShadow ? shadowFill : "#92400E"} />
    <circle cx="94" cy="45" r="14" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Head */}
    <circle cx="60" cy="48" r="28" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Body */}
    <ellipse cx="60" cy="90" rx="22" ry="20" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Tail */}
    <path d="M82,85 Q105,70 108,55 Q110,45 102,48" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="4" strokeLinecap="round" fill="none" />
    {!isShadow && (
      <>
        <circle cx="26" cy="45" r="8" fill="#FBBF24" />
        <circle cx="94" cy="45" r="8" fill="#FBBF24" />
        <ellipse cx="60" cy="55" rx="18" ry="14" fill="#FBBF24" />
        <ellipse cx="50" cy="42" rx="5" ry="5.5" fill="white" />
        <ellipse cx="70" cy="42" rx="5" ry="5.5" fill="white" />
        <circle cx="51" cy="43" r="3" fill="#1a1a2e" />
        <circle cx="71" cy="43" r="3" fill="#1a1a2e" />
        <ellipse cx="60" cy="55" rx="4" ry="3" fill="#78350F" />
        <path d="M54,60 Q60,66 66,60" stroke="#78350F" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Giraffe: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <ellipse cx="60" cy="85" rx="26" ry="18" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Neck */}
    <rect x="50" y="22" width="16" height="50" rx="8" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Head */}
    <ellipse cx="58" cy="20" rx="14" ry="12" fill={isShadow ? shadowFill : "#FCD34D"} />
    {/* Ossicones */}
    <line x1="50" y1="12" x2="48" y2="4" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="3" strokeLinecap="round" />
    <line x1="66" y1="12" x2="68" y2="4" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="3" strokeLinecap="round" />
    <circle cx="48" cy="4" r="3" fill={isShadow ? shadowFill : "#B45309"} />
    <circle cx="68" cy="4" r="3" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Legs */}
    <line x1="42" y1="98" x2="40" y2="116" stroke={isShadow ? shadowFill : "#D97706"} strokeWidth="5" strokeLinecap="round" />
    <line x1="55" y1="100" x2="54" y2="116" stroke={isShadow ? shadowFill : "#D97706"} strokeWidth="5" strokeLinecap="round" />
    <line x1="68" y1="100" x2="69" y2="116" stroke={isShadow ? shadowFill : "#D97706"} strokeWidth="5" strokeLinecap="round" />
    <line x1="80" y1="98" x2="82" y2="116" stroke={isShadow ? shadowFill : "#D97706"} strokeWidth="5" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="52" cy="18" r="3" fill="white" />
        <circle cx="64" cy="18" r="3" fill="white" />
        <circle cx="53" cy="19" r="1.5" fill="#1a1a2e" />
        <circle cx="65" cy="19" r="1.5" fill="#1a1a2e" />
        {/* Spots */}
        <circle cx="54" cy="38" r="4" fill="#B45309" opacity="0.6" />
        <circle cx="62" cy="48" r="3.5" fill="#B45309" opacity="0.6" />
        <circle cx="55" cy="58" r="4" fill="#B45309" opacity="0.6" />
        <circle cx="50" cy="82" r="5" fill="#B45309" opacity="0.5" />
        <circle cx="65" cy="78" r="4" fill="#B45309" opacity="0.5" />
        <circle cx="72" cy="88" r="4.5" fill="#B45309" opacity="0.5" />
      </>
    )}
  </svg>
);

export const Bear: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Ears */}
    <circle cx="32" cy="28" r="12" fill={isShadow ? shadowFill : "#78350F"} />
    <circle cx="88" cy="28" r="12" fill={isShadow ? shadowFill : "#78350F"} />
    {/* Head */}
    <circle cx="60" cy="45" r="28" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Body */}
    <ellipse cx="60" cy="88" rx="28" ry="24" fill={isShadow ? shadowFill : "#92400E"} />
    {!isShadow && (
      <>
        <circle cx="32" cy="28" r="7" fill="#B45309" />
        <circle cx="88" cy="28" r="7" fill="#B45309" />
        <ellipse cx="60" cy="55" rx="14" ry="10" fill="#D4A574" />
        <ellipse cx="48" cy="40" rx="5" ry="5.5" fill="white" />
        <ellipse cx="72" cy="40" rx="5" ry="5.5" fill="white" />
        <circle cx="49" cy="41" r="3" fill="#1a1a2e" />
        <circle cx="73" cy="41" r="3" fill="#1a1a2e" />
        <ellipse cx="60" cy="52" rx="5" ry="4" fill="#1a1a2e" />
        <path d="M55,58 Q60,64 65,58" stroke="#78350F" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Dolphin: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M20,60 Q40,35 70,40 Q100,45 105,60 Q100,75 70,72 Q40,70 20,60Z" fill={isShadow ? shadowFill : "#60A5FA"} />
    {/* Dorsal fin */}
    <polygon points="60,40 65,22 72,40" fill={isShadow ? shadowFill : "#3B82F6"} />
    {/* Tail */}
    <polygon points="18,55 5,45 8,60 5,75 18,65" fill={isShadow ? shadowFill : "#3B82F6"} />
    {/* Snout */}
    <path d="M105,58 L115,56 L105,62" fill={isShadow ? shadowFill : "#93C5FD"} />
    {/* Belly */}
    <path d="M35,63 Q60,78 95,63" fill={isShadow ? shadowFill : "#BFDBFE"} />
    {/* Flipper */}
    <ellipse cx="70" cy="68" rx="12" ry="5" fill={isShadow ? shadowFill : "#3B82F6"} transform="rotate(20,70,68)" />
    {!isShadow && (
      <>
        <circle cx="95" cy="52" r="3" fill="white" />
        <circle cx="96" cy="53" r="1.5" fill="#1a1a2e" />
        <path d="M104,58 Q107,60 104,62" stroke="#2563EB" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Snake: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - wavy */}
    <path d="M25,90 Q10,70 30,55 Q50,40 40,25 Q35,15 50,12 Q65,10 70,20 Q75,30 60,42 Q45,55 65,65 Q85,75 75,90 Q65,105 85,110"
      stroke={isShadow ? shadowFill : "#22C55E"} strokeWidth="14" strokeLinecap="round" fill="none" />
    {/* Head */}
    <circle cx="50" cy="12" r="10" fill={isShadow ? shadowFill : "#4ADE80"} />
    {!isShadow && (
      <>
        <circle cx="46" cy="10" r="3" fill="white" />
        <circle cx="54" cy="10" r="3" fill="white" />
        <circle cx="47" cy="11" r="1.5" fill="#1a1a2e" />
        <circle cx="55" cy="11" r="1.5" fill="#1a1a2e" />
        <path d="M48,17 L50,22 L52,17" stroke="#DC2626" strokeWidth="1.5" fill="none" />
        {/* Pattern */}
        <circle cx="35" cy="52" r="3" fill="#15803D" opacity="0.5" />
        <circle cx="55" cy="48" r="2.5" fill="#15803D" opacity="0.5" />
        <circle cx="60" cy="62" r="3" fill="#15803D" opacity="0.5" />
        <circle cx="75" cy="80" r="2.5" fill="#15803D" opacity="0.5" />
      </>
    )}
  </svg>
);

export const Bee: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Wings */}
    <ellipse cx="40" cy="35" rx="18" ry="12" fill={isShadow ? shadowFill : "#BFDBFE"} opacity={isShadow ? 1 : 0.6} transform="rotate(-20,40,35)" />
    <ellipse cx="80" cy="35" rx="18" ry="12" fill={isShadow ? shadowFill : "#BFDBFE"} opacity={isShadow ? 1 : 0.6} transform="rotate(20,80,35)" />
    {/* Body */}
    <ellipse cx="60" cy="60" rx="24" ry="20" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Stripes */}
    <rect x="36" y="52" width="48" height="6" rx="3" fill={isShadow ? shadowFill : "#1a1a2e"} />
    <rect x="38" y="64" width="44" height="6" rx="3" fill={isShadow ? shadowFill : "#1a1a2e"} />
    {/* Head */}
    <circle cx="60" cy="38" r="14" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Antennae */}
    <path d="M54,26 Q48,14 44,12" stroke={isShadow ? shadowFill : "#1a1a2e"} strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M66,26 Q72,14 76,12" stroke={isShadow ? shadowFill : "#1a1a2e"} strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="44" cy="12" r="3" fill={isShadow ? shadowFill : "#1a1a2e"} />
    <circle cx="76" cy="12" r="3" fill={isShadow ? shadowFill : "#1a1a2e"} />
    {/* Stinger */}
    <polygon points="60,80 57,88 63,88" fill={isShadow ? shadowFill : "#1a1a2e"} />
    {!isShadow && (
      <>
        <circle cx="54" cy="36" r="4" fill="white" />
        <circle cx="66" cy="36" r="4" fill="white" />
        <circle cx="55" cy="37" r="2" fill="#1a1a2e" />
        <circle cx="67" cy="37" r="2" fill="#1a1a2e" />
        <path d="M56,44 Q60,48 64,44" stroke="#92400E" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Pig: React.FC<AnimalProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Ears */}
    <ellipse cx="32" cy="32" rx="14" ry="12" fill={isShadow ? shadowFill : "#EC4899"} transform="rotate(-20,32,32)" />
    <ellipse cx="88" cy="32" rx="14" ry="12" fill={isShadow ? shadowFill : "#EC4899"} transform="rotate(20,88,32)" />
    {/* Head */}
    <circle cx="60" cy="50" r="30" fill={isShadow ? shadowFill : "#F9A8D4"} />
    {/* Body */}
    <ellipse cx="60" cy="90" rx="26" ry="20" fill={isShadow ? shadowFill : "#F9A8D4"} />
    {/* Snout */}
    <ellipse cx="60" cy="58" rx="14" ry="10" fill={isShadow ? shadowFill : "#F472B6"} />
    {/* Tail */}
    <path d="M86,85 Q95,80 92,72 Q90,66 96,68" stroke={isShadow ? shadowFill : "#EC4899"} strokeWidth="3" strokeLinecap="round" fill="none" />
    {!isShadow && (
      <>
        <ellipse cx="32" cy="32" rx="8" ry="7" fill="#F472B6" transform="rotate(-20,32,32)" />
        <ellipse cx="88" cy="32" rx="8" ry="7" fill="#F472B6" transform="rotate(20,88,32)" />
        <ellipse cx="48" cy="44" rx="5" ry="5.5" fill="white" />
        <ellipse cx="72" cy="44" rx="5" ry="5.5" fill="white" />
        <circle cx="49" cy="45" r="3" fill="#1a1a2e" />
        <circle cx="73" cy="45" r="3" fill="#1a1a2e" />
        <circle cx="55" cy="57" r="3" fill="#DB2777" />
        <circle cx="65" cy="57" r="3" fill="#DB2777" />
        <path d="M52,66 Q60,72 68,66" stroke="#BE185D" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);
