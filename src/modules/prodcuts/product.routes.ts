import express from "express";
import { productController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  productValidation,
  productValidationValidator,
} from "./product.validaiton";

const router = express.Router();
router.put(
  "/products/:id",
  validateRequest(productValidationValidator),
  productController.updateProduct
);
router.get("/products", productController.getAllProduct);
router.get("/products/:id", productController.getProductByID);
router.post(
  "/products",
  validateRequest(productValidation),
  productController.createProduct
);
router.delete("/products/:id", productController.deleteProduct);

export const productRoutes = router;
