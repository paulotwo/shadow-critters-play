import type React from "react";

export interface DinoProps {
  className?: string;
  isShadow?: boolean;
}

export const shadowFill = "#2d2d3f";

export type DinoId =
  | "trex" | "triceratops" | "stegosaurus" | "brachiosaurus" | "velociraptor"
  | "pteranodon" | "ankylosaurus" | "spinosaurus" | "parasaurolophus" | "diplodocus"
  | "pachycephalosaurus" | "iguanodon" | "compsognathus" | "carnotaurus" | "dilophosaurus"
  | "apatosaurus" | "plesiosaurus" | "mosasaurus" | "dimetrodon" | "archaeopteryx";
