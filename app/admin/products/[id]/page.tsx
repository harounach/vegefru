import AdminReviewList from "@/app/ui/section/admin/products/single/AdminReviewList";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import { notFound } from "next/navigation";
import Image from "next/image";
import IconLinkButton from "@/app/ui/actionables/buttons/IconLinkButton";
import { BsPencilFill } from "react-icons/bs";
import Rating from "@/app/ui/misc/Rating";
import DeleteButton from "@/app/ui/section/admin/products/single/DeleteButton";

export default async function ProductDetailPage({
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
      <section>
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            {product.title}
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            View product details
          </p>

          <div className="mx-auto max-w-lg">
            {/* Detail */}
            <div className="mb-6 flex flex-col gap-4 rounded bg-white p-4">
              <Image
                src={product.image}
                width={420}
                height={360}
                alt={product.title}
                className="w-full object-cover"
              />

              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-medium text-slate-900">
                  {product.title}
                </h2>
                <h2 className="text-lg font-medium text-amber-600">{`$${product.price}`}</h2>
              </div>
              <div className="flex items-center gap-2">
                <Rating value={product.rating} />
                <span className="text-sm text-slate-700">
                  ({product.numReviews})
                </span>
              </div>
              <p className="text-base text-slate-700">{product.desc}</p>
              <div className="flex items-center justify-end gap-4">
                <DeleteButton id={product._id} />
                <EditButton id={product._id} />
              </div>
            </div>

            {/* Review list */}
            <AdminReviewList productId={product._id.toString()} />
          </div>
        </div>
      </section>
    </>
  );
}

function EditButton({ id }: { id: string }) {
  return (
    <IconLinkButton
      url={`/admin/products/${id}/edit`}
      title="Edit"
      className="bg-slate-100 text-slate-900 transition hover:bg-slate-200"
    >
      <BsPencilFill />
    </IconLinkButton>
  );
}
