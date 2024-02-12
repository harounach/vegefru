import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  custom?: string;
}

export default function ProductCard({ product, custom }: ProductCardProps) {
  return (
    <Link
      className="rounded-md bg-white px-4 pt-4 pb-5 shadow-sm"
      title={product.title}
      href={`/products/${product._id.toString()}`}
    >
      <Image
        src={product.image}
        width={242}
        height={189}
        alt={product.title}
        className="mb-4 h-56 w-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-4 items-center justify-between">
        <span className="font-sans text-lg font-medium">{product.title}</span>
        <span className="font-sans text-lg font-medium text-orange-500">{`$${product.price}`}</span>
      </div>
    </Link>
  );
}
