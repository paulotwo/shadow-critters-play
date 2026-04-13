import React from "react";
import type { AquaticProps } from "./types";

interface AquaticImageProps extends AquaticProps {
  src: string;
  alt: string;
}

const AquaticImage: React.FC<AquaticImageProps> = ({ className, isShadow, src, alt }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    draggable={false}
    style={isShadow ? { filter: "brightness(0) opacity(0.85)", WebkitFilter: "brightness(0) opacity(0.85)" } : undefined}
  />
);

export default AquaticImage;
