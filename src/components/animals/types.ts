import type React from "react";

export interface AnimalProps {
  className?: string;
  isShadow?: boolean;
}

export const shadowFill = "#2d2d3f";

export type AnimalId =
  | "cat" | "dog" | "elephant" | "rabbit" | "bird" | "fish"
  | "lion" | "turtle" | "butterfly" | "frog" | "horse" | "owl"
  | "penguin" | "monkey" | "giraffe" | "bear" | "dolphin" | "snake"
  | "bee" | "pig";
