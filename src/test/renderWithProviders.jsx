import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CartProvider } from '../context/CartContext';

export function renderWithProviders(ui, { initialCart = {}, route = '/' } = {}) {
  return render(
    <CartProvider initialCart={initialCart}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </CartProvider>,
  );
}
