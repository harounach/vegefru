import Button from "@/app/ui/actionables/buttons/Button";
import FeaturedProductList from "./ui/section/shared/FeaturedProductList";

export default async function HomePage() {
  return (
    <main id="content">
      <section className="container mx-auto pb-6 pt-4">
        <div className="relative  h-96  bg-[url('/images/hero.jpg')] bg-cover before:absolute before:z-10 before:h-full before:w-full  before:bg-gray-900/15">
          <div className="relative z-30 flex h-full flex-col items-center justify-center gap-4 bg-transparent">
            <h1 className="text-xl font-medium text-white">
              Find fruits and vegetables for happy family dinner
            </h1>
            <Button label="Start Shopping" />
          </div>
        </div>
      </section>
      <section className="bg-zinc-100">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h2 className="mb-4 text-lg font-medium">Featured</h2>
          <FeaturedProductList />
        </div>
      </section>
      <section></section>
    </main>
  );
}
