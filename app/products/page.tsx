import { fetchProductsPages } from "../lib/database/product/product.query";
import Pagination from "../ui/actionables/Pagination";
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

  const totalPages = await fetchProductsPages(query);

  return (
    <main id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h2 className="mb-4 text-center text-lg font-medium">Products</h2>
          <p className="font-base mb-6 text-center text-base">
            Shop your favorite taste of coffee
          </p>
          <div className="mb-4">
            <ProductList query={query} currentPage={currentPage} />
          </div>
          <div>
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </section>
    </main>
  );
}
