"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/app/ui/actionables/buttons/Button";
import TextInput from "@/app/ui/inputs/TextInput";
import { authenticate } from "@/app/lib/actions/auth.action";

interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className }: LoginFormProps) {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(authenticate, initialState);

  return (
    <form
      className={`flex flex-col gap-4 px-6 py-4 ${className}`}
      action={dispatch}
    >
      {/* Email */}
      <TextInput
        name="email"
        id="email"
        type="email"
        label="Email"
        placeholder="Email"
      />

      {/* Password */}
      <TextInput
        name="password"
        id="password"
        type="password"
        label="Password"
        placeholder="Password"
      />

      <LoginButton />
      <p className="text-base text-slate-900">
        {"Don't have an account?"}{" "}
        <Link className="font-medium text-indigo-500" href="/register">
          Register
        </Link>
      </p>

      {state?.message && <p className="text-red-500">{state.message}</p>}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return <Button type="submit" disabled={pending} label="Login" />;
}
