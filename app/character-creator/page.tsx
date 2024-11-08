"use client";
import { Character } from "@/types/Character";
import Image from "next/image";
import { useCallback, useState } from "react";
import { generateCharacter } from "./actions";

const STUB: Character = {
  name: "Lyra Moonshadow",
  gender: "female",
  race: "Elf",
  class: "Rogue",
  personality: ["cunning", "mysterious", "resourceful"],
  age: "young adult",
  backstory:
    "Lyra grew up in the shadowy streets of a bustling city, where she learned to navigate the underbelly of society. Once a street urchin, she discovered her knack for stealth and trickery, carving out a living as a skilled thief and information broker.",
  physicalDescription: {
    eyeColor: "silver",
    hairColor: "dark blue",
    facialFeatures: "sharp cheekbones and a playful smirk",
    height: "5'6",
    build: "slim",
    clothing:
      "a dark leather armor adorned with silver patterns, a cloak that blends into the night, and fingerless gloves.",
  },
  startingInventory: {
    items: [
      {
        name: "Dagger",
        quantity: 2,
      },
      {
        name: "Lockpicks",
        quantity: 1,
      },
      {
        name: "Smoke Bombs",
        quantity: 3,
      },
    ],
  },
  portraitImageUrl:
    "https://replicate.delivery/xezq/eemk6WuLRVtpRExvOV6dAXAsbf4TyBXIFUAmfEdmepvDWS4dC/out-0.jpg",
};

export default function CharacterCreatorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<Character>(STUB);

  const createCharacter = useCallback(async () => {
    setIsLoading(true);

    const character = await generateCharacter();
    console.log("character", JSON.stringify(character, null, 2));
    setCharacter(character);

    setIsLoading(false);
  }, []);

  return (
    <div className="max-h-screen max-w-4xl mx-auto mt-2">
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

