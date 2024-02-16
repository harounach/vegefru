import Badge from "@/app/ui/misc/Badge";
import { Order } from "@/app/lib/definitions";

interface AdminOrderShippingCardProps {
  order: Order;
  className?: string;
}

export default function AdminOrderShippingCard({
  order,
  className,
}: AdminOrderShippingCardProps) {
  const shipping = order.shipping;

  const deliveryBadge = order.isDelivered ? (
    <Badge label="Delivered" color="green" />
  ) : (
    <Badge label="Not Delivered" color="red" />
  );

  return (
    <div className={`flex flex-col gap-4 rounded bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">
          Shipping
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-4">
          <span className="text-base font-medium text-slate-900">Name:</span>
          <span className="text-slate-700">{shipping.name}</span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-base font-medium text-slate-900">Email:</span>
          <span className="text-slate-700">{shipping.email}</span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-base font-medium text-slate-900">Phone:</span>
          <span className="text-slate-700">{shipping.phone}</span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-base font-medium text-slate-900">Address:</span>
          <span className="text-slate-700">
            {/* 4200 Martin Luther King Boulevard Houston, TX, United States */}
            {shipping.address}
          </span>
        </div>
        <div className="flex items-baseline gap-4">
          <span className="text-base font-medium text-slate-900">Status:</span>
          <span className="text-slate-700">{deliveryBadge}</span>
        </div>
      </div>
    </div>
  );
}
