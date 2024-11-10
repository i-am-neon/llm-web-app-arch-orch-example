export default function getRandomRaceAndClass(): {
  race: string;
  characterClass: string;
} {
  const races = [
    "Human",
    "Elf",
    "Dwarf",
    "Halfling",
    "Half-Elf",
    "Half-Orc",
    "Tiefling",
    "Dragonborn",
    "Gnome",
    "Aasimar",
    "Genasi",
    "Goliath",
    "Tabaxi",
    "Firbolg",
    "Kenku",
    "Tortle",
    "Triton",
    "Aarakocra",
    "Lizardfolk",
    "Changeling",
    "Warforged",
    "Shifter",
    "Kalashtar",
    "Minotaur",
    "Centaur",
    "Loxodon",
    "Vedalken",
    "Simic Hybrid",
    "Leonin",
    "Satyr",
    "Fairy",
    "Harengon",
    "Owlin",
    "Hadozee",
    "Autognome",
    "Plasmoid",
    "Thri-kreen",
    "Verdan",
  ];

  const classes = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
    "Artificer",
    "Blood Hunter",
  ];

  const randomRace = races[Math.floor(Math.random() * races.length)];
  const randomClass = classes[Math.floor(Math.random() * classes.length)];

  return { race: randomRace, characterClass: randomClass };
}

