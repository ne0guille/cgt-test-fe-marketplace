export function calculateCartTotal(cart, products) {
  return Object.entries(cart).reduce(
    (sum, [id, qty]) => sum + products[id].price * qty,
    0
  );
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatPrice(amount) {
  return currencyFormatter.format(amount);
}
