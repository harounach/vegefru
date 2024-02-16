import RegisterForm from "@/app/ui/section/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="page" id="content">
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Register</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Create your account to customize your shopping experience
          </p>
          <div className="mx-auto max-w-sm rounded bg-white">
            <RegisterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
