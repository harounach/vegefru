import NotFoundImage from "@/app/ui/misc/NotFoundImage";

export default function OrderNotFound() {
  return (
    <>
      <section className="bg-zinc-100" id="content">
        <div className="container mx-auto px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            Order Not Found
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            No such order with this Id
          </p>
          <div>
            <NotFoundImage />
          </div>
        </div>
      </section>
    </>
  );
}
