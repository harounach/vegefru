import ShippingForm from "@/app/ui/section/checkout/shipping/ShippingForm";

export default function ShippingPage() {
  return (
    <main className="page" id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Shipping</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Specify your shipping info to receive your coffee
          </p>
          <div className="mx-auto max-w-sm rounded bg-white">
            <ShippingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
