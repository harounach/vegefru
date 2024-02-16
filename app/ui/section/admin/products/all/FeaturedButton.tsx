"use client";

import { useFormState } from "react-dom";
import { BsStarFill, BsStar } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { markProductAsFeaturedAction } from "@/app/lib/actions/product.action";

interface FeaturedButtonProps {
  productId: string;
  isFeatured: boolean;
}

export default function FeaturedButton({
  productId,
  isFeatured,
}: FeaturedButtonProps) {
  const icon = isFeatured ? <BsStarFill /> : <BsStar />;

  const initialState = { message: "" };
  const markProductAsFeatured = markProductAsFeaturedAction.bind(
    null,
    productId,
  );
  const [state, dispatch] = useFormState(markProductAsFeatured, initialState);

  return (
    <form action={dispatch}>
      <IconButton
        title="Mark as Featured"
        className="bg-slate-100 text-slate-900 transition hover:bg-slate-200"
      >
        {icon}
      </IconButton>
    </form>
  );
}
