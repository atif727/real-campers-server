import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllProduct = catchAsync(async (req, res) => {
    const result = await productServices.getAllProductsInDB(req.query);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Products shown successfully",
        data: result,
    });
});

const createProduct = catchAsync(async (req, res) => {
    const result = await productServices.createProductInDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Product created successfully",
        data: result,
    });
});

const getProductByID = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await productServices.getProductsByIDInDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Specific product shown successfully",
        data: result,
    });
});

const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await productServices.deleteProduct(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Product deleted successfully",
        data: result,
    });
});

const updateProduct = catchAsync(async (req, res) => {
    const result = await productServices.updateProductInDB(req.params.id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Product updated successfully",
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