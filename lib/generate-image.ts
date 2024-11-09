import Replicate from "replicate";

type AspectRatio =
  | "1:1"
  | "16:9"
  | "21:9"
  | "3:2"
  | "2:3"
  | "4:5"
  | "5:4"
  | "3:4"
  | "4:3"
  | "9:16"
  | "9:21";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function generateImage({
  prompt,
  aspectRatio,
}: {
  prompt: string;
  aspectRatio: AspectRatio;
}): Promise<string> {
  const prediction = await replicate.predictions.create({
    model: "black-forest-labs/flux-schnell",
    input: { prompt, aspect_ratio: aspectRatio, output_format: "jpg" },
  });

  // You could return the prediction id and poll for the result in the client, but for simplicity we'll just wait for the result here.
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

