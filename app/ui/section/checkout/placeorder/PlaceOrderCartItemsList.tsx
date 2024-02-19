"use client";

import { BsPencilFill } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import PlaceOrderItem from "./PlaceOrderItem";
// import { cartItemsData as items } from "@/app/lib/data";
import { useCartStore } from "@/app/lib/store/cart";

interface PlaceOrderCartItemsListProps {
  className?: string;
}

export default function PlaceOrderCartItemsList({
  className,
}: PlaceOrderCartItemsListProps) {
  const items = useCartStore((state) => state.items);

  return (
    <div className={`flex flex-col gap-4 rounded bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">Items</h3>
        <IconLinkButton
          url="/cart"
          className="bg-blue-50 text-blue-600 transition hover:bg-blue-100"
        >
          <BsPencilFill />
        </IconLinkButton>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => {
          return <PlaceOrderItem key={item.product._id} cartItem={item} />;
        })}
      </div>
    </div>
  );
}
