"use server";

import { Character } from "@/types/Character";
import generateCharacterIdea from "./ai/generate-character-idea";
import generatePortraitUrl from "./ai/generate-portrait";
import generateStartingInventory from "./ai/generate-starting-inventory";

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

