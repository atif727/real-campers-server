import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { productType } from "./product.interface";
import myQueryBuilder from "../../builder/QueryBuilder";
import { productSearchAbleFields } from "./product.constant";
import { productModel } from "./product.model";

const getAllProductsInDB = async (query: Record<string, unknown>) => {
  const productQuery = new myQueryBuilder(productModel.find(), query)
    .search(productSearchAbleFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await productQuery.modelQuery;
  if (result.length === 0 || result === null || result === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "No product Found");
  } else {
    return result;
  }
};
const getProductsByIDInDB = (id: string) => {
  const result = productModel.findById(id);
  if (result === null || result === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "No Product Found");
  } else {
    return result;
  }
};
const deleteProduct = (id: string) => {
  const result = productModel.findByIdAndDelete(id);
  if (result === null || result === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, "No Product Found");
  } else {
    return result;
  }
};

const createProductInDB = (product: productType) => {
  const result = productModel.create(product);
  return result;
};
const updateProductInDB = (id: string, product: Partial<productType>) => {
  const result = productModel.findByIdAndUpdate( id , product, {
    new: true,
  });
  if (result === null || result === undefined) {
    throw new AppError(httpStatus.NOT_FOUND, 'No product Found');
  } else {
    return result;
  }
};
export const productServices = {
  getAllProductsInDB,
  getProductsByIDInDB,
  createProductInDB,
  deleteProduct,
  updateProductInDB,
};
