"use client";

import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
// import { useCartStore } from "@/app/lib/store/cart";

export default function CartButton() {
  // const { items } = useCartStore();
  const items = [12, 12];

  return (
    <div className="relative inline-flex cursor-pointer">
      <Link
        href="/cart"
        className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-slate-900"
      >
        <BsFillCartFill />
      </Link>

      {items.length > 0 && (
        <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 p-1 text-xs font-extrabold text-white">
          {items.length}
        </span>
      )}
    </div>
  );
}
