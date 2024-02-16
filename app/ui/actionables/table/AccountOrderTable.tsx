import AccountOrderTableRow from "./AccountOrderTableRow";
import { fetchPagedUserOrders } from "@/app/lib/database/order/order.query";
import Pagination from "../Pagination";

interface AccountOrderTableProps {
  userId: string;
  currentPage: number;
  className?: string;
}

export default async function AccountOrderTable({
  userId,
  currentPage,
  className,
}: AccountOrderTableProps) {
  const { orders, totalPages } = await fetchPagedUserOrders(
    userId,
    currentPage,
  );

  const orderRows = orders.map((order) => {
    return <AccountOrderTableRow key={order._id.toString()} order={order} />;
  });

  return (
    <>
      <div className={`relative overflow-x-auto ${className}`}>
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
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
