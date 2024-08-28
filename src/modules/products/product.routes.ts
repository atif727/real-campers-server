import express from "express";
import { productController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { productValidation, productUpdateValidation } from "./product.validation";

const router = express.Router();

router.put("/products/:id", validateRequest(productUpdateValidation), productController.updateProduct);
router.get("/products", productController.getAllProduct);
router.get("/products/:id", productController.getProductByID);
router.post("/products", validateRequest(productValidation), productController.createProduct);
router.delete("/products/:id", productController.deleteProduct);

export const productRoutes = router;
