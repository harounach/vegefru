import AdminCoffeeList from "@/app/ui/section/admin/products/all/AdminCoffeeList";

export default async function AdminProductListPage({
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

  return (
    <>
      <section id="content">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Products</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            View and manage your products
          </p>

          <div className="mx-auto max-w-lg">
            <AdminCoffeeList
              query={query}
              currentPage={currentPage}
              category={category}
            />
          </div>
        </div>
      </section>
    </>
  );
}
