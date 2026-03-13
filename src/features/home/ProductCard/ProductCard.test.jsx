import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { CartProvider } from '../../../context/CartContext';
import ProductCard from './ProductCard';

const mockProduct = { name: 'Test Product', price: 9.99, image: '/test.jpg' };

function renderProductCard(id = '1', product = mockProduct) {
  return render(
    <CartProvider>
      <MemoryRouter>
        <ProductCard id={id} product={product} />
      </MemoryRouter>
    </CartProvider>,
  );
}

test('renders the "Add to cart" button', () => {
  renderProductCard();
  expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
});

test('does not show quantity badge before adding to cart', () => {
  renderProductCard();

  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});

test('clicking "Add to cart" shows quantity badge with 1', async () => {
  renderProductCard();

  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

  expect(screen.getByRole('status')).toHaveTextContent('1');
});

test('clicking "Add to cart" multiple times increments quantity', async () => {
  renderProductCard();

  const button = screen.getByRole('button', { name: /add to cart/i });
  await userEvent.click(button);
  await userEvent.click(button);

  expect(screen.getByRole('status')).toHaveTextContent('2');
});

test('clicking "Add to cart" does not navigate', async () => {
  renderProductCard();

  await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

  expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  expect(screen.getByText('Test Product')).toBeInTheDocument();
});
