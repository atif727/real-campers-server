import { Schema, model } from "mongoose";

const howToCareSchema = new Schema({
    header: { type: String, required: true },
    description: { type: String, required: true },
}, { _id: false, versionKey: false });

export const productSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    color: { type: String, required: true },
    quantity: { type: Number, required: true },
    howtocare: { type: howToCareSchema, required: true },
    recommended: { type: Boolean, required: true },
    isFeatured: { type: Boolean, required: true },
    rating: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
}, { versionKey: false });

export const productModel = model("Product", productSchema);