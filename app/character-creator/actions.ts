"use server";

import { Character } from "@/types/Character";
import generateCharacterIdea from "./ai/generate-character-idea";
import generateStartingInventory from "./ai/generate-starting-inventory";

export async function generateCharacter(): Promise<Character> {
  const characterIdea = await generateCharacterIdea();
  const startingInventory = await generateStartingInventory({ characterIdea });
  return {
    ...characterIdea,
    ...startingInventory,
  };
}

