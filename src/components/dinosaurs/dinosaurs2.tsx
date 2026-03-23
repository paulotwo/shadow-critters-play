import React from "react";
import type { DinoProps } from "./types";
import DinoImage from "./DinoImage";

import pachycephalosaurusImg from "@/assets/dinos/pachycephalosaurus.png";
import iguanodonImg from "@/assets/dinos/iguanodon.png";
import compsognathusImg from "@/assets/dinos/compsognathus.png";
import carnotaurusImg from "@/assets/dinos/carnotaurus.png";
import dilophosaurusImg from "@/assets/dinos/dilophosaurus.png";
import apatosaurusImg from "@/assets/dinos/apatosaurus.png";
import plesiosaurusImg from "@/assets/dinos/plesiosaurus.png";
import mosasaurusImg from "@/assets/dinos/mosasaurus.png";
import dimetrodonImg from "@/assets/dinos/dimetrodon.png";
import archaeopteryxImg from "@/assets/dinos/archaeopteryx.png";

export const Pachycephalosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={pachycephalosaurusImg} alt="Paquicefalossauro" />;
export const Iguanodon: React.FC<DinoProps> = (props) => <DinoImage {...props} src={iguanodonImg} alt="Iguanodonte" />;
export const Compsognathus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={compsognathusImg} alt="Compsognato" />;
export const Carnotaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={carnotaurusImg} alt="Carnotauro" />;
export const Dilophosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={dilophosaurusImg} alt="Dilofossauro" />;
export const Apatosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={apatosaurusImg} alt="Apatossauro" />;
export const Plesiosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={plesiosaurusImg} alt="Plesiossauro" />;
export const Mosasaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={mosasaurusImg} alt="Mosassauro" />;
export const Dimetrodon: React.FC<DinoProps> = (props) => <DinoImage {...props} src={dimetrodonImg} alt="Dimetrodonte" />;
export const Archaeopteryx: React.FC<DinoProps> = (props) => <DinoImage {...props} src={archaeopteryxImg} alt="Arqueoptérix" />;
