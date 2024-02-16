import AdminOrderTableRow from "@/app/ui/section/admin/orders/AdminOrderTableRow";
import { fetchLatestOrders } from "@/app/lib/database/order/order.query";

interface AdminLatestOrdersTableProps {
  className?: string;
}

export default async function AdminLatestOrdersTable({
  className,
}: AdminLatestOrdersTableProps) {
  const orders = await fetchLatestOrders();

  const orderRows = orders.map((order) => {
    return <AdminOrderTableRow key={order._id.toString()} order={order} />;
  });

  return (
    <div className={`relative overflow-x-auto ${className}`}>
      <table className="w-full rounded text-left text-sm text-gray-500 rtl:text-right">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-6 py-3" scope="col">
              ID
            </th>
            <th className="px-6 py-3" scope="col">
              Date
            </th>
            <th className="px-6 py-3" scope="col">
              Total
            </th>
            <th className="px-6 py-3" scope="col">
              Paid
            </th>
            <th className="px-6 py-3" scope="col">
              Delivered
            </th>
            <th className="px-6 py-3" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{orderRows}</tbody>
      </table>
    </div>
  );
}
