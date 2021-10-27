import { productsData } from "../../data/data";
import ProductModel from "../../models/product/productModel";

// TODO: Get all products
export const getAllProducts = () => {
  return productsData;
};

/**
 * Create a product
 */
export const createProduct = async (product) => {
  const newProduct = new ProductModel(product);
  return await newProduct.save();
};

// TODO: Update a product
export const updateProduct = () => {};

// TODO: Delete a product
export const deleteProduct = () => {};

// TODO: Delete all products
export const deleteAllProducts = () => {};

export const productExist = async (name) => {
  return await ProductModel.exists({ name: name });
};
