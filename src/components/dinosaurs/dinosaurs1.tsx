import React from "react";
import type { DinoProps } from "./types";
import DinoImage from "./DinoImage";

import trexImg from "@/assets/dinos/trex.png";
import triceratopsImg from "@/assets/dinos/triceratops.png";
import stegosaurusImg from "@/assets/dinos/stegosaurus.png";
import brachiosaurusImg from "@/assets/dinos/brachiosaurus.png";
import velociraptorImg from "@/assets/dinos/velociraptor.png";
import pteranodonImg from "@/assets/dinos/pteranodon.png";
import ankylosaurusImg from "@/assets/dinos/ankylosaurus.png";
import spinosaurusImg from "@/assets/dinos/spinosaurus.png";
import parasaurolophusImg from "@/assets/dinos/parasaurolophus.png";
import diplodocusImg from "@/assets/dinos/diplodocus.png";

export const TRex: React.FC<DinoProps> = (props) => <DinoImage {...props} src={trexImg} alt="T-Rex" />;
export const Triceratops: React.FC<DinoProps> = (props) => <DinoImage {...props} src={triceratopsImg} alt="Tricerátops" />;
export const Stegosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={stegosaurusImg} alt="Estegossauro" />;
export const Brachiosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={brachiosaurusImg} alt="Braquiossauro" />;
export const Velociraptor: React.FC<DinoProps> = (props) => <DinoImage {...props} src={velociraptorImg} alt="Velociraptor" />;
export const Pteranodon: React.FC<DinoProps> = (props) => <DinoImage {...props} src={pteranodonImg} alt="Pteranodonte" />;
export const Ankylosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={ankylosaurusImg} alt="Anquilossauro" />;
export const Spinosaurus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={spinosaurusImg} alt="Espinossauro" />;
export const Parasaurolophus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={parasaurolophusImg} alt="Parassaurolofo" />;
export const Diplodocus: React.FC<DinoProps> = (props) => <DinoImage {...props} src={diplodocusImg} alt="Diplódoco" />;
