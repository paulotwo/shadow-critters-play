import React from "react";
import type { DinoProps } from "./types";
import { shadowFill } from "./types";

export const TRex: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M30,72 Q30,58 45,55 Q58,52 68,56 Q75,59 75,72 Q75,85 55,88 Q35,88 30,72Z" fill={isShadow ? shadowFill : "#059669"} />
    {/* Head */}
    <path d="M68,56 Q72,42 78,38 Q84,34 92,36 Q100,38 104,44 Q106,48 104,52 Q102,56 96,58 Q90,60 84,58 Q78,56 75,58" fill={isShadow ? shadowFill : "#10B981"} />
    {/* Jaw */}
    <path d="M88,52 Q94,54 100,52 Q104,54 104,58 Q102,60 96,60 Q90,60 86,56Z" fill={isShadow ? shadowFill : "#047857"} />
    {/* Teeth */}
    {!isShadow && (
      <path d="M92,52 L93,55 L95,52 L96,55 L98,52 L99,55 L101,52" stroke="white" strokeWidth="0.8" fill="white" />
    )}
    {/* Tiny arms */}
    <path d="M68,62 Q64,64 62,62 Q60,60 62,58" stroke={isShadow ? shadowFill : "#047857"} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Left leg */}
    <path d="M42,84 Q40,94 38,100 Q36,104 34,106 Q38,106 42,104 Q44,102 42,98 Q44,94 46,84" fill={isShadow ? shadowFill : "#047857"} />
    {/* Right leg */}
    <path d="M58,84 Q58,94 56,100 Q54,104 52,106 Q56,106 60,104 Q62,102 60,98 Q62,94 62,84" fill={isShadow ? shadowFill : "#047857"} />
    {/* Tail */}
    <path d="M30,68 Q22,62 16,58 Q10,55 6,56 Q8,60 14,64 Q20,68 26,72" fill={isShadow ? shadowFill : "#059669"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="90" cy="40" r="3.5" fill="#FBBF24" />
        <circle cx="91" cy="40" r="1.8" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Triceratops: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M20,72 Q20,56 40,52 Q56,50 68,54 Q78,58 78,72 Q78,86 55,90 Q30,90 20,72Z" fill={isShadow ? shadowFill : "#D97706"} />
    {/* Frill */}
    <path d="M74,50 Q80,34 88,30 Q96,28 102,32 Q106,36 104,42 Q100,46 94,48 Q88,50 82,50" fill={isShadow ? shadowFill : "#F59E0B"} />
    <path d="M88,30 Q84,24 86,20 Q90,18 94,22 Q96,26 96,28" fill={isShadow ? shadowFill : "#FBBF24"} />
    <path d="M102,32 Q106,26 108,22 Q104,20 100,24 Q98,28 100,32" fill={isShadow ? shadowFill : "#FBBF24"} />
    {/* Head */}
    <path d="M82,50 Q88,48 94,50 Q100,52 104,56 Q106,60 102,62 Q96,64 90,62 Q84,60 80,56Z" fill={isShadow ? shadowFill : "#EAB308"} />
    {/* Horn - nose */}
    <path d="M102,56 L112,50 L108,58" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Horns - brow */}
    <path d="M88,48 L82,36" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="3" strokeLinecap="round" />
    <path d="M96,48 L102,36" stroke={isShadow ? shadowFill : "#92400E"} strokeWidth="3" strokeLinecap="round" />
    {/* Legs */}
    <path d="M35,86 Q33,96 31,102 Q34,104 38,102 Q40,98 38,86" fill={isShadow ? shadowFill : "#B45309"} />
    <path d="M55,88 Q55,98 53,102 Q56,104 60,102 Q62,98 60,88" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Tail */}
    <path d="M20,70 Q14,64 8,62 Q6,66 10,70 Q16,74 20,74" fill={isShadow ? shadowFill : "#B45309"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="94" cy="54" r="2.5" fill="white" />
        <circle cx="95" cy="54" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Stegosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - arched back */}
    <path d="M18,74 Q18,58 35,54 Q50,50 65,52 Q80,54 85,62 Q88,70 85,78 Q80,86 60,88 Q35,90 18,74Z" fill={isShadow ? shadowFill : "#7C3AED"} />
    {/* Head - small */}
    <path d="M85,62 Q90,56 96,54 Q102,54 106,58 Q108,62 104,64 Q100,66 94,66 Q88,66 85,64" fill={isShadow ? shadowFill : "#8B5CF6"} />
    {/* Back plates */}
    <path d="M28,54 L32,36 L36,54" fill={isShadow ? shadowFill : "#A78BFA"} />
    <path d="M38,50 L44,28 L50,50" fill={isShadow ? shadowFill : "#C4B5FD"} />
    <path d="M50,48 L57,26 L64,50" fill={isShadow ? shadowFill : "#A78BFA"} />
    <path d="M64,50 L70,32 L76,54" fill={isShadow ? shadowFill : "#C4B5FD"} />
    <path d="M74,56 L78,42 L82,58" fill={isShadow ? shadowFill : "#A78BFA"} />
    {/* Legs */}
    <path d="M32,84 Q30,94 28,100 Q32,102 36,100 Q38,96 36,86" fill={isShadow ? shadowFill : "#6D28D9"} />
    <path d="M62,86 Q62,96 60,100 Q64,102 68,100 Q70,96 68,86" fill={isShadow ? shadowFill : "#6D28D9"} />
    {/* Tail with spikes (thagomizer) */}
    <path d="M18,72 Q12,66 8,64 Q6,68 10,72 Q14,76 18,76" fill={isShadow ? shadowFill : "#6D28D9"} />
    <line x1="10" y1="66" x2="2" y2="58" stroke={isShadow ? shadowFill : "#DDD6FE"} strokeWidth="3" strokeLinecap="round" />
    <line x1="8" y1="68" x2="0" y2="66" stroke={isShadow ? shadowFill : "#DDD6FE"} strokeWidth="3" strokeLinecap="round" />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="100" cy="58" r="2" fill="white" />
        <circle cx="101" cy="58" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Brachiosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M25,82 Q22,68 35,62 Q50,58 68,60 Q80,62 82,74 Q82,86 65,92 Q42,94 25,82Z" fill={isShadow ? shadowFill : "#2563EB"} />
    {/* Long neck */}
    <path d="M68,60 Q74,48 78,36 Q82,24 84,16 Q86,12 88,14 Q90,16 88,22 Q86,32 82,42 Q78,52 74,60" fill={isShadow ? shadowFill : "#3B82F6"} />
    {/* Head */}
    <path d="M84,14 Q88,8 94,8 Q100,10 100,16 Q98,20 92,20 Q86,18 84,14Z" fill={isShadow ? shadowFill : "#60A5FA"} />
    {/* Bump on head */}
    <ellipse cx="90" cy="8" rx="4" ry="3" fill={isShadow ? shadowFill : "#93C5FD"} />
    {/* Legs - front taller */}
    <path d="M42,90 Q40,100 38,106 Q42,108 46,106 Q48,100 46,90" fill={isShadow ? shadowFill : "#1D4ED8"} />
    <path d="M56,92 Q54,102 52,106 Q56,108 60,106 Q62,102 60,92" fill={isShadow ? shadowFill : "#1D4ED8"} />
    <path d="M66,90 Q66,100 64,106 Q68,108 72,106 Q74,100 72,90" fill={isShadow ? shadowFill : "#1D4ED8"} />
    <path d="M76,88 Q78,98 76,106 Q80,108 84,106 Q84,98 82,88" fill={isShadow ? shadowFill : "#1D4ED8"} />
    {/* Tail */}
    <path d="M25,78 Q18,72 12,68 Q8,66 6,68 Q8,72 14,76 Q20,80 24,82" fill={isShadow ? shadowFill : "#1D4ED8"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="95" cy="14" r="2" fill="white" />
        <circle cx="96" cy="14" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Velociraptor: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - lean */}
    <path d="M35,68 Q35,56 48,52 Q58,50 66,54 Q72,58 70,68 Q68,78 54,80 Q40,80 35,68Z" fill={isShadow ? shadowFill : "#DC2626"} />
    {/* Head */}
    <path d="M66,54 Q72,44 78,40 Q84,38 90,40 Q96,42 100,46 Q102,50 98,52 Q94,54 88,52 Q82,50 78,52 Q74,54 70,56" fill={isShadow ? shadowFill : "#EF4444"} />
    {/* Jaw */}
    <path d="M88,50 Q94,52 98,52 Q100,54 98,56 Q94,56 88,54Z" fill={isShadow ? shadowFill : "#B91C1C"} />
    {/* Teeth */}
    {!isShadow && (
      <path d="M90,52 L91,54 L93,52 L94,54 L96,52" stroke="white" strokeWidth="0.6" fill="white" />
    )}
    {/* Arms with claws */}
    <path d="M64,58 Q60,62 56,60 Q54,58 56,56" stroke={isShadow ? shadowFill : "#B91C1C"} strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Left leg with sickle claw */}
    <path d="M44,78 Q42,88 40,94 Q38,98 36,100 Q40,100 44,98 Q46,96 44,92 Q44,88 46,78" fill={isShadow ? shadowFill : "#B91C1C"} />
    <path d="M38,98 L32,92" stroke={isShadow ? shadowFill : "#991B1B"} strokeWidth="2.5" strokeLinecap="round" />
    {/* Right leg with sickle claw */}
    <path d="M56,78 Q56,88 54,94 Q52,98 50,100 Q54,100 58,98 Q60,96 58,92 Q58,88 58,78" fill={isShadow ? shadowFill : "#B91C1C"} />
    <path d="M52,98 L46,92" stroke={isShadow ? shadowFill : "#991B1B"} strokeWidth="2.5" strokeLinecap="round" />
    {/* Tail - stiff */}
    <path d="M35,64 Q26,56 18,52 Q12,50 8,52 Q10,56 16,58 Q24,62 32,68" fill={isShadow ? shadowFill : "#DC2626"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="88" cy="42" r="2.5" fill="#FDE047" />
        <circle cx="89" cy="42" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Pteranodon: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <ellipse cx="60" cy="58" rx="10" ry="7" fill={isShadow ? shadowFill : "#06B6D4"} />
    {/* Left wing */}
    <path d="M50,56 Q35,42 14,36 Q10,34 8,38 Q12,44 25,50 Q38,56 50,60" fill={isShadow ? shadowFill : "#0891B2"} />
    <path d="M14,36 Q8,32 4,34" stroke={isShadow ? shadowFill : "#0E7490"} strokeWidth="1.5" strokeLinecap="round" />
    {/* Right wing */}
    <path d="M70,56 Q85,42 106,36 Q110,34 112,38 Q108,44 95,50 Q82,56 70,60" fill={isShadow ? shadowFill : "#0891B2"} />
    <path d="M106,36 Q112,32 116,34" stroke={isShadow ? shadowFill : "#0E7490"} strokeWidth="1.5" strokeLinecap="round" />
    {/* Head with crest */}
    <path d="M66,52 Q72,46 78,44 Q84,44 86,48 Q86,52 82,54 Q78,56 72,56 Q68,54 66,52" fill={isShadow ? shadowFill : "#22D3EE"} />
    {/* Crest */}
    <path d="M78,44 Q76,34 68,28 Q72,32 76,38 Q78,42 78,44" fill={isShadow ? shadowFill : "#67E8F9"} />
    {/* Beak */}
    <path d="M84,48 L96,44 L86,52Z" fill={isShadow ? shadowFill : "#0E7490"} />
    {/* Legs */}
    <path d="M56,64 Q54,72 52,78" stroke={isShadow ? shadowFill : "#0E7490"} strokeWidth="2" strokeLinecap="round" />
    <path d="M64,64 Q66,72 68,78" stroke={isShadow ? shadowFill : "#0E7490"} strokeWidth="2" strokeLinecap="round" />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="80" cy="48" r="2" fill="white" />
        <circle cx="81" cy="48" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Ankylosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body - wide, low, armored */}
    <path d="M16,68 Q14,54 30,48 Q50,42 72,44 Q88,48 90,60 Q90,74 70,80 Q45,84 20,76Z" fill={isShadow ? shadowFill : "#78716C"} />
    {/* Armor plates row 1 */}
    <circle cx="35" cy="48" r="4" fill={isShadow ? shadowFill : "#A8A29E"} />
    <circle cx="48" cy="45" r="4.5" fill={isShadow ? shadowFill : "#A8A29E"} />
    <circle cx="62" cy="45" r="4.5" fill={isShadow ? shadowFill : "#A8A29E"} />
    <circle cx="75" cy="48" r="4" fill={isShadow ? shadowFill : "#A8A29E"} />
    {/* Armor plates row 2 */}
    <circle cx="40" cy="56" r="3.5" fill={isShadow ? shadowFill : "#D6D3D1"} />
    <circle cx="55" cy="54" r="3.5" fill={isShadow ? shadowFill : "#D6D3D1"} />
    <circle cx="68" cy="56" r="3.5" fill={isShadow ? shadowFill : "#D6D3D1"} />
    {/* Side spikes */}
    <path d="M24,60 L16,54" stroke={isShadow ? shadowFill : "#57534E"} strokeWidth="3" strokeLinecap="round" />
    <path d="M22,66 L14,62" stroke={isShadow ? shadowFill : "#57534E"} strokeWidth="3" strokeLinecap="round" />
    <path d="M84,54 L92,48" stroke={isShadow ? shadowFill : "#57534E"} strokeWidth="3" strokeLinecap="round" />
    {/* Head */}
    <path d="M88,58 Q94,52 100,52 Q106,54 106,60 Q104,64 98,64 Q92,64 88,62" fill={isShadow ? shadowFill : "#92400E"} />
    {/* Club tail */}
    <path d="M16,70 Q8,66 4,64" stroke={isShadow ? shadowFill : "#57534E"} strokeWidth="5" strokeLinecap="round" />
    <ellipse cx="4" cy="63" rx="6" ry="5" fill={isShadow ? shadowFill : "#44403C"} />
    {/* Legs */}
    <path d="M34,80 Q32,90 30,96 Q34,98 38,96 Q40,90 38,80" fill={isShadow ? shadowFill : "#57534E"} />
    <path d="M62,80 Q62,90 60,96 Q64,98 68,96 Q70,90 68,80" fill={isShadow ? shadowFill : "#57534E"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="100" cy="56" r="2" fill="white" />
        <circle cx="101" cy="56" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Spinosaurus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M28,74 Q26,60 40,56 Q54,52 66,56 Q74,60 74,74 Q72,86 52,88 Q34,88 28,74Z" fill={isShadow ? shadowFill : "#7C2D12"} />
    {/* Sail - distinctive spines */}
    <path d="M32,56 Q36,30 42,22 Q48,16 54,22 Q58,28 60,38 Q62,28 66,22 Q72,18 74,26 Q76,36 74,56" fill={isShadow ? shadowFill : "#EA580C"} />
    {/* Sail membrane detail */}
    {!isShadow && (
      <>
        <path d="M42,24 Q48,38 54,56" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M54,24 Q58,38 62,56" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M66,24 Q70,38 72,56" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.5" />
      </>
    )}
    {/* Head - crocodile-like snout */}
    <path d="M70,58 Q78,48 84,44 Q90,42 96,44 Q100,46 100,50 Q98,54 92,56 Q86,58 80,58" fill={isShadow ? shadowFill : "#C2410C"} />
    <path d="M96,50 Q102,48 108,48 Q112,50 112,54 Q108,56 104,54 Q98,54 96,52" fill={isShadow ? shadowFill : "#C2410C"} />
    {/* Teeth */}
    {!isShadow && (
      <path d="M100,52 L101,55 L103,52 L104,55 L106,52 L107,55 L109,52" stroke="white" strokeWidth="0.6" fill="white" />
    )}
    {/* Legs */}
    <path d="M40,84 Q38,94 36,100 Q40,102 44,100 Q46,96 44,86" fill={isShadow ? shadowFill : "#9A3412"} />
    <path d="M56,86 Q56,96 54,100 Q58,102 62,100 Q64,96 62,86" fill={isShadow ? shadowFill : "#9A3412"} />
    {/* Tail */}
    <path d="M28,72 Q20,66 14,62 Q8,60 6,62 Q8,66 14,70 Q22,74 28,76" fill={isShadow ? shadowFill : "#7C2D12"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="92" cy="46" r="2" fill="#FDE047" />
        <circle cx="93" cy="46" r="1" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Parasaurolophus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M25,74 Q24,60 38,55 Q52,50 64,54 Q72,58 72,72 Q70,84 52,88 Q34,88 25,74Z" fill={isShadow ? shadowFill : "#0D9488"} />
    {/* Neck */}
    <path d="M64,54 Q70,46 76,42 Q80,40 82,44 Q80,48 76,52 Q72,56 68,58" fill={isShadow ? shadowFill : "#14B8A6"} />
    {/* Head */}
    <path d="M76,42 Q82,36 88,36 Q94,38 96,44 Q96,48 92,50 Q86,52 80,50 Q76,48 76,44" fill={isShadow ? shadowFill : "#2DD4BF"} />
    {/* Crest - long backward tube */}
    <path d="M86,36 Q82,28 76,20 Q72,14 66,12 Q62,12 60,16" stroke={isShadow ? shadowFill : "#5EEAD4"} strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Beak */}
    <path d="M94,42 Q100,40 104,42 Q104,46 100,46 Q96,46 94,44" fill={isShadow ? shadowFill : "#0F766E"} />
    {/* Legs */}
    <path d="M38,84 Q36,94 34,100 Q38,102 42,100 Q44,96 42,86" fill={isShadow ? shadowFill : "#0F766E"} />
    <path d="M54,86 Q54,96 52,100 Q56,102 60,100 Q62,96 60,86" fill={isShadow ? shadowFill : "#0F766E"} />
    {/* Tail */}
    <path d="M25,72 Q18,66 12,62 Q8,60 6,62 Q8,66 14,70 Q20,74 24,76" fill={isShadow ? shadowFill : "#0D9488"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="90" cy="42" r="2.5" fill="white" />
        <circle cx="91" cy="42" r="1.2" fill="#1a1a2e" />
      </>
    )}
  </svg>
);

