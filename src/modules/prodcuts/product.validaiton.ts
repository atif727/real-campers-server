import { z } from "zod";

const howToCareSchema = z.object({
  header: z.string().min(1, "Header is required"),
  description: z.string().min(1, "Description is required"),
});

export const productValidation = z.object({
  body: z.object({
    name: z.string().max(10, "Name must be at most 10 characters").trim(),
    description: z.string().min(1, "Description is required").trim(),
    category: z.string().min(1, "Category is required").trim(),
    price: z.number().min(1, "Price must be a positive number"),
    quantity: z.number().min(1, "Quantity must be a positive number"),
    howtocare: howToCareSchema,
    recommended: z.boolean(),
    isFeatured: z.boolean(),
    rating: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
  }),
});


const howToCareValidationSchema = z.object({
  header: z.string().min(1, "Header is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
});

export const productUpdateValidation = z.object({
  body: z.object({
    name: z
      .string()
      .max(10, "Name must be at most 10 characters")
      .trim()
      .optional(),
    description: z.string().min(1, "Description is required").optional(),
    category: z.string().min(1, "Category is required").optional(),
    price: z.number().min(0, "Price must be a positive number").optional(),
    quantity: z
      .number()
      .min(0, "Quantity must be a positive number")
      .optional(),
    howtocare: howToCareValidationSchema.optional(),
    recommended: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
    rating: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]).optional(),
  }),
});
