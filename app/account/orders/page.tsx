import AccountOrderTable from "@/app/ui/actionables/table/AccountOrderTable";
// import { auth } from "@/auth";

export default async function AccountOrdersPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  // const session = await auth();
  // const userId = session?.user ? session?.user._id : "";

  return (
    <>
      <section className="bg-zinc-100" id="content">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            Order History
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            View your order history
          </p>
          <AccountOrderTable currentPage={currentPage} userId={""} />
        </div>
      </section>
    </>
  );
}
