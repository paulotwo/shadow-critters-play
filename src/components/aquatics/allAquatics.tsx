import React from "react";
import type { AquaticProps } from "./types";
import AquaticImage from "./AquaticImage";

// Reuse existing animal images for moved creatures
import whaleImg from "@/assets/animals/whale.webp";
import dolphinImg from "@/assets/animals/dolphin.webp";
import sharkImg from "@/assets/animals/shark.webp";
import octopusImg from "@/assets/animals/octopus.webp";
import fishImg from "@/assets/animals/fish.webp";

// New aquatic images
import seahorseImg from "@/assets/aquatics/seahorse.webp";
import jellyfishImg from "@/assets/aquatics/jellyfish.webp";
import stingrayImg from "@/assets/aquatics/stingray.webp";
import sealImg from "@/assets/aquatics/seal.webp";
import crabImg from "@/assets/aquatics/crab.webp";
import lobsterImg from "@/assets/aquatics/lobster.webp";
import starfishImg from "@/assets/aquatics/starfish.webp";
import narwhalImg from "@/assets/aquatics/narwhal.webp";
import orcaImg from "@/assets/aquatics/orca.webp";
import clownfishImg from "@/assets/aquatics/clownfish.webp";
import squidImg from "@/assets/aquatics/squid.webp";
import walrusImg from "@/assets/aquatics/walrus.webp";
import seaTurtleImg from "@/assets/aquatics/sea_turtle.webp";
import swordfishImg from "@/assets/aquatics/swordfish.webp";
import manateeImg from "@/assets/aquatics/manatee.webp";

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
