import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shop header', () => {
  render(<App />);
  const headerElement = screen.getByText(/90s shop/i);
  expect(headerElement).toBeInTheDocument();
});
