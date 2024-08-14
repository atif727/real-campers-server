"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartValidation = void 0;
const zod_1 = require("zod");
exports.cartValidation = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string(),
        prodIds: zod_1.z.array(zod_1.z.string()).default([]),
    }),
});
