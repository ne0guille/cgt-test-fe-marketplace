export function calculateCartTotal(cart, products) {
  return Object.entries(cart).reduce(
    (sum, [id, qty]) => sum + products[id].price * qty,
    0
  );
}
