"use server";

import { Character } from "@/types/Character";
import generateCharacterIdea from "./ai/generate-character-idea";
import generatePortraitUrl from "./ai/generate-portrait";
import generateStartingInventory from "./ai/generate-starting-inventory";
import getRandomRaceAndClass from "./get-random-race-and-class";

// Orchestrates multiple AI calls to generate a complete character
export async function generateCharacter(): Promise<Character> {
  const { race, characterClass } = getRandomRaceAndClass();
  const characterIdea = await generateCharacterIdea({ race, characterClass });
  // Run in parallel
  const [startingInventory, portraitImageUrl] = await Promise.all([
    generateStartingInventory({ characterIdea }),
    generatePortraitUrl({ characterIdea, race, characterClass }),
  ]);
  return {
    ...characterIdea,
    race,
    characterClass,
    startingInventory,
    portraitImageUrl,
  };
}

