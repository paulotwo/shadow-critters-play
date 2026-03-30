import type React from "react";
import type { AnimalProps, AnimalId } from "./types";
export type { AnimalProps, AnimalId };

import {
  Cat, Dog, Elephant, Rabbit, Bird, Fish,
  Lion, Turtle, Butterfly, Frog, Horse, Owl,
  Penguin, Monkey, Giraffe, Bear, Dolphin, Snake, Bee, Pig,
  Panda, Koala, Zebra, Shark, Whale, Crocodile, Fox, Duck, Octopus, Tiger,
} from "./allAnimals";

export {
  Cat, Dog, Elephant, Rabbit, Bird, Fish,
  Lion, Turtle, Butterfly, Frog, Horse, Owl,
  Penguin, Monkey, Giraffe, Bear, Dolphin, Snake, Bee, Pig,
  Panda, Koala, Zebra, Shark, Whale, Crocodile, Fox, Duck, Octopus, Tiger,
};

export const animalComponents: Record<AnimalId, React.FC<AnimalProps>> = {
  cat: Cat, dog: Dog, elephant: Elephant, rabbit: Rabbit, bird: Bird, fish: Fish,
  lion: Lion, turtle: Turtle, butterfly: Butterfly, frog: Frog, horse: Horse, owl: Owl,
  penguin: Penguin, monkey: Monkey, giraffe: Giraffe, bear: Bear, dolphin: Dolphin,
  snake: Snake, bee: Bee, pig: Pig,
  panda: Panda, koala: Koala, zebra: Zebra, shark: Shark, whale: Whale,
  crocodile: Crocodile, fox: Fox, duck: Duck, octopus: Octopus, tiger: Tiger,
};

export const animalNames: Record<AnimalId, string> = {
  cat: "Gato", dog: "Cachorro", elephant: "Elefante", rabbit: "Coelho",
  bird: "Pássaro", fish: "Peixe", lion: "Leão", turtle: "Tartaruga",
  butterfly: "Borboleta", frog: "Sapo", horse: "Cavalo", owl: "Coruja",
  penguin: "Pinguim", monkey: "Macaco", giraffe: "Girafa", bear: "Urso",
  dolphin: "Golfinho", snake: "Cobra", bee: "Abelha", pig: "Porco",
  panda: "Panda", koala: "Coala", zebra: "Zebra", shark: "Tubarão",
  whale: "Baleia", crocodile: "Crocodilo", fox: "Raposa", duck: "Pato",
  octopus: "Polvo", tiger: "Tigre",
};

export const animalEmojis: Record<AnimalId, string> = {
  cat: "🐱", dog: "🐶", elephant: "🐘", rabbit: "🐰",
  bird: "🐦", fish: "🐟", lion: "🦁", turtle: "🐢",
  butterfly: "🦋", frog: "🐸", horse: "🐴", owl: "🦉",
  penguin: "🐧", monkey: "🐵", giraffe: "🦒", bear: "🐻",
  dolphin: "🐬", snake: "🐍", bee: "🐝", pig: "🐷",
  panda: "🐼", koala: "🐨", zebra: "🦓", shark: "🦈",
  whale: "🐳", crocodile: "🐊", fox: "🦊", duck: "🦆",
  octopus: "🐙", tiger: "🐯",
};
