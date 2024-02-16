"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Button from "@/app/ui/actionables/buttons/Button";
import TextInput from "@/app/ui/inputs/TextInput";
import { useCartStore } from "@/app/lib/store/cart";

interface ShippingFormProps {
  className?: string;
}

const ShippingFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, { message: "Name must be 3 or more characters long" }),

  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .min(3, { message: "Phone must be 3 or more characters long" }),

  address: z
    .string({
      required_error: "Address is required",
    })
    .min(3, { message: "Address must be 3 or more characters long" }),
});

type ErrorState = {
  name?: string[];
  email?: string[];
  phone?: string[];
  address?: string[];
};

export default function ShippingForm({ className }: ShippingFormProps) {
  const [error, setError] = useState<ErrorState>();
  const router = useRouter();

  const { saveShipping, shipping } = useCartStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Validate form fields using Zod
    const validatedFields = ShippingFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      setError(validatedFields.error.flatten().fieldErrors);
      return;
    }

    saveShipping(validatedFields.data);
    router.push("/checkout/payment");
  };

  return (
    <form
      className={`flex flex-col gap-4 px-6 py-4 ${className}`}
      onSubmit={handleSubmit}
    >
      {/* Name */}
      <TextInput
        name="name"
        id="name"
        type="text"
        label="Name"
        placeholder="Name"
        defaultValue={shipping.name}
        error={error?.name?.join(", ")}
      />

      {/* Email */}
      <TextInput
        name="email"
        id="email"
        type="email"
        label="Email"
        placeholder="Email"
        defaultValue={shipping.email}
        error={error?.email?.join(", ")}
      />

      {/* Phone */}
      <TextInput
        name="phone"
        id="phone"
        type="tel"
        label="Phone"
        placeholder="Phone"
        defaultValue={shipping.phone}
        error={error?.phone?.join(", ")}
      />

      {/* Address */}
      <TextInput
        name="address"
        id="address"
        type="text"
        label="Address"
        placeholder="Address"
        defaultValue={shipping.address}
        error={error?.address?.join(", ")}
      />

      <Button label="Proceed to Payment" type="submit" />
    </form>
  );
}
