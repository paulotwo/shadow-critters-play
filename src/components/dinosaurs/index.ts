import type React from "react";
import type { DinoProps, DinoId } from "./types";
export type { DinoProps, DinoId };

import {
  TRex, Triceratops, Stegosaurus, Brachiosaurus, Velociraptor,
  Pteranodon, Ankylosaurus, Spinosaurus, Parasaurolophus, Diplodocus,
  Pachycephalosaurus, Iguanodon, Compsognathus, Carnotaurus, Dilophosaurus,
  Apatosaurus, Plesiosaurus, Mosasaurus, Dimetrodon, Archaeopteryx,
} from "./allDinosaurs";

export {
  TRex, Triceratops, Stegosaurus, Brachiosaurus, Velociraptor,
  Pteranodon, Ankylosaurus, Spinosaurus, Parasaurolophus, Diplodocus,
  Pachycephalosaurus, Iguanodon, Compsognathus, Carnotaurus, Dilophosaurus,
  Apatosaurus, Plesiosaurus, Mosasaurus, Dimetrodon, Archaeopteryx,
};

export const dinoComponents: Record<DinoId, React.FC<DinoProps>> = {
  trex: TRex, triceratops: Triceratops, stegosaurus: Stegosaurus,
  brachiosaurus: Brachiosaurus, velociraptor: Velociraptor, pteranodon: Pteranodon,
  ankylosaurus: Ankylosaurus, spinosaurus: Spinosaurus, parasaurolophus: Parasaurolophus,
  diplodocus: Diplodocus, pachycephalosaurus: Pachycephalosaurus, iguanodon: Iguanodon,
  compsognathus: Compsognathus, carnotaurus: Carnotaurus, dilophosaurus: Dilophosaurus,
  apatosaurus: Apatosaurus, plesiosaurus: Plesiosaurus, mosasaurus: Mosasaurus,
  dimetrodon: Dimetrodon, archaeopteryx: Archaeopteryx,
};

export const dinoNames: Record<DinoId, string> = {
  trex: "T-Rex", triceratops: "Tricerátops", stegosaurus: "Estegossauro",
  brachiosaurus: "Braquiossauro", velociraptor: "Velociraptor", pteranodon: "Pteranodonte",
  ankylosaurus: "Anquilossauro", spinosaurus: "Espinossauro", parasaurolophus: "Parassaurolofo",
  diplodocus: "Diplódoco", pachycephalosaurus: "Paquicefalossauro", iguanodon: "Iguanodonte",
  compsognathus: "Compsognato", carnotaurus: "Carnotauro", dilophosaurus: "Dilofossauro",
  apatosaurus: "Apatossauro", plesiosaurus: "Plesiossauro", mosasaurus: "Mosassauro",
  dimetrodon: "Dimetrodonte", archaeopteryx: "Arqueoptérix",
};

export const dinoEmojis: Record<DinoId, string> = {
  trex: "🦖", triceratops: "🦕", stegosaurus: "🦕", brachiosaurus: "🦕",
  velociraptor: "🦖", pteranodon: "🦅", ankylosaurus: "🦕", spinosaurus: "🦖",
  parasaurolophus: "🦕", diplodocus: "🦕", pachycephalosaurus: "🦕", iguanodon: "🦕",
  compsognathus: "🦖", carnotaurus: "🦖", dilophosaurus: "🦖", apatosaurus: "🦕",
  plesiosaurus: "🦕", mosasaurus: "🦕", dimetrodon: "🦖", archaeopteryx: "🦅",
};
