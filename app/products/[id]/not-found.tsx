import NotFoundImage from "@/app/ui/misc/NotFoundImage";

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center  text-4xl font-semibold">
            Product Not Found
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            No such product in our menu
          </p>
          <div>
            <NotFoundImage />
          </div>
        </div>
      </section>
    </main>
  );
}
