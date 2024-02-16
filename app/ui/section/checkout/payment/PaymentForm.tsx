"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Button from "@/app/ui/actionables/buttons/Button";
import Radio from "@/app/ui/inputs/Radio";
import { useCartStore } from "@/app/lib/store/cart";

interface PaymentFormProps {
  className?: string;
}

const PaymentFormSchema = z.object({
  paymentMethod: z.string({
    required_error: "Payment method is required",
  }),
});

type ErrorState = {
  paymentMethod?: string[];
};

export default function PaymentForm({ className }: PaymentFormProps) {
  const [error, setError] = useState<ErrorState>();
  const router = useRouter();

  const { savePayment } = useCartStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    // Validate form fields using Zod
    const validatedFields = PaymentFormSchema.safeParse({
      paymentMethod: formData.get("payment_method"),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      setError(validatedFields.error.flatten().fieldErrors);
      return;
    }

    // Save payment now
    savePayment(validatedFields.data);
    router.push("/checkout/placeorder");
  };

  return (
    <form
      className={`flex flex-col gap-4 px-6 py-4 ${className}`}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4">
        {/* PayPal */}
        <Radio
          name="payment_method"
          id="paypal"
          label="PayPal"
          value="paypal"
        />

        {/* Credit Card */}
        <Radio
          name="payment_method"
          id="credit_card"
          label="Credit Card"
          value="credit_card"
        />

        {/* In Person */}
        <Radio
          name="payment_method"
          id="in_person"
          label="In Person"
          value="in_person"
        />
      </div>

      {error?.paymentMethod && (
        <p className="text-red-500">{error?.paymentMethod}</p>
      )}

      <Button type="submit" label="Continue to Place Order" />
    </form>
  );
}
