// "use client";

import CreateOrderButton from "./CreateOrderButton";
import { getSummary } from "@/app/lib/utils/summary";
// import { useCartStore } from "@/app/lib/store/cart";
import {
  cartItemsData as items,
  shippingData as shipping,
  paymentData as payment,
} from "@/app/lib/data";

interface PlaceOrderSummaryProps {
  userId: string;
  className?: string;
}

export default function PlaceOrderSummary({
  userId,
  className,
}: PlaceOrderSummaryProps) {
  // const { shipping, payment, items } = useCartStore();
  const summary = getSummary(items);

  return (
    <div
      className={`inline-flex min-w-96 grow flex-col items-center justify-center gap-6 rounded bg-white p-4 ${className}`}
    >
      <h2 className="font-sans text-xl font-medium text-slate-900">Summary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Items</span>
          <span className="text-slate-900">{summary.count}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Subtotal</span>
          <span className="text-slate-900">${summary.subtotal}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Shipping</span>
          <span className="text-slate-900">Free</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Tax</span>
          <span className="text-slate-900">${summary.tax}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-600">Total</span>
          <span className="font-semibold text-slate-900">${summary.total}</span>
        </div>

        <CreateOrderButton
          userId={userId}
          shipping={shipping}
          payment={payment}
          items={items}
        />
      </div>
    </div>
  );
}
