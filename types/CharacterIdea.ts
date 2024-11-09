import { z } from "zod";

export const CharacterIdeaSchema = z.object({
  name: z.string(),
  gender: z.union([z.literal("male"), z.literal("female"), z.literal("other")]),
  race: z.union([
    z.literal("Human"),
    z.literal("Elf"),
    z.literal("Dwarf"),
    z.literal("Halfling"),
    z.literal("Half-Elf"),
    z.literal("Half-Orc"),
    z.literal("Tiefling"),
    z.literal("Dragonborn"),
    z.literal("Gnome"),
    z.literal("Aasimar"),
    z.literal("Genasi"),
    z.literal("Goliath"),
    z.literal("Tabaxi"),
    z.literal("Firbolg"),
    z.literal("Kenku"),
    z.literal("Tortle"),
    z.literal("Triton"),
    z.literal("Aarakocra"),
    z.literal("Lizardfolk"),
    z.literal("Changeling"),
    z.literal("Warforged"),
    z.literal("Shifter"),
    z.literal("Kalashtar"),
    z.literal("Minotaur"),
    z.literal("Centaur"),
    z.literal("Loxodon"),
    z.literal("Vedalken"),
    z.literal("Simic Hybrid"),
    z.literal("Leonin"),
    z.literal("Satyr"),
    z.literal("Fairy"),
    z.literal("Harengon"),
    z.literal("Owlin"),
    z.literal("Hadozee"),
    z.literal("Autognome"),
    z.literal("Plasmoid"),
    z.literal("Thri-kreen"),
    z.literal("Verdan"),
  ]),
  class: z.union([
    z.literal("Barbarian"),
    z.literal("Bard"),
    z.literal("Cleric"),
    z.literal("Druid"),
    z.literal("Fighter"),
    z.literal("Monk"),
    z.literal("Paladin"),
    z.literal("Ranger"),
    z.literal("Rogue"),
    z.literal("Sorcerer"),
    z.literal("Warlock"),
    z.literal("Wizard"),
    z.literal("Artificer"),
    z.literal("Blood Hunter"),
  ]),
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

