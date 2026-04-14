import type React from "react";
import type { AnimalProps, AnimalId } from "./types";
export type { AnimalProps, AnimalId };

import {
  Cat, Dog, Elephant, Rabbit, Bird,
  Lion, Turtle, Butterfly, Frog, Horse, Owl,
  Penguin, Monkey, Giraffe, Bear, Snake, Bee, Pig,
  Panda, Koala, Zebra, Crocodile, Fox, Duck, Tiger,
} from "./allAnimals";

export {
  Cat, Dog, Elephant, Rabbit, Bird,
  Lion, Turtle, Butterfly, Frog, Horse, Owl,
  Penguin, Monkey, Giraffe, Bear, Snake, Bee, Pig,
  Panda, Koala, Zebra, Crocodile, Fox, Duck, Tiger,
};

export const animalComponents: Record<AnimalId, React.FC<AnimalProps>> = {
  cat: Cat, dog: Dog, elephant: Elephant, rabbit: Rabbit, bird: Bird,
  lion: Lion, turtle: Turtle, butterfly: Butterfly, frog: Frog, horse: Horse, owl: Owl,
  penguin: Penguin, monkey: Monkey, giraffe: Giraffe, bear: Bear,
  snake: Snake, bee: Bee, pig: Pig,
  panda: Panda, koala: Koala, zebra: Zebra,
  crocodile: Crocodile, fox: Fox, duck: Duck, tiger: Tiger,
};

export const animalNames: Record<AnimalId, string> = {
  cat: "Gato", dog: "Cachorro", elephant: "Elefante", rabbit: "Coelho",
  bird: "Pássaro", lion: "Leão", turtle: "Tartaruga",
  butterfly: "Borboleta", frog: "Sapo", horse: "Cavalo", owl: "Coruja",
  penguin: "Pinguim", monkey: "Macaco", giraffe: "Girafa", bear: "Urso",
  snake: "Cobra", bee: "Abelha", pig: "Porco",
  panda: "Panda", koala: "Coala", zebra: "Zebra",
  crocodile: "Crocodilo", fox: "Raposa", duck: "Pato", tiger: "Tigre",
};

export const animalEmojis: Record<AnimalId, string> = {
  cat: "🐱", dog: "🐶", elephant: "🐘", rabbit: "🐰",
  bird: "🐦", lion: "🦁", turtle: "🐢",
  butterfly: "🦋", frog: "🐸", horse: "🐴", owl: "🦉",
  penguin: "🐧", monkey: "🐵", giraffe: "🦒", bear: "🐻",
  snake: "🐍", bee: "🐝", pig: "🐷",
  panda: "🐼", koala: "🐨", zebra: "🦓",
  crocodile: "🐊", fox: "🦊", duck: "🦆", tiger: "🐯",
};
