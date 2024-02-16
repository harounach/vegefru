import UsersList from "@/app/ui/section/admin/users/UsersList";

export default function AdminUsersPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
  };
}) {
  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <section className="bg-zinc-100" id="content">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Users</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            View and manage users
          </p>
          <div className="mx-auto max-w-md">
            <UsersList query={query} currentPage={currentPage} />
          </div>
        </div>
      </section>
    </>
  );
}
