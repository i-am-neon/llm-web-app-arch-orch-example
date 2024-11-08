import generateStructuredData from "@/lib/generate-structured-data";
import { CharacterIdea } from "@/types/CharacterIdea";
import { Inventory, InventorySchema } from "@/types/Inventory";

const systemMessage = `Based on the character idea provided, create a starting inventory for an RPG character.`;

export default async function generateStartingInventory({
  characterIdea,
}: {
  characterIdea: CharacterIdea;
}): Promise<Inventory> {
  return await generateStructuredData({
    systemMessage,
    prompt: JSON.stringify(characterIdea, null, 2),
    schema: InventorySchema,
  });
}

