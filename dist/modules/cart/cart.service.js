"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const cart_model_1 = require("./cart.model");
const getTheCart = (id) => {
    const result = cart_model_1.cartModel.findById(id);
    if (result === null || undefined) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No product Found");
    }
    else {
        return result;
    }
};
const createCart = (body) => {
    const result = cart_model_1.cartModel.create(body);
    return result;
};
exports.cartServices = {
    getTheCart,
    createCart,
};
