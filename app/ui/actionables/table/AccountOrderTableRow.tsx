import { BsEye } from "react-icons/bs";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import Badge from "@/app/ui/misc/Badge";
import { formatFriendyDate } from "@/app/lib/utils/dateUtils";
import { truncateText } from "@/app/lib/utils/textUtils";
import type { Order } from "@/app/lib/definitions";

interface AccountOrderTableRowProps {
  order: Order;
  className?: string;
}

export default function AccountOrderTableRow({
  order,
  className,
}: AccountOrderTableRowProps) {
  const paymentBadge = order.isPaid ? (
    <Badge label="Paid" color="green" />
  ) : (
    <Badge label="Not Paid" color="red" />
  );

  const deliveryBadge = order.isDelivered ? (
    <Badge label="Delivered" color="green" />
  ) : (
    <Badge label="Not Delivered" color="red" />
  );

  return (
    <tr className={`border-b bg-white ${className}`}>
      <td className="px-6 py-4">{truncateText(order._id)}</td>
      <td className="px-6 py-4 text-nowrap">{formatFriendyDate(order.createdAt)}</td>
      <td className="px-6 py-4">{`$${order.totalPrice}`}</td>
      <td className="px-6 py-4">{paymentBadge}</td>
      <td className="px-6 py-4">{deliveryBadge}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <IconLinkButton
            url={`/account/orders/${order._id}`}
            className="bg-blue-50 text-blue-600 transition hover:bg-blue-100"
          >
            <BsEye />
          </IconLinkButton>
        </div>
      </td>
    </tr>
  );
}
