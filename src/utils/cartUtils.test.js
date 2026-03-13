import { calculateCartTotal, formatPrice } from './cartUtils';

describe('calculateCartTotal', () => {
  const products = {
    '1': { price: 10 },
    '2': { price: 25.5 },
  };

  test('returns 0 for an empty cart', () => {
    expect(calculateCartTotal({}, products)).toBe(0);
  });

  test('calculates total for a single item', () => {
    expect(calculateCartTotal({ '1': 2 }, products)).toBe(20);
  });

  test('calculates total for multiple items', () => {
    expect(calculateCartTotal({ '1': 1, '2': 3 }, products)).toBe(86.5);
  });
});

describe('formatPrice', () => {
  test('formats a whole number', () => {
    expect(formatPrice(10)).toBe('$10.00');
  });

  test('formats a decimal number', () => {
    expect(formatPrice(9.99)).toBe('$9.99');
  });

  test('formats zero', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });
});
