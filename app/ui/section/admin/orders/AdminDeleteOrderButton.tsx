"use client";

import { useFormState } from "react-dom";
import { BsTrash3Fill } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { deleteOrderAction } from "@/app/lib/actions/order.action";

export default function AdminDeleteOrderButton({ id }: { id: string }) {
  const initialState = { message: "" };
  const deleteOrderWithId = deleteOrderAction.bind(null, id);
  const [state, dispatch] = useFormState(deleteOrderWithId, initialState);

  return (
    <form action={dispatch}>
      <IconButton
        title="Delete Order"
        className="bg-rose-50 text-rose-600 transition hover:bg-rose-100"
      >
        <BsTrash3Fill />
      </IconButton>
    </form>
  );
}
