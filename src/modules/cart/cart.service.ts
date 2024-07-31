import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { cart, cartModel } from "./cart.model";

const getTheCart = (id: string) => {
  const result = cartModel.findById(id);
  if (result === null || undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "No product Found");
  } else {
    return result;
  }
};
const createCart = (body: cart) => {
  const result = cartModel.create(body);
  return result;
};

export const cartServices = {
  getTheCart,
  createCart,
};
