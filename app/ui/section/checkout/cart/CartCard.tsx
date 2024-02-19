"use client";

import Image from "next/image";
import { BsCartX, BsDash, BsHeart, BsPlus } from "react-icons/bs";

import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { OrderItem } from "@/app/lib/definitions";
import { useCartStore } from "@/app/lib/store/cart";

interface CartCardProps {
  item: OrderItem;
  className?: string;
}

export default function CartCard({ item, className }: CartCardProps) {
  const { removeFromCart, incrementQty, decrementQty } = useCartStore();

  return (
    <div className={`flex gap-4 overflow-hidden rounded bg-white ${className}`}>
      <Image
        src={item.product.image}
        width={152}
        height={152}
        alt={item.product.title}
        className="shrink-0 object-cover"
      />
      <div className="flex grow flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-slate-900">
            {item.product.title}
          </h3>
          <h3 className="text-lg font-medium text-amber-600">{`$${item.product.price * item.qty}`}</h3>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4">
          {/* Qty */}
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
              type="button"
              onClick={() => decrementQty(item.product._id)}
            >
              <span className="sr-only">Decrement Quantity button</span>
              <BsDash className="h-3 w-3" aria-hidden="true" />
            </button>
            <div>
              <span className="text-sm text-slate-700">({item.qty})</span>
            </div>
            <button
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
              type="button"
              onClick={() => incrementQty(item.product._id)}
            >
              <span className="sr-only">Increment Quantity button</span>
              <BsPlus className="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <IconButton className="bg-gray-100 text-amber-700 transition hover:bg-slate-200">
              <BsHeart />
            </IconButton>
            <IconButton
              className="bg-rose-50 text-rose-500 transition hover:bg-rose-200"
              onClick={() => removeFromCart(item.product._id)}
            >
              <BsCartX />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