export const Diplodocus: React.FC<DinoProps> = ({ className, isShadow }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none">
    {/* Body */}
    <path d="M30,78 Q28,66 42,62 Q56,58 68,60 Q78,64 78,76 Q76,88 58,92 Q38,92 30,78Z" fill={isShadow ? shadowFill : "#4F46E5"} />
    {/* Neck - very long */}
    <path d="M68,60 Q76,50 82,38 Q86,28 90,18 Q92,14 94,16 Q96,18 94,24 Q90,34 86,44 Q82,52 76,60" fill={isShadow ? shadowFill : "#6366F1"} />
    {/* Small head */}
    <path d="M90,14 Q94,10 100,10 Q104,12 104,18 Q102,22 96,22 Q90,20 90,16" fill={isShadow ? shadowFill : "#818CF8"} />
    {/* Legs */}
    <path d="M40,88 Q38,98 36,104 Q40,106 44,104 Q46,100 44,90" fill={isShadow ? shadowFill : "#3730A3"} />
    <path d="M50,90 Q48,100 46,104 Q50,106 54,104 Q56,100 54,90" fill={isShadow ? shadowFill : "#3730A3"} />
    <path d="M60,90 Q60,100 58,104 Q62,106 66,104 Q68,100 66,90" fill={isShadow ? shadowFill : "#3730A3"} />
    <path d="M70,88 Q72,98 70,104 Q74,106 78,104 Q78,98 76,88" fill={isShadow ? shadowFill : "#3730A3"} />
    {/* Very long whip tail */}
    <path d="M30,76 Q22,70 14,66 Q8,62 4,60 Q2,62 4,66 Q8,70 16,74 Q24,78 30,80" fill={isShadow ? shadowFill : "#4338CA"} />
    {/* Eye */}
    {!isShadow && (
      <>
        <circle cx="100" cy="15" r="1.8" fill="white" />
        <circle cx="101" cy="15" r="0.9" fill="#1a1a2e" />
      </>
    )}
  </svg>
);
