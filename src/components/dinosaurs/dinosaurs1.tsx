import React from "react";
import type { DinoProps } from "./types";
import { shadowFill } from "./types";

export const TRex: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="60" cy="75" rx="28" ry="22" fill={isShadow ? shadowFill : "#059669"} />
    <circle cx="80" cy="42" r="20" fill={isShadow ? shadowFill : "#10B981"} />
    <rect x="86" y="38" width="18" height="10" rx="3" fill={isShadow ? shadowFill : "#10B981"} />
    <path d="M55,75 Q45,100 50,110" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="6" strokeLinecap="round" />
    <path d="M65,75 Q70,100 65,110" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="6" strokeLinecap="round" />
    <path d="M32,72 Q20,68 18,75" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="5" strokeLinecap="round" />
    <ellipse cx="78" cy="58" rx="4" ry="2" fill={isShadow ? shadowFill : "#047857"} />
    <ellipse cx="85" cy="58" rx="4" ry="2" fill={isShadow ? shadowFill : "#047857"} />
    {!isShadow && (
      <>
        <circle cx="87" cy="38" r="4" fill="white" />
        <circle cx="88" cy="38" r="2" fill="#1a1a2e" />
        <path d="M96,44 L104,44" stroke="#047857" strokeWidth="1" />
        <path d="M96,46 L102,47" stroke="#047857" strokeWidth="1" />
        <path d="M96,48 L100,50" stroke="#047857" strokeWidth="1" />
      </>
    )}
  </svg>
);

export const Triceratops: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="70" rx="30" ry="22" fill={isShadow ? shadowFill : "#D97706"} />
    <circle cx="88" cy="55" r="18" fill={isShadow ? shadowFill : "#FBBF24"} />
    <ellipse cx="88" cy="42" rx="24" ry="12" fill={isShadow ? shadowFill : "#F59E0B"} />
    <line x1="100" y1="50" x2="112" y2="42" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="4" strokeLinecap="round" />
    <line x1="80" y1="36" x2="72" y2="24" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="3" strokeLinecap="round" />
    <line x1="96" y1="36" x2="100" y2="24" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="3" strokeLinecap="round" />
    <path d="M42,70 Q38,95 42,110" stroke={isShadow ? shadowFill : "#B45309"} strokeWidth="6" strokeLinecap="round" />
    <path d="M62,70 Q66,95 62,110" stroke={isShadow ? shadowFill : "#B45309"} strokeWidth="6" strokeLinecap="round" />
    <path d="M25,68 Q15,60 12,65" stroke={isShadow ? shadowFill : "#B45309"} strokeWidth="4" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="94" cy="52" r="3" fill="white" />
        <circle cx="95" cy="52" r="1.5" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Stegosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="72" rx="32" ry="20" fill={isShadow ? shadowFill : "#7C3AED"} />
    <circle cx="90" cy="60" r="14" fill={isShadow ? shadowFill : "#8B5CF6"} />
    {/* Plates on back */}
    <polygon points="35,52 40,32 45,52" fill={isShadow ? shadowFill : "#A78BFA"} />
    <polygon points="48,50 54,28 60,50" fill={isShadow ? shadowFill : "#A78BFA"} />
    <polygon points="62,52 67,35 72,52" fill={isShadow ? shadowFill : "#A78BFA"} />
    <polygon points="75,55 79,40 83,55" fill={isShadow ? shadowFill : "#A78BFA"} />
    {/* Legs */}
    <path d="M40,72 Q36,95 40,108" stroke={isShadow ? shadowFill : "#6D28D9"} strokeWidth="6" strokeLinecap="round" />
    <path d="M65,72 Q68,95 65,108" stroke={isShadow ? shadowFill : "#6D28D9"} strokeWidth="6" strokeLinecap="round" />
    {/* Tail spikes */}
    <line x1="23,68" x2="23" y1="68" y2="68" stroke="none" />
    <path d="M23,68 L10,58" stroke={isShadow ? shadowFill : "#C4B5FD"} strokeWidth="3" strokeLinecap="round" />
    <path d="M23,72 L8,72" stroke={isShadow ? shadowFill : "#C4B5FD"} strokeWidth="3" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="95" cy="57" r="2.5" fill="white" />
        <circle cx="96" cy="57" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Brachiosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="60" cy="85" rx="28" ry="18" fill={isShadow ? shadowFill : "#2563EB"} />
    <path d="M75,75 Q85,40 82,18" stroke={isShadow ? shadowFill : "#3B82F6"} strokeWidth="12" strokeLinecap="round" fill="none" />
    <circle cx="82" cy="16" r="10" fill={isShadow ? shadowFill : "#60A5FA"} />
    <path d="M45,85 Q42,100 45,112" stroke={isShadow ? shadowFill : "#1D4ED8"} strokeWidth="6" strokeLinecap="round" />
    <path d="M55,87 Q53,102 55,112" stroke={isShadow ? shadowFill : "#1D4ED8"} strokeWidth="6" strokeLinecap="round" />
    <path d="M65,87 Q67,102 65,112" stroke={isShadow ? shadowFill : "#1D4ED8"} strokeWidth="6" strokeLinecap="round" />
    <path d="M75,85 Q78,100 75,112" stroke={isShadow ? shadowFill : "#1D4ED8"} strokeWidth="6" strokeLinecap="round" />
    <path d="M32,82 Q20,78 15,82" stroke={isShadow ? shadowFill : "#1D4ED8"} strokeWidth="5" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="86" cy="14" r="2.5" fill="white" />
        <circle cx="87" cy="14" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Velociraptor: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="65" rx="20" ry="14" fill={isShadow ? shadowFill : "#DC2626"} />
    <circle cx="82" cy="45" r="14" fill={isShadow ? shadowFill : "#EF4444"} />
    <rect x="90" y="42" width="14" height="7" rx="2" fill={isShadow ? shadowFill : "#EF4444"} />
    <path d="M50,65 Q45,85 48,105" stroke={isShadow ? shadowFill : "#B91C1C"} strokeWidth="5" strokeLinecap="round" />
    <path d="M60,65 Q62,85 60,105" stroke={isShadow ? shadowFill : "#B91C1C"} strokeWidth="5" strokeLinecap="round" />
    <path d="M48,108 L42,102" stroke={isShadow ? shadowFill : "#991B1B"} strokeWidth="3" strokeLinecap="round" />
    <path d="M35,62 Q25,55 22,60" stroke={isShadow ? shadowFill : "#B91C1C"} strokeWidth="4" strokeLinecap="round" />
    <path d="M70,52 Q65,48 68,42" stroke={isShadow ? shadowFill : "#B91C1C"} strokeWidth="3" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="86" cy="42" r="3" fill="white" />
        <circle cx="87" cy="42" r="1.5" fill="#1a1a2e" />
        <path d="M98,46 L104,45" stroke="#991B1B" strokeWidth="1" />
        <path d="M98,48 L103,49" stroke="#991B1B" strokeWidth="1" />
      </>
    )}
  </svg>
);

