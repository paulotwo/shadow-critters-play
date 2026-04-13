import type React from "react";
import type { AquaticProps, AquaticId } from "./types";
export type { AquaticProps, AquaticId };

import {
  Whale, Dolphin, Shark, Octopus, Fish,
  Seahorse, Jellyfish, Stingray, Seal, Crab,
  Lobster, Starfish, Narwhal, Orca, Clownfish,
  Squid, Walrus, SeaTurtle, Swordfish, Manatee,
} from "./allAquatics";

export {
  Whale, Dolphin, Shark, Octopus, Fish,
  Seahorse, Jellyfish, Stingray, Seal, Crab,
  Lobster, Starfish, Narwhal, Orca, Clownfish,
  Squid, Walrus, SeaTurtle, Swordfish, Manatee,
};

export const aquaticComponents: Record<AquaticId, React.FC<AquaticProps>> = {
  whale: Whale, dolphin: Dolphin, shark: Shark, octopus: Octopus, fish: Fish,
  seahorse: Seahorse, jellyfish: Jellyfish, stingray: Stingray, seal: Seal, crab: Crab,
  lobster: Lobster, starfish: Starfish, narwhal: Narwhal, orca: Orca, clownfish: Clownfish,
  squid: Squid, walrus: Walrus, sea_turtle: SeaTurtle, swordfish: Swordfish, manatee: Manatee,
};

export const aquaticEmojis: Record<AquaticId, string> = {
  whale: "🐳", dolphin: "🐬", shark: "🦈", octopus: "🐙", fish: "🐟",
  seahorse: "🐴", jellyfish: "🪼", stingray: "🐠", seal: "🦭", crab: "🦀",
  lobster: "🦞", starfish: "⭐", narwhal: "🦄", orca: "🐋", clownfish: "🐠",
  squid: "🦑", walrus: "🦭", sea_turtle: "🐢", swordfish: "🐟", manatee: "🦛",
};
