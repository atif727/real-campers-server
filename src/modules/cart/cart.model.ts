import { Schema, model } from "mongoose";

export type cartType = {
  userId: string;
  prodIds: string[];
};

const cartSchema = new Schema<cartType>(
  {
    userId: { type: String, required: true },
    prodIds: { type: [String], default: [] },
  },
  { versionKey: false }
);

export const cartModel = model<cartType>("cart", cartSchema);