export const Pteranodon: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <path d="M60,55 L10,40 Q30,55 60,60" fill={isShadow ? shadowFill : "#0891B2"} />
    <path d="M60,55 L110,40 Q90,55 60,60" fill={isShadow ? shadowFill : "#0891B2"} />
    <ellipse cx="60" cy="62" rx="12" ry="8" fill={isShadow ? shadowFill : "#06B6D4"} />
    <circle cx="68" cy="52" r="10" fill={isShadow ? shadowFill : "#22D3EE"} />
    <path d="M72,46 L85,35" stroke={isShadow ? shadowFill : "#06B6D4"} strokeWidth="3" strokeLinecap="round" />
    <polygon points="68,58 75,68 62,66" fill={isShadow ? shadowFill : "#0E7490"} />
    <path d="M55,68 Q55,80 50,88" stroke={isShadow ? shadowFill : "#0E7490"} strokeWidth="4" strokeLinecap="round" />
    <path d="M65,68 Q65,80 70,88" stroke={isShadow ? shadowFill : "#0E7490"} strokeWidth="4" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="72" cy="50" r="2.5" fill="white" />
        <circle cx="73" cy="50" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Ankylosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="65" rx="32" ry="18" fill={isShadow ? shadowFill : "#78716C"} />
    {/* Armor bumps */}
    <circle cx="40" cy="52" r="5" fill={isShadow ? shadowFill : "#A8A29E"} />
    <circle cx="55" cy="50" r="5" fill={isShadow ? shadowFill : "#A8A29E"} />
    <circle cx="70" cy="52" r="5" fill={isShadow ? shadowFill : "#A8A29E"} />
    <circle cx="48" cy="58" r="4" fill={isShadow ? shadowFill : "#A8A29E"} />
    <circle cx="62" cy="58" r="4" fill={isShadow ? shadowFill : "#A8A29E"} />
    {/* Head */}
    <circle cx="90" cy="62" r="12" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Club tail */}
    <path d="M23,65 L10,60" stroke={isShadow ? shadowFill : "#57534E"} strokeWidth="5" strokeLinecap="round" />
    <circle cx="8" cy="59" r="7" fill={isShadow ? shadowFill : "#44403C"} />
    {/* Legs */}
    <path d="M40,78 Q38,92 40,102" stroke={isShadow ? shadowFill : "#57534E"} strokeWidth="6" strokeLinecap="round" />
    <path d="M65,78 Q67,92 65,102" stroke={isShadow ? shadowFill : "#57534E"} strokeWidth="6" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="95" cy="59" r="2.5" fill="white" />
        <circle cx="96" cy="59" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Spinosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="72" rx="26" ry="18" fill={isShadow ? shadowFill : "#7C2D12"} />
    {/* Sail */}
    <path d="M35,55 Q45,20 55,55 Q65,18 75,55" fill={isShadow ? shadowFill : "#EA580C"} />
    {/* Head */}
    <circle cx="85" cy="55" r="12" fill={isShadow ? shadowFill : "#C2410C"} />
    <rect x="92" y="52" width="16" height="8" rx="3" fill={isShadow ? shadowFill : "#C2410C"} />
    {/* Legs */}
    <path d="M42,72 Q40,92 42,108" stroke={isShadow ? shadowFill : "#9A3412"} strokeWidth="6" strokeLinecap="round" />
    <path d="M62,72 Q64,92 62,108" stroke={isShadow ? shadowFill : "#9A3412"} strokeWidth="6" strokeLinecap="round" />
    {/* Tail */}
    <path d="M30,70 Q18,65 12,70" stroke={isShadow ? shadowFill : "#9A3412"} strokeWidth="5" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="90" cy="52" r="2.5" fill="white" />
        <circle cx="91" cy="52" r="1.2" fill="#1a1a2e" />
        <path d="M100,56 L108,56" stroke="#7C2D12" strokeWidth="1" />
        <path d="M100,58 L106,59" stroke="#7C2D12" strokeWidth="1" />
      </>
    )}
  </svg>
);

