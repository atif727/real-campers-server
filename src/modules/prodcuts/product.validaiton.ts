import { z } from "zod";

const variantSchema = z.object({
  color: z.string().min(1, "Color is required"),
  imageUrl: z.string().url("Invalid URL"),
});

const howToCareSchema = z.object({
  header: z.string().min(1, "Header is required"),
  description: z.string().min(1, "Description is required"),
});

export const productValidation = z.object({
  body: z.object({
    name: z.string().max(10, "Name must be at most 10 characters").trim(),
    description: z.string().min(1, "Description is required").trim(),
    category: z.string().min(1, "Category is required").trim(),
    price: z.number().min(0, "Price must be a positive number"),
    varients: z
      .array(variantSchema)
      .nonempty("At least one variant is required"),
    quantity: z.number().min(0, "Quantity must be a positive number"),
    howtocare: howToCareSchema,
  }),
});


const variantValidationSchema = z.object({
    color: z.string().min(1, "Color is required").optional(),
    imageUrl: z.string().url("Invalid URL").optional(),
  });
  
  const howToCareValidationSchema = z.object({
    header: z.string().min(1, "Header is required").optional(),
    description: z.string().min(1, "Description is required").optional(),
  });
  
  export const productValidationValidator = z.object({
    body: z.object({
      name: z.string().max(10, "Name must be at most 10 characters").trim().optional(),
      description: z.string().min(1, "Description is required").optional(),
      category: z.string().min(1, "Category is required").optional(),
      price: z.number().min(0, "Price must be a positive number").optional(),
      varients: z
        .array(variantValidationSchema)
        .nonempty("At least one variant is required")
        .optional(),
      quantity: z.number().min(0, "Quantity must be a positive number").optional(),
      howtocare: howToCareValidationSchema.optional(),
    }),
  });