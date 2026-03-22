import React from "react";
import type { DinoProps } from "./types";
import { shadowFill } from "./types";

export const Pachycephalosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="70" rx="22" ry="16" fill={isShadow ? shadowFill : "#CA8A04"} />
    <circle cx="80" cy="48" r="14" fill={isShadow ? shadowFill : "#EAB308"} />
    {/* Dome */}
    <ellipse cx="80" cy="38" rx="12" ry="8" fill={isShadow ? shadowFill : "#FDE047"} />
    <path d="M42,70 Q40,90 42,105" stroke={isShadow ? shadowFill : "#A16207"} strokeWidth="5" strokeLinecap="round" />
    <path d="M60,70 Q62,90 60,105" stroke={isShadow ? shadowFill : "#A16207"} strokeWidth="5" strokeLinecap="round" />
    <path d="M33,68 Q22,62 15,66" stroke={isShadow ? shadowFill : "#A16207"} strokeWidth="4" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="86" cy="46" r="2.5" fill="white" />
        <circle cx="87" cy="46" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Iguanodon: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="68" rx="26" ry="18" fill={isShadow ? shadowFill : "#16A34A"} />
    <circle cx="82" cy="48" r="14" fill={isShadow ? shadowFill : "#22C55E"} />
    <path d="M42,68 Q38,90 42,108" stroke={isShadow ? shadowFill : "#15803D"} strokeWidth="6" strokeLinecap="round" />
    <path d="M62,68 Q65,90 62,108" stroke={isShadow ? shadowFill : "#15803D"} strokeWidth="6" strokeLinecap="round" />
    <path d="M30,66 Q18,60 12,65" stroke={isShadow ? shadowFill : "#15803D"} strokeWidth="5" strokeLinecap="round" />
    {/* Thumb spike */}
    <path d="M72,52 L65,42" stroke={isShadow ? shadowFill : "#166534"} strokeWidth="3" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="88" cy="45" r="3" fill="white" />
        <circle cx="89" cy="45" r="1.5" fill="#1a1a2e" />
        <path d="M90,52 Q94,56 90,58" stroke="#166534" strokeWidth="1.5" fill="none" />
      </>
    )}
  </svg>
);