export const Parasaurolophus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="72" rx="26" ry="18" fill={isShadow ? shadowFill : "#0D9488"} />
    <circle cx="82" cy="52" r="14" fill={isShadow ? shadowFill : "#14B8A6"} />
    {/* Crest */}
    <path d="M82,42 Q78,20 60,15" stroke={isShadow ? shadowFill : "#2DD4BF"} strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <path d="M42,72 Q40,92 42,108" stroke={isShadow ? shadowFill : "#0F766E"} strokeWidth="6" strokeLinecap="round" />
    <path d="M62,72 Q64,92 62,108" stroke={isShadow ? shadowFill : "#0F766E"} strokeWidth="6" strokeLinecap="round" />
    {/* Tail */}
    <path d="M30,70 Q18,65 12,68" stroke={isShadow ? shadowFill : "#0F766E"} strokeWidth="5" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="88" cy="49" r="3" fill="white" />
        <circle cx="89" cy="49" r="1.5" fill="#1a1a2e" />
        <path d="M90,56 Q94,60 90,62" stroke="#0F766E" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Diplodocus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="78" rx="28" ry="16" fill={isShadow ? shadowFill : "#4F46E5"} />
    {/* Long neck */}
    <path d="M75,70 Q90,45 95,25" stroke={isShadow ? shadowFill : "#6366F1"} strokeWidth="10" strokeLinecap="round" fill="none" />
    <circle cx="95" cy="22" r="8" fill={isShadow ? shadowFill : "#818CF8"} />
    {/* Long tail */}
    <path d="M27,78 Q10,72 5,78 Q0,82 8,85" stroke={isShadow ? shadowFill : "#4338CA"} strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <path d="M42,88 Q40,100 42,112" stroke={isShadow ? shadowFill : "#3730A3"} strokeWidth="6" strokeLinecap="round" />
    <path d="M52,90 Q50,102 52,112" stroke={isShadow ? shadowFill : "#3730A3"} strokeWidth="6" strokeLinecap="round" />
    <path d="M62,90 Q63,102 62,112" stroke={isShadow ? shadowFill : "#3730A3"} strokeWidth="6" strokeLinecap="round" />
    <path d="M72,88 Q74,100 72,112" stroke={isShadow ? shadowFill : "#3730A3"} strokeWidth="6" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="98" cy="20" r="2" fill="white" />
        <circle cx="99" cy="20" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);
