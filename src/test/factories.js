export function buildProduct(overrides = {}) {
  return { name: 'Test Product', price: 9.99, image: '/test.jpg', ...overrides };
}

export function buildCart(items = {}) {
  return items;
}
