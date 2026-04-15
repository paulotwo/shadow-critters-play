import type { AnimalId } from "@/components/animals/types";
import type { DinoId } from "@/components/dinosaurs/types";
import type { AquaticId } from "@/components/aquatics/types";

export type Locale = "pt" | "en" | "es" | "fr" | "it" | "de";

export interface Translations {
  ui: {
    gameTitle: string;
    gameSubtitle: string;
    animalsButton: string;
    dinosButton: string;
    aquaticsButton: string;
    backButton: string;
    questionAnimal: string;
    questionDino: string;
    questionAquatic: string;
    questionRevealAnimal: string;
    questionRevealDino: string;
    questionRevealAquatic: string;
    correctPrefix: string;
    wrongPrefix: string;
    funFactPrefix: string;
    languageLabel: string;
    pwaInstallMessage: string;
    pwaInstallButton: string;
    pwaIosMessage: string;
    modeShadow: string;
    modeReveal: string;
  };
  animalNames: Record<AnimalId, string>;
  dinoNames: Record<DinoId, string>;
  aquaticNames: Record<AquaticId, string>;
}

export const translations: Record<Locale, Translations> = {
  pt: {
    ui: {
      gameTitle: "🌙 Jogo de Sombras",
      gameSubtitle: "Descubra qual animal está escondido na sombra!",
      animalsButton: "🐾 Animais",
      dinosButton: "🦖 Dinossauros",
      aquaticsButton: "🐠 Aquáticos",
      backButton: "← Início",
      questionAnimal: "Qual é este animal?",
      questionDino: "Qual é este dinossauro?",
      questionAquatic: "Qual é este animal aquático?",
      questionRevealAnimal: "Quem sou eu? 🧩",
      questionRevealDino: "Quem sou eu? 🧩",
      questionRevealAquatic: "Quem sou eu? 🧩",
      correctPrefix: "Isso! É o",
      wrongPrefix: "Ops! Era o",
      funFactPrefix: "💡",
      languageLabel: "Idioma",
      modeShadow: "🌑 Sombra",
      modeReveal: "🧩 Quem sou eu?",
      pwaInstallMessage: "Instala a app para jogar sem internet!",
      pwaInstallButton: "Instalar",
      pwaIosMessage: "Toca em Partilhar ⬆ e depois \"Adicionar ao ecrã principal\"",
    },
    animalNames: {
      cat: "Gato", dog: "Cachorro", elephant: "Elefante", rabbit: "Coelho",
      bird: "Pássaro", lion: "Leão", turtle: "Tartaruga",
      butterfly: "Borboleta", frog: "Sapo", horse: "Cavalo", owl: "Coruja",
      penguin: "Pinguim", monkey: "Macaco", giraffe: "Girafa", bear: "Urso",
      snake: "Cobra", bee: "Abelha", pig: "Porco",
      panda: "Panda", koala: "Coala", zebra: "Zebra",
      crocodile: "Crocodilo", fox: "Raposa", duck: "Pato",
      tiger: "Tigre",
    } as Record<AnimalId, string>,
    dinoNames: {
      trex: "T-Rex", triceratops: "Tricerátops", stegosaurus: "Estegossauro",
      brachiosaurus: "Braquiossauro", velociraptor: "Velociraptor", pteranodon: "Pteranodonte",
      ankylosaurus: "Anquilossauro", spinosaurus: "Espinossauro", parasaurolophus: "Parassaurolofo",
      diplodocus: "Diplódoco", pachycephalosaurus: "Paquicefalossauro", iguanodon: "Iguanodonte",
      compsognathus: "Compsognato", carnotaurus: "Carnotauro", dilophosaurus: "Dilofossauro",
      apatosaurus: "Apatossauro", plesiosaurus: "Plesiossauro", mosasaurus: "Mosassauro",
      dimetrodon: "Dimetrodonte", archaeopteryx: "Arqueoptérix",
    },
    aquaticNames: {
      whale: "Baleia", dolphin: "Golfinho", shark: "Tubarão", octopus: "Polvo", fish: "Peixe",
      seahorse: "Cavalo-marinho", jellyfish: "Água-viva", stingray: "Arraia", seal: "Foca", crab: "Caranguejo",
      lobster: "Lagosta", starfish: "Estrela-do-mar", narwhal: "Narval", orca: "Orca", clownfish: "Peixe-palhaço",
      squid: "Lula", walrus: "Morsa", sea_turtle: "Tartaruga-marinha", swordfish: "Peixe-espada", manatee: "Peixe-boi",
    },
  },
  en: {
    ui: {
      gameTitle: "🌙 Shadow Game",
      gameSubtitle: "Find out which animal is hiding in the shadow!",
      animalsButton: "🐾 Animals",
      dinosButton: "🦖 Dinosaurs",
      aquaticsButton: "🐠 Aquatics",
      backButton: "← Home",
      questionAnimal: "Which animal is this?",
      questionDino: "Which dinosaur is this?",
      questionAquatic: "Which aquatic animal is this?",
      questionRevealAnimal: "Who am I? 🧩",
      questionRevealDino: "Who am I? 🧩",
      questionRevealAquatic: "Who am I? 🧩",
      correctPrefix: "Yes! It's the",
      wrongPrefix: "Oops! It was the",
      funFactPrefix: "💡",
      languageLabel: "Language",
      modeShadow: "🌑 Shadow",
      modeReveal: "🧩 Who am I?",
      pwaInstallMessage: "Install the app to play offline!",
      pwaInstallButton: "Install",
      pwaIosMessage: "Tap Share ⬆ then \"Add to Home Screen\"",
    },
    animalNames: {
      cat: "Cat", dog: "Dog", elephant: "Elephant", rabbit: "Rabbit",
      bird: "Bird", lion: "Lion", turtle: "Turtle",
      butterfly: "Butterfly", frog: "Frog", horse: "Horse", owl: "Owl",
      penguin: "Penguin", monkey: "Monkey", giraffe: "Giraffe", bear: "Bear",
      snake: "Snake", bee: "Bee", pig: "Pig",
      panda: "Panda", koala: "Koala", zebra: "Zebra",
      crocodile: "Crocodile", fox: "Fox", duck: "Duck",
      tiger: "Tiger",
    } as Record<AnimalId, string>,
    dinoNames: {
      trex: "T-Rex", triceratops: "Triceratops", stegosaurus: "Stegosaurus",
      brachiosaurus: "Brachiosaurus", velociraptor: "Velociraptor", pteranodon: "Pteranodon",
      ankylosaurus: "Ankylosaurus", spinosaurus: "Spinosaurus", parasaurolophus: "Parasaurolophus",
      diplodocus: "Diplodocus", pachycephalosaurus: "Pachycephalosaurus", iguanodon: "Iguanodon",
      compsognathus: "Compsognathus", carnotaurus: "Carnotaurus", dilophosaurus: "Dilophosaurus",
      apatosaurus: "Apatosaurus", plesiosaurus: "Plesiosaurus", mosasaurus: "Mosasaurus",
      dimetrodon: "Dimetrodon", archaeopteryx: "Archaeopteryx",
    },
    aquaticNames: {
      whale: "Whale", dolphin: "Dolphin", shark: "Shark", octopus: "Octopus", fish: "Fish",
      seahorse: "Seahorse", jellyfish: "Jellyfish", stingray: "Stingray", seal: "Seal", crab: "Crab",
      lobster: "Lobster", starfish: "Starfish", narwhal: "Narwhal", orca: "Orca", clownfish: "Clownfish",
      squid: "Squid", walrus: "Walrus", sea_turtle: "Sea Turtle", swordfish: "Swordfish", manatee: "Manatee",
    },
  },
  es: {
    ui: {
      gameTitle: "🌙 Juego de Sombras",
      gameSubtitle: "¡Descubre qué animal se esconde en la sombra!",
      animalsButton: "🐾 Animales",
      dinosButton: "🦖 Dinosaurios",
      aquaticsButton: "🐠 Acuáticos",
      backButton: "← Inicio",
      questionAnimal: "¿Qué animal es este?",
      questionDino: "¿Qué dinosaurio es este?",
      questionAquatic: "¿Qué animal acuático es este?",
      questionRevealAnimal: "¿Quién soy? 🧩",
      questionRevealDino: "¿Quién soy? 🧩",
      questionRevealAquatic: "¿Quién soy? 🧩",
      correctPrefix: "¡Sí! Es el",
      wrongPrefix: "¡Ups! Era el",
      funFactPrefix: "💡",
      languageLabel: "Idioma",
      modeShadow: "🌑 Sombra",
      modeReveal: "🧩 ¿Quién soy?",
      pwaInstallMessage: "¡Instala la app para jugar sin internet!",
      pwaInstallButton: "Instalar",
      pwaIosMessage: "Toca Compartir ⬆ y luego \"Añadir a pantalla de inicio\"",
    },
    animalNames: {
      cat: "Gato", dog: "Perro", elephant: "Elefante", rabbit: "Conejo",
      bird: "Pájaro", lion: "León", turtle: "Tortuga",
      butterfly: "Mariposa", frog: "Rana", horse: "Caballo", owl: "Búho",
      penguin: "Pingüino", monkey: "Mono", giraffe: "Jirafa", bear: "Oso",
      snake: "Serpiente", bee: "Abeja", pig: "Cerdo",
      panda: "Panda", koala: "Koala", zebra: "Cebra",
      crocodile: "Cocodrilo", fox: "Zorro", duck: "Pato",
      tiger: "Tigre",
    } as Record<AnimalId, string>,
    dinoNames: {
      trex: "T-Rex", triceratops: "Triceratops", stegosaurus: "Estegosaurio",
      brachiosaurus: "Braquiosaurio", velociraptor: "Velociraptor", pteranodon: "Pteranodonte",
      ankylosaurus: "Anquilosaurio", spinosaurus: "Espinosaurio", parasaurolophus: "Parasaurolofo",
      diplodocus: "Diplódoco", pachycephalosaurus: "Paquicefalosaurio", iguanodon: "Iguanodonte",
      compsognathus: "Compsognato", carnotaurus: "Carnotauro", dilophosaurus: "Dilofosaurio",
      apatosaurus: "Apatosaurio", plesiosaurus: "Plesiosauro", mosasaurus: "Mosasaurio",
      dimetrodon: "Dimetrodonte", archaeopteryx: "Arqueoptérix",
    },
    aquaticNames: {
      whale: "Ballena", dolphin: "Delfín", shark: "Tiburón", octopus: "Pulpo", fish: "Pez",
      seahorse: "Caballito de mar", jellyfish: "Medusa", stingray: "Raya", seal: "Foca", crab: "Cangrejo",
      lobster: "Langosta", starfish: "Estrella de mar", narwhal: "Narval", orca: "Orca", clownfish: "Pez payaso",
      squid: "Calamar", walrus: "Morsa", sea_turtle: "Tortuga marina", swordfish: "Pez espada", manatee: "Manatí",
    },
  },
  fr: {
    ui: {
      gameTitle: "🌙 Jeu d'Ombres",
      gameSubtitle: "Découvre quel animal se cache dans l'ombre !",
      animalsButton: "🐾 Animaux",
      dinosButton: "🦖 Dinosaures",
      aquaticsButton: "🐠 Aquatiques",
      backButton: "← Accueil",
      questionAnimal: "Quel est cet animal ?",
      questionDino: "Quel est ce dinosaure ?",
      questionAquatic: "Quel est cet animal aquatique ?",
      questionRevealAnimal: "Qui suis-je ? 🧩",
      questionRevealDino: "Qui suis-je ? 🧩",
      questionRevealAquatic: "Qui suis-je ? 🧩",
      correctPrefix: "Oui ! C'est le",
      wrongPrefix: "Oups ! C'était le",
      funFactPrefix: "💡",
      languageLabel: "Langue",
      modeShadow: "🌑 Ombre",
      modeReveal: "🧩 Qui suis-je ?",
      pwaInstallMessage: "Installe l'appli pour jouer sans internet !",
      pwaInstallButton: "Installer",
      pwaIosMessage: "Appuie sur Partager ⬆ puis \"Sur l'écran d'accueil\"",
    },
    animalNames: {
      cat: "Chat", dog: "Chien", elephant: "Éléphant", rabbit: "Lapin",
      bird: "Oiseau", lion: "Lion", turtle: "Tortue",
      butterfly: "Papillon", frog: "Grenouille", horse: "Cheval", owl: "Chouette",
      penguin: "Manchot", monkey: "Singe", giraffe: "Girafe", bear: "Ours",
      snake: "Serpent", bee: "Abeille", pig: "Cochon",
      panda: "Panda", koala: "Koala", zebra: "Zèbre",
      crocodile: "Crocodile", fox: "Renard", duck: "Canard",
      tiger: "Tigre",
    } as Record<AnimalId, string>,
    dinoNames: {
      trex: "T-Rex", triceratops: "Tricératops", stegosaurus: "Stégosaure",
      brachiosaurus: "Brachiosaure", velociraptor: "Vélociraptor", pteranodon: "Ptéranodon",
      ankylosaurus: "Ankylosaure", spinosaurus: "Spinosaure", parasaurolophus: "Parasaurolophus",
      diplodocus: "Diplodocus", pachycephalosaurus: "Pachycéphalosaure", iguanodon: "Iguanodon",
      compsognathus: "Compsognathus", carnotaurus: "Carnotaure", dilophosaurus: "Dilophosaure",
      apatosaurus: "Apatosaure", plesiosaurus: "Plésiosaure", mosasaurus: "Mosasaure",
      dimetrodon: "Dimétrodon", archaeopteryx: "Archéoptéryx",
    },
    aquaticNames: {
      whale: "Baleine", dolphin: "Dauphin", shark: "Requin", octopus: "Pieuvre", fish: "Poisson",
      seahorse: "Hippocampe", jellyfish: "Méduse", stingray: "Raie", seal: "Phoque", crab: "Crabe",
      lobster: "Homard", starfish: "Étoile de mer", narwhal: "Narval", orca: "Orque", clownfish: "Poisson-clown",
      squid: "Calmar", walrus: "Morse", sea_turtle: "Tortue marine", swordfish: "Espadon", manatee: "Lamantin",
    },
  },
  it: {
    ui: {
      gameTitle: "🌙 Gioco delle Ombre",
      gameSubtitle: "Scopri quale animale si nasconde nell'ombra!",
      animalsButton: "🐾 Animali",
      dinosButton: "🦖 Dinosauri",
      aquaticsButton: "🐠 Acquatici",
      backButton: "← Inizio",
      questionAnimal: "Qual è questo animale?",
      questionDino: "Qual è questo dinosauro?",
      questionAquatic: "Qual è questo animale acquatico?",
      questionRevealAnimal: "Chi sono? 🧩",
      questionRevealDino: "Chi sono? 🧩",
      questionRevealAquatic: "Chi sono? 🧩",
      correctPrefix: "Sì! È il",
      wrongPrefix: "Ops! Era il",
      funFactPrefix: "💡",
      languageLabel: "Lingua",
      modeShadow: "🌑 Ombra",
      modeReveal: "🧩 Chi sono?",
      pwaInstallMessage: "Installa l'app per giocare senza internet!",
      pwaInstallButton: "Installa",
      pwaIosMessage: "Tocca Condividi ⬆ poi \"Aggiungi a Home\"",
    },
    animalNames: {
      cat: "Gatto", dog: "Cane", elephant: "Elefante", rabbit: "Coniglio",
      bird: "Uccello", lion: "Leone", turtle: "Tartaruga",
      butterfly: "Farfalla", frog: "Rana", horse: "Cavallo", owl: "Gufo",
      penguin: "Pinguino", monkey: "Scimmia", giraffe: "Giraffa", bear: "Orso",
      snake: "Serpente", bee: "Ape", pig: "Maiale",
      panda: "Panda", koala: "Koala", zebra: "Zebra",
      crocodile: "Coccodrillo", fox: "Volpe", duck: "Anatra",
      tiger: "Tigre",
    } as Record<AnimalId, string>,
    dinoNames: {
      trex: "T-Rex", triceratops: "Triceratopo", stegosaurus: "Stegosauro",
      brachiosaurus: "Brachiosauro", velociraptor: "Velociraptor", pteranodon: "Pteranodonte",
      ankylosaurus: "Anchilosauro", spinosaurus: "Spinosauro", parasaurolophus: "Parasaurolofo",
      diplodocus: "Diplodoco", pachycephalosaurus: "Pachicefalosauro", iguanodon: "Iguanodonte",
      compsognathus: "Compsognato", carnotaurus: "Carnotauro", dilophosaurus: "Dilofosauro",
      apatosaurus: "Apatosauro", plesiosaurus: "Plesiosauro", mosasaurus: "Mosasauro",
      dimetrodon: "Dimetrodonte", archaeopteryx: "Archaeopteryx",
    },
    aquaticNames: {
      whale: "Balena", dolphin: "Delfino", shark: "Squalo", octopus: "Polpo", fish: "Pesce",
      seahorse: "Cavalluccio marino", jellyfish: "Medusa", stingray: "Razza", seal: "Foca", crab: "Granchio",
      lobster: "Aragosta", starfish: "Stella marina", narwhal: "Narvalo", orca: "Orca", clownfish: "Pesce pagliaccio",
      squid: "Calamaro", walrus: "Tricheco", sea_turtle: "Tartaruga marina", swordfish: "Pesce spada", manatee: "Lamantino",
    },
  },
  de: {
    ui: {
      gameTitle: "🌙 Schattenspiel",
      gameSubtitle: "Finde heraus, welches Tier sich im Schatten versteckt!",
      animalsButton: "🐾 Tiere",
      dinosButton: "🦖 Dinosaurier",
      aquaticsButton: "🐠 Wassertiere",
      backButton: "← Start",
      questionAnimal: "Welches Tier ist das?",
      questionDino: "Welcher Dinosaurier ist das?",
      questionAquatic: "Welches Wassertier ist das?",
      questionRevealAnimal: "Wer bin ich? 🧩",
      questionRevealDino: "Wer bin ich? 🧩",
      questionRevealAquatic: "Wer bin ich? 🧩",
      correctPrefix: "Ja! Es ist der/die/das",
      wrongPrefix: "Ups! Es war der/die/das",
      funFactPrefix: "💡",
      languageLabel: "Sprache",
      modeShadow: "🌑 Schatten",
      modeReveal: "🧩 Wer bin ich?",
      pwaInstallMessage: "Installiere die App, um offline zu spielen!",
      pwaInstallButton: "Installieren",
      pwaIosMessage: "Tippe auf Teilen ⬆ und dann \"Zum Home-Bildschirm\"",
    },
    animalNames: {
      cat: "Katze", dog: "Hund", elephant: "Elefant", rabbit: "Kaninchen",
      bird: "Vogel", lion: "Löwe", turtle: "Schildkröte",
      butterfly: "Schmetterling", frog: "Frosch", horse: "Pferd", owl: "Eule",
      penguin: "Pinguin", monkey: "Affe", giraffe: "Giraffe", bear: "Bär",
      snake: "Schlange", bee: "Biene", pig: "Schwein",
      panda: "Panda", koala: "Koala", zebra: "Zebra",
      crocodile: "Krokodil", fox: "Fuchs", duck: "Ente",
      tiger: "Tiger",
    } as Record<AnimalId, string>,
    dinoNames: {
      trex: "T-Rex", triceratops: "Triceratops", stegosaurus: "Stegosaurus",
      brachiosaurus: "Brachiosaurus", velociraptor: "Velociraptor", pteranodon: "Pteranodon",
      ankylosaurus: "Ankylosaurus", spinosaurus: "Spinosaurus", parasaurolophus: "Parasaurolophus",
      diplodocus: "Diplodocus", pachycephalosaurus: "Pachycephalosaurus", iguanodon: "Iguanodon",
      compsognathus: "Compsognathus", carnotaurus: "Carnotaurus", dilophosaurus: "Dilophosaurus",
      apatosaurus: "Apatosaurus", plesiosaurus: "Plesiosaurus", mosasaurus: "Mosasaurus",
      dimetrodon: "Dimetrodon", archaeopteryx: "Archaeopteryx",
    },
    aquaticNames: {
      whale: "Wal", dolphin: "Delfin", shark: "Hai", octopus: "Krake", fish: "Fisch",
      seahorse: "Seepferdchen", jellyfish: "Qualle", stingray: "Rochen", seal: "Robbe", crab: "Krabbe",
      lobster: "Hummer", starfish: "Seestern", narwhal: "Narwal", orca: "Orca", clownfish: "Clownfisch",
      squid: "Tintenfisch", walrus: "Walross", sea_turtle: "Meeresschildkröte", swordfish: "Schwertfisch", manatee: "Seekuh",
    },
  },
};
