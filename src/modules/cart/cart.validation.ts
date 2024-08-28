import { z } from "zod";

export const cartValidation = z.object({
  body: z.object({
    userEmail: z.string(),
    prodIds: z.array(z.string()).default([]),
  }),
});
