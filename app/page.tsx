import LinkButton from "@/app/ui/actionables/buttons/LinkButton";
import FeaturedProductList from "./ui/section/shared/FeaturedProductList";

export default async function HomePage() {
  return (
    <main id="content">
      <section className="bg-zinc-100">
        <div className="relative h-96 w-full bg-[url('/images/hero.jpg')]  bg-cover pb-6 before:absolute before:z-10 before:h-full before:w-full  before:bg-gray-900/15">
          <div className="relative z-30 flex h-full flex-col items-center justify-center gap-4 bg-transparent">
            <h1 className="text-4xl font-bold text-white">
              Find fruits and vegetables for happy family dinner
            </h1>
            <LinkButton label="Start Shopping" url="/products" />
          </div>
        </div>
      </section>
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h2 className="mb-4 text-2xl font-semibold">Featured</h2>
          <FeaturedProductList />
        </div>
      </section>
      <section></section>
    </main>
  );
}
