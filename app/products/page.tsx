import { fetchProductsPages } from "../lib/database/product/product.query";
import Pagination from "../ui/actionables/Pagination";
import Filter from "../ui/inputs/Filter";
import ProductList from "../ui/section/shared/ProductList";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
    category?: string;
  };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;
  const category = searchParams?.category || "";

  const totalPages = await fetchProductsPages(query, category);

  return (
    <main id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Products</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Shop your favorite taste of coffee
          </p>
          <div className="mb-4">
            <Filter />
          </div>
          <div className="mb-4">
            <ProductList
              query={query}
              currentPage={currentPage}
              category={category}
            />
          </div>
          <div>
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </section>
    </main>
  );
}
