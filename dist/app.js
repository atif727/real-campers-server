"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./modules/prodcuts/product.routes");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", product_routes_1.productRoutes);
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
