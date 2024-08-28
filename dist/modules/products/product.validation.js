"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateValidation = exports.productValidation = void 0;
const zod_1 = require("zod");
const howToCareSchema = zod_1.z.object({
    header: zod_1.z.string().min(1, "Header is required"),
    description: zod_1.z.string().min(1, "Description is required"),
});
const howToCareUpdateSchema = zod_1.z.object({
    header: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
exports.productValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().trim(),
        description: zod_1.z.string().min(1, "Description is required").trim(),
        category: zod_1.z.string().min(1, "Category is required").trim(),
        price: zod_1.z.number().min(1, "Price must be a positive number"),
        quantity: zod_1.z.number().min(1, "Quantity must be a positive number"),
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
exports.productUpdateValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().trim().optional(),
        description: zod_1.z.string().optional(),
        category: zod_1.z.string().min(1, "Category is required").optional(),
        price: zod_1.z.number().min(0, "Price must be a positive number").optional(),
        quantity: zod_1.z.number().min(0, "Quantity must be a positive number").optional(),
        howtocare: howToCareUpdateSchema.optional(),
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
