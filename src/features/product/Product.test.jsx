import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithProviders } from '../../test/renderWithProviders';
import { Product } from './Product';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return { ...actual, useParams: vi.fn() };
});

vi.mock('../../data/products', () => ({
  default: {
    a: { name: 'Product A', price: 10, image: '/a.jpg' },
    b: { name: 'Product B', price: 25.5, image: '/b.jpg' },
  },
}));

const { useParams } = await import('react-router');

describe('Product', () => {
  describe('when product exists', () => {
    beforeEach(() => {
      useParams.mockReturnValue({ id: 'a' });
    });

    test('renders product name', () => {
      renderWithProviders(<Product />);
      expect(screen.getByRole('heading', { name: 'Product A' })).toBeInTheDocument();
    });

    test('renders product price', () => {
      renderWithProviders(<Product />);
      expect(screen.getByText('$10.00')).toBeInTheDocument();
    });

    test('renders product image', () => {
      renderWithProviders(<Product />);
      const img = screen.getByAltText('Product A');
      expect(img).toHaveAttribute('src', '/a.jpg');
    });

    test('renders add to cart button', () => {
      renderWithProviders(<Product />);
      expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });

    test('clicking add to cart shows quantity badge', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Product />);

      await user.click(screen.getByRole('button', { name: /add to cart/i }));

      expect(screen.getByRole('status')).toHaveTextContent('1');
    });
  });

  describe('when product does not exist', () => {
    beforeEach(() => {
      useParams.mockReturnValue({ id: 'nonexistent' });
    });

    test('renders not found message', () => {
      renderWithProviders(<Product />);
      expect(screen.getByText('Product not found.')).toBeInTheDocument();
    });
  });
});
