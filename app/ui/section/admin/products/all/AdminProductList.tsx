import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import AdminProductCard from "./AdminProductCard";

import {
  fetchFilteredProducts,
  fetchProductsPages,
} from "@/app/lib/database/product/product.query";
import Pagination from "@/app/ui/actionables/Pagination";

interface AdminProductListProps {
  query: string;
  currentPage: number;
  category: string;
  className?: string;
}

export default async function AdminProductList({
  query,
  currentPage,
  category,
  className,
}: AdminProductListProps) {
  const products = await fetchFilteredProducts(query, currentPage, category);
  const totalPages = await fetchProductsPages(query, category);

  return (
    <>
      <div
        className={`flex flex-col gap-4 divide-y overflow-hidden rounded bg-white p-4 ${className}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-sans text-xl font-medium text-slate-900">
            Fruits & Vegetables
          </h3>
          <LinkButton
            label="Create Product"
            url="/admin/products/create"
            className="content-card__btn"
          />
        </div>

        <div className="flex flex-col divide-y">
          {products.map((product) => {
            product._id = product._id.toString();
            return (
              <AdminProductCard
                key={product._id.toString()}
                product={product}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-4 bg-zinc-100">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
