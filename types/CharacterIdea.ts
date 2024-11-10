import { z } from "zod";

export const CharacterIdeaSchema = z.object({
  name: z.string(),
  gender: z.union([z.literal("male"), z.literal("female"), z.literal("other")]),
  personality: z
    .array(z.string())
    .min(3)
    .max(3)
    // The AI sees these descriptions, and is great in-line documentation for devs
    .describe("Three words that describe the character's personality"),
  age: z.union([
    z.literal("child"),
    z.literal("young adult"),
    z.literal("mature adult"),
    z.literal("elderly"),
  ]),
  backstory: z.string().describe("1-2 sentences about the character's past"),
  physicalDescription: z.object({
    eyeColor: z.string(),
    hairColor: z.string(),
    facialFeatures: z.string(),
    height: z.string().describe('in feet and inches, e.g. "5\'10"'),
    build: z.union([
      z.literal("slim"),
      z.literal("average"),
      z.literal("muscular"),
      z.literal("overweight"),
    ]),
    clothing: z
      .string()
      .describe("What the character is wearing, including accessories"),
  }),
});

export type CharacterIdea = z.infer<typeof CharacterIdeaSchema>;

