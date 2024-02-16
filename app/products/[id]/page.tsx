import { users } from "@/app/lib/data";
import { fetchSingleProduct } from "@/app/lib/database/product/product.query";
import ReviewList from "@/app/ui/section/products/ReviewList";
import WriteReview from "@/app/ui/section/products/WriteReview";
import Rating from "@/app/ui/misc/Rating";
import Image from "next/image";
import { notFound } from "next/navigation";
import CoffeeActions from "@/app/ui/section/products/CoffeeActions";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchSingleProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            {product.title}
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Customize your shopping
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Image
                className="mx-auto"
                width={400}
                height={400}
                alt={product.title}
                src={product.image}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {product.title}
                </h2>
                <h2 className="text-2xl font-semibold text-amber-600">
                  ${product.price}
                </h2>
              </div>
              {product.numReviews > 0 ||
                (true && (
                  <div className="flex items-center gap-2">
                    <Rating value={3.5} />
                    <span className="text-base font-normal text-slate-600">
                      ({product.numReviews})
                    </span>
                  </div>
                ))}
              <p className="text-base font-normal text-slate-600">
                {product.desc}
              </p>
              <CoffeeActions product={product} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          {/* Review grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* WriteReview */}
            <WriteReview
              name={users[1].name}
              email={users[1].email}
              productId={product._id.toString()}
            />

            {/* ReviewList */}
            <ReviewList productId={product._id.toString()} />
          </div>
        </div>
      </section>
    </main>
  );
}
