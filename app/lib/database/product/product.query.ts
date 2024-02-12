import { products } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";

// Number of items per page
const LIMIT = 8;

/*
 * Fetch featured products
 */
export async function fetchFeaturedProducts() {
  try {
    const featuredProducts = products.filter((product) => product.isFeatured);
    return featuredProducts as Product[];
  } catch (err) {
    console.error("Database Error:", err);
  }
}

/**
 * Fetch product pages
 * */
export async function fetchProductsPages(query: string) {
  try {
    const totalPages = Math.ceil(products.length / LIMIT);

    return totalPages as number;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch total number of products pages.");
  }
}

/*
 * Fetch single product
 */
export async function fetchSingleProduct(id: string) {
  try {
    const product = products.find((product) => {
      return product._id === id;
    });

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
) {
  try {
    const filteredProducts = products.slice(0, 8);
    return filteredProducts as Product[];
  } catch (err) {
    console.error("Database Error:", err);
  }
}
