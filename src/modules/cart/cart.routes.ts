import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { cartValidation } from "./cart.validation";
import { cartController } from "./cart.controller";
const router = express.Router();

router.put(
  "/cart/:userId",
  validateRequest(cartValidation),
  cartController.updateCart
);

router.post(
  "/cart",
  validateRequest(cartValidation),
  cartController.createCart
);
router.get("/cart/:userId", cartController.getCart);
