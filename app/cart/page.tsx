import CartSummary from "@/app/ui/section/checkout/cart/CartSummary";
import CartItems from "@/app/ui/section/checkout/cart/CartItems";

export default function CartPage() {
  return (
    <main className="page" id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            Cart items
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Customize your cart before checkout
          </p>
          <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <CartItems />
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
