import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { cartServices } from "./cart.service";

const getCart : RequestHandler = catchAsync(async (req, res) => {
    const { userId } = req.params;
    const result = await cartServices.getTheCart(userId);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "specific Product shown succesfully",
      data: result,
    });
  });

const createCart : RequestHandler = catchAsync(async (req, res) => {
    
    const result = await cartServices.createCart(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "specific Product shown succesfully",
      data: result,
    });
  });

  const updateCart : RequestHandler = catchAsync(async (req, res) => {
    
    const result = await cartServices.createCart(req.body);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "specific Product shown succesfully",
      data: result,
    });
  });

  export const cartController = {
    updateCart,
    createCart,
    getCart
  };