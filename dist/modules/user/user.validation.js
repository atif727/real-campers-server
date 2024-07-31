"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name is required" }),
        email: zod_1.z
            .string()
            .email("Invalid email address")
            .min(1, { message: "Email is required" }),
        password: zod_1.z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .min(1, { message: "Password is required" }),
        address: zod_1.z.string().min(1, { message: "Name is required" }),
        phonenumber: zod_1.z.string().min(1, { message: "Name is required" }),
    }),
});
exports.LoginSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string()
            .email("Invalid email address")
            .min(1, { message: "Email is required" }),
        password: zod_1.z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .min(1, { message: "Password is required" }),
    }),
});
