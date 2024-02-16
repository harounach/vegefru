import Image from "next/image";
import { BsEye, BsPencilFill } from "react-icons/bs";
import DeleteCoffeeButton from "./DeleteCoffeeButton";
import FeaturedButton from "./FeaturedButton";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import { Product } from "@/app/lib/definitions";

interface AdminCoffeeCardProps {
  product: Product;
  className?: string;
}

export default function AdminCoffeeCard({
  product,
  className,
}: AdminCoffeeCardProps) {
  return (
    <div
      className={`flex items-center gap-6 bg-white px-0 py-4 no-underline ${className}`}
    >
      <Image
        src={product.image}
        width={120}
        height={120}
        alt={product.title}
        className="shrink-0 object-cover"
      />
      <div className="flex grow flex-col gap-4">
        <div className="flex justify-between gap-6">
          <span className="text-lg font-medium text-slate-900">
            {product.title}
          </span>
          <span className="text-lg font-medium text-amber-600">{`$${product.price}`}</span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <DeleteCoffeeButton id={product._id} />
          <ViewCoffeeButton id={product._id} />
          <EditCoffeeButton id={product._id} />
          <FeaturedButton
            productId={product._id}
            isFeatured={product.isFeatured}
          />
        </div>
      </div>
    </div>
  );
}

function EditCoffeeButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}/edit`}
      title="Edit Coffee"
      className="bg-slate-100 text-slate-900 transition hover:bg-slate-200"
    >
      <BsPencilFill />
    </IconLinkButton>
  );
}

function ViewCoffeeButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}`}
      title="View Coffee"
      className="bg-slate-100 text-slate-900 transition hover:bg-slate-200"
    >
      <BsEye />
    </IconLinkButton>
  );
}
