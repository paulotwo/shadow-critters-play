import React from "react";
import type { DinoProps } from "./types";
import { shadowFill } from "./types";

export const Pachycephalosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M30,72 Q28,58 42,54 Q56,50 66,54 Q74,58 72,72 Q70,84 52,86 Q34,86 30,72Z" fill={isShadow ? shadowFill : "#CA8A04"} />
    {/* Neck */}
    <path d="M66,54 Q72,46 76,42 Q78,40 80,42 Q78,46 76,50 Q72,56 68,58" fill={isShadow ? shadowFill : "#EAB308"} />
    {/* Head with thick dome */}
    <path d="M76,40 Q80,34 86,32 Q92,32 96,36 Q98,40 96,44 Q92,48 86,48 Q80,46 76,42" fill={isShadow ? shadowFill : "#EAB308"} />
    {/* Dome - thick rounded top */}
    <path d="M80,34 Q82,24 88,22 Q94,24 96,32 Q94,34 88,34 Q82,34 80,34" fill={isShadow ? shadowFill : "#FDE047"} />
    {/* Bumpy ring around dome */}
    <circle cx="80" cy="36" r="2" fill={isShadow ? shadowFill : "#FBBF24"} />
    <circle cx="96" cy="36" r="2" fill={isShadow ? shadowFill : "#FBBF24"} />
    <circle cx="84" cy="32" r="1.5" fill={isShadow ? shadowFill : "#FBBF24"} />
    <circle cx="92" cy="32" r="1.5" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Legs */}
    <path d="M40,82 Q38,92 36,98 Q40,100 44,98 Q46,94 44,84" fill={isShadow ? shadowFill : "#A16207"} />
    <path d="M56,84 Q56,94 54,98 Q58,100 62,98 Q64,94 62,84" fill={isShadow ? shadowFill : "#A16207"} />
    {/* Tail */}
    <path d="M30,70 Q22,64 16,60 Q12,58 10,60 Q12,64 18,68 Q24,72 30,74" fill={isShadow ? shadowFill : "#A16207"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="90" cy="40" r="2" fill="white" />
        <circle cx="91" cy="40" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Iguanodon: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M26,72 Q24,58 38,52 Q52,48 64,52 Q74,56 74,72 Q72,86 54,90 Q34,90 26,72Z" fill={isShadow ? shadowFill : "#16A34A"} />
    {/* Neck */}
    <path d="M64,52 Q70,44 76,40 Q80,38 82,42 Q80,46 76,50 Q72,54 68,56" fill={isShadow ? shadowFill : "#22C55E"} />
    {/* Head */}
    <path d="M76,38 Q82,34 88,34 Q94,36 96,42 Q96,46 92,48 Q86,50 80,48 Q76,44 76,40" fill={isShadow ? shadowFill : "#22C55E"} />
    {/* Beak/snout */}
    <path d="M94,40 Q100,38 104,40 Q104,44 100,44 Q96,44 94,42" fill={isShadow ? shadowFill : "#166534"} />
    {/* Thumb spike - distinctive feature */}
    <path d="M62,60 Q58,56 54,52 L52,48" stroke={isShadow ? shadowFill : "#166534"} strokeWidth="3" strokeLinecap="round" />
    <path d="M52,48 L50,44" stroke={isShadow ? shadowFill : "#15803D"} strokeWidth="2.5" strokeLinecap="round" />
    {/* Legs */}
    <path d="M38,86 Q36,96 34,102 Q38,104 42,102 Q44,98 42,86" fill={isShadow ? shadowFill : "#15803D"} />
    <path d="M56,88 Q56,98 54,102 Q58,104 62,102 Q64,98 62,88" fill={isShadow ? shadowFill : "#15803D"} />
    {/* Tail */}
    <path d="M26,70 Q18,64 12,60 Q8,58 6,60 Q8,64 14,68 Q22,72 26,74" fill={isShadow ? shadowFill : "#15803D"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="90" cy="39" r="2.5" fill="white" />
        <circle cx="91" cy="39" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Compsognathus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - very small */}
    <path d="M42,66 Q40,56 50,52 Q58,50 64,54 Q68,58 66,66 Q64,74 54,76 Q44,76 42,66Z" fill={isShadow ? shadowFill : "#84CC16"} />
    {/* Neck - thin */}
    <path d="M64,54 Q70,46 74,40 Q76,38 78,40 Q76,44 74,48 Q70,54 66,56" fill={isShadow ? shadowFill : "#A3E635"} />
    {/* Head - small, pointed */}
    <path d="M74,38 Q78,34 84,34 Q90,36 92,40 Q92,44 88,44 Q84,44 80,42 Q76,40 74,38" fill={isShadow ? shadowFill : "#A3E635"} />
    {/* Snout */}
    <path d="M90,38 Q96,36 100,38 Q100,42 96,42 Q92,42 90,40" fill={isShadow ? shadowFill : "#65A30D"} />
    {/* Thin legs */}
    <path d="M48,74 Q46,84 44,90 Q48,92 52,90 Q52,86 50,76" fill={isShadow ? shadowFill : "#65A30D"} />
    <path d="M58,74 Q58,84 56,90 Q60,92 64,90 Q64,86 62,76" fill={isShadow ? shadowFill : "#65A30D"} />
    {/* Long thin tail */}
    <path d="M42,64 Q34,58 26,54 Q20,52 16,54 Q18,58 24,60 Q32,64 40,68" fill={isShadow ? shadowFill : "#84CC16"} />
    {/* Arms */}
    <path d="M62,58 Q58,60 56,58" stroke={isShadow ? shadowFill : "#65A30D"} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="86" cy="37" r="2" fill="white" />
        <circle cx="87" cy="37" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Carnotaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - muscular */}
    <path d="M28,72 Q26,56 42,52 Q56,48 68,52 Q78,56 76,72 Q74,86 54,88 Q34,88 28,72Z" fill={isShadow ? shadowFill : "#9F1239"} />
    {/* Head - broad, blunt */}
    <path d="M68,52 Q74,42 80,38 Q86,36 92,38 Q98,40 100,46 Q100,50 96,52 Q90,54 84,52 Q78,50 74,52" fill={isShadow ? shadowFill : "#E11D48"} />
    {/* Jaw */}
    <path d="M90,48 Q96,50 100,50 Q102,52 100,54 Q96,54 90,52Z" fill={isShadow ? shadowFill : "#881337"} />
    {/* Bull horns - distinctive! */}
    <path d="M82,38 L76,26 L80,32" fill={isShadow ? shadowFill : "#881337"} />
    <path d="M92,38 L98,26 L94,32" fill={isShadow ? shadowFill : "#881337"} />
    {/* Very tiny arms */}
    <path d="M66,58 Q64,60 62,58" stroke={isShadow ? shadowFill : "#9F1239"} strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Legs - muscular */}
    <path d="M40,84 Q38,94 36,100 Q40,102 44,100 Q46,96 44,86" fill={isShadow ? shadowFill : "#881337"} />
    <path d="M56,86 Q56,96 54,100 Q58,102 62,100 Q64,96 62,86" fill={isShadow ? shadowFill : "#881337"} />
    {/* Tail */}
    <path d="M28,70 Q20,64 14,60 Q8,58 6,60 Q8,64 14,68 Q22,72 28,74" fill={isShadow ? shadowFill : "#9F1239"} />
    {/* Scaly texture */}
    {!isShadow && (
      <>
        <circle cx="45" cy="66" r="1.5" fill="#BE123C" opacity="0.4" />
        <circle cx="55" cy="62" r="1.5" fill="#BE123C" opacity="0.4" />
        <circle cx="50" cy="72" r="1.5" fill="#BE123C" opacity="0.4" />
      </>
    )}
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="90" cy="42" r="2.5" fill="#FDE047" />
        <circle cx="91" cy="42" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Dilophosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M30,72 Q28,58 42,54 Q56,50 66,54 Q74,58 72,72 Q70,84 52,86 Q34,86 30,72Z" fill={isShadow ? shadowFill : "#7E22CE"} />
    {/* Neck */}
    <path d="M66,54 Q72,46 76,40 Q78,38 80,40 Q78,44 76,50 Q72,56 68,58" fill={isShadow ? shadowFill : "#A855F7"} />
    {/* Head */}
    <path d="M76,38 Q82,34 88,34 Q94,36 96,42 Q96,46 92,46 Q86,48 80,46 Q76,42 76,38" fill={isShadow ? shadowFill : "#A855F7"} />
    {/* Double crests - distinctive! */}
    <path d="M80,34 Q78,24 76,18 Q74,14 76,14 Q80,16 82,22 Q84,28 84,34" fill={isShadow ? shadowFill : "#C084FC"} />
    <path d="M86,34 Q88,24 90,18 Q92,14 90,14 Q86,16 84,22 Q82,28 84,34" fill={isShadow ? shadowFill : "#D8B4FE"} />
    {/* Snout */}
    <path d="M94,40 Q100,38 104,40 Q104,44 100,44 Q96,44 94,42" fill={isShadow ? shadowFill : "#6B21A8"} />
    {/* Arms */}
    <path d="M64,58 Q60,60 58,58 Q56,56 58,54" stroke={isShadow ? shadowFill : "#7E22CE"} strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Legs */}
    <path d="M40,82 Q38,92 36,98 Q40,100 44,98 Q46,94 44,84" fill={isShadow ? shadowFill : "#6B21A8"} />
    <path d="M56,84 Q56,94 54,98 Q58,100 62,98 Q64,94 62,84" fill={isShadow ? shadowFill : "#6B21A8"} />
    {/* Tail */}
    <path d="M30,70 Q22,64 16,60 Q10,58 8,60 Q10,64 16,68 Q24,72 30,74" fill={isShadow ? shadowFill : "#7E22CE"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="90" cy="38" r="2" fill="white" />
        <circle cx="91" cy="38" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Apatosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - massive */}
    <path d="M22,80 Q20,66 36,60 Q52,56 70,58 Q82,62 82,76 Q80,90 60,94 Q36,94 22,80Z" fill={isShadow ? shadowFill : "#0369A1"} />
    {/* Thick neck */}
    <path d="M70,58 Q76,48 80,38 Q84,28 86,20 Q88,16 90,18 Q92,20 90,26 Q88,34 84,44 Q80,52 76,58" fill={isShadow ? shadowFill : "#0284C7"} />
    {/* Small head */}
    <path d="M86,18 Q90,12 96,12 Q100,14 100,20 Q98,24 92,24 Q86,22 86,18" fill={isShadow ? shadowFill : "#38BDF8"} />
    {/* Legs */}
    <path d="M38,90 Q36,100 34,106 Q38,108 42,106 Q44,102 42,92" fill={isShadow ? shadowFill : "#075985"} />
    <path d="M50,92 Q48,102 46,106 Q50,108 54,106 Q56,102 54,92" fill={isShadow ? shadowFill : "#075985"} />
    <path d="M62,92 Q62,102 60,106 Q64,108 68,106 Q70,102 68,92" fill={isShadow ? shadowFill : "#075985"} />
    <path d="M74,90 Q76,100 74,106 Q78,108 82,106 Q82,100 80,90" fill={isShadow ? shadowFill : "#075985"} />
    {/* Long tail */}
    <path d="M22,78 Q14,72 8,68 Q4,66 2,68 Q4,72 10,76 Q18,80 22,82" fill={isShadow ? shadowFill : "#075985"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="96" cy="17" r="1.8" fill="white" />
        <circle cx="97" cy="17" r="0.9" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Plesiosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - streamlined */}
    <path d="M25,68 Q20,56 35,50 Q55,44 75,48 Q88,52 88,66 Q86,78 65,82 Q40,82 25,68Z" fill={isShadow ? shadowFill : "#0E7490"} />
    {/* Very long neck */}
    <path d="M80,50 Q88,40 92,30 Q94,22 96,16 Q98,12 100,14 Q102,16 100,22 Q98,30 94,38 Q90,46 84,52" fill={isShadow ? shadowFill : "#06B6D4"} />
    {/* Small head */}
    <path d="M96,14 Q100,10 106,10 Q110,12 110,18 Q108,22 102,22 Q96,20 96,16" fill={isShadow ? shadowFill : "#22D3EE"} />
    {/* Front flippers */}
    <path d="M45,76 Q38,86 28,90 Q24,90 26,86 Q30,82 38,76 Q42,74 45,74" fill={isShadow ? shadowFill : "#155E75"} />
    <path d="M70,76 Q78,86 88,90 Q92,90 90,86 Q86,82 78,76 Q74,74 70,74" fill={isShadow ? shadowFill : "#155E75"} />
    {/* Rear flippers */}
    <path d="M35,74 Q30,80 24,82 Q22,80 26,76 Q30,74 34,72" fill={isShadow ? shadowFill : "#155E75"} />
    <path d="M75,74 Q80,80 86,82 Q88,80 84,76 Q80,74 76,72" fill={isShadow ? shadowFill : "#155E75"} />
    {/* Tail */}
    <path d="M25,66 Q18,62 14,60 Q10,60 12,64 Q16,68 22,70" fill={isShadow ? shadowFill : "#155E75"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="104" cy="15" r="1.8" fill="white" />
        <circle cx="105" cy="15" r="0.9" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Mosasaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - long, serpentine */}
    <path d="M18,60 Q16,50 30,46 Q50,42 72,44 Q86,48 88,58 Q88,68 70,72 Q45,74 20,66Z" fill={isShadow ? shadowFill : "#1E40AF"} />
    {/* Head - massive jaw */}
    <path d="M84,50 Q90,42 96,40 Q102,40 108,44 Q112,48 112,54 Q110,58 104,58 Q98,58 92,56 Q86,54 84,52" fill={isShadow ? shadowFill : "#2563EB"} />
    {/* Jaw - open */}
    <path d="M98,54 Q104,56 110,56 Q114,58 114,62 Q110,62 104,60 Q98,58 96,56" fill={isShadow ? shadowFill : "#1D4ED8"} />
    {/* Teeth */}
    {!isShadow && (
      <path d="M100,56 L101,58 L103,56 L104,58 L106,56 L107,58 L109,56" stroke="white" strokeWidth="0.6" fill="white" />
    )}
    {/* Dorsal fin */}
    <path d="M50,44 L54,34 L58,44" fill={isShadow ? shadowFill : "#1E3A8A"} />
    {/* Front flippers */}
    <path d="M40,68 Q34,78 26,82 Q22,80 26,76 Q32,72 38,66" fill={isShadow ? shadowFill : "#1E3A8A"} />
    <path d="M68,68 Q74,78 82,82 Q86,80 82,76 Q76,72 70,66" fill={isShadow ? shadowFill : "#1E3A8A"} />
    {/* Tail fin */}
    <path d="M18,58 Q10,52 6,46 Q4,44 4,48 Q6,54 10,58 Q6,62 4,68 Q4,72 6,70 Q10,64 18,62" fill={isShadow ? shadowFill : "#1E3A8A"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="100" cy="46" r="2.5" fill="#BFDBFE" />
        <circle cx="101" cy="46" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Dimetrodon: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - low, sprawling */}
    <path d="M24,74 Q22,62 36,58 Q50,54 66,56 Q78,60 78,72 Q76,82 58,86 Q38,86 24,74Z" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Sail - large, semi-circular */}
    <path d="M28,58 Q30,32 40,22 Q50,16 60,18 Q70,20 76,30 Q80,40 78,58" fill={isShadow ? shadowFill : "#F97316"} />
    {/* Sail spine details */}
    {!isShadow && (
      <>
        <path d="M38,24 Q42,40 44,58" stroke="#FB923C" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M50,18 Q52,36 54,58" stroke="#FB923C" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M62,20 Q64,38 66,58" stroke="#FB923C" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M72,30 Q74,44 76,58" stroke="#FB923C" strokeWidth="0.6" fill="none" opacity="0.5" />
      </>
    )}
    {/* Head - lizard-like */}
    <path d="M76,64 Q82,58 88,56 Q94,56 98,60 Q100,64 96,66 Q92,68 86,68 Q80,68 76,66" fill={isShadow ? shadowFill : "#D97706"} />
    {/* Jaw */}
    <path d="M92,64 Q98,66 100,64 Q102,66 100,68 Q96,68 92,66" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Sprawling legs */}
    <path d="M36,82 Q32,88 28,92 Q26,94 30,94 Q34,92 36,88 Q38,84 38,82" fill={isShadow ? shadowFill : "#92400E"} />
    <path d="M60,84 Q58,90 54,94 Q52,96 56,96 Q60,94 62,90 Q64,86 62,84" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Tail */}
    <path d="M24,72 Q16,68 10,66 Q6,66 8,70 Q12,72 20,74" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="92" cy="60" r="2" fill="#FDE047" />
        <circle cx="93" cy="60" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Archaeopteryx: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - small, bird-like */}
    <path d="M48,60 Q46,50 54,46 Q62,44 68,48 Q72,52 70,60 Q68,68 58,70 Q50,70 48,60Z" fill={isShadow ? shadowFill : "#059669"} />
    {/* Head */}
    <path d="M68,48 Q74,40 80,38 Q86,38 88,42 Q88,46 84,48 Q80,50 74,48 Q70,46 68,46" fill={isShadow ? shadowFill : "#10B981"} />
    {/* Beak - toothed */}
    <path d="M86,40 L96,38 L88,44Z" fill={isShadow ? shadowFill : "#047857"} />
    {/* Feathered wings - spread */}
    <path d="M50,54 Q38,42 24,36 Q18,34 14,36 Q16,40 22,44 Q30,48 42,54" fill={isShadow ? shadowFill : "#34D399"} />
    <path d="M24,36 Q20,32 16,32" stroke={isShadow ? shadowFill : "#059669"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28,38 Q24,36 20,36" stroke={isShadow ? shadowFill : "#059669"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M68,54 Q80,42 94,36 Q100,34 104,36 Q102,40 96,44 Q88,48 76,54" fill={isShadow ? shadowFill : "#34D399"} />
    <path d="M94,36 Q98,32 102,32" stroke={isShadow ? shadowFill : "#059669"} strokeWidth="1.5" strokeLinecap="round" />
    {/* Wing claws */}
    <path d="M16,36 L12,32" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M104,36 L108,32" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="1.5" strokeLinecap="round" />
    {/* Feathered tail - long */}
    <path d="M50,66 Q38,76 28,84 Q22,88 18,90 Q16,88 20,84 Q26,78 36,70 Q44,64 48,64" fill={isShadow ? shadowFill : "#34D399"} />
    <path d="M50,68 Q40,80 32,88 Q28,92 24,94 Q22,92 26,88 Q34,80 44,70" fill={isShadow ? shadowFill : "#10B981"} />
    {/* Legs */}
    <path d="M54,68 Q52,78 50,84 Q54,86 58,84 Q58,80 56,70" fill={isShadow ? shadowFill : "#047857"} />
    <path d="M62,68 Q62,78 60,84 Q64,86 68,84 Q68,80 66,70" fill={isShadow ? shadowFill : "#047857"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="82" cy="41" r="2" fill="white" />
        <circle cx="83" cy="41" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);
