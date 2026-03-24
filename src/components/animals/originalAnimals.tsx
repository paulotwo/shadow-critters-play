import React from "react";
import type { AnimalProps } from "./types";
import AnimalImage from "./AnimalImage";

import catImg from "@/assets/animals/cat.png";
import dogImg from "@/assets/animals/dog.png";
import elephantImg from "@/assets/animals/elephant.png";
import rabbitImg from "@/assets/animals/rabbit.png";
import birdImg from "@/assets/animals/bird.png";
import fishImg from "@/assets/animals/fish.png";

export const Cat: React.FC<AnimalProps> = (props) => <AnimalImage {...props} src={catImg} alt="Gato" />;
export const Dog: React.FC<AnimalProps> = (props) => <AnimalImage {...props} src={dogImg} alt="Cachorro" />;
export const Elephant: React.FC<AnimalProps> = (props) => <AnimalImage {...props} src={elephantImg} alt="Elefante" />;
export const Rabbit: React.FC<AnimalProps> = (props) => <AnimalImage {...props} src={rabbitImg} alt="Coelho" />;
export const Bird: React.FC<AnimalProps> = (props) => <AnimalImage {...props} src={birdImg} alt="Pássaro" />;
export const Fish: React.FC<AnimalProps> = (props) => <AnimalImage {...props} src={fishImg} alt="Peixe" />;
