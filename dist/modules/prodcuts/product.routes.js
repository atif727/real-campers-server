"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validaiton_1 = require("./product.validaiton");
const router = express_1.default.Router();
router.put("/products/:id", (0, validateRequest_1.default)(product_validaiton_1.productValidationValidator), product_controller_1.productController.updateProduct);
router.get("/products", product_controller_1.productController.getAllProduct);
router.get("/products/:id", product_controller_1.productController.getProductByID);
router.post("/products", (0, validateRequest_1.default)(product_validaiton_1.productValidation), product_controller_1.productController.createProduct);
router.delete("/products/:id", product_controller_1.productController.deleteProduct);
exports.productRoutes = router;
