import { getSummary } from "@/app/lib/utils/summary";
import { Order } from "@/app/lib/definitions";

interface AccountOrderSummaryProps {
  order: Order;
  className?: string;
}

export default function AccountOrderSummary({
  order,
  className,
}: AccountOrderSummaryProps) {
  const summary = getSummary(order.items);

  return (
    <div
      className={`inline-flex grow flex-col items-center justify-center gap-6 rounded bg-white p-4 sm:min-w-96 ${className}`}
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
          <span className="text-slate-900">${summary.shipping}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">Tax</span>
          <span className="text-slate-900">${summary.tax}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-600">Total</span>
          <span className="font-semibold text-slate-900">${summary.total}</span>
        </div>
      </div>
    </div>
  );
}
