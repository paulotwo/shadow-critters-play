import React from "react";
import type { AnimalProps } from "./types";

interface AnimalImageProps extends AnimalProps {
  src: string;
  alt: string;
}

const AnimalImage: React.FC<AnimalImageProps> = ({ className, isShadow, src, alt }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    draggable={false}
    style={isShadow ? { filter: "brightness(0) opacity(0.85)", WebkitFilter: "brightness(0) opacity(0.85)" } : undefined}
  />
);

export default AnimalImage;
