import Image from "next/image";
import { BsEye, BsPencilFill } from "react-icons/bs";
import DeleteProductButton from "./DeleteProductButton";
import FeaturedButton from "./FeaturedButton";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import { Product } from "@/app/lib/definitions";

interface AdminProductCardProps {
  product: Product;
  className?: string;
}

export default function AdminProductCard({
  product,
  className,
}: AdminProductCardProps) {
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
          <DeleteProductButton id={product._id} />
          <ViewProductButton id={product._id} />
          <EditProductButton id={product._id} />
          <FeaturedButton
            productId={product._id}
            isFeatured={product.isFeatured}
          />
        </div>
      </div>
    </div>
  );
}

function EditProductButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}/edit`}
      title="Edit Product"
      className="bg-slate-100 text-slate-900 transition hover:bg-slate-200"
    >
      <BsPencilFill />
    </IconLinkButton>
  );
}

function ViewProductButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}`}
      title="View Product"
      className="bg-slate-100 text-slate-900 transition hover:bg-slate-200"
    >
      <BsEye />
    </IconLinkButton>
  );
}
