"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./modules/products/product.routes");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_routes_1 = require("./modules/user/user.routes");
const cart_routes_1 = require("./modules/cart/cart.routes");
// parser
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: "http://localhost:5173", credentials: true }));
app.use("/api", user_routes_1.userRoutes);
app.use("/api", product_routes_1.productRoutes);
app.use("/api", cart_routes_1.cartRoutes);
const home = (req, res) => {
    res.send("hi ami bhalo chele ");
};
app.get("/", home);
app.use(globalErrorHandler_1.default);
// used this because i was facing some problems with app.use(notFound route)
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: "not found",
    });
});
exports.default = app;
