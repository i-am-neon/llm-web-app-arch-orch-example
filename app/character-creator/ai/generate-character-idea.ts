import generateStructuredData from "@/lib/generate-structured-data";
import { CharacterIdea, CharacterIdeaSchema } from "@/types/CharacterIdea";

const systemMessage = `Create a compelling DnD RPG character.
Choose unique combinations of race, class, and physical attributes.`;

export default async function generateCharacterIdea(): Promise<CharacterIdea> {
  return await generateStructuredData({
    schema: CharacterIdeaSchema,
    systemMessage,
    // Optional temperature. This is a number between 0 (almost no randomness) and 1 (very random)
    temperature: 1,
  });
}

