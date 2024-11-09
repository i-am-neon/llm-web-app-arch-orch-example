"use server";

import { Character } from "@/types/Character";
import generateCharacterIdea from "./ai/generate-character-idea";
import generatePortraitUrl from "./ai/generate-portrait";
import generateStartingInventory from "./ai/generate-starting-inventory";

// Orchestrates multiple AI calls to generate a complete character
export async function generateCharacter(): Promise<Character> {
  const characterIdea = await generateCharacterIdea();
  // Run in parallel
  const [startingInventory, portraitImageUrl] = await Promise.all([
    generateStartingInventory({ characterIdea }),
    generatePortraitUrl({ characterIdea }),
  ]);
  return {
    ...characterIdea,
    startingInventory,
    portraitImageUrl,
  };
}

