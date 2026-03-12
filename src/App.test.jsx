import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders shop header', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const headerElement = screen.getByText(/90s shop/i);
  expect(headerElement).toBeInTheDocument();
});
