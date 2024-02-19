import PlaceOrderShippingCard from "@/app/ui/section/checkout/placeorder/PlaceOrderShippingCard";
import PlaceOrderPaymentCard from "@/app/ui/section/checkout/placeorder/PlaceOrderPaymentCard";
import PlaceOrderCartItemsList from "@/app/ui/section/checkout/placeorder/PlaceOrderCartItemsList";
import PlaceOrderSummary from "@/app/ui/section/checkout/placeorder/PlaceOrderSummary";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  const userId = session?.user ? session?.user._id : "";
  // const userId = "";

  return (
    <main className="page" id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            Place Order
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Review your info before placing your order
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {/* Shipping */}
              <PlaceOrderShippingCard />

              {/* Payment */}
              <PlaceOrderPaymentCard />

              {/* Items */}
              <PlaceOrderCartItemsList />
            </div>
            {/* Summary */}
            <div>
              <PlaceOrderSummary userId={userId} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
