import AccountSidebar from "@/app/ui/navigation/AccountSidebar";

export default function AccoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <AccountSidebar />
      <div className="w-full bg-zinc-100 md:px-4">{children}</div>
    </main>
  );
}
