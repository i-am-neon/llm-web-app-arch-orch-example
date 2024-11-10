import generateStructuredData from "@/lib/generate-structured-data";
import { CharacterIdea, CharacterIdeaSchema } from "@/types/CharacterIdea";

const systemMessage = `Create a compelling DnD RPG character given their race and class.`;

export default async function generateCharacterIdea({
  race,
  characterClass,
}: {
  race: string;
  characterClass: string;
}): Promise<CharacterIdea> {
  return await generateStructuredData({
    schema: CharacterIdeaSchema,
    systemMessage,
    prompt: `Race: ${race}, Class: ${characterClass}`,
    // Optional temperature. This is a number between 0 (almost no randomness) and 1 (very random)
    temperature: 1,
  });
}

