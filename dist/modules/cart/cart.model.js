"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartModel = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    prodIds: { type: [String], default: [] },
}, { versionKey: false });
exports.cartModel = (0, mongoose_1.model)("cart", cartSchema);
