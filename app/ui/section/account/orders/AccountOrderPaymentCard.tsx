import Badge from "@/app/ui/misc/Badge";
import { Order } from "@/app/lib/definitions";

interface AccountOrderPaymentCardProps {
  order: Order;
  className?: string;
}

export default function AccountOrderPaymentCard({
  order,
  className,
}: AccountOrderPaymentCardProps) {
  const payment = order.payment;

  const paymentBadge = order.isPaid ? (
    <Badge label="Paid" color="green" />
  ) : (
    <Badge label="Not Paid" color="red" />
  );

  return (
    <div className={`flex flex-col gap-4 rounded bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">
          Payment
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-4">
          <span className="text-base font-medium text-slate-900">Payment method:</span>
          <span className="text-slate-700">{payment.paymentMethod}</span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-base font-medium text-slate-900">Status:</span>
          <span className="text-slate-700">{paymentBadge}</span>
        </div>
      </div>
    </div>
  );
}
