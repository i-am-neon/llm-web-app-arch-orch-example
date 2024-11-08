import { z } from "zod";

export const InventorySchema = z.object({
  items: z
    .array(
      z.object({
        name: z.string(),
        quantity: z.number(),
      })
    )
    .max(3),
});

export type Inventory = z.infer<typeof InventorySchema>;

