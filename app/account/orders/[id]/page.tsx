import AccountOrderSummary from "@/app/ui/section/account/orders/AccountOrderSummary";
import AccountOrderShippingCard from "@/app/ui/section/account/orders/AccountOrderShippingCard";
import AccountOrderPaymentCard from "@/app/ui/section/account/orders/AccountOrderPaymentCard";
import AccountOrderItemsList from "@/app/ui/section/account/orders/AccountOrderItemsList";
import { fetchSingleOrder } from "@/app/lib/database/order/order.query";
import { notFound } from "next/navigation";

export default async function AccountOrderDetailPage({
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
            Review order ({order._id.toString()})
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-6">
            <AccountOrderSummary order={order} />
            <AccountOrderShippingCard order={order} />
            <AccountOrderPaymentCard order={order} />
            <AccountOrderItemsList orderItems={order.items} />
          </div>
        </div>
      </section>
    </>
  );
}
