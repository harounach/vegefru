import Image from "next/image";
import classNames from "classnames";
import { OrderItem } from "@/app/lib/definitions";

interface PlaceOrderItemProps {
  cartItem: OrderItem;
  className?: string;
}

export default function PlaceOrderItem({
  cartItem,
  className,
}: PlaceOrderItemProps) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <Image
        src={cartItem.product.image}
        width={100}
        height={100}
        alt={cartItem.product.title}
        className="shrink-0 object-cover"
      />
      <div className="flex grow items-center justify-between">
        <span className="text-base">{cartItem.product.title}</span>
        <span className="text-base">{`$${
          cartItem.product.price * cartItem.qty
        }`}</span>
        <span className="text-base">({cartItem.qty})</span>
      </div>
    </div>
  );
}
