import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function generateImage(prompt: string): Promise<string> {
  const prediction = await replicate.predictions.create({
    model: "black-forest-labs/flux-schnell",
    input: { prompt, aspect_ratio: "9:16", output_format: "jpg" },
  });

  let result = "";
  while (result === "") {
    const check = await replicate.predictions.get(prediction.id);
    if (check.status === "failed") {
      throw new Error(JSON.stringify(prediction.error, null, 2));
    } else if (check.status === "succeeded") {
      result = check.output[0];
    } else {
      await sleep(250);
    }
  }
  return result;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

