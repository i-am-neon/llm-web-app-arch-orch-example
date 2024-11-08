"use client";
import { Character } from "@/types/Character";
import Image from "next/image";
import { useCallback, useState } from "react";
import { generateCharacter } from "./actions";

export default function CharacterCreatorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<Character>(STUB_CHARACTER);

  const createCharacter = useCallback(async () => {
    setIsLoading(true);

    const character = await generateCharacter();
    console.log("character", JSON.stringify(character, null, 2));
    setCharacter(character);

    setIsLoading(false);
  }, []);

  return (
    <div className="max-h-screen max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">Character Creator</h1>
        <p className="text-lg mb-6">
          Create a unique fantasy character for your adventure.
        </p>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button
            onClick={createCharacter}
            disabled={isLoading}
            className={`px-4 py-2 text-lg font-semibold rounded-lg shadow-lg transition-colors ${
              isLoading
                ? "cursor-not-allowed"
                : "bg-black dark:bg-white text-white dark:text-black"
            }`}
          >
            Create a New Character
          </button>
        )}
      </div>
      {character && (
        <div className="flex flex-row mt-12">
          <div className="relative w-1/3 aspect-[9/16]">
            <Image
              src={character.portraitImageUrl}
              alt={character.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-3/4 pl-4">
            <h2 className="text-4xl">
              {character.name}, the {character.race} {character.class}
            </h2>
            <p>
              <i className="capitalize">{character.personality.join(", ")}</i>
            </p>
            <br />
            <h3 className="text-2xl">Backstory</h3>
            <p>{character.backstory}</p>
            <br />
            <h3 className="text-2xl">Starting inventory</h3>
            <ul>
              {character.startingInventory.items.map((item) => (
                <li key={item.name}>
                  {item.name} ({item.quantity})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

const STUB_CHARACTER: Character = {
  name: "Kaelith Moonshadow",
  gender: "other",
  race: "Tiefling",
  class: "Sorcerer",
  personality: ["mysterious", "intelligent", "playful"],
  age: "young adult",
  backstory:
    "Born under a lunar eclipse with latent magical abilities, Kaelith grew up in a secluded village, often feeling disconnected from others due to being a Tiefling. After discovering his talent for sorcery, he ventured out to learn more about his powers and the world beyond his village, seeking knowledge and adventure.",
  physicalDescription: {
    eyeColor: "silver",
    hairColor: "deep purple",
    facialFeatures:
      "distinctive horns that curve back, rare celestial tattoos on his arms",
    height: "5'8",
    build: "slim",
    clothing:
      "flowing robes adorned with constellations, a slender silver necklace with a moon pendant, and a dark hooded cloak.",
  },
  startingInventory: {
    items: [
      {
        name: "Spellbook",
        quantity: 1,
      },
      {
        name: "Arcane Focus (Crystal Orb)",
        quantity: 1,
      },
      {
        name: "Potion of Healing",
        quantity: 2,
      },
    ],
  },
  portraitImageUrl:
    "https://replicate.delivery/xezq/O9oOpnPuoqJeJC6pEAfE4kkSCfHG7ABVzOxzBDWrhT7NsFeOB/out-0.jpg",
};

