import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllProduct: RequestHandler = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductsInDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products shown successfully",
    data: result,
  });
});

const createProduct: RequestHandler = catchAsync(async (req, res) => {
  // console.log(req.body)
  const result = await productServices.createProductInDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products shown successfully",
    data: result,
  });
});

const getProductByID: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getProductsByIDInDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "specific Product shown succesfully",
    data: result,
  });
});
const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.deleteProduct(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "specific Product shown succesfully",
    data: result,
  });
});

const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  // console.log(req.body)
  const result = await productServices.updateProductInDB(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products shown successfully",
    data: result,
  });
});

export const productController = {
  getAllProduct,
  getProductByID,
  createProduct,
  deleteProduct,
  updateProduct,
};
