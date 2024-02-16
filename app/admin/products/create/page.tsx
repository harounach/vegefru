import CreateProductForm from "@/app/ui/section/admin/products/create/CreateProductForm";

export default function CreateProductPage() {
  return (
    <>
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            Add Product
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Create new product
          </p>
          <div className="mx-auto max-w-sm rounded bg-white">
            <CreateProductForm />
          </div>
        </div>
      </section>
    </>
  );
}
