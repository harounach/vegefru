import { fetchSingleProduct } from "@/app/lib/database/product/product.query";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const coffeeProduct = await fetchSingleProduct(params.id);
  return <div id="content">page</div>;
}
