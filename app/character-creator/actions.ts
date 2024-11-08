"use server";

import { Character } from "@/types/Character";
import generateCharacterIdea from "./ai/generate-character-idea";
import generatePortraitUrl from "./ai/generate-portrait";
import generateStartingInventory from "./ai/generate-starting-inventory";
import { CharacterIdea } from "@/types/CharacterIdea";

export async function generateCharacter(): Promise<Character> {
  const characterIdea = await generateCharacterIdea();
  const startingInventory = await generateStartingInventory({ characterIdea });
  const portraitUrl = await generatePortraitUrl({ characterIdea });
  return {
    ...characterIdea,
    ...startingInventory,
    portraitImageUrl: portraitUrl,
  };
}

export async function generateP(): Promise<any> {
  const characterIdea: CharacterIdea = {
    name: "Thalindra Moonsong",
    gender: "female",
    race: "Elf",
    class: "Druid",
    personality: ["calm", "wise", "empathetic"],
    age: "mature adult",
    backstory:
      "Thalindra was once a guardian of the ancient forests, but after a devastating wildfire destroyed her home, she vowed to restore balance to the natural world. She now travels the land, using her magic to heal the earth and protect the vulnerable.",
    physicalDescription: {
      eyeColor: "deep blue",
      hairColor: "silvery white",
      facialFeatures:
        "delicate features with high cheekbones, a small nose, and a serene expression",
      height: "5'9\"",
      build: "slim",
      clothing:
        "She wears a flowing green robe adorned with leaves and vines, a wooden staff topped with a crystal, and a necklace of animal bones. Her bare feet are wrapped in simple leather straps.",
    },
  };
  const portraitUrl = await generatePortraitUrl({ characterIdea });
  return {
    portraitImageUrl: portraitUrl,
  };
}

