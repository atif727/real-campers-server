"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const product_constant_1 = require("./product.constant");
const product_model_1 = require("./product.model");
const getAllProductsInDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const productQuery = new QueryBuilder_1.default(product_model_1.productModel.find(), query)
        .search(product_constant_1.productSearchAbleFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield productQuery.modelQuery;
    if (result.length === 0 || result === null || result === undefined) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No product Found");
    }
    else {
        return result;
    }
});
const getProductsByIDInDB = (id) => {
    const result = product_model_1.productModel.findById(id);
    if (result === null || result === undefined) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No Product Found");
    }
    else {
        return result;
    }
};
const deleteProduct = (id) => {
    const result = product_model_1.productModel.findByIdAndDelete(id);
    if (result === null || result === undefined) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "No Product Found");
    }
    else {
        return result;
    }
};
const createProductInDB = (product) => {
    const result = product_model_1.productModel.create(product);
    return result;
};
const updateProductInDB = (id, product) => {
    const result = product_model_1.productModel.findByIdAndUpdate(id, product, {
        new: true,
    });
    if (result === null || result === undefined) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'No product Found');
    }
    else {
        return result;
    }
};
exports.productServices = {
    getAllProductsInDB,
    getProductsByIDInDB,
    createProductInDB,
    deleteProduct,
    updateProductInDB,
};
