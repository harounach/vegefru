"use client";

import { BsHeart, BsCartPlus, BsCartX } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { useCartStore } from "@/app/lib/store/cart";
import { isInCart } from "@/app/lib/utils/cartUtils";
import type { Product } from "@/app/lib/definitions";

export default function CoffeeActions({ product }: { product: Product }) {
  const { items } = useCartStore();
  const isProductInCart = isInCart(product._id.toString(), items);

  return (
    <div className="flex items-center justify-end gap-2">
      <FavoriteButton />

      {isProductInCart ? (
        <RemoveFromCartButton id={product._id} />
      ) : (
        <AddToCartButton product={product} />
      )}
    </div>
  );
}

function FavoriteButton() {
  return (
    <IconButton className="bg-white text-rose-500 shadow-lg transition hover:bg-gray-200">
      <BsHeart />
    </IconButton>
  );
}

function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCartStore();

  return (
    <IconButton
      className="bg-white text-amber-500 shadow-lg transition hover:bg-gray-200"
      onClick={() => addToCart(product)}
    >
      <BsCartPlus />
    </IconButton>
  );
}

function RemoveFromCartButton({ id }: { id: string }) {
  const { removeFromCart } = useCartStore();

  return (
    <IconButton
      className="bg-white text-rose-500 shadow-lg transition hover:bg-gray-200"
      onClick={() => removeFromCart(id)}
    >
      <BsCartX />
    </IconButton>
  );
}
