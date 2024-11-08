import generateStructuredData from "@/lib/generate-structured-data";
import { CharacterIdea, CharacterIdeaSchema } from "@/types/CharacterIdea";

const systemMessage = `Based on the brief description provided, create a compelling DnD RPG character.

Get creative with the race, class, etc`;

export default async function generateCharacterIdea(): Promise<CharacterIdea> {
  return await generateStructuredData({
    schema: CharacterIdeaSchema,
    systemMessage,
    temperature: 1,
  });
}

