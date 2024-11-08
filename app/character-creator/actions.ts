export async function generateCharacter(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
        occupation: "Warrior",
        skills: ["swordsmanship", "archery", "tactics"],
      });
    }, 1000);
  });
}
