import type { AnimalId } from "@/components/animals/types";
import type { DinoId } from "@/components/dinosaurs/types";

export type Locale = "pt" | "en";

export interface Translations {
  ui: {
    gameTitle: string;
    gameSubtitle: string;
    animalsButton: string;
    dinosButton: string;
    backButton: string;
    questionAnimal: string;
    questionDino: string;
    correctPrefix: string;
    wrongPrefix: string;
    funFactPrefix: string;
  };
  animalNames: Record<AnimalId, string>;
  dinoNames: Record<DinoId, string>;
}

export const translations: Record<Locale, Translations> = {
  pt: {
    ui: {
      gameTitle: "🌙 Jogo de Sombras",
      gameSubtitle: "Descubra qual animal está escondido na sombra!",
      animalsButton: "🐾 Animais",
      dinosButton: "🦖 Dinossauros",
      backButton: "← Início",
      questionAnimal: "Qual é este animal?",
      questionDino: "Qual é este dinossauro?",
      correctPrefix: "Isso! É o",
      wrongPrefix: "Ops! Era o",
      funFactPrefix: "💡",
    },
    animalNames: {
      cat: "Gato", dog: "Cachorro", elephant: "Elefante", rabbit: "Coelho",
      bird: "Pássaro", fish: "Peixe", lion: "Leão", turtle: "Tartaruga",
      butterfly: "Borboleta", frog: "Sapo", horse: "Cavalo", owl: "Coruja",
      penguin: "Pinguim", monkey: "Macaco", giraffe: "Girafa", bear: "Urso",
      dolphin: "Golfinho", snake: "Cobra", bee: "Abelha", pig: "Porco",
    },
    dinoNames: {
      trex: "T-Rex", triceratops: "Tricerátops", stegosaurus: "Estegossauro",
      brachiosaurus: "Braquiossauro", velociraptor: "Velociraptor", pteranodon: "Pteranodonte",
      ankylosaurus: "Anquilossauro", spinosaurus: "Espinossauro", parasaurolophus: "Parassaurolofo",
      diplodocus: "Diplódoco", pachycephalosaurus: "Paquicefalossauro", iguanodon: "Iguanodonte",
      compsognathus: "Compsognato", carnotaurus: "Carnotauro", dilophosaurus: "Dilofossauro",
      apatosaurus: "Apatossauro", plesiosaurus: "Plesiossauro", mosasaurus: "Mosassauro",
      dimetrodon: "Dimetrodonte", archaeopteryx: "Arqueoptérix",
    },
  },
  en: {
    ui: {
      gameTitle: "🌙 Shadow Game",
      gameSubtitle: "Find out which animal is hiding in the shadow!",
      animalsButton: "🐾 Animals",
      dinosButton: "🦖 Dinosaurs",
      backButton: "← Home",
      questionAnimal: "Which animal is this?",
      questionDino: "Which dinosaur is this?",
      correctPrefix: "Yes! It's the",
      wrongPrefix: "Oops! It was the",
      funFactPrefix: "💡",
    },
    animalNames: {
      cat: "Cat", dog: "Dog", elephant: "Elephant", rabbit: "Rabbit",
      bird: "Bird", fish: "Fish", lion: "Lion", turtle: "Turtle",
      butterfly: "Butterfly", frog: "Frog", horse: "Horse", owl: "Owl",
      penguin: "Penguin", monkey: "Monkey", giraffe: "Giraffe", bear: "Bear",
      dolphin: "Dolphin", snake: "Snake", bee: "Bee", pig: "Pig",
    },
    dinoNames: {
      trex: "T-Rex", triceratops: "Triceratops", stegosaurus: "Stegosaurus",
      brachiosaurus: "Brachiosaurus", velociraptor: "Velociraptor", pteranodon: "Pteranodon",
      ankylosaurus: "Ankylosaurus", spinosaurus: "Spinosaurus", parasaurolophus: "Parasaurolophus",
      diplodocus: "Diplodocus", pachycephalosaurus: "Pachycephalosaurus", iguanodon: "Iguanodon",
      compsognathus: "Compsognathus", carnotaurus: "Carnotaurus", dilophosaurus: "Dilophosaurus",
      apatosaurus: "Apatosaurus", plesiosaurus: "Plesiosaurus", mosasaurus: "Mosasaurus",
      dimetrodon: "Dimetrodon", archaeopteryx: "Archaeopteryx",
    },
  },
};
