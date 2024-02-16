import LoginForm from "@/app/ui/section/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="page" id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Login</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Login to your Account
          </p>
          <div className="mx-auto max-w-sm rounded bg-white">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
