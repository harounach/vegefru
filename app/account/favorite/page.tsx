import { favoriteProducts } from "@/app/lib/data";
import FavoriteCoffeeList from "@/app/ui/section/account/favorite/FavoriteCoffeeList";

export default function AccountFavoritePage() {
  return (
    <>
      <section id="content">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Favorites</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            Checkout your favorite coffee
          </p>
          <div className="mx-auto max-w-lg">
            <FavoriteCoffeeList favoriteProducts={favoriteProducts} />
          </div>
        </div>
      </section>
    </>
  );
}
