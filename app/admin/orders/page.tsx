import AdminOrderTable from "@/app/ui/section/admin/orders/AdminOrderTable";

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <section id="content">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Orders</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            View and manage your orders
          </p>
          <AdminOrderTable currentPage={currentPage} />
        </div>
      </section>
    </>
  );
}
