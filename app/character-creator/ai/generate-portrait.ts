import generateImage from "@/lib/generate-image";
import { CharacterIdea } from "@/types/CharacterIdea";

export default async function generatePortraitUrl({
  characterIdea,
}: {
  characterIdea: CharacterIdea;
}): Promise<string> {
  const prompt = `A full-body, front-facing portrait of a fantasy character in photorealistic style. The character's appearance is based on the following details:

- **Race**: ${characterIdea.race}
- **Class**: ${characterIdea.class}
- **Age**: ${characterIdea.age}
- **Physical Description**:
  - Eye Color: ${characterIdea.physicalDescription.eyeColor}
  - Hair Color: ${characterIdea.physicalDescription.hairColor}
  - Facial Features: ${characterIdea.physicalDescription.facialFeatures}
  - Height: ${characterIdea.physicalDescription.height}
  - Build: ${characterIdea.physicalDescription.build}
  - Clothing and Accessories: ${characterIdea.physicalDescription.clothing}

The character should be standing confidently, with a clear and expressive pose, showing the character's personality and class traits.

The background is a simple scene related to the character.`;
  return await generateImage(prompt);
}

