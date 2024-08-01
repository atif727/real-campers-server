"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateValidation = exports.productValidation = void 0;
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    color: zod_1.z.string().min(1, "Color is required"),
    imageUrl: zod_1.z.string().url("Invalid URL"),
});
const howToCareSchema = zod_1.z.object({
    header: zod_1.z.string().min(1, "Header is required"),
    description: zod_1.z.string().min(1, "Description is required"),
});
exports.productValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().max(10, "Name must be at most 10 characters").trim(),
        description: zod_1.z.string().min(1, "Description is required").trim(),
        category: zod_1.z.string().min(1, "Category is required").trim(),
        price: zod_1.z.number().min(0, "Price must be a positive number"),
        varients: zod_1.z
            .array(variantSchema)
            .nonempty("At least one variant is required"),
        quantity: zod_1.z.number().min(0, "Quantity must be a positive number"),
        howtocare: howToCareSchema,
        recommended: zod_1.z.boolean(),
        isFeatured: zod_1.z.boolean(),
        rating: zod_1.z.union([
            zod_1.z.literal(1),
            zod_1.z.literal(2),
            zod_1.z.literal(3),
            zod_1.z.literal(4),
            zod_1.z.literal(5),
        ]),
    }),
});
const variantValidationSchema = zod_1.z.object({
    color: zod_1.z.string().min(1, "Color is required").optional(),
    imageUrl: zod_1.z.string().url("Invalid URL").optional(),
});
const howToCareValidationSchema = zod_1.z.object({
    header: zod_1.z.string().min(1, "Header is required").optional(),
    description: zod_1.z.string().min(1, "Description is required").optional(),
});
exports.productUpdateValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .max(10, "Name must be at most 10 characters")
            .trim()
            .optional(),
        description: zod_1.z.string().min(1, "Description is required").optional(),
        category: zod_1.z.string().min(1, "Category is required").optional(),
        price: zod_1.z.number().min(0, "Price must be a positive number").optional(),
        varients: zod_1.z
            .array(variantValidationSchema)
            .nonempty("At least one variant is required")
            .optional(),
        quantity: zod_1.z
            .number()
            .min(0, "Quantity must be a positive number")
            .optional(),
        howtocare: howToCareValidationSchema.optional(),
        recommended: zod_1.z.boolean().optional(),
        isFeatured: zod_1.z.boolean().optional(),
        rating: zod_1.z.union([
            zod_1.z.literal(1),
            zod_1.z.literal(2),
            zod_1.z.literal(3),
            zod_1.z.literal(4),
            zod_1.z.literal(5),
        ]).optional(),
    }),
});
