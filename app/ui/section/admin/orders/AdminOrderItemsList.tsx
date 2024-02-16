import AdminOrderItemCard from "./AdminOrderItemCard";
import { OrderItem } from "@/app/lib/definitions";

interface AdminOrderItemsListProps {
  orderItems: Array<OrderItem>;
  className?: string;
}

export default function AdminOrderItemsList({
  orderItems,
  className,
}: AdminOrderItemsListProps) {
  return (
    <div className={`flex flex-col gap-4 rounded bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">Items</h3>
      </div>
      <div className="flex flex-col gap-4">
        {orderItems.map((orderItem) => {
          return (
            <AdminOrderItemCard
              key={orderItem.product._id}
              orderItem={orderItem}
            />
          );
        })}
      </div>
    </div>
  );
}
