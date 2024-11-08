import { CharacterIdea } from "./CharacterIdea";
import { Inventory } from "./Inventory";

export type Character = CharacterIdea & {
  startingInventory: Inventory;
  portraitImageUrl: string;
};

