import { Schema, model } from "mongoose";

export type cart = {
  userId: string;
  prodIds: string[];
};

const cartSchema = new Schema<cart>(
  {
    userId: { type: String, required: true },
    prodIds: { type: [String], default: [] },
  },
  { versionKey: false }
);

export const cartModel = model<cart>("cart", cartSchema);
