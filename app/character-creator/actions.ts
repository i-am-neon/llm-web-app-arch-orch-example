"use server";

import { CharacterIdea } from "@/types/CharacterIdea";
import generateCharacterIdea from "./ai/generate-character-idea";

export async function generateCharacter(): Promise<CharacterIdea> {
  return await generateCharacterIdea();
}

