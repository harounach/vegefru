import AccountOrderItemCard from "./AccountOrderItemCard";
import { OrderItem } from "@/app/lib/definitions";

interface AccountOrderItemsListProps {
  orderItems: Array<OrderItem>;
  className?: string;
}

export default function AccountOrderItemsList({
  orderItems,
  className,
}: AccountOrderItemsListProps) {
  return (
    <div className={`flex flex-col gap-4 rounded bg-white p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-xl font-medium text-slate-900">Items</h3>
      </div>
      <div className="flex flex-col gap-4">
        {orderItems.map((orderItem) => {
          return (
            <AccountOrderItemCard
              key={orderItem.product._id}
              orderItem={orderItem}
            />
          );
        })}
      </div>
    </div>
  );
}
