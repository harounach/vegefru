import AdminSidebar from "@/app/ui/navigation/sidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <AdminSidebar />
      <div className="w-full bg-zinc-100 md:px-4">{children}</div>
    </main>
  );
}
