import Image from "next/image";
import { OrderItem } from "@/app/lib/definitions";

interface AccountOrderItemCardProps {
  orderItem: OrderItem;
  className?: string;
}

export default function AccountOrderItemCard({
  orderItem,
  className,
}: AccountOrderItemCardProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <Image
        src={orderItem.product.image}
        width={100}
        height={100}
        alt={orderItem.product.title}
        className="shrink-0 object-cover"
      />
      <div className="flex grow items-center justify-between">
        <span className="text-base font-medium text-slate-900">{orderItem.product.title}</span>
        <span className="text-base font-medium text-amber-600">{`$${orderItem.product.price * orderItem.qty}`}</span>
        <span className="text-base font-medium text-slate-900">({orderItem.qty})</span>
      </div>
    </div>
  );
}
