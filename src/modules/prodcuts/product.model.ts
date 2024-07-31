import { Schema, model } from "mongoose";
import { HowToCare, productType } from "./product.interface";


const howToCareSchema = new Schema<HowToCare>({
  header: { type: String, required: true },
  description: { type: String, required: true },
}, { _id: false, versionKey: false });

export const productSchema = new Schema<productType>(
  {
    name: { type: String, required: true, trim: true, maxlength: 10 },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true},
    color: { type: String, required: true },
    quantity: { type: Number, required: true },
    howtocare: { type: howToCareSchema, required: true },
  },
  { versionKey: false }
);

export const productModel = model<productType>("Product", productSchema);
