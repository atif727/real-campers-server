"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchemaModel = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phonenumber: { type: String, required: true },
    access_token: { type: String, Optional: true },
    refresh_token: { type: String, Optional: true },
}, { versionKey: false });
exports.userModel = (0, mongoose_1.model)("user", userSchemaModel);
