import ProfileManageAccountForm from "@/app/ui/section/account/profile/ProfileManageAccountForm";
import { auth } from "@/auth";

export default async function AccountProfilePage() {
  const session = await auth();
  const userId = session?.user ? session?.user._id : "";
  // const userId = "";

  return (
    <>
      <section id="content">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">
            Manage Account
          </h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Customize and manage your account
          </p>

          <div className="mx-auto max-w-sm rounded bg-white">
            <ProfileManageAccountForm userId={userId} />
          </div>
        </div>
      </section>
    </>
  );
}
