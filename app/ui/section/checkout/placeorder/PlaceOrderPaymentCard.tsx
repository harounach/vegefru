// "use client";

import { BsPencilFill } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import { paymentData as payment } from "@/app/lib/data";
// import { useCartStore } from "@/app/lib/store/cart";

interface PlaceOrderPaymentCardProps {
  className?: string;
}

export default function PlaceOrderPaymentCard({
  className,
}: PlaceOrderPaymentCardProps) {
  // const payment = useCartStore((state) => state.payment);

  return (
    <div className={`flex flex-col gap-4 rounded bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">
          Payment
        </h3>
        <IconLinkButton url="/checkout/payment" custom="content-card__btn">
          <BsPencilFill />
        </IconLinkButton>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-4">
          <span className="text-slate-900">Payment method:</span>
          <span className="text-slate-700">{payment.paymentMethod}</span>
        </div>
      </div>
    </div>
  );
}
