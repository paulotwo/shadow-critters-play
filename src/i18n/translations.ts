import type { AnimalId } from "@/components/animals/types";
import type { DinoId } from "@/components/dinosaurs/types";

export type Locale = "pt" | "en" | "es" | "fr" | "it";

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
    languageLabel: string;
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
      languageLabel: "Idioma",
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
      languageLabel: "Language",
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
  es: {
    ui: {
      gameTitle: "🌙 Juego de Sombras",
      gameSubtitle: "¡Descubre qué animal se esconde en la sombra!",
      animalsButton: "🐾 Animales",
      dinosButton: "🦖 Dinosaurios",
      backButton: "← Inicio",
      questionAnimal: "¿Qué animal es este?",
      questionDino: "¿Qué dinosaurio es este?",
      correctPrefix: "¡Sí! Es el",
      wrongPrefix: "¡Ups! Era el",
      funFactPrefix: "💡",
      languageLabel: "Idioma",
    },
    animalNames: {
      cat: "Gato", dog: "Perro", elephant: "Elefante", rabbit: "Conejo",
      bird: "Pájaro", fish: "Pez", lion: "León", turtle: "Tortuga",
      butterfly: "Mariposa", frog: "Rana", horse: "Caballo", owl: "Búho",
      penguin: "Pingüino", monkey: "Mono", giraffe: "Jirafa", bear: "Oso",
      dolphin: "Delfín", snake: "Serpiente", bee: "Abeja", pig: "Cerdo",
    },
    dinoNames: {
      trex: "T-Rex", triceratops: "Triceratops", stegosaurus: "Estegosaurio",
      brachiosaurus: "Braquiosaurio", velociraptor: "Velociraptor", pteranodon: "Pteranodonte",
      ankylosaurus: "Anquilosaurio", spinosaurus: "Espinosaurio", parasaurolophus: "Parasaurolofo",
      diplodocus: "Diplódoco", pachycephalosaurus: "Paquicefalosaurio", iguanodon: "Iguanodonte",
      compsognathus: "Compsognato", carnotaurus: "Carnotauro", dilophosaurus: "Dilofosaurio",
      apatosaurus: "Apatosaurio", plesiosaurus: "Plesiosauro", mosasaurus: "Mosasaurio",
      dimetrodon: "Dimetrodonte", archaeopteryx: "Arqueoptérix",
    },
  },
  fr: {
    ui: {
      gameTitle: "🌙 Jeu d'Ombres",
      gameSubtitle: "Découvre quel animal se cache dans l'ombre !",
      animalsButton: "🐾 Animaux",
      dinosButton: "🦖 Dinosaures",
      backButton: "← Accueil",
      questionAnimal: "Quel est cet animal ?",
      questionDino: "Quel est ce dinosaure ?",
      correctPrefix: "Oui ! C'est le",
      wrongPrefix: "Oups ! C'était le",
      funFactPrefix: "💡",
      languageLabel: "Langue",
    },
    animalNames: {
      cat: "Chat", dog: "Chien", elephant: "Éléphant", rabbit: "Lapin",
      bird: "Oiseau", fish: "Poisson", lion: "Lion", turtle: "Tortue",
      butterfly: "Papillon", frog: "Grenouille", horse: "Cheval", owl: "Chouette",
      penguin: "Manchot", monkey: "Singe", giraffe: "Girafe", bear: "Ours",
      dolphin: "Dauphin", snake: "Serpent", bee: "Abeille", pig: "Cochon",
    },
    dinoNames: {
      trex: "T-Rex", triceratops: "Tricératops", stegosaurus: "Stégosaure",
      brachiosaurus: "Brachiosaure", velociraptor: "Vélociraptor", pteranodon: "Ptéranodon",
      ankylosaurus: "Ankylosaure", spinosaurus: "Spinosaure", parasaurolophus: "Parasaurolophus",
      diplodocus: "Diplodocus", pachycephalosaurus: "Pachycéphalosaure", iguanodon: "Iguanodon",
      compsognathus: "Compsognathus", carnotaurus: "Carnotaure", dilophosaurus: "Dilophosaure",
      apatosaurus: "Apatosaure", plesiosaurus: "Plésiosaure", mosasaurus: "Mosasaure",
      dimetrodon: "Dimétrodon", archaeopteryx: "Archéoptéryx",
    },
  },
  it: {
    ui: {
      gameTitle: "🌙 Gioco delle Ombre",
      gameSubtitle: "Scopri quale animale si nasconde nell'ombra!",
      animalsButton: "🐾 Animali",
      dinosButton: "🦖 Dinosauri",
      backButton: "← Inizio",
      questionAnimal: "Qual è questo animale?",
      questionDino: "Qual è questo dinosauro?",
      correctPrefix: "Sì! È il",
      wrongPrefix: "Ops! Era il",
      funFactPrefix: "💡",
      languageLabel: "Lingua",
    },
    animalNames: {
      cat: "Gatto", dog: "Cane", elephant: "Elefante", rabbit: "Coniglio",
      bird: "Uccello", fish: "Pesce", lion: "Leone", turtle: "Tartaruga",
      butterfly: "Farfalla", frog: "Rana", horse: "Cavallo", owl: "Gufo",
      penguin: "Pinguino", monkey: "Scimmia", giraffe: "Giraffa", bear: "Orso",
      dolphin: "Delfino", snake: "Serpente", bee: "Ape", pig: "Maiale",
    },
    dinoNames: {
      trex: "T-Rex", triceratops: "Triceratopo", stegosaurus: "Stegosauro",
      brachiosaurus: "Brachiosauro", velociraptor: "Velociraptor", pteranodon: "Pteranodonte",
      ankylosaurus: "Anchilosauro", spinosaurus: "Spinosauro", parasaurolophus: "Parasaurolofo",
      diplodocus: "Diplodoco", pachycephalosaurus: "Pachicefalosauro", iguanodon: "Iguanodonte",
      compsognathus: "Compsognato", carnotaurus: "Carnotauro", dilophosaurus: "Dilofosauro",
      apatosaurus: "Apatosauro", plesiosaurus: "Plesiosauro", mosasaurus: "Mosasauro",
      dimetrodon: "Dimetrodonte", archaeopteryx: "Archaeopteryx",
    },
  },
};