export const Compsognathus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="65" rx="16" ry="10" fill={isShadow ? shadowFill : "#84CC16"} />
    <circle cx="78" cy="48" r="10" fill={isShadow ? shadowFill : "#A3E635"} />
    <rect x="84" y="45" width="10" height="5" rx="2" fill={isShadow ? shadowFill : "#A3E635"} />
    <path d="M50,65 Q48,80 50,95" stroke={isShadow ? shadowFill : "#65A30D"} strokeWidth="3" strokeLinecap="round" />
    <path d="M58,65 Q60,80 58,95" stroke={isShadow ? shadowFill : "#65A30D"} strokeWidth="3" strokeLinecap="round" />
    <path d="M39,63 Q28,58 22,62" stroke={isShadow ? shadowFill : "#65A30D"} strokeWidth="3" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="82" cy="46" r="2" fill="white" />
        <circle cx="83" cy="46" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Carnotaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="70" rx="24" ry="18" fill={isShadow ? shadowFill : "#9F1239"} />
    <circle cx="82" cy="45" r="16" fill={isShadow ? shadowFill : "#E11D48"} />
    <rect x="90" y="42" width="14" height="8" rx="3" fill={isShadow ? shadowFill : "#E11D48"} />
    {/* Horns */}
    <line x1="74" y1="35" x2="68" y2="22" stroke={isShadow ? shadowFill : "#881337"} strokeWidth="4" strokeLinecap="round" />
    <line x1="90" y1="35" x2="96" y2="22" stroke={isShadow ? shadowFill : "#881337"} strokeWidth="4" strokeLinecap="round" />
    {/* Tiny arms */}
    <path d="M70,55 Q66,58 68,62" stroke={isShadow ? shadowFill : "#9F1239"} strokeWidth="3" strokeLinecap="round" />
    <path d="M42,70 Q40,90 42,108" stroke={isShadow ? shadowFill : "#881337"} strokeWidth="6" strokeLinecap="round" />
    <path d="M62,70 Q64,90 62,108" stroke={isShadow ? shadowFill : "#881337"} strokeWidth="6" strokeLinecap="round" />
    <path d="M31,68 Q20,62 14,68" stroke={isShadow ? shadowFill : "#881337"} strokeWidth="5" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="88" cy="42" r="3" fill="white" />
        <circle cx="89" cy="42" r="1.5" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Dilophosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="68" rx="22" ry="16" fill={isShadow ? shadowFill : "#7E22CE"} />
    <circle cx="80" cy="45" r="14" fill={isShadow ? shadowFill : "#A855F7"} />
    {/* Double crests */}
    <path d="M75,36 Q72,18 78,15" fill={isShadow ? shadowFill : "#C084FC"} stroke={isShadow ? shadowFill : "#C084FC"} strokeWidth="2" />
    <path d="M82,36 Q85,18 80,15" fill={isShadow ? shadowFill : "#D8B4FE"} stroke={isShadow ? shadowFill : "#D8B4FE"} strokeWidth="2" />
    <rect x="88" y="42" width="12" height="7" rx="2" fill={isShadow ? shadowFill : "#A855F7"} />
    <path d="M42,68 Q40,88 42,105" stroke={isShadow ? shadowFill : "#6B21A8"} strokeWidth="5" strokeLinecap="round" />
    <path d="M60,68 Q62,88 60,105" stroke={isShadow ? shadowFill : "#6B21A8"} strokeWidth="5" strokeLinecap="round" />
    <path d="M33,66 Q22,60 15,65" stroke={isShadow ? shadowFill : "#6B21A8"} strokeWidth="4" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="86" cy="42" r="2.5" fill="white" />
        <circle cx="87" cy="42" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Apatosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="80" rx="30" ry="18" fill={isShadow ? shadowFill : "#0369A1"} />
    <path d="M78,72 Q92,45 90,22" stroke={isShadow ? shadowFill : "#0284C7"} strokeWidth="11" strokeLinecap="round" fill="none" />
    <circle cx="90" cy="20" r="9" fill={isShadow ? shadowFill : "#38BDF8"} />
    <path d="M25,80 Q12,75 8,82" stroke={isShadow ? shadowFill : "#075985"} strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M40,92 Q38,104 40,114" stroke={isShadow ? shadowFill : "#075985"} strokeWidth="6" strokeLinecap="round" />
    <path d="M52,94 Q50,106 52,114" stroke={isShadow ? shadowFill : "#075985"} strokeWidth="6" strokeLinecap="round" />
    <path d="M62,94 Q63,106 62,114" stroke={isShadow ? shadowFill : "#075985"} strokeWidth="6" strokeLinecap="round" />
    <path d="M72,92 Q74,104 72,114" stroke={isShadow ? shadowFill : "#075985"} strokeWidth="6" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="94" cy="18" r="2" fill="white" />
        <circle cx="95" cy="18" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Plesiosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="75" rx="32" ry="18" fill={isShadow ? shadowFill : "#0E7490"} />
    {/* Long neck */}
    <path d="M80,68 Q95,40 88,20" stroke={isShadow ? shadowFill : "#06B6D4"} strokeWidth="8" strokeLinecap="round" fill="none" />
    <circle cx="88" cy="18" r="8" fill={isShadow ? shadowFill : "#22D3EE"} />
    {/* Flippers */}
    <ellipse cx="38" cy="82" rx="14" ry="5" fill={isShadow ? shadowFill : "#155E75"} transform="rotate(-20,38,82)" />
    <ellipse cx="72" cy="82" rx="14" ry="5" fill={isShadow ? shadowFill : "#155E75"} transform="rotate(20,72,82)" />
    {/* Tail */}
    <path d="M23,75 Q12,70 8,76" stroke={isShadow ? shadowFill : "#155E75"} strokeWidth="5" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="92" cy="16" r="2" fill="white" />
        <circle cx="93" cy="16" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Mosasaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="62" rx="34" ry="16" fill={isShadow ? shadowFill : "#1E40AF"} />
    <circle cx="92" cy="55" r="12" fill={isShadow ? shadowFill : "#2563EB"} />
    <rect x="98" y="52" width="16" height="8" rx="3" fill={isShadow ? shadowFill : "#2563EB"} />
    {/* Flippers */}
    <ellipse cx="42" cy="74" rx="12" ry="5" fill={isShadow ? shadowFill : "#1E3A8A"} transform="rotate(-15,42,74)" />
    <ellipse cx="68" cy="74" rx="12" ry="5" fill={isShadow ? shadowFill : "#1E3A8A"} transform="rotate(15,68,74)" />
    {/* Tail fin */}
    <polygon points="21,62 8,52 8,72" fill={isShadow ? shadowFill : "#1E3A8A"} />
    {!isShadow && (
      <>
        <circle cx="97" cy="52" r="2.5" fill="white" />
        <circle cx="98" cy="52" r="1.2" fill="#1a1a2e" />
        <path d="M106,56 L114,55" stroke="#1E3A8A" strokeWidth="1" />
        <path d="M106,58 L112,59" stroke="#1E3A8A" strokeWidth="1" />
      </>
    )}
  </svg>
);

export const Dimetrodon: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="55" cy="75" rx="26" ry="14" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Sail fin */}
    <path d="M30,62 Q45,22 70,62" fill={isShadow ? shadowFill : "#F97316"} />
    {/* Head */}
    <circle cx="84" cy="68" r="12" fill={isShadow ? shadowFill : "#D97706"} />
    <rect x="90" y="65" width="14" height="7" rx="2" fill={isShadow ? shadowFill : "#D97706"} />
    {/* Legs */}
    <path d="M38,82 Q34,92 38,100" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="5" strokeLinecap="round" />
    <path d="M65,82 Q68,92 65,100" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="5" strokeLinecap="round" />
    <path d="M30,74 Q20,70 14,74" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="4" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="89" cy="65" r="2.5" fill="white" />
        <circle cx="90" cy="65" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Archaeopteryx: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    <ellipse cx="58" cy="62" rx="16" ry="12" fill={isShadow ? shadowFill : "#059669"} />
    <circle cx="78" cy="42" r="10" fill={isShadow ? shadowFill : "#10B981"} />
    <polygon points="84,40 95,36 88,44" fill={isShadow ? shadowFill : "#047857"} />
    {/* Feathered wings */}
    <path d="M50,55 Q25,35 15,45 Q25,48 42,58" fill={isShadow ? shadowFill : "#34D399"} />
    <path d="M66,55 Q90,35 100,45 Q88,48 72,58" fill={isShadow ? shadowFill : "#34D399"} />
    {/* Tail feathers */}
    <path d="M42,68 Q25,80 18,88" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="3" strokeLinecap="round" />
    <path d="M42,70 Q22,85 15,92" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="3" strokeLinecap="round" />
    <path d="M42,72 Q28,88 22,95" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="3" strokeLinecap="round" />
    {/* Legs */}
    <path d="M52,72 Q50,85 52,95" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="3" strokeLinecap="round" />
    <path d="M62,72 Q63,85 62,95" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="3" strokeLinecap="round" />
    {!isShadow && (
      <>
        <circle cx="82" cy="40" r="2" fill="white" />
        <circle cx="83" cy="40" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);
