import { z } from "zod";

export const InventorySchema = z.object({
  items: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
    })
  ),
  gold: z.number(),
  silver: z.number(),
  copper: z.number(),
});

export type Inventory = z.infer<typeof InventorySchema>;
