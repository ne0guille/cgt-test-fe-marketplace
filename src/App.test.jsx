import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CartProvider } from './context/CartContext';
import App from './App';

test('renders shop header', () => {
  render(<CartProvider><MemoryRouter><App /></MemoryRouter></CartProvider>);
  const headerElement = screen.getByText(/90s shop/i);
  expect(headerElement).toBeInTheDocument();
});
