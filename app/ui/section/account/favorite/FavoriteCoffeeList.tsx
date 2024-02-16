import FavoriteCoffeeCard from "./FavoriteCoffeeCard";
import { Product } from "@/app/lib/definitions";

interface FavoriteCoffeeListProps {
  favoriteProducts: Array<Product>;
  className?: string;
}

export default function FavoriteCoffeeList({
  favoriteProducts,
  className,
}: FavoriteCoffeeListProps) {
  return (
    <div
      className={`flex flex-col gap-4 divide-y overflow-hidden rounded bg-white p-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">Items</h3>
      </div>
      <div className="flex flex-col divide-y">
        {favoriteProducts.map((product) => {
          return <FavoriteCoffeeCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}
