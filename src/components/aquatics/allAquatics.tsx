import React from "react";
import type { AquaticProps } from "./types";
import AquaticImage from "./AquaticImage";

// Reuse existing animal images for moved creatures
import whaleImg from "@/assets/animals/whale.png";
import dolphinImg from "@/assets/animals/dolphin.png";
import sharkImg from "@/assets/animals/shark.png";
import octopusImg from "@/assets/animals/octopus.png";
import fishImg from "@/assets/animals/fish.png";

// New aquatic images
import seahorseImg from "@/assets/aquatics/seahorse.png";
import jellyfishImg from "@/assets/aquatics/jellyfish.png";
import stingrayImg from "@/assets/aquatics/stingray.png";
import sealImg from "@/assets/aquatics/seal.png";
import crabImg from "@/assets/aquatics/crab.png";
import lobsterImg from "@/assets/aquatics/lobster.png";
import starfishImg from "@/assets/aquatics/starfish.png";
import narwhalImg from "@/assets/aquatics/narwhal.png";
import orcaImg from "@/assets/aquatics/orca.png";
import clownfishImg from "@/assets/aquatics/clownfish.png";
import squidImg from "@/assets/aquatics/squid.png";
import walrusImg from "@/assets/aquatics/walrus.png";
import seaTurtleImg from "@/assets/aquatics/sea_turtle.png";
import swordfishImg from "@/assets/aquatics/swordfish.png";
import manateeImg from "@/assets/aquatics/manatee.png";

export const Whale: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={whaleImg} alt="Baleia" />;
export const Dolphin: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={dolphinImg} alt="Golfinho" />;
export const Shark: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={sharkImg} alt="Tubarão" />;
export const Octopus: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={octopusImg} alt="Polvo" />;
export const Fish: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={fishImg} alt="Peixe" />;
export const Seahorse: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={seahorseImg} alt="Cavalo-marinho" />;
export const Jellyfish: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={jellyfishImg} alt="Água-viva" />;
export const Stingray: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={stingrayImg} alt="Arraia" />;
export const Seal: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={sealImg} alt="Foca" />;
export const Crab: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={crabImg} alt="Caranguejo" />;
export const Lobster: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={lobsterImg} alt="Lagosta" />;
export const Starfish: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={starfishImg} alt="Estrela-do-mar" />;
export const Narwhal: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={narwhalImg} alt="Narval" />;
export const Orca: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={orcaImg} alt="Orca" />;
export const Clownfish: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={clownfishImg} alt="Peixe-palhaço" />;
export const Squid: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={squidImg} alt="Lula" />;
export const Walrus: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={walrusImg} alt="Morsa" />;
export const SeaTurtle: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={seaTurtleImg} alt="Tartaruga-marinha" />;
export const Swordfish: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={swordfishImg} alt="Peixe-espada" />;
export const Manatee: React.FC<AquaticProps> = (props) => <AquaticImage {...props} src={manateeImg} alt="Peixe-boi" />;
