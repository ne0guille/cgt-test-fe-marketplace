import { render, screen } from '@testing-library/react';
import { Price } from './Price';

describe('Price', () => {
  test('renders formatted price for a whole number', () => {
    render(<Price amount={10} />);
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  test('renders formatted price for a decimal number', () => {
    render(<Price amount={9.99} />);
    expect(screen.getByText('$9.99')).toBeInTheDocument();
  });

  test('renders formatted price for zero', () => {
    render(<Price amount={0} />);
    expect(screen.getByText('$0.00')).toBeInTheDocument();
  });
});
