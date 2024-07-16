import { z } from "zod";

export const UserSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .min(1, { message: "Password is required" }),
  }),
});
export const LoginSchema = z.object({
  body: z.object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .min(1, { message: "Password is required" }),
  }),
});
