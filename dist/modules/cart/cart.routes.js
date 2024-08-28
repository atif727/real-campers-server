"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cart_validation_1 = require("./cart.validation");
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.put("/cart/:userId", (0, validateRequest_1.default)(cart_validation_1.cartValidation), cart_controller_1.cartController.updateCart);
router.post("/cart", (0, validateRequest_1.default)(cart_validation_1.cartValidation), cart_controller_1.cartController.createCart);
router.get("/cart/:userId", cart_controller_1.cartController.getCart);
exports.cartRoutes = router;
