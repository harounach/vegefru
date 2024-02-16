import EditProductForm from "@/app/ui/section/admin/products/edit/EditProductForm";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import { notFound } from "next/navigation";

export default async function AdminEditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchSingleProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            Edit {`"${product.title}"`}
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Edit your coffee
          </p>
          <div className="mx-auto max-w-sm rounded bg-white">
            <EditProductForm product={product} />
          </div>
        </div>
      </section>
    </>
  );
}
