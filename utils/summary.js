export const generateSummary = (cartProducts) => {
  const count = cartProducts.length;
  const prices = cartProducts.map((product) => {
    return product.price;
  });

  const subtotal = prices.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const shipping = 3;
  const tax = 1;

  const total = subtotal + shipping + tax;

  return {
    count,
    shipping,
    tax,
    subtotal,
    total,
  };
};
