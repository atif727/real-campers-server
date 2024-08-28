import { Schema, model } from "mongoose";

export type cartType = {
  userEmail: string;
  prodIds: string[];
};

const cartSchema = new Schema<cartType>(
  {
    userEmail: { type: String, required: true },
    prodIds: { type: [String], default: [] },
  },
  { versionKey: false }
);

export const cartModel = model<cartType>("cart", cartSchema);
