import { calculateCartTotal, formatPrice } from './cartUtils';
import { cartReducer } from '../context/CartContext';

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

describe('cartReducer', () => {
  test('returns state unchanged for unknown action type', () => {
    const state = { '1': 2 };
    expect(cartReducer(state, { type: 'UNKNOWN' })).toBe(state);
  });
});

describe('cart total integration', () => {
  const products = {
    '1': { price: 10 },
    '2': { price: 25.5 },
    '3': { price: 7.99 },
  };

  const addToCart = (id) => ({ type: 'ADD_TO_CART', payload: id });
  const removeFromCart = (id) => ({ type: 'REMOVE_FROM_CART', payload: id });

  test('adding a single item once gives its price as total', () => {
    const cart = cartReducer({}, addToCart('1'));
    expect(calculateCartTotal(cart, products)).toBe(10);
  });

  test('adding the same item multiple times multiplies price by quantity', () => {
    let cart = cartReducer({}, addToCart('2'));
    cart = cartReducer(cart, addToCart('2'));
    cart = cartReducer(cart, addToCart('2'));
    expect(calculateCartTotal(cart, products)).toBe(76.5);
  });

  test('adding multiple different items sums all price × qty', () => {
    let cart = cartReducer({}, addToCart('1'));
    cart = cartReducer(cart, addToCart('1'));
    cart = cartReducer(cart, addToCart('2'));
    cart = cartReducer(cart, addToCart('3'));
    expect(calculateCartTotal(cart, products)).toBe(53.49);
  });

  test('removing an item excludes it from the total', () => {
    let cart = cartReducer({}, addToCart('1'));
    cart = cartReducer(cart, addToCart('2'));
    cart = cartReducer(cart, addToCart('3'));
    cart = cartReducer(cart, removeFromCart('2'));
    expect(calculateCartTotal(cart, products)).toBeCloseTo(17.99);
  });

  test('removing all items gives a total of 0', () => {
    let cart = cartReducer({}, addToCart('1'));
    cart = cartReducer(cart, addToCart('2'));
    cart = cartReducer(cart, removeFromCart('1'));
    cart = cartReducer(cart, removeFromCart('2'));
    expect(calculateCartTotal(cart, products)).toBe(0);
  });
});
