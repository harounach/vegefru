import Image from "next/image";
import { BsCartPlus, BsHeart } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { Product } from "@/app/lib/definitions";

interface FavoriteCoffeeCardProps {
  product: Product;
  className?: string;
}

export default function FavoriteCoffeeCard({
  product,
  className,
}: FavoriteCoffeeCardProps) {
  return (
    <div className={`flex items-center gap-4 px-0 py-4 ${className}`}>
      <Image
        src={product.image}
        width={152}
        height={152}
        alt={product.title}
        className="shrink-0 object-cover"
      />
      <div className="flex grow items-center justify-between">
        <div className="flex flex-col justify-center gap-6">
          <span className="text-lg font-medium text-slate-900">
            {product.title}
          </span>
          <span className="text-lg font-medium text-amber-600">{`$${product.price}`}</span>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <IconButton className="bg-slate-50 text-rose-500 transition hover:bg-slate-200">
            <BsHeart />
          </IconButton>
          <IconButton className="bg-slate-50 text-amber-500 transition hover:bg-slate-200">
            <BsCartPlus />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
