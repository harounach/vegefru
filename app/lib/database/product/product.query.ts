import dbConnect from "@/app/lib/database/dbConnect";
import { ProductModel } from "@/app/lib/database/models";
import { Product } from "@/app/lib/definitions";
import { products } from "../../data";

// Number of items per page
const LIMIT = 8;

/*
 * Fetch featured products
 */
export async function fetchFeaturedProducts() {
  try {
    // await dbConnect();
    // const featuredProducts = await ProductModel.find({ isFeatured: true })
    //   .limit(4)
    //   .lean();
    const featuredProducts = products.filter((p) => p.isFeatured === true);
    return featuredProducts as Product[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch featured products.");
  }
}

/*
 * Fetch single product
 */
export async function fetchSingleProduct(id: string) {
  try {
    // await dbConnect();
    // const singleProduct = (await ProductModel.findById(id).lean()) as Product;

    // if (!singleProduct) {
    //   return null;
    // }

    // const product = {
    //   ...singleProduct,
    //   _id: singleProduct._id.toString(),
    // };
    const product = products.find((p) => p._id === id);

    return product as Product;
  } catch (err) {
    console.error("Database Error:", err);
  }
}

/*
 * Fetch filtered products
 */
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
  category: string,
) {
  try {
    // await dbConnect();
    // const searchFilter = query
    //   ? {
    //       title: {
    //         $regex: query,
    //         $options: "i",
    //       },
    //     }
    //   : {};

    // const products = await ProductModel.find(searchFilter)
    //   .sort({ createdAt: 1 })
    //   .limit(LIMIT * 1)
    //   .skip((currentPage - 1) * LIMIT)
    //   .lean()
    //   .exec();
    const allProducts = products.slice(0, 8);
    return allProducts as Product[];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch filtered products.");
  }
}

/**
 * Fetch product pages
 * */
export async function fetchProductsPages(query: string, category: string) {
  try {
    // await dbConnect();
    // const searchFilter = query
    //   ? {
    //       title: {
    //         $regex: query,
    //         $options: "i",
    //       },
    //     }
    //   : {};

    // const count = await ProductModel.countDocuments(searchFilter);
    // const totalPages = Math.ceil(count / LIMIT);
    const totalPages = Math.ceil(products.length / LIMIT);

    return totalPages as number;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch total number of products pages.");
  }
}
