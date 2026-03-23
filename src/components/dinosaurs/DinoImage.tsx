import React from "react";
import type { DinoProps } from "./types";

interface DinoImageProps extends DinoProps {
  src: string;
  alt: string;
}

const DinoImage: React.FC<DinoImageProps> = ({ className, isShadow, src, alt }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    draggable={false}
    style={isShadow ? { filter: "brightness(0) opacity(0.85)", WebkitFilter: "brightness(0) opacity(0.85)" } : undefined}
  />
);

export default DinoImage;
