import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Cart } from './Cart';

vi.mock('../../data/products', () => ({
  default: {
    a: { name: 'Product A', price: 10, image: '/a.jpg' },
    b: { name: 'Product B', price: 25.5, image: '/b.jpg' },
  },
}));

function renderCart(initialCart = {}) {
  return renderWithProviders(<Cart />, { initialCart });
}

describe('Cart', () => {
  describe('when empty', () => {
    test('shows empty message', () => {
      renderCart();
      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });

    test('does not render the total', () => {
      renderCart();
      expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
    });
  });

  describe('with items', () => {
    test('renders a single item with name, price, and quantity', () => {
      renderCart({ a: 2 });

      expect(screen.getByText(/Product A/)).toBeInTheDocument();
      expect(screen.getByText(/\$10\.00/)).toBeInTheDocument();
      expect(screen.getByText(/× 2/)).toBeInTheDocument();
    });

    test('renders multiple items as list items', () => {
      renderCart({ a: 1, b: 3 });

      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(2);
      expect(screen.getByText(/Product A/)).toBeInTheDocument();
      expect(screen.getByText(/Product B/)).toBeInTheDocument();
    });

    test('displays the correct total', () => {
      renderCart({ a: 2, b: 1 });

      expect(screen.getByText(/\$45\.50/)).toBeInTheDocument();
    });

    test('renders product images with correct alt text', () => {
      renderCart({ a: 1 });

      const img = screen.getByAltText('Product A');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', '/a.jpg');
    });
  });

  describe('removing items', () => {
    test('clicking remove button removes an item and updates the view', async () => {
      const user = userEvent.setup();
      renderCart({ a: 1, b: 1 });

      expect(screen.getAllByRole('listitem')).toHaveLength(2);

      const items = screen.getAllByRole('listitem');
      const removeButton = within(items[0]).getByRole('button', { name: /remove from cart/i });
      await user.click(removeButton);

      expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });

    test('removing the last item shows empty message', async () => {
      const user = userEvent.setup();
      renderCart({ a: 1 });

      await user.click(screen.getByRole('button', { name: /remove from cart/i }));

      expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    });
  });
});
