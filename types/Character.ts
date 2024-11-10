import { CharacterIdea } from "./CharacterIdea";
import { Inventory } from "./Inventory";

export type Character = CharacterIdea & {
  race: string;
  characterClass: string;
  startingInventory: Inventory;
  portraitImageUrl: string;
};

