import AdminOrderSummary from "@/app/ui/section/admin/orders/AdminOrderSummary";
import AdminOrderShippingCard from "@/app/ui/section/admin/orders/AdminOrderShippingCard";
import AdminOrderPaymentCard from "@/app/ui/section/admin/orders/AdminOrderPaymentCard";
import AdminOrderItemsList from "@/app/ui/section/admin/orders/AdminOrderItemsList";
import { fetchSingleOrder } from "@/app/lib/database/order/order.query";
import { notFound } from "next/navigation";

export default async function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const order = await fetchSingleOrder(params.id);

  if (!order) {
    notFound();
  }

  return (
    <>
      <section className="bg-zinc-100" id="content">
        <div className="container mx-auto px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Order</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Review order ({order._id})
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-6">
            <AdminOrderSummary order={order} />
            <AdminOrderShippingCard order={order} />
            <AdminOrderPaymentCard order={order} />
            <AdminOrderItemsList orderItems={order.items} />
          </div>
        </div>
      </section>
    </>
  );
}
