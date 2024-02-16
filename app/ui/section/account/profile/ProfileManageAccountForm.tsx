"use client";

import { useFormState } from "react-dom";
import TextInput from "@/app/ui/inputs/TextInput";
import Button from "@/app/ui/actionables/buttons/Button";
import { changePasswordAction } from "@/app/lib/actions/user.action";

interface ProfileManageAccountFormProps {
  userId: string;
  className?: string;
}

export default function ProfileManageAccountForm({
  userId,
  className,
}: ProfileManageAccountFormProps) {
  const initialState = { message: "", errors: {} };
  const changePassword = changePasswordAction.bind(null, userId);
  const [state, dispatch] = useFormState(changePassword, initialState);

  return (
    <form
      className={`flex flex-col gap-4 px-6 py-4 ${className}`}
      action={dispatch}
    >
      {/* New Password */}
      <TextInput
        name="new_password"
        label="New Password"
        id="new_password"
        placeholder="New Password"
        type="password"
        error={state?.errors?.newPassword?.join(", ")}
      />

      {/* Confirm Password */}
      <TextInput
        name="confirm_password"
        label="Confirm Password"
        id="confirm_password"
        placeholder="Confirm Password"
        type="password"
        error={state?.errors?.confirmPassword?.join(", ")}
      />

      <Button type="submit" label="Update Profile" />

      {state?.message && <p className="text-red-500">{state?.message}</p>}
    </form>
  );
}
