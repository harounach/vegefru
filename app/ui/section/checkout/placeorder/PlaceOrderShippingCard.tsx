// "use client";

import { BsPencilFill } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import { shippingData as shipping } from "@/app/lib/data";
// import { useCartStore } from "@/app/lib/store/cart";

interface PlaceOrderShippingCardProps {
  className?: string;
}

export default function PlaceOrderShippingCard({
  className,
}: PlaceOrderShippingCardProps) {
  // const shipping = useCartStore((state) => state.shipping);

  return (
    <div className={`flex flex-col gap-4 rounded bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">
          Shipping
        </h3>
        <IconLinkButton url="/checkout/shipping" custom="content-card__btn">
          <BsPencilFill />
        </IconLinkButton>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-4">
          <span className="text-slate-900">Name:</span>
          <span className="text-slate-700">{shipping.name}</span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-slate-900">Email:</span>
          <span className="text-slate-700">{shipping.email}</span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-slate-900">Phone:</span>
          <span className="text-slate-700">{shipping.phone}</span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-slate-900">Address:</span>
          <span className="text-slate-700">
            {/* 4200 Martin Luther King Boulevard Houston, TX, United States */}
            {shipping.address}
          </span>
        </div>
      </div>
    </div>
  );
}
