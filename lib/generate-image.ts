import OpenAI from "openai";
const openai = new OpenAI();

export default async function generateImage(prompt: string): Promise<string> {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  });
  const imageUrl = response.data[0].url;

  if (!imageUrl) {
    throw new Error("Failed to generate image");
  }

  return imageUrl;
}
