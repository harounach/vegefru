import AdminOrderTableRow from "@/app/ui/section/admin/orders/AdminOrderTableRow";
import { fetchPagedOrders } from "@/app/lib/database/order/order.query";
import Pagination from "@/app/ui/actionables/Pagination";

interface AdminOrderTableProps {
  currentPage: number;
  className?: string;
}

export default async function AdminOrderTable({
  currentPage,
  className,
}: AdminOrderTableProps) {
  const { orders, totalPages } = await fetchPagedOrders(currentPage);

  const orderRows = orders.map((order) => {
    return <AdminOrderTableRow key={order._id} order={order} />;
  });

  return (
    <>
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
      <div className="mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
