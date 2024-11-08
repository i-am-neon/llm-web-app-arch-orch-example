"use client";
import { useCallback, useState } from "react";
import { generateCharacter } from "./actions";

export default function CharacterCreatorPage() {
  const [isLoading, setIsLoading] = useState(false);

  const createCharacter = useCallback(async () => {
    setIsLoading(true);

    const character = await generateCharacter();
    console.log("character", JSON.stringify(character, null, 2));

    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Character Creator</h1>
      <p>Here you can create your own character.</p>
      <button onClick={createCharacter} disabled={isLoading}>
        {isLoading ? "Loading..." : "Create a new character"}
      </button>
    </div>
  );
}

