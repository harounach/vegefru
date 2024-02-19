"use client";

import CartCard from "./CartCard";
import { useCartStore } from "@/app/lib/store/cart";
// import { cartItemsData as items } from "@/app/lib/data";

interface CartItemsProps {
  className?: string;
}

export default function CartItems({ className }: CartItemsProps) {
  const items = useCartStore((state) => state.items);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((orderItem) => {
        return <CartCard key={orderItem.product._id} item={orderItem} />;
      })}
    </div>
  );
}
