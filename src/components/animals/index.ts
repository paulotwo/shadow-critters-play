import type React from "react";
import type { AnimalProps, AnimalId } from "./types";
export type { AnimalProps, AnimalId };

import {
  Cat, Dog, Elephant, Rabbit, Bird, Fish,
  Lion, Turtle, Butterfly, Frog, Horse, Owl,
  Penguin, Monkey, Giraffe, Bear, Dolphin, Snake, Bee, Pig,
} from "./allAnimals";

export {
  Cat, Dog, Elephant, Rabbit, Bird, Fish,
  Lion, Turtle, Butterfly, Frog, Horse, Owl,
  Penguin, Monkey, Giraffe, Bear, Dolphin, Snake, Bee, Pig,
};

export const animalComponents: Record<AnimalId, React.FC<AnimalProps>> = {
  cat: Cat, dog: Dog, elephant: Elephant, rabbit: Rabbit, bird: Bird, fish: Fish,
  lion: Lion, turtle: Turtle, butterfly: Butterfly, frog: Frog, horse: Horse, owl: Owl,
  penguin: Penguin, monkey: Monkey, giraffe: Giraffe, bear: Bear, dolphin: Dolphin,
  snake: Snake, bee: Bee, pig: Pig,
};

export const animalNames: Record<AnimalId, string> = {
  cat: "Gato", dog: "Cachorro", elephant: "Elefante", rabbit: "Coelho",
  bird: "Pássaro", fish: "Peixe", lion: "Leão", turtle: "Tartaruga",
  butterfly: "Borboleta", frog: "Sapo", horse: "Cavalo", owl: "Coruja",
  penguin: "Pinguim", monkey: "Macaco", giraffe: "Girafa", bear: "Urso",
  dolphin: "Golfinho", snake: "Cobra", bee: "Abelha", pig: "Porco",
};

export const animalEmojis: Record<AnimalId, string> = {
  cat: "🐱", dog: "🐶", elephant: "🐘", rabbit: "🐰",
  bird: "🐦", fish: "🐟", lion: "🦁", turtle: "🐢",
  butterfly: "🦋", frog: "🐸", horse: "🐴", owl: "🦉",
  penguin: "🐧", monkey: "🐵", giraffe: "🦒", bear: "🐻",
  dolphin: "🐬", snake: "🐍", bee: "🐝", pig: "🐷",
};
