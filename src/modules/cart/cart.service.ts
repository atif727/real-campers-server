import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { cartType, cartModel } from "./cart.model";

const getTheCart = (userEmail: string) => {
  const result = cartModel.findOne({userEmail: userEmail});
  if (result === null || undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "No product Found");
  } else {
    return result;
  }
};
const createCart = (body: cartType) => {
  const result = cartModel.create(body);
  return result;
};

const updateCart = (userEmail: string, payload: Partial<cartType>) => {
  const result = cartModel.findOneAndUpdate({ userEmail: userEmail }, payload, {
    new: true,
  });

  if (result === null || result === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "No product Found");
  } else {
    return result;
  }
};

export const cartServices = {
  updateCart,
  getTheCart,
  createCart,
};
