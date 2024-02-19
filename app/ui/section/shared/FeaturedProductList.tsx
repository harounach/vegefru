import { fetchFeaturedProducts } from "@/app/lib/database/product/product.query";
import ProductCard from "./ProductCard";

interface FeaturedProductListProps {
  className?: string;
}

export default async function FeaturedProductList({
  className,
}: FeaturedProductListProps) {
  const featuredProducts = await fetchFeaturedProducts();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      {featuredProducts?.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
}
