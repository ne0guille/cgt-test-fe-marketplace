import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../test/renderWithProviders';
import { buildProduct } from '../../../test/factories';
import { ProductCard } from './ProductCard';

const mockProduct = buildProduct();

function renderProductCard(id = '1', product = mockProduct) {
  return renderWithProviders(<ProductCard id={id} product={product} />);
}

describe('ProductCard', () => {
  describe('rendering', () => {
    test('renders the "Add to cart" button', () => {
      renderProductCard();
      expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });

    test('does not show quantity badge before adding to cart', () => {
      renderProductCard();
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });
  });

  describe('adding to cart', () => {
    test('clicking "Add to cart" shows quantity badge with 1', async () => {
      const user = userEvent.setup();
      renderProductCard();

      await user.click(screen.getByRole('button', { name: /add to cart/i }));

      expect(screen.getByRole('status')).toHaveTextContent('1');
    });

    test('clicking "Add to cart" multiple times increments quantity', async () => {
      const user = userEvent.setup();
      renderProductCard();

      const button = screen.getByRole('button', { name: /add to cart/i });
      await user.click(button);
      await user.click(button);

      expect(screen.getByRole('status')).toHaveTextContent('2');
    });

    test('clicking "Add to cart" does not navigate', async () => {
      const user = userEvent.setup();
      renderProductCard();

      await user.click(screen.getByRole('button', { name: /add to cart/i }));

      expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });
  });
});
