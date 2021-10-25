import { useSelector } from "react-redux";
import { selectCartProducts } from "../state/features/cart/cartSlice";
import { generateSummary } from "../utils/summary";

export function useSummary() {
  const cartProducts = useSelector(selectCartProducts);
  return generateSummary(cartProducts);
}
