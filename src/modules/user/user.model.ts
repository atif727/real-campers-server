import { Schema, model } from "mongoose";
import { xUserInterface } from "./user.interface";

const userSchemaModel: Schema = new Schema<xUserInterface>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phonenumber: { type: String, required: true },
    access_token: { type: String, Optional: true },
    refresh_token: { type: String, Optional: true },
  },
  { versionKey: false }
);

export const userModel = model<xUserInterface>("user", userSchemaModel);
