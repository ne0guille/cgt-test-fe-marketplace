import { screen } from '@testing-library/react';
import { renderWithProviders } from './test/renderWithProviders';
import { App } from './App';

test('renders shop header', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/90s shop/i)).toBeInTheDocument();
});
