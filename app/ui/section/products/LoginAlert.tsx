"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LoginAlert({ productId }: { productId: string }) {
  const pathname = usePathname();
  const searchParams = new URLSearchParams();
  searchParams.set("callbackUrl", pathname);
  const loginURL = `/login?${searchParams.toString()}`;

  return (
    <h3 className="bg-red-100 px-4 py-2 text-base font-normal">
      Please{" "}
      <Link className="font-semibold" href={loginURL}>
        Login
      </Link>{" "}
      to write a review
    </h3>
  );
}
