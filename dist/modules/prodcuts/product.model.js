"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    color: { type: String, required: true },
    imageUrl: { type: String, required: true },
}, { _id: false, versionKey: false });
const howToCareSchema = new mongoose_1.Schema({
    header: { type: String, required: true },
    description: { type: String, required: true },
}, { _id: false, versionKey: false });
exports.productSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true, maxlength: 10 },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    varients: { type: [variantSchema], required: true },
    quantity: { type: Number, required: true },
    howtocare: { type: howToCareSchema, required: true },
}, { versionKey: false });
exports.productModel = (0, mongoose_1.model)("Product", exports.productSchema);
