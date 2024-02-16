"use client";

import { useFormState } from "react-dom";
import { BsTrash } from "react-icons/bs";
import IconButton from "@/app/ui/actionables/buttons/IconButton";
import { deleteUserAction } from "@/app/lib/actions/user.action";

export default function DeleteUserButton({ userId }: { userId: string }) {
  const initialState = { message: "" };
  const deleteUser = deleteUserAction.bind(null, userId);
  const [state, dispatch] = useFormState(deleteUser, initialState);

  return (
    <form action={dispatch}>
      <IconButton
        className="bg-red-50 text-red-600 transition hover:bg-red-100"
        title="Delete"
      >
        <BsTrash />
      </IconButton>
    </form>
  );
}
