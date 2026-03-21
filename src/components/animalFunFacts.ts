import type { AnimalId } from "./AnimalSVGs";

export const animalFunFacts: Record<AnimalId, string[]> = {
  cat: [
    "Os gatos dormem até 16 horas por dia!",
    "Os gatos conseguem girar as orelhas em 180 graus!",
    "Um gato pode pular até 6 vezes o seu próprio tamanho!",
    "Os gatos têm mais de 20 tipos de miados diferentes!",
    "O nariz de cada gato é único, como a impressão digital humana!",
    "Os gatos conseguem enxergar no escuro!",
  ],
  dog: [
    "O faro do cachorro é 40 vezes melhor que o dos humanos!",
    "Cachorros conseguem aprender mais de 100 palavras!",
    "O cachorro mais rápido do mundo corre a 70 km por hora!",
    "Cachorros sonham enquanto dormem, igualzinho a gente!",
    "O nariz do cachorro é úmido para captar melhor os cheiros!",
    "Cachorros abanam o rabo para a direita quando estão felizes!",
  ],
  elephant: [
    "Os elefantes são os maiores animais terrestres do mundo!",
    "Elefantes conseguem se reconhecer no espelho!",
    "Um elefante bebe até 200 litros de água por dia!",
    "Elefantes têm uma memória incrível e nunca esquecem um amigo!",
    "Os elefantes se comunicam com sons tão graves que nós não ouvimos!",
    "Elefantes adoram tomar banho de lama para se proteger do sol!",
  ],
  rabbit: [
    "Os coelhos podem girar as orelhas em qualquer direção!",
    "Coelhos são tão felizes que pulam e giram no ar! Isso se chama binky!",
    "Os dentes dos coelhos nunca param de crescer!",
    "Coelhos conseguem ver quase 360 graus ao redor deles!",
    "Um coelho pode correr a 55 km por hora!",
    "Coelhos ronronam quando estão felizes, igual aos gatos!",
  ],
  bird: [
    "Alguns pássaros conseguem imitar a voz humana!",
    "O beija-flor é o único pássaro que voa para trás!",
    "Pássaros enxergam mais cores do que os humanos!",
    "O avestruz é o pássaro mais rápido correndo, a 70 km por hora!",
    "Pássaros cantam para se comunicar e marcar território!",
    "As penas dos pássaros são mais fortes do que parecem!",
  ],
  fish: [
    "Existem peixes que brilham no fundo do mar!",
    "Alguns peixes conseguem voar por cima da água!",
    "O peixe-palhaço vive dentro das anêmonas do mar!",
    "Peixes não têm pálpebras, eles dormem de olhos abertos!",
    "O tubarão-baleia é o maior peixe do mundo!",
    "Alguns peixes mudam de cor para se esconder dos predadores!",
  ],
};

export function getRandomFunFact(animalId: AnimalId): string {
  const facts = animalFunFacts[animalId];
  return facts[Math.floor(Math.random() * facts.length)];
}
