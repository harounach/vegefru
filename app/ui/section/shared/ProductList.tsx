import { fetchFilteredProducts } from "@/app/lib/database/product/product.query";
import ProductCard from "./ProductCard";

interface ProductListProps {
  query: string;
  currentPage: number;
  custom?: string;
}

export default async function ProductList({
  query,
  currentPage,
  custom,
}: ProductListProps) {
  const products = await fetchFilteredProducts(query, currentPage);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      {products?.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
}
