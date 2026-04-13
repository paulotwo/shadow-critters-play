import type React from "react";

export interface AquaticProps {
  className?: string;
  isShadow?: boolean;
}

export const shadowFill = "#2d2d3f";

export type AquaticId =
  | "whale" | "dolphin" | "shark" | "octopus" | "fish"
  | "seahorse" | "jellyfish" | "stingray" | "seal" | "crab"
  | "lobster" | "starfish" | "narwhal" | "orca" | "clownfish"
  | "squid" | "walrus" | "sea_turtle" | "swordfish" | "manatee";
