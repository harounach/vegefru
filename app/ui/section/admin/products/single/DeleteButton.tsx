"use client";

import { deleteProductAction } from "@/app/lib/actions/product.action";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { useFormState } from "react-dom";
import { BsTrash3Fill } from "react-icons/bs";

export default function DeleteButton({ id }: { id: string }) {
  const initialState = { message: "" };
  const deleteProductWithId = deleteProductAction.bind(null, id);
  const [state, dispatch] = useFormState(deleteProductWithId, initialState);

  return (
    <form action={dispatch}>
      <IconButton
        title="Delete"
        className="bg-red-50 text-red-600 transition hover:bg-red-100"
      >
        <BsTrash3Fill />
      </IconButton>
    </form>
  );
}
